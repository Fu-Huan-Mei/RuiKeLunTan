// 第一遍理解记忆：2023-2-18
/*IIFE立即执行函数 （好好理解这里）*///难点
//函数不能直接加()调用
//函数必须转为"函数表达式"才能被调用
//作用：（1）为变量赋值
var age = 12;
var gender = "女";
var title = (function(){
    if(age < 18){
        return "小朋友";
    }else{
        if(gender == "男"){
            return "先生";
        }else{
            return "女士";
        }
    }
})();
console.log(title);
//方法二
var age = 12;
var gender = "女";
if(age < 18){
    var title = "小朋友";
}else{
    if(gender == "男"){
        var title = "先生";
    }else{
        var title = "女士";
    }   
}
//作用：（2）将全局变量i即实参传递给局部变量（函数中的变量）
var arr = [];
for(var i=0;i<5;i++){
    arr.push(function(){
        console.log(i);//i是全局变量，所有函数都共享内存中的同一个变量i，所以所有arr[i]都是5
    })
}
arr[2]();//5

var arr = [];
for(var i=0;i<5;i++){
    (function(i){//i表示形参（局部变量i）传递给实参
        arr.push(function(){//push()函数闭包=闭包环境i+function()函数
            console.log(i);
        });
    })(i);//i表示实参（全局变量i）
};
arr[0]();
arr[1]();
arr[2]();//2
arr[3]();
arr[4]();