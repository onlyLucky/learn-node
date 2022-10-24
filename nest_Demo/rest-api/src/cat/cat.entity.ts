/*
 * @Author: fg
 * @Date: 2022-10-24 11:19:45
 * @LastEditors: fg
 * @LastEditTime: 2022-10-24 11:44:10
 * @Description: 表结构
 */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('cat')

export class Cat {
  /**
   * 自增主键
   */
  @PrimaryGeneratedColumn({
    comment: '自增ID'
  })
  id: number;


  /**
   * @description: 昵称
   */
  @Column({
    comment: '昵称'
  })
  nickname: string;

  /**
   * @description: 品种
   */
  @Column({
    comment: '品种'
  })
  species: string;
}
