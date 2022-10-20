/*
 * @Author: fg
 * @Date: 2022-10-20 13:53:20
 * @LastEditors: fg
 * @LastEditTime: 2022-10-20 14:42:44
 * @Description: literal 文字类型
 */

interface Res {
  code: 10000 | 10001 | 50000;
  status: 'success' | 'failure';
  data: any;
}
// 支持这种写法，但是当赋值与类型不一致的时候会报错
const str: 'literal' = 'literal';
const num: 599 = 599;
const bool: true = true;

// const str: 'literal' = 'literal2333'; X

interface Tmp {
  bool: true | false;
  num: 1 | 2 | 3;
  str: 'a' | 'b' | 'c';
}

interface Tmp {
  mixed: true | string | 599 | {} | (() => {}) | (1 | 2);
}

interface Tmp {
  user:
  | {
    vip: true;
    expires: string;
  }
  | {
    vip: false;
    promotion: string;
  };
}

declare var temp: Tmp;

if (temp.user.vip) {
  console.log(tmp.user.expires);
}

type Code = 10000 | 10001 | 50000;

type Status = 'success' | 'failure';