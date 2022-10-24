/*
 * @Author: fg
 * @Date: 2022-10-24 11:43:42
 * @LastEditors: fg
 * @LastEditTime: 2022-10-24 14:10:20
 * @Description: cat模块
 */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { CatController } from "./cat.controller";
import { Cat } from "./cat.entity";
import { CatService } from "./cat.service";

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  controllers: [CatController],
  providers: [CatService]
})

export class CatModule { }