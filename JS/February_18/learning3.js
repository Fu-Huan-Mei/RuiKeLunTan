/*变量作用域 */
//1、局部变量：定义在函数内部的变量
function fun(){
    console.log("hello hi !");
}
//2、全局变量：不定义函数内部的变量
//3、遮蔽效应：如果函数中定义了和全局同名的变量，则函数内的变量会将全局的变量“遮蔽”
var a = 10;
function fun(){
    var a = 5;
    a++;
    console.log("1",a);//6
}
fun();
console.log("2",a);//10