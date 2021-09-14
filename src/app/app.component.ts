import { Component } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor () {
    const firebaseConfig = {
      apiKey: "AIzaSyDV7zgnsqzBuliiC6HIsx20Hy1HBPKIKTw",
      authDomain: "bookshelves-84375.firebaseapp.com",
      projectId: "bookshelves-84375",
      storageBucket: "bookshelves-84375.appspot.com",
      messagingSenderId: "1051704846632",
      appId: "1:1051704846632:web:6aff391c24e00612f1881d",
      measurementId: "G-R81XS9RF2P"
    };

    // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app)
  }
}


