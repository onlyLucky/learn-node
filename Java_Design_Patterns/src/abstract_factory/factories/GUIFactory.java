package abstract_factory.factories;

import abstract_factory.buttons.Button;
import abstract_factory.checkboxes.Checkbox;

/* 2. 抽象工厂 */
public interface GUIFactory {
  Button createButton();
  Checkbox createCheckbox();
}
