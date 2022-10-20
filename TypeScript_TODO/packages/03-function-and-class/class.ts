/*
 * @Author: fg
 * @Date: 2022-10-20 15:28:53
 * @LastEditors: fg
 * @LastEditTime: 2022-10-20 15:40:54
 * @Description: class
 */

class Foo {
  prop: string;
  constructor(inputProp: string) {
    this.prop = inputProp;
  }
  print(addon: string): void {
    console.log(`${this.prop} and ${addon}`)
  }
  get propA(value: sting) {
    return `${this.prop}+A`;
  }
  set propA(value: string) {
    this.propA = `${value}+A`
  }
}

const _Foo = class {
  prop: string;
  constructor(inputProp: string) {
    this.prop = inputProp;
  }
  print(addon: string): void {
    console.log(`${this.prop} and ${addon}`)
  }
  // ...
}

class MoFiFiledFoo {
  private prop: string;
  constructor(inputProp: string) {
    this.prop = inputProp;
  }
  protected print(addon: string): void {
    console.log(`${this.prop} and ${addon}`)
  }
  public get propA(): string {
    return `${this.prop}+A`;
  }
  public set propA(value: string) {
    this.propA = `${value}+A`;
  }
}

class Foo2 {
  constructor(public arg1: string, private arg2: boolean) { }
}

new Foo2('foo2', true)
