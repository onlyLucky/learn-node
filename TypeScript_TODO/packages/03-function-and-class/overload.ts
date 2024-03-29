/*
 * @Author: fg
 * @Date: 2022-10-20 15:47:01
 * @LastEditors: fg
 * @LastEditTime: 2022-10-20 15:54:47
 * @Description: function 重写
 */
function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo)
  } else {
    return foo * 599
  }
}

function func1(foo: number, bar: true): string;
function func1(foo: number, bar?: false): number;
function func1(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo)
  } else {
    return foo * 599
  }
}

const res1 = func1(599); // number
const res2 = func1(599, true); // string
const res3 = func1(599, false); // number