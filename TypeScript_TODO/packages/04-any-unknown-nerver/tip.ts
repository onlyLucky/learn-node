/*
 * @Author: fg
 * @Date: 2022-10-31 15:29:28
 * @LastEditors: fg
 * @LastEditTime: 2022-10-31 15:31:10
 * @Description: content
 */
interface IStrue {
  foo: string;
  bar: {
    barPropA: string;
    barPropB: number;
    barMethod: () => void;
    baz: {
      handler: () => Promise<void>;
    };
  }
}

const obj = <IStrue>{
  bar: {
    baz: {},
  }
}