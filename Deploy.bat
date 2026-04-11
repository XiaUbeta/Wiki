@echo off
:: 设置字符集为 UTF-8，防止控制台中文乱码
chcp 65001 >nul

echo =======================================
echo 开始提交笔记并触发 Vercel 自动更新...
echo =======================================

:: 获取当前日期和时间，生成形如 "Update: 2026/04/11 21:50" 的提交信息
set d=%date:~0,10%
set t=%time:~0,5%
set commit_msg=Update: %d% %t%

:: 执行 Git 提交流程
git add .
git commit -m "%commit_msg%"
git push

echo.
echo =======================================
echo 提交成功！
echo =======================================
echo.
pause