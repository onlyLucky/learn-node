/*
 * @Author: fg
 * @Date: 2022-11-03 14:52:49
 * @LastEditors: fg
 * @LastEditTime: 2022-11-03 15:08:40
 * @Description: 类型级别
 */

type Result22 = Object extends any ? 1 : 2; // 1
type Result23 = Object extends unknown ? 1 : 2; // 1

type Result24 = any extends Object ? 1 : 2; // 1 | 2
type Result25 = unknown extends Object ? 1 : 2; // 2

type Result26 = any extends 'toto' ? 1 : 2; // 1 | 2
type Result27 = any extends string ? 1 : 2; // 1 | 2
type Result28 = any extends {} ? 1 : 2; // 1 | 2
type Result29 = any extends never ? 1 : 2; // 1 | 2

type Result30 = "I'm string!" | {} extends string ? 1 : 2; // 2

type Result31 = any extends unknown ? 1 : 2; // 1
type Result32 = unknown extends any ? 1 : 2; // 1


// 