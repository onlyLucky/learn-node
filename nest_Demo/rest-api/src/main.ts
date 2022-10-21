/*
 * @Author: fg
 * @Date: 2022-10-21 17:04:52
 * @LastEditors: fg
 * @LastEditTime: 2022-10-21 17:08:18
 * @Description: 主程序
 */

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule)// 创建应用程序实例，此时所有被 AppModule 导入的其他模块的所有实例都会被加载
  await app.listen(3000)
}

bootstrap()