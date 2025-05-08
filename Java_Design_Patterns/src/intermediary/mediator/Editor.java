package intermediary.mediator;

import javax.swing.JLabel;
import java.awt.*;

import intermediary.components.*;
import intermediary.components.Component;
import intermediary.components.List;

/* 具体中介者 */
public class Editor implements Mediator {
  private Title title;
  private TextBox textBox;
  private AddButton add;
  private DeleteButton del;
  private SaveButton save;
  private Filter filter;
  private List list;

  private JLabel titleLabel = new JLabel("Title:");
  private JLabel textLabel = new JLabel("Text:");
  private JLabel lable = new JLabel("Add or select existing note to proceed...");

  @Override
  public void registerComponent(Component component){
    component.setMediator(this);
    switch (component.getName()) {
      case "AddButton":
        add = (AddButton)component;
        break;
      case "DelButton":
        del = (DeleteButton)component;
        break;
      case "Filter":
        filter = (Filter)component;
        break;
      case "List":
        list = (List)component;
        this.list.addListSelectionListener(listSelectionEvent -> {
          Note note = (Note)list.getSelectedValue();
          if(note != null){
            getInfoFromList(note);
          }else{
            clear();
          }
        });
        break;
      case "SaveButton":
        save = (SaveButton)component;
        break;
      case "TextBox":
        textBox = (TextBox)component;
        break;
      case "Title":
        title = (Title)component;
        break;
    }
  }

  @Override
  public void addNewNote(Note note){
    title.setText("");
    textBox.setText("");
    list.addElement(note);
  }

  @Override
  public void deleteNote(){
    list.deleteElement();
  }

  @Override
  public void getInfoFromList(Note note){
    title.setText(note.getName().replace("*", " "));
    textBox.setText(note.getText());
  }

  @Override
  public void saveChanges(){
    try {
      Note note = (Note) list.getSelectedValue();
      note.setName(title.getText());
      note.setText(textBox.getText());
      list.repaint();
    } catch (NullPointerException ignored) {}
    
  }

  @Override
  public void markNote(){
    try {
      Note note = (Note) list.getCurrentElement();
      String name = note.getName();
      if(!name.endsWith("*")){
        note.setName(note.getName() + "*");
      }
      list.repaint();
    } catch (NullPointerException ignored) {}

  }

}
