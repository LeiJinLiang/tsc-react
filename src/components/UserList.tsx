/*
 * @Author: jinlei 
 * @Date: 2018-11-07 10:43:56 
 * @Last Modified by: jinlei
 * @Last Modified time: 2018-11-07 10:52:09
 */
import * as React from 'react';

import { IUser, User } from '../models/user';
import { GenericList } from './GenericList';

const users = [
  new User('Rosamonte', 'Especial'),
  new User('Aguantadora', 'Despalada'),
  new User('Taragui', 'Vitality'),
];
console.log('users',users)

export class UserList extends GenericList<IUser> { }

export default () => (
  <UserList
    items={users}
    itemRenderer={(item) => <div key={item.id}>{item.fullName}</div>}
  />
);