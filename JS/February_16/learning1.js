/*三元运算符 */
//1、语法：条件表达式1？表达式1：表达式2
//2、用途：根据某个条件是否成立，在两个不同值中选择变量的值
var age = 24;
var type = age >= 18?'成年人':'未成年人';
console.log(type);

/*条件语句 */
//1、switch语句
//（1）用途：当一个变量被分类讨论的情形
//（2）switch(变量名)：该变量名会分类讨论！
//（3）case 值
//（4）执行流程：依次将case后的值与switch圆括号中的值金总全等比较：
//如果相同，则执行这条case冒号后的语句；default表示默认情况
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
//（4）注意：多条case可以共用一个语句体；如果不书写break，则后面所有case都将视为匹配，直到遇见break
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