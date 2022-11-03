/*
 * @Author: fg
 * @Date: 2022-11-03 13:56:05
 * @LastEditors: fg
 * @LastEditTime: 2022-11-03 14:24:39
 * @Description: content
 */
class Cat {
  eat() { }
}
class Dog {
  eat() { }
}

function feedCat(cat: Cat) { }

feedCat(new Dog());