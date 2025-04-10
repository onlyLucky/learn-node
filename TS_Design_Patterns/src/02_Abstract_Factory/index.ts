/* 抽象工厂模式 */


//  抽象工厂接口
interface AbstractFactory {
  createCar(): AbstractCar;
  createRobot(): AbstractRobot;
}

// 抽象汽车产品
interface AbstractCar {
  system(): void;
  engine(): void;
}

// 抽象机器人产品
interface AbstractRobot {
  head(): void;
  body(): void;
  leg(): void;
}

// 具体汽车产品
class ConcreteCar implements AbstractCar {
  constructor(){}
  system() {
    console.log("汽车系统");
  }
  engine() {
    console.log("汽车发动机");
  }
}
// 具体机器人产品
class ConcreteRobot implements AbstractRobot {
  constructor(){}
  head() {
    console.log("机器人头部");
  }
  body() {
    console.log("机器人身体");
  }
  leg() {
    console.log("机器人腿部");
  }
}
// 具体工厂
export class ConcreteFactory implements AbstractFactory {
  constructor(){}
  createCar(): AbstractCar {
    return new ConcreteCar();
  }
  createRobot(): AbstractRobot {
    return new ConcreteRobot();
  }
}