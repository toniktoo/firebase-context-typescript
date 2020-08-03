import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCXYFP0Vz5sFTXjJ_7UFN7ie1dohuxAvLk',
  authDomain: 'gotovo-39cfc.firebaseapp.com',
  databaseURL: 'https://gotovo-39cfc.firebaseio.com',
  projectId: 'gotovo-39cfc',
  storageBucket: 'gotovo-39cfc.appspot.com',
  messagingSenderId: '771336972807',
  appId: '1:771336972807:web:fbc6c167a9431eb7c258a2',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
