import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCJvl-607dqTO95k0mTAoVyWq_e473yI48',
  authDomain: 'crwn-clothing-fc87f.firebaseapp.com',
  projectId: 'crwn-clothing-fc87f',
  storageBucket: 'crwn-clothing-fc87f.appspot.com',
  messagingSenderId: '396010926421',
  appId: '1:396010926421:web:e2e38a13dc4ebdf2cfffdc',
  measurementId: 'G-1M7MZ3X857',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);
  
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};



const app = initializeApp(config);
export const auth = getAuth();
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
