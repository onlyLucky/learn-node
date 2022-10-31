/*
 * @Author: fg
 * @Date: 2022-10-31 15:34:46
 * @LastEditors: fg
 * @LastEditTime: 2022-10-31 16:07:09
 * @Description: interface & type
 */
interface AllStringTypes {
  [key: string]: string;
}

type _AllStringTypes = {
  [key: string]: string;
}

type PropType1 = AllStringTypes['type'];
type PropType2 = AllStringTypes['233'];

const foo: AllStringTypes = {
  type: '2333'
}

const _foo: AllStringTypes = {
  type: '233',
  233: 'type',
  [Symbol('ddd')]: 'symbol'
}

interface __AllStringTypes {
  // 类型 "number"的属性 "propA"不能赋给 "string"索引类型 "boolean"
  propA: number;
  [key: string]: boolean;
}

interface AnyTypeHere {
  [key: string]: any;
}

const __foo: AnyTypeHere['type'] = 'any value';

interface Foo {
  type: 1;
  size: 2;
}
// type | size
type FooKeys = keyof Foo;

interface NumberRecord {
  [key: string]: number;
}

type PropType = NumberRecord[string];// number

interface Foo {
  propA: number;
  propB: boolean;
}

type PropAType = Foo['propA'];// number
type PropBType = Foo['propB'];// boolean

interface Foo {
  propA: number;
  propB: boolean;
  propC: string;
}

// string | number | boolean
type PropTypeUnion = Foo[keyof Foo];

