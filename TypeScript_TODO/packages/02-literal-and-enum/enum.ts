/*
 * @Author: fg
 * @Date: 2022-10-18 17:59:03
 * @LastEditors: fg
 * @LastEditTime: 2022-10-20 14:43:52
 * @Description: enum
 */
enum PageUrl {
  Home_Page_Url = 'url1',
  Setting_Page_Url = 'url2',
  Share_page_Url = 'url3',
}

const home = PageUrl.Home_Page_Url;

enum Items {
  Foo,//0
  Bar,//1
  Baz //2
}
// Items.Foo 0
// Items[0] Foo

enum Items1 {
  Foo,
  Bar = 599,
  Baz,//600
}

const returnNum = () => 100 + 499;

enum Items2 {
  Foo = returnNum(),//599
  Bar = 599,//599
  Baz,//600
}

// 枚举的值不是唯一

enum Items3 {
  Baz,//0
  Foo = returnNum(),
  Bar = 599,
}

/* 
(function (Items3) {
  Items3[Items3["Baz"] = 0] = "Baz";
  Items3[Items3["Foo"] = returnNum()] = "Foo";
  Items3[Items3["Bar"] = 599] = "Bar";
})(Items3 || (Items3 = {}));
*/

const enum ConstItems {
  Foo,//0
  Bar,//1
  Baz //2
}