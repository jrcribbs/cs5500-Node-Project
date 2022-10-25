import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
/**
 * User class for Tuiter.
 */
export default class User {
    constructor(id, username, password) {
        this.username = '';
        this.password = '';
        this.firstName = null;
        this.lastName = null;
        this.email = '';
        this.profilePhoto = null;
        this.headerImage = null;
        this.accountType = AccountType.Personal;
        this.maritalStatus = MaritalStatus.Single;
        this.biography = null;
        this.dateOfBirth = null;
        this.joined = new Date();
        this.location = null;
        this.id = id;
        this.username = username;
        this.password = password;
    }
    get uName() { return this.username; }
    get pass() { return this.password; }
}
