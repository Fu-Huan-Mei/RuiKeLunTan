/*闭包(closure)*/
//（重点理解记忆）
//1、概念：函数本身和该函数定义时所处的环境状态的组合；即使函数不在其定义的环境中被调用，也能访问定义时所处的环境变量
//创建一个函数
function fun(){
    //定义局部变量
    var name = "慕课网";
    //返回一个局部变量
    return function(){
        console.log(name);//name可用记住var name = "慕课网";这个定义函数的环境
    };
}
//调用外部函数，就得到内部函数，用变量inn来接收
var inn = fun();
//执行inner函数，就相当于在fun函数的外部执行了内部函数
console.log(inn);//[Function (anonymous)]
inn();//慕课网
//2、观察：每次创建函数时都会创建闭包，但闭包特性往往需要将函数"换一个地方”执行，才能被观察出来
//3、功能：
//（1）记忆性：当闭包产生时，函数所处的环境黄台会始终保持在内存中，不会在外层函数调用后被自动清除
//题目：体温监测函数：checkTemp(n),可用监测体温n是否正常，函数返回布尔值，但不同小区由不同标准
function createCheckTemp(standardTemp){//闭包=checkTemp()函数+形参standardTemp
    function checkTemp(n){
        if(n <= standardTemp){
            console.log("体温正常！")
        }else{
            console.log("体温异常！")
        }
    }
    return checkTemp;
}
var checkTemp_A = createCheckTemp(37.1);//standardTemp=37.1
checkTemp_A(37.3);// 体温异常！                     checkTemp_A()就是checkTemp()
checkTemp_A(37.0);//体温正常！
// checkTemp(34);//报错
//（2）模拟私有变量（私有化、安全性）???
//题目：定义一个变量a，要求是能保证这个a只能被进行指定操作(如+1、*2);不能进行其他操作？
//封装函数：私有化变量
function fun(){
    //定义局部变量a
    var a = 0;
    return function(){
        console.log(a);
    }
}
var getA = fun();
getA();//0
// //封装函数：私有化变量
// function fun(){
//     //定义局部变量a
//     var a = 0;
//     return {
//         getA:function(){
//             return a;
//         },
//         add:function(){
//             a++;
//         },
//         pow:function(){
//             a = a * 2;
//         }
//     }
// }
// var obj = fun();
// //如果想在fun函数外面使用变量a：调用getA()方法
// console.log(obj.getA());
// //让变量a进行+1操作
// obj.add();
// console.log(obj.getA());
// //4、注意：（1）不能滥用闭包，可能会导致内存泄漏
// //5、面试题
// function addCount(){
//     var count = 0;
//     return function(){
//         count = count + 1;
//         console.log(count);
//     };
// }
// var fun1 = addCount();
// var fun2 = addCount();
// fun1();
// fun2();
