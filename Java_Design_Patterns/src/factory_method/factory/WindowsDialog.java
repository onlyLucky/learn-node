package factory_method.factory;

import factory_method.buttons.Button;
import factory_method.buttons.WindowsButton; // Import the WindowsButton class

public class WindowsDialog extends Dialog {
  @Override
  public Button createButton() {
    return new WindowsButton();
  }
}
