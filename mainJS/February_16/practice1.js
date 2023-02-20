//2023-2-18
/*1、数组去重:思路分析：数组的includes()方法：取出原数组的每一项，依次判断新数组中是否包含该项，没有则将该项加入新数组*/
//定义原数组
var arr = [1,2,3,1,2,3,4,4,4,5,6,7];
//定义新数组
var new_arr = [];
//取出原数组的每一项
for(var i =0;i<arr.length;i++){
    if(new_arr.includes(arr[i]) == false){
       new_arr.push(arr[i]);
    }
}
console.log(new_arr);//[1,2,3,4,5,6,7];

/*2、随机样本：请随机从原数组中取3项？
思路分析：第1项：取出每一项后：先从原数组中随机取出一项推入新数组中，再把该项从原数组中删除；
第2项：再从剩下的数组中随机取出一项推入新数组中，再把该项从原数组中删除；
第3项：再从剩下的数组中随机取出一项
重点记得随机数组公式：
random公式：parseInt(Math.random()*b-a+1)) + a;（重点记忆公式）*/
//定义原数组
var arr = [1,2,3,1,2,3,4,4,4,5,6,7];
//定义新数组
var new_arr = [];
var count = 1;
//取出原数组的每一项
if(count <= 3){
    for(var i =0;i<arr.length;i++){//i的取值范围[0,arr.length-1]  
        //利用随机数组公式：取出随机项的下标（索引） 
        var j = parseInt(Math.random()*arr.length);
        //将新项推入新数组中
        new_arr.push(arr[j]);
        //在原数组中删除该项（指定项）  splice(n,1)
        arr.splice(arr[j]);
        count++;  
    }
    console.log(new_arr);
    console.log(arr);
}

/*3、冒泡排序 var arr = [9,3,1,6,4,2,3,6];升序 ???
思路分析：第一趟：取出第一个元素，分别和后面元素依次做比较：如果该元素>其他元素，则交换位置；比较范围（用下标记录）：从1~最后
第二趟：取出第二个元素，分别和后面元素依次做比较：如果该元素>其他元素，则交换位置...
共需要arr.length-1趟 比较范围： arr.length-1~arr.length*/
var arr = [9,3,1,6,4,2,3,6];
for(var i=0;i <arr.length;i++){
    for(var j=1;j <arr.length-1;j++){
        if(arr[i] > arr[j]){
            arr[i],arr[j] = arr[j],arr[i];
           
        }
    }
}
console.log(arr);

/*4、数组去重：思路分析：先编练外层数组找到索引，再根据外层数组的索引值找到内层数组，最后根据内层数组的索引输出每一项 */
var matrix = [
    [11,22,33],
    [44,55,66],
    [77,88,99],
    [11,22,33]
];
for(var i=0;i <matrix.length;i++){
    var arr = matrix[i]
    // console.log(arr);
    // console.log(arr.length);
    for(var j=0;j < arr.length;j++){
        var r = matrix[i][j];
        console.log(r);
    }
}
