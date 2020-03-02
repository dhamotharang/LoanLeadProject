#!/bin/bash

start() {
  java_home_check
}

java_home_check() {
  if [ ! -z "$JAVA_HOME" ];
  then
    java_exe_check
  else
    echo ERROR: Please, specify the JAVA_HOME variable in Environment Variables
    end
  fi
}

java_exe_check() {
  JAVA_EXE="$JAVA_HOME/bin/java"
  JAVA_VERSION="$("$JAVA_EXE" -version 2>&1)"
  if [ "$JAVA_VERSION" != *"command not found"* ] && [ "$JAVA_VERSION" != *"No such file or directory"* ];
  then
    im_data_check
  else
    echo ERROR: java.exe could not be found. Please make sure to have JDK installed.
    end
  fi
}

im_data_check() {
  if [ ! -z "$IM_DATA" ];
  then
    im_import_package_app_running
  else
    echo ERROR! Environment variable IM_DATA is not specified. It should point to the location where IM will store images and all of its internal configurations/data.
    end
  fi
}

im_import_package_app_running() {
  if [ -f $JAVA_HOME/bin/java ] ; then
    JAVA_EXE=$JAVA_HOME/bin/java
  else
    JAVA_EXE=java
  fi

  CONF=".:config/portal-core"
  LIB="lib/*"
  CP="$CONF:$LIB"
  JAVA_OPTS="-Xms256M -Xmx800M"
  LOG_OPTS=-Dlog4j.configurationFile="config/portal-core/log4j2.xml"

  $JAVA_EXE $JAVA_OPTS $LOG_OPTS -classpath $CP com.edifecs.eim.portal.InstallService -import $@
#  exit $?
}

start
