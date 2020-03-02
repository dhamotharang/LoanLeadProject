@echo off

:: check if JAVA_HOME specified
if "%JAVA_HOME%"=="" (
	@echo ERROR: Please, specify the JAVA_HOME variable in Environment Variables
	goto end
)

:: check if java present
where %JAVA_HOME%\bin\java.exe >nul 2>nul
if "%errorlevel%" == "1" (
    @echo ERROR: java.exe could not be found. Please make sure to have JDK installed.
    goto end
)

:: check for IM_DATA environment variable
IF "%IM_DATA%"=="" (
    @echo ERROR! Environment variable IM_DATA is not specified. It should point to the location where IM will store images and all of its internal configurations/data.
    goto end
)

SET JAVA_EXE=%JAVA_HOME%\bin\java.exe
IF EXIST "%JAVA_EXE%" GOTO 4
SET JAVA_EXE=java.exe

:4
SET CONF=.;config\portal-core
SET LIB=lib\*

SET CP="%CONF%";"%LIB%"
SET JAVA_OPTS=-Xms256M -Xmx800M
SET LOG_OPTS=-Dlog4j.configurationFile="config/portal-core/log4j2.xml"

"%JAVA_EXE%" %JAVA_OPTS% %LOG_OPTS% -classpath %CP% com.edifecs.eim.portal.InstallService -import %*
rem echo "im-import-package> return code: [%errorlevel%]"
