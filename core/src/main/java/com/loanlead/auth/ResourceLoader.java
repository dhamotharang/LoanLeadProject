package com.loanlead.auth;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.File;
import java.lang.reflect.Method;
import java.net.URL;
import java.net.URLClassLoader;

public class ResourceLoader {
    private static final Logger logger = LogManager.getLogger(ResourceLoader.class);

    public static void add(File file) {
        try {
            Method method = URLClassLoader.class.getDeclaredMethod("addURL", URL.class);
            method.setAccessible(true);
            method.invoke(ClassLoader.getSystemClassLoader(), file.toURI().toURL());
        } catch (Exception e) {
            logger.error("Error loading the resource: {}", file, e);
        }
    }
}
