/* 适配器模式 */

// 接口适配器

// 目标对象
interface TargetInterface {
  attack(): void;
  run(): void;
}

abstract class InterfaceAdapter implements TargetInterface {
  public abstract attack(): void;
  public abstract run(): void;
}

export class ComAdapter extends InterfaceAdapter {
  public run(): void {
    console.log("快速奔跑");
  }
  public attack(): void {
    console.log("发起攻击");
  }
}