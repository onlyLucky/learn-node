## 笔记

---

### **抽象工厂模式**

(class设计图纸）

#### **核心思想**
通过一个**抽象工厂接口**来定义一组相关对象的创建方法，而具体的对象创建则由**具体工厂类**实现。客户端代码通过抽象工厂接口操作，无需关心具体对象的创建细节。

#### **实现步骤**
1. **定义抽象工厂接口**：声明一组创建相关对象的方法，但不实现具体逻辑。
2. **实现具体工厂类**：每个具体工厂类实现抽象工厂接口，负责创建一组具体的产品对象。
3. **定义产品接口**：为每种类型的产品定义一个抽象接口。
4. **实现具体产品类**：每个具体产品类实现相应的产品接口。
5. **客户端使用**：客户端通过抽象工厂接口调用具体工厂来创建对象，无需直接实例化具体产品类。

#### **解决问题**
- **创建多个相关对象时**，避免直接依赖具体类。
- **支持多个产品族**，客户端代码可以根据需要选择不同的产品族。
- **解耦客户端与对象创建逻辑**，使系统更灵活、可扩展。

#### **优点**
- **解耦客户端与具体类**：客户端代码依赖抽象接口，不依赖具体实现。
- **易于扩展**：添加新的产品族时，只需新增具体工厂和产品类，无需修改现有代码。
- **支持产品族**：可以方便地切换不同产品族，客户端代码无需改变。

#### **缺点**
- **增加系统复杂度**：引入了额外的抽象层，代码量增加。
- **产品族必须完整**：如果某个产品族缺少某些产品，可能会导致客户端代码无法正常工作。
- **灵活性受限**：一旦产品族确定，难以添加新的产品类型。

#### **使用场景**
- **需要创建多个相关对象**，且对象的具体类可能在运行时动态决定。
- **支持多个产品族**，客户端代码需要根据不同的产品族创建一组相关对象。
- **系统需要独立于其产品的创建、组合和表示**，希望隐藏具体的实现细节。



#### **示例说明**
假设你正在开发一个图形界面库，需要支持不同操作系统（如 Windows 和 macOS）的按钮（Button）和文本框（TextBox）。

- **抽象工厂接口**：定义创建按钮和文本框的方法。
- **具体工厂类**：`WindowsFactory` 和 `MacOSFactory`，分别实现创建 Windows 和 macOS 风格的按钮和文本框。
- **产品接口**：`Button` 和 `TextBox`，定义按钮和文本框的通用方法。
- **具体产品类**：`WindowsButton`、`MacOSButton`、`WindowsTextBox`、`MacOSTextBox`。

客户端代码通过抽象工厂接口调用具体工厂来创建对象，无需关心具体实现，从而支持不同操作系统的界面风格切换。

---
   
### 生成器模式
class 构造函数参数过多











## Getting Started

Welcome to the VS Code Java world. Here is a guideline to help you get started to write Java code in Visual Studio Code.

## Folder Structure

The workspace contains two folders by default, where:

- `src`: the folder to maintain sources
- `lib`: the folder to maintain dependencies

Meanwhile, the compiled output files will be generated in the `bin` folder by default.

> If you want to customize the folder structure, open `.vscode/settings.json` and update the related settings there.

## Dependency Management

The `JAVA PROJECTS` view allows you to manage your dependencies. More details can be found [here](https://github.com/microsoft/vscode-java-dependency#manage-dependencies).

## 参考链接
[design-patterns-java](https://github.com/RefactoringGuru/design-patterns-java)