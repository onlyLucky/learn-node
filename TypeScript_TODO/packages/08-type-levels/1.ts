/*
 * @Author: fg
 * @Date: 2022-11-03 14:28:51
 * @LastEditors: fg
 * @LastEditTime: 2022-11-03 14:30:13
 * @Description: 类型级别
 */
type Result1 = 'toto' extends string ? 1 : 2; // 1
type Result2 = 1 extends number ? 1 : 2; // 1
type Result3 = true extends boolean ? 1 : 2; // 1
type Result4 = { name: string } extends object ? 1 : 2; // 1
type Result5 = { name: 'toto' } extends object ? 1 : 2; // 1
type Result6 = [] extends object ? 1 : 2; // 1