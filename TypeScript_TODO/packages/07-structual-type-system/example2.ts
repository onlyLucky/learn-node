/*
 * @Author: fg
 * @Date: 2022-11-03 14:25:24
 * @LastEditors: fg
 * @LastEditTime: 2022-11-03 14:25:25
 * @Description: content
 */
class Cat {
  eat() { }
}
class Dog {
  bark() { }
  eat() { }
}

function feedCat(cat: Cat) { }

feedCat(new Dog());

export { };