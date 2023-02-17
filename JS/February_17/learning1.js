//引用类型：array、object、function、regexp......
//内存：运行程序
//硬盘：保存文件

//1、数据类型           当var a = b变量传值时                               当用==比较时                              举例
//基本数据类型            内存中会产生新副本                                  比较值是否相等                       console.log(3 == 3);//true
//引用数据类型    内存中不产生新副本，而是让新变量指向同一个对象        比较内存地址是否相等，即比较是否是同一个对象    console.log([1,2,3] == [1,2,3]);//false   
//2、浅克隆：只克隆数组的第一层；如果是多维数组，或者数组中的项是其他引用类型值，则不克隆其他层
var arr1 = [1,2,3,4];
var result = [];
for(var i=0;i<arr1.length;i++){
    result.push(arr1[i]);
}
console.log(result);//[ 1, 2, 3, 4 ]
console.log(result == arr1);//false  因为引用类型值比较内存地址
//3、深克隆：克隆数组的所有层，要使用递归技术
var arr1 = [1,2,3,4[6,9,4]];
