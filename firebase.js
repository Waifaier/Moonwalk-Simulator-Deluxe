import { initializeApp }
from
"https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";

import {
getDatabase
}
from
"https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

const firebaseConfig = {

apiKey:
"AIzaSyBbOD6vHMKvCzttRI6hlIj2Lg-lhH_Brb8",

authDomain:
"moonwalk-simulator-online.firebaseapp.com",

databaseURL:
"https://moonwalk-simulator-online-default-rtdb.firebaseio.com",

projectId:
"moonwalk-simulator-online",

storageBucket:
"moonwalk-simulator-online.firebasestorage.app",

messagingSenderId:
"384661850131",

appId:
"1:384661850131:web:bc58f54573778e2a5297e6"

};

const app =
initializeApp(firebaseConfig);

export const db =
getDatabase(app);