 
const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');
 

 
  const contactsPath = path.join(__dirname, "db/contacts.json");
  

 
//   const listContacts = async() => {
     
//     const data = await fs.readFile(contactsPath);
//     return JSON.parse(data);
//   }
  
//  async function getContactById(contactId) {
     
//     const contacts = await listContacts();
//     const resultContactId =  contacts.find(item => item.id === contactId);
//     if ( !resultContactId) {
//         return null;
//     }
//     return resultContactId;
//   }
  
//   async function removeContact(contactId) {
     
//     const contacts = await listContacts();
//     const idx = contacts.findIndex(item => item.id === contactId);
//     if (idx === -1) {
//       return null;
//     }

//     const [removeContact] = contacts.splice(idx, 1);
//     fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//     return removeContact;
//   }
  
//  async function addContact(name, email, phone ) {
    
//     const contacts = await listContacts();
//     const newContact = {
//         name,
//         email,
//         phone,
//          id: nanoid(),
//     };
//     contacts.push(newContact);
//     fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//     return newContact;
//   }

//   module.exports = {
//     listContacts,
//      getContactById,
//      addContact,
//      removeContact
//   }
  


              /**Рефакторинг */

const list = async() => {

  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function get(contactId) {
    
  const contacts = await list();
  const resultContactId =  contacts.find(item => item.id === contactId);
  if ( !resultContactId) {
      return null;
  }
  return resultContactId;
}

async function remove(contactId) {
    
  const contacts = await list();
  const idx = contacts.findIndex(item => item.id === contactId);
  if (idx === -1) {
    return null;
  }

  const [removeContact] = contacts.splice(idx, 1);
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return removeContact;
}

async function add(name, email, phone ) {
  
  const contacts = await list();
  const newContact = {
      name,
      email,
      phone,
        id: nanoid(),
  };
  contacts.push(newContact);
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

module.exports = {
    list,
    get,
    add,
    remove
}