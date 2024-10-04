import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('kGT7w83pB7ICGQmDdOJ8').collection('cartItems').doc('KnMSbnP51lD9gbZuoTR2');

firestore.doc('/users/kGT7w83pB7ICGQmDdOJ8/cartItems');