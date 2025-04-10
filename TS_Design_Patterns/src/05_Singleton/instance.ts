
/* 单例模式 */

export class Singleton {
  // 1. 构造器私有化，外部不能new
  private constructor(){}

  // 2. 本类内部创建对象实例化
  private static instance: Singleton;
  // 3. 提供一个公有的静态方法，返回实例对象
  public static getInstance(): Singleton {
    return Singleton.instance;
  }
}

export class LazySingleton {
  private static instance: LazySingleton;
  private constructor() {}
  public static getInstance(): LazySingleton {
    if (!LazySingleton.instance) {
      LazySingleton.instance = new LazySingleton();
    }
    return LazySingleton.instance;
  }
}
