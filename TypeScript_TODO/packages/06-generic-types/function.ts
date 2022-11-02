/*
 * @Author: fg
 * @Date: 2022-11-02 10:28:09
 * @LastEditors: fg
 * @LastEditTime: 2022-11-02 10:40:45
 * @Description: 泛型类型 function
 */
function handle1(input: any): any { }
function handle2(input: string | number | {}): string | number | {} { }
function handle<T>(input: T): T { }

const author = 'toto';// 使用 const 声明，被推导为 "toto"

const authorAge = 18;// 使用 let 声明，被推导为 number

handle(author); // 填充为字面量类型为“toto”
handle(authorAge); // 填充为基础类型 number

function swap<T, U>([start, end]: [T, U]): [U, T] {
  return [end, start]
}

const swapped1 = swap<['toto', 18]>
const swapped2 = swap<[null, 18]>
const swapped3 = swap<[{}]>

export { }

