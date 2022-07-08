 
const contacts = require("./contacts.js");

const {program} = require('commander');
// const yargs = require('yargs');
// const { hideBin } = require('yargs/helpers');

// const arr = hideBin(process.argv);
// const {argv} = yargs(arr);

// const argv = require('yargs').argv;
const invokeAction = async({action, id, name, email, phone}) => {
    switch(action) {
        case "list":
            const list = await contacts.list();
            console.log(list);
            break;
        case "get":
            const contactId = await contacts.get(id);
            console.log(contactId);
            break;
        case "add":
            const newContact = await contacts.add(name, email, phone);
            console.log(newContact);
            break;
        case "remove":
            const removeContactId = await contacts.remove(id);
            console.log(removeContactId);
            break;
        default:
            console.warn('\x1B[31m Unknown action type!');
    }
 }


 


 

//  const invokeAction = async({action, id, name, email, phone}) => {
//     switch(action) {
//         case "listContacts":
//             const listContact = await contacts.listContacts();
//             console.log(listContact);
//             break;
//         case "getContactById":
//             const contactId = await contacts.getContactById(id);
//             console.log(contactId);
//             break;
//         case "addContact":
//             const newContact = await contacts.addContact(name, email, phone);
//             console.log(newContact);
//             break;
//         case "removeContact":
//             const removeContactId = await contacts.removeContact(id);
//             console.log(removeContactId);
//             break;
//     }
//  }

//   invokeAction({action: "listContacts"})
  //invokeAction({action: "getContactById", id: "4"})
//   invokeAction({action: "addContact", name: "Mukola Lyutenko", email: "lyutenkomykola42@gmail.com", phone: "0666-12-42-34"})
// invokeAction({action: "removeContact", id: "5"})

program
 .option("a, --action <type>")
 .option("i, --id <type>")
 .option("-n, --name <type>")
 .option("-e, --email <type>")
 .option("-p, --phone <type>")

program.parse(process.argv);
const options = program.opts();
 
invokeAction(options);

// invokeAction(argv);
