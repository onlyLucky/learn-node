/*
 * @Author: fg
 * @Date: 2022-11-03 14:33:36
 * @LastEditors: fg
 * @LastEditTime: 2022-11-03 14:43:37
 * @Description: 类型级别
 */
type Result11 = 'to' | 'toto' | 'toTo' extends string ? 1 : 2; // 1
type Result12 = {} | (() => void) | [] extends object ? 1 : 2; // 1

type Result13 = 'toto' extends 'toto' | '599'
  ? 'toto' | '599' extends string
  ? 2
  : 1
  : 0;//2