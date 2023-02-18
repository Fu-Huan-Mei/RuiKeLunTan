/*算法面试题*/
//1、喇叭花数：每一位数字的阶乘之和等于它本身即abc = a! + b! + c!,其中abc表示一个三位数，寻找所有的喇叭花
//思路分析：找到所有的三位数，再求出每个三位数的各个位数，最后求各个位数的阶乘(factorial)  4! = 4 * 3 * 2 * 1
//重点看！！求各个位数的阶乘??我不会求阶乘？？？
function factorial(n){
    //累乘器
    var r = 1;
    for(var i = 1; i <= n;i++){
        r = r * i;
    }
    return r;
}
//寻找喇叭花数
    //找出所有三位数
for(var n =100;n<1000;n++){
    //求出个各个位数:我的方法：先把三位数转为字符串，再使用charAt()方法找出每一项数字，再转为数字
    var n1 = Number(String(n)[0]);
    // console.log(n1);
    var n2 = Number(String(n)[1]);
    // console.log(n2);
    var n3 = Number(String(n)[2]);
    // console.log(n3);
    //根据喇叭花数的体哦阿健，来判断
    if(factorial(n1) + factorial(n2) + factorial(n3) == n){
        console.log(n);//145
    }
}

//2、Js内置sort()方法:参数：函数
var arr = [33,22,55,11];
arr.sort(function(a,b){//a、b分别表示数组中靠前和靠后的项，如果将它们交换位置，则返回任意正数；否则返回负数
    if(a > b){
        return 1;
    }else{
        return -1;
    }
})