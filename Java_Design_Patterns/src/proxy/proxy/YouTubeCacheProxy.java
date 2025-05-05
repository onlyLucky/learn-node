package proxy.proxy;

import java.util.HashMap;

import proxy.some_cool_media_library.*;

public class YouTubeCacheProxy implements ThirdPartyYouTuBeLib {
  private ThirdPartyYouTuBeLib youtubeService;
  private HashMap<String, Video> cachePopular = new HashMap<String, Video>();
  private HashMap<String, Video> cacheAll = new HashMap<String, Video>();


  public YouTubeCacheProxy(){
    this.youtubeService = new ThirdPartyYouTuBeClass();
  }

  @Override
  public HashMap<String, Video> popularVideos() {
    if (cachePopular.isEmpty()){
      cachePopular = youtubeService.popularVideos();
    }else{
      System.out.println("Retrieved list from cache.");
    }
    return cachePopular;
  }

  @Override
  public Video getVideo(String videoId){
    Video video = cacheAll.get(videoId);
    if (video == null){
      video = youtubeService.getVideo(videoId);
      cacheAll.put(videoId, video);
    }else{
      System.out.println("Retrieved video '" + videoId + "' from cache.");
    }
    return video;
  }

  public void reset(){
    cachePopular.clear();
    cacheAll.clear();
  }
}
