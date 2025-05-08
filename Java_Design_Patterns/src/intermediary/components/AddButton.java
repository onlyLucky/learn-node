package intermediary.components;

import javax.swing.*;
import java.awt.event.ActionEvent;

import intermediary.mediator.Mediator;
import intermediary.mediator.Note;

public class AddButton extends JButton implements Component {
  private Mediator mediator;

  public AddButton() {
    super("Add");
  }

  @Override
  public void setMediator(Mediator mediator){
    this.mediator = mediator;
  }

  @Override
  public void fireActionPerformed(ActionEvent actionEvent){
    mediator.addNewNote(new Note());
  }

  @Override
  public String getName() {
    return "AddButton";
  }

}
