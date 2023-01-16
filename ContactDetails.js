let firstNameRegex = new RegExp('^[A-Z][a-z]{2,}$');
let lastNameRegex = new RegExp('^[A-Z][a-z]{2,}$');
let addressRegex = new RegExp('^[A-Z][a-z]{2,}$');
let cityRegex = new RegExp('^[A-Z][a-z]{2,}$');
let stateRegex = new RegExp('^[A-Z][a-z]{2,}$');
let zipRegex = new RegExp('(^[1-9][0-9]{5}|(^[1-9][0-9]{2}[\\s][0-9]{3}))$')
let phoneRegex = new RegExp('^([1-9]|[1-9][0-9])[\\s]([7-9][0-9]{9})$');
let emailRegex = new RegExp('^([a-z 0-9]{3,}|[a-z 0-9]{3,}[-|+|-|.][a-z 0-9]{1,})[@][a-z 0-9]{1,}[.]([com|net|co]{2,3}|[com|net|co]{2,3}[.][au|in|com]{2,3})$');

class ContactDetails{

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }
    get firstName() {return this._firstName};
    set firstName(firstName){
        if (firstNameRegex.test(firstName)) this._firstName = firstName;
        else throw 'FirstName is Incorrect!';
    }
    get lastName() {return this._lastName};
    set lastName(lastName){
        if (lastNameRegex.test(lastName)) this._lastName = lastName;
        else throw 'LastName is Incorrect!';
    }
    get address() {return this._address};
    set address(address){
        if (addressRegex.test(address)) this._address = address;
        else throw 'Address is Incorrect!';
    }
    get city() {return this._city};
    set city(city){
        if (cityRegex.test(city)) this._city = city;
        else throw 'City is Incorrect!';
    }
    get state() {return this._state};
    set state(state){
        if (stateRegex.test(state)) this._state = state;
        else throw 'State is Incorrect!';
    }
    
    get zip() {return this._zip};
    set zip(zip){
        if (zipRegex.test(zip)) this._zip = zip;
        else throw 'Zip is Incorrect!';
    }
    get phone() {return this._phone};
    set phone(phone){
        if (phoneRegex.test(phone)) this._phone = phone;
        else throw 'Phone is Incorrect!';
    }
    get email() {return this._email};
    set email(email){
        if (emailRegex.test(email)) this._email = email;
        else throw 'Email is Incorrect!';
    }

    toString() {
        return "FirstName = " + this.firstName + ", " + "LastName = " + this.lastName + ", " + "Address = " + this.address + ", " +
            "City = " + this.city + ", " + "State = " + this.state + ", " + "Zip = " + this.zip + ", " + "Phone = " + this.phone + ", " +
            "Email = " + this.email;
    }
}

module.exports = {ContactDetails};