/*
 * @Author: fg
 * @Date: 2022-10-31 10:04:43
 * @LastEditors: fg
 * @LastEditTime: 2022-10-31 10:41:46
 * @Description: 双类型推断
 */
const str: string = 'hello';

(str as unknown as { handler: () => {} }).handler();
// 使用尖括号断言
(<{ handle: () => {} }>(<unknown>str)).handle();