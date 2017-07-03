export class User {
    public id: string
    public firstName: string;
    public lastName: string;
    public email: string;
    public age: number;
    public state?: string;


    constructor(
        id?: string,
        firstName?: string,
        lastName?: string,
        email?: string,
        age?: number,
        state?: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.state=state;

    }
}

