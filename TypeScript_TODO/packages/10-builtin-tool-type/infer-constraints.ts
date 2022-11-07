/*
 * @Author: fg
 * @Date: 2022-11-07 13:36:25
 * @LastEditors: fg
 * @LastEditTime: 2022-11-07 14:04:06
 * @Description: infer
 */

type FirstArrayItemType<T extends any[]> = T extends [infer P, ...any[]]
  ? P extends string
  ? P
  : never
  : never;

type Tmp1 = FirstArrayItemType<[599, 'toto']>; //never;
type Tmp2 = FirstArrayItemType<['toto', 599]>;//toto;
type Tmp3 = FirstArrayItemType<['toto']>//toto;


type _FirstArrayItemType<T extends any[]> = T extends [infer P extends string, ...any[]] ?
  P
  : never;

