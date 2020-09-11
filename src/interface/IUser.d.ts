import { withUuid } from "./withUuid";

import { withUuid } from './withUuid'
import { availableSex, availableEntryLevel } from "../type/availableKeys";

export interface IUser extends withUuid {
    dateRegistration: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    dateOfBirth: string;
    sex: availableSex;
    entryLevel: availableEntryLevel;
    updateEmail(email: string): void;
}