/*遍历相关算法 */
//题目：求数组中每一项的总和、平均数？
var arr = [100,99,98,97,96];
//定义累加器sum
var sum = 0;
//遍历数组，每遍历一个数字，就把这个数字累加到累加器中
for(var i = 0;i < arr.length;i++){
    sum = sum + arr[i];
}
console.log(sum);//490
//题目：求数组项的最大值和最小值？
var arr = [100,99,98,97,96];
//定义两个变量：max表示当前寻找到的最大轴。默认是arr[0]
var max = arr[0];
var min = arr[0];
//遍历数组：从下标为1开始遍历数组
for(var i = 1;i < arr.length;i++){
    if (arr[i] > max){
        max = arr [i];
    }else if(arr[i] < min){
        min =  arr [i];
    }
}
console.log(max);//100
console.log(min);//96

/*！！！常考：数组去重：去掉数组中重复项 */
var arr = [1,1,1,4,4,2,1,3,3];
//结果数组
var arr1 = [];
for(var i = 0;i < arr.length;i++){
    //判断遍历到的这项是否在结果数组中，如果不再就推入
    //includes()方法用来判断某项是否在数组中（老师解法思路清晰）
    if(!arr1.includes(arr[i])){
        arr1.push(arr[i]);
    }
}
console.log(arr1);//[ 1, 4, 2, 3 ]
/*！！！常考：随机样本：请随机从原数组中取3项*/
//思路：准备一个空数组，遍历原数组，随机选择一项，推入结果数组，并将这项删除  
var arr = [3,6,10,5,8,9];
var result = [];
for(var i=0;i <3;i++){
    //随机选择一项的下标，数组的下标[0~(arr,length-1)]
    //random公式：parseInt(Math.random()*b-a+1)) + a;（重点记忆公式）
    var n = parseInt(Math.random() * arr.length);//不直接写数组长度是因为数组长度会发生变化
    //吧该项推入结果数组
    result.push(arr[n]);
    //删除这项，防止重复被随机到（重点记忆公式）
    arr.splice(n,1);
}
console.log(result);//[ 9, 3, 5 ]

/*冒泡排序核心思想：一趟一趟地进行多项两两比较   （！！常考面试题）
4个数字，共需要比较3趟，比较次数为3+2+1=6次
n个数字，共需要比较n-1趟，比较次数为n(n-1）/2次*/
var arr = [6,2,9,3,8,1];
//外层循环：一趟一趟比较，趟数就是i = arr.length-1
for(var i=1;i<arr.length;i++){
    //内层循环：两两比较  ？？？
    for(var j = arr.length-1;j >= i;j--){
        //判断项的大小
        if(arr[j] < arr[j-1]){
            //该项比前一项小了，那么就交换两个变量的位置
            var temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
    }
    // console.log(arr);
}
console.log(arr);

/*二维数组：以数组作为数组元素的数组，即“数组的数组” */
var matrix = [
    [11,22,33],
    [44,55,66],
    [77,88,99],
    [11,22,33]
];
console.log(matrix.length);//4
//循环输出二维数组中的每一个项
for(var i=0;i < 4;i++){
    for(var j=0;j < 3;j++){
        console.log(matrix[i][j]);
    }
}

