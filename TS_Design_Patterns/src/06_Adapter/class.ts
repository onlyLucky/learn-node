/* 适配器模式 */

// 类适配器

// 目标对象
interface Target {
  request(): void;
}

// 被适配者 需要新增功能
class Adaptee {
  constructor() {}
  public specificRequest(): void {
    console.log("原有 class 逻辑");
  }
}

// 适配器
export class Adapter extends Adaptee implements Target {
  constructor() {
    super();
  }
  public request(): void {
    super.specificRequest();
    // 新功能
    console.log("新增 class 功能");
  }
}