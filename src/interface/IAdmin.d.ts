import { IUser } from './IUser';

export interface IAdmin extends IUser {
    changePasswordUser(user: IUser, password: string): void;
}