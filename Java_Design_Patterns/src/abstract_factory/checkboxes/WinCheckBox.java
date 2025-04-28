package abstract_factory.checkboxes;

public class WinCheckBox implements Checkbox {
  @Override
  public void paint() {
    System.out.println("You have created WindowsCheckBox.");
  }
}
