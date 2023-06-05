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
let floatingTeam = [2,3];
let floatingEnemy = [2, 3];
let turnStorage = [];
let move1 = 0;
let move2 = 1;
let counter = 0;
let navMenu = document.getElementById("navButtons");
let menuButton = document.getElementById("menuButton");
let gameBoyText = '';
const pkm = [{
    id: 0,
    name: "kilowattrel",
    type1: "electric",
    type2: "flying",
    img: "https://www.serebii.net/scarletviolet/pokemon/new/941.png",
    hitPoints: 70,
    physicalAtk: 70,
    physicalDef: 60,
    specialAtk: 105,
    specialDef: 60,
    speed: 8125,
    movePool: [4, 9],
    special: true,
    weakness: [[1, 'normal'], [1, 'fire'], [1, 'water'], [.5, 'grass'], [.5, 'electric'], [2, 'ice'], [.5, 'fighting'], [1, 'poison'], [0, 'ground'], [.5, 'flying'], [1, 'psychic'], [.5, 'bug'], [2, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [.5, 'steel'], [1, 'fairy']]
}, {
    id: 1,
    name: "Magneton",
    type1: "electric",
    type2: "steel",
    hitPoints: 50,
    physicalAtk: 60,
    physicalDef: 145,
    specialAtk: 120,
    specialDef: 135,
    speed: 8070,
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
    speed: 8050,
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
    speed: 8065,
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
    speed: 8100,
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
    speed: 8087,
    movePool: [6, 8],
    special: false,
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
    specialAtk: 135,
    specialDef: 120,
    speed: 8100,
    movePool: [1, 14],
    special: true,
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
    speed: 8102,
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
    speed: 8087,
    movePool: [5, 15],
    special: false,
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
    speed: 8030,
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
    speed: 8123,
    movePool: [3, 14],
    special: false,
    img: "https://www.serebii.net/scarletviolet/pokemon/new/908.png",
    weakness: [[1, 'normal'], [2, 'fire'], [.5, 'water'], [.5, 'grass'], [.5, 'electric'], [2, 'ice'], [2, 'fighting'], [2, 'poison'], [.5, 'ground'], [2, 'flying'], [0, 'psychic'], [4, 'bug'], [1, 'rock'], [.5, 'ghost'], [.5, 'dark'], [1, 'dragon'], [1, 'steel'], [2, 'fairy']]
}, {
    id: 11,
    name: "Tauros",
    type1: "fire",
    type2: "fighting",
    hitPoints: 75,
    physicalAtk: 110,
    physicalDef: 105,
    specialAtk: 30,
    specialDef: 70,
    speed: 8100,
    movePool: [1, 6],
    special: false,
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
    speed: 8110,
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
    speed: 8098,
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
    speed: 8084,
    movePool: [13, 16],
    special: true,
    img: "https://www.serebii.net/scarletviolet/pokemon/new/1000.png",
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
    speed: 8030,
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
    speed: 8080,
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
    speed: 8050,
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
    speed: 8142,
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
    speed: 8086,
    movePool: [7, 12],
    special: true,
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
    speed: 8039,
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
    speed: 8070,
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
    physicalAtk: 120,
    physicalDef: 80,
    specialAtk: 90,
    specialDef: 65,
    speed: 8135,
    movePool: [5, 14],
    special: false,
    img: "https://www.serebii.net/scarletviolet/pokemon/new/1002.png",
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
    speed: 8111,
    movePool: [0, 0],
    special: false,
    img: "https://www.serebii.net/scarletviolet/pokemon/new/925-f.png",
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
    speed: 8085,
    movePool: [1, 13],
    special: false,
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
    speed: 8050,
    movePool: [4, 6],
    special: false,
    img: "https://www.serebii.net/scarletviolet/pokemon/new/992.png",
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
    speed: 8135,
    movePool: [13, 17],
    special: true,
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
    speed: 80105,
    movePool: [10, 10],
    special: true,
    img: "https://www.serebii.net/scarletviolet/pokemon/new/956.png",
    weakness: [[1, 'normal'], [1, 'fire'], [1, 'water'], [1, 'grass'], [1, 'electric'], [1, 'ice'], [.5, 'fighting'], [1, 'poison'], [1, 'ground'], [1, 'flying'], [.5, 'psychic'], [2, 'bug'], [1, 'rock'], [2, 'ghost'], [2, 'dark'], [1, 'dragon'], [1, 'steel'], [1, 'fairy']]
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

// Figure out the weakness of your team
function genArray() {
    for (let i = 0; i < team[0].weakness.length ; i++) {
    let numberType = [0,0];
    numberType[0] = team[0].weakness[i][0] + team[1].weakness[i][0] + team[2].weakness[i][0] + team[3].weakness[i][0] + team[4].weakness[i][0] + team[5].weakness[i][0];
    numberType[1] = team[0].weakness[i][1];
    teamWeaknessArr.splice(i,1, numberType);
    }
}
function genWeakness() {
    genArray();
    for (let i = 0; i < 18 ; i++) {
        if (teamWeaknessArr[i][0]>8){
            teamWeakness.push(teamWeaknessArr[i][1]);
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

// Team building functionality
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
function addTeam(arr) {
    let typing = ''
    if (arr.type1 == arr.type2) {
        typing = `${arr.type1}`
    } else {
        typing = `${arr.type1}<span>&#47;</span>${arr.type2}`;
    }
    if (TeamMember0 === false) {
        teamOne.innerHTML = `<div class="pkm shadow vertical type1-${arr.type1}-type2-${arr.type2}">
   

        <img class="image" src="${arr.img}" alt="">

        </div>`;
        TeamMember0 = true;
        team.splice(0, 1);
        team.unshift(arr);
    } else if (TeamMember1 === false) {
        teamTwo.innerHTML = `<div class="pkm vertical shadow type1-${arr.type1}-type2-${arr.type2}">
  
        <img class="image" src="${arr.img}" alt="">

        </div>`;
        TeamMember1 = true;
        team.splice(1, 1, arr);
    } else if (TeamMember2 === false) {
        teamThree.innerHTML = `<div class="pkm shadow vertical type1-${arr.type1}-type2-${arr.type2}">
   

        <img class="image" src="${arr.img}" alt="">

        </div>`;
        TeamMember2 = true;
        team.splice(2, 1, arr);
    } else if (TeamMember3 === false) {
        teamFour.innerHTML = `<div class="pkm vertical shadow type1-${arr.type1}-type2-${arr.type2}">
   

        <img class="image" src="${arr.img}" alt="">

        </div>`;
        TeamMember3 = true;
        team.splice(3, 1, arr);
    } else if (TeamMember4 === false) {
        teamFive.innerHTML = `<div class="pkm vertical shadow type1-${arr.type1}-type2-${arr.type2}">
   

        <img class="image" src="${arr.img}" alt="">

        </div>`;
        TeamMember4 = true;
        team.splice(4, 1, arr);
    } else if (TeamMember5 === false) {
        teamSix.innerHTML = `<div class="pkm vertical shadow type1-${arr.type1}-type2-${arr.type2}">
   

        <img class="image" src="${arr.img}" alt="">

        </div>`;
        TeamMember5 = true;
        team.splice(5, 1);
        team.push(arr);
    }
}  

// functions for getting the game started
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
    document.querySelector('body').innerHTML += `<div class="btn" style="position: fixed; bottom: 0;" onclick="turn2(0)">restart turn</div>`; 
    enemyVgc();
    document.getElementById('enemyTeamViewer').innerHTML = `
    <div class="enemy" id="activeEnemy"></div>
    <div class="partner" id="activePartner"></div>`;
    document.getElementById('activeEnemy').innerHTML += `<img class="right" id="enemy0" src="${enemyVgcTeam[0].img}">`
    document.getElementById('activePartner').innerHTML += `<img class="left" id="partner0" src="${vgcTeam[0].img}">`
    document.getElementById('activeEnemy').innerHTML += `<img id="enemy1" class="right"  src="${enemyVgcTeam[1].img}">`
    document.getElementById('activePartner').innerHTML += `<img id="partner1" class="left" src="${vgcTeam[1].img}">`
    startingActiveTargets();
    turn2(0);
}
function startingActiveTargets() {
    activeEnemy = [0, 1];
    activeTeam = [0, 1];
    for (let i = 0; i < floatingEnemy.length; i++) {
        inactiveEnemy.push(floatingEnemy[i]);
        inactiveTeam.push(floatingTeam[i]);
    }
    floatingEnemy = [];
    floatingTeam = [];
}
function battleScreenUpdate() {
    /*document.getElementById('enemyTeamViewer').innerHTML = `
    <div class="enemy" id="activeEnemy"></div>
    <div class="partner" id="activePartner"></div>`;*/
    if (activeEnemy.length == 1) {
        document.getElementById('activeEnemy').innerHTML = `<img class="right" id="enemy0"  src="${enemyVgcTeam[activeEnemy[0]].img}">`
    } else {
        document.getElementById('activeEnemy').innerHTML = `<img class="right" id="enemy0"  src="${enemyVgcTeam[activeEnemy[0]].img}">`
        document.getElementById('activeEnemy').innerHTML += `<img id="enemy1" class="right" src="${enemyVgcTeam[activeEnemy[1]].img}">`
    }

    if (activeTeam.length == 1) {
        document.getElementById('activePartner').innerHTML = `<img class="left" id="partner0" src="${vgcTeam[activeTeam[0]].img}">`
    } else {
        document.getElementById('activePartner').innerHTML = `<img class="left" id="partner0" src="${vgcTeam[activeTeam[0]].img}">`
        document.getElementById('activePartner').innerHTML += `<img id="partner1" class="left" src="${vgcTeam[activeTeam[1]].img}">`
    }

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
    if (inactiveTeam[0] === true) {
        document.getElementById('teamViewer').innerHTML = `
            <h3>Who will ${pkm.name} switch with?</h3>
            <div class="moveOptions">
                <img class="pkmOpt" onclick="preSwitch(${place}, 1, addTurn(1000, switchPkm, [${place}, 1], ${place}))" src="${inactivePkm1.img}" >
            </div>
            `
    } else if (inactiveTeam[1] === true) {
        document.getElementById('teamViewer').innerHTML = `
            <h3>Who will ${pkm.name} switch with?</h3>
            <div class="moveOptions">
                <img class="pkmOpt" onclick="preSwitch(${place}, 0, addTurn(1000, switchPkm, [${place}, 0], ${place}))" src="${inactivePkm0.img}" >
            </div>
            `
    } else {
        document.getElementById('teamViewer').innerHTML = `
        <h3>Who will ${pkm.name} switch with?</h3>
        <div class="moveOptions">
            <img class="pkmOpt"  onclick="preSwitch(${place}, 0, addTurn(1000, switchPkm, [${place}, 0], ${place}))" src="${inactivePkm0.img}" >
            <img class="pkmOpt" onclick="preSwitch(${place}, 1, addTurn(1000, switchPkm, [${place}, 1], ${place}))" src="${inactivePkm1.img}" >
        </div>
        `
    }
}
function preSwitch(activePlace, inactivePlace, theFunction) {
    floatingTeam.push(activeTeam[activePlace]);
    activeTeam.splice(activePlace, 1, inactiveTeam[inactivePlace]);
    inactiveTeam.splice(inactivePlace, 1, true);
    theFunction;
}
function switchPkm(parameter) {
    let activePlace = parameter[0];
    let inactivePlace = parameter[1];
    gameBoyText += `${vgcTeam[activeTeam[activePlace]].name} switched with ${vgcTeam[inactiveTeam[inactivePlace]].name}.<br>`
    battleScreenUpdate();
}
function updateActiveTargets() {
    if (floatingEnemy.length == 2) {
        inactiveEnemy.push(floatingEnemy[0]);
        inactiveEnemy.push(floatingEnemy[1]);
    } else if (floatingEnemy.length == 1) {
        floatingEnemy.push(floatingEnemy[0]);
    }

    if (floatingTeam.length == 2) {
        inactiveTeam.push(floatingTeam[0]);
        inactiveTeam.push(floatingTeam[1]);
    } else if (floatingTeam.length == 1) {
        inactiveTeam.push(floatingTeam[0]);
    }

    floatingEnemy = [];
    floatingTeam = [];
}

// Damage functions
function targetSelector(type, pkmId) {
    let current = 0
    let typing = type;
    let pokemonName = pkmId;
    if (pokemonName == vgcTeam[activeTeam[1]].id) {current = 1 }
    document.getElementById('teamViewer').innerHTML = `
    <h3>Who will ${pkm[pokemonName].name} attack with ${pkmMoves[typing].type}</h3>
    <div class="moveOptions">
        <img onclick="addTurn(${pkm[pokemonName].speed}, damageCalc, [${typing}, 1, ${pokemonName}, ${current}], ${current}) " class="pkmOpt"  src='${enemyVgcTeam[activeEnemy[1]].img}' >
        <img onclick="addTurn(${pkm[pokemonName].speed}, damageCalc, [${typing}, 0, ${pokemonName}, ${current}], ${current})" class="pkmOpt" src="${enemyVgcTeam[activeEnemy[0]].img}" >
    </div>
    `
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
    if (vgcTeam[activeTeam[turn]].hitPoints > 0) {
        if (attacker.physicalAtk > attacker.specialAtk) {
            attackStat = attacker.physicalAtk;
            defenseStat = defender.physicalDef;
        } else {
            attackStat = attacker.specialAtk;
            defenseStat = defender.specialDef;
        };
        let damage = 22 * attackStat * move.power / defenseStat;
        damage = damage/50;
        damage += 2;
        damage = Math.floor(damage * defender.weakness[move.id][0] * 1.5);
        defender.hitPoints -= damage;
        gameBoyText += `${attacker.name} does ${damage} damage to ${defender.name}.<br>`
        if (defender.hitPoints < 0) {
            gameBoyText += `${defender.name} fainted.<br>`
        }
    }
}
function protect(arr) {
    if (arr == activeTeam[0]) {
        const list = document.getElementById('partner0').classList;
        list.add('protect');
        gameBoyText += `${vgcTeam[arr].name} protects itself from incoming damage.<br>`
    } else if (arr == activeTeam[1]) {
        const list = document.getElementById('partner1').classList;
        list.add('protect');
        gameBoyText += `${vgcTeam[arr].name} protects itself from incoming damage.<br>`
    }
}

//Turn Functionality
function deadPokemon() {
    if (enemyVgcTeam[activeEnemy[1]].hitPoints < 0) {
        activeEnemy[1] = inactiveEnemy[0];
    }
}
function turn2(activeId) {
    if (activeId == 0) {
        turnStorage = [];
        gameBoyText = ''
        updateActiveTargets();
        battleScreenUpdate();
        document.querySelector('.btn').innerHTML = "restart turn";
    }
    removeAnimation();
    if (activeId == 0) {
        const list = document.getElementById('partner0').classList;
        list.add('bounce');
    } else if (activeId == activeTeam[1]) {
        const list = document.getElementById('partner1').classList;
        list.add('bounce');
    }
    let pokemon = vgcTeam[activeTeam[activeId]];
    document.getElementById('teamViewer').innerHTML = `
    <h3>What will ${pokemon.name} do?</h3>
    <div class="moveOptions">
        <div class="btn" onclick="targetSelector(${pokemon.movePool[0]}, ${pokemon.id})">${pkmMoves[pokemon.movePool[0]].type} attack</div>
        <div class="btn" onclick="targetSelector(${pokemon.movePool[1]}, ${pokemon.id})">${pkmMoves[pokemon.movePool[1]].type} attack</div>
        <div class="btn" onclick="addTurn(2, protect, activeTeam[${activeId}], ${activeId})">protect</div>
        <div class="btn" onclick="switchOptions(activeTeam[${activeId}])">switch</div>
    </div>`
}
function addTurn(theFunction, parameter, priority, nextTurn) {
    turnStorage.push([theFunction, parameter, priority])
    if (nextTurn == 0) {
        turn2(1)
    } else {
        endTurn(1)
    }
}
function runTurnOrder() {
    turnStorage = turnStorage.sort();
    for (let i = 0; i < turnStorage.length; i++) {
        turnStorage[i][1](turnStorage[i][2])
    }
}
function endTurn(turn) {
    if (turn == 0) {
        removeAnimation();
        turn2(1)
    } else {
        removeAnimation();
        runTurnOrder();
        document.getElementById('teamViewer').innerHTML = `<p style="color: white">${gameBoyText}</p> `;
        document.querySelector('.btn').innerHTML = "next turn";

    };
}
function removeAnimation() {
    document.querySelectorAll('*').forEach((element) => {
        element.classList.remove('bounce');
    });
}
function clearProtect() {
    document.querySelectorAll('*').forEach((element) => {
        element.classList.remove('protect');
    });
}
