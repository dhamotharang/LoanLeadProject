package com.loanlead;

import com.loanlead.auth.AuthRole;
import com.loanlead.auth.CustomLogoutSuccessHandler;
import com.loanlead.auth.DefaultPasswordEncoder;
import com.loanlead.auth.UserServiceImpl;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import javax.sql.DataSource;

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final DefaultPasswordEncoder defaultPasswordEncoder;
    private final UserServiceImpl userService;
    private final UrlAuthenticationSuccessHandler successHandler;
    private final CustomLogoutSuccessHandler logoutHandler;
    private final DataSource dataSource;

    private static final String USERS_QUERY = "select employee_id, password, '1' from users where employee_id=?";
    private static final String ROLES_QUERY = "select u.employee_id, r.name from users u inner join users_roles ur on(u.employee_id=ur.employee_id) inner join roles r on(ur.role_name=r.name) where u.employee_id=?";

    public WebSecurityConfig(
            DefaultPasswordEncoder defaultPasswordEncoder,
            UserServiceImpl userService,
            UrlAuthenticationSuccessHandler successHandler,
            CustomLogoutSuccessHandler logoutHandler,
            DataSource dataSource) {
        this.defaultPasswordEncoder = defaultPasswordEncoder;
        this.userService = userService;
        this.successHandler = successHandler;
        this.logoutHandler = logoutHandler;
        this.dataSource = dataSource;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService).passwordEncoder(defaultPasswordEncoder);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .headers().frameOptions().sameOrigin()
                .and()
                .authorizeRequests()
                .antMatchers("/css/**", "/js/**", "/images/**", "/bootstrap-4.1.1/**").permitAll()
                .antMatchers("/ui/#/admin/**").hasRole(AuthRole.ADMIN.name())
                .antMatchers("/ui/#/user/**").authenticated()
                .antMatchers("/sign-up").not().authenticated()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/login")
                .loginProcessingUrl("/perform_login")
                .failureUrl("/login/error")
                .successHandler(successHandler)
                .permitAll()
                .and()
                .logout()
                .logoutUrl("/logout")
                .logoutSuccessUrl("/login/logout")
                .logoutSuccessHandler(logoutHandler)
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID");
    }


    @Override
    public void configure(WebSecurity web) {
        web.ignoring()
                .antMatchers("/login/**")
                .antMatchers("/favicon.ico");
    }
}
