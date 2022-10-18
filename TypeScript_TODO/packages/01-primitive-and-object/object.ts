/*
 * @Author: fg
 * @Date: 2022-10-18 16:42:26
 * @LastEditors: fg
 * @LastEditTime: 2022-10-18 16:54:15
 * @Description: object
 */

interface IDescription {
  name: string;
  age: number;
  male: boolean;
}

const obj1: IDescription = {
  name: 'obj1',
  age: 20,
  male: false,
};

interface IDescription2 {
  name: string;
  age: number;
  male?: boolean;
  func?: Function;
}

const obj2: IDescription2 = {
  name: 'obj2',
  age: 20,
  male: false,
};

obj2.male = false;
obj2.func = () => { };

interface IDescription3 {
  readonly name: string;
  age: number;
}

const obj3: IDescription3 = {
  name: 'obj3',
  age: 20
};
// 只读属性不能进行更改