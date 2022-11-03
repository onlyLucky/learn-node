/*
 * @Author: fg
 * @Date: 2022-11-03 16:08:52
 * @LastEditors: fg
 * @LastEditTime: 2022-11-03 16:10:18
 * @Description: content
 */
type Func = (...args: any[]) => any;

type FunctionConditionType<T extends Func> = T extends (
  ...args: any[]
) => string
  ? 'A string return func!'
  : 'A non-string return func!';

//  "A string return func!"
type StringResult = FunctionConditionType<() => string>;
// 'A non-string return func!';
type NonStringResult1 = FunctionConditionType<() => boolean>;
// 'A non-string return func!';
type NonStringResult2 = FunctionConditionType<() => number>;