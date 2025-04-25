/* 桥接模式 */
export namespace Bridge {
  export abstract class Abstraction {
    protected implementation: Implementation;

    constructor(implementation: Implementation) {
      this.implementation = implementation;
    }

    public abstract operation(): string;
  }

  export class BridgeAbstraction extends Abstraction {
    public operation(): string {
      const result = this.implementation.operationImplementation();
      return `BridgeAbstraction: Bridge operation with:\n${result}`;
    }
  }

  export interface Implementation {
    operationImplementation(): string;
  }

  export class ConcreteImplementationA implements Implementation {
    public operationImplementation(): string {
      return 'ConcreteImplementationA: Here\'s the result on the platform A.';
    }
  }

  export class ConcreteImplementationB implements Implementation {
    public operationImplementation(): string {
      return 'ConcreteImplementationB: Here\'s the result on the platform B.';
    }
  }
}