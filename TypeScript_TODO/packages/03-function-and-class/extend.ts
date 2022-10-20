/*
 * @Author: fg
 * @Date: 2022-10-20 16:39:12
 * @LastEditors: fg
 * @LastEditTime: 2022-10-20 16:44:10
 * @Description: class extend
 */
class Base {
  print() { }
}

// 调用父类的函数
class Derived extends Base {
  print() {
    super.print();
    // ...
  }
}

class Base1 {
  printWithLove() { }
}

// 重写
class Derived1 extends Base1 {
  override print() {
    // ...
  }
}