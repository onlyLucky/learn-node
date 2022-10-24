/*
 * @Author: fg
 * @Date: 2022-10-21 17:42:08
 * @LastEditors: fg
 * @LastEditTime: 2022-10-24 14:13:56
 * @Description: cat 程序控制器
 */
import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from "@nestjs/common";

import { Result } from "../common/result.interface";
import { Cat } from "./cat.entity";
import { CatService } from "./cat.service";

@Controller('cat')
export class CatController {
  constructor(
    @Inject(CatService) private readonly catService: CatService,
  ) { }

  @Post()
  async createCat(@Body() cat: Cat): Promise<Result> {
    await this.catService.createCat(cat);
    return { code: 200, message: '创建成功' }
  }
  @Delete(':id')
  async deleteCat(@Param('id') id: number): Promise<Result> {
    await this.catService.deleteCat(id);
    return { code: 200, message: '删除成功' }
  }
  @Put(':id')
  async updateCat(@Param('id') id: number, @Body() cat: Cat): Promise<Result> {
    await this.catService.updateCat(id, cat);
    return { code: 200, message: '更新成功' }
  }
  @Get(':id')
  async getCat(@Param('id') id: number): Promise<Result> {
    const data = await this.catService.findOneCat(id);
    return { code: 200, message: '查询成功', data }
  }
}