/*函数 */
//第一遍理解记忆：2023-2-18（联系生活）
//1、简介：语句的封装，让代码方便复用；一次定义可多次调用、简化代码、可读性 （了解）
//2、创建：
//（1）函数声明：function 函数名 ( 形参 ){   函数体语句   }
//定义函数：不会直接执行
function fun(){
    console.log("你好!");
    console.log("今天天气真好!");
}
//函数要等到调用时才执行
fun();
fun();
fun();
//（2）函数表达式：var 函数名 = function( 形参列表 ){  函数体语句  }
//3、调用：（1）定义：执行函数体内所有语句  （2）语法：函数名 (  实参列表  )
//4、函数体语句执行顺序：
function fun(){
    console.log("A");
    console.log("B");
    console.log("C");
}
console.log(1);
console.log(2);
console.log(3);
fun();
//5、函数声明提升
fun();//在预解析阶段被提升
function fun(){
    console.log("函数被执行!");
}
//6、函数表达式不能提升(因为该函数fun就相当于一个变量，只声明不赋值
fun();//引发错误
var fun = function(a){
    console.log("函数被执行~~",a);
}
// fun(1111);
//7、函数优先提升
fun();//弹出B             只提升定义，不会覆盖提升的函数
var fun = function(){
    console.log("A");
}
function fun(){//优先提升函数体语句
    console.log("B");
}
// fun();//弹出A
//8、函数的参数：
//（1）含义：函数内的待定值，在调用时必须传入参数的具体值
//（2）数量：可多（用,隔开）可少（0）
//（3）形实结合：    
function add (a,b){
    var sum = a + b;
    console.log("两个数字的和是",sum);
}
add(3,5);
//9、（！！重点理解记忆）arguments：它接收到的实参列表，是一个类数组对象
//10、类数组对象：所有属性均为从0开始的自然数序列，并且有length属性，和数组类似可用[ ]书写下标访问对象的某个属性值，但不能多余数组的方法
function fun(){
    console.log(arguments);//[Arguments] { '0': 11, '1': 22, '2': 33, '3': 44, '4': 55 }
    console.log(arguments[0]);//11
    console.log(arguments[1]);//22
}
fun(11,22,33,44,55);
//应用：不管用户输入多少个实参，用用可以计算这些实参的和
function sum(){
    var sum = 0;
    for(var i=0;i < arguments.length;i++){
        sum = sum + arguments[i];
    }
    console.log("所有参数的和为：",sum);//165
}
sum(11,22,33,44,55);
//11、函数的返回值：return关键字表示“函数的返回值”；
function sum(a,b){
    return a + b;//函数返回值(体现函数的作用和函数的封装性)
}
var r = sum(3,5)//函数返回值可以被变量接收
console.log(r);//8
var r = sum(1,2) * sum(3,4);
console.log(r);//21
// 函数嵌套：一个函数执行语句当作另一个函数的参数
var r = sum(1,sum(3,4))  ;
console.log(r);//8
//11、遇见return会立即退出函数，将执行权交还给调用者
function fun(){
    console.log("A");
    return "B";
    console.log("C");
}
console.log(1);
var char = fun();
console.log(char);
console.log(2);
//题目：if语句不用写else
function checkEven(n){
    return n % 2 == 0;
}
var r = checkEven(8);
console.log(r);//true
