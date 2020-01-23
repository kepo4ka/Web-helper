SET table=comments
echo Exporting...
mysqldump -u root -p %table% > %table%.sql
echo Complete!
pause