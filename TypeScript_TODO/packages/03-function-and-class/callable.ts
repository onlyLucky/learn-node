/*
 * @Author: fg
 * @Date: 2022-10-20 15:56:27
 * @LastEditors: fg
 * @LastEditTime: 2022-10-20 16:05:43
 * @Description: callable
 */

class Foo { }

interface FooStruct {
  new(): Foo;
}

declare const NewableFoo: FooStruct;

const foo = new NewableFoo();
