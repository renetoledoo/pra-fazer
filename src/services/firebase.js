// Importar SDK do fireBsae
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Minha autenticação do firebase
const firebaseConfig = {
  apiKey: "AIzaSyCDFElGypshYDNnJ5KlxuZs_MwN11HyXGw",
  authDomain: "pra-fazer-app-81ae4.firebaseapp.com",
  projectId: "pra-fazer-app-81ae4",
  storageBucket: "pra-fazer-app-81ae4.appspot.com",
  messagingSenderId: "1070212497643",
  appId: "1:1070212497643:web:7d55690feebdb5129afeae"
};

// Iniciar serviço do firebase
const app = initializeApp(firebaseConfig);