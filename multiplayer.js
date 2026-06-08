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

player1Money:0,
player2Money:0,

player1Diamonds:0,
player2Diamonds:0,

player1Click:1,
player2Click:1,

player1Auto:0,
player2Auto:0,

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

if(!data) return;

document
.getElementById("meName")
.textContent =
player === 1
? data.player1
: data.player2;

document
.getElementById("enemyName")
.textContent =
player === 1
? (data.player2 || "Esperando...")
: data.player1;

if(player === 1){

document.getElementById(
"meMoney"
).textContent =
data.player1Money || 0;

document.getElementById(
"meDiamonds"
).textContent =
data.player1Diamonds || 0;

document.getElementById(
"meClick"
).textContent =
data.player1Click || 1;

document.getElementById(
"meAuto"
).textContent =
data.player1Auto || 0;

document.getElementById(
"enemyMoney"
).textContent =
data.player2Money || 0;

document.getElementById(
"enemyDiamonds"
).textContent =
data.player2Diamonds || 0;

document.getElementById(
"enemyClick"
).textContent =
data.player2Click || 1;

document.getElementById(
"enemyAuto"
).textContent =
data.player2Auto || 0;

}
else{

document.getElementById(
"meMoney"
).textContent =
data.player2Money || 0;

document.getElementById(
"meDiamonds"
).textContent =
data.player2Diamonds || 0;

document.getElementById(
"meClick"
).textContent =
data.player2Click || 1;

document.getElementById(
"meAuto"
).textContent =
data.player2Auto || 0;

document.getElementById(
"enemyMoney"
).textContent =
data.player1Money || 0;

document.getElementById(
"enemyDiamonds"
).textContent =
data.player1Diamonds || 0;

document.getElementById(
"enemyClick"
).textContent =
data.player1Click || 1;

document.getElementById(
"enemyAuto"
).textContent =
data.player1Auto || 0;

}

if(
data.player1 &&
data.player2 &&
data.status === "started"
){

document.getElementById(
"status"
).textContent =
"🔥 Partida em andamento";

}

// Atualiza status

if(data.status === "waiting"){

document.getElementById(
"status"
).textContent =
"Código da sala: " + room + " | Aguardando outro jogador...";

}

// Quando o segundo jogador entrar

if(
data.player1 &&
data.player2 &&
data.status === "started"
){

document.getElementById(
"status"
).textContent =
"Partida iniciando...";

sessionStorage.setItem(
"roomCode",
room
);

sessionStorage.setItem(
"playerNumber",
player
);

window.location.href =
"game.html";

}

});

}

function voltarAoMenu(){

window.location.href =
"index.html";

}

function confirmarSaida(){

const sair =
confirm(
"Deseja voltar ao menu principal?"
);

if(sair){

voltarAoMenu();

}

}

document.addEventListener(
"keydown",
(e)=>{

if(
e.key === "Escape"
){

confirmarSaida();

}

}
);

const menuBtn =
document.getElementById(
"menuBtn"
);

if(menuBtn){

menuBtn.addEventListener(
"click",
confirmarSaida
);

}