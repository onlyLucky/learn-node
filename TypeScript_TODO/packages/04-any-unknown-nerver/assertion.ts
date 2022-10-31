/*
 * @Author: fg
 * @Date: 2022-10-31 09:56:16
 * @LastEditors: fg
 * @LastEditTime: 2022-10-31 10:03:54
 * @Description: assertion类型断言
 */

const str: sting = "hello world";

(str as any).func().foo().prop;

function foo(union: string | number) {
  if ((union as string).includes('hello')) {

  }
  if ((union as number).toFixed() === '599') {

  }
}

interface IFoo {
  name: string;
}

declare const obj: {
  foo: IFoo;
}
const { foo = {} as IFoo } = obj;

export { }
