package factory_method.buttons;
/* 具体产品 */
public class HtmlButton implements Button {
  public void render() {
    System.out.println("<button>Test Button</button>");
    onClick();
  }
  public void onClick(){
    System.out.println("Click! Button says - 'Hello World!'");
  }
}
