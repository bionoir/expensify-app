import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


// Initialization
// database.ref().set({
//     name: 'Fabio Dalmasso',
//     age: 43,
//     job: {
//         title: 'Software developer',
//         company: 'Antaès'
//     },
//     location: {
//         city: 'Pully',
//         country: 'Switzerland'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`Mon nom est ${val.name}, j'ai ${val.age} ans et je travaille chez ${val.job.company}`);
// }, (e) => {
//     console.log('Error fetching data')
// });

// setTimeout(() => {
//     database.ref('age').set(45);
// }, 3500);


// database.ref().update({
//     name: 'Tito toto',
//     age: 17,
//     'location/city': 'Lausanne',
//     job: 'Software developer',
//     isSingle: null
// });

// // database.ref().set('This is my data');

// // database.ref('age').set(27);

// database.ref('attributes').set({    
//     height: 185,
//     weight: 88
// }).then(() => {
//     console.log('Data is saved for 2nd time');
// }).catch((e) => {
//     console.log('REJECTED ! ', e);
// });


// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.foreach((childsnapshot) => {
//             expenses.push({
//                 id: childsnapshot.key,
//                 ...childsnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.foreach((childsnapshot) => {
//             expenses.push({
//                 id: childsnapshot.key,
//                 ...childsnapshot.val()
//             });
//         });
        
//         console.log(expenses);
//     });