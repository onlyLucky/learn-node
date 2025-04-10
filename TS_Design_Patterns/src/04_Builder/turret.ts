/* 构造器模式 */

interface Turret {
  HP?: number;
  ATK?: number;
  DEF?: number;
  Type?: number;
  Radius?: number;
}

export class TurretBuilder {
  private HP: number = 100;
  private ATK: number = 5;
  private DEF: number = 3;
  private Type: number = 1;
  private Radius: number = 5;

  constructor(params?: Turret) {
    this.HP = params?.HP || this.HP;
    this.ATK = params?.ATK || this.ATK;
    this.DEF = params?.DEF || this.DEF;
    this.Type = params?.Type || this.Type;
    this.Radius = params?.Radius || this.Radius;
  }

  public setHP(hp: number): TurretBuilder {
    this.HP = hp;
    return this;
  }
  public getHP(): number {
    return this.HP;
  }

  public setATK(atk: number): TurretBuilder {
    this.ATK = atk;
    return this;
  }
  public getATK(): number {
    return this.ATK;
  }
  public setDEF(def: number): TurretBuilder {
    this.DEF = def;
    return this;
  }
  public getDEF(): number {
    return this.DEF;
  }
  public setType(type: number): TurretBuilder {
    this.Type = type;
    return this;
  }
  public getType(): number {
    return this.Type;
  }
  public setRadius(radius: number): TurretBuilder {
    this.Radius = radius;
    return this;
  }
  public getRadius(): number {
    return this.Radius;
  }
  public build(): Turret {
    return {
      HP: this.HP,
      ATK: this.ATK,
      DEF: this.DEF,
      Type: this.Type,
      Radius: this.Radius,
    };
  }

}