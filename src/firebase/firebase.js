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

//child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(spanshot.val())
})

//child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.val())
})

//child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.val())
})

/* database.ref('expenses').on('value', (snapshot) => {
    const expenses = []

    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    })

    console.log(expenses)
}, (error) => {
    console.log('Error: ', error)
}) */

/* database.ref('expenses').push({
    description: 'Rent',
    note: 'Jan rent',
    amount: 3456.34,
    createdAt: 44567
})

database.ref('expenses').push({
    description: 'Water Bill',
    note: 'March Bill',
    amount: 4456.34,
    createdAt: 55674
})

database.ref('expenses').push({
    description: 'Gas Bill',
    note: 'May Bill',
    amount: 33694.55,
    createdAt: 77645
}) */

/* database.ref().on('value', (snapshot) => {
    console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}` )
}) */

/* database.ref().on('value', (snapshot) => {
    console.log(snapshot.val())
}) */


//fetching all data
/* database.ref()
    .once('value')
    .then((snapshot) => snapshot.val())
    .then((data) => console.log(data))
    .catch((e) => console.log('Error fetching data: ', e)) */

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
