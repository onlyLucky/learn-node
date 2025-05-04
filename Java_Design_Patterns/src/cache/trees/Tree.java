package cache.trees;

import java.awt.*;

/* 包含每棵树的独特状态 */
public class Tree {
  private int x;
  private int y;
  private TreeType type;

  public Tree(int x, int y, TreeType type){
    this.x = x;
    this.y = y;
    this.type = type;
  }

  public void draw(Graphics g){
    type.draw(g, x, y);
  }
}
