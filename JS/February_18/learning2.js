/*递归 第一遍理解记忆：2023-2-18*/
//1、含义：函数内部语句调用函数自身，从而发起对函数的一次迭代
//2、要素：（1）边界条件（递归出口）：确定递归到何时终止 （2）递归模式（递归体）：大问题是如何分解为小问题的
//题目：求阶乘：4！=3*3！
//书写函数：函数内部会自己调用自己，从而形成递归
function factorial(n){
    //计算n的阶乘
    //边界条件（终止条件）：如果计算1的阶乘，则直接返回1
    if(n == 1){
        return 1;
    }
    //递归模式：如果询问不是1的阶乘，则返回n*(n-1)!
    return  n * factorial(n-1);
}
var r = factorial(4);
console.log(r);//24