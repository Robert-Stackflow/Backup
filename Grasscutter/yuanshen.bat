@echo off
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
cd /d "%~dp0"
cd /d "D:\Ruida\Documents\Grasscutter\bat"
start wt -w /k mongodb.bat
choice /t 1 /d y /n >nul
start wt -w /k grasscutter.bat
choice /t 1 /d y /n >nul
start wt -w /k mitmproxy.bat
choice /t 1 /d y /n >nul
start wt -w /k proxy.bat
choice /t 1 /d y /n >nul
start wt -w /k exitgc.bat
choice /t 1 /d y /n >nul
start wt -w /k ip.bat
