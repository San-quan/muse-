@echo off
setlocal
set PHP_EXE=C:\php74\php.exe
set PHP_INI=C:\php74\php.ini
set APP_DIR=%~dp0Applications\HappyMajong

echo [1/3] start Register (text://0.0.0.0:1281)
start "Register-1281" cmd /k ""%PHP_EXE%" -c "%PHP_INI%" "%APP_DIR%\start_register.php""
timeout /t 3 /nobreak >nul

echo [2/3] start Gateway websocket://0.0.0.0:8281
start "Gateway-8281" cmd /k ""%PHP_EXE%" -c "%PHP_INI%" "%APP_DIR%\start_gateway.php""
timeout /t 4 /nobreak >nul

echo [3/3] start BusinessWorker
start "BusinessWorker" cmd /k ""%PHP_EXE%" -c "%PHP_INI%" "%APP_DIR%\start_businessworker.php""
timeout /t 2 /nobreak >nul

echo.
echo === Workerman 3 processes launched ===
echo     Register text:    127.0.0.1:1281
echo     Gateway websocket: 0.0.0.0:8281
echo     BusinessWorker
endlocal
exit /b 0
