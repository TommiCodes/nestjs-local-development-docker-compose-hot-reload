import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
const bcrypt = require ('bcrypt');

@Injectable()
export class AuthService {

    hashPassword(password: string): Observable<string> {
        return from<string>(bcrypt.hash(password, 12));
    }

    comparePasswords(password: string, storedPasswordHash: string): Observable<any> {
        return from(bcrypt.compare(password, storedPasswordHash));
    }
}
