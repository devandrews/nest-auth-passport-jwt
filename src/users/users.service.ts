import { Injectable } from '@nestjs/common';
import { users } from 'src/db';
import { UserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  private users = users;

  async findOneByUsername(username: string): Promise<UserDto | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
