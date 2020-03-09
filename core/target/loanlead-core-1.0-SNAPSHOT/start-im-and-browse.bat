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

:: start the IM Application
echo Starting Loanlead

SET CONF=.;config
SET LIB=lib\*

SET CP=%CONF%;%LIB%
SET SPRING_CONF_OPTS=--spring.config.location=classpath:file:./config/application.properties

java -Dloader.path="." -classpath "%CP%" com.loanlead.LoanleadApplication %SPRING_CONF_OPTS%

:end
echo Press any button to close the window...
pause >nul 2>nul
