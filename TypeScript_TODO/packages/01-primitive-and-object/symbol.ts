/*
 * @Author: fg
 * @Date: 2022-10-14 22:57:54
 * @LastEditors: fg
 * @LastEditTime: 2022-10-14 23:12:59
 * @Description: symbol
 */
const uniqueSymbolFoo: unique symbol = Symbol('foo');

//类型不兼容
const uniqueSymbolBar: unique symbol = uniqueSymbolFoo;

const uniqueSymbolBaz: typeof uniqueSymbolFoo = uniqueSymbolFoo
