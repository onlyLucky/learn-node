/*
 * @Author: fg
 * @Date: 2022-10-24 11:43:12
 * @LastEditors: fg
 * @LastEditTime: 2022-10-24 14:14:26
 * @Description: cat 服务
 */
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cat } from './cat.entity';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat) private readonly catRepo: Repository<Cat>,//使用泛型注入对应类型的储存库实例
  ) { }

  /**
   * @description: 创建
   * @param cat Cat 实体对象
   */
  async createCat(cat: Cat): Promise<Cat> {
    /**
     * 创建新的实体实例，并将此对象的所有实体属性复制到新实体中（注意： 它仅复制实体模型中存在的属性）
     */
    // 插入数据时，删除id，以避免请求体内传入id
    delete cat.id;
    return this.catRepo.save(this.catRepo.create(cat));

    /**
     * 将给定实体插入数据库。与save方法不同，执行原始操作时不包括级联，关系和其他操作
     * 执行快速有效的INSERT操作。不检查数据库中是否存在实体，以此如果插入重复实体，本次操作将失败
     */
    // await this.catRepo.insert(cat);
  }
  /**
   * @description: 删除
   * @param id ID
   */
  async deleteCat(id: number): Promise<void> {
    await this.findOneById(id);
    this.catRepo.delete(id);
  }
  /**
   * @description: 更新
   * @param cat Cat 实体对象
   */
  async updateCat(id: number, cat: Cat): Promise<void> {
    const existCat = await this.findOneById(id);
    // 当传入空数据时，避免重复覆盖
    existCat.nickname = cat && cat.nickname ? cat.nickname : existCat.nickname;
    existCat.species = cat && cat.species ? cat.species : existCat.species;
    this.catRepo.save(existCat);
  }

  /**
   * @description: 根据ID查询
   * @param id ID
   */

  async findOneCat(id: number): Promise<Cat> {
    return this.findOneById(id);
  }

  /**
   * @description: 据ID查询单个信息，如果不存在则抛出404异常
   * @param id ID
   */
  async findOneById(id: number): Promise<Cat> {
    const catInfo = await this.catRepo.findOne(id);
    if (!catInfo) {
      throw new HttpException(`指定 id=${id} 的猫猫不存在`, 404);
    }
    return catInfo
  }
}
