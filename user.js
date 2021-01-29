class Users{
    constructor(){
        this.users = []
    }
    getAllUsers(){
        return this.users
    }
    createAUser(user){
        user.id = this.users.length + 1
        this.users.push(user.id)
        return this.users
    }
}
module.exports = new Users()