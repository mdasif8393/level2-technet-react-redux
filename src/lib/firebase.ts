import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAIS3ZCPIMm9H5UtWEw-0Nk_FSdniiThXY',
  authDomain: 'level2-technet-react-redux.firebaseapp.com',
  projectId: 'level2-technet-react-redux',
  storageBucket: 'level2-technet-react-redux.appspot.com',
  messagingSenderId: '800805434596',
  appId: '1:800805434596:web:b25087afd82bd2de1ca8f1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
