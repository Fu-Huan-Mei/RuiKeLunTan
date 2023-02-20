//第一遍理解记忆：2023-2-18
//引用类型：array、object、function、regexp......
//内存：运行程序
//硬盘：保存文件

//难点知识：基本类型值和引用类型的区别
//1、数据类型           当var a = b变量传值时                               当用==比较时                              举例
//基本数据类型            内存中会产生新副本                                  比较值是否相等                       console.log(3 == 3);//true
//引用数据类型    内存中不产生新副本，而是让新变量指向同一个对象        比较内存地址是否相等，即比较是否是同一个对象    console.log([1,2,3] == [1,2,3]);//false   
//2、浅克隆：只克隆数组的第一层；如果是多维数组，或者数组中的项是其他引用类型值，则不克隆其他层
//代码实现（难点）
var arr1 = [1,2,3,4];
var result = [];
for(var i=0;i<arr1.length;i++){
    result.push(arr1[i]);
}
console.log(result);//[ 1, 2, 3, 4 ]
//测试是否实现克隆
console.log(result == arr1);//false  因为引用类型值比较内存地址，两个数组被完全分开了
arr1.push(11);
console.log(arr1,result);//arr1 = [ 1, 2, 3, 4, 11 ]    result = [ 1, 2, 3, 4 ]
//3、深克隆：克隆数组的所有层  （没有听懂？？递归这里）
//思路分析：如果遍历到得项是基本类型值，则直接推入结果数组；如果遍历到得项又是数组，则重复执行浅克隆的操作
//原数组和基本数据比较
var arr1 = [33,44,11,22,[77,88]];
function deepClone(arr){
    //结果数组，每一层都有一个全新的结果数组
    var result = [];
    //遍历数组每一项
    for(var i=0;i<arr.length;i++){
        //类型判断:遍历到的项是数组
        if(Array.isArray(arr[i])){
            //递归模式
            deepClone(arr[i]);
        }else{
            //递归终止条件：遍历到得项是基本类型值，则直接推入到结果数组中
            result.push(arr[i]);
        }
    }
    //返回结果数组
    return result;
}
//测试
var arr2 = deepClone(arr1);
console.log(arr2);//[ 33, 44, 11, 22 ]
//是否藕断丝连
console.log(arr1[4] == arr2[4]);//false