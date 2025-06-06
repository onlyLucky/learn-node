package intermediary.components;

import javax.swing.*;

import intermediary.mediator.Mediator;
import intermediary.mediator.Note;

@SuppressWarnings("unchecked")
public class List extends JList implements Component {
  private Mediator mediator;
  private final DefaultListModel LIST_MODEL;

  public List(DefaultListModel  listModel){
    super(listModel);
    this.LIST_MODEL = listModel;
    setModel(listModel);
  }

  @Override
  public void setMediator(Mediator mediator){
    this.mediator = mediator;
  }

  public void addElement(Note note){
    LIST_MODEL.addElement(note);
    int index = LIST_MODEL.size() - 1;
    setSelectedIndex(index);
    ensureIndexIsVisible(index);
    mediator.sendToFilter(LIST_MODEL);
  }

  public void deleteElement(){
    int index = this.getSelectedIndex();
    try {
      LIST_MODEL.remove(index);
      mediator.sendToFilter(LIST_MODEL);
    } catch (ArrayIndexOutOfBoundsException ignored) {}
  }

  public Note getCurrentElement(){
    return (Note)getSelectedValue();
  }

  @Override
  public String getName() {
    return "List";
  }

  private class Hide implements Runnable {
    private List list;

    Hide(List list){
      this.list = list;
    }

    @Override
    public void run() {
      while(true){
        try {
          Thread.sleep(300);
        } catch (InterruptedException e) {
          e.printStackTrace();
        }
        if(list.isSelectionEmpty()){
          mediator.hideElements(true);
        }else{
          mediator.hideElements(false);
        }
      }
    }
  }



}
