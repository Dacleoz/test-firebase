import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"
import { collection, doc, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"
import { getAuth, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyB9jDg0V3R_WuJRt0uO7Qi9ztTXBd5hcq8",
    authDomain: "caronte-test-517c6.firebaseapp.com",
    projectId: "caronte-test-517c6",
    storageBucket: "caronte-test-517c6.appspot.com",
    messagingSenderId: "557917757321",
    appId: "1:557917757321:web:9a96e98a4ffebcd36acb58",
    measurementId: "G-XG02KH4ZFR"
};


const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const db = getFirestore(firebase);


$(document).ready(function () {
    console.log(firebase);
    console.log(auth);
    console.log(db);

    const myDocument = doc(db,'document', 'firstdocument');
    console.dir(myDocument);
});

$('#login').click(function () {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(function (result) {
        let user = result.user;
        document.write('Hello ' + user.displayName.valueOf() + '!');
        console.log(user);
    });
});
