/*
 * @Author: fg
 * @Date: 2022-11-03 14:26:25
 * @LastEditors: fg
 * @LastEditTime: 2022-11-03 14:26:25
 * @Description: content
 */
class Cat {
  eat(): boolean {
    return true;
  }
}

class Dog {
  eat(): number {
    return 599;
  }
}

function feedCat(cat: Cat) { }

// 报错！
// feedCat(new Dog());