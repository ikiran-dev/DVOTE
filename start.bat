@echo off

echo Running Truffle Migration...
start cmd /c "npx truffle migrate --reset"
if %errorlevel% neq 0 goto error1

echo Waiting for 20 seconds...
timeout /t 20 /nobreak

echo Starting Dev Server...
start cmd /c "npm run dev"
if %errorlevel% neq 0 goto error2

echo Done.
pause
exit

:error1
echo An error occurred while running Truffle Migration.
pause
exit /b %errorlevel%

:error2
echo An error occurred while starting the Dev Server.
pause
exit /b %errorlevel%
@echo off

echo Running Truffle Migration...
start cmd /c "npx truffle migrate --reset"
if %errorlevel% neq 0 goto error1

echo Waiting for 20 seconds...
timeout /t 20 /nobreak

echo Starting Dev Server...
start cmd /c "npm run dev"
if %errorlevel% neq 0 goto error2

echo Done.
pause
exit

:error1
echo An error occurred while running Truffle Migration.
pause
exit /b %errorlevel%

:error2
echo An error occurred while starting the Dev Server.
pause
exit /b %errorlevel%
@echo off

echo Running Truffle Migration...
start cmd /c "npx truffle migrate --reset"
if %errorlevel% neq 0 goto error1

echo Waiting for 20 seconds...
timeout /t 20 /nobreak

echo Starting Dev Server...
start cmd /c "npm run dev"
if %errorlevel% neq 0 goto error2

echo Done.
pause
exit

:error1
echo An error occurred while running Truffle Migration.
pause
exit /b %errorlevel%

:error2
echo An error occurred while starting the Dev Server.
pause
exit /b %errorlevel%
