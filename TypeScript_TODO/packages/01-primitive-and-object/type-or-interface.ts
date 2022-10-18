/*
 * @Author: fg
 * @Date: 2022-10-18 16:55:00
 * @LastEditors: fg
 * @LastEditTime: 2022-10-18 17:13:13
 * @Description: type interface
 */


/* 相同之处 */
// 1.描述对象或函数
type Point = {
  x: number;
  y: number;
};

type SetPoint = (x: number, y: number) => void;
// ---
interface Point {
  x: number;
  y: number;
}

interface SetPoint {
  (x: number, y: number): void;
}

// 2.类型别名和接口都支持扩展（类型别名通过 &（交叉运算符）来扩展，而接口通过 extends 的方式来扩展。）

type Animal = {
  name: string
}

type Bear = Animal & {
  honey: boolean
}

// ---
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}


// 接口也可以通过 extends 来扩展类型别名定义的类型

type Animal = {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

// 同样，类型别名也可以通过 &（交叉运算符）来扩展已定义的接口类型

interface Animal {
  name: string
}

type Bear = Animal & {
  honey: boolean
}

/* 之间区别 */

// 1.类型别名可以为基本类型、联合类型或元组类型定义别名，而接口不行
type MyNumber = number;
type StringOrNumber = string | number;
type Point = [number, number];

// 2.同名接口会自动合并，而类型别名不会
interface User {
  name: string;
}

interface User {
  id: number;
}

let user: User = { id: 7, name: "user" };
user.id; // 7
user.name; // "user"

// 同名类型别名会冲突

// 利用同名接口自动合并的特性，在开发第三方库的时候，我们就可以为使用者提供更好的安全保障

/* 
  type 和 interface 之间有什么区别

    使用类型别名的场景：
    - 定义基本类型的别名时，使用 type
    - 定义元组类型时，使用 type
    - 定义函数类型时，使用 type
    - 定义联合类型时，使用 type
    - 定义映射类型时，使用 type
    - 使用接口的场景：
    ---
    需要利用接口自动合并特性的时候，使用 interface
    定义对象类型且无需使用 type 的时候，使用 interface

  参考内容： https://www.bilibili.com/video/BV1HB4y1y7KG
*/