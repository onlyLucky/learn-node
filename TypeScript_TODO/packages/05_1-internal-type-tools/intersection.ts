/*
 * @Author: fg
 * @Date: 2022-10-31 16:07:39
 * @LastEditors: fg
 * @LastEditTime: 2022-10-31 16:16:29
 * @Description: interface
 */

interface NameStruct {
  name: string;
}

interface AgeStruct {
  age: number;
}

type ProfileStruct = NameStruct & AgeStruct

const profile: ProfileStruct = {
  name: 'hello',
  age: 20
}

type StrAndNum = string & number;

type Struct1 = {
  primitiveProp: string;
  objectProp: {
    name: string;
  };
};

type Struct2 = {
  primitiveProp: number;
  objectProp: {
    age: number;
  };
};

type Composed = Struct1 & Struct2;

type PrimitivePropType = Composed['primitiveProp']; //never
type ObjectPropType = Composed['objectProp']; //{name: string, age: number}

type UnionIntersection1 = (1 | 2 | 3) & (1 | 2);//1|2
type UnionIntersection2 = (string | number | symbol) & string;//string
