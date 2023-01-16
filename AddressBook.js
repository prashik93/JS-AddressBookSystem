const contactDetails = require('./ContactDetails');
const prompt = require("prompt-sync")();
let addressBookContactArray = new Array();
let addressBookMap = new Map();

function userOptions() {
    while(true) {
        console.log("\nWhat do you want to do?\n1.Add Contact\n2.Show Contact\n3.Edit Contact\n4.Delete Contact\
                    \n5.Get Count Of Contacts\n6.Find By FirstName\n7.Search In City Or State\n8.View By City Or State\
                    \n9.Count Contacts By City Or State\n0.Exit");
        let usrChoice = parseInt(prompt("Your Choice :- "));
        switch(usrChoice) {
            case 1:
                addContact("Prashik", "Kamble", "Sanglood", "Akola", "Maharashtra", "444 102", "91 8806187589", "prashik@gmail.com");
                addContact("Ratnadip", "Bharde", "Tiwsa", "Amravati", "Maharashtra", "444 100", "91 8983253934", "ratnadip@gmail.com");
                addContact("Priyanka", "Shinde", "Pune", "Pune", "Maharashtra", "444 105", "91 9999999999", "priyanka@gmail.com");
                addContact("Mazhar", "Ali", "Hyderabad", "Hyderabad", "Telangana", "444 512", "91 8125629427", "mazhar@gmail.com");
                addContact("Pratik", "Kamble", "Sanglood", "Akola", "Maharashtra", "444 102", "91 8806187589", "prashik@gmail.com");
                break;
            case 2:
                showContact();
                break;
            case 3:
                editContact();
                break;
            case 4:
                deleteContact();
                break;
            case 5:
                getCountOfContactDetails();
                break;
            case 6:
                findContact();
                break;
            case 7:
                searchInCityOrState();
                break;
            case 8:
                viewByCityOrState();
                break;
            case 9:
                countByCityOrState();
                break;
            case 0:
                return;
            default :
                console.log("Please Give Valid Input...")
        }
    }
}

userOptions();

function addContact(firstName, lastName, address, city, state, zip, phone, email) {
    try{
        newContactObj = new contactDetails.ContactDetails(firstName, lastName, address, city, state, zip, phone, email);
        let filterContact = addressBookContactArray.filter(contactDetails => contactDetails.firstName == newContactObj.firstName);
        if(filterContact.length <= 0) {
            addressBookContactArray.push(newContactObj);
        } else {
            console.log("Contact Details Already Exist, Please Add A New One...");
        }
        
    } catch(e) {
        console.error(e);
    }
}

function findContact() {
    let usrInput = prompt("Enter Name To Search Contact Details :- ");
    let contact;
    addressBookContactArray.filter(contactDetails => {
        if(contactDetails.firstName == usrInput) {
            console.log("\nContact Found : ");
            console.log(contactDetails);
            contact = contactDetails;
        }
    }); 
    return contact;
}

function showContact() {
    if(addressBookContactArray.length > 0) {
        addressBookContactArray.forEach(contact => console.log(contact));
    } else (console.log("\nNo Contact Details Are Present..."));
}


function editContact() {
    try {
        let contact = findContact();
        while(true) {
            console.log("\nWhat do you want to Edit\n0.Exit\n1.FirstName\n2.LastName\n3.Address\n4.City\n5.State\n6.Zip\n7.Phone\n8.Email");
            let usrChoice = parseInt(prompt("Your Choice :- "));
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

function deleteContact() {
    try {
        let contact = findContact();
        if(contact == undefined) {
            return console.log("\nNo Contact Details Found...")
        }
        const arrayIndex = addressBookContactArray.findIndex((contactDetails) => contactDetails.firstName == contact.firstName);
        addressBookContactArray.splice(arrayIndex, 1);
        console.log("\nElements In An Array After Delete Operation : ");
        console.log(addressBookContactArray);
    } catch(e) {
        console.error(e);
    }
}

function getCountOfContactDetails() {
    let count = 0;
    addressBookContactArray.forEach(contact => {
        if(contact)count++;
    });
    console.log("Count Of Contact Details :- " + count);
}

function searchInCityOrState() {
    while(true) {
        console.log("\nPlease Choose\n1.Search By City\n2.Search By State\n0.Exit");
        let num = parseInt(prompt("Your Choice :- "));
        switch(num) {
            case 1:
                let usrCity = prompt("Enter City Name : ")
                let city = addressBookContactArray.filter(contact => contact.city == usrCity);
                if(city.length == 0) {
                    return console.log("No Contact Details Found...");
                }
                console.log("Persons in City " + usrCity + " : " + city);
                break;
            case 2:
                let usrState = prompt("Enter State Name : ")
                let state = addressBookContactArray.filter(contact => contact.state == usrState);
                if(state.length == 0) {
                    return console.log("No Contact Details Found...");
                }
                console.log("Persons in City " + usrState + " : " + state);
                break;
            case 0:
                return;
            default : 
                console.log("Please Give Valid Input...")
        }
    }
}

function viewByCity() {
    let cityNameArray = new Array();
    
    addressBookContactArray.forEach(contact => cityNameArray.push(contact.city));
    for(let i = 0; i < cityNameArray.length; i++) {
        let contactsByCityArray = new Array();
        addressBookContactArray.filter(contactDetails => {
            if(contactDetails.city == cityNameArray[i]) {
                contactsByCityArray.push(contactDetails);
            }
            addressBookMap.set(cityNameArray[i], contactsByCityArray)
        }); 
    }
    
    for(let key of addressBookMap.keys()) {
        console.log(key + " => " + addressBookMap.get(key) + "\n");
    }
}

function viewByState() {
    let stateNameArray = new Array();
    
    addressBookContactArray.forEach(contact => stateNameArray.push(contact.state));
    for(let i = 0; i < stateNameArray.length; i++) {
        let contactsByStateArray = new Array();
        addressBookContactArray.filter(contactDetails => {
            if(contactDetails.state == stateNameArray[i]) {
                contactsByStateArray.push(contactDetails);
            }
            addressBookMap.set(stateNameArray[i], contactsByStateArray)
        }); 
    }
    
    for(let key of addressBookMap.keys()) {
        console.log(key + " => " + addressBookMap.get(key) + "\n");
    }
}

function viewByCityOrState() {
    while(true) {
        console.log("\nPlease Choose\n1.View By City\n2.View By State\n0.Exit");
        let num = parseInt(prompt("Your Choice :- "));
        switch(num) {
            case 1:
                viewByCity();
                break;
            case 2:
                viewByState();
                break;
            case 0:
                return;
            default : 
                console.log("Please Give Valid Input...")
        }
    }
}

function countByCityOrState() {
    while(true) {
        console.log("\nPlease Choose\n1.Count By City\n2.Count By State\n0.Exit");
        let usrChoice = parseInt(prompt("Your Choice : "));
        switch(usrChoice) {
            case 1:
                let usrCity = prompt("Enter City Name To Get Count Of Contact Details : ");
                let countOfContactsInCity = addressBookContactArray.filter((contact) => contact.city == usrCity).reduce(count => count+1, 0);
                console.log("\nCount Of Contact Details With Respective City i.e " + usrCity + " Are : " + countOfContactsInCity);
                break;
            case 2:
                let usrState = prompt("Enter State Name To Get Count Of Contact Details : ");
                let countOfContactsInState = addressBookContactArray.filter((contact) => contact.state == usrState).reduce(count => count+1, 0);
                console.log("\nCount Of Contact Details With Respective State i.e " + usrState + " Are : " + countOfContactsInState);
                break;
        }
    }
}