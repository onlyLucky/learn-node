package command.cmd;

import command.editor.Editor;

/* 抽象基础命令 */
public abstract class Command {
  public Editor editor;
  private String backup;

  Command(Editor editor) {
    this.editor = editor;
  }

  void backup() {
    backup = editor.textField.getText();
  }

  public void undo() {
    editor.textField.setText(backup);
  }

  public abstract boolean execute();

}
