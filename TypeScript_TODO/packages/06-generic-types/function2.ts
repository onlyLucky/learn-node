/*
 * @Author: fg
 * @Date: 2022-11-02 10:40:58
 * @LastEditors: fg
 * @LastEditTime: 2022-11-02 11:10:59
 * @Description: 泛型类型 function
 */

function handle<T extends string | number>(input: T): T { }

function swap<T extends number, U extends number>([start, end]: [T, U]): [U, T] {
  return [end, start];
}

function _handle<T>(payload: T): Promise<[T]> {
  return new Promise<[T]>((res, rej) => {
    res([payload])
  })
}

const handle2 = <T>(input: T): T => { }

const handle3 = <T extends any>(input: T): T => { };
