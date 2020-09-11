import { User } from './User';
import { Validation } from './Validation';
import { IUser } from '../interface/IUser';
import { IAdmin } from '../interface/IAdmin';
import { availableSex } from '../type/availableKeys';

export class Admin extends User implements IAdmin {

    constructor(name: string, surname: string, email: string, password: string, dateOfBirth: string, sex: availableSex) {
        super(name, surname, email, password, dateOfBirth, sex);
        this.entryLevel = "admin";
    }

    changePasswordUser(user: IUser, password: string): void {
        Validation.isPassword(password);
        user.password = password;
    }

    changeEntryLevel(user: IUser): Admin {
        let newAdminUser: Admin = new Admin(user.name, user.surname, user.email, user.password, user.dateOfBirth, user.sex);
        newAdminUser.uuid = user.uuid;
        return newAdminUser;
    }
}