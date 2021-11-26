// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const guests = ['leonardo', 'tobey', 'carey', 'joel', 'elizabeth', 'isla', 'jason', 'amitabh'];

let nameUser =  prompt('Inserisci il tuo nome:').toLowerCase();

let found = false;

// for (let i = 0; i < guests.length; i++) {
    
//     if (nameUser == guests[i]) {
//          console.log(nameUser);
//         found = true;
//     }
//      console.log(guests[i]);
    
// }

// if (found == true) {
//       console.log('Il nome è stato trovato');
//     } else {
//       console.log('Il nome non e stato trovato');
//     }

// console.log(found);

// While Loop
let t = 0;
while (t < guests.length && found == false) {
    if (guests[t] == nameUser) {
        found = true;
    }
    t++;
}

if (found == true) {
      console.log('Il nome è stato trovato');
    } else {
      console.log('Il nome non e stato trovato');
    }