import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCXV8pJdIWDrEucY-OB516HHyBT7rcLxq0',
	authDomain: 'crwn-clothing-e283a.firebaseapp.com',
	projectId: 'crwn-clothing-e283a',
	storageBucket: 'crwn-clothing-e283a.appspot.com',
	messagingSenderId: '70537875073',
	appId: '1:70537875073:web:c6ebb6ded6a08cf85a8780',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);

	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	console.log(userSnapshot.exists());

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.log('Error creating the user', error.message);
		}
	}

	return userDocRef;
};