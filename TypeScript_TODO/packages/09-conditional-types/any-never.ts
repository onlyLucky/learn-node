/*
 * @Author: fg
 * @Date: 2022-11-03 15:43:18
 * @LastEditors: fg
 * @LastEditTime: 2022-11-03 15:50:24
 * @Description: 条件判断
 */

type Tmp1 = any extends string ? 1 : 2; // 1 | 2

type Tmp2<T> = T extends string ? 1 : 2;
type Tmp2Res = Tmp2<any>; // 1 | 2

type Tmp3 = never extends string ? 1 : 2; // 1

type Tmp4<T> = T extends string ? 1 : 2;
type Tmp4Res = Tmp4<never>; // never

type Intersection<A, B> = A extends B ? A : never;

type IntersectionRes = Intersection<1 | 2 | 3, 2 | 3 | 4>; // 2 | 3