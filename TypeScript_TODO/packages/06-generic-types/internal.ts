/*
 * @Author: fg
 * @Date: 2022-11-02 17:10:37
 * @LastEditors: fg
 * @LastEditTime: 2022-11-02 18:00:31
 * @Description: internal内部泛型
 */

function p() {
  return new Promise<boolean>((resolve, reject) => {
    resolve(true)
  })
}

interface PromiseConstructor {
  resolve<T>(value: T | PromiseLike)
}

declare var Promise: PromiseConstructor;

const arr: Array<number> = [1, 2, 3];

// 类型“string”的参数不能赋给类型“number”的参数
arr.push('toto');
// 类型“string”的参数不能赋给类型“number”的参数
arr.includes('toto')

// number | undefined
arr.find(() => false);

arr.reduce((prev, curr, idx, arr) => {
  return prev
}, 1)

arr.reduce((prev, curr, idx, arr) => {
  return prev;
}, []);

arr.reduce<number[]>((prev, curr, idx, arr) => {
  return prev;
}, []);
