package intermediary.components;

import java.awt.event.ActionEvent;
import javax.swing.JButton;
import intermediary.mediator.Mediator;

public class DeleteButton extends JButton implements Component {
  private Mediator mediator;

  public DeleteButton() {
    super("Del");
  }

  @Override
  public void setMediator(Mediator mediator) {
    this.mediator = mediator;
  }

  @Override
  protected void fireActionPerformed(ActionEvent actionEvent){
    mediator.deleteNote();
  }

  @Override
  public String getName() {
    return "DelButton";
  }

}
