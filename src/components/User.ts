import moment from "moment";
import {
    v4 as uuidv4
} from 'uuid';


import { Validation } from './Validation';
import { IUser } from '../interface/IUser';
import { availableSex, availableEntryLevel } from '../type/availableKeys';

export class User implements IUser {
    uuid: string;
    dateRegistration: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    dateOfBirth: string;
    sex: availableSex;
    entryLevel: availableEntryLevel;


    constructor(name: string, surname: string, email: string, password: string, dateOfBirth: string, sex: availableSex,) {
        Validation.isEmpty(name);
        Validation.isEmpty(surname);
        Validation.isPassword(password);
        Validation.isEmail(email);

        this.uuid = uuidv4();
        this.dateRegistration = moment().format("DD/MM/YYYY");
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = moment(dateOfBirth, ['MM.DD.YYYY', 'DD.MM.YYYY', 'YYYY.MM.DD', 'YYYY.DD.MM']).format('DD/MM/YYYY');
        this.password = password;
        this.sex = sex;
        this.email = email;
        this.entryLevel = 'user';
    }

    updateEmail(email: string): void {
        Validation.isEmail(email);
        this.email = email;
    }
}