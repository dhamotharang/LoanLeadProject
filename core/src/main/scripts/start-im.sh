#!/bin/bash

start() {
  loanlead_app_running
}

loanlead_app_running() {
  CONF=.:config/
  LIB=lib/*

  CP=$CONF:$LIB
  JAVA_EXE=$JAVA_HOME/bin/java
  SPRING_CONF_OPTS=--spring.config.location=classpath:file:./config/application.properties
  $JAVA_EXE -Dloader.path="." -classpath "$CP" LoanleadApplication $SPRING_CONF_OPTS
  end
}

end() {
  read -p "Press any key to close the window..."
}

start
