import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@ApiTags("users")
@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService) {}
    
    @Post()
    @ApiOperation({
        summary: "Create record"
    })
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }
}
