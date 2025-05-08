package intermediary;

import javax.swing.DefaultListModel;

import intermediary.components.AddButton;
import intermediary.components.DeleteButton;
import intermediary.components.Filter;
import intermediary.components.List;
import intermediary.components.SaveButton;
import intermediary.components.TextBox;
import intermediary.components.Title;
import intermediary.mediator.Editor;
import intermediary.mediator.Mediator;

public class Demo {
  public static void main(String[] args) {
    Mediator mediator = new Editor();

    mediator.registerComponent(new Title());
    mediator.registerComponent(new TextBox());
    mediator.registerComponent(new AddButton());
    mediator.registerComponent(new DeleteButton());
    mediator.registerComponent(new SaveButton());
    mediator.registerComponent(new List(new DefaultListModel()));
    mediator.registerComponent(new Filter());

    mediator.createGUI();
  }
}
