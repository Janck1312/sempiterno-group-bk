import * as bcrypt from "bcrypt";

export class EncryptPasswordService {
    async encryptPassword(password:string) {
        return await bcrypt.hash(password, 10);
    }

    async comparePassword(password:string, password_hash:string) {
        return await bcrypt.compare(password, password_hash);
    }
}