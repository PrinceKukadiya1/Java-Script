const user ={
    username: "prince",
    price: 999,

    welcome: function(){
        console.log(`${this.username} , welcome to website`)
    }
}

user.welcome()
user.username = "jay"
user.welcome()