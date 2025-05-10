package snapshot.history;

import snapshot.editor.Editor;

/* 备忘录类 */
public class Memento {
  private String backup;
  private Editor editor;

  public Memento(Editor editor) {
    this.editor = editor;
    backup = editor.backup();
  }

  public void restore() {
    editor.restore(backup);
  }
}
