/*第一步理解记忆：2023-2-18 */
/*变量、作用域 */
//1、局部变量：定义在函数内部的变量
function fun(){
    console.log("hello hi !");
}
//2、全局变量：不定义函数内部的变量
//（重点）3、遮蔽效应：如果函数内的局部变量和函数外的全局变量的变量名相同，局部变量会“遮蔽”全局变量 
var a = 10;//全局变量
function fun(){
    var a = 5;//局部变量
    a++;
    console.log("1",a);//6
}
fun();
console.log("2",a);//10
//4、变量声明提升
var a = 10;
function fun(){
    a++;
    var a = 5;
    console.log(a);//5
}
fun();
console.log(a);//10
//5、形参也是局部变量--》遮蔽效应
var a = 10;
function fun(a){
    //形参就相当于var a = 7;
    a++;
    console.log(a);//8
}
fun(7);
console.log(a);//10
//6、局部函数：定义在函数内部的函数
function fun(){
    function inner(){
        console.log("你好!");
    }
    inner();//调用内部函数
}
fun();//调用外部函数
//（重点）7、作用域链：使用变量时，JS会从当前层开始，逐层向上寻找定义  
var a = 10;
var b =20;
function fun(){
    var c = 30;
    function inner(){
        var a = 40; 
        var d = 50;
        console.log(a,b,c,d);
    }
    inner();
}
fun();
//（重点）8、不加var定义全局变量  
function fun(){
    a = 3;
}
fun();
console.log(a);//3