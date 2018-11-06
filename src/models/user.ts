/*
 * @Author: jinlei 
 * @Date: 2018-11-06 15:48:07 
 * @Last Modified by: jinlei
 * @Last Modified time: 2018-11-06 16:08:20
 */
import * as cuid from 'cuid';

export interface IUserDTO {
  id: string;
  first_name: string;
  last_name: string;
}

export interface IUser {
  constructor: {
    create(user: IUserDTO): IUser;
  };

  id: string;
  firstName: string;
  lastName: string;
  fullName: string;

  serialize(): IUserDTO;
}

export class User implements IUser {
  'constructor': typeof User;

  id: string = cuid();
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  constructor(public firstName: string, public lastName: string) { }

  static create(dto: IUserDTO): IUser {
    const model = new User(dto.first_name, dto.last_name);
    model.id = dto.id;

    return model;
  }

  serialize(): IUserDTO {
    return {
      id: this.id,
      first_name: this.firstName,
      last_name: this.lastName,
    };
  }
}