package com.loanlead.auth;

import com.loanlead.UrlAuthenticationSuccessHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@Component
public class CustomLogoutSuccessHandler implements LogoutSuccessHandler {
    @Autowired
    UrlAuthenticationSuccessHandler authenticationSuccessHandler;

    @Override
    public void onLogoutSuccess(HttpServletRequest request,
                                HttpServletResponse response, Authentication authentication)
            throws IOException, ServletException {
        HttpSession session = request.getSession();

        if (session != null){
            session.removeAttribute("user");
            authenticationSuccessHandler.getUserSessions().get(authentication.getName()).invalidate();
            authenticationSuccessHandler.getUserSessions().remove(authentication.getName());
        }
    }
}
