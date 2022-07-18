import { initializeApp } from "firebase/app";
import { collection as fbCollection, getDocs, getFirestore } from "firebase/firestore";
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