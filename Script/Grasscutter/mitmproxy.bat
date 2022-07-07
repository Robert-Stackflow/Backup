@echo off
title Proxy
cd ..
mitmdump -s proxy.py -k
pause