// 第一遍理解记忆：2023-2-15 + 2-16 + 2-17  理论联系实际生活中的小例子吧！！！！
/*数据类型 */
// 1、基本数据类型    typeof检测结果
// （1）Number       (number)
// （2）String       (string)
// （3）Boolean      (boolean)
// （4）Undefined    (undefined)
// （5）Null         重点:!!!(object)!!!
// 2、复杂数据类型(引用数据类型):Object、Array、Function、RegExp、Date、Map、Set等
// 3、typeof运算符:检测数据类型；不是内置函数
console.log(typeof 5);//number
console.log(typeof a);//undefined
console.log(typeof true);//boolean

/*基本数据类型 */
//1、null
//（1）定义：表示空、空对象
//（2）使用场景：将对象销毁、数组销毁、删除事件监听    eg:box.onclick = null;
//（3）typeof检测结果：object
var a = null;
console.log(typeof a);//object
//2、undefined
//（1）定义：没有被赋值的变量默认值是undefined
//（2）typeof检测结果：undefined
console.log( typeof undefined);//undefined
//3、Boolean：布尔值：true(真)和false(假)
var b = true;
console.log(typeof b);//boolean
//4、字符串(String)
//（1）定义：人类自然语言，使用单、双引号引起来
console.log("1",typeof "1");//1  string
// //（2）拼串：
// //串串(+)
console.log('abc'+'bcd');//abcbcd
// //串量：将一个变量的值插入到字符串中
var c = 1;
var str = "我是第一名";
console.log(str,c)
// //（3）空串：''、""
var str = "";
console.log(typeof str);//string
// //（4）属性：length：字符串的长度  xxx.length
var str = "avsjjdjduddd";
console.log(str.length);//12
var str = "1234555666677";
console.log(str.length);//13
//（5）方法：打点调用的函数                           功能                  参数【()中写的内容】
//charAt()                                   得到指定位置字符                   索引从0开始
var str = "abbdjdid";
console.log(str.charAt(0));//a
//substring(a,b)                                  提取子串       //从a开始到b结束（不包括b）的子串;
                                                                //省略b，则返回的子串会一直到字符串的结尾；
                                                                //可以自动交换两个参数a、b的位置，但表内为负数
console.log(str.substring(3,7));//djdi   
//substr(a,b)                                    提取子串(长度)  //得到从a开始的长度为b的子串；
                                                                //省略b，则返回的子串会一直到字符串的结尾；
                                                                //a可以是负数，表示倒数位置
console.log(str.substr(0,3));//abb
console.log(str.substr(-1,3));//d
//slice(a,b)                                     提取子串        //从a开始到b结束（不包括b处）的子串;
                                                                //省略b，则返回的子串会一直到字符串的结尾；
                                                                //a可以是负数，表示倒数位置，但不能交换2个参数位置
console.log(str.slice(0,3));//abb
//toUpperCase()                                将字符串变为大写
console.log(str.toUpperCase());//ABBDJDID
//toLowerCase()                                将字符串变为小写
console.log(str.toLowerCase());//abbdjdid
//indexOf()    这个爱忘记！！！！                   检索字符串     //返回某个指定的字符在字符串中首次出现的位置；
var str = "abbdjdid";                                           //如果字符串值没有出现，则返回-1
console.log(str.indexOf('a'));//0 
//5、Number（数字）
//（1）特点：不分大小、整浮、正负(重点！！)
console.log(typeof 1);//number
console.log(typeof 1.34445);//number
console.log(typeof -19);//number
//（2）科学计数法：较大或较小数（绝对值较小）
console.log(3e8);//300000000  3的后边有8个0
console.log(3e-3);//0.003    3的前边后3位
console.log(.3e5);//30000    0.3的5次方
//（3）不同进制的数字：
// 二进制以0b开头
console.log(0b1000);//8
//八进制以0开头
console.log(0712);//458
//（4）NaN：一个值：not a number即不是一个数，但它是Number类型
console.log(typeof NaN);//number
console.log(0 / 0);//NaN

/* 数据类型转换*/
//1、使用Number()函数
//（1）字符串--》数字：（全能）
//纯数字字符串转为数字
console.log(Number("1233"));//1233
// 非纯数字字符串转为NaN
console.log(Number("123年"));//NaN
console.log(Number("1+1"));//NaN
//（2）空串转为0
console.log(Number(""));//0
//（3）布尔值--》数字
console.log(Number(true));//1
console.log(Number(false));//0
//（4）undefined、null--》数字：undefined变为NaN;null变为0
console.log(Number(null));//0
console.log(Number(undefined));//NaN
//2、使用parseInt()函数：字符串--》整数
console.log(parseInt("123"));//123
console.log(parseInt("3.996"));//3        （1）自动截掉第一个非数字字符后的所有字符;不四舍五入
console.log(parseInt("3.14是圆周率"));//3  （2）所有文字都会被截掉
console.log(parseInt("哈哈哈123"));//NaN   （3）如果字符串不是以数字开头，则转为NaN
console.log(parseInt(-122));//-122
console.log(parseInt("123px;"));//123 应用在像素上
//3、使用parseFloat()函数：字符串--》浮点数
console.log(parseFloat("32.3nbddd"));//32.3
console.log(parseFloat("true"));//NaN
console.log(parseFloat("我找到工作了!"));//NaN
//4、使用String()函数:全能函数,啥都可以转
//（1）数字--》字符串：变为长得”相同“的字符串；非10进制转为10进制的值
console.log(String(123));//123
console.log(String(NaN));//NaN
console.log(String(Infinity));//Infinity
console.log(String(2e3));//2000
//（2）布尔值--》字符串：变为“长得相同”的字符串
console.log(String(true));
console.log(String(false));
//（3）undefined和null--》字符串:变为“长得相同”的字符串
console.log(String(undefined));//undefined
console.log(String(null));//null
//5、使用toString()方法：xxx.toString()           只有一个方法！！！
console.log((3).toString());//3
var num = 4;
console.log(num.toString());//4
//6、使用Boolean()函数:false情况:0 null 空串 undefined NaN
//（1）数字--》布尔值：0和NaN转为false,其他数字转为true
console.log(Boolean(0));//false
console.log(Boolean(NaN));//false
//（2）布尔值--》布尔值：空字符串转为false,其他转为true
console.log(Boolean(""));//false
//（3）undefined和null--》布尔值：都转为false
console.log(Boolean(null));//false

//难点内容
console.log(parseInt('3.6'+'5.1'));//第一步:拼串:'3.65.1'  第二步:转为整型:3
console.log(Boolean('false'));//true
console.log(0/0);//NaN （！！！重点记忆）
console.log(4/0);//Infinity   （！！！重点记忆）
//请说出substring(),slice(),substr()方法的区别?
console.log('abcde'.slice(3,2));//啥也没有,因为slice()方法不支持参数交换位置
console.log('abcde'.substring(3,2));//c (3,2)会自动被JS解释器转为(2,3),表示从索引2开始,到索引3结束








