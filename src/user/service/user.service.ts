import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import { UserI } from '../models/user.interface';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) {}

    add(user: UserI): Observable<UserI> {
        return from(this.userRepository.save(user));
    }

    findAll(): Observable<UserI[]> {
        return from(this.userRepository.find());
    }

}
