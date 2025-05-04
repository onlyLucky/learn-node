package decorator;

import java.io.File;

public class Demo {
  public static void main(String[] args) {
    // 确保输出目录存在
    File outputDir = new File("out");
    if (!outputDir.exists()) {
      outputDir.mkdirs(); // 创建目录
    }
    
    String salaryRecords = "Name,Salary\nJohn Smith,100000\nSteven Jobs,912000";
    DataSourceDecorator encoded = new CompressionDecorator(new EncryptionDecorator(new FileDataSource("out/OutputDemo.txt")));
    encoded.writeData(salaryRecords);
    DataSource plain = new FileDataSource("out/OutputDemo.txt");

    System.out.println("- Input ----------------");
    System.out.println(salaryRecords);
    System.out.println("- Encoded --------------");
    System.out.println(plain.readData());
    System.out.println("- Decoded --------------");
    System.out.println(encoded.readData());
  }
}
