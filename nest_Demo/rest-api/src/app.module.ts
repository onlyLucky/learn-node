/*
 * @Author: fg
 * @Date: 2022-10-21 16:55:35
 * @LastEditors: fg
 * @LastEditTime: 2022-10-24 14:11:57
 * @Description: 应用程序根模块
 */

import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatModule } from "./cat/cat.module";
import { ErrorsInterceptor } from './common/errors.interceptor';

/**
 * @Module() 定义一个模块，并管理这个模块的导入集合、控制器集合、提供者集合、导出集合
 * */
@Module({
  // TypeOrmModule.forRoot() 默认加载项目根目录下的 ormconfig.json 配置文件用于配置数据库连接
  imports: [TypeOrmModule.forRoot(), CatModule], //导入其他模块的集合
  controllers: [AppController],//当前模块的控制器集合
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor
    },
    AppService
  ],//当前模块的提供者集合
  exports: [],//导出当前模块的提供者，用于被其他模块调用
})

export class AppModule { }