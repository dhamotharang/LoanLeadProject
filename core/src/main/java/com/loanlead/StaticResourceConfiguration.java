package com.loanlead;

import com.loanlead.auth.ResourceLoader;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Description;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.thymeleaf.spring5.SpringTemplateEngine;
import org.thymeleaf.spring5.view.ThymeleafViewResolver;
import org.thymeleaf.templatemode.TemplateMode;
import org.thymeleaf.templateresolver.FileTemplateResolver;

import java.io.File;
import java.util.Arrays;

@Configuration
public class StaticResourceConfiguration implements WebMvcConfigurer {

    private static final String DEV = "dev";
    private static final String CHARACTER_ENCODING = "UTF-8";
    private Environment env;

    public StaticResourceConfiguration(Environment env) {
        this.env = env;
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/ui").setViewName("redirect:/ui/");
        registry.addViewController("/ui/").setViewName("angular/index.html");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String profilePath = isDev() ? "web/target" : ".";
        registry
                .addResourceHandler("/login/**")
                .addResourceLocations("file:" + profilePath + "/ui/login/");
        registry
                .addResourceHandler("/ui/**")
                .addResourceLocations("file:" + profilePath + "/ui/angular/");
    }

    @Bean
    @Description("Thymeleaf template resolver serving HTML for EIM app")
    public FileTemplateResolver loanleadAppFileTemplateResolver() {
        FileTemplateResolver templateResolver = new FileTemplateResolver();
        if(isDev()){
            ResourceLoader.add(new File("./web/target/ui/"));
            templateResolver.setPrefix("./web/target/ui/");
        } else {
            templateResolver.setPrefix("./ui/");
        }
        templateResolver.setCacheable(false);
        templateResolver.setSuffix(".html");
        templateResolver.setTemplateMode(TemplateMode.HTML);
        templateResolver.setCharacterEncoding(CHARACTER_ENCODING);
        templateResolver.setCheckExistence(true);
        return templateResolver;
    }

    @Bean
    @Description("Thymeleaf template engine with Spring integration")
    public SpringTemplateEngine templateEngine() {
        SpringTemplateEngine templateEngine = new SpringTemplateEngine();
        templateEngine.addTemplateResolver(loanleadAppFileTemplateResolver());
        return templateEngine;
    }

    @Bean
    @Description("Thymeleaf view resolver")
    public ThymeleafViewResolver viewResolver() {
        ThymeleafViewResolver viewResolver = new ThymeleafViewResolver();
        viewResolver.setTemplateEngine(templateEngine());
        viewResolver.setCharacterEncoding(CHARACTER_ENCODING);
        return viewResolver;
    }

    private boolean isDev() {
        if(env.getActiveProfiles().length != 0){
            return Arrays.stream(env.getActiveProfiles()).anyMatch(profile -> profile.equalsIgnoreCase(DEV));
        } else {
            return false;
        }
    }
}