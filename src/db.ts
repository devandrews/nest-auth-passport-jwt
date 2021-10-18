import { UserDto } from './users/dto/users.dto';

export const users: UserDto[] = [
  {
    id: 1,
    name: 'Mary',
    username: 'mary',
    password: 'nonsecure',
  },
  {
    id: 2,
    name: 'John',
    username: 'john',
    password: 'lesssecure',
  },
];
