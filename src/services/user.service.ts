import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService{

    constructor(@InjectRepository(Users)private  userRepository: Repository<Users>){}

    addUser(user: Users): Promise<Users>
    {
        return this.userRepository.save(user);
    }

    findAllUsers(): Promise<Users[]>
    {
        return this.userRepository.find();
    }

    findOneUser(id: number): Promise<Users>
    {
        return this.userRepository.findOneBy({id});
    }

    updateUser(id: number, user: Users): Promise<any>
    {
        return this.userRepository.update(id,user);
    }
}