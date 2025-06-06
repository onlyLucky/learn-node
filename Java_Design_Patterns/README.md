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

#### **核心思想**
将一个复杂对象的构建过程与其表示分离，通过逐步构建的方式来创建对象，使得相同的构建过程可以创建不同的表示。

#### **实现步骤**
1. **定义生成器接口**：声明创建复杂对象的各个步骤的方法。
2. **实现具体生成器类**：实现生成器接口，具体实现对象的构建过程。
3. **定义产品类**：定义复杂对象的结构，通常包含多个属性。
4. **创建指挥者类**：负责管理和控制生成器的构建过程，调用生成器的方法来逐步构建对象。
5. **客户端使用**：客户端通过指挥者类调用生成器来创建复杂对象。

#### **解决问题**
- **复杂对象的创建**：当一个对象的创建过程复杂，包含多个步骤和属性时，生成器模式可以简化创建过程。
- **避免构造函数的冗长和复杂**：避免使用多个参数的构造函数，使代码更清晰、易维护。
- **支持不同的构建过程**：可以使用不同的生成器实现来创建不同的对象表示。

#### **优点**
- **封装性好**：将对象的构建过程封装在生成器中，客户端无需关心具体实现。
- **灵活性高**：可以灵活地切换生成器实现，创建不同的对象表示。
- **简化客户端代码**：客户端只需调用指挥者类的方法，无需直接管理对象的构建过程。
- **支持逐步构建**：可以逐步构建复杂对象，便于扩展和维护。

#### **缺点**
- **代码量增加**：需要定义生成器接口、具体生成器类和指挥者类，代码量可能增加。
- **理解难度稍高**：对于初学者来说，理解生成器模式的结构和作用可能需要一定的时间。

#### **使用场景**
- **复杂对象的创建**：当对象的创建过程复杂，包含多个属性和步骤时。
- **需要灵活的构建过程**：当需要根据不同的需求创建不同配置的对象时。
- **避免构造函数的冗长**：当构造函数参数过多，导致代码难以维护时。
- **支持多种对象表示**：当需要根据不同的生成器实现创建不同的对象时。

#### **示例说明**
假设你正在开发一个汽车制造系统，汽车是一个复杂对象，包含多个属性（如发动机类型、轮胎数量、颜色等）。

- **生成器接口**：定义创建汽车的各个步骤的方法，如 `buildEngine()`、`buildTires()`、`buildColor()`。
- **具体生成器类**：`SUVBuilder` 和 `SedanBuilder`，分别实现创建 SUV 和轿车的具体步骤。
- **产品类**：`Car`，表示汽车对象，包含多个属性。
- **指挥者类**：`Director`，负责调用生成器的方法来逐步构建汽车对象。
- **客户端代码**：通过指挥者类调用生成器来创建汽车对象，无需直接管理构建过程。

---

### **原型模式（Prototype Pattern）**

#### **核心思想**
通过复制一个已存在的对象来创建新的对象，而不是通过新建操作（如 `new` 关键字）。这种方式可以避免复杂的初始化过程，同时允许动态地创建对象的副本。

#### **实现步骤**
1. **定义原型接口**：声明一个克隆方法（如 `clone()`），用于创建对象的副本。
2. **实现具体原型类**：实现原型接口，重写克隆方法，确保能够正确复制对象的状态。
3. **创建客户端代码**：客户端通过调用原型对象的克隆方法来创建新的对象副本，而无需直接使用 `new` 关键字。

#### **解决问题**
- **避免复杂的初始化过程**：当对象的创建过程复杂（例如需要执行大量的初始化操作）时，原型模式可以通过复制现有对象来简化创建过程。
- **动态创建对象**：允许客户端根据需要动态地创建对象的副本，而无需知道对象的具体类。
- **支持多种对象状态**：可以创建具有不同状态的对象副本，而无需重新初始化。

#### **优点**
- **简化对象创建过程**：通过复制现有对象，避免复杂的初始化逻辑。
- **提高性能**：克隆现有对象通常比通过 `new` 关键字创建新对象更快，尤其是当对象初始化过程复杂时。
- **支持动态创建**：客户端可以根据需要动态地创建对象副本，而无需知道对象的具体类。
- **易于扩展**：添加新的原型类时，无需修改现有代码，只需实现原型接口即可。

#### **缺点**
- **需要实现克隆方法**：每个需要支持克隆的对象类都需要实现克隆方法，这可能会增加代码的复杂性。
- **浅拷贝与深拷贝问题**：需要明确区分浅拷贝（复制引用）和深拷贝（复制对象），否则可能会导致错误。
- **依赖于具体类**：客户端代码需要依赖于具体的原型类，这可能会限制灵活性。

#### **使用场景**
- **对象创建过程复杂**：当对象的初始化过程复杂，且可以通过复制现有对象来简化时。
- **需要动态创建对象**：当客户端需要根据用户输入或其他条件动态创建对象副本时。
- **对象状态多变**：当需要创建具有不同状态的对象副本时。
- **性能优化**：当对象的创建成本较高，而克隆成本较低时。

#### **示例说明**
假设你正在开发一个图形编辑软件，用户可以创建和编辑各种图形（如圆形、矩形等）。用户希望可以通过复制现有图形来快速创建新的图形。

- **原型接口**：定义一个 `clone()` 方法，用于创建对象的副本。
- **具体原型类**：`Circle` 和 `Rectangle`，分别实现原型接口，重写 `clone()` 方法，确保可以正确复制图形的状态。
- **客户端代码**：用户通过图形编辑器选择一个图形，然后调用其 `clone()` 方法来创建新的图形副本。

---

### **单例模式（Singleton Pattern）**

#### **核心思想**
确保一个类只有一个实例，并提供一个全局访问点来获取这个实例。通过控制实例的创建过程，保证全局只有一个对象实例。

#### **实现步骤**
1. **私有化构造函数**：将类的构造函数设置为私有，防止外部通过 `new` 关键字创建实例。
2. **提供一个私有静态实例**：在类内部定义一个私有的静态变量，用于存储唯一的实例。
3. **提供一个公共静态方法**：通过一个公共的静态方法来获取实例，如果实例不存在，则创建它；如果已存在，则直接返回。
4. **（可选）线程安全处理**：如果在多线程环境中使用，需要确保线程安全。

#### **解决问题**
- **全局唯一实例**：确保系统中某个类只有一个实例，避免重复创建导致的资源浪费或逻辑冲突。
- **提供全局访问点**：提供一个全局的访问点，方便系统中其他部分获取该实例。

#### **优点**
- **全局唯一性**：保证系统中只有一个实例，避免重复创建。
- **资源节约**：减少资源消耗，因为不需要多次创建实例。
- **易于管理**：通过一个全局访问点管理实例，逻辑清晰。

#### **缺点**
- **线程安全问题**：在多线程环境中，需要额外处理线程安全问题，否则可能导致多个实例被创建。
- **难以扩展**：单例类难以扩展，因为它的构造函数是私有的。
- **依赖全局状态**：单例模式依赖全局状态，可能会导致代码难以测试和维护。

#### **使用场景**
- **全局配置管理**：如日志记录器、配置文件管理器等，需要全局唯一访问点。
- **资源管理**：如数据库连接池、线程池等，需要控制资源的使用。
- **系统状态管理**：如应用程序的状态管理器，需要全局唯一实例来管理状态。
- **工具类**：如工具类或辅助类，不需要多个实例。

---

### **适配器模式（Adapter Pattern）**

#### **核心思想**
适配器模式通过创建一个适配器类，将一个类的接口转换为另一个类期望的接口，从而使原本不兼容的接口能够协同工作。它是一种结构型设计模式。

#### **实现步骤**
1. **定义目标接口**：这是客户端期望使用的接口。
2. **定义适配者类**：这是已经存在的类，但它的接口与目标接口不兼容。
3. **创建适配器类**：适配器类实现目标接口，并持有适配者类的实例。适配器类通过委托的方式调用适配者类的方法。
4. **在适配器类中实现目标接口的方法**：在适配器类中，将目标接口的方法调用委托给适配者类的方法。

#### **解决问题**
- **接口不兼容问题**：当两个类的接口不兼容，但需要协同工作时，适配器模式可以解决这个问题。
- **复用已有代码**：避免修改已有类的代码，通过适配器类将已有类的功能整合到新的系统中。

#### **优点**
- **提高复用性**：可以复用已有的类，而无需修改其代码。
- **增加灵活性**：可以动态地选择适配器，而无需修改客户端代码。
- **符合开闭原则**：在不修改已有代码的情况下，通过添加适配器类来扩展功能。

#### **缺点**
- **增加系统复杂度**：引入了额外的适配器类，可能会使系统结构变得复杂。
- **性能开销**：适配器类可能会引入额外的性能开销，尤其是在方法调用频繁的场景中。

#### **使用场景**
- **接口不兼容**：当需要将一个类的接口转换为另一个类期望的接口时。
- **复用已有代码**：当需要复用已有的类，但其接口与当前系统不兼容时。
- **第三方库集成**：当需要将第三方库的类集成到当前系统中，但接口不匹配时。

---

### **桥接模式（Bridge Pattern）**

有一个主体， 桥接类可以更换主体

#### **核心思想**
桥接模式通过将抽象与实现分离，使它们可以独立变化。它通过一个“桥接”类将抽象部分与实现部分连接起来，从而实现两者的解耦。

#### **实现步骤**
1. **定义抽象类**：定义一个抽象类，声明客户端需要使用的接口，但不实现具体的功能。
2. **定义实现接口**：定义一个接口或抽象类，声明实现部分的方法。
3. **创建具体实现类**：实现上述接口或抽象类，提供具体的实现逻辑。
4. **创建桥接类**：在抽象类中持有一个实现接口的引用，并将抽象类的操作委托给实现类。
5. **扩展抽象类和实现类**：根据需要扩展抽象类和实现类，而无需修改对方的代码。

#### **解决问题**
- **分离抽象与实现**：将抽象部分与实现部分分离，使它们可以独立变化。
- **避免类层次结构膨胀**：避免因继承导致的类层次结构过于复杂。
- **支持动态切换实现**：客户端可以在运行时动态切换具体的实现。

#### **优点**
- **分离抽象与实现**：抽象部分和实现部分可以独立变化，符合开闭原则。
- **扩展性好**：可以独立扩展抽象部分和实现部分，而无需修改对方的代码。
- **动态切换实现**：客户端可以在运行时动态切换具体的实现，增加了灵活性。
- **减少子类数量**：避免了因继承导致的类层次结构膨胀，减少了代码量。

#### **缺点**
- **增加系统复杂度**：引入了额外的抽象层，可能会使系统结构变得复杂。
- **理解难度稍高**：对于初学者来说，理解桥接模式的结构和作用可能需要一定的时间。

#### **使用场景**
- **抽象与实现分离**：当需要分离抽象部分与实现部分，使它们可以独立变化时。
- **避免类层次结构膨胀**：当继承导致类层次结构过于复杂时。
- **动态切换实现**：当需要在运行时动态切换具体的实现时。
- **多维度扩展**：当需要在多个维度上扩展类的功能时，例如支持多种设备和多种操作方式。

---

好的，以下是关于组合模式（Composite Pattern）的简洁明了说明：

---

### **组合模式（Composite Pattern）**

#### **核心思想**
组合模式将对象组合成树形结构，以表示“部分-整体”的层次关系。它让客户端可以统一地处理单个对象和对象组合，使得对单个对象和组合对象的使用具有一致性。

#### **实现步骤**
1. **定义组件接口**：声明所有对象（单个对象和组合对象）共有的操作接口。
2. **实现叶子组件**：表示单个对象，实现组件接口，不包含子组件。
3. **实现组合组件**：表示组合对象，实现组件接口，并管理子组件（如添加、删除子组件）。
4. **客户端使用**：通过组件接口操作对象，无需区分单个对象还是组合对象。

#### **解决问题**
- **部分-整体层次结构**：当需要表示对象的层次结构时，组合模式可以将单个对象和组合对象统一处理。
- **统一接口**：客户端可以一致地处理单个对象和组合对象，无需关心它们的具体类型。
- **动态组合对象**：可以在运行时动态地添加或删除子组件。

#### **优点**
- **结构清晰**：树形结构清晰，层次分明，便于理解和维护。
- **扩展性强**：可以轻松添加新的组件类型，而无需修改现有代码。
- **一致性高**：客户端可以一致地处理单个对象和组合对象，代码更加简洁。
- **动态性好**：可以在运行时动态地组合对象，灵活性高。

#### **缺点**
- **增加系统复杂度**：引入了额外的抽象层，可能会使系统结构变得复杂。
- **可能引入性能开销**：在组合对象较多时，递归调用可能会导致性能下降。
- **理解难度稍高**：对于初学者来说，理解组合模式的结构和作用可能需要一定的时间。

#### **使用场景**
- **部分-整体层次结构**：当需要表示对象的层次结构时，例如文件系统、组织架构等。
- **统一接口**：当需要统一处理单个对象和组合对象时。
- **动态组合对象**：当需要在运行时动态地组合对象时。
- **递归结构**：当对象之间存在递归关系时。

---

### **装饰器模式（Decorator Pattern）**

#### **核心思想**
装饰器模式通过动态地将额外的责任附加到对象上，而不改变其结构，从而实现对对象功能的扩展。它提供了一种灵活的替代方案，用于替代继承来扩展功能。

#### **实现步骤**
1. **定义组件接口**：声明所有对象（原始对象和装饰器对象）共有的操作接口。
2. **实现原始组件类**：实现组件接口，提供基本功能。
3. **创建装饰器类**：装饰器类也实现组件接口，并持有一个组件接口的引用。
4. **在装饰器类中实现功能扩展**：装饰器类通过委托调用原始组件的方法，并在其前后添加额外的功能。
5. **客户端使用**：客户端通过组件接口操作对象，无需区分是原始对象还是装饰器对象。

#### **解决问题**
- **动态扩展功能**：在不改变原始对象结构的情况下，动态地为对象添加额外的功能。
- **避免继承的局限性**：避免通过继承来扩展功能时带来的类爆炸问题。
- **灵活组合功能**：可以根据需要灵活组合多个装饰器，实现多种功能扩展。

#### **优点**
- **灵活性高**：可以在运行时动态地添加或删除功能，而无需修改原始类。
- **符合开闭原则**：通过添加新的装饰器类来扩展功能，而无需修改现有代码。
- **功能组合灵活**：可以灵活组合多个装饰器，实现多种功能扩展。
- **避免类爆炸**：避免了通过继承来扩展功能时可能导致的类层次结构过于复杂的问题。

#### **缺点**
- **增加系统复杂度**：引入了额外的装饰器类，可能会使系统结构变得复杂。
- **性能开销**：装饰器类可能会引入额外的性能开销，尤其是在装饰器链较长时。
- **理解难度稍高**：对于初学者来说，理解装饰器模式的结构和作用可能需要一定的时间。

#### **使用场景**
- **动态扩展功能**：当需要在运行时动态地为对象添加额外的功能时。
- **避免继承的局限性**：当通过继承来扩展功能会导致类爆炸问题时。
- **功能组合灵活**：当需要灵活组合多种功能扩展时。
- **装饰功能**：当需要对对象的功能进行装饰或增强时，例如在图形界面中为组件添加边框、滚动条等。

---

### **外观模式（Facade Pattern）**

#### **核心思想**
外观模式通过提供一个统一的高层接口，来隐藏复杂的子系统内部细节，使客户端可以更简单地与子系统交互。

#### **实现步骤**
1. **定义子系统类**：实现子系统中的各个功能模块，这些模块可以是独立的类或方法。
2. **创建外观类**：定义一个外观类，提供一个高层接口，封装对子系统类的调用。
3. **在外观类中调用子系统类的方法**：外观类通过组合的方式调用子系统类的方法，实现对子系统的统一访问。
4. **客户端使用外观类**：客户端通过外观类的接口与子系统交互，无需直接调用子系统类的方法。

#### **解决问题**
- **简化客户端与子系统的交互**：客户端不需要了解子系统的复杂性，只需通过外观类的接口进行操作。
- **减少依赖关系**：客户端与子系统之间的依赖关系减少，降低了耦合度。
- **提供一致的接口**：为复杂的子系统提供一个一致的接口，便于客户端使用。

#### **优点**
- **简化客户端代码**：客户端只需与外观类交互，无需关心子系统的细节。
- **降低耦合度**：客户端与子系统之间的依赖关系减少，便于维护和扩展。
- **提高灵活性**：外观类可以灵活地选择子系统中的方法，便于调整内部实现。
- **符合开闭原则**：在不修改客户端代码的情况下，可以通过修改外观类来扩展子系统的功能。

#### **缺点**
- **增加系统复杂度**：引入了额外的外观类，可能会使系统结构变得复杂。
- **可能限制灵活性**：如果客户端需要直接访问子系统中的某些功能，可能会受到外观类的限制。
- **性能开销**：外观类可能会引入额外的性能开销，尤其是在方法调用频繁的场景中。

#### **使用场景**
- **简化复杂子系统的使用**：当子系统内部结构复杂，客户端需要简单接口时。
- **减少客户端与子系统的依赖**：当需要降低客户端与子系统之间的耦合度时。
- **提供一致的接口**：当需要为复杂的子系统提供一个一致的接口时。
- **分层架构**：在分层架构中，外观类可以作为高层模块与低层模块之间的桥梁。

---

### **享元模式（Flyweight Pattern）**

享元模式只有一个目的： 将内存消耗最小化。 如果你的程序没有遇到内存容量不足的问题， 则可以暂时忽略该模式

享元模式通过共享已存在的对象来减少对象创建的数量，从而降低内存占用和提高性能。它适用于需要管理大量相似对象、内存优化或频繁创建和销毁对象的场景，但可能会增加系统的复杂度和线程安全问题。

#### **核心思想**
享元模式通过共享已存在的对象来减少对象创建的数量，从而降低内存占用和提高性能。它适用于对象数量众多且大部分状态可共享的场景。

#### **实现步骤**
1. **定义享元接口**：声明所有享元对象共有的方法。
2. **实现具体享元类**：实现享元接口，提供对象的具体实现。
3. **创建享元工厂类**：负责管理共享的享元对象，通过一个池（如 `HashMap`）存储已创建的享元对象。
4. **在享元工厂中实现对象共享**：当客户端请求一个享元对象时，工厂类先检查池中是否存在该对象，如果存在则返回共享对象，否则创建新对象并加入池中。
5. **客户端使用**：客户端通过享元工厂获取享元对象，而无需直接创建。

#### **解决问题**
- **减少对象数量**：通过共享对象，减少内存中对象的数量，降低内存占用。
- **提高性能**：减少对象创建和销毁的开销，提高系统性能。
- **管理大量相似对象**：适用于需要管理大量相似对象的场景，避免重复创建。

#### **优点**
- **节省内存**：通过共享对象，显著减少内存占用。
- **提高性能**：减少了对象创建和销毁的开销，提高了系统性能。
- **易于管理**：通过享元工厂集中管理对象，便于维护和扩展。

#### **缺点**
- **复杂度增加**：引入了享元工厂和共享机制，增加了系统的复杂度。
- **线程安全问题**：在多线程环境中，需要处理线程安全问题。
- **适用场景有限**：仅适用于对象状态大部分可共享的场景，否则效果不明显。

#### **使用场景**
- **大量相似对象**：当需要创建大量相似对象时，例如文本编辑器中的字符对象。
- **内存优化**：当系统内存受限，需要减少对象数量时。
- **对象状态可共享**：当对象的状态大部分是可共享的，只有少量是变化的（内在状态和外在状态分离）。
- **频繁创建和销毁对象**：当对象的创建和销毁开销较大时。

---

### **代理模式（Proxy Pattern）**

代理模式通过创建一个代理对象来控制对实际对象的访问，解决了控制访问、延迟加载、缓存、远程调用等问题。它适用于需要增强或限制对实际对象访问的场景，但可能会增加系统的复杂度和性能开销。

#### **核心思想**
代理模式通过创建一个代理对象，来控制对实际对象的访问。代理对象可以在调用实际对象的方法前后添加额外的逻辑，从而实现对实际对象的间接访问。

#### **实现步骤**
1. **定义主题接口**：声明所有代理对象和实际对象共有的接口。
2. **实现实际主题类**：实现主题接口，提供实际对象的具体实现。
3. **创建代理类**：代理类也实现主题接口，并持有一个实际主题对象的引用。
4. **在代理类中实现额外逻辑**：在代理类的方法中，在调用实际主题对象的方法前后添加额外的逻辑（如权限检查、缓存、延迟加载等）。
5. **客户端使用代理类**：客户端通过主题接口与代理类交互，而无需直接调用实际主题类。

#### **解决问题**
- **控制对实际对象的访问**：通过代理类限制或增强对实际对象的访问。
- **延迟加载和缓存**：在需要时才加载实际对象，并可以缓存结果以提高性能。
- **权限控制**：在调用实际对象的方法前进行权限检查。
- **远程调用**：代理可以隐藏远程调用的复杂性，使客户端代码更简单。
- **安全和日志**：在调用实际对象的方法前后添加安全检查或日志记录。

#### **优点**
- **解耦**：客户端与实际对象解耦，客户端通过代理类间接访问实际对象。
- **灵活性**：可以在不修改实际对象代码的情况下，为实际对象添加额外的功能。
- **性能优化**：可以通过缓存或延迟加载来提高性能。
- **安全性**：可以通过代理类实现权限控制和安全检查。

#### **缺点**
- **增加复杂度**：引入了额外的代理类，可能会使系统结构变得复杂。
- **性能开销**：代理类可能会引入额外的性能开销，尤其是在方法调用频繁的场景中。
- **理解难度**：对于初学者来说，理解代理模式的结构和作用可能需要一定的时间。

#### **使用场景**
- **远程调用**：当需要隐藏远程调用的复杂性时。
- **权限控制**：当需要在调用实际对象的方法前进行权限检查时。
- **延迟加载和缓存**：当需要延迟加载实际对象或缓存结果以提高性能时。
- **安全和日志**：当需要在调用实际对象的方法前后添加安全检查或日志记录时。
- **虚拟代理**：当需要为一个资源消耗较大的对象提供一个轻量级的代理时。
---


### **责任链模式（Chain of Responsibility Pattern）**

责任链模式通过将请求沿着处理者链传递，解决了请求分发和动态分配责任的问题，简化了对象间的交互。它适用于需要多个对象依次处理请求、动态调整处理逻辑或简化复杂条件判断的场景，但可能会带来性能开销和调试困难。

#### **核心思想**
责任链模式通过将请求沿着一个处理者链传递，使多个对象都有机会处理该请求。每个处理者决定是否处理请求，或者将其传递给链上的下一个处理者。这种方式避免了请求的发送者与接收者之间的直接耦合。

#### **实现步骤**
1. **定义处理者接口**：声明所有处理者类共有的方法，通常包括一个处理请求的方法。
2. **实现具体处理者类**：每个具体处理者类实现处理者接口，定义具体的处理逻辑。如果当前处理者不能处理请求，则将其传递给链上的下一个处理者。
3. **创建责任链**：将多个处理者对象连接成一条链，每个处理者持有对下一个处理者的引用。
4. **客户端发起请求**：客户端将请求发送给链上的第一个处理者，由其决定是否处理或传递请求。
5. **沿着链传递请求**：请求沿着责任链传递，直到被某个处理者处理或到达链的末尾。

#### **解决问题**
- **请求分发**：将请求的处理分发给多个对象，避免请求发送者与接收者之间的直接耦合。
- **动态分配责任**：可以在运行时动态地添加或修改处理者链，灵活分配责任。
- **简化对象间的交互**：避免了复杂的条件判断，简化了请求处理逻辑。

#### **优点**
- **解耦请求与处理者**：客户端无需知道请求的处理细节，降低了耦合度。
- **灵活性高**：可以动态地添加或修改处理者链，灵活调整请求处理逻辑。
- **简化代码**：避免了复杂的条件判断，简化了请求处理逻辑。
- **符合开闭原则**：新增处理者时，无需修改现有代码，只需添加新的处理者类。

#### **缺点**
- **性能开销**：如果责任链过长，可能会导致请求处理的延迟增加。
- **调试困难**：由于请求沿着链传递，调试时可能难以跟踪请求的处理过程。
- **责任不明确**：如果链上的处理者过多，可能会导致责任不明确，难以确定请求的最终处理者。

#### **使用场景**
- **请求分发**：当一个请求需要多个对象依次处理时。
- **动态分配责任**：当需要在运行时动态调整请求处理逻辑时。
- **简化对象间交互**：当请求处理逻辑复杂，需要避免直接耦合时。
- **事件处理**：在事件驱动的系统中，事件需要依次传递给多个监听器或处理器时。

---

### **命令模式（Command Pattern）**

命令模式通过将请求封装为一个对象，解决了请求发送者与接收者之间的解耦问题，支持可撤销操作、事务处理和队列请求。它适用于需要解耦请求发送者和接收者、支持撤销操作或事务处理的场景，但可能会增加系统的复杂度和性能开销。

#### **核心思想**
命令模式将请求封装为一个对象，从而使用户可用不同的请求对客户进行参数化，支持可撤销的操作，支持事务处理等。

#### **实现步骤**
1. **定义命令接口**：声明执行操作的方法，所有具体命令类都将实现这个接口。
2. **创建具体命令类**：实现命令接口，具体实现执行操作的逻辑。具体命令类通常持有一个接收者对象的引用，通过调用接收者的方法来完成实际操作。
3. **定义接收者类**：接收者类包含实际执行操作的方法，具体命令类将委托这些方法来完成操作。
4. **创建调用者类**：调用者类负责执行命令，它持有命令对象的引用，并在适当的时候调用命令对象的执行方法。
5. **客户端配置和执行**：客户端创建具体命令对象，并将命令对象传递给调用者。调用者在适当的时候执行命令。

#### **解决问题**
- **解耦请求发送者和接收者**：将请求的发起者与请求的执行者解耦，使两者独立变化。
- **支持可撤销操作**：通过命令对象封装操作，可以方便地实现命令的撤销和重做。
- **支持事务处理**：可以将多个命令组合成一个宏命令，支持事务处理。
- **支持队列请求**：可以将命令对象放入队列中，实现请求的排队处理。

#### **优点**
- **解耦请求发送者和接收者**：客户端无需知道接收者的具体实现，降低了耦合度。
- **支持可撤销操作**：命令对象封装了操作，可以方便地实现撤销和重做。
- **支持事务处理**：可以将多个命令组合成一个宏命令，支持事务处理。
- **支持队列请求**：可以将命令对象放入队列中，实现请求的排队处理。
- **符合开闭原则**：新增命令时，无需修改现有代码，只需添加新的命令类。

#### **缺点**
- **增加系统复杂度**：引入了额外的命令类，可能会使系统结构变得复杂。
- **性能开销**：命令对象的创建和执行可能会引入额外的性能开销。
- **理解难度**：对于初学者来说，理解命令模式的结构和作用可能需要一定的时间。

#### **使用场景**
- **解耦请求发送者和接收者**：当需要将请求的发起者与执行者解耦时。
- **支持可撤销操作**：当需要实现命令的撤销和重做功能时。
- **支持事务处理**：当需要将多个操作组合成一个事务时。
- **支持队列请求**：当需要将请求放入队列中，实现异步处理时。
- **GUI 应用**：在图形用户界面中，将用户操作封装为命令对象，便于处理。

---

### **迭代器模式（Iterator Pattern）**

迭代器模式通过将遍历聚合对象的责任交给迭代器对象，解决了隐藏聚合对象内部表示和提供统一遍历方式的问题。它适用于需要隐藏内部表示、统一遍历方式或支持多种遍历方式的场景，但可能会增加系统的复杂度和性能开销。

#### **核心思想**
迭代器模式提供一种顺序访问聚合对象元素的方法，而不暴露其内部的表示。它将遍历聚合对象的责任交给迭代器对象，从而实现对聚合对象的间接访问。

#### **实现步骤**
1. **定义聚合接口**：声明一个方法来获取迭代器对象。
2. **实现具体聚合类**：实现聚合接口，提供具体的聚合数据结构（如数组、链表等），并实现获取迭代器的方法。
3. **定义迭代器接口**：声明方法来遍历聚合对象，通常包括 `hasNext()` 和 `next()` 方法。
4. **实现具体迭代器类**：实现迭代器接口，提供具体的遍历逻辑，维护遍历的当前位置。
5. **客户端使用**：客户端通过聚合对象获取迭代器，然后使用迭代器遍历聚合对象。

#### **解决问题**
- **隐藏聚合对象的内部表示**：客户端无需了解聚合对象的内部结构，只需通过迭代器访问元素。
- **提供统一的遍历方式**：为不同类型的聚合对象提供统一的遍历方式。
- **支持多种遍历方式**：可以通过不同的迭代器实现支持多种遍历方式（如正向、反向等）。

#### **优点**
- **封装性好**：隐藏了聚合对象的内部表示，客户端只需通过迭代器访问元素。
- **统一接口**：为不同类型的聚合对象提供统一的遍历接口。
- **灵活性高**：可以通过不同的迭代器实现支持多种遍历方式。
- **符合开闭原则**：新增聚合类型或迭代器类型时，无需修改现有代码。

#### **缺点**
- **增加系统复杂度**：引入了额外的迭代器类，可能会使系统结构变得复杂。
- **性能开销**：迭代器的创建和使用可能会引入额外的性能开销。
- **理解难度**：对于初学者来说，理解迭代器模式的结构和作用可能需要一定的时间。

#### **使用场景**
- **隐藏内部表示**：当需要隐藏聚合对象的内部表示时。
- **统一遍历方式**：当需要为不同类型的聚合对象提供统一的遍历方式时。
- **支持多种遍历方式**：当需要支持多种遍历方式时。
- **集合框架**：在集合框架中，如 Java 的 `Iterator` 和 C++ 的 `iterator`，广泛使用迭代器模式。

---

### **中介者模式（Mediator Pattern）**

中介者模式通过引入一个中介对象来封装对象间的交互逻辑，解决了对象间复杂的交互问题，降低了耦合度，简化了对象间的交互。它适用于需要管理复杂交互关系、降低耦合度或集中管理交互逻辑的场景，但可能会使中介者对象变得过于复杂。

#### **核心思想**
中介者模式通过引入一个中介对象来封装一系列对象间的交互方式，使对象之间不需要显式地相互引用，从而使其耦合松散，可以独立地改变它们之间的交互。

#### **实现步骤**
1. **定义中介者接口**：声明一个方法，用于接收同事对象的消息，并决定如何分发这些消息。
2. **实现具体中介者类**：实现中介者接口，具体实现对象间的交互逻辑。具体中介者类通常持有一个或多个同事对象的引用。
3. **定义同事类接口**：声明一个方法，用于将消息发送给中介者。
4. **实现具体同事类**：实现同事类接口，具体实现同事对象的行为。具体同事类通常持有一个中介者对象的引用，并通过中介者发送消息。
5. **客户端配置和使用**：客户端创建具体中介者对象和具体同事对象，并将它们关联起来。同事对象通过中介者进行交互。

#### **解决问题**
- **对象间复杂的交互**：当多个对象之间存在复杂的交互关系时，中介者模式可以简化这些交互。
- **减少对象间的直接耦合**：通过中介者对象封装交互逻辑，减少对象间的直接引用，降低耦合度。
- **集中管理交互逻辑**：将交互逻辑集中到中介者对象中，便于维护和扩展。

#### **优点**
- **降低耦合度**：对象之间不需要直接引用，降低了耦合度。
- **集中管理交互逻辑**：将交互逻辑集中到中介者对象中，便于维护和扩展。
- **简化对象间的交互**：通过中介者对象简化了对象间的交互逻辑。

#### **缺点**
- **中介者对象过于复杂**：中介者对象可能会变得过于复杂，包含大量的交互逻辑。
- **性能开销**：中介者对象的调用可能会引入额外的性能开销。
- **理解难度**：对于初学者来说，理解中介者模式的结构和作用可能需要一定的时间。

#### **使用场景**
- **对象间复杂的交互**：当多个对象之间存在复杂的交互关系时。
- **减少对象间的直接耦合**：当需要降低对象间的直接引用时。
- **集中管理交互逻辑**：当需要集中管理对象间的交互逻辑时。
- **GUI 应用**：在图形用户界面中，多个组件之间需要协调工作时。

---







## Getting Started

Welcome to the VS Code Java world. Here is a guideline to help you get started to write Java code in Visual Studio Code.

## Folder Structure

The workspace contains two folders by default, where:

- `src`: the folder to maintain sources
- `lib`: the folder to maintain dependencies

Meanwhile, the compiled output files will be generated in the `dist` folder by default.

> If you want to customize the folder structure, open `.vscode/settings.json` and update the related settings there.

## Dependency Management

The `JAVA PROJECTS` view allows you to manage your dependencies. More details can be found [here](https://github.com/microsoft/vscode-java-dependency#manage-dependencies).

## 参考链接
[design-patterns-java](https://github.com/RefactoringGuru/design-patterns-java)