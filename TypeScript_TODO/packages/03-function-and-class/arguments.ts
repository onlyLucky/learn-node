/*
 * @Author: fg
 * @Date: 2022-10-20 15:15:15
 * @LastEditors: fg
 * @LastEditTime: 2022-10-20 15:21:50
 * @Description: function arguments
 */
function foo(name: string, age?: number): number {
  const inputAge = age || 18;
  return name.length + inputAge
}

function foo1(name: string, age: number = 18): number {
  const inputAge = age;
  return name.length + inputAge
}

function foo3(arg1: string, ...rest: any[]) { }

function foo4(arg1: string, ...rest: [number, boolean]) { }

foo4('function', 18, true)