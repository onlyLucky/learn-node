package snapshot.editor;

import javax.swing.*;
import javax.swing.border.Border;
import java.awt.*;
import java.awt.event.*;
import java.awt.image.BufferedImage;

class Canvas extends java.awt.Canvas {
  private Editor editor;
  private JFrame frame;
  private static final int PADDING = 10;

  Canvas(Editor editor, JFrame frame) {
    this.editor = editor;
    createFrame();
    attachKeyboardListeners();
  }

  private void createFrame(){
    frame = new JFrame();
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setLocationRelativeTo(null);
    
    JPanel contentPanel = new JPanel();
    Border padding = BorderFactory.createEmptyBorder(PADDING, PADDING, PADDING, PADDING);
    contentPanel.setBorder(padding);
    contentPanel.setLayout(new BoxLayout(contentPanel, BoxLayout.Y_AXIS));
    frame.setContentPane(contentPanel);

    contentPanel.add(new JLabel("Select and drag to move."), BorderLayout.PAGE_END);
    contentPanel.add(new JLabel("Right click to change color."), BorderLayout.PAGE_END);
    contentPanel.add(new JLabel("Undo: Ctrl+Z, Redo: Ctrl+R"), BorderLayout.PAGE_END);
    contentPanel.add(this);
    frame.setVisible(true);
    contentPanel.setBackground(Color.LIGHT_GRAY);

  }

  private void attachKeyboardListeners(){
    addKeyListener(new KeyAdapter() {
      @Override
      public void keyPressed(KeyEvent e) {
        if ((e.getModifiers() & KeyEvent.CTRL_MASK) != 0) {
          switch (e.getKeyCode()) {
            case KeyEvent.VK_Z:
              editor.undo();
              break;
            case KeyEvent.VK_R:
              editor.redo();
              break;
          }
        }
      }
    });
  }
}
