import { initializeApp } from "firebase/app";
import { addDoc, collection, collection as fbCollection, getDocs, getFirestore } from "firebase/firestore";
import 'firebase/firestore';
import { BlogItemType } from "../redux/reducers/staticReducer";

const firebaseConfig = {
  apiKey: "AIzaSyBGzJSre5TMzYFQCYyzpoOwe7CeTcaXV_g",
  authDomain: "pharmastos-d69f2.firebaseapp.com",
  projectId: "pharmastos-d69f2",
  storageBucket: "pharmastos-d69f2.appspot.com",
  messagingSenderId: "50323748779",
  appId: "1:50323748779:web:ccb544709a6dc041f184ee"
};

const app = initializeApp(firebaseConfig);
export const fs = getFirestore(app);

export const itemsAPI = {
  get: async (collection: string) => {
    const itemsSnapshot = await getDocs(fbCollection(fs, collection));
    return itemsSnapshot.docs.map(d => d.data() as BlogItemType);
  }
};

type CustomerType = {
  name: string
  email: string
  phone: string
}
export const customerAPI = {
  subscribe: (customer: CustomerType) => {
    let currentTime = new Date().toLocaleString('ru', { hour12: false });
    if (window.navigator.onLine) { // detect wheather user is online or not
      addDoc(collection(fs, 'subscribedUsers'), { ...customer, sentAt: currentTime });
      return true;
    };
    return false;
  }
}