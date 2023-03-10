class AddressBookContact {

    constructor(...params) {
        this._firstName = params[0];
        this._lastName = params[1];
        this._address = params[2];
        this._city = params[3];
        this._state = params[4];
        this._zip = params[5];
        this._phone = params[6];
        this._email = params[7];
    }

    get firstName() { return this._firstName; }
    set firstName(firstName) {
        let firstNameRegex = RegExp('^[A-Z][a-z]{2,}$');
        if(firstNameRegex.test(firstName)) this._firstName = firstName;
        else throw 'FirstName is Incorrect!'
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let lastNameRegex = RegExp('^[A-Z][a-z]{2,}$');
        if(lastNameRegex.test(lastName)) this._lastName = lastName;
        else throw 'LastName is Incorrect!'
    }

    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp('^[A-Z][a-z]{3,}$');
        if(addressRegex.test(address)) this._address = address;
        else throw 'Address is Incorrect!'
    }

    get city() { return this._city; }
    set city(city) {
        let cityRegex = RegExp('^[A-Z][a-z]{3,}$');
        if(cityRegex.test(city)) this._city = city;
        else throw 'City is Incorrect!'
    }

    get state() { return this._state; }
    set state(state) {
        let stateRegex = RegExp('^[A-Z][a-z]{3,}$');
        if(stateRegex.test(state)) this._state = state;
        else throw 'State is Incorrect!'
    }

    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp('(^[1-9][0-9]{5}|(^[1-9][0-9]{2}[\\s][0-9]{3}))$');
        if(zipRegex.test(zip)) this._zip = zip;
        else throw 'Zip is Incorrect!'
    }

    get phone() { return this._phone; }
    set phone(phone) {
        let phoneRegex = RegExp('^([1-9]|[1-9][0-9])[\\s]([7-9][0-9]{9})$');
        if(phoneRegex.test(phone)) this._phone = phone;
        else throw 'Phone is Incorrect!'
    }

    get email() { return this._email; }
    set email(email) {
        let emailRegex = RegExp('^([a-z 0-9]{3,}|[a-z 0-9]{3,}[-|+|-|.][a-z 0-9]{1,})[@][a-z 0-9]{1,}[.]([com|net|co]{2,3}|[com|net|co]{2,3}[.][au|in|com]{2,3})$')
        if(emailRegex.test(email)) this._email = email;
        else throw 'Email is Incorrect!'
    }

    toString() {
        return "FirstName = " + this.firstName + ", " + "LastName = " + this.lastName + ", " + "Address = " + this.address + ", " +
        "City = " + this.city + ", " + "State = " + this.state + ", " + "Zip = " + this.zip + ", " + "Phone = " + this.phone + ", " +
        "Email = " + this.email; 
    }
}
let newAddressBookContact = new AddressBookContact("Prashik", "Kamble", "Sanglood", "Akola", "Maharashtra", "444 102", "91 8806187589", "pr@gmail.com");
console.log(newAddressBookContact.toString());

let addressBookContact = new AddressBookContact();
try{
    addressBookContact.firstName = "ratik";
    console.log(addressBookContact.toString());
} catch(e) {
    console.error(e);
}

try{
    addressBookContact.lastName = "amble";
    console.log(addressBookContact.toString());
} catch(e) {
    console.error(e);
}

try {
    addressBookContact.address = "San";
    console.log(addressBookContact.toString());
} catch(e) {
    console.error(e);
}

try{
    addressBookContact.city = "Ako";
    console.log(addressBookContact.toString());
} catch(e) {
    console.error(e);
}

try{
    addressBookContact.state = "Mah";
    console.log(addressBookContact.toString());
} catch(e) {
    console.error(e);
}

try{
    addressBookContact.zip = "44410";
    console.log(addressBookContact.toString());
} catch(e) {
    console.error(e);
}

try{
    addressBookContact.phone = "91 880618";
    console.log(addressBookContact.toString());
} catch(e) {
    console.error(e);
}

try{
    addressBookContact.email = "prashikgmail.com";
    console.log(addressBookContact.toString());
} catch(e) {
    console.error(e);
}