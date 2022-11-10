/*
 * @Author: fg
 * @Date: 2022-11-09 16:25:57
 * @LastEditors: fg
 * @LastEditTime: 2022-11-10 16:19:21
 * @Description: compare
 */

function fn(dog: Dog) {
  dog.bark();
}

type CorgiFunc = (input: Corgi) => void;
type AnimalFunc = (input: Animal) => void;

const func1: CorgiFunc = fn

const func2: AnimalFunc = fn

export { };
