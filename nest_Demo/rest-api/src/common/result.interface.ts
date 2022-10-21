/*
 * @Author: fg
 * @Date: 2022-10-21 17:43:27
 * @LastEditors: fg
 * @LastEditTime: 2022-10-21 17:43:27
 * @Description: 定义通用的API接口返回数据类型
 */

export interface Result {
  code: number;
  message: string;
  data?: any;
}