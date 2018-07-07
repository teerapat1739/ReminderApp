import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyALsgpDOM0qm8UeLBwHbXNCuSzPuZ_tl9A",
    authDomain: "reminderapp-51318.firebaseapp.com",
    databaseURL: "https://reminderapp-51318.firebaseio.com",
    projectId: "reminderapp-51318",
    storageBucket: "reminderapp-51318.appspot.com",
    messagingSenderId: "570569057226"
  };
  firebase.initializeApp(config);

  const database = firebase.database();

  database.ref().set({
      name: 'Teerapat Thong-o',
      myTeam: 'Liverpool',
      location: {
          city: 'Trang',
          country: 'Thailand',
      }
  });

//   database.ref().set('This is my data. ')

database.ref('myTeam').set('Dortmun')
database.ref('location/city').set('Lao')


database.ref('attribute').set({
    height: 73,
    weight: 150
})