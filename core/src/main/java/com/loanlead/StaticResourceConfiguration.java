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

    private static final String CHARACTER_ENCODING = "UTF-8";

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/ui").setViewName("redirect:/ui/");
        registry.addViewController("/ui/").setViewName("angular/index.html");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String profilePath = ".";
        registry
                .addResourceHandler("/login/**")
                .addResourceLocations("file:" + profilePath + "/ui/login/");
        registry
                .addResourceHandler("/ui/**")
                .addResourceLocations("file:" + profilePath + "/ui/angular/");
        registry
                .addResourceHandler("/css/**")
                .addResourceLocations("file:" + profilePath + "/ui/css/");
        registry
                .addResourceHandler("/js/**")
                .addResourceLocations("file:" + profilePath + "/ui/js/");
        registry
                .addResourceHandler("/bootstrap-4.1.1/**")
                .addResourceLocations("file:" + profilePath + "/ui/bootstrap-4.1.1/");
        registry
                .addResourceHandler("/images/**")
                .addResourceLocations("file:" + profilePath + "/ui/images/");
    }

    @Bean
    public FileTemplateResolver loanleadAppFileTemplateResolver() {
        FileTemplateResolver templateResolver = new FileTemplateResolver();
        templateResolver.setPrefix("./ui/");
        templateResolver.setCacheable(false);
        templateResolver.setSuffix(".html");
        templateResolver.setTemplateMode(TemplateMode.HTML);
        templateResolver.setCharacterEncoding(CHARACTER_ENCODING);
        templateResolver.setCheckExistence(true);
        return templateResolver;
    }

    @Bean
    public SpringTemplateEngine templateEngine() {
        SpringTemplateEngine templateEngine = new SpringTemplateEngine();
        templateEngine.addTemplateResolver(loanleadAppFileTemplateResolver());
        return templateEngine;
    }

    @Bean
    public ThymeleafViewResolver viewResolver() {
        ThymeleafViewResolver viewResolver = new ThymeleafViewResolver();
        viewResolver.setTemplateEngine(templateEngine());
        viewResolver.setCharacterEncoding(CHARACTER_ENCODING);
        return viewResolver;
    }
}