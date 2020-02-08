import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_API_KEY,
    databaseURL: process.env.FIREBASE_API_KEY,
    projectId: process.env.FIREBASE_API_KEY,
    storageBucket: process.env.FIREBASE_API_KEY,
    messagingSenderId: process.env.FIREBASE_API_KEY,
    appId: process.env.FIREBASE_API_KEY,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);
const database=firebase.database();

export { firebase,database as default}

// // database.ref('expenses').push({
// //     description: 'descrip1',
// //     note:' note1',
// //     amount: 1,
// //     createdAt: 'date1'
// // })
// // database.ref('expenses').push({
// //     description: 'descrip2',
// //     note:' note2',
// //     amount: 2,
// //     createdAt: 'date2'
// // })
// // database.ref('expenses').push({
// //     description: 'descrip3',
// //     note:' note3',
// //     amount: 3,
// //     createdAt: 'date3'
// // })

// // database.ref('expenses')
// // .once('value')
// // .then((snapshot)=>{
// //     const expenses = []

// //     snapshot.forEach((childSnapshot)=>{
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         })
// //     })
// //     console.log(expenses)
// // })
// // .catch((error)=>{
// //     console.log("error message", error)
// // })

// // 
// database.ref('expenses')
// .on('value',(snapshot)=>{
//     const expenses = []
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// },(error)=>{
//     console.log(error,"error message")
// })

// // on remove listener
// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })

// // on change listener
// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })


// // on added listener, this gets called for added children as well as existing ones
// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })
// // database.ref('location')
// // .once('value')
// // .then((snapshot)=>{
// //     const val = snapshot.val();
// //     console.log(val)
// // }).catch((error)=>{
// //     console.log('error fetching data', error)
// // })


// // notifies of all changes, dumps into console.log
// // const onValueChange = database.ref().on('value',(snapshot) =>{
// //     console.log(snapshot.val())
// // }, (error)=>{
// //     console.log('Error with data fetching',error)
// // })


// // removes the "listner" that notifies of all cahnges
// // setTimeout(()=>{
// //     database.ref().off(onValueChange)
// // },3500);

// // const onValueChange = database.ref().on('value',(snapshot)=>{
// //     console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}`)
// // },(error)=>{
// //     console.log('Error with data fetching', error)
// // })



// // database.ref().set({
// //     name: 'Thomas Huang',
// //     age: 25,
// //     isSingle:'false',
// //     job:{
// //         title:'software developer',
// //         company: 'google'
// //     },
// //     stressLevel: 6,
// //     location:{
// //         city:'toronto',
// //         country:'Canada'
// //     },
// // }).then(()=>{
// //     console.log('Data is saved!')
// // }).catch((error)=>{
// //     console.log('This failed.', error)
// // })
// // ref() => refers to the root
// // ref('age').set(27) refers to root=>age => set age to 27
// // database.ref('age').set(27);
// // referencing from root -> location-> city object
// // database.ref('location/city').set('new York')


// // database.ref('attributes').set({
// //     height:100,
// //     weight:500
// // }).then(()=>{
// //     console.log('Data is saved!')
// // }).catch((error)=>{
// //     console.log(error)
// // });

// // database.ref('isSingle').remove()
// // .then(()=>{
// //     console.log('success')
// // }).catch(()=>{
// //     console.log('did not remove data')
// // })

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'amazon',
// //     'location/city': 'Seattle'
// // })