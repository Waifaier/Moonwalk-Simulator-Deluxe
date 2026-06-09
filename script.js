// =====================================
// MOONWALK SIMULATOR DELUXE V2
// PARTE 1 - SISTEMA PRINCIPAL
// =====================================

let money = 0;
let diamonds = 0;

let clickPower = 1;
let autoPower = 0;
let diamondPower = 0;

let totalMoney = 0;

let unlockedAchievements = [];
let jokers = 0;

let exclusiveAchievements = [];

const michaelStages = [

[0,"🧍","Michael Mendigo"],
[50,"🚶","Michael Trabalhador"],
[100,"🕺","Michael de Boteco"],
[250,"🎵","Michael Cantor"],
[500,"🎤","Michael Iniciante"],
[1000,"🎶","Michael Pop"],
[2500,"🧤","Michael da Luva"],
[5000,"🕴️","Michael Moonwalker"],
[10000,"👑","Michael Rei"],
[25000,"💎","Michael Diamante"],
[50000,"🔥","Michael Lendário"],
[100000,"⚡","Michael Elétrico"],
[250000,"🌟","Michael Estelar"],
[500000,"🌌","Michael Cósmico"],
[1000000,"☄️","Michael Galáctico"],
[2500000,"🛸","Michael Interplanetário"],
[5000000,"🚀","Michael Intergaláctico"],
[10000000,"🧠","Michael Quântico"],
[25000000,"⚛️","Michael Multiversal"],
[50000000,"🔮","Michael Arcano"],
[100000000,"😇","Michael Divino"],
[250000000,"🐉","Michael Dragão"],
[500000000,"🌋","Michael Apocalipse"],
[1000000000,"😈","Michael Baphomet"],
[5000000000,"👹","Michael Supremo"],
[10000000000,"👁️","Michael Observador"],
[25000000000,"♾️","Michael Infinito"],
[50000000000,"🌌","Michael Deus"],
[100000000000,"💀","Michael Final"]
];

function formatNumber(num){

    if(num >= 1e15)
        return (num/1e15).toFixed(2)+"Q";

    if(num >= 1e12)
        return (num/1e12).toFixed(2)+"T";

    if(num >= 1e9)
        return (num/1e9).toFixed(2)+"B";

    if(num >= 1e6)
        return (num/1e6).toFixed(2)+"M";

    if(num >= 1e3)
        return (num/1e3).toFixed(2)+"K";

    return Math.floor(num);
}

function updateUI(){

    const moneyEl =
    document.getElementById("money");

    if(moneyEl)
        moneyEl.textContent =
        formatNumber(money);

    const diamondsEl =
    document.getElementById("diamonds");

    if(diamondsEl)
        diamondsEl.textContent =
        formatNumber(diamonds);

    const clickEl =
    document.getElementById("clickPower");

    if(clickEl)
        clickEl.textContent =
        formatNumber(clickPower);

    const autoEl =
    document.getElementById("autoPower");

    if(autoEl)
        autoEl.textContent =
        formatNumber(autoPower);

    let current =
    michaelStages[0];

    for(const stage of michaelStages){

        if(totalMoney >= stage[0]){

            current = stage;

        }
    }

    const michael =
    document.getElementById("michael");

    if(michael){
        michael.textContent = current[1];
}

    document.getElementById("stageName")
    .textContent =
    current[2];
}

function spawnMoney(){

    const div =
    document.createElement("div");

    div.className =
    "floatingMoney";

    div.textContent =
    "+R$"+formatNumber(clickPower);

    const rect =
    document
    .getElementById("michael")
    .getBoundingClientRect();

    div.style.left =
    rect.left + 50 + "px";

    div.style.top =
    rect.top + "px";

    document.body.appendChild(div);

    setTimeout(()=>{

        div.remove();

    },1000);
}

document
.getElementById("michael")
.addEventListener("click",()=>{

    money += clickPower;

    totalMoney += clickPower;

    spawnMoney();

    updateUI();

});

setInterval(()=>{

    money += autoPower;

    diamonds += diamondPower;

    totalMoney += autoPower;

    updateUI();

},1000);

updateUI();
// =====================================
// PARTE 2 - LOJA COMPLETA
// =====================================

const upgrades = [

{
id:"shoe",
nome:"👞 Sapato Brilhante",
preco:10,
bonus:1,
tipo:"click",
categoria:"equipment"
},

{
id:"glove",
nome:"🧤 Luva Brilhante",
preco:50,
bonus:5,
tipo:"click",
categoria:"equipment"
},

{
id:"glasses",
nome:"🕶️ Óculos Escuros",
preco:250,
bonus:25,
tipo:"click",
categoria:"equipment"
},

{
id:"hat",
nome:"🎩 Chapéu de Gala",
preco:1000,
bonus:100,
tipo:"click",
categoria:"equipment"
},

{
id:"crown",
nome:"👑 Coroa Moonwalk",
preco:5000,
bonus:500,
tipo:"click",
categoria:"equipment"
},

{
id:"diamondshoe",
nome:"💎 Sapato Diamante",
preco:25000,
bonus:2500,
tipo:"click",
categoria:"equipment"
},

{
id:"cosmicshoe",
nome:"⚡ Sapato Cósmico",
preco:100000,
bonus:10000,
tipo:"click",
categoria:"equipment"
},

{
id:"dancer",
nome:"🕴️ Dançarino",
preco:100,
bonus:2,
tipo:"auto",
categoria:"team"
},

{
id:"dancer2",
nome:"💃 Dançarina",
preco:500,
bonus:10,
tipo:"auto",
categoria:"team"
},

{
id:"dj",
nome:"🎧 DJ",
preco:2000,
bonus:50,
tipo:"auto",
categoria:"team"
},

{
id:"producer",
nome:"🎼 Produtor",
preco:10000,
bonus:250,
tipo:"auto",
categoria:"team"
},

{
id:"backing",
nome:"🎤 Backing Vocal",
preco:50000,
bonus:1000,
tipo:"auto",
categoria:"team"
},

{
id:"limo",
nome:"🚘 Limusine",
preco:100000,
bonus:5000,
tipo:"auto",
categoria:"vehicle"
},

{
id:"jet",
nome:"🛩️ Jato Particular",
preco:1000000,
bonus:50000,
tipo:"auto",
categoria:"vehicle"
},

{
id:"rocket",
nome:"🚀 Nave Moonwalk",
preco:10000000,
bonus:500000,
tipo:"auto",
categoria:"vehicle"
},

{
id:"label",
nome:"🏢 Gravadora",
preco:50000000,
bonus:5000000,
tipo:"auto",
categoria:"business"
},

{
id:"tour",
nome:"🌎 Turnê Mundial",
preco:250000000,
bonus:50000000,
tipo:"auto",
categoria:"business"
},

{
id:"mine1",
nome:"⛏️ Mina de Diamante",
preco:1000000000,
bonus:1,
tipo:"diamondMine",
categoria:"business"
},

{
id:"mine2",
nome:"🏔️ Mina Industrial",
preco:5000000000,
bonus:10,
tipo:"diamondMine",
categoria:"business"
},

{
id:"mine3",
nome:"🌋 Mina Vulcânica",
preco:50000000000,
bonus:100,
tipo:"diamondMine",
categoria:"business"
},

{
id:"godshoe",
nome:"👞 Sapato Divino",
preco:25,
bonus:10000000,
tipo:"diamondShop",
categoria:"diamond"
},

{
id:"blackhole",
nome:"🕳️ Buraco Negro",
preco:500,
bonus:100000000,
tipo:"diamondShop",
categoria:"diamond"
},

{
id:"universe",
nome:"🌌 Universo Particular",
preco:5000,
bonus:1000000000,
tipo:"diamondShop",
categoria:"diamond"
},

{
id:"boxSmall",
nome:"📦 Caixa Pequena",
preco:10,
bonus:0,
tipo:"box",
categoria:"diamond"
},

{
id:"boxMedium",
nome:"📦 Caixa Média",
preco:50,
bonus:0,
tipo:"box",
categoria:"diamond"
},

{
id:"boxLarge",
nome:"📦 Caixa Grande",
preco:150,
bonus:0,
tipo:"box",
categoria:"diamond"
},

{
id:"boxHuge",
nome:"📦 Caixa Imensa",
preco:500,
bonus:0,
tipo:"box",
categoria:"diamond"
},

{
id:"boxRoyal",
nome:"👑 Caixa Real",
preco:1000,
bonus:0,
tipo:"box",
categoria:"diamond"
},

{
id:"boxCosmic",
nome:"🌌 Caixa Cósmica",
preco:5000,
bonus:0,
tipo:"box",
categoria:"diamond"
},

{
id:"boxBaphomet",
nome:"☠️ Caixa Baphomet",
preco:25000,
bonus:0,
tipo:"box",
categoria:"diamond"
},

{
id:"joker",
nome:"🃏 Coringa",
preco:100000,
bonus:0,
tipo:"joker",
categoria:"diamond"
}

];

function addDancer(){

    const dancer =
    document.createElement("div");

    dancer.className =
    "dancer";

    const dancers = [
        "🕴️",
        "💃",
        "🕺"
    ];

    dancer.textContent =
    dancers[
        Math.floor(
            Math.random() *
            dancers.length
        )
    ];

    // posição aleatória na tela
    dancer.style.left =
    Math.random() * 90 + "%";

    dancer.style.top =
    Math.random() * 80 + "%";

    // tamanho aleatório
    dancer.style.fontSize =
    (40 + Math.random()*40) + "px";

    // velocidade diferente para cada um
    dancer.style.animationDuration =
    (2 + Math.random()*3) + "s";

    document
    .getElementById("dancers")
    .appendChild(dancer);

}

function createShopButton(item,index){

const btn =
document.createElement("button");

btn.className =
"shopItem";

let moeda =
"💰 R$";

if(
item.tipo ===
"diamondShop"
){

moeda = "💎";
}

btn.innerHTML =

`
<b>${item.nome}</b>

<br>

${
item.tipo==="click"
?
`⚡ +${formatNumber(item.bonus)} clique`
:
item.tipo==="auto"
?
`🏭 +${formatNumber(item.bonus)}/s`
:
item.tipo==="diamondMine"
?
`💎 +${formatNumber(item.bonus)}/s`
:
`🚀 +${formatNumber(item.bonus)}/s`
}

<br>

${moeda}
${formatNumber(item.preco)}
`;

btn.onclick =
()=>buyUpgrade(index);

return btn;

}

function openBox(type){

if(Math.random() < 0.01){

findJoker();
return;

}

let gain = 0;

switch(type){

case "boxSmall":
gain =
money * 0.10;
break;

case "boxMedium":
gain =
money * 0.20;
break;

case "boxLarge":
gain =
money * 0.35;
break;

case "boxHuge":
gain =
money * 0.50;
break;

case "boxRoyal":
gain =
money * 0.60;
break;

case "boxCosmic":
gain =
money * 0.75;
break;

case "boxBaphomet":
gain =
money * 0.90;
break;

}

money += Math.floor(gain);

showPopup(
"📦 +" +
formatNumber(gain)
);

updateUI();

}

function buyUpgrade(index){

const item =
upgrades[index];

if(
item.tipo ===
"box"
){

if(
diamonds <
item.preco
)
return;

diamonds -=
item.preco;

openBox(item.id);

updateUI();

return;

}

if(
item.tipo ===
"joker"
){

if(
diamonds <
item.preco
)
return;

diamonds -=
item.preco;

jokers++;

showPopup(
"🃏 Coringa comprada!"
);

updateUI();

return;

}

if(
item.tipo ===
"diamondShop"
){

if(
diamonds <
item.preco
)
return;

diamonds -=
item.preco;

autoPower +=
item.bonus;

item.preco =
Math.floor(
item.preco*2
);

renderShop();
updateUI();

return;

}

if(
money <
item.preco
)
return;

money -=
item.preco;

if(
item.tipo==="click"
){

clickPower +=
item.bonus;

item.bonus *= 2;

}

else if(
item.tipo==="auto"
){

autoPower +=
item.bonus;

item.bonus *= 2;

addDancer();

}

else if(
item.tipo===
"diamondMine"
){

diamondPower +=
item.bonus;

item.bonus *= 2;

}

item.preco =
Math.floor(
item.preco*2
);

renderShop();
updateUI();

}

const equipmentShop =
document.getElementById("equipmentShop");

const teamShop =
document.getElementById("teamShop");

const vehicleShop =
document.getElementById("vehicleShop");

const businessShop =
document.getElementById("businessShop");

const diamondShop =
document.getElementById("diamondShop");

function renderShop(){

equipmentShop.innerHTML="";
teamShop.innerHTML="";
vehicleShop.innerHTML="";
businessShop.innerHTML="";
diamondShop.innerHTML="";

upgrades.forEach(
(item,index)=>{

const button =
createShopButton(
item,
index
);

switch(
item.categoria
){

case "equipment":
equipmentShop
.appendChild(button);
break;

case "team":
teamShop
.appendChild(button);
break;

case "vehicle":
vehicleShop
.appendChild(button);
break;

case "business":
businessShop
.appendChild(button);
break;

case "diamond":
diamondShop
.appendChild(button);
break;

}

});

}

document
.getElementById("shopBtn")
.addEventListener(
"click",
()=>{

document
.getElementById("shop")
.classList
.toggle("open");

}
);

renderShop();
// =====================================
// PARTE 3 - SAVE, CONQUISTAS,
// PRESTÍGIO E CONSOLE ADMIN
// =====================================

const achievements = [

{money:100,name:"🥉 Primeiros Passos"},
{money:1000,name:"🥈 Primeiro Mil"},
{money:10000,name:"🥇 Dez Mil"},
{money:100000,name:"💰 Cem Mil"},
{money:1000000,name:"💎 Milionário"},
{money:10000000,name:"🚀 Magnata"},
{money:100000000,name:"🌌 Senhor Galáctico"},
{money:1000000000,name:"😈 Ultra Mega Baphomet"}

];

function unlockAchievement(name){

if(
unlockedAchievements.includes(name)
)
return;

unlockedAchievements.push(name);

const div =
document.createElement("div");

div.className =
"achievement";

div.textContent =
name;

const container =
document.getElementById(
"achievements"
);

if(container){

container.appendChild(div);

}

showPopup(
"🏆 "+name
);

}

function checkAchievements(){

achievements.forEach(a=>{

if(
totalMoney >= a.money
){

unlockAchievement(
a.name
);

}

});

}

function showPopup(text){

const popup =
document.createElement("div");

popup.className =
"popupAchievement";

popup.textContent =
text;

document.body.appendChild(
popup
);

setTimeout(()=>{

popup.remove();

},3000);

}

function unlockExclusiveAchievement(name){

if(exclusiveAchievements.includes(name))
return;

exclusiveAchievements.push(name);

const div =
document.createElement("div");

div.className =
"achievement exclusiveAchievement";

div.textContent =
"💜 " + name;

const container =
document.getElementById(
"achievements"
);

if(container){

container.appendChild(div);

}

showPopup(
"💜 CONQUISTA EXCLUSIVA: " +
name
);

}

function findJoker(){

jokers++;

showPopup(
"🃏 CORINGA ENCONTRADA!"
);

unlockExclusiveAchievement(
"🃏 O Impossível Aconteceu"
);

}
// =====================================
// SAVE
// =====================================

function saveGame(){

const data = {

jokers,
exclusiveAchievements,
money,

diamonds,

clickPower,
autoPower,
diamondPower,

totalMoney,

unlockedAchievements,

upgrades:
upgrades.map(u=>({

preco:u.preco,
bonus:u.bonus

}))

};

localStorage.setItem(
"moonwalkV2",
JSON.stringify(data)
);

}

function loadGame(){

const save =
localStorage.getItem("moonwalkV2");

if(!save) return;

const data = JSON.parse(save);

jokers = data.jokers || 0;
exclusiveAchievements = data.exclusiveAchievements || [];

money =
data.money || 0;

diamonds =
data.diamonds || 0;

clickPower =
data.clickPower || 1;

autoPower =
data.autoPower || 0;

diamondPower =
data.diamondPower || 0;

totalMoney =
data.totalMoney || 0;

unlockedAchievements =
data.unlockedAchievements || [];

if(data.upgrades){

data.upgrades.forEach(
(saved,index)=>{

if(
upgrades[index]
){

upgrades[index]
.preco =
saved.preco;

upgrades[index]
.bonus =
saved.bonus;

}

});

}

const container =
document.getElementById(
"achievements"
);

if(container){

unlockedAchievements
.forEach(name=>{

const div =
document.createElement("div");

div.className =
"achievement";

div.textContent =
name;

container.appendChild(div);

});

}

}

setInterval(()=>{

saveGame();

},5000);

// =====================================
// PRESTÍGIO
// =====================================

function prestige(){

if(
totalMoney <
1000000000
)
return;

const gain =
Math.floor(
totalMoney /
1000000000
);

clickPower += gain;

money = 0;
diamonds = 0;

autoPower = 0;
diamondPower = 0;

totalMoney = 0;

showPopup(
"🌟 Prestígio +" +
gain +
" clique permanente"
);

updateUI();

saveGame();

}

const prestigeButton =
document.createElement(
"button"
);

prestigeButton.textContent =
"🌟 PRESTÍGIO";

prestigeButton.style.margin =
"15px";

prestigeButton.onclick =
prestige;

document.body.appendChild(
prestigeButton
);

// =====================================
// CONSOLE ADMIN
// =====================================

let secretSequence = "";
let creditClicks = 0;

document.addEventListener(
"keydown",
e=>{

secretSequence +=
e.key.toLowerCase();

if(
secretSequence.length > 3
){

secretSequence =
secretSequence.slice(-3);

}

if(
secretSequence === "pzu"
){

openAdminConsole();

}

}
);

function openAdminConsole(){

const cmd =
prompt(
"Console Admin"
);

if(!cmd)
return;

executeCommand(cmd);

}

function executeCommand(cmd){

const args =
cmd.split(" ");

switch(args[0]){
case "rich":
money += 1000000000000;
break;

case "poor":
money = 0;
break;

case "god":
money = 1e30;
diamonds = 1e6;
clickPower = 1e12;
autoPower = 1e12;
diamondPower = 1e6;
break;

case "max":
money = 1e15;
diamonds = 1e6;
clickPower = 1e12;
autoPower = 1e12;
diamondPower = 1e6;
break;

case "onepunch":
clickPower *= 1000;
break;

case "ultra":
clickPower *= 100;
autoPower *= 100;
break;

case "ascend":
clickPower *= 10;
autoPower *= 10;
break;

case "diamondgod":
diamonds += 100000;
break;

case "mineboost":
diamondPower *= 10;
break;

case "baphomet":
totalMoney = 1000000000;
break;

case "finalboss":
totalMoney = 100000000000;
break;

case "randomstage":
totalMoney =
Math.floor(
Math.random()*100000000000
);
break;

case "party":

for(let i=0;i<100;i++){

addDancer();

}

break;

case "army":

for(let i=0;i<1000;i++){

addDancer();

}

break;

case "cleardancers":

document
.getElementById("dancers")
.innerHTML = "";

break;

case "unlock":

achievements.forEach(a=>{

unlockAchievement(a.name);

});

break;

case "save":

saveGame();

break;

case "load":

loadGame();

break;

case "wipe":

localStorage.clear();

location.reload();

break;

case "developer":

alert(
"Moonwalk Simulator Deluxe V2\nCriado por Wifier"
);

break;

case "stats":

alert(
"Dinheiro: "+money+
"\nDiamantes: "+diamonds+
"\nClique: "+clickPower+
"\nAuto: "+autoPower
);

break;

case "help":

alert(
"Comandos:\n"+
"rich\n"+
"poor\n"+
"god\n"+
"max\n"+
"onepunch\n"+
"ultra\n"+
"ascend\n"+
"diamondgod\n"+
"mineboost\n"+
"party\n"+
"army\n"+
"cleardancers\n"+
"unlock\n"+
"save\n"+
"load\n"+
"wipe\n"+
"developer\n"+
"stats"
);

break;

case "wifier":

money = Infinity;
diamonds = Infinity;

clickPower = 1e15;
autoPower = 1e15;
diamondPower = 1e12;

achievements.forEach(a=>{

unlockAchievement(a.name);

});

for(let i=0;i<500;i++){

addDancer();

}

alert(
"👑 Wifier Mode Activated"
);

case "give":

if(args[1]==="money"){

money +=
Number(args[2]);

}

if(args[1]==="diamonds"){

diamonds +=
Number(args[2]);

}

break;

case "set":

if(args[1]==="click"){

clickPower =
Number(args[2]);

}

if(args[1]==="auto"){

autoPower =
Number(args[2]);

}

break;

case "stage":

totalMoney =
Number(args[1]);

break;

case "reset":

localStorage.clear();

location.reload();

break;

}

updateUI();

}

// =====================================
// EVENTOS ALEATÓRIOS
// =====================================

setInterval(()=>{

const chance =
Math.random();

if(chance < 0.05){

const reward =
Math.floor(
money * 0.1
);

money += reward;

showPopup(
"🎁 Fã rico doou R$ "
+
formatNumber(reward)
);

updateUI();

}

},30000);

// =====================================
// LOOP FINAL
// =====================================

const oldUpdate =
updateUI;

updateUI = function(){

oldUpdate();

checkAchievements();

};

loadGame();
renderShop();
updateUI();

console.log(
"Moonwalk Simulator Deluxe V2 carregado."
);

// ======================
// CONSOLE MOBILE
// ======================

const credits =
document.getElementById(
"credits"
);

if(credits){

credits.addEventListener(
"click",
()=>{

creditClicks++;

if(creditClicks === 4){

showPopup(
"🔓 Mais um toque..."
);

}

if(
creditClicks >= 5
){

creditClicks = 0;

openAdminConsole();

}

setTimeout(()=>{

creditClicks = 0;

},3000);

}
);

}

document.addEventListener(
"keydown",
(e)=>{

if(
e.key === "Escape"
){

confirmarSaida();

}

});

function confirmarSaida(){

const sair =
confirm(
"Deseja voltar ao menu?"
);

if(!sair) return;

voltarAoMenu();

}

const btn =
document.getElementById(
"menuBtn"
);

if(btn){

btn.addEventListener(
"click",
confirmarSaida
);

}



// SINGLEPLAYER REWORK
function useJoker(){
 if(jokers<=0){alert('Sem Coringas');return;}
 jokers--;
 money += 10000000000;
 totalMoney += 10000000000;
 showPopup('🃏 +10 Bilhões!');
 updateUI();
 saveGame();
}
document.addEventListener('DOMContentLoaded',()=>{
 const b=document.getElementById('useJokerBtn');
 if(b) b.onclick=useJoker;
});

// caixas recompensam dinheiro no singleplayer
const _oldOpenBoxSP = openBox;
openBox=function(type){
 const rewards={
  boxSmall:1000,
  boxMedium:10000,
  boxLarge:100000,
  boxHuge:1000000,
  boxRoyal:10000000,
  boxCosmic:100000000,
  boxBaphomet:1000000000
 };
 if(Math.random()<0.01){
   jokers++;
   showPopup('🃏 Coringa Encontrada!');
   updateUI();
   return;
 }
 if(rewards[type]){
   money += rewards[type];
   totalMoney += rewards[type];
   showPopup('🎁 '+formatNumber(rewards[type]));
   updateUI();
   return;
 }
 return _oldOpenBoxSP(type);
};


// ===== ULTIMATE EXPANSION =====
window.admin={
money:(v)=>{money=Number(v);updateUI();},
diamonds:(v)=>{diamonds=Number(v);updateUI();},
jokers:(v)=>{jokers=Number(v);updateUI();},
click:(v)=>{clickPower=Number(v);updateUI();},
auto:(v)=>{autoPower=Number(v);updateUI();},
max:()=>{money=1e30;diamonds=1e15;clickPower=1e12;autoPower=1e12;updateUI();},
reset:()=>{localStorage.clear();location.reload();}
};

for(let i=1;i<=100;i++){
  michaelStages.push([100000000*(i*i),'⭐','Michael Nível '+i]);
}

function useJoker(){
 if(jokers<=0){alert('Sem coringas');return;}
 jokers--;
 if(Math.random()<0.5){
   money+=10000000000;
   alert('🃏 Ouro! +10 bilhões de moedas');
 }else{
   diamonds+=10000000000;
   alert('🃏 Gemas! +10 bilhões de diamantes');
 }
 updateUI();
}

document.addEventListener('DOMContentLoaded',()=>{
 const btn=document.createElement('button');
 btn.innerText='🃏 USAR CORINGA';
 btn.onclick=useJoker;
 document.body.appendChild(btn);

 const shop=document.getElementById('shopContent')||document.body;
 for(let i=1;i<=50;i++){
   const b=document.createElement('button');
   b.innerText='🏗️ Mega Upgrade '+i+' - $'+(i*1e6);
   b.onclick=()=>{
      if(money>=i*1e6){
        money-=i*1e6;
        clickPower+=i*100;
        autoPower+=i*50;
        updateUI();
      }
   };
   shop.appendChild(b);
 }
});

let michaelLevel=1;
function updateLevel(){
 michaelLevel=Math.min(100,Math.floor(Math.log10(totalMoney+1)*10)+1);
 let el=document.getElementById('mLevel');
 if(el) el.textContent=michaelLevel;
}
const _updateUI=updateUI;
updateUI=function(){_updateUI();updateLevel();}

const eliteShop=document.getElementById('eliteShop');
for(let i=1;i<=25;i++){
 let b=document.createElement('button');
 b.className='shopItem';
 b.textContent='Elite '+i+' (Nv '+(10+i)+')';
 b.onclick=()=>{
   if(michaelLevel<(10+i)){showPopup('Nível insuficiente');return;}
   if(money<100000*i){showPopup('Dinheiro insuficiente');return;}
   money-=100000*i; clickPower+=i*50; autoPower+=i*10; updateUI();
 };
 if(eliteShop) eliteShop.appendChild(b);
}

const oldFindJoker=findJoker;
findJoker=function(){
 jokers++;
 showPopup('🃏 CORINGA!');
}

const jokerBtn=document.getElementById('useJokerBtn');
if(jokerBtn){
 jokerBtn.onclick=function(){
  if(jokers<=0){showPopup('Sem Coringas');return;}
  jokers--;
  if(Math.random()<0.5){money+=10000000000;showPopup('10B moedas!');}
  else {diamonds+=10000000000;showPopup('10B gemas!');}
  updateUI();
 }
}
