/*第一遍理解记忆：2023-2-17 */
/*数组(Array)*/
//1、简介：存储一组相关值（数据结构）
//2、创建：
//（1）[]
var arr1 = ['A','B','C'];
console.log(arr1);//[ 'A', 'B', 'C' ]
//（2）new Array
var arr2 = new Array('A','B','C');
console.log(arr2);//[ 'A', 'B', 'C' ]
var arr3 = new Array(3);
console.log(arr3);//[ <3 empty items> ]
//3、访问：
//（1）数组项：数组每一项都有下标，下标从0开始(下标项 = 数组长度 - 1)
var arr4 = ['a','b','c','d'];
console.log(arr4[0]);
//（2）（重点看，爱忘记！）下标越界：JS规定，访问数组中不存在的项会返回undefined，不会报错
//4、数组的长度：length属性表示它的长度
console.log(arr4.length);//4
//5、更改：数组不只是只读的，可以修改它其中任何项的值
var arr5 = [2,4,5,56,8,9];
arr5[6] = 5;
console.log(arr5);//[2,4,5,56,8,9,5]
//6、遍历：
var arr =  ['a','b','c','d'];
for(var i = 0;i < arr.length;i++){
    console.log(arr[i]);//a b c d
}
//7、类型检测结果：object、  Array.isArray()方法可以检测数组 (重点记忆）
console.log(typeof null);//object
console.log(typeof arr);//object
console.log(Array.isArray(arr));//true
//8、常用方法
var arr =  ['a','b','c','d'];
//（1）头尾操作方法:                功能                                返回值
//     push(新项)方法          在数组的尾部插入新项                返回值r为新数组的长度
r = arr.push(6);//                                         
console.log(arr,r);//arr = [ 'a', 'b', 'c', 'd', 6 ]  r = 5
//     pop()方法              在数组尾部删除                      返回值r为删除项
r = arr.pop();
console.log(arr,r);//arr= [ 'a', 'b', 'c', 'd' ]      r =  6  
//     shift()方法            在数组头部删除                      返回值r为删除项
arr= [ 'a', 'b', 'c', 'd' ]          
r = arr.shift();
console.log(arr,r);//arr = [ 'b', 'c', 'd' ]  r = a 
//   unshift()方法           在数组头部插入新项                  返回值r为新数组的长度
r = arr.unshift(22);
console.log(arr,r);//arr = [ 22, 'b', 'c', 'd' ]   r = 4 
//（2）splice(参数一，参数二，其他参数)
//功能1：替换数组中的指定项
var arr =  ['a','b','c','d'];
//参数：参数一表示从数组的哪个索引位置开始替换，参数二表示替换几个元素，其他参数表示替换的新元素
arr.splice(1,2,3,4,5);
console.log(arr);//[ 'a', 3, 4, 5, 'd' ]
//功能2：在指定位置插入新项（将第二个参数设为0）
var arr =  ['a','b','c','d'];
arr.splice(2,0,'x','y','z');
console.log(arr);//['a', 'b', 'x', 'y', 'z', 'c','d']
//功能3：删除指定项（没有参数三级没有设置替换的新项）
var arr =  ['a','b','c','d'];
arr.splice(2,2);
console.log(arr);//[ 'a', 'b' ]
//（3）slice(a,b)：截取子数组，从下标为a开始到下标为b（不包括）结束
var arr =  ['a','b','c','d'];
r = arr.slice(2,4);
console.log(arr,r);//arr= [ 'a', 'b', 'c', 'd' ]      r = [ 'c', 'd' ]  返回值为截取的子数组
//（4）join()方法：数组--》字符串；split()方法：字符串--》数组
//（5）join()方法：以什么字符作为连接符，如果留空的默认以逗号分隔，如同调用toString()方法
var arr1 =  ['a','b','c','d'];
r = arr1.join('&');
console.log(arr1,r)//arr1 = [ 'a', 'b', 'c', 'd' ]    r = a&b&c&d
//（6）split()参数表示以什么字符拆分字符串，一般不留空；

