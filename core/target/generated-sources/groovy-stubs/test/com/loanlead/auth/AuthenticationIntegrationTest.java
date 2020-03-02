package com.loanlead.auth;

import java.lang.*;
import java.io.*;
import java.net.*;
import java.util.*;
import groovy.lang.*;
import groovy.util.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestBuilders.formLogin;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.security.test.web.servlet.response.SecurityMockMvcResultMatchers.authenticated;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.redirectedUrl;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@org.springframework.boot.test.context.SpringBootTest(webEnvironment=org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT) @org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc() @org.springframework.test.context.ActiveProfiles(value="im-portal") public class AuthenticationIntegrationTest
  extends spock.lang.Specification  implements
    groovy.lang.GroovyObject {
;
@groovy.transform.Generated() @groovy.transform.Internal() public  groovy.lang.MetaClass getMetaClass() { return (groovy.lang.MetaClass)null;}
@groovy.transform.Generated() @groovy.transform.Internal() public  void setMetaClass(groovy.lang.MetaClass mc) { }
@groovy.transform.Generated() @groovy.transform.Internal() public  java.lang.Object invokeMethod(java.lang.String method, java.lang.Object arguments) { return null;}
@groovy.transform.Generated() @groovy.transform.Internal() public  java.lang.Object getProperty(java.lang.String property) { return null;}
@groovy.transform.Generated() @groovy.transform.Internal() public  void setProperty(java.lang.String property, java.lang.Object value) { }
public  void setup() { }
}
