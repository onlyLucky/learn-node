package snapshot.history;


import java.util.ArrayList;
import java.util.List;

import command.cmd.Command;

public class History {
  private List<Pair> history = new ArrayList<Pair>();
  private int virtualSize = 0;

  private class Pair {
    Command command;
    Memento memento;
    Pair(Command c, Memento m) {
      command = c;
      memento = m;
    }

    private Command getCommand() {
      return command;
    }

    private Memento getMemento() {
      return memento;
    }
  }

  public void push(Command c, Memento m){
    if(virtualSize != history.size() && virtualSize > 0){
      history = history.subList(0, virtualSize - 1);
    }
  }
}
