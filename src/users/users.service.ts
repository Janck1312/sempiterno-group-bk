import { HttpException, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { EncryptPasswordService } from 'src/exchange/services/encrypt-password.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private readonly userEntity = User
    private readonly bcryptService:EncryptPasswordService = new EncryptPasswordService()
    
    constructor() {}
    async create(createUserDto: CreateUserDto) {
        try {
            const user = await this.userEntity.create({...createUserDto, 
                password: await this.bcryptService.encryptPassword(createUserDto.password)
            });
            return user.toJSON();
        } catch (error) {
            throw new HttpException(error.message, 422);
        }
    }
}
