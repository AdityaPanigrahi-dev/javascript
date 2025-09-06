const user = {
    _email : 'aditya@gmail.com',
    _password : 'abc',

    get email(){
         return this._email.toUpperCase();
    },

    set email(value){
        this._email = value
    }
}

const aditya = Object.create(user)
console.log(aditya.email);
