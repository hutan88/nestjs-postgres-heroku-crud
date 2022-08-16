import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { Users } from "src/entities/user.entity";
import { UserService } from "src/services/user.service";



@Controller('user')
export class UserController{

    constructor(private readonly userService: UserService){}
    
    @Get()
    findAllUsers(): Promise<Users[]>
    {
        return this.userService.findAllUsers();
    }

    @Get(':id')
    findOneUser(@Param() param): Promise<Users>
    {
        return this.userService.findOneUser(param.id);
    }
    

    @Post()
    addUser(@Body() user:Users): Promise<Users>
    {
        return this.userService.addUser(user);
    }

    @Put(':id')
    updateUser(@Param() param, @Body() user: Users): Promise<any>
    {
        return this.userService.updateUser(param.id, user);
    }
    
}