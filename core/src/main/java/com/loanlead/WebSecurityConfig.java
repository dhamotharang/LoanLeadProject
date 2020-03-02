package com.loanlead;

import com.loanlead.auth.AuthRole;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.sql.DataSource;

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final UrlAuthenticationSuccessHandler successHandler;
    private final DataSource dataSource;

    private static final String USERS_QUERY = "select employee_id, password from users where employee_id=?";
    private static final String ROLES_QUERY = "select u.username, r.name from users u inner join users_roles ur on(u.employee_id=ur.employee_id) inner join roles r on(ur.role_name=r.name) where u.username=?";

    public WebSecurityConfig(
            BCryptPasswordEncoder bCryptPasswordEncoder,
            UrlAuthenticationSuccessHandler successHandler,
            DataSource dataSource) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.successHandler = successHandler;
        this.dataSource = dataSource;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication()
                .usersByUsernameQuery(USERS_QUERY)
                .authoritiesByUsernameQuery(ROLES_QUERY)
                .dataSource(dataSource)
                .passwordEncoder(bCryptPasswordEncoder);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .headers().frameOptions().sameOrigin()
                .and()
                .authorizeRequests()
                .antMatchers("/admin/#/nav/**").hasAuthority(AuthRole.ADMIN.name())
                .antMatchers("/admin/**").hasAuthority(AuthRole.ADMIN.name())
                .antMatchers("/user/**").hasAuthority(AuthRole.USER.name())
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
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID")
                .and()
                .exceptionHandling()
                .accessDeniedPage("/access-denied");
    }


    @Override
    public void configure(WebSecurity web) {
        web.ignoring()
                .antMatchers("/login/**")
                .antMatchers("/favicon.ico");
    }
}
