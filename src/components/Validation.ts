import is from "is_js";


export class Validation {
    static isEmail(email: string): void {
        if (!is.email(email)) throw new Error(`is wrong email`);
    }

    static isPassword(password: string): void {
        is.setRegexp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, 'alphaNumeric');
        if (!is.alphaNumeric(password)) throw new Error('is wrong password');
    }

    static isEmpty(valueString: string): void {
        if (is.empty(valueString)) throw new Error(`name and surname must be the min 1 characters`);
    }
}