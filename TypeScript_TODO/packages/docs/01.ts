/*
 * @Author: fg
 * @Date: 2022-11-01 14:08:53
 * @LastEditors: fg
 * @LastEditTime: 2022-11-01 14:27:50
 * @Description: 文档代码
 */

// Partial
type Partial<T> = {
  [P in keyof T]?: T[P];
};

// Required
/**
 * Make all properties in T required
 */
type Required<T> = {
  [P in keyof T]-?: T[P];
};
// 通过 -? 移除了可选属性中的 ?，使得属性从可选变为必选的。


type PartialPointX = { x: number; };
type Point = PartialPointX & { y: number; };

let point: Point = {
  x: 1,
  y: 1
}

interface X {
  c: string;
  d: string;
}

interface Y {
  c: number;
  e: string
}

type XY = X & Y;
type YX = Y & X;

let p: XY;
let q: YX;



interface D { d: boolean; }
interface E { e: string; }
interface F { f: number; }

interface A { x: D; }
interface B { x: E; }
interface C { x: F; }

type ABC = A & B & C;

let abc: ABC = {
  x: {
    d: true,
    e: 'semlinker',
    f: 666
  }
};

console.log('abc:', abc);