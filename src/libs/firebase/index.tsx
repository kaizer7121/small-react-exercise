import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDaNztetR6LUC0u7ScovXaz746h79REObo',
  authDomain: 'dhd-udemy-demo.firebaseapp.com',
  databaseURL:
    'https://dhd-udemy-demo-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'dhd-udemy-demo',
  storageBucket: 'dhd-udemy-demo.appspot.com',
  messagingSenderId: '817276832602',
  appId: '1:817276832602:web:d5bff0d809641115028163',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
