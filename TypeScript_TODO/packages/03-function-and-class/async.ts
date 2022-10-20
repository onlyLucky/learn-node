/*
 * @Author: fg
 * @Date: 2022-10-20 15:00:32
 * @LastEditors: fg
 * @LastEditTime: 2022-10-20 15:14:49
 * @Description: async function
 */

async function asyncFun(): Promise<void> { }

function* genFunc(): Iterable<void> { }

async function* asyncGenFunc(): AsyncIterable<void> { }




/* function* */

/* 
定义一个生成器函数
生成器函数在执行时能暂停，后面又能从暂停处继续执行。

*/