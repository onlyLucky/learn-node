/*
 * @Author: fg
 * @Date: 2022-10-20 15:44:25
 * @LastEditors: fg
 * @LastEditTime: 2022-10-20 15:46:27
 * @Description: static class
 */
class Foo {
  static staticHandler() { }
  public instanceHandler() { }
}

// COMPILED编译过后
var _Foo = /** @class */ (function () {
  function Foo() { }
  Foo.staticHandler = function () { };
  Foo.prototype.instanceHandler = function () { };
  return Foo;
})();

