/*递归算法题目：斐波那契数列 （难点）*/
//返回斐波那契数列中下标为n的那项的值
function fib(n){
    //数列下标为0和1的项的值都是1
    if(n == 0 || n == 1) return 1;
    //本质：每一项=前面两项的和
    return fib(n-1) + fib(n-2);
}
console.log(fib(15));//987
