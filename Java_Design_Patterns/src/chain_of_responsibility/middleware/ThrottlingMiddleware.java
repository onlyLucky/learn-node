package chain_of_responsibility.middleware;

/* 检查请求数量限制 */

public class ThrottlingMiddleware extends Middleware {
  private int requestPerMinute;
  private int request;
  private long currentTime;

  public ThrottlingMiddleware(int requestPerMinute){
    this.requestPerMinute = requestPerMinute;
    this.currentTime = currentTime;
  }

  public boolean check(String email, String password){
    if(System.currentTimeMillis()>currentTime + 60_000){
      request = 0;
      currentTime = System.currentTimeMillis();
    }

    request++;
    
    if(request > requestPerMinute){
      System.out.println("Request limit exceeded!");
      Thread.currentThread().stop();
    }
    return checkNext(email,password);
  }
}
