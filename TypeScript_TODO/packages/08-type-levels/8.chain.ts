/*
 * @Author: fg
 * @Date: 2022-11-03 15:13:09
 * @LastEditors: fg
 * @LastEditTime: 2022-11-03 15:14:45
 * @Description: 类型级别
 */
type VerboseTypeChain = never extends 'toto'
  ? 'toto' extends 'toto' | 'toto'
  ? 'toto' | 'to' extends string
  ? string extends {}
  ? string extends String
  ? String extends {}
  ? {} extends object
  ? object extends {}
  ? {} extends Object
  ? Object extends {}
  ? object extends Object
  ? Object extends object
  ? Object extends any
  ? Object extends unknown
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
  : 0
  : -1
  : -2
  : -3
  : -4
  : -5
  : -6
  : -7
  : -8;