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
let activeEnemy = [];
let activeTeam = [];
let teamSwitchOptions = [];
let inactiveEnemy = [];
let inactiveTeam = [];
let inactiveTeamCopy = [];
let floatingTeam = [2, 3];
let floatingEnemy = [2, 3];
let turnStorage = [];
let move1 = 0;
let move2 = 1;
let counter = 0;
let navMenu = document.getElementById("navButtons");
let menuButton = document.getElementById("menuButton");
let gameBoyText = '';
let pleaseKeepTrackOfSwitch = 3
let pleaseKeepTrackOfEnemySwitch = 3
let errorCode = ''
const pkm = [
    {
    id: 0,
    name: "Kilowattrel",
    type1: "electric",
    type2: "flying",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/941.png",
    hitPoints: 70,
    physicalAtk: 70,
    physicalDef: 60,
    specialAtk: 105,
    specialDef: 60,
    speed: 5125,
    movePool: [4, 9],
        special: true,
        gif: 'img/pokemon/Kilowattrel.gif',
    weakness: [[1, 'normal'], [1, 'fire'], [1, 'water'], [.5, 'grass'], [.5, 'electric'], [2, 'ice'], [.5, 'fighting'], [1, 'poison'], [0, 'ground'], [.5, 'flying'], [1, 'psychic'], [.5, 'bug'], [2, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [.5, 'steel'], [1, 'fairy']]
}, {
    id: 1,
    name: "Magneton",
    type1: "electric",
    type2: "steel",
    hitPoints: 50,
    physicalAtk: 60,
    physicalDef: 160,
    specialAtk: 120,
    specialDef: 150,
    speed: 5070,
    movePool: [4, 16],
    special: true,
    img: "https://www.serebii.net/scarletviolet/pokemon/new/082.png",
    weakness: [[.5, 'normal'], [2, 'fire'], [1, 'water'], [.5, 'grass'], [.5, 'electric'], [.5, 'ice'], [2, 'fighting'], [0, 'poison'], [4, 'ground'], [.25, 'flying'], [.5, 'psychic'], [.5, 'bug'], [.5, 'rock'], [1, 'ghost'], [1, 'dark'], [.5, 'dragon'], [.25, 'steel'], [.5, 'fairy']]
}, {
    id: 2,
    name: "Azumaril",
    type1: "water",
    type2: "fairy",
    hitPoints: 100,
    physicalAtk: 100,
    physicalDef: 80,
    specialAtk: 60,
    specialDef: 80,
    speed: 5050,
    movePool: [2, 17],
    special: true,
    img: "https://www.serebii.net/scarletviolet/pokemon/new/184.png",
    weakness: [[1, 'normal'], [.5, 'fire'], [.5, 'water'], [2, 'grass'], [2, 'electric'], [.5, 'ice'], [.5, 'fighting'], [2, 'poison'], [1, 'ground'], [1, 'flying'], [1, 'psychic'], [.5, 'bug'], [1, 'rock'], [1, 'ghost'], [.5, 'dark'], [0, 'dragon'], [1, 'steel'], [1, 'fairy']]
}, {
    id: 3,
    name: "Scizor",
    type1: "steel",
    type2: "bug",
    hitPoints: 70,
    physicalAtk: 130,
    physicalDef: 100,
    specialAtk: 55,
    specialDef: 80,
    speed: 5065,
    movePool: [11, 16],
    special: false,
    img: "https://www.serebii.net/scarletviolet/pokemon/new/212.png",
    weakness: [[.5, 'normal'], [4, 'fire'], [1, 'water'], [.25, 'grass'], [1, 'electric'], [.5, 'ice'], [1, 'fighting'], [0, 'poison'], [1, 'ground'], [1, 'flying'], [.5, 'psychic'], [.5, 'bug'], [1, 'rock'], [1, 'ghost'], [1, 'dark'], [.5, 'dragon'], [.5, 'steel'], [.5, 'fairy']]
}, {
    id: 4,
    name: "Volcarona",
    type1: "fire",
    type2: "bug",
    hitPoints: 85,
    physicalAtk: 60,
    physicalDef: 65,
    specialAtk: 135,
    specialDef: 105,
    speed: 5100,
    movePool: [1, 11],
    special: true,
    img: "https://www.serebii.net/scarletviolet/pokemon/new/637.png",
    weakness: [[1, 'normal'], [1, 'fire'], [2, 'water'], [.25, 'grass'], [1, 'electric'], [.5, 'ice'], [.5, 'fighting'], [1, 'poison'], [1, 'ground'], [2, 'flying'], [1, 'psychic'], [.5, 'bug'], [4, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [.5, 'steel'], [.5, 'fairy']]
}, {
    id: 5,
    name: "Great Tusk",
    type1: "fighting",
    type2: "ground",
    hitPoints: 115,
    physicalAtk: 131,
    physicalDef: 131,
    specialAtk: 53,
    specialDef: 53,
    speed: 5087,
    movePool: [6, 8],
        special: false,
        gif: 'img/pokemon/984.gif',
    img: "https://www.serebii.net/scarletviolet/pokemon/new/984.png",
    weakness: [[1, 'normal'], [1, 'fire'], [2, 'water'], [2, 'grass'], [0, 'electric'], [2, 'ice'], [1, 'fighting'], [.5, 'poison'], [1, 'ground'], [2, 'flying'], [2, 'psychic'], [.5, 'bug'], [.25, 'rock'], [1, 'ghost'], [.5, 'dark'], [1, 'dragon'], [1, 'steel'], [2, 'fairy']]
}, {
    id: 6,
    name: "Chi-Yu",
    type1: "fire",
    type2: "dark",
    hitPoints: 55,
    physicalAtk: 80,
    physicalDef: 80,
    specialAtk: 140,
    specialDef: 120,
    speed: 5100,
    movePool: [1, 14],
        special: true,
        gif: 'img/pokemon/1004.gif',
    img: "https://www.serebii.net/scarletviolet/pokemon/new/1004.png",
    weakness: [[1, 'normal'], [.5, 'fire'], [2, 'water'], [.5, 'grass'], [1, 'electric'], [.5, 'ice'], [2, 'fighting'], [1, 'poison'], [2, 'ground'], [1, 'flying'], [0, 'psychic'], [0, 'bug'], [2, 'rock'], [.5, 'ghost'], [.5, 'dark'], [1, 'dragon'], [.5, 'steel'], [1, 'fairy']]
}, {
    id: 7,
    name: "Garchomp",
    type1: "dragon",
    type2: "ground",
    hitPoints: 108,
    physicalAtk: 130,
    physicalDef: 95,
    specialAtk: 80,
    specialDef: 85,
    speed: 5102,
    movePool: [8, 15],
    special: false,
    img: "https://www.serebii.net/scarletviolet/pokemon/445.png",
    weakness: [[1, 'normal'], [.5, 'fire'], [1, 'water'], [1, 'grass'], [0, 'electric'], [4, 'ice'], [1, 'fighting'], [.5, 'poison'], [1, 'ground'], [1, 'flying'], [1, 'psychic'], [1, 'bug'], [.5, 'rock'], [1, 'ghost'], [1, 'dark'], [2, 'dragon'], [1, 'steel'], [2, 'fairy']]
}, {
    id: 8,
    name: "Baxcalibur",
    type1: "dragon",
    type2: "ice",
    hitPoints: 115,
    physicalAtk: 145,
    physicalDef: 92,
    specialAtk: 75,
    specialDef: 86,
    speed: 5087,
    movePool: [5, 15],
        special: false,
        gif: 'img/pokemon/998.gif',
    img: "https://www.serebii.net/scarletviolet/pokemon/new/998.png",
    weakness: [[1, 'normal'], [1, 'fire'], [.5, 'water'], [.5, 'grass'], [.5, 'electric'], [1, 'ice'], [2, 'fighting'], [1, 'poison'], [1, 'ground'], [1, 'flying'], [1, 'psychic'], [1, 'bug'], [2, 'rock'], [1, 'ghost'], [1, 'dark'], [2, 'dragon'], [2, 'steel'], [2, 'fairy']]
}, {
    id: 9,
    name: "Slowbro",
    type1: "water",
    type2: "psychic",
    hitPoints: 95,
    physicalAtk: 75,
    physicalDef: 110,
    specialAtk: 100,
    specialDef: 80,
    speed: 5030,
    movePool: [2, 10],
    special: true,
    img: "https://www.serebii.net/swordshield/pokemon/080.png",
    weakness: [[1, 'normal'], [.5, 'fire'], [.5, 'water'], [2, 'grass'], [2, 'electric'], [.5, 'ice'], [.5, 'fighting'], [1, 'poison'], [1, 'ground'], [1, 'flying'], [.5, 'psychic'], [2, 'bug'], [1, 'rock'], [2, 'ghost'], [2, 'dark'], [1, 'dragon'], [.5, 'steel'], [1, 'fairy']]
}, {
    id: 10,
    name: "Meowscarada",
    type1: "grass",
    type2: "dark",
    hitPoints: 76,
    physicalAtk: 110,
    physicalDef: 70,
    specialAtk: 81,
    specialDef: 70,
    speed: 5123,
    movePool: [3, 14],
    special: false,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/908.png",
        gif: 'img/pokemon/908.gif',
    weakness: [[1, 'normal'], [2, 'fire'], [.5, 'water'], [.5, 'grass'], [.5, 'electric'], [2, 'ice'], [2, 'fighting'], [2, 'poison'], [.5, 'ground'], [2, 'flying'], [0, 'psychic'], [4, 'bug'], [1, 'rock'], [.5, 'ghost'], [.5, 'dark'], [1, 'dragon'], [1, 'steel'], [2, 'fairy']]
}, {
    id: 11,
    name: "Tauros",
    type1: "fire",
    type2: "fighting",
    hitPoints: 75,
    physicalAtk: 110,
    physicalDef: 135,
    specialAtk: 30,
    specialDef: 70,
    speed: 5100,
    movePool: [1, 6],
        special: false,
        gif: 'img/pokemon/128.gif',
    img: "https://www.serebii.net/scarletviolet/pokemon/new/128-b.png",
    weakness: [[1, 'normal'], [.5, 'fire'], [2, 'water'], [.5, 'grass'], [1, 'electric'], [.5, 'ice'], [1, 'fighting'], [1, 'poison'], [2, 'ground'], [2, 'flying'], [2, 'psychic'], [.25, 'bug'], [1, 'rock'], [1, 'ghost'], [.5, 'dark'], [1, 'dragon'], [.5, 'steel'], [1, 'fairy']]
}, {
    id: 12,
    name: "Gengar",
    type1: "ghost",
    type2: "poison",
    hitPoints: 60,
    physicalAtk: 65,
    physicalDef: 60,
    specialAtk: 130,
    specialDef: 75,
    speed: 5110,
    movePool: [7, 13],
    special: true,
    img: "https://www.serebii.net/scarletviolet/pokemon/new/094.png",
    weakness: [[0, 'normal'], [1, 'fire'], [1, 'water'], [.5, 'grass'], [1, 'electric'], [1, 'ice'], [0, 'fighting'], [.25, 'poison'], [2, 'ground'], [1, 'flying'], [2, 'psychic'], [.25, 'bug'], [1, 'rock'], [2, 'ghost'], [2, 'dark'], [1, 'dragon'], [1, 'steel'], [.5, 'fairy']]
}, {
    id: 13,
    name: "Hydreigon",
    type1: "dragon",
    type2: "dark",
    hitPoints: 92,
    physicalAtk: 105,
    physicalDef: 90,
    specialAtk: 125,
    specialDef: 90,
    speed: 5098,
    movePool: [14, 15],
    special: true,
    img: "https://www.serebii.net/scarletviolet/pokemon/new/635.png",
    weakness: [[1, 'normal'], [.5, 'fire'], [.5, 'water'], [.5, 'grass'], [.5, 'electric'], [2, 'ice'], [2, 'fighting'], [1, 'poison'], [0, 'ground'], [1, 'flying'], [0, 'psychic'], [2, 'bug'], [1, 'rock'], [.5, 'ghost'], [.5, 'dark'], [2, 'dragon'], [1, 'steel'], [4, 'fairy']]
}, {
    id: 14,
    name: "Gholdengo",
    type1: "ghost",
    type2: "steel",
    hitPoints: 87,
    physicalAtk: 60,
    physicalDef: 95,
    specialAtk: 133,
    specialDef: 91,
    speed: 5084,
    movePool: [13, 16],
    special: true,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/1000.png",
        gif: 'img/pokemon/1000.gif',
    weakness: [[0, 'normal'], [2, 'fire'], [1, 'water'], [.5, 'grass'], [1, 'electric'], [.5, 'ice'], [0, 'fighting'], [0, 'poison'], [2, 'ground'], [.5, 'flying'], [.5, 'psychic'], [.25, 'bug'], [.5, 'rock'], [2, 'ghost'], [2, 'dark'], [.5, 'dragon'], [.5, 'steel'], [.5, 'fairy']]
}, {
    id: 15,
    name: "Slowking",
    type1: "water",
    type2: "psychic",
    hitPoints: 95,
    physicalAtk: 75,
    physicalDef: 80,
    specialAtk: 100,
    specialDef: 110,
    speed: 5030,
    movePool: [2, 10],
    special: true,
    img: "https://www.serebii.net/scarletviolet/pokemon/new/199.png",
    weakness: [[1, 'normal'], [.5, 'fire'], [.5, 'water'], [2, 'grass'], [2, 'electric'], [.5, 'ice'], [.5, 'fighting'], [1, 'poison'], [1, 'ground'], [1, 'flying'], [.5, 'psychic'], [2, 'bug'], [1, 'rock'], [2, 'ghost'], [2, 'dark'], [1, 'dragon'], [.5, 'steel'], [1, 'fairy']]
}, {
    id: 16,
    name: "Dragonite",
    type1: "dragon",
    type2: "flying",
    hitPoints: 91,
    physicalAtk: 134,
    physicalDef: 95,
    specialAtk: 100,
    specialDef: 100,
    speed: 5080,
    movePool: [9, 15],
    special: false,
    img: "https://www.serebii.net/scarletviolet/pokemon/new/149.png",
    weakness: [[1, 'normal'], [.5, 'fire'], [.5, 'water'], [.25, 'grass'], [1, 'electric'], [4, 'ice'], [.5, 'fighting'], [1, 'poison'], [0, 'ground'], [1, 'flying'], [1, 'psychic'], [.5, 'bug'], [2, 'rock'], [1, 'ghost'], [1, 'dark'], [2, 'dragon'], [1, 'steel'], [2, 'fairy']]
}, {
    id: 17,
    name: "Donphan",
    type1: "ground",
    type2: "ground",
    hitPoints: 90,
    physicalAtk: 120,
    physicalDef: 120,
    specialAtk: 60,
    specialDef: 60,
    speed: 5050,
    movePool: [8, 8],
    special: false,
    img: "https://www.serebii.net/scarletviolet/pokemon/new/232.png",
    weakness: [[1, 'normal'], [1, 'fire'], [2, 'water'], [2, 'grass'], [0, 'electric'], [2, 'ice'], [1, 'fighting'], [.5, 'poison'], [1, 'ground'], [1, 'flying'], [1, 'psychic'], [1, 'bug'], [.5, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [1, 'steel'], [1, 'fairy']]
}, {
    id: 18,
    name: "Dragapult",
    type1: "dragon",
    type2: "ghost",
    hitPoints: 88,
    physicalAtk: 120,
    physicalDef: 100,
    specialAtk: 100,
    specialDef: 75,
    speed: 5142,
    movePool: [13, 15],
    special: false,
    img: "https://www.serebii.net/scarletviolet/pokemon/new/887.png",
    weakness: [[0, 'normal'], [.5, 'fire'], [.5, 'water'], [.5, 'grass'], [.5, 'electric'], [2, 'ice'], [0, 'fighting'], [.5, 'poison'], [1, 'ground'], [1, 'flying'], [1, 'psychic'], [.5, 'bug'], [1, 'rock'], [2, 'ghost'], [2, 'dark'], [2, 'dragon'], [1, 'steel'], [2, 'fairy']]
}, {
    id: 19,
    name: "Glimmora",
    type1: "rock",
    type2: "poison",
    hitPoints: 83,
    physicalAtk: 55,
    physicalDef: 90,
    specialAtk: 130,
    specialDef: 81,
    speed: 5086,
    movePool: [7, 12],
        special: true,
        gif: 'img/pokemon/970.gif',
    img: "https://www.serebii.net/scarletviolet/pokemon/new/970.png",
    weakness: [[.5, 'normal'], [.5, 'fire'], [2, 'water'], [1, 'grass'], [1, 'electric'], [1, 'ice'], [1, 'fighting'], [.25, 'poison'], [4, 'ground'], [.5, 'flying'], [2, 'psychic'], [.5, 'bug'], [1, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [2, 'steel'], [.5, 'fairy']]
}, {
    id: 20,
    name: "Gastrodon",
    type1: "water",
    type2: "ground",
    hitPoints: 111,
    physicalAtk: 83,
    physicalDef: 68,
    specialAtk: 92,
    specialDef: 82,
    speed: 5039,
    movePool: [2, 8],
    special: true,
    img: "https://www.serebii.net/scarletviolet/pokemon/new/423.png",
    weakness: [[1, 'normal'], [.5, 'fire'], [0, 'water'], [4, 'grass'], [0, 'electric'], [1, 'ice'], [1, 'fighting'], [.5, 'poison'], [1, 'ground'], [1, 'flying'], [1, 'psychic'], [1, 'bug'], [.5, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [.5, 'steel'], [1, 'fairy']]
}, {
    id: 21,
    name: "Breloom",
    type1: "grass",
    type2: "fighting",
    hitPoints: 60,
    physicalAtk: 130,
    physicalDef: 80,
    specialAtk: 60,
    specialDef: 60,
    speed: 5070,
    movePool: [3, 6],
    special: false,
    img: "https://www.serebii.net/scarletviolet/pokemon/new/286.png",
    weakness: [[1, 'normal'], [2, 'fire'], [.5, 'water'], [.5, 'grass'], [.5, 'electric'], [2, 'ice'], [1, 'fighting'], [2, 'poison'], [.5, 'ground'], [4, 'flying'], [2, 'psychic'], [1, 'bug'], [.5, 'rock'], [1, 'ghost'], [.5, 'dark'], [1, 'dragon'], [1, 'steel'], [2, 'fairy']]
}, {
    id: 22,
    name: "Chein-Pao",
    type1: "ice",
    type2: "dark",
    hitPoints: 80,
    physicalAtk: 135,
    physicalDef: 80,
    specialAtk: 90,
    specialDef: 65,
    speed: 5135,
    movePool: [5, 14],
    special: false,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/1002.png",
        gif: 'img/pokemon/1002.gif',
    weakness: [[1, 'normal'], [2, 'fire'], [.5, 'water'], [1, 'grass'], [1, 'electric'], [.5, 'ice'], [4, 'fighting'], [1, 'poison'], [1, 'ground'], [1, 'flying'], [0, 'psychic'], [2, 'bug'], [2, 'rock'], [.5, 'ghost'], [.5, 'dark'], [1, 'dragon'], [2, 'steel'], [2, 'fairy']]
}, {
    id: 23,
    name: "Maushold",
    type1: "normal",
    type2: "normal",
    hitPoints: 74,
    physicalAtk: 75,
    physicalDef: 70,
    specialAtk: 65,
    specialDef: 75,
    speed: 5111,
    movePool: [0, 0],
    special: false,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/925-f.png",
        gif: 'img/pokemon/925.gif',
    weakness: [[1, 'normal'], [1, 'fire'], [1, 'water'], [1, 'grass'], [1, 'electric'], [1, 'ice'], [2, 'fighting'], [1, 'poison'], [1, 'ground'], [1, 'flying'], [1, 'psychic'], [1, 'bug'], [1, 'rock'], [0, 'ghost'], [1, 'dark'], [1, 'dragon'], [1, 'steel'], [1, 'fairy']]
}, {
    id: 24,
    name: "Ceruledge",
    type1: "ghost",
    type2: "fire",
    hitPoints: 75,
    physicalAtk: 125,
    physicalDef: 80,
    specialAtk: 60,
    specialDef: 100,
    speed: 5085,
    movePool: [1, 13],
        special: false,
        gif: 'img/pokemon/937.gif',
    img: "https://www.serebii.net/scarletviolet/pokemon/new/937.png",
    weakness: [[0, 'normal'], [0, 'fire'], [2, 'water'], [.5, 'grass'], [1, 'electric'], [.5, 'ice'], [0, 'fighting'], [.5, 'poison'], [2, 'ground'], [1, 'flying'], [1, 'psychic'], [.25, 'bug'], [2, 'rock'], [2, 'ghost'], [2, 'dark'], [1, 'dragon'], [.5, 'steel'], [.5, 'fairy']]
}, {
    id: 25,
    name: "Iron Hands",
    type1: "electric",
    type2: "fighting",
    hitPoints: 154,
    physicalAtk: 140,
    physicalDef: 108,
    specialAtk: 50,
    specialDef: 68,
    speed: 5050,
    movePool: [4, 6],
    special: false,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/992.png",
        gif: 'img/pokemon/992.gif',
    weakness: [[1, 'normal'], [1, 'fire'], [1, 'water'], [1, 'grass'], [.5, 'electric'], [1, 'ice'], [1, 'fighting'], [1, 'poison'], [2, 'ground'], [1, 'flying'], [2, 'psychic'], [.5, 'bug'], [.5, 'rock'], [1, 'ghost'], [.5, 'dark'], [1, 'dragon'], [.5, 'steel'], [2, 'fairy']]
}, {
    id: 26,
    name: "Flutter Mane",
    type1: "ghost",
    type2: "fairy",
    hitPoints: 55,
    physicalAtk: 55,
    physicalDef: 55,
    specialAtk: 135,
    specialDef: 135,
    speed: 5135,
    movePool: [13, 17],
        special: true,
        gif: 'img/pokemon/987.gif',
    img: "https://www.serebii.net/scarletviolet/pokemon/new/987.png",
    weakness: [[0, 'normal'], [1, 'fire'], [1, 'water'], [1, 'grass'], [1, 'electric'], [1, 'ice'], [0, 'fighting'], [1, 'poison'], [1, 'ground'], [1, 'flying'], [1, 'psychic'], [.25, 'bug'], [1, 'rock'], [2, 'ghost'], [1, 'dark'], [0, 'dragon'], [2, 'steel'], [1, 'fairy']]
}, {
    id: 27,
    name: "Espathra",
    type1: "psychic",
    type2: "psychic",
    hitPoints: 95,
    physicalAtk: 60,
    physicalDef: 60,
    specialAtk: 101,
    specialDef: 60,
    speed: 5105,
    movePool: [10, 10],
    special: true,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/956.png",
        gif: 'img/pokemon/956.gif',
    weakness: [[1, 'normal'], [1, 'fire'], [1, 'water'], [1, 'grass'], [1, 'electric'], [1, 'ice'], [.5, 'fighting'], [1, 'poison'], [1, 'ground'], [1, 'flying'], [.5, 'psychic'], [2, 'bug'], [1, 'rock'], [2, 'ghost'], [2, 'dark'], [1, 'dragon'], [1, 'steel'], [1, 'fairy']]
}, {
    id: 28,
    name: "Glastrier",
    type1: "ice",
    type2: "ice",
    hitPoints: 100,
    physicalAtk: 145,
    physicalDef: 130,
    specialAtk: 65,
    specialDef: 110,
    speed: 5030,
    movePool: [5, 5],
    special: false,
    img: "https://www.serebii.net/swordshield/pokemon/896.png",
    weakness: [[1, 'normal'], [2, 'fire'], [1, 'water'], [1, 'grass'], [1, 'electric'], [.5, 'ice'], [2, 'fighting'], [1, 'poison'], [1, 'ground'], [1, 'flying'], [1, 'psychic'], [1, 'bug'], [2, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [2, 'steel'], [1, 'fairy']]
}, {
    id: 29,
    name: "Rillaboom",
    type1: "grass",
    type2: "grass",
    hitPoints: 100,
    physicalAtk: 125,
    physicalDef: 90,
    specialAtk: 60,
    specialDef: 70,
    speed: 5085,
    movePool: [3, 3],
    special: false,
    img: "https://www.serebii.net/scarletviolet/pokemon/new/812.png",
    weakness: [[1, 'normal'], [2, 'fire'], [.5, 'water'], [.5, 'grass'], [.5, 'electric'], [2, 'ice'], [1, 'fighting'], [2, 'poison'], [.5, 'ground'], [2, 'flying'], [1, 'psychic'], [2, 'bug'], [1, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [1, 'steel'], [1, 'fairy']]
}, {
    id: 30,
    name: "Cresselia",
    type1: "psychic",
    type2: "psychic",
    hitPoints: 120,
    physicalAtk: 25,
    physicalDef: 110,
    specialAtk: 75,
    specialDef: 120,
    speed: 5085,
    movePool: [10, 10],
    special: true,
    img: "https://www.serebii.net/scarletviolet/pokemon/new/488.png",
    weakness: [[1, 'normal'], [1, 'fire'], [1, 'water'], [1, 'grass'], [1, 'electric'], [1, 'ice'], [.5, 'fighting'], [1, 'poison'], [0, 'ground'], [1, 'flying'], [.5, 'psychic'], [2, 'bug'], [1, 'rock'], [2, 'ghost'], [2, 'dark'], [1, 'dragon'], [1, 'steel'], [1, 'fairy']]
}, {
    id: 31,
    name: "Regieleki",
    type1: "electric",
    type2: "electric",
    hitPoints: 80,
    physicalAtk: 100,
    physicalDef: 50,
    specialAtk: 130,
    specialDef: 50,
    speed: 5200,
    movePool: [4, 4],
    special: true,
    img: "https://www.serebii.net/swordshield/pokemon/894.png",
    weakness: [[1, 'normal'], [1, 'fire'], [1, 'water'], [1, 'grass'], [.5, 'electric'], [1, 'ice'], [1, 'fighting'], [1, 'poison'],
    [2, 'ground'], [.5, 'flying'], [1, 'psychic'], [1, 'bug'], [1, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [.5, 'steel'], [1, 'fairy']]
}, {
    id: 32,
    name: "Amoonguss",
    type1: "grass",
    type2: "poison",
    hitPoints: 114,
    physicalAtk: 85,
    physicalDef: 70,
    specialAtk: 86,
    specialDef: 80,
    speed: 5030,
    movePool: [3, 7],
    special: true,
    img: "https://www.serebii.net/swordshield/pokemon/591.png",
    weakness: [[1, 'normal'], [2, 'fire'], [.5, 'water'], [.25, 'grass'], [.5, 'electric'], [2, 'ice'], [.5, 'fighting'], [1, 'poison'],
    [1, 'ground'], [2, 'flying'], [2, 'psychic'], [1, 'bug'], [1, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [1, 'steel'], [.5, 'fairy']]
}, {
    id: 33,
    name: "Rapid Urshifu",
    type1: "water",
    type2: "fighting",
    hitPoints: 100,
    physicalAtk: 130,
    physicalDef: 100,
    specialAtk: 86,
    specialDef: 60,
    speed: 5097,
    movePool: [2, 6],
    special: false,
    img: "https://www.serebii.net/swordshield/pokemon/892-r.png",
    weakness: [[1, 'normal'], [.5, 'fire'], [.5, 'water'], [2, 'grass'], [2, 'electric'], [.5, 'ice'], [1, 'fighting'], [1, 'poison'],
    [1, 'ground'], [2, 'flying'], [2, 'psychic'], [.5, 'bug'], [.5, 'rock'], [1, 'ghost'], [.5, 'dark'], [1, 'dragon'], [.5, 'steel'], [2, 'fairy']]
}, {
    id: 34,
    name: "Zapdos",
    type1: "electric",
    type2: "flying",
    hitPoints: 90,
    physicalAtk: 90,
    physicalDef: 90,
    specialAtk: 125,
    specialDef: 90,
    speed: 5100,
    movePool: [4, 9],
    special: true,
    img: "https://www.serebii.net/Shiny/SV/new/145.png",
    weakness: [[1, 'normal'], [1, 'fire'], [1, 'water'], [.5, 'grass'], [1, 'electric'], [2, 'ice'], [.5, 'fighting'], [1, 'poison'],
    [0, 'ground'], [.5, 'flying'], [1, 'psychic'], [.5, 'bug'], [2, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [.5, 'steel'], [1, 'fairy']]
}, {
    id: 35,
    name: "Heatran",
    type1: "fire",
    type2: "steel",
    hitPoints: 91,
    physicalAtk: 90,
    physicalDef: 106,
    specialAtk: 130,
    specialDef: 106,
    speed: 5077,
    movePool: [1, 16],
    special: true,
    img: "https://www.serebii.net/Shiny/SV/new/485.png",
    weakness: [[.5, 'normal'], [0, 'fire'], [2, 'water'], [.25, 'grass'], [1, 'electric'], [.25, 'ice'], [2, 'fighting'], [0, 'poison'],
    [4, 'ground'], [.5, 'flying'], [.5, 'psychic'], [.25, 'bug'], [1, 'rock'], [1, 'ghost'], [1, 'dark'], [.5, 'dragon'], [.25, 'steel'], [.25, 'fairy']]
}, {
    id: 36,
    name: "Tinkaton",
    type1: "steel",
    type2: "fairy",
    hitPoints: 85,
    physicalAtk: 75,
    physicalDef: 77,
    specialAtk: 70,
    specialDef: 105,
    speed: 5094,
    movePool: [16, 17],
        special: false,
        gif: 'img/pokemon/959.gif',
    img: "https://www.serebii.net/scarletviolet/pokemon/new/959.png",
    weakness: [[.5, 'normal'], [2, 'fire'], [1, 'water'], [.5, 'grass'], [1, 'electric'], [.5, 'ice'], [1, 'fighting'], [0, 'poison'],
    [2, 'ground'], [.5, 'flying'], [.5, 'psychic'], [.25, 'bug'], [.5, 'rock'], [1, 'ghost'], [.5, 'dark'], [0, 'dragon'], [1, 'steel'], [.5, 'fairy']]
}, {
    id: 37,
        name: "Ting-Lu",
    type1: "ground",
    type2: "dark",
    hitPoints: 155,
    physicalAtk: 110,
    physicalDef: 125,
    specialAtk: 55,
    specialDef: 95,
    speed: 5045,
    movePool: [8, 14],
    special: false,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/1003.png",
        gif: 'img/pokemon/1003.gif',
    weakness: [[1, 'normal'], [1, 'fire'], [2, 'water'], [2, 'grass'], [0, 'electric'], [2, 'ice'], [2, 'fighting'], [.5, 'poison'],
    [1, 'ground'], [1, 'flying'], [0, 'psychic'], [2, 'bug'], [.5, 'rock'], [.5, 'ghost'], [.5, 'dark'], [1, 'dragon'], [1, 'steel'], [2, 'fairy']]
}

]
const pkmMoves = [{
    id: 0,
    type: "normal",
    power: 90,
    accuracy: 100,
}, {
    id: 1,
    type: "fire",
    power: 90,
    accuracy: 100,
}, {
    id: 2,
    type: "water",
    power: 90,
    accuracy: 100,
}, {
    id: 3,
    type: "grass",
    power: 90,
    accuracy: 100,
}, {
    id: 4,
    type: "electric",
    power: 90,
    accuracy: 100,
}, {
    id: 5,
    type: "ice",
    power: 90,
    accuracy: 100,
}, {
    id: 6,
    type: "fighting",
    power: 90,
    accuracy: 100,
}, {
    id: 7,
    type: "poison",
    power: 90,
    accuracy: 100,
}, {
    id: 8,
    type: "ground",
    power: 90,
    accuracy: 100,
}, {
    id: 9,
    type: "flying",
    power: 90,
    accuracy: 100,
}, {
    id: 10,
    type: "psychic",
    power: 90,
    accuracy: 100,
}, {
    id: 11,
    type: "bug",
    power: 90,
    accuracy: 100,
}, {
    id: 12,
    type: "rock",
    power: 90,
    accuracy: 100,
}, {
    id: 13,
    type: "ghost",
    power: 90,
    accuracy: 100,
}, {
    id: 14,
    type: "dark",
    power: 90,
    accuracy: 100,
}, {
    id: 15,
    type: "dragon",
    power: 90,
    accuracy: 100,
}, {
    id: 16,
    type: "steel",
    power: 90,
    accuracy: 100,
}, {
    id: 17,
    type: "fairy",
    power: 90,
    accuracy: 100,
}];
menuButton.addEventListener("click", () => {
    if (navMenu.className == 'hidden') {
        navMenu.classList.remove("hidden");
        document.getElementById("menuButton").innerHTML = 'hide menu'
    } else {
        navMenu.classList.add('hidden')
        document.getElementById("menuButton").innerHTML = 'menu'
    }
}
);

loadPokemon(); 

// Figure out the weakness of your team
function genArray() {
    for (let i = 0; i < team[0].weakness.length; i++) {
        let numberType = [0, 0];
        numberType[0] = team[0].weakness[i][0] + team[1].weakness[i][0] + team[2].weakness[i][0] + team[3].weakness[i][0] + team[4].weakness[i][0] + team[5].weakness[i][0];
        numberType[1] = team[0].weakness[i][1];
        teamWeaknessArr.splice(i, 1, numberType);
    }
}
function genWeakness() {
    genArray();
    for (let i = 0; i < 18; i++) {
        if (teamWeaknessArr[i][0] > 8) {
            teamWeakness.push(teamWeaknessArr[i][1]);
        }
    }
    targetWeakness.innerHTML = '|';
    for (let i = 0; i < teamWeakness.length; i++) {
        targetWeakness.innerHTML += `    ${teamWeakness[i]}    |`
    }
}
function genTile() {
    for (let i = 0; i < teamWeakness.length; i++) {
        tileSpace.innerHTML += `<div class='tile'>${teamWeakness[i]}</div>`;
    }
}

// Team building functionality
function generateRandomTeam() {
    clearTeam();
    let rdm = uniqueRandomNumber(6, pkm.length)
    for (var i = 0; i < 6; i++) {
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
function uniqueRandomNumber(num, team) {
    let numbers = [];
    let randomNumbers = [];
    for (var i = 0; i < team; i++) {
        numbers.push(i);
    }
    for (var i = 0; i < num; i++) {
        let rdm = numbers[getRandomInt(numbers.length)];
        randomNumbers.push(rdm);
        numbers.splice(numbers.indexOf(rdm), 1);
    }
    return randomNumbers;
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
function removeTeamOne() {
    TeamMember0 = false;
    teamOne.innerHTML = `<img class="image" src="https://cdn.onlinewebfonts.com/svg/img_573410.png">`;
    team.splice(0, 1);
    team.unshift(0);
    teamWeakness = [];
    teamWeaknessArr = [];
    targetWeakness.innerHTML = `what is your team weak against?`;
}
function removeTeamTwo() {
    TeamMember1 = false;
    teamTwo.innerHTML = `<img class="image" src="https://cdn.onlinewebfonts.com/svg/img_573410.png">`;
    team.splice(1, 1, 0);
    teamWeakness = [];
    teamWeaknessArr = [];
    targetWeakness.innerHTML = `what is your team weak against?`;
}
function removeTeamThree() {
    TeamMember2 = false;
    teamThree.innerHTML = `<img class="image" src="https://cdn.onlinewebfonts.com/svg/img_573410.png">`;
    team.splice(2, 1, 0);
    teamWeakness = [];
    teamWeaknessArr = [];
    targetWeakness.innerHTML = `what is your team weak against?`;
}
function removeTeamFour() {
    TeamMember3 = false;
    teamFour.innerHTML = `<img class="image" src="https://cdn.onlinewebfonts.com/svg/img_573410.png">`;
    team.splice(3, 1, 0);
    teamWeakness = [];
    teamWeaknessArr = [];
    targetWeakness.innerHTML = `what is your team weak against?`;
}
function removeTeamFive() {
    TeamMember4 = false;
    teamFive.innerHTML = `<img class="image" src="https://cdn.onlinewebfonts.com/svg/img_573410.png">`;
    team.splice(4, 1, 0);
    teamWeakness = [];
    teamWeaknessArr = [];
    targetWeakness.innerHTML = `what is your team weak against?`;
}
function removeTeamSix() {
    TeamMember5 = false;
    teamSix.innerHTML = `<img class="image" src="https://cdn.onlinewebfonts.com/svg/img_573410.png">`;
    team.splice(5, 1, 0);
    teamWeakness = [];
    teamWeaknessArr = [];
    targetWeakness.innerHTML = `what is your team weak against?`;
}
function generateRandomEnemyTeam() {
    let rdm = uniqueRandomNumber(6, pkm.length)
    enemyTeam = []
    function addRandomTeam(arr) {
        enemyTeam.splice(i, 1, arr);
    }
    for (var i = 0; i < 6; i++) {
        addRandomTeam(pkm[rdm[i]])
    }
}
function addTeam(arr) {
    hideCard();
    let typing = ''
    if (arr.type1 == arr.type2) {
        typing = `${arr.type1}`
    } else {
        typing = `${arr.type1}<span>&#47;</span>${arr.type2}`;
    }
    if (TeamMember0 === false) {
        teamOne.innerHTML = `<img class=" pkm image type1-${arr.type1}-type2-${arr.type2}"  src="${arr.img}" alt="${arr.name}">`;
        TeamMember0 = true;
        team.splice(0, 1);
        team.unshift(arr);
    } else if (TeamMember1 === false) {
        teamTwo.innerHTML = `<img class=" pkm image type1-${arr.type1}-type2-${arr.type2}"  src="${arr.img}" alt="${arr.name}">`;
        TeamMember1 = true;
        team.splice(1, 1, arr);
    } else if (TeamMember2 === false) {
        teamThree.innerHTML = `<img class=" pkm image type1-${arr.type1}-type2-${arr.type2}"  src="${arr.img}" alt="${arr.name}">`;
        TeamMember2 = true;
        team.splice(2, 1, arr);
    } else if (TeamMember3 === false) {
        teamFour.innerHTML = `<img class=" pkm image type1-${arr.type1}-type2-${arr.type2}"  src="${arr.img}" alt="${arr.name}">`;
        TeamMember3 = true;
        team.splice(3, 1, arr);
    } else if (TeamMember4 === false) {
        teamFive.innerHTML = `<img class=" pkm image type1-${arr.type1}-type2-${arr.type2}"  src="${arr.img}" alt="${arr.name}">`;
        TeamMember4 = true;
        team.splice(4, 1, arr);
    } else if (TeamMember5 === false) {
        teamSix.innerHTML = `<img class=" pkm image type1-${arr.type1}-type2-${arr.type2}"  src="${arr.img}" alt="${arr.name}">`;
        TeamMember5 = true;
        team.splice(5, 1);
        team.push(arr);
    }
}
function loadPokemon() {
    for (let i = 0; i < pkm.length; i++) {
        document.querySelector('#box').innerHTML += `
        <div class="pkmBox" onclick="pkmCard(${i})">
            <img class='image option' src="${pkm[i].img}">
                <div class="flex center">${pkm[i].name}</div>
        </div>`
    }
}
function hideCard() {
    document.querySelector('#pkmCardViewer').classList.add('hidden')
}
function pkmCard(id) {
    let image = ''
    if (pkm[id].gif) {
        image = pkm[id].gif
    } else {
        image = pkm[id].img
    }
    document.querySelector('#pkmCardViewer').innerHTML =``
    let weaknessList = ''
    let resistList = ''
    let typing = ''
    document.querySelector('#pkmCardViewer').innerHTML = `
     <div class="row space-between" id="nameType"></div>

        <div class="cardImage row center" id="cardImangeGoesHere"></div>
        <div class="dataPill">
            <div id="baseStats">
            </div>
            <div class="row space-around">
                <div class="colomn">
                    <div class="centerText">weakness</div>        
                    <div class="row lineHeight">                
                        <div class="baseStats row typeList" id="weaknessList">      
                        </div>
                    </div>
                </div>   
                <div class="colomn">
                    <div class="centerText">resist</div>        
                    <div class="row lineHeight">                
                        <div class="baseStats row typeList" id="resistList">
                        </div>                       
                    </div>            
                </div>
            </div>
        </div>
        <div class="dataPill baseStats cardButton" style="right: 0;" onclick="hideCard()">close</div>
        <div class="dataPill baseStats cardButton" style="left: 0;" onclick="addTeam(pkm[${id}])">add to team</div>

    `
    for (let i = 0; i < pkmMoves.length; i++) {
        if (pkm[id].weakness[i][0] >= 2) {       
            weaknessList += `                    
            <div class="smallerTypingIcon flex">
                <img class="image" src="img/${pkm[id].weakness[i][1]}.png" alt="">
            </div>`
        }       
    }
    document.querySelector('#weaknessList').innerHTML += weaknessList

    for (let i = 0; i < pkmMoves.length; i++) {
        if (pkm[id].weakness[i][0] <=.5) {
            resistList += `                    
            <div class="smallerTypingIcon flex">
                <img class="image" src="img/${pkm[id].weakness[i][1]}.png" alt="">
            </div>`
        }
    }
    document.querySelector('#resistList').innerHTML += resistList
    

    document.querySelector('#baseStats').innerHTML = `
        <div class=" row center">base stats</div>
                <div class="row baseStats space-between">
                    <div>
                        <div>attack: ${pkm[id].physicalAtk}</div>
                        <div>deffence: ${pkm[id].physicalDef}</div>
                    </div>
                    <div>
                        <div>specail attack: ${pkm[id].specialAtk}</div>
                        <div>special deffence: ${pkm[id].specialDef}</div>
                    </div>
                </div>

                <div class="row baseStats center" id="baseSpeed">speed: ${pkm[id].speed - 5000}</div>
    `
    document.querySelector('#cardImangeGoesHere').innerHTML = `<img class="image" src="${image}">`
    if (pkm[id].type1 == pkm[id].type2) {
        typing = `<div class="typingIcon">
                    <img class="image" src="img/${pkm[id].type1}.png" alt="">
                </div>`
    } else {
        typing = `                <div class="typingIcon">
                    <img class="image" src="img/${pkm[id].type1}.png" alt="">
                </div>
                <div class="typingIcon">
                    <img class="image" src="img/${pkm[id].type2}.png" alt="">
                </div>`
    }
    let background = `type1-${pkm[id].type1}-type2-${pkm[id].type2}`
    document.querySelector('#pkmCardViewer').className = ''
    document.querySelector('#pkmCardViewer').classList.add(background, 'pkmCard')
    document.querySelector('#nameType').innerHTML = `
                <div class="cardName title ml-10">${pkm[id].name}</div>
            <div class="title mr-10 row">
                <div class="hitPoints flex">${pkm[id].hitPoints}</div>
                ${typing}
            </div>
    `
}
function pkmCardLive(id, friendOrFoe) {
    let health = ''
    if (friendOrFoe == 1) {
        health = pkm[id].enemyHealth
    } else {
        health = pkm[id].health
    }

    document.querySelector('#pkmCardViewer').innerHTML = ``
    let weaknessList = ''
    let resistList = ''
    let typing = ''
    document.querySelector('#pkmCardViewer').innerHTML = `
     <div class="row space-between" id="nameType"></div>

        <div class="cardImage row center" id="cardImangeGoesHere"></div>
        <div class="dataPill">
            <div id="baseStats">
            </div>
            <div class="row space-around">
                <div class="colomn">
                    <div class="centerText">weakness</div>        
                    <div class="row lineHeight">                
                        <div class="baseStats mr-10 row typeList" id="weaknessList">      
                        </div>
                    </div>
                </div>   
                <div class="colomn">
                    <div class="centerText">resist</div>        
                    <div class="row lineHeight">                
                        <div class="baseStats mr-10 row typeList" id="resistList">
                        </div>                       
                    </div>            
                </div>
            </div>
        </div>
        <div class="dataPill baseStats cardButton" style="right: 0;" onclick="hideCard()">close</div>

    `
    for (let i = 0; i < pkmMoves.length; i++) {
        if (pkm[id].weakness[i][0] >= 2) {
            weaknessList += `                    
            <div class="smallerTypingIcon flex">
                <img class="image" src="img/${pkm[id].weakness[i][1]}.png" alt="">
            </div>`
        }
    }
    document.querySelector('#weaknessList').innerHTML += weaknessList

    for (let i = 0; i < pkmMoves.length; i++) {
        if (pkm[id].weakness[i][0] <= .5) {
            resistList += `                    
            <div class="smallerTypingIcon flex">
                <img class="image" src="img/${pkm[id].weakness[i][1]}.png" alt="">
            </div>`
        }
    }
    document.querySelector('#resistList').innerHTML += resistList


    document.querySelector('#baseStats').innerHTML = `
        <div class=" row center">base stats</div>
                <div class="row baseStats space-between">
                    <div>
                        <div>attack: ${pkm[id].physicalAtk}</div>
                        <div>deffence: ${pkm[id].physicalDef}</div>
                    </div>
                    <div>
                        <div>specail attack: ${pkm[id].specialAtk}</div>
                        <div>special deffence: ${pkm[id].specialDef}</div>
                    </div>
                </div>

                <div class="row baseStats center" id="baseSpeed">speed: ${pkm[id].speed - 5000}</div>
    `
    document.querySelector('#cardImangeGoesHere').innerHTML = `<img class="image" src="${pkm[id].img}">`
    if (pkm[id].type1 == pkm[id].type2) {
        typing = `<div class="typingIcon">
                    <img class="image" src="img/${pkm[id].type1}.png" alt="">
                </div>`
    } else {
        typing = `                <div class="typingIcon">
                    <img class="image" src="img/${pkm[id].type1}.png" alt="">
                </div>
                <div class="typingIcon">
                    <img class="image" src="img/${pkm[id].type2}.png" alt="">
                </div>`
    }
    let background = `type1-${pkm[id].type1}-type2-${pkm[id].type2}`
    document.querySelector('#pkmCardViewer').className = ''
    document.querySelector('#pkmCardViewer').classList.add(background, 'pkmCard')
    document.querySelector('#nameType').innerHTML = `
                <div class="cardName title ml-10">${pkm[id].name}</div>
            <div class="title mr-10 row">
                <div class="hitPoints flex">${health}</div>
                ${typing}
            </div>
    `
}
// functions for getting the game started
function battleTeam() {
    if (team.length > 5) {
        document.querySelector('body').innerHTML = `<div class="batttleGround" id="enemyTeamViewer"></div>    <div class="moveOptions" id="teamViewer"></div>`;
        vgcReset();
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
function vgcReset() {
    vgcTeam = []
    enemyVgcTeam = [];
}
function vgcTeamSelector() {
    counter = 0;
    vgcTeam = [];
    document.getElementById('teamViewer').innerHTML = `<h3>Choose 4 pokemon to fight 4 of the pokemon above.<br> The first two will be your lead.</h3>`;
    for (let i = 0; i < team.length; i++) {
        document.getElementById('teamViewer').innerHTML += `<div id='${team[i].id}'><img class="pkmOpt"  value='${team[i].id}' onclick="fourGuys(pkm[${team[i].id}])"src="${team[i].img}" alt=""></div>`
    }

}
function fourGuys(arr) {
    let pokemon = arr.name
    if (vgcTeam.some(vgcTeam => vgcTeam.name == pokemon)) {
        vgcTeam.splice(arr)
        counter--;
    } else {
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
    document.querySelector('body').innerHTML += `
        <div class="btn" id='turnBtn' style="position: fixed; bottom: 0;" onclick="turn2(0)">restart turn</div>
        <div class="btn" id='infoBtn' style="position: fixed; bottom: 0; right: 0;" onclick="info()" >Info</div>
            <div id="pkmCardViewer"></div>
    `;
    enemyVgc();
    document.getElementById('enemyTeamViewer').innerHTML = `
    <div class="enemy" id="activeEnemy"></div>
    <div class="partner" id="activePartner"></div>`;
    document.getElementById('activeEnemy').innerHTML += `<img class="right" id="enemy0"  src="${enemyVgcTeam[0].img}">`
    document.getElementById('activePartner').innerHTML += `<img class="left" id="partner0" src="${vgcTeam[0].img}">`
    document.getElementById('activeEnemy').innerHTML += `<img id="enemy1" class="right"  src="${enemyVgcTeam[1].img}">`
    document.getElementById('activePartner').innerHTML += `<img id="partner1" class="left" src="${vgcTeam[1].img}">`
    startingActiveTargets();
    health();
    addProtectToTeams();
    turn2(0);
    gameBoyText = '';
}
function startingActiveTargets() {
    activeEnemy = [0, 1];
    activeTeam = [0, 1];
    inactiveTeam = [2, 3];
    inactiveEnemy = [2, 3]
    floatingEnemy = [4, 4];
    floatingTeam = [4, 4];
}
function battleScreenUpdate() {
    /*document.getElementById('enemyTeamViewer').innerHTML = `
    <div class="enemy" id="activeEnemy"></div>
    <div class="partner" id="activePartner"></div>`;*/
    document.getElementById('activeEnemy').innerHTML =""
    if (!(activeEnemy[0]>=4)) {
        document.getElementById('activeEnemy').innerHTML = `<img class="right" id="enemy0" onclick ='pkmCardLive(${enemyVgcTeam[activeEnemy[0]].id}, 1)' src="${enemyVgcTeam[activeEnemy[0]].img}">`;
        healthCheck();
    }
    if (!(activeEnemy[1] >= 4)) {
        document.getElementById('activeEnemy').innerHTML += `<img class="right" id="enemy1" onclick ='pkmCardLive(${enemyVgcTeam[activeEnemy[1]].id}, 1)' src="${enemyVgcTeam[activeEnemy[1]].img}">`
        healthCheck();
    }

    if (activeTeam.length == 1) {
        document.getElementById('activePartner').innerHTML = `<img class="left" id="partner0" onclick ='pkmCardLive(${vgcTeam[activeTeam[0]].id}, 0)' src="${vgcTeam[activeTeam[0]].img}">`
    } else {
        document.getElementById('activePartner').innerHTML = `<img class="left" id="partner0" onclick ='pkmCardLive(${vgcTeam[activeTeam[0]].id}, 0)' src="${vgcTeam[activeTeam[0]].img}">`
        document.getElementById('activePartner').innerHTML += `<img id="partner1" class="left" onclick ='pkmCardLive(${vgcTeam[activeTeam[1]].id}, 0)' src="${vgcTeam[activeTeam[1]].img}">`
    }
    healthCheck()
}
function enemyInformation(target) {
    let pokemon = enemyVgcTeam[activeEnemy[target]]
    let Weakness = '| '
    for (let i = 0; i < pokemon.weakness.length; i++) {
        if (pokemon.weakness[i][0] >= 2) {
            Weakness += `${pokemon.weakness[i][1].toUpperCase()} x ${pokemon.weakness[i][0]} | `
        }
    }
    let resistances = '| '
    for (let i = 0; i < pokemon.weakness.length; i++) {
        if (pokemon.weakness[i][0] <= .5) {
            resistances += `${pokemon.weakness[i][1].toUpperCase()} x ${pokemon.weakness[i][0]} | `
        }
    }
    let speed = pokemon.speed - 5000
    let message = `
    Name: ${pokemon.name}
    Current Health: ${pokemon.enemyHealth}
    Weakness: ${Weakness}
    Resistances: ${resistances}
    Speed: ${speed}
    `
    alert(message)
}
function teamInformation(target) {
    let pokemon = vgcTeam[activeTeam[target]]
    let Weakness = '| '
    for (let i = 0; i < pokemon.weakness.length; i++) {
        if (pokemon.weakness[i][0] >= 2) {
            Weakness += `${pokemon.weakness[i][1].toUpperCase()} x ${pokemon.weakness[i][0]} | `
        }
    }
    let resistances = '| '
    for (let i = 0; i < pokemon.weakness.length; i++) {
        if (pokemon.weakness[i][0] <= .5) {
            resistances += `${pokemon.weakness[i][1].toUpperCase()} x ${pokemon.weakness[i][0]} | `
        }
    }
    let speed = pokemon.speed - 5000
    let message = `
    Name: ${pokemon.name}
    Current Health: ${pokemon.health}
    Weakness: ${Weakness}
    Resistances: ${resistances}
    Speed: ${speed}
    `
    alert(message)
}
function info() {
    alert('Click on any of the pokemon on screen to learn more about them')
}

// Switch Functions
function switchOptions(arr) {
    let pkm = vgcTeam[arr]
    let inactivePkm0 = vgcTeam[inactiveTeam[0]]
    let inactivePkm1 = vgcTeam[inactiveTeam[1]]
    let place = '';
    if (arr === activeTeam[1]) {
        place = 1
    } else {
        place = 0
    }

    if (inactiveTeam[0] > 3 && inactiveTeam[1] > 3) {
        alert('you dont have anymore pokemon')
    } else
    if (pleaseKeepTrackOfSwitch == 0 && inactiveTeam[1] == 7) {
        alert('you dont have anymore pokemon')
    } else
    if (pleaseKeepTrackOfSwitch == 1 && inactiveTeam[0] == 7) {
        alert('you dont have anymore pokemon')
    } else {
        document.getElementById('teamViewer').innerHTML = `
            <h3>Who will ${pkm.name} switch with?</h3>`
        document.getElementById('teamViewer').innerHTML += `<div class='btn' style="position: fixed; bottom: 0; left: 0;" onclick='turn2(${place})'>back</div> `;
        if (inactiveTeam[0] > 3 || pleaseKeepTrackOfSwitch == 0) {
            document.getElementById('teamViewer').innerHTML += `
            <div class="moveOptions">
                <img class="pkmOpt" onclick="preSwitch(${place}, 1, ${place})" src="${vgcTeam[inactiveTeam[1]].img}" >
            </div>
            `
        } else
        if (inactiveTeam[1] > 3 || pleaseKeepTrackOfSwitch == 1) {
            document.getElementById('teamViewer').innerHTML += `
                <div class="moveOptions">
                    <img class="pkmOpt" onclick="preSwitch(${place}, 0, ${place})" src="${vgcTeam[inactiveTeam[0]].img}" >
                </div>`
        } else {
            document.getElementById('teamViewer').innerHTML += `
                <div class="moveOptions">
                    <img class="pkmOpt"  onclick = "preSwitch(${place}, 0, ${place})" src = "${inactivePkm0.img}" >
                    <img class="pkmOpt" onclick="preSwitch(${place}, 1, ${place})" src="${inactivePkm1.img}" >
                </div>`
        }
        
    }
}
function preSwitch(activePlace, inactivePlace, turn) {
    if (inactiveTeam[0] > 3 && inactiveTeam[1] > 3) {
        alert('you dont have anymore pokemon')
    } else {
        pleaseKeepTrackOfSwitch = inactivePlace;
        addTurn(9000, switchPkm, [activePlace, inactivePlace, turn], turn)
    }
}
function switchPkm(parameter) {
    let activePlace = parameter[0]
    let inactivePlace = parameter[1]
    let turn = parameter[2]
    pleaseKeepTrackOfSwitch = 4
    if (turn === 1) {
        gameBoyText += `${vgcTeam[activeTeam[activePlace]].name} switched with ${vgcTeam[inactiveTeam[inactivePlace]].name}.<br>`
    } else {
        gameBoyText += `${vgcTeam[activeTeam[activePlace]].name} switched with ${vgcTeam[inactiveTeam[inactivePlace]].name}.<br>`
    }
    floatingTeam.splice(inactivePlace, 1, activeTeam[activePlace]);
    activeTeam.splice(activePlace, 1, inactiveTeam[inactivePlace]);
    inactiveTeam.splice(inactivePlace, 1, 4);
    battleScreenUpdate()
}
function switchEnemyPkm(parameter) {
    let activeEnemyPlace = parameter[0]
    let inactiveEnemyPlace = parameter[1]
    pleaseKeepTrackOfEnemySwitch = 4
    gameBoyText += `${enemyVgcTeam[activeEnemy[activeEnemyPlace]].name} switched with ${enemyVgcTeam[inactiveEnemy[inactiveEnemyPlace]].name}.<br>`
    floatingEnemy.splice(inactiveEnemyPlace, 1, activeEnemy[activeEnemyPlace]);
    activeEnemy.splice(activeEnemyPlace, 1, inactiveEnemy[inactiveEnemyPlace]);
    inactiveEnemy.splice(inactiveEnemyPlace, 1, 4);
    battleScreenUpdate()
}
function deadSwitchOptions(theNowDeadPokemonsActiveSpot) {
    updateActiveTargets();
    if (inactiveTeam[1] == 7 && inactiveTeam[0] == 7 && vgcTeam[activeTeam[0]].health >= 1) {
        turn2(0)
    }
    let place = theNowDeadPokemonsActiveSpot;
    let pkm = vgcTeam[activeTeam[theNowDeadPokemonsActiveSpot]]

    document.getElementById('teamViewer').innerHTML = `
            <h3>Who will ${pkm.name} switch with?</h3>`;
    if (inactiveTeam[0] != 7) {
        document.getElementById('teamViewer').innerHTML += `
            <div class="moveOptions">
                <img class="pkmOpt" onclick="switchDeadPkm([${place}, 0])" src="${vgcTeam[inactiveTeam[0]].img}" >
            </div> `
        activeTeam.splice(place, 1, 7)
    }
    if (inactiveTeam[1] != 7) {
        document.getElementById('teamViewer').innerHTML += `
            <div class="moveOptions">
                <img class="pkmOpt" onclick="switchDeadPkm([${place}, 1])" src="${vgcTeam[inactiveTeam[1]].img}" >
            </div> `
        activeTeam.splice(place, 1, 7)
    }
}
function switchDeadPkm(parameter) {
    let activePlace = parameter[0]
    let inactivePlace = parameter[1]
    floatingTeam.splice(inactivePlace, 1, activeTeam[activePlace]);
    activeTeam.splice(activePlace, 1, inactiveTeam[inactivePlace]);
    inactiveTeam.splice(inactivePlace, 1, 7);
    deadPokemon();
    battleScreenUpdate();
    deadTeamCheck()
}
function updateActiveTargets() {
    if (inactiveTeam[0] == 4) {
        inactiveTeam.splice(0, 1, floatingTeam[0]);
    }
    if (inactiveTeam[1] == 4) {
        inactiveTeam.splice(1, 1, floatingTeam[1]);
    }
    if (inactiveEnemy[0] == 4) {
        inactiveEnemy.splice(0, 1, floatingEnemy[0]);
    }
    if (inactiveEnemy[1] == 4) {
        inactiveEnemy.splice(1, 1, floatingEnemy[1]);
    }
    floatingEnemy = [7, 7];
    floatingTeam = [7, 7];
}

// Damage functions
function health() {
    for (let i = 0; i < vgcTeam.length; i++) {
        vgcTeam[i].health = vgcTeam[i].hitPoints + 60
        enemyVgcTeam[i].enemyHealth = enemyVgcTeam[i].hitPoints + 60
    }
}
function targetSelector(type, pkmId) {
    let current = 0
    let typing = type;
    let pokemonName = pkmId;
    if (pokemonName == vgcTeam[activeTeam[1]].id) { current = 1 }
    document.getElementById('teamViewer').innerHTML = `
    <h3>Who will ${pkm[pokemonName].name} attack with ${pkmMoves[typing].type}</h3>
    <div class="moveOptions"></div>`
    if (enemyVgcTeam[activeEnemy[1]].enemyHealth >= 1) {
        document.querySelector('.moveOptions').innerHTML += `<img onclick="addTurn(${pkm[pokemonName].speed}, damageCalc, [${typing}, 1, ${pokemonName}, ${current}], ${current}) " class="pkmOpt"  src='${enemyVgcTeam[activeEnemy[1]].img}' >`
    }
    if (enemyVgcTeam[activeEnemy[0]].enemyHealth >= 1) {
        document.querySelector('.moveOptions').innerHTML += `<img onclick="addTurn(${pkm[pokemonName].speed}, damageCalc, [${typing}, 0, ${pokemonName}, ${current}], ${current}) " class="pkmOpt"  src='${enemyVgcTeam[activeEnemy[0]].img}' >`
    }
    document.getElementById('teamViewer').innerHTML += `<div class='btn' style="position: fixed; bottom: 0; left: 0;" onclick='turn2(${current})'>back</div> `;

}
function damageCalc(parameter) {
    let moveId = parameter[0];
    let activeEnemyId = parameter[1];
    let atkId = parameter[2];
    let turn = parameter[3];
    let move = pkmMoves[moveId];
    let defender = enemyVgcTeam[activeEnemy[activeEnemyId]];
    let attacker = pkm[atkId];
    let attackStat = 0;
    let defenseStat = 0;
    if (defender.enemyHealth <= 0 && activeEnemyId == 0) {
        defender = enemyVgcTeam[activeEnemy[1]]
    }
    if (defender.enemyHealth <= 0 && activeEnemyId == 1) {
        defender = enemyVgcTeam[activeEnemy[0]]
    }
    if (vgcTeam[activeTeam[turn]].health > 0) {
        if (attacker.physicalAtk > attacker.specialAtk) {
            attackStat = attacker.physicalAtk;
            defenseStat = defender.physicalDef;
        } else {
            attackStat = attacker.specialAtk;
            defenseStat = defender.specialDef;
        };
        let damage = 22 * attackStat * move.power / defenseStat;
        damage = damage / 50;
        damage += 2;
        if (defender.isEnemyProtected) {
            damage = 0;
        } else {
            damage = Math.floor(damage * defender.weakness[move.id][0] * 1.5);
        }
        defender.enemyHealth -= damage;
        if (damage != 0) {
            gameBoyText += `${attacker.name} does ${damage} ${move.type} damage to the enemy ${defender.name}.<br>`
        } else {
            gameBoyText += `${attacker.name}'s attack missed!<br>`
        }
        if (defender.enemyHealth <= 0) {
            gameBoyText += `the enemy ${defender.name} fainted.<br>`
        }
    }
}
function enemyDamageCalc(parameter) {
    let moveId = parameter[0];
    let activeId = parameter[1];
    let atkId = parameter[2];
    let turn = parameter[3];
    let move = pkmMoves[moveId];
    let defender = vgcTeam[activeTeam[activeId]];
    let attacker = pkm[atkId];
    let attackStat = 0;
    let defenseStat = 0;
    if (defender.health <= 0 && activeId == 0) {
        defender = vgcTeam[activeTeam[1]]
    }
    if (defender.health <= 0 && activeId == 1) {
        defender = vgcTeam[activeTeam[0]]
    }
    if (enemyVgcTeam[activeEnemy[turn]].enemyHealth > 0) {
        if (attacker.physicalAtk > attacker.specialAtk) {
            attackStat = attacker.physicalAtk;
            defenseStat = defender.physicalDef;
        } else {
            attackStat = attacker.specialAtk;
            defenseStat = defender.specialDef;
        };
        let damage = 22 * attackStat * move.power / defenseStat;
        damage = damage / 50;
        damage += 2;
        if (defender.isProtected) {
            damage = 0;
        } else {
            damage = Math.floor(damage * defender.weakness[move.id][0] * 1.5);
        }
        defender.health -= damage;
        if (damage != 0) {
            gameBoyText += `the enemy ${attacker.name} does ${damage} ${move.type} damage to ${defender.name}.<br>`
        } else {
            gameBoyText += `the enemy ${attacker.name}'s attack missed!<br>`
        }
        if (defender.health < 0) {
            gameBoyText += `${defender.name} fainted.<br>`
        }
    } else {
        gameBoyText += `the enemy ${attacker.name} fainted and cant move.<br>`
    }
}

// Protect Functions
function protect(arr) {
    if (arr == activeTeam[0]) {
        if (vgcTeam[arr].wasProtectUsedLastTurn == false) {
            const list = document.getElementById('partner0').classList;
            list.add('flip');
            vgcTeam[arr].isProtected = true
            gameBoyText += `${vgcTeam[arr].name} dodged all incoming attacks.<br>`
        } else {
            gameBoyText += `${vgcTeam[arr].name} wasn't able to dodge.<br>`
        }
    } else if (arr == activeTeam[1]) {
        if (vgcTeam[arr].wasProtectUsedLastTurn == false) {
            const list = document.getElementById('partner1').classList;
            list.add('shake');
            vgcTeam[arr].isProtected = true
            gameBoyText += `${vgcTeam[arr].name} dodged all incoming attacks.<br>`
        } else {
            gameBoyText += `${vgcTeam[arr].name} wasn't able to dodge.<br>`
        }
    }
}
function enemyProtect(arr) {
    if (arr == activeEnemy[0]) {
        if (enemyVgcTeam[arr].wasEnemyProtectUsedLastTurn == false) {
            const list = document.getElementById('enemy0').classList;
            list.add('shake');
            enemyVgcTeam[arr].isEnemyProtected = true
            gameBoyText += `${enemyVgcTeam[arr].name} dodged all incoming attacks.<br>`
        } else {
            gameBoyText += `${enemyVgcTeam[arr].name} wasn't able to dodge.<br>`
        }
    } else if (arr == activeEnemy[1]) {
        if (enemyVgcTeam[arr].wasEnemyProtectUsedLastTurn == false) {
            const list = document.getElementById('enemy1').classList;
            list.add('flip');
            enemyVgcTeam[arr].isEnemyProtected = true
            gameBoyText += `${enemyVgcTeam[arr].name} dodged all incoming attacks.<br>`
        } else {
            gameBoyText += `${enemyVgcTeam[arr].name} wasn't able to dodge.<br>`
        }
    }
}
function protectCheck() {
    for (let i = 0; i < vgcTeam.length; i++) {
        if (enemyVgcTeam[i].isEnemyProtected) {
            enemyVgcTeam[i].isEnemyProtected = false;
            enemyVgcTeam[i].wasEnemyProtectUsedLastTurn = true
        } else {
            enemyVgcTeam[i].wasEnemyProtectUsedLastTurn = false
        }
        if (vgcTeam[i].isProtected) {
            vgcTeam[i].isProtected = false;
            vgcTeam[i].wasProtectUsedLastTurn = true
        } else {
            vgcTeam[i].wasProtectUsedLastTurn = false
        }
    }
    deadTeamCheck();
}
function addProtectToTeams() {
    for (let i = 0; i < vgcTeam.length; i++) {
        vgcTeam[i].isProtected = false
        vgcTeam[i].wasProtectUsedLastTurn = false
        enemyVgcTeam[i].isEnemyProtected = false
        enemyVgcTeam[i].wasEnemyProtectUsedLastTurn = false
    }
}

//Turn Functionality
function deadPokemon() {
    if (enemyVgcTeam[activeEnemy[0]].enemyHealth <= 0) {
        if (inactiveEnemy[0] != 7) {
            activeEnemy.splice(0, 1, inactiveEnemy[0])
            inactiveEnemy.splice(0, 1, 7)
        } else if (inactiveEnemy[1] != 7) {
            activeEnemy.splice(0, 1, inactiveEnemy[1])
            inactiveEnemy.splice(1, 1, 7)
        } 
    }
    if (enemyVgcTeam[activeEnemy[1]].enemyHealth <= 0) {
        if (inactiveEnemy[0] != 7) {
            activeEnemy.splice(1, 1, inactiveEnemy[0])
            inactiveEnemy.splice(0, 1, 7)
        } else if (inactiveEnemy[1] != 7) {
            activeEnemy.splice(1, 1, inactiveEnemy[1])
            inactiveEnemy.splice(1, 1, 7)
        } 
    }
}
function deadTeamCheck() {
    gameBoyText = ''
    turnStorage = [];
    if (inactiveTeam[1] == 7 && inactiveTeam[0] == 7 && vgcTeam[activeTeam[0]].health <= 0) {
        turn2(1)
    } else if (inactiveTeam[1] == 7 && inactiveTeam[0] == 7 && vgcTeam[activeTeam[1]].health <= 0) {
        turn2(0)
    } else if (vgcTeam[activeTeam[0]].health <= 0) {
        deadSwitchOptions(0);
    } else if (vgcTeam[activeTeam[1]].health <= 0) {
        deadSwitchOptions(1);
    } else {
    turn2(0)
    }
}
function healthCheck() {
    if (document.querySelector('#enemy0') != null) {
        if (enemyVgcTeam[activeEnemy[0]].enemyHealth <= 0) {
            document.querySelector('#enemy0').style.visibility = 'hidden'
        } else {
            document.querySelector('#enemy0').style.visibility = 'visible'
        }
    }
    if (document.querySelector('#enemy1') != null) {
        if (enemyVgcTeam[activeEnemy[1]].enemyHealth <= 0) {
            document.querySelector('#enemy1').style.visibility = 'hidden'
        }
    }
    if (document.querySelector('#partner0') != null) {
        if (vgcTeam[activeTeam[0]].health <= 0) {
            document.querySelector('#partner0').style.visibility = 'hidden'
        }
    }
    if (document.querySelector('#partner1') != null) {
        if (vgcTeam[activeTeam[1]].health <= 0) {
            document.querySelector('#partner1').style.visibility = 'hidden'
        }
    }
}
function winCon() {
    if (enemyVgcTeam[0].enemyHealth <= 0 && enemyVgcTeam[1].enemyHealth <= 0 && enemyVgcTeam[2].enemyHealth <= 0 && enemyVgcTeam[3].enemyHealth <= 0) {
        removeAnimation();
        document.getElementById('teamViewer').innerHTML = `<div style="color: white">You win!</div> `;
        document.getElementById('teamViewer').innerHTML += `<div class='btn' style="position: fixed; bottom: 0; left: 0;" onclick='battleTeam()'>another game?</div> `;
        turnStorage = []
    } else if (vgcTeam[0].health <= 0 && vgcTeam[1].health <= 0 && vgcTeam[2].health <= 0 && vgcTeam[3].health <= 0) {
        removeAnimation();
        document.getElementById('teamViewer').innerHTML = `<div style="color: white">You lose!</div> `;
        document.getElementById('teamViewer').innerHTML += `<div class='btn' style="position: fixed; bottom: 0; left: 0;" onclick='battleTeam()'>another game?</div> `;
        turnStorage = []
    } else {
        protectCheck()
    }
}
function turn2(activeId) {

    let pokemon = vgcTeam[activeTeam[activeId]];
    if (activeId == 0) {
        deadPokemon();
        updateActiveTargets();
        battleScreenUpdate();
        if (pokemon.health <= 0) {
            turn2(1)
        }
    }
    removeAnimation();
    if (vgcTeam[activeTeam[0]].health <= 0) {
        deadPokemon();
        updateActiveTargets();
        battleScreenUpdate();
    }

    if (activeId == 0) {
        const list = document.getElementById('partner0').classList;
        list.add('bounce');
    } else if (activeId == activeTeam[1]) {
        const list = document.getElementById('partner1').classList;
        list.add('bounce');
    }
    if (pokemon.health >= 0) {
        document.querySelector('#turnBtn').style.visibility = 'hidden'
        document.getElementById('teamViewer').innerHTML = `
        <h3>What will ${pokemon.name} do?</h3>
        <div class="moveOptions">
            <div class="btn" onclick="targetSelector(${pokemon.movePool[0]}, ${pokemon.id})">${pkmMoves[pokemon.movePool[0]].type} attack</div>
            <div class="btn" onclick="targetSelector(${pokemon.movePool[1]}, ${pokemon.id})">${pkmMoves[pokemon.movePool[1]].type} attack</div>
            <div class="btn" onclick="addTurn(8, protect, activeTeam[${activeId}], ${activeId})">dodge</div>
            <div class="btn" onclick="switchOptions(activeTeam[${activeId}])">switch</div>
        </div>`
    } else {
        endTurn(1)
    }
    healthCheck();
}
function addTurn(priority, theFunction, parameter, nextTurn) {
    turnStorage.push([priority, theFunction, parameter, ])
    if (nextTurn == 0) {
        turn2(1)
    } else if (nextTurn == 1){
        endTurn(1)
    }
}
function runTurnOrder() {
    gameBoyText = ''
    enemyLogic();
    turnStorage = turnStorage.sort();
    turnStorage = turnStorage.reverse();
    for (let i = 0; i < turnStorage.length; i++) {
        turnStorage[i][1](turnStorage[i][2])
    }
    healthCheck();
}
function endTurn(turn) {
    if (turn == 0) {
        removeAnimation();
        turn2(1)
    } else {
        removeAnimation();
        runTurnOrder();
        document.getElementById('teamViewer').innerHTML = `<p style="color: white">${gameBoyText}</p> `;
        document.getElementById('teamViewer').innerHTML += `<div class='btn' style="position: fixed; bottom: 0; left: 0;" onclick='winCon()'>Next Turn</div> `;
    };
}
function removeAnimation() {
    document.querySelectorAll('*').forEach((element) => {
        element.classList.remove('bounce','shake','flip');
    });
}
function clearProtect() {
    document.querySelectorAll('*').forEach((element) => {
        element.classList.remove('protect');
    });
}
function order66() {
    vgcTeam[0].health = 0
    vgcTeam[1].health = 0
    vgcTeam[2].health = 0
}
function order67() {
    vgcTeam[0].health = 0
    vgcTeam[3].health = 0
    vgcTeam[2].health = 0
}
function order68() {
    vgcTeam[3].health = 0
    vgcTeam[2].health = 0
}

//Enemy Logic
function enemyLogic() {
    //Active Pokemon
    let activeTeam0 = vgcTeam[activeTeam[0]]
    let activeTeam1 = vgcTeam[activeTeam[1]]
    let enemyPkm0 = enemyVgcTeam[activeEnemy[0]]
    let enemyPkm1 = enemyVgcTeam[activeEnemy[1]]
    //Inactive Enemy Pokemon
    let enemyInactivePkm0 = enemyVgcTeam[inactiveEnemy[0]]
    let enemyInactivePkm1 = enemyVgcTeam[inactiveEnemy[1]]
    //All Enemy Moves
    let enemy0Move0 = enemyVgcTeam[activeEnemy[0]].movePool[0]
    let enemy0Move1 = enemyVgcTeam[activeEnemy[0]].movePool[1]
    let enemy1Move0 = enemyVgcTeam[activeEnemy[1]].movePool[0]
    let enemy1Move1 = enemyVgcTeam[activeEnemy[1]].movePool[1]
    //All Team Moves
    let team0Move0 = vgcTeam[activeTeam[0]].movePool[0]
    let team0Move1 = vgcTeam[activeTeam[0]].movePool[1]
    let team1Move0 = vgcTeam[activeTeam[1]].movePool[0]
    let team1Move1 = vgcTeam[activeTeam[1]].movePool[1]

    if (enemyPkm0.speed >= activeTeam0.speed && strongestAttackCalc(0, 0) >= activeTeam0.health && enemyPkm1.speed >= activeTeam1.speed && strongestAttackCalc(1, 1) >= activeTeam1.health) {
        targetedStrongestAttack(0, 0)
        targetedStrongestAttack(1, 1)
        errorCode = 120
    } else
    if (enemyPkm0.speed >= activeTeam1.speed && strongestAttackCalc(0, 1) >= activeTeam1.health && enemyPkm1.speed >= activeTeam0.speed && strongestAttackCalc(1, 0) >= activeTeam0.health) {
        targetedStrongestAttack(0, 1)
        targetedStrongestAttack(1, 0)
        errorCode = 121
    } else
    if (enemyPkm0.speed >= activeTeam0.speed && enemyPkm0.speed >= enemyPkm1.speed && strongestAttackCalc(0, 0) >= activeTeam0.health && activeTeam0.health >= 1) {
        targetedStrongestAttack(0, 0)
        targetedStrongestAttack(1, 1)
        errorCode = 122
    } else
    if (enemyPkm0.speed >= activeTeam1.speed && enemyPkm0.speed >= enemyPkm1.speed && strongestAttackCalc(0, 1) >= activeTeam1.health && activeTeam1.health >= 1) {
        targetedStrongestAttack(0, 1)
        targetedStrongestAttack(1, 0)
        errorCode = 123
    } else
    if (enemyPkm1.speed >= activeTeam0.speed && enemyPkm0.speed <= enemyPkm1.speed && strongestAttackCalc(1, 0) >= activeTeam0.health && activeTeam0.health >= 1) {  
        targetedStrongestAttack(0, 1)
        targetedStrongestAttack(1, 0)
        errorCode = 124
    } else
    if (enemyPkm1.speed >= activeTeam1.speed && enemyPkm0.speed <= enemyPkm1.speed && strongestAttackCalc(1, 1) >= activeTeam1.health && activeTeam1.health >= 1) {
        targetedStrongestAttack(0, 0)
        targetedStrongestAttack(1, 1)
        errorCode = 125
    } else

    if (enemyPkm1.weakness[team0Move0][0] >= 4 || enemyPkm1.weakness[team0Move1][0] >= 4) {
        if (enemyPkm0.speed >= activeTeam0.speed && enemyPkm1.speed >= activeTeam0.speed && bestCombinedAttacks(0) >= activeTeam0.health && activeTeam0.health >= 1) {
            enemyFocus(0)
            errorCode = 126
        } else
        if (enemyPkm0.speed >= activeTeam0.speed && strongestAttackCalc(0, 0) >= activeTeam0.health) {
            targetedStrongestAttack(0, 0)
            targetedStrongestAttack(1, 1)
            errorCode = 127
        } else
            if (!enemyPkm1.wasEnemyProtectUsedLastTurn && enemyPkm0.enemyHealth >= 1) {
            protect1attackFrom0(0)
            errorCode = 1208
        } else 
        if (!(inactiveEnemy[0] >= 4)) {
            if (enemyInactivePkm0.weakness[team0Move0][0] <= .5 || enemyInactivePkm0.weakness[team0Move1][0] <= .5) {
                addTurn(9000, switchEnemyPkm, [1, 0])
                targetedStrongestAttack(0,0)
                errorCode = 1306112
            } else {
                enemyFocus(0)
                errorCode = 130612
            }
        } else {
            enemyFocus(0)
            errorCode = 1306
        }
    } else

    if (enemyPkm1.weakness[team1Move0][0] >= 4 || enemyPkm1.weakness[team1Move1][0] >= 4) {
        if (enemyPkm0.speed >= activeTeam0.speed && enemyPkm1.speed >= activeTeam0.speed && bestCombinedAttacks(0) >= activeTeam0.health && activeTeam0.health >= 1) {
            enemyFocus(1)
            errorCode = 12010
        } else
        if (enemyPkm0.speed >= activeTeam1.speed && strongestAttackCalc(0, 1) >= activeTeam1.health) {
            targetedStrongestAttack(0, 1)
            targetedStrongestAttack(1, 0)
            errorCode = 130
        } else
            if (!enemyPkm1.wasEnemyProtectUsedLastTurn && enemyPkm0.enemyHealth >= 1) {
            protect1attackFrom0(1)
            errorCode = 1301
        } else
        if (!(inactiveEnemy[1] >= 4)) {
            if (enemyInactivePkm1.weakness[team0Move0][0] <= .5 || enemyInactivePkm1.weakness[team0Move1][0] <= .5) {
                addTurn(9000, switchEnemyPkm, [1, 1])
                targetedStrongestAttack(0, 0)
                errorCode = 13061155
            } else {
                enemyFocus(0)
                errorCode = 130616654
            }
        } else {
            enemyFocus(0)
            errorCode = 1306787
        }
    } else


    if (enemyPkm0.weakness[team0Move0][0] >= 4 || enemyPkm0.weakness[team0Move1][0] >= 4) {
        if (enemyPkm0.speed >= activeTeam0.speed && enemyPkm1.speed >= activeTeam0.speed && bestCombinedAttacks(0) >= activeTeam0.health && activeTeam0.health >= 1) {
            enemyFocus(0)
            errorCode = 1303
        } else
            if (enemyPkm1.speed >= activeTeam0.speed && strongestAttackCalc(1, 0) >= activeTeam0.health) {
                targetedStrongestAttack(0, 1)
                targetedStrongestAttack(1, 0)
                errorCode = 1304
            } else
                if (!enemyPkm0.wasEnemyProtectUsedLastTurn && enemyPkm1.enemyHealth >= 1) {
                    protect0attackFrom1(0)
                    errorCode = 1305
                } else
                if (!(inactiveEnemy[1] >= 4)) {
                    if (enemyInactivePkm1.weakness[team0Move0][0] <= .5 || enemyInactivePkm1.weakness[team0Move1][0] <= .5) {
                        addTurn(9000, switchEnemyPkm, [0, 1])
                        targetedStrongestAttack(1, 0)
                        errorCode = 130611
                    } else {
                        enemyFocus(0)
                        errorCode = 13061
                    }
                } else {
                    enemyFocus(0)
                    errorCode = 1306
                }


    } else
    if (enemyPkm0.weakness[team1Move0][0] >= 4 || enemyPkm0.weakness[team1Move1][0] >= 4) {
        if (enemyPkm0.speed >= activeTeam0.speed && enemyPkm1.speed >= activeTeam0.speed && bestCombinedAttacks(0) >= activeTeam0.health && activeTeam0.health >= 1) {
            enemyFocus(1)
            errorCode = 1307
        } else
        if (enemyPkm1.speed >= activeTeam1.speed && strongestAttackCalc(1, 1) >= activeTeam1.health) {
            targetedStrongestAttack(0, 0)
            targetedStrongestAttack(1, 1)
            errorCode = 1308
        } else
            if (!enemyPkm0.wasEnemyProtectUsedLastTurn && enemyPkm1.enemyHealth >= 1) {
            protect0attackFrom1(1)
            errorCode = 1309
        } else
        if (!(inactiveEnemy[1] >= 4)) {
            if (enemyInactivePkm1.weakness[team1Move0][0] <= .5 || enemyInactivePkm1.weakness[team1Move1][0] <= .5) {
                addTurn(9000, switchEnemyPkm, [0, 1])
                targetedStrongestAttack(1, 1)
                errorCode = 1306113
            } else {
                enemyFocus(0)
                errorCode = 130614
            }
        } else {
            enemyFocus(0)
            errorCode = 1306
        }
    } else

    if (enemyPkm0.speed >= activeTeam0.speed && enemyPkm1.speed >= activeTeam0.speed && bestCombinedAttacks(0) >= activeTeam0.health && activeTeam0.health >= 1) {
        enemyFocus(0)
        errorCode = 1401
    } else
    if (enemyPkm0.speed >= activeTeam1.speed && enemyPkm1.speed >= activeTeam1.speed && bestCombinedAttacks(1) >= activeTeam1.health && activeTeam1.health >= 1) {
        enemyFocus(1)
        errorCode = 1402
    } else

    if (enemyPkm1.weakness[team0Move0][0] >= 2 || enemyPkm1.weakness[team0Move1][0] >= 2 && activeTeam0.health >= 1) {
        if (enemyPkm1.weakness[team1Move0][0] >= 2 || enemyPkm1.weakness[team1Move1][0] >= 2) {
            if (!enemyPkm1.wasEnemyProtectUsedLastTurn && enemyPkm0.enemyHealth >= 1) {
                protect1attackFrom0(0)
                errorCode = 1403
            } else {
                enemyFocus(0)
                errorCode = 1404
            }
        } else
        if (enemyPkm0.speed >= activeTeam0.speed && enemyPkm1.speed >= activeTeam0.speed && bestCombinedAttacks(0) >= activeTeam0.health && activeTeam0.health >= 1) {
            enemyFocus(0)
            errorCode = 1405
        } else
        if (!enemyPkm1.wasEnemyProtectUsedLastTurn && enemyPkm0.enemyHealth >=1) {
            protect1attackFrom0(0)
            errorCode = 1406
        } else
        if (!(inactiveEnemy[1] >= 4)) {
            if (enemyInactivePkm1.weakness[team0Move0][0] <= .25 || enemyInactivePkm1.weakness[team0Move1][0] <= .25) {
                addTurn(9000, switchEnemyPkm, [1, 1])
                targetedStrongestAttack(0, 0)
                errorCode = 15004726
            } else {
                enemyFocus(0)
                errorCode = 15002628
            }
        } else {
            enemyFocus(0)
            errorCode = 1407
        }
    } else
    if (enemyPkm1.weakness[team1Move0][0] >= 2 || enemyPkm1.weakness[team1Move1][0] >= 2 && activeTeam1.health >= 1) {
        if (enemyPkm0.speed >= activeTeam0.speed && enemyPkm1.speed >= activeTeam0.speed && bestCombinedAttacks(0) >= activeTeam0.health && activeTeam0.health >= 1) {
            enemyFocus(1)
            errorCode = 1408
        } else
            if (!enemyPkm1.wasEnemyProtectUsedLastTurn && enemyPkm0.enemyHealth >= 1) {
            protect1attackFrom0(1)
            errorCode = 1409
        } else
        if (!(inactiveEnemy[1] >= 4)) {
            if (enemyInactivePkm1.weakness[team1Move0][0] <= .25 || enemyInactivePkm1.weakness[team1Move1][0] <= .25) {
                addTurn(9000, switchEnemyPkm, [1, 1])
                targetedStrongestAttack(0, 1)
                errorCode = 15004726
            } else {
                enemyFocus(0)
                errorCode = 15002628
            }
        } else {
            enemyFocus(1)
            errorCode = 150
        }
    } else


    if (enemyPkm0.weakness[team0Move0][0] >= 2 || enemyPkm0.weakness[team0Move1][0] >= 2 && activeTeam0.health >= 1) {
        if (enemyPkm0.speed >= activeTeam0.speed && enemyPkm1.speed >= activeTeam0.speed && bestCombinedAttacks(0) >= activeTeam0.health && activeTeam0.health >= 1) {
            enemyFocus(0)
            errorCode = 1501
        } else
            if (!enemyPkm0.wasEnemyProtectUsedLastTurn && enemyPkm1.enemyHealth >= 1) {
            protect0attackFrom1(0)
            errorCode = 1502
        } else
        if (!(inactiveEnemy[1] >= 4)) {
            if (enemyInactivePkm1.weakness[team0Move0][0] <= .25 || enemyInactivePkm1.weakness[team0Move1][0] <= .25) {
                addTurn(9000, switchEnemyPkm, [0, 1])
                targetedStrongestAttack(1, 0)
                errorCode = 150047
            } else {
                enemyFocus(0)
                errorCode = 150026
            }
        } else {
            enemyFocus(0)
            errorCode = 15000052
        }
    } else
    if (enemyPkm0.weakness[team1Move0][0] >= 2 || enemyPkm0.weakness[team1Move1][0] >= 2 && activeTeam1.health >= 1) {
        if (enemyPkm0.speed >= activeTeam0.speed && enemyPkm1.speed >= activeTeam0.speed && bestCombinedAttacks(0) >= activeTeam0.health && activeTeam0.health >= 1) {
            enemyFocus(1)
            errorCode = 1504
        } else
            if (!enemyPkm0.wasEnemyProtectUsedLastTurn && enemyPkm1.enemyHealth >= 1) {
            protect0attackFrom1(1)
            errorCode = 1505
        } else
        if (!(inactiveEnemy[1] >= 4)) {
            if (enemyInactivePkm1.weakness[team1Move0][0] <= .25 || enemyInactivePkm1.weakness[team1Move1][0] <= .25) {
                addTurn(9000, switchEnemyPkm, [0, 1])
                targetedStrongestAttack(1, 1)
                errorCode = 1500472
            } else {
                enemyFocus(0)
                errorCode = 1500262
            }
        } else {
            enemyFocus(1)
            errorCode = 1506
        }
    } else
    {
        strongestAttack(0);
        strongestAttack(1);
        errorCode = 1507
    }

}

function protect0attackFrom1(threat) {
    let other = ''
    if (threat == 1) {
        other = 0
    } else {
        other = 1
    }
    if (enemyVgcTeam[activeEnemy[0]].enemyHealth >= 1) {
        addTurn(8, enemyProtect, activeEnemy[0]);
    }
    if (strongestAttackCalc(1, target) >= 1) {
        targetedStrongestAttack(1, threat);
    } else {
        targetedStrongestAttack(1, other);
    }
}
function protect1attackFrom0(threat) {
    let other = ''
    if (threat == 1) {
        other = 0
    } else {
        other = 1
    }
    if (enemyVgcTeam[activeEnemy[1]].enemyHealth >= 1) {
        addTurn(8, enemyProtect, activeEnemy[1]);
    }
    if (strongestAttackCalc(0, threat) >= 1) {
        targetedStrongestAttack(0, threat);
    } else {
        targetedStrongestAttack(0, other);
    }
}
/*function protectAttack(theProtected, threat) {
    if (enemyVgcTeam[activeEnemy[theProtected]].enemyHealth >= 1) {
        addTurn(8, enemyProtect, activeEnemy[theProtected]);
    }
    if () {
        targetedStrongestAttack(0, threat);
    }
}*/
function enemyFocus(target) {

    let activeTarget = vgcTeam[activeTeam[target]]
    let enemyPkm1 = enemyVgcTeam[activeEnemy[1]]
    let enemyPkm0 = enemyVgcTeam[activeEnemy[0]]
    if (enemyPkm1.enemyHealth >= 1) {
        let Move0 = enemyPkm1.movePool[0]
        let Move1 = enemyPkm1.movePool[1]

        if (enemyAiDamageCalc(Move0, activeTarget.id, enemyPkm1.id) > enemyAiDamageCalc(Move1, activeTarget.id, enemyPkm1.id)) {
            addTurn(enemyPkm1.speed, enemyDamageCalc, [Move0, target, enemyPkm1.id, 1])
        }
        else {
            addTurn(enemyPkm1.speed, enemyDamageCalc, [Move1, target, enemyPkm1.id, 1])
        }
    }
    if (enemyPkm0.enemyHealth >= 1) {
        let Move0 = enemyPkm0.movePool[0]
        let Move1 = enemyPkm0.movePool[1]

        if (enemyAiDamageCalc(Move0, activeTarget.id, enemyPkm0.id) > enemyAiDamageCalc(Move1, activeTarget.id, enemyPkm0.id)) {
            addTurn(enemyPkm0.speed, enemyDamageCalc, [Move0, target, enemyPkm0.id, 0])
        }
        else {
            addTurn(enemyPkm0.speed, enemyDamageCalc, [Move1, target, enemyPkm0.id, 0])
        }
    }
}
function targetedStrongestAttack(FromActiveEnemy, target) {
    let enemyPkm = enemyVgcTeam[activeEnemy[FromActiveEnemy]]
    if (enemyPkm.enemyHealth >= 1) {
        let Move0 = enemyPkm.movePool[0]
        let Move1 = enemyPkm.movePool[1]
        if (enemyAiDamageCalc(Move0, vgcTeam[activeTeam[target]].id, enemyPkm.id) > enemyAiDamageCalc(Move1, vgcTeam[activeTeam[target]].id, enemyPkm.id)) {
            addTurn(enemyPkm.speed, enemyDamageCalc, [Move0, target, enemyPkm.id, FromActiveEnemy])
        } else {
            addTurn(enemyPkm.speed, enemyDamageCalc, [Move1, target, enemyPkm.id, FromActiveEnemy])
        }
    }
}
function strongestAttack(FromActiveEnemy) {

    let activeTarget0 = vgcTeam[activeTeam[0]]
    let activeTarget1 = vgcTeam[activeTeam[1]]
    let target = 0
    let enemyPkm = enemyVgcTeam[activeEnemy[FromActiveEnemy]]
    if (enemyPkm.enemyHealth >= 1) {

        let Move0 = enemyPkm.movePool[0]
        let Move1 = enemyPkm.movePool[1]
        let damageTo0 = 0
        let damageTo1 = 0
        if (enemyAiDamageCalc(Move0, activeTarget0.id, enemyPkm.id) > enemyAiDamageCalc(Move1, activeTarget0.id, enemyPkm.id)) {
            damageTo0 = enemyAiDamageCalc(Move0, activeTarget0.id, enemyPkm.id)
        } else {
            damageTo0 = enemyAiDamageCalc(Move1, activeTarget0.id, enemyPkm.id)
        }
        if (enemyAiDamageCalc(Move0, activeTarget1.id, enemyPkm.id) > enemyAiDamageCalc(Move1, activeTarget1.id, enemyPkm.id)) {
            damageTo1 = enemyAiDamageCalc(Move0, activeTarget1.id, enemyPkm.id)
        } else {
            damageTo1 = enemyAiDamageCalc(Move1, activeTarget1.id, enemyPkm.id)
        }
        if (damageTo0 <= damageTo1) {
            target = 1
        }
        if (enemyAiDamageCalc(Move0, vgcTeam[activeTeam[target]].id, enemyPkm.id) > enemyAiDamageCalc(Move1, vgcTeam[activeTeam[target]].id, enemyPkm.id)) {
            addTurn(enemyPkm.speed, enemyDamageCalc, [Move0, target, enemyPkm.id, FromActiveEnemy])
        } else {
            addTurn(enemyPkm.speed, enemyDamageCalc, [Move1, target, enemyPkm.id, FromActiveEnemy])
        }
    }
}
// The Numbers
function enemyAiDamageCalc(moveId, defenderID, attkerId) {
    let move = pkmMoves[moveId];
    let defender = pkm[defenderID];
    let attacker = pkm[attkerId];
    let attackStat = 0;
    let defenseStat = 0;
    if (attacker.physicalAtk > attacker.specialAtk) {
        attackStat = attacker.physicalAtk;
        defenseStat = defender.physicalDef;
    } else {
        attackStat = attacker.specialAtk;
        defenseStat = defender.specialDef;
    };
    let damage = 22 * attackStat * move.power / defenseStat;
    damage = damage / 50;
    damage += 2;
    damage = Math.floor(damage * defender.weakness[move.id][0] * 1.5);
    return damage
}
function bestCombinedAttacks(target) {
    let activeTarget = vgcTeam[activeTeam[target]]
    let enemyPkm1 = enemyVgcTeam[activeEnemy[1]]
    let enemyPkm0 = enemyVgcTeam[activeEnemy[0]]
    let bestDamageFrom0 = 0
    let bestDamageFrom1 = 0

    if (enemyPkm0.enemyHealth >= 1) {
        let Move0 = enemyPkm0.movePool[0]
        let Move1 = enemyPkm0.movePool[1]

        if (enemyAiDamageCalc(Move0, activeTarget.id, enemyPkm0.id) > enemyAiDamageCalc(Move1, activeTarget.id, enemyPkm0.id)) {
            bestDamageFrom0 = enemyAiDamageCalc(Move0, activeTarget.id, enemyPkm0.id)
        }
        else {
            bestDamageFrom0 = enemyAiDamageCalc(Move1, activeTarget.id, enemyPkm0.id)
        }
    }


    if (enemyPkm1.enemyHealth >= 1) {
        let Move0 = enemyPkm1.movePool[0]
        let Move1 = enemyPkm1.movePool[1]

        if (enemyAiDamageCalc(Move0, activeTarget.id, enemyPkm1.id) > enemyAiDamageCalc(Move1, activeTarget.id, enemyPkm1.id)) {
            bestDamageFrom1 = enemyAiDamageCalc(Move0, activeTarget.id, enemyPkm1.id)
        }
        else {
            bestDamageFrom1 = enemyAiDamageCalc(Move1, activeTarget.id, enemyPkm1.id)
        }
    }
    return bestDamageFrom0+bestDamageFrom1
}
function strongestAttackCalc(FromActiveEnemy, target) {

    let enemyPkm = enemyVgcTeam[activeEnemy[FromActiveEnemy]]
    if (enemyPkm.enemyHealth >= 1) {
        let Move0 = enemyPkm.movePool[0]
        let Move1 = enemyPkm.movePool[1]
        if (enemyAiDamageCalc(Move0, vgcTeam[activeTeam[target]].id, enemyPkm.id) > enemyAiDamageCalc(Move1, vgcTeam[activeTeam[target]].id, enemyPkm.id)) {
            return enemyAiDamageCalc(Move0, vgcTeam[activeTeam[target]].id, enemyPkm.id)
        } else {
            return enemyAiDamageCalc(Move1, vgcTeam[activeTeam[target]].id, enemyPkm.id)
        }
    }
}
function strongestTeamAttackCalc(FromActiveTeam, target) {

    let enemyPkm = vgcTeam[activeTeam[FromActiveTeam]]
    if (enemyPkm.enemyHealth >= 1) {
        let Move0 = enemyPkm.movePool[0]
        let Move1 = enemyPkm.movePool[1]
        if (enemyAiDamageCalc(Move0, vgcTeam[activeTeam[target]].id, enemyPkm.id) > enemyAiDamageCalc(Move1, vgcTeam[activeTeam[target]].id, enemyPkm.id)) {
            return enemyAiDamageCalc(Move0, enemyVgcTeam[activeEnemy[target]].id, enemyPkm.id)
        } else {
            return enemyAiDamageCalc(Move1, enemyVgcTeam[activeEnemy[target]].id, enemyPkm.id)
        }
    }
}