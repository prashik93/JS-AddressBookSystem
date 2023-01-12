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
        this._firstName = firstName;
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) {
        this._lastName = lastName;
    }

    get address() { return this._address; }
    set address(address) {
        this._address = address;
    }

    get city() { return this._city; }
    set city(city) {
        this._city = city;
    }

    get state() { return this._state; }
    set state(state) {
        this._state = state;
    }

    get zip() { return this._zip; }
    set zip(zip) {
        this._zip = zip;
    }

    get phone() { return this._phone; }
    set phone(phone) {
        this._phone = phone;
    }

    get email() { return this._email; }
    set email(email) {
        this._email = email;
    }

    toString() {
        return "FirstName = " + this.firstName + ", " + "LastName = " + this.lastName + ", " + "Address = " + this.address + ", " +
        "City = " + this.city + ", " + "State = " + this.state + ", " + "Zip = " + this.zip + ", " + "Phone = " + this.phone + ", " +
        "Email = " + this.email; 
    }
}
let newAddressBookContact = new AddressBookContact("Prashik", "Kamble", "Sanglood", "Akola", "Maharashtra", 444102, 8806187589, "pr@gmail.com");
console.log(newAddressBookContact.toString());

let addressBookContact = new AddressBookContact();
addressBookContact.firstName = "Pratik";
addressBookContact.lastName = "Kamble";
addressBookContact.address = "Sanglood";
addressBookContact.city = "Akola";
addressBookContact.state = "Maharashtra";
addressBookContact.zip = 444102;
addressBookContact.phone = 8806187554;
addressBookContact.email = "p@gmail.com";
console.log(addressBookContact.toString());