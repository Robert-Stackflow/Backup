@echo off
TITLE pip常用命令行
:menu
cls
echo ==================================
echo   1.设置清华源为默认软件源
echo   2.更新pip
echo   3.下载批量更新工具
echo   4.批量更新软件包
echo   5.查看pip版本
echo   6.查看所有软件包
echo   7.查看待更新软件包
echo   8.将软件包列表保存到指定文件中
echo   9.检查兼容问题
echo ==================================
color
set /p user_input=Input Your Choice:
if %user_input% equ 1 goto choice_1
if %user_input% equ 2 goto choice_2
if %user_input% equ 3 goto choice_3
if %user_input% equ 4 goto choice_4
if %user_input% equ 5 goto choice_5
if %user_input% equ 6 goto choice_6
if %user_input% equ 7 goto choice_7
if %user_input% equ 8 goto choice_8
if %user_input% equ 9 goto choice_9
:choice_1
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
pause
goto menu
:choice_2
pip3 install --upgrade pip
pause
goto menu
:choice_3
pip install pip-review
pause
goto menu
:choice_4
pip-review --local --interactive -a
pause
goto menu
:choice_5
pip --version
pause
goto menu
:choice_6
pip list
pause
goto menu
:choice_7
pip list -o
pause
goto menu
:choice_8
set /p filepath=Input Filepath:
pip freeze > %filepath%
pause
goto menu
:choice_9
pip check
pause
goto menu