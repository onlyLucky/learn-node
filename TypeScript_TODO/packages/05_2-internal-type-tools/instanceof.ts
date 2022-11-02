/*
 * @Author: fg
 * @Date: 2022-11-01 16:34:31
 * @LastEditors: fg
 * @LastEditTime: 2022-11-01 16:38:27
 * @Description: instanceof
 */

class FooBase { }

class BarBase { }

class Foo extends FooBase {
  fooOnly() { }
}
class Bar extends BarBase {
  barOnly() { }
}

function handle(input: Foo | Bar) {
  if (input instanceof FooBase) {
    input.fooOnly()
  } else {
    input.barOnly()
  }
}

export { }