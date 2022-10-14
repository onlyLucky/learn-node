/*
 * @Author: fg
 * @Date: 2022-10-14 17:28:36
 * @LastEditors: fg
 * @LastEditTime: 2022-10-14 17:51:53
 * @Description: array
 */

const arr1: string[] = [];
const arr2: Array<string> = [];
const arr3: string[] = ['a', 'b', 'c'];
console.log(arr3[599])

const arr4: [string, string, string] = ['a', 'b', 'c'];

const arr5: [string, number, boolean] = ['a', 0, true]
console.log(arr4[599]);

const arr6: [string, number?, boolean?] = ['a']

// 这么写也可以
// const arr6: [string, number?, boolean?] = ['a', , ,];

type TupleLength = typeof arr6.length;// 1 | 2 | 3
const arr7: [name: string, age: number, male: boolean] = ['TypeScript', 3, false]

const [name, age, male, other] = arr5;

export { }