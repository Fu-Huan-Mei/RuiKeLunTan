/*算法面试题*/
//1、喇叭花数：每一位数字的阶乘之和等于它本身即abc = a! + b! + c!,其中abc表示一个三位数，寻找所有的喇叭花
//思路分析：找到所有的三位数，再求出每个三位数的各个位数，最后求各个位数的阶乘(factorial)  4! = 4 * 3 * 2 * 1
function num(){
    //找出所有三位数
    for(var n =100;n<101;n++){
        //求出个各个位数:我的方法：先把三位数转为字符串，再使用charAt()方法找出每一项数字，再转为数字
        var n1 = Number(String(n).charAt(0));
        console.log(n1);
        var n2 = Number(String(n).charAt(1));
        console.log(n2);
        var n3 = Number(String(n).charAt(2));
        console.log(n3);
        var r = factorial(n1,n2,n3);
        console.log(r);
    }
}
num();
 //求各个位数的阶乘??我不会求阶乘？？？
 function factorial(n1,n2,n3){
    //累乘器
    var r = 1;
    for(var i = 1; i <= n1;i++){
        r = r * i;
    }
    return r;
 }
//  var r = factorial(3);
//  console.log(r);