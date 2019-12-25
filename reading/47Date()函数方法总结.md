# 常用的Date()方法总结
1. new Date() 返回标准时间格式字符串
2. Date.now() 返回当前时间到1970年的毫秒数
3. Date.parse() 传入一个日期字符串，返回1970年到这个日期的毫秒数
4. myDate.getFullYear() 返回一个年份
5. myDate.getMonth()+1 返回一个月份(0-11) 0代表每一年的第一个月
6. myDate.getDate() 返回一个日期对象中的具体的一个月中的哪一日（1-31）
7. myDate.getDay() 返回一个具体日期中一周的第几天也就是周几（0-6）0代表周日
8. myDate.getTime() 返回当前时间距离格林威治时间（1970.1.1）的毫秒数
9. myDate.getHours() 返回一个小时数
10. myDate.getMinutes() 返回分钟数 
11. myDate.getSeconds() 返回秒数 
12. myDate.getMilliseconds() 返回一个具体日期对象现在的毫秒数（0-999）
13. myDate.toDateString() 返回一个日期对象的简单字符串