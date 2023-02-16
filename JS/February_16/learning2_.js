/*循环语句 *///看超哥的  ??
//1、while循环
//（1）简介：不定范围循环
//（2）语法：while(测试条件){   }

//2、do while循环：后判断的循环形式，至少执行一次循环体
//（1）语法：do{ 循环体 }while{ 循环执行条件 }
//（2）执行流程：循环体至少执行一次，再检测循环执行条件是否为true，最后决定是否继续执行循环体
//（3）小案例1
do {
    console.log('*')
}while(false);//保证至少执行一次

var n = 1;
do {
    console.log(n);
    n++;
}while(n<=10);//1~10

//3、随机数函数
//（1）0~1之间的小数：Math.random()
console.log(Math.random());//0.5682172925516242
//（2）[a,b]区间的整数：parseInt(Math.random() * (b - a + 1)) + a
var r = parseInt(Math.random() * 8) + 5;
console.log(r);//12
//（3）小案例1：请编写程序，随机生成2个变量dx和dy，它们均在[-4.4]区间随机取直，但要求dx和dy不能同时为0
var dx = parseInt(Math.random() * 9) - 4;
var dy = parseInt(Math.random() * 9) - 4;
if(dx == 0 && dy != 0){
    console.log(dx,dy);
}else{
    console.log(dx,dy);
}
//方法二：do while循环
do{
    var dx = parseInt(Math.random() * 9) - 4;
    var dy = parseInt(Math.random() * 9) - 4;
}while(dx == 0 && dy == 0)//true就一直执行，false就停止执行
//只要你出循环，就保证dx和dy不都是0  （好好理解这里）
console.log(dx,dy);

//4、break：
//（1）立即终止循环：for循环和while循环）
for(var i = 0;i < 10;i++){
    console.log(i);//0~4
    if(i == 4){
        break;
    }
}
//（2）while语句：while(true){     } 死循环（慎用！）
var n = 1;
while(true){
    if ( n * n > 456789){
        console.log(n);//676
        break;
    }
    n++;
}

//5、continue:跳过循环中的一个迭代，继续执行循环中的下一个迭代
for(var i =0;i < 5;i++){
    if(i == 3){
        continue;
    }
    console.log(i);//0 1 2 4
}