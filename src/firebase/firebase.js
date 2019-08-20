import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBjlb-5VXtzYNGUKxv2ym-9EbnpBEW60QM",
    authDomain: "expensify-34927.firebaseapp.com",
    databaseURL: "https://expensify-34927.firebaseio.com",
    projectId: "expensify-34927",
    storageBucket: "",
    messagingSenderId: "785651840565",
    appId: "1:785651840565:web:68dd21d868d74059"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// getting the reference of the database service
const database = firebase.database()

//fetching all data
database.ref()
    .once('value')
    .then((snapshot) => snapshot.val())
    .then((data) => console.log(data))
    .catch((e) => console.log('Error fetching data: ', e))

/* database.ref().set({
    name: 'Soumyajit Ghosh',
    age: 40,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google'
    },
    location: {
        city: 'Philadelphia',
        country: 'United States'
    }
}).then(() => {
    console.log('New database added!')
}).catch((e) => {
    console.log("Error found: ", e)
}) */

/* database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
}).then(() => {
    console.log('Database has been updated successfully')
}).catch((e) => {
    console.log("Error found: ", e)
}) */

/* database.ref('age').set(42)
database.ref('location/city').set('Kolkata') */

/* database.ref('attributes').set({
    height: 175,
    weight: 81
}).then(() => {
    console.log('New reference added')
}).catch((e) => {
    console.log('there is error: ', e)
}) */

/* database.ref('isSingle').remove()
    .then(() => {
        console.log('data removed')
    }).catch((e) => {
        console.log("Error while remove: ", e)
    }) */
