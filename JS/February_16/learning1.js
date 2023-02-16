/*第一遍理解记忆：2023-2-16 */
//条件判断语句
/*三元运算符 */
//1、语法：条件表达式？表达式1：表达式2
//2、用途：根据某个条件是否成立，在两个不同值中选择变量的值
var age = 24;
var type = age >= 18?'成年人':'未成年人';
console.log(type);

/*条件语句 */
//1、switch语句
//（1）用途：当一个变量被"分类讨论"的情形
//（2）switch(变量名)：该变量名会分类讨论！
//（3）case 值:
//（4）执行流程：依次将case后的值与switch圆括号中的值做全等比较：
//如果相同，则执行这条case冒号后的语句；default表示默认情况
//（5）注意：多条case可以共用一个语句体；如果不书写break，则后面所有case都将视为匹配，直到遇见break
//根据月份分类讨论
var month = 1;
switch(month){  
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:   
    case 12:
        console.log("这个月有31天!");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("这个月有30天!");
        break;
    case 2:
        console.log("这个月有28天或29天!");
        break;
    default:
        console.log("请输入正确的年份！")
}

//2、break语句
//3、if语句算法题
//（1）算法
//例1：判断水仙花数？水仙花数是一个3位数：每个数的立方和=它本身 eg:153 = 1^3 + 5^3 + 3^3
//拆位--》如何拆位？数学方法   字符串方法：charAt()
//数学方法
//输入num
var num = 110;
//对数值进行合法性验证
if(!isNaN(num) && num >= 100 && num <= 999){
    //验证用户数字输入合法
    num = num.toString();
    // console.log(num,typeof num);//154 string
    //百位
    a = num.charAt(0);
    //十位
    b =  num.charAt(1);
    //个位
    c = num.charAt(2);
    if(num == a*a*a + b*b*b + c*c*c ){
        console.log(num,"是水仙花数");
    }else{
        console.log(num,"不是水仙花数");
    }  
}else{
    console.log("你输入数字非法!");
}
//例2：游乐园免票计算：输入用户的年龄和星期几，弹出对话框显示出门票的价格
//（2）if语句嵌套
//用户输入星期几
var week = Number(6);
var age = Number(17);
//星期作为前提条件
if(week == 0 || week == 6){
    //周末
    if(age >= 10){
        console.log(500);
    }else{
        console.log(210);
    }
}else{//平时
    if(age >= 10){
        console.log(300);
    }else{
        console.log(140);
    }
}
//4、if-else-if多条件分支 "否则如果"
/*if(测试表达式1){
    //当测试表达式1为true时执行
}else if(测试表达式2){
    //当测试表达式1为false时,测试表达式2为true时执行
}else if(测试表达式3){
    //当测试表达式1为false时,测试表达式2为false时,测试表达式3为true时执行
}...
else{
    //当所有测试表达式为false时执行
}
*/
//举例：根据成绩输出档次 
var score = 90;
if(score >= 85){
    console.log("优秀");
}else if(score >= 70){
    console.log("良好");
}else if(score >= 60){
    console.log("及格");
}else{
    console.log("不及格");
}
//5、if语句
//（1）简介：最简单的条件语句（选择语句）
/*（2）语法：
if(测试条件){
    //语句块1
    //当测试条件为真，则执行这里
}else{
    //语句块2
    //当测试条件为假，则执行这里
}
*/
//举例1：检查任意数的奇偶性
var num = 2;
if (num % 2 == 0){
    console.log(num,"是偶数");
}else{
    console.log(num,"是奇数");
}
//举例2：用户输入年龄，判断用户是否可以申领驾照。申领驾照条件：18~70
var ages = 19;
if (ages > 18 && ages < 70){
    console.log("可申领驾照");
}else{
    console.log("不可申领驾照");
}
//（3）else:可省略
var a = Number(4);
if(a < 5){
    console.log("这个数小于5");
}
//（4）单行if语句：如果if语句体中只有一行语句，则可以省略大括号和换行
var a = 6;
if(a > 5) console.log("这个数大于5");
