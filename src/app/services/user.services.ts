import { Injectable } from '@angular/core';
import { User } from '../models/user.model';



@Injectable()
export class UserService {
    private users: User[] = [
        new User("1", "John", "Johnson", "jjohnson@mail.com", 36),
        new User("2", "Jack", "Jackson", "jjackson@mail.com", 25),
        new User("3", "Lois", "Lane", "llane@mail.com", 27),
        new User("4", "Kate", "King", "kking@mail.com", 31)
    ]

    constructor() {

    }

    getUsers(): User[] {
        return this.users;
    }

    addUser(user: User) {
        let counter: number = this.users.length + 1;
        user.id = counter.toString();
        this.users.push(user);
    }

    editUser(user: User): void {
        let i: number = this.users.findIndex(x => x.id === user.id)
        if(i !== -1){
            this.users[i]=user;
        }        
    }

}