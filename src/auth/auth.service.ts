import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (!user) {
      throw new UnauthorizedException('Invalid username or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid username or password');
    }

    return { id: user.id, username: user.username };
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }
  async register(username: string, password: string) {
    return this.usersService.createUser(username, password);
  }  
}

