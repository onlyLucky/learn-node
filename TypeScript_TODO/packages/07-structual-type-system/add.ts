/*
 * @Author: fg
 * @Date: 2022-11-03 11:43:12
 * @LastEditors: fg
 * @LastEditTime: 2022-11-03 13:54:06
 * @Description: content
 */
type USD = number;
type CNY = number;

const CNYCount: CNY = 200;
const USDCount: USD = 200;

function addCNY(source: CNY, input: CNY) {
  return source + input;
}

addCNY(CNYCount, USDCount)