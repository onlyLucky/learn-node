/*
 * @Author: fg
 * @Date: 2022-10-20 16:46:00
 * @LastEditors: fg
 * @LastEditTime: 2022-10-20 16:52:46
 * @Description: any
 */

let anyVar: any = 'anyValue';

anyVar = false;
anyVar = 'anyVar';
anyVar = {
  site: 'over'
}

anyVar = () => { };

const var1: string = anyVar;
const val2: number = anyVar;
const val3: () => {} = anyVar;
const val4: {} = anyVar;

anyVar.foo.bar.baz();
anyVar[0][1][2].prop1;