package iterator.social_networks;

import iterator.iterators.ProfileIterator;

/* 定义通用的社交网络接口 */
public interface SocialNetwork {
  ProfileIterator createFriendsIterator(String profileEmail);

  ProfileIterator createCoworkersIterator(String profileEmail);
}
