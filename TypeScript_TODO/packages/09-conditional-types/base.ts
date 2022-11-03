/*
 * @Author: fg
 * @Date: 2022-11-03 15:52:40
 * @LastEditors: fg
 * @LastEditTime: 2022-11-03 16:00:52
 * @Description: 条件判断
 */
type LiteralType<T> = T extends string ? 'string' : 'other';

type Res1 = LiteralType<'toto'>; // "string"
type Res2 = LiteralType<18>; // "other"

export type _LiteralType<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends null
  ? 'null'
  : T extends undefined
  ? 'undefined'
  : never;

type _Res1 = _LiteralType<'toto'>; // "string"
type _Res2 = _LiteralType<18>; // "number"
type _Res3 = _LiteralType<true>; // "boolean"

function universalAdd<T extends number | bigint | string>(x: T, y: T) {
  return x + (y as any);
}

universalAdd(599, 1); // T 填充为 599 | 1
universalAdd('toto', '599'); // T 填充为 toto | 599

function _universalAdd<T extends number | bigint | string>(
  x: T,
  y: T
): LiteralToPrimitive<T> {
  return x + (y as any);
}

export type LiteralToPrimitive<T> = T extends number
  ? number
  : T extends bigint
  ? bigint
  : T extends string
  ? string
  : never;

_universalAdd('toto', '599'); // string
_universalAdd(599, 1); // number
_universalAdd(10n, 10n); // bigint