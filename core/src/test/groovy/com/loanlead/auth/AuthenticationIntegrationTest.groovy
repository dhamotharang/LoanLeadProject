package com.loanlead.auth

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.security.core.userdetails.User
import org.springframework.security.crypto.factory.PasswordEncoderFactories
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import org.springframework.web.context.WebApplicationContext
import spock.lang.Ignore
import spock.lang.Specification

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestBuilders.formLogin
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf
import static org.springframework.security.test.web.servlet.response.SecurityMockMvcResultMatchers.authenticated
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.redirectedUrl
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@ActiveProfiles("im-portal")
class AuthenticationIntegrationTest extends Specification {

    @Autowired
    private WebApplicationContext context
    @Autowired
    private MockMvc mvc

    void setup() {
        mvc = MockMvcBuilders
                .webAppContextSetup(context)
                .apply(SecurityMockMvcConfigurers.springSecurity())
                .build()
    }

    def "csrf is generated"() {
        expect:
        mvc.perform(post("/perform_login")
                .param("username", "admin")
                .param("password", "admin")
                .with(csrf()))
                .andExpect(status().isFound())
                .andExpect(redirectedUrl("/ui"))
    }

    @Ignore("to be fixed: this test should fail if csrf is invalid")
    def "using invalid csrf"() {
        expect:
        mvc.perform(post("/perform_login")
                .param("username", "admin")
                .param("password", "admin")
                .with(csrf().useInvalidToken()))
                .andExpect(status().isFound())
                .andExpect(redirectedUrl("/ui"))
    }

    def "successful admin form login"() {
        expect:
        mvc.perform(formLogin("/perform_login").user("1170").password("asedrwe23dsSxcssdfr56ggf"))
                .andExpect(status().isFound())
                .andExpect(redirectedUrl("/ui/user"))
                .andExpect(authenticated())
    }

    def "failed admin form login"() {
        expect:
        mvc.perform(formLogin("/perform_login").user("admin").password("xxx"))
                .andExpect(status().isFound())
                .andExpect(redirectedUrl("/login?error"))
    }

    def "successful dba form login"() {
        expect:
        mvc.perform(formLogin("/perform_login").user("dba").password("dbaadmin"))
                .andExpect(status().isFound())
                .andExpect(redirectedUrl("/dba-confirmation"))
                .andExpect(authenticated())
    }

    def "failed dba form login"() {
        expect:
        mvc.perform(formLogin("/perform_login").user("dba").password("xxx"))
                .andExpect(status().isFound())
                .andExpect(redirectedUrl("/login?error"))
    }
}
