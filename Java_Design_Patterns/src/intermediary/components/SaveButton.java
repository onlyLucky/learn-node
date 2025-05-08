package intermediary.components;

import java.awt.event.ActionEvent;

import javax.print.attribute.standard.Media;
import javax.swing.*;

import intermediary.mediator.Mediator;

public class SaveButton extends JButton implements Component {
  private Mediator mediator;
  
  public SaveButton() {
    super("Save");
  }

  @Override
  public void setMediator(Mediator mediator){
    this.mediator = mediator;
  }

  @Override
  protected void fireActionPerformed(ActionEvent actionEvent) {
    mediator.saveChanges();
  }


  @Override
  public String getName() {
    return "SaveButton";
  }

}
