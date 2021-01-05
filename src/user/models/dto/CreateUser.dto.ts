import { IsString } from "class-validator";
import { LoginUserDto } from "./LoginUser.dto";


export class CreateUserDto extends LoginUserDto {

    @IsString()
    name: string; 
    
}