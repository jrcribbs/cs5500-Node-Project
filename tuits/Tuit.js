/**
 * Tuit objects for Tuiter.
 */
export default class Tuit {
    constructor(id, tuit, postedOn) {
        this.id = id;
        this.tuit = tuit;
        this.postedOn = postedOn;
        this.postedBy = null;
    }
    set author(user) { this.postedBy = user; }
    get author() { return this.postedBy; }
    get post() { return this.tuit; }
}
