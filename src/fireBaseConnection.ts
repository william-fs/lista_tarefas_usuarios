import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAxxsSq0jH28GUWdy41iTvYtzQlre6-rCA",
    authDomain: "lista-tarefas-usuarios.firebaseapp.com",
    projectId: "lista-tarefas-usuarios",
    storageBucket: "lista-tarefas-usuarios.appspot.com",
    messagingSenderId: "148369938277",
    appId: "1:148369938277:web:903066db60bd4f55b5338c"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth:Auth = getAuth(firebaseApp);

export { db, auth };