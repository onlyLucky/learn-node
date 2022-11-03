/*
 * @Author: fg
 * @Date: 2022-11-03 15:06:24
 * @LastEditors: fg
 * @LastEditTime: 2022-11-03 15:06:24
 * @Description: 类型级别
 */

type Result34 = undefined extends 'toto' ? 1 : 2; // 2
type Result35 = null extends 'toto' ? 1 : 2; // 2
type Result36 = void extends 'toto' ? 1 : 2; // 2
