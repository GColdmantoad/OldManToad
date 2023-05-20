let shop = document.getElementById("shop");
let pkmTeam = document.getElementById('pkmTeam')
let teamOne = document.getElementById('TeamMember0')
let teamTwo = document.getElementById('TeamMember1')
let teamThree = document.getElementById('TeamMember2')
let teamFour = document.getElementById('TeamMember3')
let teamFive = document.getElementById('TeamMember4')
let teamSix = document.getElementById('TeamMember5')
let targetWeakness = document.getElementById('targetWeakness')
let listWeakness = document.getElementById('weakType');
let tileSpace = document.getElementById('tileSpace')
let enemyTeamViewer = document.getElementById('enemyTeamViewer')
let teamViewer = document.getElementById('teamViewer')
let TeamMember0 = false
let TeamMember1 = false
let TeamMember2 = false
let TeamMember3 = false
let TeamMember4 = false
let TeamMember5 = false
let teamWeakness = [];
let teamWeaknessArr = [];
let team = [];
let vgcTeam = []
let rdmTeam = [0, 4, 6, 7, 15, 24];
let enemyTeam = [];
let enemyVgcTeam = [];
let navMenu = document.getElementById("navButtons");
let pkm = [{
    id: 0,
    name: "kilowattrel",
    type1: "electric",
    type2: "flying",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/941.png",
    weakness: [[1,'normal'],[1,'fire'],[1,'water'],[.5,'grass'],[.5,'electric'],[2,'ice'],[.5,'fighting'],[1,'poison'],[0,'ground'],[.5,'flying'],[1,'psychic'],[.5,'bug'],[2,'rock'],[1,'ghost'],[1,'dark'],[1,'dragon'],[.5,'steel'],[1,'fairy']]
},{
    id: 1,
    name: "Magneton",
    type1: "electric",
    type2: "steel",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/082.png",
    weakness: [[.5,'normal'],[2,'fire'],[1,'water'],[.5,'grass'],[.5,'electric'],[.5,'ice'],[2,'fighting'],[0,'poison'],[4,'ground'],[.25,'flying'],[.5,'psychic'],[.5,'bug'],[.5,'rock'],[1,'ghost'],[1,'dark'],[.5,'dragon'],[.25,'steel'],[.5,'fairy']]
},{
    id: 2,
    name: "Azumaril",
    type1: "water",
    type2: "fairy",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/184.png",
    weakness: [[1,'normal'],[.5,'fire'],[.5,'water'],[2,'grass'],[2,'electric'],[.5,'ice'],[.5,'fighting'],[2,'poison'],[1,'ground'],[1,'flying'],[1,'psychic'],[.5,'bug'],[1,'rock'],[1,'ghost'],[.5,'dark'],[0,'dragon'],[1,'steel'],[1,'fairy']]
},{
    id: 3,
    name: "Scizor",
    type1: "steel",
    type2: "bug",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/212.png",
    weakness: [[.5,'normal'],[4,'fire'],[1,'water'],[.25,'grass'],[1,'electric'],[.5,'ice'],[1,'fighting'],[0,'poison'],[1,'ground'],[1,'flying'],[.5,'psychic'],[.5,'bug'],[1,'rock'],[1,'ghost'],[1,'dark'],[.5,'dragon'],[.5,'steel'],[.5,'fairy']]
},{
    id: 4,
    name: "Volcarona",
    type1: "fire",
    type2: "bug",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/637.png",
    weakness: [[1,'normal'],[1,'fire'],[2,'water'],[.25,'grass'],[1,'electric'],[.5,'ice'],[.5,'fighting'],[1,'poison'],[1,'ground'],[2,'flying'],[1,'psychic'],[.5,'bug'],[4,'rock'],[1,'ghost'],[1,'dark'],[1,'dragon'],[.5,'steel'],[.5,'fairy']]
},{
    id: 5,
    name:"Great Tusk",
    type1: "fighting",
    type2: "ground",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/984.png",
    weakness: [[1,'normal'],[1,'fire'],[2,'water'],[2,'grass'],[0,'electric'],[2,'ice'],[1,'fighting'],[.5,'poison'],[1,'ground'],[2,'flying'],[2,'psychic'],[.5,'bug'],[.25,'rock'],[1,'ghost'],[.5,'dark'],[1,'dragon'],[1,'steel'],[2,'fairy']]
},{
    id: 6,
    name:"Chi-Yu",
    type1: "fire",
    type2: "dark",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/1004.png",
    weakness: [[1,'normal'],[.5,'fire'],[2,'water'],[.5,'grass'],[1,'electric'],[.5,'ice'],[2,'fighting'],[1,'poison'],[2,'ground'],[1,'flying'],[0,'psychic'],[0,'bug'],[2,'rock'],[.5,'ghost'],[.5,'dark'],[1,'dragon'],[.5,'steel'],[1,'fairy']]
},{
    id: 7,
    name:"Garchomp",
    type1: "dragon",
    type2: "ground",
    img: "https://www.serebii.net/scarletviolet/pokemon/445.png",
    weakness: [[1,'normal'],[.5,'fire'],[1,'water'],[1,'grass'],[0,'electric'],[4,'ice'],[1,'fighting'],[.5,'poison'],[1,'ground'],[1,'flying'],[1,'psychic'],[1,'bug'],[.5,'rock'],[1,'ghost'],[1,'dark'],[2,'dragon'],[1,'steel'],[2,'fairy']]
},{
    id: 8,
    name:"Baxcalibur",
    type1: "dragon",
    type2: "ice",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/998.png",
    weakness: [[1,'normal'],[1,'fire'],[.5,'water'],[.5,'grass'],[.5,'electric'],[1,'ice'],[2,'fighting'],[1,'poison'],[1,'ground'],[1,'flying'],[1,'psychic'],[1,'bug'],[2,'rock'],[1,'ghost'],[1,'dark'],[2,'dragon'],[2,'steel'],[2,'fairy']]
},{
    id: 9,
    name:"Slowbro",
    type1: "water",
    type2: "psychic",
    img: "https://www.serebii.net/swordshield/pokemon/080.png",
    weakness: [[1,'normal'],[.5,'fire'],[.5,'water'],[2,'grass'],[2,'electric'],[.5,'ice'],[.5,'fighting'],[1,'poison'],[1,'ground'],[1,'flying'],[.5,'psychic'],[2,'bug'],[1,'rock'],[2,'ghost'],[2,'dark'],[1,'dragon'],[.5,'steel'],[1,'fairy']]
},{
    id: 10,
    name:"Meowscarada",
    type1: "grass",
    type2: "dark",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/908.png",
    weakness: [[1,'normal'],[2,'fire'],[.5,'water'],[.5,'grass'],[.5,'electric'],[2,'ice'],[2,'fighting'],[2,'poison'],[.5,'ground'],[2,'flying'],[0,'psychic'],[4,'bug'],[1,'rock'],[.5,'ghost'],[.5,'dark'],[1,'dragon'],[1,'steel'],[2,'fairy']]
},{
    id: 11,
    name:"Tauros",
    type1: "fire",
    type2: "fighting",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/128-b.png",
    weakness: [[1,'normal'],[.5,'fire'],[2,'water'],[.5,'grass'],[1,'electric'],[.5,'ice'],[1,'fighting'],[1,'poison'],[2,'ground'],[2,'flying'],[2,'psychic'],[.25,'bug'],[1,'rock'],[1,'ghost'],[.5,'dark'],[1,'dragon'],[.5,'steel'],[1,'fairy']]
},{
    id: 12,
    name:"Gengar",
    type1: "ghost",
    type2: "poison",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/094.png",
    weakness: [[0,'normal'],[1,'fire'],[1,'water'],[.5,'grass'],[1,'electric'],[1,'ice'],[0,'fighting'],[.25,'poison'],[2,'ground'],[1,'flying'],[2,'psychic'],[.25,'bug'],[1,'rock'],[2,'ghost'],[2,'dark'],[1,'dragon'],[1,'steel'],[.5,'fairy']]
},{
    id: 13,
    name:"Hydreigon",
    type1: "dragon",
    type2: "dark",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/635.png",
    weakness: [[1,'normal'],[.5,'fire'],[.5,'water'],[.5,'grass'],[.5,'electric'],[2,'ice'],[2,'fighting'],[1,'poison'],[0,'ground'],[1,'flying'],[0,'psychic'],[2,'bug'],[1,'rock'],[.5,'ghost'],[.5,'dark'],[2,'dragon'],[1,'steel'],[4,'fairy']]
},{
    id: 14,
    name:"Gholdengo",
    type1: "ghost",
    type2: "steel",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/1000.png",
    weakness: [[0,'normal'],[2,'fire'],[1,'water'],[.5,'grass'],[1,'electric'],[.5,'ice'],[0,'fighting'],[0,'poison'],[2,'ground'],[.5,'flying'],[.5,'psychic'],[.25,'bug'],[.5,'rock'],[2,'ghost'],[2,'dark'],[.5,'dragon'],[.5,'steel'],[.5,'fairy']]
},{
    id: 15,
    name:"Slowking",
    type1: "water",
    type2: "psychic",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/199.png",
    weakness: [[1, 'normal'], [.5, 'fire'], [.5, 'water'], [2, 'grass'], [2, 'electric'], [.5, 'ice'], [.5, 'fighting'], [1, 'poison'], [1, 'ground'], [1, 'flying'], [.5, 'psychic'], [2, 'bug'], [1, 'rock'], [2, 'ghost'], [2, 'dark'], [1, 'dragon'], [.5, 'steel'], [1, 'fairy']]
},{
    id: 16,
    name:"Dragonite",
    type1: "dragon",
    type2: "flying",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/149.png",
    weakness: [[1,'normal'],[.5,'fire'],[.5,'water'],[.25,'grass'],[1,'electric'],[4,'ice'],[.5,'fighting'],[1,'poison'],[0,'ground'],[1,'flying'],[1,'psychic'],[.5,'bug'],[2,'rock'],[1,'ghost'],[1,'dark'],[2,'dragon'],[1,'steel'],[2,'fairy']]
},{
    id: 17,
    name:"Donphan",
    type1: "ground",
    type2: "ground",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/232.png",
    weakness: [[1,'normal'],[1,'fire'],[2,'water'],[2,'grass'],[0,'electric'],[2,'ice'],[1,'fighting'],[.5,'poison'],[1,'ground'],[1,'flying'],[1,'psychic'],[1,'bug'],[.5,'rock'],[1,'ghost'],[1,'dark'],[1,'dragon'],[1,'steel'],[1,'fairy']]
},{
    id: 18,
    name:"Dragapult",
    type1: "dragon",
    type2: "ghost",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/887.png",
    weakness: [[0,'normal'],[.5,'fire'],[.5,'water'],[.5,'grass'],[.5,'electric'],[2,'ice'],[0,'fighting'],[.5,'poison'],[1,'ground'],[1,'flying'],[1,'psychic'],[.5,'bug'],[1,'rock'],[2,'ghost'],[2,'dark'],[2,'dragon'],[1,'steel'],[2,'fairy']]
},{
    id: 19,
    name:"Glimmora",
    type1: "rock",
    type2: "poison",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/970.png",
    weakness: [[.5,'normal'],[.5,'fire'],[2,'water'],[1,'grass'],[1,'electric'],[1,'ice'],[1,'fighting'],[.25,'poison'],[4,'ground'],[.5,'flying'],[2,'psychic'],[.5,'bug'],[1,'rock'],[1,'ghost'],[1,'dark'],[1,'dragon'],[2,'steel'],[.5,'fairy']]
},{
    id: 20,
    name:"Gastrodon",
    type1: "water",
    type2: "ground",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/423.png",
    weakness: [[1,'normal'],[.5,'fire'],[0,'water'],[4,'grass'],[0,'electric'],[1,'ice'],[1,'fighting'],[.5,'poison'],[1,'ground'],[1,'flying'],[1,'psychic'],[1,'bug'],[.5,'rock'],[1,'ghost'],[1,'dark'],[1,'dragon'],[.5,'steel'],[1,'fairy']]
},{
    id: 21,
    name:"Breloom",
    type1: "grass",
    type2: "fighting",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/286.png",
    weakness: [[1,'normal'],[2,'fire'],[.5,'water'],[.5,'grass'],[.5,'electric'],[2,'ice'],[1,'fighting'],[2,'poison'],[.5,'ground'],[4,'flying'],[2,'psychic'],[1,'bug'],[.5,'rock'],[1,'ghost'],[.5,'dark'],[1,'dragon'],[1,'steel'],[2,'fairy']]
},{
    id: 22,
    name:"Chein-Pao",
    type1: "ice",
    type2: "dark",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/1002.png",
    weakness: [[1,'normal'],[2,'fire'],[.5,'water'],[1,'grass'],[1,'electric'],[.5,'ice'],[4,'fighting'],[1,'poison'],[1,'ground'],[1,'flying'],[0,'psychic'],[2,'bug'],[2,'rock'],[.5,'ghost'],[.5,'dark'],[1,'dragon'],[2,'steel'],[2,'fairy']]
},{
    id: 23,
    name:"Maushold",
    type1: "normal",
    type2: "normal",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/925-f.png",
    weakness: [[1,'normal'],[1,'fire'],[1,'water'],[1,'grass'],[1,'electric'],[1,'ice'],[2,'fighting'],[1,'poison'],[1,'ground'],[1,'flying'],[1,'psychic'],[1,'bug'],[1,'rock'],[0,'ghost'],[1,'dark'],[1,'dragon'],[1,'steel'],[1,'fairy']]
},{
    id: 24,
    name:"Ceruledge",
    type1: "ghost",
    type2: "fire",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/937.png",
    weakness: [[0,'normal'],[0,'fire'],[2,'water'],[.5,'grass'],[1,'electric'],[.5,'ice'],[0,'fighting'],[.5,'poison'],[2,'ground'],[1,'flying'],[1,'psychic'],[.25,'bug'],[2,'rock'],[2,'ghost'],[2,'dark'],[1,'dragon'],[.5,'steel'],[.5,'fairy']]
},{
    id: 25,
    name:"Iron Hands",
    type1: "electric",
    type2: "fighting",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/992.png",
    weakness: [[1,'normal'],[1,'fire'],[1,'water'],[1,'grass'],[.5,'electric'],[1,'ice'],[1,'fighting'],[1,'poison'],[2,'ground'],[1,'flying'],[2,'psychic'],[.5,'bug'],[.5,'rock'],[1,'ghost'],[.5,'dark'],[1,'dragon'],[.5,'steel'],[2,'fairy']]
},{
    id: 26,
    name:"Flutter Mane",
    type1: "ghost",
    type2: "fairy",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/987.png",
    weakness: [[0,'normal'],[1,'fire'],[1,'water'],[1,'grass'],[1,'electric'],[1,'ice'],[0,'fighting'],[1,'poison'],[1,'ground'],[1,'flying'],[1,'psychic'],[.25,'bug'],[1,'rock'],[2,'ghost'],[1,'dark'],[0,'dragon'],[2,'steel'],[1,'fairy']]
},{
    id: 27,
    name:"Espathra",
    type1: "psychic",
    type2: "psychic",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/956.png",
    weakness: [[1,'normal'],[1,'fire'],[1,'water'],[1,'grass'],[1,'electric'],[1,'ice'],[.5,'fighting'],[1,'poison'],[1,'ground'],[1,'flying'],[.5,'psychic'],[2,'bug'],[1,'rock'],[2,'ghost'],[2,'dark'],[1,'dragon'],[1,'steel'],[1,'fairy']]
}
]

function swapStyleSheet(sheet) {
    document.getElementById("css").setAttribute("href", sheet);
}

function genArray() {
    for (let i = 0; i < team[0].weakness.length ; i++) {
    let numberType = [0,0];
    numberType[0] = team[0].weakness[i][0] + team[1].weakness[i][0] + team[2].weakness[i][0] + team[3].weakness[i][0] + team[4].weakness[i][0] + team[5].weakness[i][0];
    numberType[1] = team[0].weakness[i][1];
    teamWeaknessArr.splice(i,1, numberType);
    }
 console.log(teamWeaknessArr)
}

function genWeakness() {
    genArray();
    for (let i = 0; i < 18 ; i++) {
        if (teamWeaknessArr[i][0]>8){
            teamWeakness.push(teamWeaknessArr[i][1]);
            console.log(teamWeaknessArr[i][1])
        }
    }
    targetWeakness.innerHTML = '|';
    for (let i = 0; i < teamWeakness.length ; i++) {
        targetWeakness.innerHTML += `    ${teamWeakness[i]}    |`
    }
}

function genTile() {
    for ( let i = 0; i < teamWeakness.length; i++){
        tileSpace.innerHTML += `<div class='tile'>${teamWeakness[i]}</div>`;
    }
}

function generateRandomTeam(){
    clearTeam();
    let rdm = uniqueRandomNumber(6,pkm.length)
    for (var i = 0; i < 6; i++){
        addTeam(pkm[rdm[i]])
    }
}

function randomResetTeam() {
    clearTeam();
    generateRandomTeam();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
function uniqueRandomNumber(num,team){
    let numbers=[];
    let randomNumbers=[];
    for (var i = 0; i < team; i++){
        numbers.push(i);
    }
    for (var i = 0; i < num; i++){
        let rdm  = numbers[getRandomInt(numbers.length)];
        randomNumbers.push(rdm);
        numbers.splice(numbers.indexOf(rdm),1);

    }
    return randomNumbers;
    console.log(randomNumbers);
    console.log(numbers);
}

function clearTeam() {
    team = [];
    TeamMember0 = false;
    TeamMember1 = false;
    TeamMember2 = false;
    TeamMember3 = false;
    TeamMember4 = false;
    TeamMember5 = false;
    teamWeakness = [];
    teamWeaknessArr = [];
    targetWeakness.innerHTML = `what is your team weak against?`;
    teamOne.innerHTML = `<img class="image" src="https://cdn.onlinewebfonts.com/svg/img_573410.png">`;
    teamTwo.innerHTML = `<img class="image" src="https://cdn.onlinewebfonts.com/svg/img_573410.png">`;
    teamThree.innerHTML = `<img class="image" src="https://cdn.onlinewebfonts.com/svg/img_573410.png">`;
    teamFour.innerHTML = `<img class="image" src="https://cdn.onlinewebfonts.com/svg/img_573410.png">`;
    teamFive.innerHTML = `<img class="image" src="https://cdn.onlinewebfonts.com/svg/img_573410.png">`;
    teamSix.innerHTML = `<img class="image" src="https://cdn.onlinewebfonts.com/svg/img_573410.png">`;
}

document.getElementById("menuButton").addEventListener("click", () => {
    if (navMenu.className == 'hidden') {
        navMenu.classList.remove("hidden");
        document.getElementById("menuButton").innerHTML = 'hide menu'
    } else {
        navMenu.classList.add('hidden')
        document.getElementById("menuButton").innerHTML = 'menu'
    }
}
);

function removeTeamOne(){
    TeamMember0 = false;
    teamOne.innerHTML = `<img class="image" src="https://cdn.onlinewebfonts.com/svg/img_573410.png">`;
    team.splice(0,1);
    team.unshift(0);
    teamWeakness = [];
    teamWeaknessArr = [];
    targetWeakness.innerHTML = `what is your team weak against?`;
}
function removeTeamTwo(){
    TeamMember1 = false;
    teamTwo.innerHTML = `<img class="image" src="https://cdn.onlinewebfonts.com/svg/img_573410.png">`;
    team.splice(1,1,0);
    teamWeakness = [];
    teamWeaknessArr = [];
    targetWeakness.innerHTML = `what is your team weak against?`;
}
function removeTeamThree(){
    TeamMember2 = false;
    teamThree.innerHTML = `<img class="image" src="https://cdn.onlinewebfonts.com/svg/img_573410.png">`;
    team.splice(2,1,0);
    teamWeakness = [];
    teamWeaknessArr = [];
    targetWeakness.innerHTML = `what is your team weak against?`;
}
function removeTeamFour(){
    TeamMember3 = false;
    teamFour.innerHTML = `<img class="image" src="https://cdn.onlinewebfonts.com/svg/img_573410.png">`;
    team.splice(3,1,0);
    teamWeakness = [];
    teamWeaknessArr = [];
    targetWeakness.innerHTML = `what is your team weak against?`;
}
function removeTeamFive(){
    TeamMember4 = false;
    teamFive.innerHTML = `<img class="image" src="https://cdn.onlinewebfonts.com/svg/img_573410.png">`;
    team.splice(4,1,0);
    teamWeakness = [];
    teamWeaknessArr = [];
    targetWeakness.innerHTML = `what is your team weak against?`;
}
function removeTeamSix(){
    TeamMember5 = false;
    teamSix.innerHTML = `<img class="image" src="https://cdn.onlinewebfonts.com/svg/img_573410.png">`;
    team.splice(5,1,0);
    teamWeakness = [];
    teamWeaknessArr = [];
    targetWeakness.innerHTML = `what is your team weak against?`;
}

function generateRandomEnemyTeam() {
    let rdm = uniqueRandomNumber(6, pkm.length)
    function addRandomTeam(arr) {
        enemyTeam.splice(i, 1, arr);
    }
    for (var i = 0; i < 6; i++) {
        addRandomTeam(pkm[rdm[i]])
    }
}
function battleTeam() {
    if (team.length > 5) {
        document.querySelector('body').innerHTML = `<div class="batttleGround" id="enemyTeamViewer"></div>    <div class="moveOptions" id="teamViewer"></div>`;

        generateRandomEnemyTeam();
        for (let i = 0; i < team.length; i++) {
            document.getElementById('enemyTeamViewer').innerHTML += `<img class="enemyTeam"src="${enemyTeam[i].img}" alt="">`
        }
        vgcTeamSelector();
        document.querySelector('body').innerHTML += `<div class="btn" onclick="vgcTeamSelector()">reset</div>`;
    } else {
            alert('You need to select 6 pokemon')
        }
}

function vgcTeamSelector() {
    counter = 0;
    vgcTeam = [];
    document.getElementById('teamViewer').innerHTML = `<h3>Choose 4 pokemon to fight 4 of the pokemon above.<br> The first two will be your lead.</h3>`;
    for (let i = 0; i < team.length; i++) {
        document.getElementById('teamViewer').innerHTML += `<div id='${team[i].id}'><img class="pkmOpt"  value='${team[i].id}' onclick="fourGuys(pkm[${team[i].id}])"src="${team[i].img}" alt=""></div>`
    }
    
}
let counter = 0

function fourGuys(arr) {
    let pokemon = arr.name
    if (vgcTeam.some(vgcTeam => vgcTeam.name == pokemon)) {
        vgcTeam.splice(arr)
        counter--;
    } else {
        console.log(pokemon)
        vgcTeam.push(arr)
        counter++;
        document.getElementById(arr.id).innerHTML = `<div class='pkmOpt'>${counter}</div>`;
    }
    if (counter == 4) {
        gameTime();
    }
}
function enemyVgc() {
    let rdm = uniqueRandomNumber(4, enemyVgcTeam.length)
    function addRandomTeam(arr) {
        enemyVgcTeam.push(enemyTeam[i])
    }
    for (var i = 0; i < 4; i++) {
        addRandomTeam(enemyTeam[rdm[i]])
    }
}
function gameTime() {
    document.querySelector('body').innerHTML = `<div class="batttleGround" id="enemyTeamViewer"></div>    <div class="moveOptions" id="teamViewer"></div>`;
    document.querySelector('body').innerHTML += `<div class="btn" style="position: fixed; bottom: 0;" onclick="turn1()">restart turn</div>`;
    document.getElementById('enemyTeamViewer').innerHTML = `
    <div class="enemy" id="activeEnemy"></div>
    <div class="partner" id="activePartner"></div>`;
    enemyVgc();
    document.getElementById('activeEnemy').innerHTML += `<img class="right" id="enemy0"  src="${enemyVgcTeam[0].img}">`
    document.getElementById('activePartner').innerHTML += `<img class="left" id="partner0" src="${vgcTeam[0].img}">`
    document.getElementById('activeEnemy').innerHTML += `<img id="enemy1" class="right" src="${enemyVgcTeam[1].img}">`
    document.getElementById('activePartner').innerHTML += `<img id="partner1" class="left" src="${vgcTeam[1].img}">`
    
    turn1();
}
function turn1() {
    document.getElementById('teamViewer').innerHTML = `
    <h3>What will ${vgcTeam[1].name} do?</h3>
    <div class="moveOptions">
        <div class="btn">${vgcTeam[1].type1}</div>
        <div class="btn">${vgcTeam[1].type2}</div>
        <div class="btn">boost</div>
        <div class="btn" onclick="protect1()">protect</div>
        <div class="btn">switch</div>
    </div>

    `
}
function protect1() {
    const list = document.getElementById('partner1').classList;
    list.add('protect');
    turn2();
}
function protect0() {
    const list = document.getElementById('partner0').classList;
    list.add('protect');
}
function turn2() {
    document.getElementById('teamViewer').innerHTML = `
    <h3>What will ${vgcTeam[0].name} do?</h3>
    <div class="moveOptions">

        <div class="btn">${vgcTeam[0].type1}</div>
        <div class="btn">${vgcTeam[0].type2}</div>
        <div class="btn">boost</div>
        <div class="btn" onclick='protect0()'>protect</div>
        <div class="btn">switch</div>
    </div>
    `
}
function addTeam(arr) {

    let typing = ''
    if (arr.type1 == arr.type2){
         typing = `${arr.type1}`
    } else {
         typing = `${arr.type1}<span>&#47;</span>${arr.type2}`;
    }
    if (TeamMember0 === false) {
        teamOne.innerHTML = `<div class="pkm shadow vertical type1-${arr.type1}-type2-${arr.type2}">
   

        <img class="image" src="${arr.img}" alt="">

        </div>`;
        TeamMember0 = true;
        team.splice(0,1);
        team.unshift(arr);
    } else if (TeamMember1 === false) {
        teamTwo.innerHTML = `<div class="pkm vertical shadow type1-${arr.type1}-type2-${arr.type2}">
  
        <img class="image" src="${arr.img}" alt="">

        </div>`;
        TeamMember1 = true;
        team.splice(1,1, arr);
    } else if (TeamMember2=== false) {
        teamThree.innerHTML = `<div class="pkm shadow vertical type1-${arr.type1}-type2-${arr.type2}">
   

        <img class="image" src="${arr.img}" alt="">

        </div>`;
        TeamMember2 = true;
        team.splice(2,1, arr);
    } else if (TeamMember3 === false) {
        teamFour.innerHTML = `<div class="pkm vertical shadow type1-${arr.type1}-type2-${arr.type2}">
   

        <img class="image" src="${arr.img}" alt="">

        </div>`;
        TeamMember3 = true;
        team.splice(3,1, arr);
    } else if (TeamMember4 === false) {
        teamFive.innerHTML = `<div class="pkm vertical shadow type1-${arr.type1}-type2-${arr.type2}">
   

        <img class="image" src="${arr.img}" alt="">

        </div>`;
        TeamMember4 = true;
        team.splice(4,1, arr);
    } else if (TeamMember5 === false) {
        teamSix.innerHTML = `<div class="pkm vertical shadow type1-${arr.type1}-type2-${arr.type2}">
   

        <img class="image" src="${arr.img}" alt="">

        </div>`;
        TeamMember5 = true;
        team.splice(5,1);
        team.push(arr);
    }
  }  