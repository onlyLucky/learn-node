/*
 * @Author: fg
 * @Date: 2022-10-18 14:26:02
 * @LastEditors: fg
 * @LastEditTime: 2022-10-18 16:41:58
 * @Description: object
 */
const temp1: Object = undefined;
const temp2: Object = null;
const temp3: Object = void 0;
const temp4: Object = 599;
const temp5: Object = { name: 'temp5' }
const temp6: Object = () => { }
const temp7: Object = []

// String 没有这种类型
const tmp9: String = undefined;// X
const tmp10: String = null;// X
const tmp11: String = void 0;// X
const tmp12: String = 'tmp12';// X


// 下面这些是可以的
const tmp28: {} = 'tmp28';
const tmp29: {} = 599;
const tmp30: {} = { name: 'tmp30' };
tmp30.age = 18; // X
const tmp31: {} = () => { };
const tmp32: {} = [];