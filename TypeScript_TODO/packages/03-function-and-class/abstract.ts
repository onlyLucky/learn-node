/*
 * @Author: fg
 * @Date: 2022-10-20 16:06:25
 * @LastEditors: fg
 * @LastEditTime: 2022-10-20 16:36:13
 * @Description: class abstract
 */

abstract class AbsFoo {
  abstract absProp: string;
  abstract get absGetter(): string;
  abstract absMethod(name: string): string;
}

class Foo implements AbsFoo {
  absProp: string = 'Foo';
  get absGetter() {
    return 'Foo'
  }
  absMethod(name: string): string {
    return name
  }
}

interface FooStruct {
  absProp: string;
  get absGetter(): string;
  absMethod(input: string): string;
}

class Foo1 implements AbsFoo {
  absProp: string = 'Foo';
  get absGetter() {
    return 'Foo'
  }
  absMethod(name: string): string {
    return name
  }
}

// class 抽象类和interface都可以进行implements 实现

export { }