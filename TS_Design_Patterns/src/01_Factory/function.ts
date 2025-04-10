/* 工厂方法模式 */


// 抽象小兵接口 运动 进攻
export interface Product2{
  run() : void;
  attack() : void;
}

// 远程小兵
class ConcreteProduct_1 implements Product2 {
  constructor(){}
  run() {

  }
  attack() {

  }
}

// 近战小兵
class ConcreteProduct_2 implements Product2 {
  constructor(){}
  run() {

  }
  attack() {
      
  }
}

// 抽象兵工厂
abstract class Creator {
  public abstract createProduct(type : number) : Product2;
}

// 具体兵工厂
export class ConcreteCreator extends Creator {
  constructor(){
    super();
  }

  public createProduct(type : number) : Product2 {
      let product = null;
      if (type === 1) {
        product = new ConcreteProduct_1();
      } else if (type === 2) {
        product = new ConcreteProduct_2();
      } else{
        throw new Error("Invalid product type");
      }
      return product;
  }
}
