/* 简单工厂模式 */

// 抽象 敌方小兵 接口
interface Product{}

// 远程小兵
class ConcreteProduct1 implements Product {
    constructor(){}
}

// 近战小兵
class ConcreteProduct2 implements Product {
    constructor(){}
}

// 简单生产小兵工厂 更具类型生产小兵
export class SimpleFactory {
    public static createProduct(type : number) : Product|null {
        let product = null;
        if (type === 1) {
            product = new ConcreteProduct1();
        } else if ( type === 2) {
            product = new ConcreteProduct2();
        }

        return product;
    }
}

