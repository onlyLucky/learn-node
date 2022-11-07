/*
 * @Author: fg
 * @Date: 2022-11-07 17:28:37
 * @LastEditors: fg
 * @LastEditTime: 2022-11-07 17:41:11
 * @Description: union 联合
 */
class Base {
  foo!: number;
}

class Foo {
  foo!: number;
}

class Bar extends Foo {
  bar!: number;
}

let f1: { (input: Foo): void } | { (input: Bar): void };
// 函数“input”隐式具有any类型。

f1 = (input) => { };// y: any

let f2: { (raw: number): (input: Foo) => void } | { (raw: number): (input: Bar) => void };

f2 = (raw) => { return (input) => { } }

let f3: { (input: Foo | Bar): void };
f3 = (input) => { }; //y: any