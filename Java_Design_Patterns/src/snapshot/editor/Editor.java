package snapshot.editor;

import javax.swing.*;

import composite.shapes.CompoundShape;
import snapshot.history.History;
import snapshot.shapes.*;;

public class Editor extends java.awt.Canvas {
  private Canvas canvas;
  private CompoundShape allShapes = new CompoundShape();
  private History history;

  public Editor(){
    canvas = new Canvas(this);
    history = new History();
  }

  public void loadShapes(Shape... shapes){
    allShapes.clear();
    allShapes.add(shapes);
  }

  public void undo() {
    if (history.undo())
      canvas.repaint();
  }

  public void redo() {
    if (history.redo())
      canvas.repaint();
  }
}
