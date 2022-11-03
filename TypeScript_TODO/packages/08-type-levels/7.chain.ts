/*
 * @Author: fg
 * @Date: 2022-11-03 15:07:23
 * @LastEditors: fg
 * @LastEditTime: 2022-11-03 15:07:24
 * @Description: 类型级别
 */
type TypeChain = never extends 'toto'//true
  ? 'toto' extends 'toto' | '599'
  ? 'toto' | '599' extends string
  ? string extends String
  ? String extends Object
  ? Object extends any
  ? any extends unknown
  ? unknown extends any
  ? 8
  : 7
  : 6
  : 5
  : 4
  : 3
  : 2
  : 1
  : 0;

  // 8