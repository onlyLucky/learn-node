/*
 * @Author: fg
 * @Date: 2022-10-18 17:13:43
 * @LastEditors: fg
 * @LastEditTime: 2022-10-20 11:32:17
 * @Description: void 
 */

function func1() { }
function func2() {
  return;
}
function func3() {
  return undefined;
}

const voidVar1: void = undefined;
const voidVar2: void = null;//X


/* TS 类型中的 any、void 和 never */


/* 
 **any**
 如果我们无法确定变量的类型时（或者无需确认类型时），我们可以将其指定为 any 类型。
 
 当我们给一个属性赋值为any类型

 - 这个变量就可以被赋值任意类型
 - 可以访问任意属性和方法
 - 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型

 **void**
 表示没有任何类型

 - 没有返回值的函数，其返回值类型为 void
 - 为 void 类型的变量，只能赋予 undefined 和 null

 **never**
 表示永远不会有值的一种类型

 返回never的函数必须存在无法达到的终点(抛出异常,函数不会有返回值；存在死循环，不会有返回值)
  


*/