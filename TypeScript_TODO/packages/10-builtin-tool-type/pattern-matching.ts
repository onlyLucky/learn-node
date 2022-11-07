/*
 * @Author: fg
 * @Date: 2022-11-07 14:26:15
 * @LastEditors: fg
 * @LastEditTime: 2022-11-07 15:34:18
 * @Description: pattern-matching
 */


type FunctionType = (...args: any) => any;

type Parameters<T extends FunctionType> = T extends (...args: infer P) => any ? P : never;

type ReturnType<T extends FunctionType> = T extends (...args: any) => infer R ? R : never;

type FirstParameter<T extends FunctionType> = T extends (arg: infer P, ...args: any) => any ? P : never;

type FuncFoo = (arg: number) => void;
type FuncBar = (...args: string[]) => void;

type FooFirstParameter = FirstParameter<FuncFoo>;// number

type BarFirstParameter = FirstParameter<FuncBar>;// string

type classType = abstract new (...args: any[]) => any;

type ConstructorParameters<T extends ClassType> = T extends abstract new (...args: infer P) => any ? R : any

type InstanceType<T extends ClassType> = T extends abstract new (...args: any) => infer R ? R : any

export interface _ClassType<TInstance = any> {
  new(...args: any[]): TInstance
}

export { }


