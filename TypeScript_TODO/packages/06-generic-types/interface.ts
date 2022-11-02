/*
 * @Author: fg
 * @Date: 2022-11-02 15:56:17
 * @LastEditors: fg
 * @LastEditTime: 2022-11-02 17:07:15
 * @Description: interface
 */
interface IRes<TData = unknown> {
  code: number;
  error?: string;
  data: TData;
}

interface IUserProfileRes {
  name: string;
  homepage: string;
  avatar: string;
}

function fetchUserProfile(): Promise<IRes<IUserProfileRes>> { }

type StatusSucceed = boolean;
function handleOperation(): Promise<IRes<IUserProfileRes>> { }

interface IPaginationRes<TItem = unknown> {
  data: TItem[];
  page: number;
  totalCount: number;
  hasNextPage: boolean;
}

function fetchUserProfileList(): Promise<IRes<IPaginationRes>> { }
