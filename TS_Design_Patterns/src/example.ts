
import { ConcreteCreator } from "./01_Factory/function";
import { SimpleFactory } from "./01_Factory/sample";
import { ConcreteFactory } from "./02_Abstract_Factory/index";
import { CustomPrototype } from "./03_Prototype/clone";
import { TurretBuilder } from "./04_Builder/turret";
import { Singleton,LazySingleton } from "./05_Singleton/instance";

const chalk = require('chalk');
class Example {
  constructor() {
    console.log('Example class instantiated');
  }

  // 01 工厂模式
  public factoryExample() {
    // 使用
    console.log(chalk.red("=====01 FACTORY EXAMPLE======"));
    let product = SimpleFactory.createProduct(1);
    console.log(product);
    
    const creator = new ConcreteCreator();
    const myProduct = creator.createProduct(1);
    console.log(myProduct);
  }
  // 02 抽象工厂模式
  public abstractFactoryExample() {
    console.log(chalk.red("=====02 ABSTRACT FACTORY EXAMPLE======"));
    // 使用 生产工厂
    const factory = new ConcreteFactory();
    // 生产汽车
    const car = factory.createCar();
    // 生产机器人
    const robot = factory.createRobot();
    car.system(); // 输出：汽车系统
    car.engine(); // 输出：汽车发动机 
    robot.head(); // 输出：机器人头部
    robot.body(); // 输出：机器人身体
    robot.leg(); // 输出：机器人腿部
  }

  public prototypeExample() {
    console.log(chalk.red("=====03 PROTOTYPE EXAMPLE======"));
    // 使用原型模式
    const prototype = new CustomPrototype({name: 'prototype', age: 18});
    console.log(prototype.getData());
    prototype.setData({name: 'prototype2', age: 22})
    const prototype2 = Object.create(prototype);
    console.log(prototype2.getData()); 
  }

  public builderExample() {
    console.log(chalk.red("=====04 BUILDER EXAMPLE======"));
    // 使用建造者模式
    const turret = new TurretBuilder()
    console.log(turret.setHP(1000).setATK(10).setDEF(10).build())
  }
  public singletonExample() {
    console.log(chalk.red("=====05 SINGLETON EXAMPLE======"));
    const singleton = Singleton.getInstance();
    const lazySingleton = LazySingleton.getInstance();
    console.log(singleton === lazySingleton); // 输出：false
  }
  public doAllExample() {
    console.log(chalk.blue("=====TS DESIGN PATTERNS EXAMPLE======"));
    /* console.log(chalk.red("This is red text"));
    console.log(chalk.green("This is green text"));
    console.log(chalk.yellow("This is yellow text"));
    console.log(chalk.magenta("This is magenta text"));
    console.log(chalk.cyan("This is cyan text"));
    console.log(chalk.gray("This is gray text")); */

    this.factoryExample();
    this.abstractFactoryExample();
    this.prototypeExample();
    this.builderExample();
    this.singletonExample();
  }

}

export function createExample() {
  const example = new Example();
  example.doAllExample();
}