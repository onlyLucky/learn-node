/*
 * @Author: fg
 * @Date: 2022-11-07 17:43:41
 * @LastEditors: fg
 * @LastEditTime: 2022-11-07 18:00:29
 * @Description: void
 */

type CustomHandler = (name: string, age: number) => void;

const handle1: CustomHandle = (name, age) => true;
const handle2: CustomHandle = (name, age) => 'toto';
const handle3: CustomHandle = (name, age) => null;
const handle4: CustomHandler = (name, age) => undefined;

const result1 = handler1('toto', 30); // void
const result2 = handler2('toto', 30); // void
const result3 = handler3('toto', 30); // void
const result4 = handler4('toto', 30); // void

const arr: number[] = [];
const list: number[] = [1, 2, 3];

list.forEach((item) => arr.push(item))
list.forEach(() => arr.push())

export { }