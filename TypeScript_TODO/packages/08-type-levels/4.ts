/*
 * @Author: fg
 * @Date: 2022-11-03 14:45:29
 * @LastEditors: fg
 * @LastEditTime: 2022-11-03 14:56:43
 * @Description: 类型级别
 */
type Result14 = string extends String ? 1 : 2; // 1
type Result15 = String extends {} ? 1 : 2; // 1
type Result16 = {} extends object ? 1 : 2; // 1
type Result18 = object extends Object ? 1 : 2; // 1

type Tmp = string extends object ? 1 : 2; // 2

// type Result16 = {} extends object ? 1 : 2;
// type Result18 = object extends {} ? 1 : 2;

type Result17 = object extends Object ? 1 : 2;
type Result20 = Object extends object ? 1 : 2;

type Result19 = Object extends {} ? 1 : 2;
type Result21 = {} extends Object ? 1 : 2;