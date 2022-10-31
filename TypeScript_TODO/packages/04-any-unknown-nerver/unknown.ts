/*
 * @Author: fg
 * @Date: 2022-10-20 16:53:24
 * @LastEditors: fg
 * @LastEditTime: 2022-10-31 09:55:39
 * @Description: unknown
 */

let unknownVar: unknown = 'unknown';

unknownVar = false;
unknownVar = 'hello world';
unknownVar = {
  site: 'test'
};

unknownVar = () => { };

// 将类型unknown赋值给其他类型(string,number,boolean....)会报错,除了any unknown
const var1: string = unknownVar;// Error
const var2: boolean = unknownVar;// Error
const val3: () => {} = unknownVar; // Error
const val4: {} = unknownVar; // Error

const val5: any = unknownVar;
const val6: unknown = unknownVar;

unknownVar.foo();// 报错：对象类型为 unknown
(unknownVar as { foo: () => {} }).foo();