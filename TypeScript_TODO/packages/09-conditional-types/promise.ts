/*
 * @Author: fg
 * @Date: 2022-11-07 10:24:12
 * @LastEditors: fg
 * @LastEditTime: 2022-11-07 13:32:43
 * @Description: promise
 */

type PromiseValue<T> = T extends Promise<infer V> ? V : T;

type PromiseValueResult1 = PromiseValue<Promise<number>>;//number
type PromiseValueResult2 = PromiseValue<number>;//number 但并没有发生提取

type PromiseValueResult3 = PromiseValue<Promise<Promise<boolean>>>;//Promise<boolean>

type _PromiseValue<T> = T extends Promise<infer V>
  ? V extends Promise<infer N>
  ? N
  : V
  : T;

type __PromiseValue<T> = T extends Promise<infer V> ? PromiseValue<V> : T