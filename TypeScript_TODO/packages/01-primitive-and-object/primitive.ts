/*
 * @Author: fg
 * @Date: 2022-10-14 14:01:51
 * @LastEditors: fg
 * @LastEditTime: 2022-10-14 17:27:52
 * @Description: base data type
 */

const name: string = 'TypeScript';
const age: number = 3;
const male: boolean = false;
const undef: undefined = undefined;
const nul: null = null;

const obj: object = { name, age, male }
const bigintVar1: bigint = 9007199254740991n;
const bigintVar2: bigint = BigInt(9007199254740991);
const symbolVar: symbol = Symbol('unique');

const tmp1: null = null;
const tmp2: undefined = undefined;
// 以下两个仅在关闭 strictNullChecks 时成立
const tmp3: string = null;
const tmp4: string = undefined;

/* 
一、 Undefined与Null

 - Undefined: 变量最原始的状态，而非人为操作的结果
  
  1.声明一个变量，但是没有赋值
  2.访问对象上不存在的属性或者未定义的变量
  3.函数定义了形参，但没有传递实参
  4.使用void对表达式求值 (void 操作符 对任何表达式都返回undefined)

 - null：被人为的重置为空对象，而非一个变量最原始的状态 

  用来明确当前初始化一个对象object，人为的确定其为null，用来区分原始状态；
  另一个层面上是用来方便垃圾收集器回收object的内存，解除对象属性值之间的引用；

  ```javascript
  var data = null;
  console.log(typeof data); // "object"
  ```
  这个从逻辑考究之下，null更像是当初js语言设计留下来的一个空指针对象，释放对象，方便回收

二、BigInt 是一种新的基础数据类型，它的出现填补了JS在大数表达和运算上的空缺，在使用大整数id等场景时，不再需要使用库。
  但是不能直接拿 Number 和 BigInt 进行运算，而需要先显示转换其中的一种类型。
 
三、Symbol  用于创建独一无二的值
  - 创建
  ```javascript
    const s = Symbol();
    console.log(typeof s);  // "symbol"
  ```                                           
  传入相同的参数，生成的 symbol 值也是不相等的，因为 Symbol 本来就是独一无二的意思

  - 检测
    Symbol.for 方法可以检测上下文中是否已经存在使用该方法且相同参数创建的 symbol 值，如果存在则返回已经存在的值，如果不存在则新建。
  - 查看key
    Symbol.keyFor 方法返回一个使用 Symbol.for 方法创建的 symbol 值的 key
*/