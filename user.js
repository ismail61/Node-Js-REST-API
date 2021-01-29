class Users{
    constructor(){
        this.users = []
    }
    getAllUsers(){
        return this.users
    }
    createAUser(user){
        user.id = this.users.length + 1
        this.users.push(user)
        return this.users
    }
    deleteAUsers(id){
        this.users = this.users.filter(user=>user.id !=id)
        return this.users
    }
    updateAUsers(id,user_info){
        const update_id_check = this.users.findIndex(user=>user.id==id)
        this.users[update_id_check].name = user_info.name || this.users[update_id_check].name
        this.users[update_id_check].email = user_info.email || this.users[update_id_check].email
        this.users[update_id_check].username = user_info.username || this.users[update_id_check].username
        this.users[update_id_check].password = user_info.password || this.users[update_id_check].password
        this.users[update_id_check].phone = user_info.phone || this.users[update_id_check].phone
        return this.users[update_id_check]
    }
}
module.exports = new Users()