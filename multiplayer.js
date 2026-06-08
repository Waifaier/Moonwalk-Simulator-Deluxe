import { db }
from "./firebase.js";

import {

ref,
set,
get,
update,
onValue

}
from
"https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

let room = null;

let player = null;

// -----------------

function generateCode(){

const chars =
"ABCDEFGHJKLMNPQRSTUVWXYZ123456789";

let code = "";

for(let i=0;i<6;i++){

code += chars[
Math.floor(
Math.random()*chars.length
)
];

}

return code;

}

// -----------------

document
.getElementById("createBtn")
.onclick =
async ()=>{

const name =
document
.getElementById(
"playerName"
)
.value;

if(!name) return;

const code =
generateCode();

room = code;

player = 1;

await set(

ref(db,"rooms/"+code),

{

player1:name,

player2:null,

status:"waiting",

timer:300

}

);

document
.getElementById(
"status"
)
.textContent =
"Sala criada: " + code;

listenRoom();

};

// -----------------

document
.getElementById("joinBtn")
.onclick =
async ()=>{

const code =
document
.getElementById(
"roomCode"
)
.value;

const name =
document
.getElementById(
"playerName"
)
.value;

const roomRef =
ref(
db,
"rooms/"+code
);

const snap =
await get(roomRef);

if(!snap.exists()){

alert(
"Sala não encontrada"
);

return;

}

await update(

roomRef,

{

player2:name,

status:"started"

}

);

room = code;

player = 2;

listenRoom();

};

// -----------------

function listenRoom(){

const roomRef =
ref(
db,
"rooms/"+room
);

onValue(
roomRef,
(snapshot)=>{

const data =
snapshot.val();

if(!data)
return;

document
.getElementById(
"meName"
)
.textContent =

player === 1

? data.player1

: data.player2;

document
.getElementById(
"enemyName"
)
.textContent =

player === 1

? data.player2 || "Esperando..."

: data.player1;

});

}