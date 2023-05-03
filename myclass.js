class User {
    constructor(username, password, data){
        this.username = username;
        this.password = password;
        this.data = data;
    }

    getuser(){
        return `Username: ${this.username}
        Password: ${this.password}
        Data: ${this.data}`;
    }
}

module.exports = User;