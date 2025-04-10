/* 原型模式 */

interface Prototype {
  clone():Prototype;
}

export class CustomPrototype implements Prototype {
  private obj: object
  constructor(obj: object) {
      this.obj = obj;
  }

  public getData(): object {
    return this.obj
  }
  public setData(obj: object): void {
    this.obj = obj;
  }

  // 实现复制
  public clone(): Prototype {
    return Object.create(this);
  }
}