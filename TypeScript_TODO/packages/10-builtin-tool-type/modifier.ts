/*
 * @Author: fg
 * @Date: 2022-11-07 14:04:50
 * @LastEditors: fg
 * @LastEditTime: 2022-11-07 14:59:04
 * @Description: modifier
 */

type Partial<T> = {
  [P in keyof T]?: T[P];
}

type Required<T> = {
  [P in keyof T]-?: T[P];
};

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

export { };
