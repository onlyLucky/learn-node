package iterator.iterators;

import iterator.profile.Profile;

/* 定义档案接口 */
public interface ProfileIterator {
  boolean hasNext(); // 是否还有下一个元素

  Profile getNext(); // 获取下一个元素

  void reset(); // 重置迭代器
}
