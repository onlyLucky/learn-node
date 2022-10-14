/*
 * @Author: fg
 * @Date: 2022-10-14 11:29:41
 * @LastEditors: fg
 * @LastEditTime: 2022-10-14 11:43:39
 * @Description: content
 */

declare let v1: string;
declare let v2: string;

v1 = v2;
v2 = v1;


// 也就是外部的类库时，TypeScript 编译器不认识会报错，declare 关键字来声明全局变量，从而让 TypeScript 编译器能够识别该全局变量


/* 

declare 关键字除了可以声明全局变量之外，它还可以用来声明全局函数、全局类或全局枚举类型等

 - 全局变量被声明在 lib.es5.d.ts 声明文件 
 
*/