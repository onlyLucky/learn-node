package abstract_factory.checkboxes;

public class MacOsCheckBox implements Checkbox {
  @Override
  public void paint() {
    System.out.println("You have created MacOSCheckBox.");
  }
}
