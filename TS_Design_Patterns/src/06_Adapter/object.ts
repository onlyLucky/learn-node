/* 适配器模式 */

/* 对象适配器 */

// 目标对象
interface Target {
  request(): void;
}

// 被适配者 需要新增功能
export class ObjectAdaptee {
  constructor() {}
  // 原有逻辑
  public specificRequest(): void {
    console.log('被适配者 原有逻辑 ');
  }
}

export class ObjectAdapter implements Target {
  private adaptee: ObjectAdaptee;
  constructor(adaptee: ObjectAdaptee) {
    this.adaptee = adaptee;
  }
  // 新增功能
  public newFunction(): void {
    console.log('新 object 业务逻辑');
  }
  // 原有逻辑
  public request(): void {
    this.adaptee.specificRequest();
    this.newFunction();
  }
}