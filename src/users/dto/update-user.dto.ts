import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    name: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    lastName: string;

    @ApiProperty()
    @IsString()
    @IsEmail()
    @IsOptional()
    email: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    password: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    rol_id:number;
}