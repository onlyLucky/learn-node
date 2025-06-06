package snapshot.commands;

import snapshot.editor.Editor;
import snapshot.shapes.Shape;

/* 移动已选形状 */
public class MoveCommand implements Command {
  private Editor editor;
  private int startX, startY;
  private int endX, endY;

  public MoveCommand(Editor editor){
    this.editor = editor;
  }

  @Override
  public String getName(){
    return "Move by X:" + (endX - startX) + " Y:" + (endY - startY);
  }

  public void start(int x, int y){
    startX = x;
    startY = y;
    for(Shape child : editor.getShapes().getSelected()){
      child.drag();
    }
  }

  public void move(int x, int y){
    for(Shape child : editor.getShapes().getSelected()){
      child.moveTo(x - startX, y -startY);
    }
  }

  public void stop(int x, int y){
    endX = x;
    endY = y;
    for(Shape child : editor.getShapes().getSelected()){
      child.drop();
    }
  }

  @Override
  public void execute(){
    for(Shape child: editor.getShapes().getSelected()){
      child.moveBy(endX, endY);
    }
  }

}
