/*
 * @Author: fg
 * @Date: 2022-11-01 14:08:53
 * @LastEditors: fg
 * @LastEditTime: 2022-11-01 14:08:54
 * @Description: 文档代码
 */

// Partial
type Partial<T> = {
  [P in keyof T]?: T[P];
};