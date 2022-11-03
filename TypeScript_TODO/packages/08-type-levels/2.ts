/*
 * @Author: fg
 * @Date: 2022-11-03 14:29:49
 * @LastEditors: fg
 * @LastEditTime: 2022-11-03 14:33:13
 * @Description: 类型级别
 */
type Result7 = 1 extends 1 | 2 | 3 ? 1 : 2; // 1
type Result8 = 'to' extends 'toto' | 'to' | 'o' ? 1 : 2; // 1
type Result9 = true extends true | false ? 1 : 2; // 1

type Result10 = string extends string | false | number ? 1 : 2; // 1