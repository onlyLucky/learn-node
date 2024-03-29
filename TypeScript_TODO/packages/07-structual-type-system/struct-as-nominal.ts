/*
 * @Author: fg
 * @Date: 2022-11-03 09:44:28
 * @LastEditors: fg
 * @LastEditTime: 2022-11-03 11:34:44
 * @Description: 结构即定义 
 */

export declare class TagProtector<T extends string>{
  protected __tag__: T;
}

export type Nominal<T, U extends string> = T & TagProtector<U>;
export type CNY = Nominal<number, 'CNY'>

export type USD = Nominal<number, 'USD'>

const CNYCount = 100 as CNY;
const USDCount = 100 as USD;

function addCNY(source: CNY, input: CNY) {
  return (source + input) as CNY
}

console.log(addCNY(CNYCount, CNYCount))