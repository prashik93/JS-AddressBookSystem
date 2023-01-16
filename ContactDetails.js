
const prompt = require("prompt-sync")();
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

let addressBookContactArray = new Array();
function addContact(firstName, lastName, address, city, state, zip, phone, email) {
    try{
        let newContactObj = new ContactDetails(firstName, lastName, address, city, state, zip, phone, email);
        addressBookContactArray.push(newContactObj);
    } catch(e) {
        console.error(e);
    }
}

addContact("Prashik", "Kamble", "Sanglood", "Akola", "Maharashtra", "444 102", "91 8806187589", "prashik@gmail.com");
addContact("Ratnadip", "Bharde", "Tiwsa", "Amravati", "Maharashtra", "444 100", "91 8983253934", "ratnadip@gmail.com");
addContact("Priyanka", "Shinde", "Pune", "Pune", "Maharashtra", "444 105", "91 9999999999", "priyanka@gmail.com");
addContact("Mazhar", "Ali", "Hyderabad", "Hyderabad", "Telangana", "444 512", "91 8125629427", "mazhar@gmail.com");

function findContact() {
    let usrInput = prompt("Enter Name To Search Contact Details :- ");
    let contact;
    addressBookContactArray.filter(contactDetails => {
        if(contactDetails.firstName == usrInput) {
            console.log("Contact Found : ");
            console.log(contactDetails);
            contact = contactDetails;
        }
    }); 
    return contact;
}

function editContact() {
    try {
        let contact = findContact();
        while(true) {
            let usrChoice = parseInt(prompt("What do you want to Edit\n0.Exit\n1.FirstName\n2.LastName\n3.Address\n4.City\n5.State\n6.Zip\n7.Phone\n8.Email\nYour Choice : "));
            switch(usrChoice) {
                case 1:
                    let EditFirstName = prompt("Edit First Name : ");
                    contact.firstName = EditFirstName;
                    break;
                case 2:
                    let EditLastName = prompt("Edit Last Name : ");
                    contact.lastName = EditLastName;
                    break;
                case 3:
                    let EditAddress = prompt("Edit Address : ");
                    contact.address = EditAddress;
                    break;     
                case 4:
                    let EditCity = prompt("Edit City : ");
                    contact.city = EditCity;
                    break;     
                case 5:
                    let EditState = prompt("Edit State : ");
                    contact.state = EditState;
                    break; 
                case 6:
                    let EditZip = prompt("Edit Zip : ");
                    contact.zip = EditZip;
                    break; 
                case 7:
                    let EditPhone = prompt("Edit Phone : ");
                    contact.phone = EditPhone;
                    break; 
                case 8:
                    let EditEmail = prompt("Edit Email : ");
                    contact.email = EditEmail;
                    break; 
                case 0:
                    console.log("\nContact After Edit : ");
                    console.log(contact.toString());
                    return;
                default :
                    console.log("Please Give Valid Input...");
                    break;
            }
        }
    } catch(e) {
        console.error(e);
    }
}

editContact();

function deleteContact() {
    try {
        let contact = findContact();
        const arrayIndex = addressBookContactArray.findIndex((contactDetails) => contactDetails.firstName == contact.firstName);
        addressBookContactArray.splice(arrayIndex, 1);
        console.log("Elements In An Array After Delete Operation : ");
        console.log(addressBookContactArray);
    } catch(e) {
        console.error(e);
    }
}

deleteContact();