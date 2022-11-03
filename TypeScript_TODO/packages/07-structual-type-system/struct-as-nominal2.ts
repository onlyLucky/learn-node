/*
 * @Author: fg
 * @Date: 2022-11-03 11:29:30
 * @LastEditors: fg
 * @LastEditTime: 2022-11-03 11:42:13
 * @Description: 结构即定义 
 */
class CNY {
  private __tag!: void;
  constructor(public value: number) { }
}

class USD {
  private __tag!: void;
  constructor(public value: number) { }
}

const CNYCount = new CNY(100);
const USDCount = new USD(100);

function addCNY(source: CNY, input: CNY) {
  return source.value + input.value;
}
addCNY(CNYCount, CNYCount);

export { };