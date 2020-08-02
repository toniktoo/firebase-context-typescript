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

const setUpRecaptcha = () => {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    'recaptcha-conteiner',
    {
      size: 'invisible',
      callback: function (response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      },
    }
  );
};

export const onSignInSubmit = () => {
  setUpRecaptcha();
  const phoneNumber = '+7 900 000 00 00';
  const appVerifier = window.recaptchaVerifier;
  firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      var code = window.prompt('ENter OTP');
      confirmationResult
        .confirm(code)
        .then(function (result) {
          // User signed in successfully.
          var user = result.user;
          console.log('user signed');
          // ...
        })
        .catch(function (error) {
          // User couldn't sign in (bad verification code?)
          // ...
        });
    })
    .catch(function (error) {
      // Error; SMS not sent
      // ...
    });
};
