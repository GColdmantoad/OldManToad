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
        baseHP: 70,
        baseAtk: 70,
        baseDef: 60,
        baseSpAtk: 105,
        baseSpDef: 60,
        baseSpeed: 5125,
        type: [4, 9],
        movePool: [4, 9, 25],
        special: true,
        gif: 'img/pokemon/Kilowattrel.gif',
        weakness: [[1, 'normal'], [1, 'fire'], [1, 'water'], [.5, 'grass'], [.5, 'electric'], [2, 'ice'], [.5, 'fighting'], [1, 'poison'], [0, 'ground'], [.5, 'flying'], [1, 'psychic'], [.5, 'bug'], [2, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [.5, 'steel'], [1, 'fairy']]
    }, {
        id: 1,
        name: "Magnezone",
        type1: "electric",
        type2: "steel",
        baseHP: 70,
        baseAtk: 70,
        baseDef: 115,
        baseSpAtk: 130,
        baseSpDef: 90,
        baseSpeed: 5060,
        type: [4, 16],
        movePool: [4, 16, 25],
        special: true,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/462.png",
        gif: 'img/pokemon/462.gif',
        weakness: [[.5, 'normal'], [2, 'fire'], [1, 'water'], [.5, 'grass'], [.5, 'electric'], [.5, 'ice'], [2, 'fighting'], [0, 'poison'], [4, 'ground'], [.25, 'flying'], [.5, 'psychic'], [.5, 'bug'], [.5, 'rock'], [1, 'ghost'], [1, 'dark'], [.5, 'dragon'], [.25, 'steel'], [.5, 'fairy']]
    }, {
        id: 2,
        name: "Azumaril",
        type1: "water",
        type2: "fairy",
        baseHP: 100,
        baseAtk: 100,
        baseDef: 80,
        baseSpAtk: 60,
        baseSpDef: 80,
        baseSpeed: 5050,
        type: [2, 17],
        movePool: [20, 17, 25],
        special: true,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/184.png",
        gif: 'img/pokemon/184.gif',
        weakness: [[1, 'normal'], [.5, 'fire'], [.5, 'water'], [2, 'grass'], [2, 'electric'], [.5, 'ice'], [.5, 'fighting'], [2, 'poison'], [1, 'ground'], [1, 'flying'], [1, 'psychic'], [.5, 'bug'], [1, 'rock'], [1, 'ghost'], [.5, 'dark'], [0, 'dragon'], [1, 'steel'], [1, 'fairy']]
    }, {
        id: 3,
        name: "Scizor",
        type1: "steel",
        type2: "bug",
        baseHP: 70,
        baseAtk: 130,
        baseDef: 100,
        baseSpAtk: 55,
        baseSpDef: 80,
        baseSpeed: 5065,
        type: [11, 16],
        movePool: [11, 19, 29, 25],
        special: false,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/212.png",
        gif: 'img/pokemon/212.gif',
        weakness: [[.5, 'normal'], [4, 'fire'], [1, 'water'], [.25, 'grass'], [1, 'electric'], [.5, 'ice'], [1, 'fighting'], [0, 'poison'], [1, 'ground'], [1, 'flying'], [.5, 'psychic'], [.5, 'bug'], [1, 'rock'], [1, 'ghost'], [1, 'dark'], [.5, 'dragon'], [.5, 'steel'], [.5, 'fairy']]
    }, {
        id: 4,
        name: "Volcarona",
        type1: "fire",
        type2: "bug",
        baseHP: 85,
        baseAtk: 60,
        baseDef: 65,
        baseSpAtk: 135,
        baseSpDef: 105,
        baseSpeed: 5100,
        type: [1, 11],
        movePool: [1, 11, 28, 25],
        special: true,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/637.png",
        gif: 'img/pokemon/637.gif',
        weakness: [[1, 'normal'], [1, 'fire'], [2, 'water'], [.25, 'grass'], [1, 'electric'], [.5, 'ice'], [.5, 'fighting'], [1, 'poison'], [1, 'ground'], [2, 'flying'], [1, 'psychic'], [.5, 'bug'], [4, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [.5, 'steel'], [.5, 'fairy']]
    }, {
        id: 5,
        name: "Great Tusk",
        type1: "fighting",
        type2: "ground",
        baseHP: 115,
        baseAtk: 131,
        baseDef: 131,
        baseSpAtk: 53,
        baseSpDef: 53,
        baseSpeed: 5087,
        type: [6, 8],
        movePool: [6, 8, 29, 25],
        special: false,
        gif: 'img/pokemon/984.gif',
        img: "https://www.serebii.net/scarletviolet/pokemon/new/984.png",
        weakness: [[1, 'normal'], [1, 'fire'], [2, 'water'], [2, 'grass'], [0, 'electric'], [2, 'ice'], [1, 'fighting'], [.5, 'poison'], [1, 'ground'], [2, 'flying'], [2, 'psychic'], [.5, 'bug'], [.25, 'rock'], [1, 'ghost'], [.5, 'dark'], [1, 'dragon'], [1, 'steel'], [2, 'fairy']]
    }, {
        id: 6,
        name: "Chi-Yu",
        type1: "fire",
        type2: "dark",
        baseHP: 55,
        baseAtk: 80,
        baseDef: 80,
        baseSpAtk: 140,
        baseSpDef: 120,
        baseSpeed: 5100,
        type: [1, 14],
        movePool: [1, 14, 27, 25],
        special: true,
        gif: 'img/pokemon/1004.gif',
        img: "https://www.serebii.net/scarletviolet/pokemon/new/1004.png",
        weakness: [[1, 'normal'], [.5, 'fire'], [2, 'water'], [.5, 'grass'], [1, 'electric'], [.5, 'ice'], [2, 'fighting'], [1, 'poison'], [2, 'ground'], [1, 'flying'], [0, 'psychic'], [0, 'bug'], [2, 'rock'], [.5, 'ghost'], [.5, 'dark'], [1, 'dragon'], [.5, 'steel'], [1, 'fairy']]
    }, {
        id: 7,
        name: "Garchomp",
        type1: "dragon",
        type2: "ground",
        baseHP: 108,
        baseAtk: 130,
        baseDef: 95,
        baseSpAtk: 80,
        baseSpDef: 85,
        baseSpeed: 5102,
        type: [8, 15],
        movePool: [8, 15, 23, 25],
        special: false,
        img: "https://www.serebii.net/scarletviolet/pokemon/445.png",
        gif: 'img/pokemon/445.gif',
        weakness: [[1, 'normal'], [.5, 'fire'], [1, 'water'], [1, 'grass'], [0, 'electric'], [4, 'ice'], [1, 'fighting'], [.5, 'poison'], [1, 'ground'], [1, 'flying'], [1, 'psychic'], [1, 'bug'], [.5, 'rock'], [1, 'ghost'], [1, 'dark'], [2, 'dragon'], [1, 'steel'], [2, 'fairy']]
    }, {
        id: 8,
        name: "Baxcalibur",
        type1: "dragon",
        type2: "ice",
        baseHP: 115,
        baseAtk: 145,
        baseDef: 92,
        baseSpAtk: 75,
        baseSpDef: 86,
        baseSpeed: 5087,
        type: [5, 15],
        movePool: [5, 15, 23, 25],
        special: false,
        gif: 'img/pokemon/998.gif',
        img: "https://www.serebii.net/scarletviolet/pokemon/new/998.png",
        weakness: [[1, 'normal'], [1, 'fire'], [.5, 'water'], [.5, 'grass'], [.5, 'electric'], [1, 'ice'], [2, 'fighting'], [1, 'poison'], [1, 'ground'], [1, 'flying'], [1, 'psychic'], [1, 'bug'], [2, 'rock'], [1, 'ghost'], [1, 'dark'], [2, 'dragon'], [2, 'steel'], [2, 'fairy']]
    }, {
        id: 9,
        name: "Slowbro",
        type1: "water",
        type2: "psychic",
        baseHP: 95,
        baseAtk: 75,
        baseDef: 110,
        baseSpAtk: 100,
        baseSpDef: 80,
        baseSpeed: 5030,
        type: [2, 10],
        movePool: [2, 10, 30, 25],
        special: true,
        img: "https://www.serebii.net/swordshield/pokemon/080.png",
        gif: 'img/pokemon/80.gif',
        weakness: [[1, 'normal'], [.5, 'fire'], [.5, 'water'], [2, 'grass'], [2, 'electric'], [.5, 'ice'], [.5, 'fighting'], [1, 'poison'], [1, 'ground'], [1, 'flying'], [.5, 'psychic'], [2, 'bug'], [1, 'rock'], [2, 'ghost'], [2, 'dark'], [1, 'dragon'], [.5, 'steel'], [1, 'fairy']]
    }, {
        id: 10,
        name: "Meowscarada",
        type1: "grass",
        type2: "dark",
        baseHP: 76,
        baseAtk: 110,
        baseDef: 70,
        baseSpAtk: 81,
        baseSpDef: 70,
        baseSpeed: 5123,
        type: [3, 14],
        movePool: [22, 14, 25],
        special: false,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/908.png",
        gif: 'img/pokemon/908.gif',
        weakness: [[1, 'normal'], [2, 'fire'], [.5, 'water'], [.5, 'grass'], [.5, 'electric'], [2, 'ice'], [2, 'fighting'], [2, 'poison'], [.5, 'ground'], [2, 'flying'], [0, 'psychic'], [4, 'bug'], [1, 'rock'], [.5, 'ghost'], [.5, 'dark'], [1, 'dragon'], [1, 'steel'], [2, 'fairy']]
    }, {
        id: 11,
        name: "Tauros",
        type1: "fire",
        type2: "fighting",
        baseHP: 75,
        baseAtk: 110,
        baseDef: 105,
        baseSpAtk: 30,
        baseSpDef: 70,
        baseSpeed: 5100,
        type: [1, 6],
        movePool: [1, 6, 29, 25],
        special: false,
        gif: 'img/pokemon/128.gif',
        img: "https://www.serebii.net/scarletviolet/pokemon/new/128-b.png",
        weakness: [[1, 'normal'], [.5, 'fire'], [2, 'water'], [.5, 'grass'], [1, 'electric'], [.5, 'ice'], [1, 'fighting'], [1, 'poison'], [2, 'ground'], [2, 'flying'], [2, 'psychic'], [.25, 'bug'], [1, 'rock'], [1, 'ghost'], [.5, 'dark'], [1, 'dragon'], [.5, 'steel'], [1, 'fairy']]
    }, {
        id: 12,
        name: "Gengar",
        type1: "ghost",
        type2: "poison",
        baseHP: 60,
        baseAtk: 65,
        baseDef: 60,
        baseSpAtk: 130,
        baseSpDef: 75,
        baseSpeed: 5110,
        type: [7, 13],
        movePool: [7, 13, 27, 25],
        special: true,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/094.png",
        gif: 'img/pokemon/94.gif',
        weakness: [[0, 'normal'], [1, 'fire'], [1, 'water'], [.5, 'grass'], [1, 'electric'], [1, 'ice'], [0, 'fighting'], [.25, 'poison'], [2, 'ground'], [1, 'flying'], [2, 'psychic'], [.25, 'bug'], [1, 'rock'], [2, 'ghost'], [2, 'dark'], [1, 'dragon'], [1, 'steel'], [.5, 'fairy']]
    }, {
        id: 13,
        name: "Hydreigon",
        type1: "dragon",
        type2: "dark",
        baseHP: 92,
        baseAtk: 105,
        baseDef: 90,
        baseSpAtk: 125,
        baseSpDef: 90,
        baseSpeed: 5098,
        type: [14, 15],
        movePool: [14, 15, 27, 25],
        special: true,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/635.png",
        gif: 'img/pokemon/635.gif',
        weakness: [[1, 'normal'], [.5, 'fire'], [.5, 'water'], [.5, 'grass'], [.5, 'electric'], [2, 'ice'], [2, 'fighting'], [1, 'poison'], [0, 'ground'], [1, 'flying'], [0, 'psychic'], [2, 'bug'], [1, 'rock'], [.5, 'ghost'], [.5, 'dark'], [2, 'dragon'], [1, 'steel'], [4, 'fairy']]
    }, {
        id: 14,
        name: "Gholdengo",
        type1: "ghost",
        type2: "steel",
        baseHP: 87,
        baseAtk: 60,
        baseDef: 95,
        baseSpAtk: 133,
        baseSpDef: 91,
        baseSpeed: 5084,
        type: [13, 16],
        movePool: [13, 16, 27, 25],
        special: true,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/1000.png",
        gif: 'img/pokemon/1000.gif',
        weakness: [[0, 'normal'], [2, 'fire'], [1, 'water'], [.5, 'grass'], [1, 'electric'], [.5, 'ice'], [0, 'fighting'], [0, 'poison'], [2, 'ground'], [.5, 'flying'], [.5, 'psychic'], [.25, 'bug'], [.5, 'rock'], [2, 'ghost'], [2, 'dark'], [.5, 'dragon'], [.5, 'steel'], [.5, 'fairy']]
    }, {
        id: 15,
        name: "Slowking",
        type1: "water",
        type2: "psychic",
        baseHP: 95,
        baseAtk: 75,
        baseDef: 80,
        baseSpAtk: 100,
        baseSpDef: 110,
        baseSpeed: 5030,
        type: [2, 10],
        movePool: [2, 10, 30, 25],
        special: true,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/199.png",
        gif: 'img/pokemon/199.gif',
        weakness: [[1, 'normal'], [.5, 'fire'], [.5, 'water'], [2, 'grass'], [2, 'electric'], [.5, 'ice'], [.5, 'fighting'], [1, 'poison'], [1, 'ground'], [1, 'flying'], [.5, 'psychic'], [2, 'bug'], [1, 'rock'], [2, 'ghost'], [2, 'dark'], [1, 'dragon'], [.5, 'steel'], [1, 'fairy']]
    }, {
        id: 16,
        name: "Dragonite",
        type1: "dragon",
        type2: "flying",
        baseHP: 91,
        baseAtk: 134,
        baseDef: 95,
        baseSpAtk: 100,
        baseSpDef: 100,
        baseSpeed: 5080,
        type: [9, 15],
        movePool: [9, 15, 23, 25],
        special: false,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/149.png",
        gif: 'img/pokemon/149.gif',
        weakness: [[1, 'normal'], [.5, 'fire'], [.5, 'water'], [.25, 'grass'], [1, 'electric'], [4, 'ice'], [.5, 'fighting'], [1, 'poison'], [0, 'ground'], [1, 'flying'], [1, 'psychic'], [.5, 'bug'], [2, 'rock'], [1, 'ghost'], [1, 'dark'], [2, 'dragon'], [1, 'steel'], [2, 'fairy']]
    }, {
        id: 17,
        name: "Donphan",
        type1: "ground",
        type2: "ground",
        baseHP: 90,
        baseAtk: 120,
        baseDef: 120,
        baseSpAtk: 60,
        baseSpDef: 60,
        baseSpeed: 5050,
        type: [8, 8],
        movePool: [8, 8, 29, 25],
        special: false,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/232.png",
        gif: 'img/pokemon/232.gif',
        weakness: [[1, 'normal'], [1, 'fire'], [2, 'water'], [2, 'grass'], [0, 'electric'], [2, 'ice'], [1, 'fighting'], [.5, 'poison'], [1, 'ground'], [1, 'flying'], [1, 'psychic'], [1, 'bug'], [.5, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [1, 'steel'], [1, 'fairy']]
    }, {
        id: 18,
        name: "Dragapult",
        type1: "dragon",
        type2: "ghost",
        baseHP: 88,
        baseAtk: 120,
        baseDef: 100,
        baseSpAtk: 100,
        baseSpDef: 75,
        baseSpeed: 5142,
        type: [13, 15],
        movePool: [13, 15, 23, 25],
        special: false,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/887.png",
        gif: 'img/pokemon/887.gif',
        weakness: [[0, 'normal'], [.5, 'fire'], [.5, 'water'], [.5, 'grass'], [.5, 'electric'], [2, 'ice'], [0, 'fighting'], [.5, 'poison'], [1, 'ground'], [1, 'flying'], [1, 'psychic'], [.5, 'bug'], [1, 'rock'], [2, 'ghost'], [2, 'dark'], [2, 'dragon'], [1, 'steel'], [2, 'fairy']]
    }, {
        id: 19,
        name: "Glimmora",
        type1: "rock",
        type2: "poison",
        baseHP: 83,
        baseAtk: 55,
        baseDef: 90,
        baseSpAtk: 130,
        baseSpDef: 81,
        baseSpeed: 5086,
        type: [7, 12],
        movePool: [7, 12, 25],
        special: true,
        gif: 'img/pokemon/970.gif',
        img: "https://www.serebii.net/scarletviolet/pokemon/new/970.png",
        weakness: [[.5, 'normal'], [.5, 'fire'], [2, 'water'], [1, 'grass'], [1, 'electric'], [1, 'ice'], [1, 'fighting'], [.25, 'poison'], [4, 'ground'], [.5, 'flying'], [2, 'psychic'], [.5, 'bug'], [1, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [2, 'steel'], [.5, 'fairy']]
    }, {
        id: 20,
        name: "Gastrodon",
        type1: "water",
        type2: "ground",
        baseHP: 111,
        baseAtk: 83,
        baseDef: 68,
        baseSpAtk: 92,
        baseSpDef: 82,
        baseSpeed: 5039,
        type: [2, 8],
        movePool: [2, 8, 25],
        special: true,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/423.png",
        gif: 'img/pokemon/423.gif',
        weakness: [[1, 'normal'], [.5, 'fire'], [0, 'water'], [4, 'grass'], [0, 'electric'], [1, 'ice'], [1, 'fighting'], [.5, 'poison'], [1, 'ground'], [1, 'flying'], [1, 'psychic'], [1, 'bug'], [.5, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [.5, 'steel'], [1, 'fairy']]
    }, {
        id: 21,
        name: "Breloom",
        type1: "grass",
        type2: "fighting",
        baseHP: 60,
        baseAtk: 130,
        baseDef: 80,
        baseSpAtk: 60,
        baseSpDef: 60,
        baseSpeed: 5070,
        type: [3, 6],
        movePool: [3, 6, 29, 25],
        special: false,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/286.png",
        gif: 'img/pokemon/286.gif',
        weakness: [[1, 'normal'], [2, 'fire'], [.5, 'water'], [.5, 'grass'], [.5, 'electric'], [2, 'ice'], [1, 'fighting'], [2, 'poison'], [.5, 'ground'], [4, 'flying'], [2, 'psychic'], [1, 'bug'], [.5, 'rock'], [1, 'ghost'], [.5, 'dark'], [1, 'dragon'], [1, 'steel'], [2, 'fairy']]
    }, {
        id: 22,
        name: "Chein-Pao",
        type1: "ice",
        type2: "dark",
        baseHP: 80,
        baseAtk: 135,
        baseDef: 80,
        baseSpAtk: 90,
        baseSpDef: 65,
        baseSpeed: 5135,
        type: [5, 14],
        movePool: [5, 14, 26, 25],
        special: false,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/1002.png",
        gif: 'img/pokemon/1002.gif',
        weakness: [[1, 'normal'], [2, 'fire'], [.5, 'water'], [1, 'grass'], [1, 'electric'], [.5, 'ice'], [4, 'fighting'], [1, 'poison'], [1, 'ground'], [1, 'flying'], [0, 'psychic'], [2, 'bug'], [2, 'rock'], [.5, 'ghost'], [.5, 'dark'], [1, 'dragon'], [2, 'steel'], [2, 'fairy']]
    }, {
        id: 23,
        name: "Maushold",
        type1: "normal",
        type2: "normal",
        baseHP: 74,
        baseAtk: 75,
        baseDef: 70,
        baseSpAtk: 65,
        baseSpDef: 75,
        baseSpeed: 5111,
        type: [0, 0],
        movePool: [0, 0, 25],
        special: false,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/925-f.png",
        gif: 'img/pokemon/925.gif',
        weakness: [[1, 'normal'], [1, 'fire'], [1, 'water'], [1, 'grass'], [1, 'electric'], [1, 'ice'], [2, 'fighting'], [1, 'poison'], [1, 'ground'], [1, 'flying'], [1, 'psychic'], [1, 'bug'], [1, 'rock'], [0, 'ghost'], [1, 'dark'], [1, 'dragon'], [1, 'steel'], [1, 'fairy']]
    }, {
        id: 24,
        name: "Ceruledge",
        type1: "ghost",
        type2: "fire",
        baseHP: 75,
        baseAtk: 125,
        baseDef: 80,
        baseSpAtk: 60,
        baseSpDef: 100,
        baseSpeed: 5085,
        type: [1, 13],
        movePool: [1, 13, 26, 25],
        special: false,
        gif: 'img/pokemon/937.gif',
        img: "https://www.serebii.net/scarletviolet/pokemon/new/937.png",
        weakness: [[0, 'normal'], [0, 'fire'], [2, 'water'], [.5, 'grass'], [1, 'electric'], [.5, 'ice'], [0, 'fighting'], [.5, 'poison'], [2, 'ground'], [1, 'flying'], [1, 'psychic'], [.25, 'bug'], [2, 'rock'], [2, 'ghost'], [2, 'dark'], [1, 'dragon'], [.5, 'steel'], [.5, 'fairy']]
    }, {
        id: 25,
        name: "Iron Hands",
        type1: "electric",
        type2: "fighting",
        baseHP: 154,
        baseAtk: 140,
        baseDef: 108,
        baseSpAtk: 50,
        baseSpDef: 68,
        baseSpeed: 5050,
        type: [4, 6],
        movePool: [4, 6, 29, 25],
        special: false,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/992.png",
        gif: 'img/pokemon/992.gif',
        weakness: [[1, 'normal'], [1, 'fire'], [1, 'water'], [1, 'grass'], [.5, 'electric'], [1, 'ice'], [1, 'fighting'], [1, 'poison'], [2, 'ground'], [1, 'flying'], [2, 'psychic'], [.5, 'bug'], [.5, 'rock'], [1, 'ghost'], [.5, 'dark'], [1, 'dragon'], [.5, 'steel'], [2, 'fairy']]
    }, {
        id: 26,
        name: "Flutter Mane",
        type1: "ghost",
        type2: "fairy",
        baseHP: 55,
        baseAtk: 55,
        baseDef: 55,
        baseSpAtk: 135,
        baseSpDef: 135,
        baseSpeed: 5135,
        type: [13, 17],
        movePool: [13, 17, 25],
        special: true,
        gif: 'img/pokemon/987.gif',
        img: "https://www.serebii.net/scarletviolet/pokemon/new/987.png",
        weakness: [[0, 'normal'], [1, 'fire'], [1, 'water'], [1, 'grass'], [1, 'electric'], [1, 'ice'], [0, 'fighting'], [1, 'poison'], [1, 'ground'], [1, 'flying'], [1, 'psychic'], [.25, 'bug'], [1, 'rock'], [2, 'ghost'], [1, 'dark'], [0, 'dragon'], [2, 'steel'], [1, 'fairy']]
    }, {
        id: 27,
        name: "Espathra",
        type1: "psychic",
        type2: "psychic",
        baseHP: 95,
        baseAtk: 60,
        baseDef: 60,
        baseSpAtk: 101,
        baseSpDef: 60,
        baseSpeed: 5105,
        type: [10, 10],
        movePool: [10, 10, 30, 25],
        special: true,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/956.png",
        gif: 'img/pokemon/956.gif',
        weakness: [[1, 'normal'], [1, 'fire'], [1, 'water'], [1, 'grass'], [1, 'electric'], [1, 'ice'], [.5, 'fighting'], [1, 'poison'], [1, 'ground'], [1, 'flying'], [.5, 'psychic'], [2, 'bug'], [1, 'rock'], [2, 'ghost'], [2, 'dark'], [1, 'dragon'], [1, 'steel'], [1, 'fairy']]
    }, {
        id: 28,
        name: "Glastrier",
        type1: "ice",
        type2: "ice",
        baseHP: 100,
        baseAtk: 145,
        baseDef: 130,
        baseSpAtk: 65,
        baseSpDef: 110,
        baseSpeed: 5030,
        type: [5, 5],
        movePool: [5, 5, 26, 25],
        special: false,
        img: "https://www.serebii.net/swordshield/pokemon/896.png",
        gif: 'img/pokemon/896.gif',
        weakness: [[1, 'normal'], [2, 'fire'], [1, 'water'], [1, 'grass'], [1, 'electric'], [.5, 'ice'], [2, 'fighting'], [1, 'poison'], [1, 'ground'], [1, 'flying'], [1, 'psychic'], [1, 'bug'], [2, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [2, 'steel'], [1, 'fairy']]
    }, {
        id: 29,
        name: "Rillaboom",
        type1: "grass",
        type2: "grass",
        baseHP: 100,
        baseAtk: 125,
        baseDef: 90,
        baseSpAtk: 60,
        baseSpDef: 70,
        baseSpeed: 5085,
        type: [3, 3],
        movePool: [3, 3, 29, 25],
        special: false,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/812.png",
        gif: 'img/pokemon/812.gif',
        weakness: [[1, 'normal'], [2, 'fire'], [.5, 'water'], [.5, 'grass'], [.5, 'electric'], [2, 'ice'], [1, 'fighting'], [2, 'poison'], [.5, 'ground'], [2, 'flying'], [1, 'psychic'], [2, 'bug'], [1, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [1, 'steel'], [1, 'fairy']]
    }, {
        id: 30,
        name: "Cresselia",
        type1: "psychic",
        type2: "psychic",
        baseHP: 120,
        baseAtk: 25,
        baseDef: 110,
        baseSpAtk: 75,
        baseSpDef: 120,
        baseSpeed: 5085,
        type: [10, 10],
        movePool: [10, 10, 30, 25],
        special: true,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/488.png",
        gif: 'img/pokemon/488.gif',
        weakness: [[1, 'normal'], [1, 'fire'], [1, 'water'], [1, 'grass'], [1, 'electric'], [1, 'ice'], [.5, 'fighting'], [1, 'poison'], [0, 'ground'], [1, 'flying'], [.5, 'psychic'], [2, 'bug'], [1, 'rock'], [2, 'ghost'], [2, 'dark'], [1, 'dragon'], [1, 'steel'], [1, 'fairy']]
    }, {
        id: 31,
        name: "Regieleki",
        type1: "electric",
        type2: "electric",
        baseHP: 80,
        baseAtk: 100,
        baseDef: 50,
        baseSpAtk: 130,
        baseSpDef: 50,
        baseSpeed: 5200,
        type: [4, 4],
        movePool: [4, 4, 25],
        special: true,
        img: "https://www.serebii.net/swordshield/pokemon/894.png",
        gif: 'img/pokemon/894.gif',
        weakness: [[1, 'normal'], [1, 'fire'], [1, 'water'], [1, 'grass'], [.5, 'electric'], [1, 'ice'], [1, 'fighting'], [1, 'poison'],
        [2, 'ground'], [.5, 'flying'], [1, 'psychic'], [1, 'bug'], [1, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [.5, 'steel'], [1, 'fairy']]
    }, {
        id: 32,
        name: "Amoonguss",
        type1: "grass",
        type2: "poison",
        baseHP: 114,
        baseAtk: 85,
        baseDef: 70,
        baseSpAtk: 86,
        baseSpDef: 80,
        baseSpeed: 5030,
        movePool: [3, 7, 25],
        type: [3, 7],
        special: true,
        img: "https://www.serebii.net/swordshield/pokemon/591.png",
        gif: 'img/pokemon/amoonguss.gif',
        weakness: [[1, 'normal'], [2, 'fire'], [.5, 'water'], [.25, 'grass'], [.5, 'electric'], [2, 'ice'], [.5, 'fighting'], [1, 'poison'],
        [1, 'ground'], [2, 'flying'], [2, 'psychic'], [1, 'bug'], [1, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [1, 'steel'], [.5, 'fairy']]
    }, {
        id: 33,
        name: "Rapid Urshifu",
        type1: "water",
        type2: "fighting",
        baseHP: 100,
        baseAtk: 130,
        baseDef: 100,
        baseSpAtk: 86,
        baseSpDef: 60,
        baseSpeed: 5097,
        type: [2, 6],
        movePool: [21, 6, 26, 25],
        special: false,
        img: "https://www.serebii.net/swordshield/pokemon/892-r.png",
        gif: 'img/pokemon/892-r.gif',
        weakness: [[1, 'normal'], [.5, 'fire'], [.5, 'water'], [2, 'grass'], [2, 'electric'], [.5, 'ice'], [1, 'fighting'], [1, 'poison'],
        [1, 'ground'], [2, 'flying'], [2, 'psychic'], [.5, 'bug'], [.5, 'rock'], [1, 'ghost'], [.5, 'dark'], [1, 'dragon'], [.5, 'steel'], [2, 'fairy']]
    }, {
        id: 34,
        name: "Zapdos",
        type1: "electric",
        type2: "flying",
        baseHP: 90,
        baseAtk: 90,
        baseDef: 90,
        baseSpAtk: 125,
        baseSpDef: 90,
        baseSpeed: 5100,
        type: [4, 9],
        movePool: [4, 9, 25],
        special: true,
        img: "https://www.serebii.net/Shiny/SV/new/145.png",
        gif: 'img/pokemon/145.gif',
        weakness: [[1, 'normal'], [1, 'fire'], [1, 'water'], [.5, 'grass'], [1, 'electric'], [2, 'ice'], [.5, 'fighting'], [1, 'poison'],
        [0, 'ground'], [.5, 'flying'], [1, 'psychic'], [.5, 'bug'], [2, 'rock'], [1, 'ghost'], [1, 'dark'], [1, 'dragon'], [.5, 'steel'], [1, 'fairy']]
    }, {
        id: 35,
        name: "Heatran",
        type1: "fire",
        type2: "steel",
        baseHP: 91,
        baseAtk: 90,
        baseDef: 106,
        baseSpAtk: 130,
        baseSpDef: 106,
        baseSpeed: 5077,
        type: [1, 16],
        movePool: [1, 16, 25],
        special: true,
        img: "https://www.serebii.net/Shiny/SV/new/485.png",
        gif: 'img/pokemon/485.gif',
        weakness: [[.5, 'normal'], [0, 'fire'], [2, 'water'], [.25, 'grass'], [1, 'electric'], [.25, 'ice'], [2, 'fighting'], [0, 'poison'],
        [4, 'ground'], [.5, 'flying'], [.5, 'psychic'], [.25, 'bug'], [1, 'rock'], [1, 'ghost'], [1, 'dark'], [.5, 'dragon'], [.25, 'steel'], [.25, 'fairy']]
    }, {
        id: 36,
        name: "Tinkaton",
        type1: "steel",
        type2: "fairy",
        baseHP: 85,
        baseAtk: 75,
        baseDef: 77,
        baseSpAtk: 70,
        baseSpDef: 105,
        baseSpeed: 5094,
        type: [16, 17],
        movePool: [16, 17, 25],
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
        baseHP: 155,
        baseAtk: 110,
        baseDef: 125,
        baseSpAtk: 55,
        baseSpDef: 95,
        baseSpeed: 5045,
        type: [8, 14],
        movePool: [8, 14, 29, 25],
        special: false,
        img: "https://www.serebii.net/scarletviolet/pokemon/new/1003.png",
        gif: 'img/pokemon/1003.gif',
        weakness: [[1, 'normal'], [1, 'fire'], [2, 'water'], [2, 'grass'], [0, 'electric'], [2, 'ice'], [2, 'fighting'], [.5, 'poison'],
        [1, 'ground'], [1, 'flying'], [0, 'psychic'], [2, 'bug'], [.5, 'rock'], [.5, 'ghost'], [.5, 'dark'], [1, 'dragon'], [1, 'steel'], [2, 'fairy']]
    }

]
const typeList = [
    {
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
        power: 80,
        accuracy: 100,
    }, {
        id: 18,
        type: 'spore',
        power: 0,
        accuracy: 100,
    }
];
const pkmMoves = [
    {
        id: 0,
        name: "normal",
        power: 80,
        accuracy: 100,
        type: 0,
        priority: 50000,
        alwaysCrits: false,
        function: 'damageCalc',
        target: 2
    }, {
        id: 1,
        name: "fire",
        power: 80,
        alwaysCrits: false,
        accuracy: 100,
        type: 1,
        priority: 50000,
        function: 'damageCalc',
        target: 2
    }, {
        id: 2,
        name: "water",
        power: 80,
        alwaysCrits: false,
        accuracy: 100,
        type: 2,
        priority: 50000,
        function: 'damageCalc',
        target: 2
    }, {
        id: 3,
        name: "grass",
        power: 80,
        alwaysCrits: false,
        accuracy: 100,
        type: 3,
        priority: 50000,
        function: 'damageCalc',
        target: 2
    }, {
        id: 4,
        name: "electric",
        power: 80,
        alwaysCrits: false,
        accuracy: 100,
        type: 4,
        priority: 50000,
        function: 'damageCalc',
        target: 2
    }, {
        id: 5,
        name: "ice",
        power: 80,
        alwaysCrits: false,
        accuracy: 100,
        type: 5,
        priority: 50000,
        function: 'damageCalc',
        target: 2
    }, {
        id: 6,
        name: "fighting",
        power: 80,
        alwaysCrits: false,
        accuracy: 100,
        type: 6,
        priority: 50000,
        function: 'damageCalc',
        target: 2
    }, {
        id: 7,
        name: "poison",
        power: 80,
        alwaysCrits: false,
        accuracy: 100,
        type: 7,
        priority: 50000,
        function: 'damageCalc',
        target: 2
    }, {
        id: 8,
        name: "ground",
        power: 80,
        alwaysCrits: false,
        accuracy: 100,
        type: 8,
        priority: 50000,
        function: 'damageCalc',
        target: 2
    }, {
        id: 9,
        name: "flying",
        power: 80,
        alwaysCrits: false,
        accuracy: 100,
        type: 9,
        priority: 50000,
        function: 'damageCalc',
        target: 2
    }, {
        id: 10,
        name: "psychic",
        power: 80,
        alwaysCrits: false,
        accuracy: 100,
        type: 10,
        priority: 50000,
        function: 'damageCalc',
        target: 2
    }, {
        id: 11,
        name: "bug",
        power: 80,
        alwaysCrits: false,
        accuracy: 100,
        type: 11,
        priority: 50000,
        function: 'damageCalc',
        target: 2
    }, {
        id: 12,
        name: "rock",
        power: 80,
        alwaysCrits: false,
        accuracy: 100,
        type: 12,
        priority: 50000,
        function: 'damageCalc',
        target: 2
    }, {
        id: 13,
        name: "ghost",
        power: 80,
        alwaysCrits: false,
        accuracy: 100,
        type: 13,
        priority: 50000,
        function: 'damageCalc',
        target: 2
    }, {
        id: 14,
        name: "dark",
        power: 80,
        alwaysCrits: false,
        accuracy: 100,
        type: 14,
        priority: 50000,
        function: 'damageCalc',
        target: 2
    }, {
        id: 15,
        name: "dragon",
        power: 80,
        alwaysCrits: false,
        accuracy: 100,
        type: 15,
        priority: 50000,
        function: 'damageCalc',
        target: 2
    }, {
        id: 16,
        name: "steel",
        power: 80,
        alwaysCrits: false,
        accuracy: 100,
        type: 16,
        priority: 50000,
        function: 'damageCalc',
        target: 2
    }, {
        id: 17,
        name: "fairy",
        power: 80,
        alwaysCrits: false,
        accuracy: 100,
        type: 17,
        priority: 50000,
        function: 'damageCalc',
        target: 2
    }, {
        id: 18,
        name: 'spore',
        power: 0,
        accuracy: 100,
        priority: 50000,
        type: 3,
        alwaysCrits: false,
        target: 2
    }, {
        id: 19,
        name: 'bullet punch',
        power: 60,
        accuracy: 100,
        priority: 60000,
        type: 16,
        alwaysCrits: false,
        function: 'damageCalc',
        target: 2
    }, {
        id: 20,
        name: 'aqua jet',
        power: 40,
        accuracy: 100,
        priority: 60000,
        type: 2,
        alwaysCrits: false,
        function: 'damageCalc',
        target: 2
    }, {
        id: 21,
        name: 'surging strikes',
        power: 75,
        accuracy: 100,
        priority: 50000,
        type: 2,
        function: 'damageCalc',
        alwaysCrits: true,
        target: 2
    }, {
        id: 22,
        name: 'flower trick',
        power: 70,
        accuracy: 100,
        priority: 50000,
        type: 3,
        alwaysCrits: true,
        function: 'damageCalc',
        target: 2
    }, {
        id: 23,
        name: 'dragon dance',
        power: 0,
        accuracy: 100,
        priority: 50000,
        type: 15,
        alwaysCrits: false,
        function: 'dragonDance',
        target: 0
    }, {
        id: 24,
        name: 'earthquake',
        power: 100,
        accuracy: 100,
        priority: 80000,
        type: 0,
        alwaysCrits: false,
        function: 'protect',
        target: 3
    }, {
        id: 25,
        name: 'dodge',
        power: 0,
        accuracy: 100,
        priority: 80000,
        type: 0,
        alwaysCrits: false,
        function: 'protect',
        target: 0
    }, {
        id: 26,
        name: 'swords dance',
        power: 0,
        accuracy: 100,
        priority: 50000,
        type: 15,
        alwaysCrits: false,
        function: 'swordsDance',
        target: 0
    }, {
        id: 27,
        name: 'nasty plot',
        power: 0,
        accuracy: 100,
        priority: 50000,
        type: 15,
        alwaysCrits: false,
        function: 'nastyPlot',
        target: 0
    }, {
        id: 28,
        name: 'quiver dance',
        power: 0,
        accuracy: 100,
        priority: 50000,
        type: 11,
        alwaysCrits: false,
        function: 'quiverDance',
        target: 0
    }, {
        id: 29,
        name: 'bulk up',
        power: 0,
        accuracy: 100,
        priority: 50000,
        type: 6,
        alwaysCrits: false,
        function: 'bulkUp',
        target: 0
    }, {
        id: 30,
        name: 'calm mind',
        power: 0,
        accuracy: 100,
        priority: 50000,
        type: 10,
        alwaysCrits: false,
        function: 'calmMind',
        target: 0
    }
]
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
    teamOne.innerHTML = `<img class="image" src="img/pokeball.png">`;
    teamTwo.innerHTML = `<img class="image" src="img/pokeball.png">`;
    teamThree.innerHTML = `<img class="image" src="img/pokeball.png">`;
    teamFour.innerHTML = `<img class="image" src="img/pokeball.png">`;
    teamFive.innerHTML = `<img class="image" src="img/pokeball.png">`;
    teamSix.innerHTML = `<img class="image" src="img/pokeball.png">`;
}
function removeTeamOne() {
    TeamMember0 = false;
    teamOne.innerHTML = `<img class="image" src="img/pokeball.png">`;
    team.splice(0, 1);
    team.unshift(0);
    teamWeakness = [];
    teamWeaknessArr = [];
    targetWeakness.innerHTML = `what is your team weak against?`;
}
function removeTeamTwo() {
    TeamMember1 = false;
    teamTwo.innerHTML = `<img class="image" src="img/pokeball.png">`;
    team.splice(1, 1, 0);
    teamWeakness = [];
    teamWeaknessArr = [];
    targetWeakness.innerHTML = `what is your team weak against?`;
}
function removeTeamThree() {
    TeamMember2 = false;
    teamThree.innerHTML = `<img class="image" src="img/pokeball.png">`;
    team.splice(2, 1, 0);
    teamWeakness = [];
    teamWeaknessArr = [];
    targetWeakness.innerHTML = `what is your team weak against?`;
}
function removeTeamFour() {
    TeamMember3 = false;
    teamFour.innerHTML = `<img class="image" src="img/pokeball.png">`;
    team.splice(3, 1, 0);
    teamWeakness = [];
    teamWeaknessArr = [];
    targetWeakness.innerHTML = `what is your team weak against?`;
}
function removeTeamFive() {
    TeamMember4 = false;
    teamFive.innerHTML = `<img class="image" src="img/pokeball.png">`;
    team.splice(4, 1, 0);
    teamWeakness = [];
    teamWeaknessArr = [];
    targetWeakness.innerHTML = `what is your team weak against?`;
}
function removeTeamSix() {
    TeamMember5 = false;
    teamSix.innerHTML = `<img class="image" src="img/pokeball.png">`;
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
    document.querySelector('#pkmCardViewer').innerHTML = ``
    let weaknessList = ''
    let resistList = ''
    let typing = ''
    document.querySelector('#pkmCardViewer').innerHTML = `
     <div class="row space-between" id="nameType"></div>

        <div class="cardImage row center dataPill" id="cardImangeGoesHere"></div>
        <div class="mt-10">
            <div id="baseStats">
            </div>
            <div class="row space-around mt-10">
                <div class="colomn">
                    <div class="centerText">weakness</div>        
                    <div class="row lineHeight">                
                        <div class="row typeList" id="weaknessList">      
                        </div>
                    </div>
                </div>   
                <div class="colomn">
                    <div class="centerText">resist</div>        
                    <div class="row lineHeight">                
                        <div class="row typeList" id="resistList">
                        </div>                       
                    </div>            
                </div>
            </div>
        </div>
 
        <div class="dataPill baseStats cardButton" style="left: 0;" onclick="addTeam(pkm[${id}])">add to team</div>

    `
    for (let i = 0; i < 18; i++) {
        if (pkm[id].weakness[i][0] >= 2) {
            weaknessList += `                    
            <div class="smallerTypingIcon flex">
                <img class="image" src="img/${pkm[id].weakness[i][1]}.png" alt="">
            </div>`
        }
    }
    document.querySelector('#weaknessList').innerHTML += weaknessList

    for (let i = 0; i < 18; i++) {
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
                        <div>attack: ${pkm[id].baseAtk}</div>
                        <div>deffence: ${pkm[id].baseDef}</div>
                    </div>
                    <div>
                        <div>specail attack: ${pkm[id].baseSpAtk}</div>
                        <div>special deffence: ${pkm[id].baseSpDef}</div>
                    </div>
                </div>

                <div class="row baseStats center mt-10" id="baseSpeed">speed: ${pkm[id].baseSpeed - 5000}</div>
    `
    document.querySelector('#cardImangeGoesHere').innerHTML = `<img class="image" src="${image}">`
    if (pkm[id].type1 == pkm[id].type2) {
        typing = `<div class="hitPoints typingIcon">
                    <img class="image" src="img/${pkm[id].type1}.png" alt="">
                </div>`
    } else {
        typing = `                <div class="hitPoints typingIcon">
                    <img class="image" src="img/${pkm[id].type1}.png" alt="">
                </div>
                <div class=" hitPoints typingIcon">
                    <img class="image" src="img/${pkm[id].type2}.png" alt="">
                </div>`
    }
    let background = `type1-${pkm[id].type1}-type2-${pkm[id].type2}`
    document.querySelector('#pkmCardViewer').className = ''
    document.querySelector('#pkmCardViewer').classList.add(background, 'pkmCard')
    document.querySelector('#nameType').innerHTML = `
                <div class="title ml-10">${pkm[id].name}</div>
            <div class="title mr-10 row">
                <div class="hitPoints flex">HP: ${pkm[id].baseHP}</div>
                ${typing}
            </div>
    `
}
function pkmCardLive(location, friendOrFoe) {

    let pkm = {}
    if (friendOrFoe == 1) {
        pkm = enemyVgcTeam[activeEnemy[location]]
    } else {
        pkm = vgcTeam[activeTeam[location]]
    }
    let image = ''
    if (pkm.gif) {
        image = pkm.gif
    } else {
        image = pkm.img
    }
    document.querySelector('#pkmCardViewer').innerHTML = ``
    let weaknessList = ''
    let resistList = ''
    let typing = ''
    document.querySelector('#pkmCardViewer').innerHTML = `
    <div class="row space-between" id="nameType"></div>

    <div class="cardImage row center dataPill" id="cardImangeGoesHere"></div>
    <div class="">
        <div class='mt-10' id="baseStats">
        </div>
        <div class="row space-around mt-10">
            <div class="colomn">
                <div class="centerText">weakness</div>        
                <div class="row lineHeight">                
                    <div class="mr-10 row typeList" id="weaknessList">      
                    </div>
                </div>
            </div>   
            <div class="colomn">
                <div class="centerText">resist</div>        
                <div class="row lineHeight">                
                    <div class="mr-10 row typeList" id="resistList">
                    </div>                       
                </div>            
            </div>
        </div>
    </div>


`
    for (let i = 0; i < 18; i++) {
        if (pkm.weakness[i][0] >= 2) {
            weaknessList += `                    
        <div class="smallerTypingIcon flex">
            <img class="image" src="img/${pkm.weakness[i][1]}.png" alt="">
        </div>`
        }
    }
    document.querySelector('#weaknessList').innerHTML += weaknessList

    for (let i = 0; i < 18; i++) {
        if (pkm.weakness[i][0] <= .5) {
            resistList += `                    
        <div class="smallerTypingIcon flex">
            <img class="image" src="img/${pkm.weakness[i][1]}.png" alt="">
        </div>`
        }
    }
    document.querySelector('#resistList').innerHTML += resistList
    let realspeed = pkm.liveSpeed - 5000
    let speed = realspeed * pkm.boostSpeed[0]/pkm.boostSpeed[1]

    document.querySelector('#baseStats').innerHTML = `
    <div class=" row center">Current stats</div>
            <div class="row baseStats space-between">
                <div>
                    <div>attack: ${pkm.liveAtk * pkm.boostAtk[0] / pkm.boostAtk[1]}</div>
                    <div>deffence: ${pkm.liveDef * pkm.boostDef[0] / pkm.boostDef[1]}</div>
                </div>
                <div>
                    <div>specail attack: ${pkm.liveSpAtk * pkm.boostSpAtk[0] / pkm.boostSpAtk[1]}</div>
                    <div>special deffence: ${pkm.liveSpDef * pkm.boostSpDef[0] / pkm.boostSpDef[1]}</div>
                </div>
            </div>

            <div class="row baseStats center mt-10" id="baseSpeed">speed: ${speed}</div>
`
    document.querySelector('#cardImangeGoesHere').innerHTML = `<img class="image" src="${image}">`
    if (pkm.type1 == pkm.type2) {
        typing = `<div class="typingIcon">
                <img class="image" src="img/${pkm.type1}.png" alt="">
            </div>`
    } else {
        typing = `                <div class="typingIcon hitPoints">
                <img class="image" src="img/${pkm.type1}.png" alt="">
            </div>
            <div class="typingIcon hitPoints">
                <img class="image" src="img/${pkm.type2}.png" alt="">
            </div>`
    }
    let background = `type1-${pkm.type1}-type2-${pkm.type2}`
    document.querySelector('#pkmCardViewer').className = ''
    document.querySelector('#pkmCardViewer').classList.add(background, 'pkmCard')
    document.querySelector('#nameType').innerHTML = `
            <div class="title ml-10">${pkm.name}</div>
        <div class="title mr-10 row">
            <div class="flex">HP: ${pkm.liveHealth}</div>
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
        const json = JSON.stringify(arr);
        vgcTeam[counter] = JSON.parse(json);
        counter++;
        document.getElementById(arr.id).innerHTML = `<div class='pkmOpt'>${counter}</div>`;
    }
    if (counter == 4) {
        gameTime();
    }
}
function enemyVgc() {
    let rdm = uniqueRandomNumber(4, enemyTeam.length)
    for (var i = 0; i < 4; i++) {
        const json = JSON.stringify(pkm[enemyTeam[rdm[i]].id]);
        enemyVgcTeam[i] = JSON.parse(json);
    }
}
function gameTime() {
    document.querySelector('body').innerHTML = `<div class="batttleGround" id="enemyTeamViewer"></div>    <div class="moveOptions" id="teamViewer"></div>`;
    document.querySelector('body').innerHTML += `
        <div class="btn" id='turnBtn' style="position: fixed; bottom: 0;" onclick="turn2(0)">restart turn</div>
        <div class="btn" id='infoBtn' style="position: fixed; bottom: 0; right: 0;" onclick="info()" >Info</div>
            <div id="pkmCardViewer" onclick="hideCard()"></div>
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
    document.getElementById('activeEnemy').innerHTML = ""
    if (!(activeEnemy[0] >= 4)) {
        document.getElementById('activeEnemy').innerHTML = `<img class="right" id="enemy0" onclick="pkmCardLive(0, 1)" src="${enemyVgcTeam[activeEnemy[0]].img}">`;
        healthCheck();
    }
    if (!(activeEnemy[1] >= 4)) {
        document.getElementById('activeEnemy').innerHTML += `<img class="right" id="enemy1" onclick='pkmCardLive(1, 1)' src="${enemyVgcTeam[activeEnemy[1]].img}">`
        healthCheck();
    }

    if (activeTeam.length == 1) {
        document.getElementById('activePartner').innerHTML = `<img class="left" id="partner0" onclick='pkmCardLive(0, 0)' src="${vgcTeam[activeTeam[0]].img}">`
    } else {
        document.getElementById('activePartner').innerHTML = `<img class="left" id="partner0" onclick='pkmCardLive(0, 0)' src="${vgcTeam[activeTeam[0]].img}">`
        document.getElementById('activePartner').innerHTML += `<img id="partner1" class="left" onclick='pkmCardLive(1, 0)' src="${vgcTeam[activeTeam[1]].img}">`
    }
    healthCheck()
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
    vgcTeam[activeTeam[activePlace]].boostAtk = [2, 2]
    vgcTeam[activeTeam[activePlace]].boostDef = [2, 2]
    vgcTeam[activeTeam[activePlace]].boostSpAtk = [2, 2]
    vgcTeam[activeTeam[activePlace]].boostSpDef = [2, 2]
    vgcTeam[activeTeam[activePlace]].boostSpeed = [2, 2]
    floatingTeam.splice(inactivePlace, 1, activeTeam[activePlace]);
    activeTeam.splice(activePlace, 1, inactiveTeam[inactivePlace]);
    inactiveTeam.splice(inactivePlace, 1, 4);
    battleScreenUpdate()
}
function switchEnemyPkm(parameter) {
    let activeEnemyPlace = parameter[0]
    let inactiveEnemyPlace = parameter[1]
    pleaseKeepTrackOfEnemySwitch = 4
    enemyVgcTeam[activeEnemy[activeEnemyPlace]].boostAtk = [2, 2]
    enemyVgcTeam[activeEnemy[activeEnemyPlace]].boostDef = [2, 2]
    enemyVgcTeam[activeEnemy[activeEnemyPlace]].boostSpAtk = [2, 2]
    enemyVgcTeam[activeEnemy[activeEnemyPlace]].boostSpDef = [2, 2]
    enemyVgcTeam[activeEnemy[activeEnemyPlace]].boostSpeed = [2, 2]
    gameBoyText += `${enemyVgcTeam[activeEnemy[activeEnemyPlace]].name} switched with ${enemyVgcTeam[inactiveEnemy[inactiveEnemyPlace]].name}.<br>`
    floatingEnemy.splice(inactiveEnemyPlace, 1, activeEnemy[activeEnemyPlace]);
    activeEnemy.splice(activeEnemyPlace, 1, inactiveEnemy[inactiveEnemyPlace]);
    inactiveEnemy.splice(inactiveEnemyPlace, 1, 4);

    battleScreenUpdate()
}
function deadSwitchOptions(theNowDeadPokemonsActiveSpot) {
    updateActiveTargets();
    if (inactiveTeam[1] == 7 && inactiveTeam[0] == 7 && vgcTeam[activeTeam[0]].liveHealth >= 1) {
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
        vgcTeam[i].liveHealth = vgcTeam[i].baseHP + 75
        vgcTeam[i].liveAtk = vgcTeam[i].baseAtk + 20
        vgcTeam[i].liveDef = vgcTeam[i].baseDef + 20
        vgcTeam[i].liveSpAtk = vgcTeam[i].baseSpAtk + 20
        vgcTeam[i].liveSpDef = vgcTeam[i].baseSpDef + 20
        vgcTeam[i].liveSpeed = vgcTeam[i].baseSpeed + 20
        vgcTeam[i].boostAtk = [2, 2]
        vgcTeam[i].boostDef = [2, 2]
        vgcTeam[i].boostSpAtk = [2, 2]
        vgcTeam[i].boostSpDef = [2, 2]
        vgcTeam[i].boostSpeed = [2, 2]
        enemyVgcTeam[i].liveHealth = enemyVgcTeam[i].baseHP + 75
        enemyVgcTeam[i].liveAtk = enemyVgcTeam[i].baseAtk + 20
        enemyVgcTeam[i].liveDef = enemyVgcTeam[i].baseDef + 20
        enemyVgcTeam[i].liveSpAtk = enemyVgcTeam[i].baseSpAtk + 20
        enemyVgcTeam[i].liveSpDef = enemyVgcTeam[i].baseSpDef + 20
        enemyVgcTeam[i].liveSpeed = enemyVgcTeam[i].baseSpeed + 20
        enemyVgcTeam[i].boostAtk = [2, 2]
        enemyVgcTeam[i].boostDef = [2, 2]
        enemyVgcTeam[i].boostSpAtk = [2, 2]
        enemyVgcTeam[i].boostSpDef = [2, 2]
        enemyVgcTeam[i].boostSpeed = [2, 2]
        if (vgcTeam[i].eviv == 0) {
            vgcTeam[i].liveAtk += 32;
            vgcTeam[i].liveSpAtk += 32
            vgcTeam[i].liveSpeed += 32;
        }
        if (vgcTeam[i].eviv == 1) {
            vgcTeam[i].liveAtk += 32;
            vgcTeam[i].liveSpAtk += 32
            vgcTeam[i].liveHealth += 32;
        }
        if (vgcTeam[i].eviv == 2) {
            vgcTeam[i].liveHealth += 32;
            vgcTeam[i].liveSpDef += 16
            vgcTeam[i].liveDef += 16;
        }
        if (enemyVgcTeam[i].enemyEviv == 0) {
            enemyVgcTeam[i].liveAtk += 32;
            enemyVgcTeam[i].liveSpAtk += 32
            enemyVgcTeam[i].liveSpeed += 32;
        }
        if (enemyVgcTeam[i].enemyEviv == 1) {
            enemyVgcTeam[i].liveAtk += 32;
            enemyVgcTeam[i].liveSpAtk += 32
            enemyVgcTeam[i].liveHealth += 32;
        }
        if (enemyVgcTeam[i].enemyEviv == 2) {
            enemyVgcTeam[i].liveHealth += 32;
            enemyVgcTeam[i].liveSpDef += 16
            enemyVgcTeam[i].liveDef += 16;
        }
    }
}
function targetSelector(moveId, activeId) {
    let move = pkmMoves[moveId]
    let typing = move.type;
    let pkm = vgcTeam[activeTeam[activeId]];
    let realSpeed = pkm.liveSpeed - 5000
    let speedMultiplyer = realSpeed * pkm.boostSpeed[0] / pkm.boostSpeed[1]
    let priority = move.priority + speedMultiplyer + 5000
    let other = ''
    if (activeId == 0) {
        other = vgcTeam[activeTeam[1]]
    } else {
        other = vgcTeam[activeTeam[0]]
    }
    document.getElementById('teamViewer').innerHTML = `
    <h3>Who will ${pkm.name} use ${move.name} on?</h3>
    `
    if (move.target == 2) {
        if (enemyVgcTeam[activeEnemy[1]].liveHealth >= 1) {
            document.querySelector('.moveOptions').innerHTML += `
        <div class="optSelector">
            <div class="optText mt-10">HP: ${enemyVgcTeam[activeEnemy[1]].liveHealth}</div>
            <img onclick="addTurn(${priority}, ${move.function}, [${moveId}, 1, ${activeId}, 'friend'], ${activeId}) " class="optImage"  src='${enemyVgcTeam[activeEnemy[1]].img}' >
            <div class="optText mb-10">${enemyVgcTeam[activeEnemy[1]].weakness[move.type][0]} x damage</div>
        </div>
        `
        }
        if (enemyVgcTeam[activeEnemy[0]].liveHealth >= 1) {
            document.querySelector('.moveOptions').innerHTML += `
        <div class="optSelector">
            <div class="optText mt-10">HP: ${enemyVgcTeam[activeEnemy[0]].liveHealth}</div>
            <img onclick="addTurn(${priority}, ${move.function}, [${moveId}, 0, ${activeId}, 'friend'], ${activeId}) " class="optImage"  src='${enemyVgcTeam[activeEnemy[0]].img}' >
         <div class="optText mb-10">${enemyVgcTeam[activeEnemy[0]].weakness[typing][0]} x damage</div>
        </div>
        `
        }
    } else if (move.target == 1) {
        if (other.liveHealth >= 1) {
            document.querySelector('.moveOptions').innerHTML += `
        <div class="optSelector">
            <div class="optText mt-10">HP: ${other.liveHealth}</div>
            <img onclick="addTurn(${priority}, ${move.function}, [${moveId}, 0, ${activeId}, 'friend'], ${activeId}) " class="optImage"  src='${other.img}' >
        </div>
        `
        }
    } else {
        document.querySelector('.moveOptions').innerHTML += `
        <div class="optSelector">
            <div class="optText mt-10">HP: ${other.liveHealth}</div>
            <img onclick="addTurn(${priority}, ${move.function}, [${activeId}, 'friend'], ${activeId}) " class="optImage"  src='${pkm.img}' >
        </div>
        `
    }
    document.getElementById('teamViewer').innerHTML += `<div class='btn' style="position: fixed; bottom: 0; left: 0;" onclick='turn2(${activeId})'>back</div> `;

}
function damageCalc(parameter) {
    let move = pkmMoves[parameter[0]];
    let enemyLocation = parameter[1];
    let teamLocation = parameter[2];
    let friendOrFoe = parameter[3];
    let defender = ''
    let attacker = ''
    if (friendOrFoe == 'friend') {
        attacker = vgcTeam[activeTeam[teamLocation]];
        defender = enemyVgcTeam[activeEnemy[enemyLocation]];  
        if (defender.liveHealth <= 0 && enemyLocation == 1) {
            defender = enemyVgcTeam[activeEnemy[0]]
        } else if (defender.liveHealth <= 0 && enemyLocation == 0) {
            defender = enemyVgcTeam[activeEnemy[1]]
        }
    } else {
        attacker = enemyVgcTeam[activeEnemy[enemyLocation]];
        defender = vgcTeam[activeTeam[teamLocation]];
        if (defender.liveHealth <= 0 && teamLocation == 1) {
            defender = vgcTeam[activeTeam[0]]
        } else if (defender.liveHealth <= 0 && teamLocation == 0) {
            defender = vgcTeam[activeTeam[1]]
        }
    }
    let attackStat = 0;
    let defenseStat = 0;
    let critical = 1
    let atkBoost = 2
    let defBoost = 2
    let atkDebuf = 2
    let defDebuf = 2
    let stab = 1
    if (attacker.type[0] == move.type || attacker.type[1] == move.type) {
        stab = 1.5
    }
    if (move.alwaysCrits) {
        critical = 1.5;
    } else {
        if (getRandomInt(24) == 4) {
            critical = 1.5
        }
    }

    if (attacker.liveHealth >= 1) {
        if (attacker.liveAtk > attacker.liveSpAtk) {
            attackStat = attacker.liveAtk;
            defenseStat = defender.liveDef;
            atkBoost = attacker.boostAtk[0]
            atkDebuf = attacker.boostAtk[1]
            defBoost = defender.boostDef[0]
            defDebuf = defender.boostDef[1]
        } else {
            attackStat = attacker.liveSpAtk;
            defenseStat = defender.liveSpDef;
            atkBoost = attacker.boostSpAtk[0]
            atkDebuf = attacker.boostSpAtk[1]
            defBoost = defender.boostSpDef[0]
            defDebuf = defender.boostSpDef[1]
        };
        let damage = 0
        if (defender.isProtected) {
            damage = -1;
        } else if (critical > 1) {
            damage = 22 * attackStat * move.power / defenseStat / 50;
            damage += 2;
            damage = Math.floor(damage * defender.weakness[move.type][0] * critical * stab);
        } else {
            damage = 22 * attackStat * atkBoost / atkDebuf * move.power  / defenseStat * defBoost / defDebuf;
            damage = damage / 50;
            damage += 2;
            damage = Math.floor(damage * defender.weakness[move.type][0] * stab);
        }
        defender.liveHealth -= damage;
        if (friendOrFoe == 'friend') {
            if (damage == -1) {
                gameBoyText += `${attacker.name}'s attack missed!<br>`
                defender.liveHealth += damage;
            } else
                if (damage != 0) {
                    gameBoyText += `${attacker.name} used ${move.name} on the enemy ${defender.name}.<br>
                    it does ${damage} damage!<br>`
                    if (critical == 2) {
                        gameBoyText += `it's a critical hit!<br>`
                    }
                }
                else {
                    gameBoyText += `${attacker.name} used ${move.name} on the enemy ${defender.name}.<br>it doesn't effect the enemy ${defender.name}.<br>`
                }
            if (defender.liveHealth <= 0) {
                gameBoyText += `the enemy ${defender.name} fainted.<br>`
            }
        } else {
            if (damage == -1) {
                gameBoyText += `the enemy ${attacker.name}'s attack missed!<br>`
                defender.liveHealth += damage;
            } else
                if (damage != 0) {
                    gameBoyText += `the enemy ${attacker.name} used ${move.name} on ${defender.name}.<br>it does ${damage} damage!<br>`
                    if (critical == 2) {
                        gameBoyText += `it's a critical hit!'<br>`
                    }
                } else {
                    gameBoyText += `the enemy ${attacker.name} used ${move.name} on ${defender.name}.<br> it doesn't effect ${defender.name}.<br>`
                }
            if (defender.liveHealth <= 0) {
                gameBoyText += `${defender.name} fainted.<br>`
            }
        }
    } 

}

// Protect Functions
function protect(paramater) {
    let location = paramater[0]
    if (paramater[1] == 'friend') {
        let active = activeTeam[location]
        if (paramater[0] == 0) {
            if (vgcTeam[active].wasProtectUsedLastTurn == false) {
                const list = document.getElementById('partner0').classList;
                list.add('flip');
                vgcTeam[active].isProtected = true
                gameBoyText += `${vgcTeam[active].name} dodged all incoming attacks.<br>`
            } else
                if (getRandomInt(3) == 0) {
                    const list = document.getElementById('partner0').classList;
                    list.add('flip');
                    vgcTeam[active].isProtected = true
                    gameBoyText += `${vgcTeam[active].name} dodged all incoming attacks.<br>`
                } else {
                    gameBoyText += `${vgcTeam[active].name} wasn't able to dodge.<br>`
                }
        } else {
            if (vgcTeam[active].wasProtectUsedLastTurn == false) {
                const list = document.getElementById('partner1').classList;
                list.add('wobble');
                vgcTeam[active].isProtected = true
                gameBoyText += `${vgcTeam[active].name} dodged all incoming attacks.<br>`
            } else
                if (getRandomInt(3) == 0) {
                    const list = document.getElementById('partner1').classList;
                    list.add('wobble');
                    vgcTeam[active].isProtected = true
                    gameBoyText += `${vgcTeam[active].name} dodged all incoming attacks.<br>`
                } else {
                    gameBoyText += `${vgcTeam[active].name} wasn't able to dodge.<br>`
                }
        }


    } else {
        let active = activeEnemy[location]
        if (paramater[0] == 0) {
                    if (enemyVgcTeam[active].wasProtectUsedLastTurn == false) {
                        const list = document.getElementById('enemy0').classList;
                        list.add('shake');
                        enemyVgcTeam[active].isProtected = true
                        gameBoyText += `the enemy ${enemyVgcTeam[active].name} dodged all incoming attacks.<br>`
                    } else {
                        gameBoyText += `the enemy ${enemyVgcTeam[active].name} wasn't able to dodge.<br>`
                    }
                } else {
                    if (enemyVgcTeam[active].wasProtectUsedLastTurn == false) {
                        const list = document.getElementById('enemy1').classList;
                        list.add('swing');
                        enemyVgcTeam[active].isProtected = true
                        gameBoyText += `the enemy ${enemyVgcTeam[active].name} dodged all incoming attacks.<br>`
                    } else {
                        gameBoyText += `the enemy ${enemyVgcTeam[active].name} wasn't able to dodge.<br>`
                    }
                }
    }
}
function protectCheck() {
    for (let i = 0; i < vgcTeam.length; i++) {
        if (enemyVgcTeam[i].isProtected) {
            enemyVgcTeam[i].isProtected = false;
            enemyVgcTeam[i].wasProtectUsedLastTurn = true
        } else {
            enemyVgcTeam[i].wasProtectUsedLastTurn = false
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
        enemyVgcTeam[i].isProtected = false
        enemyVgcTeam[i].wasProtectUsedLastTurn = false
    }
}

// Stat boost function
function dragonDance(paramater) {
    let location = paramater[0]
    let pokemon = ''
    if (paramater[1] == 'friend') {
        pokemon = vgcTeam[activeTeam[location]]
        gameBoyText += `${pokemon.name} raised it's attack and speed!<br>`
    } else {
        pokemon = enemyVgcTeam[activeEnemy[location]]
        gameBoyText += `the enemy ${pokemon.name} raised it's attack and speed!<br>`
    }
    pokemon.boostSpeed[0] += 1
    pokemon.boostAtk[0] += 1

}
function quiverDance(paramater) {
    let location = paramater[0]
    let pokemon = ''
    if (paramater[1] == 'friend') {
        pokemon = vgcTeam[activeTeam[location]]
        gameBoyText += `${pokemon.name} raised it's Special attack, special defense and speed by one stage!<br>`
    } else {
        pokemon = enemyVgcTeam[activeEnemy[location]]
        gameBoyText += `the enemy ${pokemon.name} raised it's Special attack, special defense and speed by one stage!<br>`
    }
    pokemon.boostSpeed[0] += 1
    pokemon.boostSpAtk[0] += 1
    pokemon.boostSpDef[0] += 1
}
function swordsDance(paramater) {
    let location = paramater[0]
    let pokemon = ''
    if (paramater[1] == 'friend') {
        pokemon = vgcTeam[activeTeam[location]]
        gameBoyText += `${pokemon.name} raised it's attack by two stages!<br>`
    } else {
        pokemon = enemyVgcTeam[activeEnemy[location]]
        gameBoyText += `the enemy ${pokemon.name} raised it's attack by two stages!<br>`
    }
    pokemon.boostAtk[0] += 2
}
function bulkUp(paramater) {
    let location = paramater[0]
    let pokemon = ''
    if (paramater[1] == 'friend') {
        pokemon = vgcTeam[activeTeam[location]]
        gameBoyText += `${pokemon.name} raised it's attack and defense by one stage!<br>`
    } else {
        pokemon = enemyVgcTeam[activeEnemy[location]]
        gameBoyText += `the enemy ${pokemon.name} raised it's attack and defense by one stage!<br>`
    }
    pokemon.boostDef[0] += 1
    pokemon.boostAtk[0] += 1
}
function nastyPlot(paramater) {
    let location = paramater[0]
    let pokemon = ''
    if (paramater[1] == 'friend') {
        pokemon = vgcTeam[activeTeam[location]]
        gameBoyText += `${pokemon.name} raised it's special attack by two stages!<br>`
    } else {
        pokemon = enemyVgcTeam[activeEnemy[location]]
        gameBoyText += `the enemy ${pokemon.name} raised it's special attack by two stages!<br>`
    }
    pokemon.boostSpAtk[0] += 2
}
function calmMind(paramater) {
    let location = paramater[0]
    let pokemon = ''
    if (paramater[1] == 'friend') {
        pokemon = vgcTeam[activeTeam[location]]
        gameBoyText += `${pokemon.name} raised it's special attack and special defense by one stage!<br>`
    } else {
        pokemon = enemyVgcTeam[activeEnemy[location]]
        gameBoyText += `the enemy ${pokemon.name} raised it's special attack and special defense by one stage!<br>`
    }
    pokemon.boostSpAtk[0] += 1
    pokemon.boostSpDef[0] += 1
}

//Turn Functionality
function deadPokemon() {
    if (enemyVgcTeam[activeEnemy[0]].liveHealth <= 0) {
        if (inactiveEnemy[0] != 7) {
            activeEnemy.splice(0, 1, inactiveEnemy[0])
            inactiveEnemy.splice(0, 1, 7)
        } else if (inactiveEnemy[1] != 7) {
            activeEnemy.splice(0, 1, inactiveEnemy[1])
            inactiveEnemy.splice(1, 1, 7)
        }
    }
    if (enemyVgcTeam[activeEnemy[1]].liveHealth <= 0) {
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
    if (inactiveTeam[1] == 7 && inactiveTeam[0] == 7 && vgcTeam[activeTeam[0]].liveHealth <= 0) {
        turn2(1)
    } else if (inactiveTeam[1] == 7 && inactiveTeam[0] == 7 && vgcTeam[activeTeam[1]].liveHealth <= 0) {
        turn2(0)
    } else if (vgcTeam[activeTeam[0]].liveHealth <= 0) {
        deadSwitchOptions(0);
    } else if (vgcTeam[activeTeam[1]].liveHealth <= 0) {
        deadSwitchOptions(1);
    } else {
        turn2(0)
    }
}
function healthCheck() {
    if (document.querySelector('#enemy0') != null) {
        if (enemyVgcTeam[activeEnemy[0]].liveHealth <= 0) {
            document.querySelector('#enemy0').style.visibility = 'hidden'
        } else {
            document.querySelector('#enemy0').style.visibility = 'visible'
        }
    }
    if (document.querySelector('#enemy1') != null) {
        if (enemyVgcTeam[activeEnemy[1]].liveHealth <= 0) {
            document.querySelector('#enemy1').style.visibility = 'hidden'
        }
    }
    if (document.querySelector('#partner0') != null) {
        if (vgcTeam[activeTeam[0]].liveHealth <= 0) {
            document.querySelector('#partner0').style.visibility = 'hidden'
        }
    }
    if (document.querySelector('#partner1') != null) {
        if (vgcTeam[activeTeam[1]].liveHealth <= 0) {
            document.querySelector('#partner1').style.visibility = 'hidden'
        }
    }
}
function winCon() {
    if (enemyVgcTeam[0].liveHealth <= 0 && enemyVgcTeam[1].liveHealth <= 0 && enemyVgcTeam[2].liveHealth <= 0 && enemyVgcTeam[3].liveHealth <= 0) {
        removeAnimation();
        document.getElementById('teamViewer').innerHTML = `<div style="color: white">You win!</div> `;
        document.getElementById('teamViewer').innerHTML += `<div class='btn' style="position: fixed; bottom: 0; left: 0;" onclick='battleTeam()'>another game?</div> `;
        turnStorage = []
    } else if (vgcTeam[0].liveHealth <= 0 && vgcTeam[1].liveHealth <= 0 && vgcTeam[2].liveHealth <= 0 && vgcTeam[3].liveHealth <= 0) {
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
        if (pokemon.liveHealth <= 0) {
            turn2(1)
        }
    }
    removeAnimation();
    if (vgcTeam[activeTeam[0]].liveHealth <= 0) {
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
    if (pokemon.liveHealth >= 0) {
        document.querySelector('#turnBtn').style.visibility = 'hidden'
        document.getElementById('teamViewer').innerHTML = `
        <h3>What will ${pokemon.name} do?</h3>`
        for (let i = 0; i < pokemon.movePool.length; i++) {
            document.querySelector('.moveOptions').innerHTML += `
            <div class="btn" onclick="targetSelector(${pokemon.movePool[i]}, ${activeId})">${pkmMoves[pokemon.movePool[i]].name}</div>
            `
        }
        document.querySelector('.moveOptions').innerHTML += `<div class="btn" onclick="switchOptions(activeTeam[${activeId}])">switch</div>`
    } else {
        endTurn(1)
    }
    healthCheck();
}
function addTurn(priority, theFunction, parameter, nextTurn) {
    turnStorage.push([priority, theFunction, parameter,])
    if (nextTurn == 0) {
        turn2(1)
    } else if (nextTurn == 1) {
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
        element.classList.remove('bounce', 'shake', 'flip', 'swing', 'wobble');
    });
}
function clearProtect() {
    document.querySelectorAll('*').forEach((element) => {
        element.classList.remove('protect');
    });
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
    let team0Move0 = pkmMoves[vgcTeam[activeTeam[0]].movePool[0]].type
    let team0Move1 = pkmMoves[vgcTeam[activeTeam[0]].movePool[1]].type
    let team1Move0 = pkmMoves[vgcTeam[activeTeam[1]].movePool[0]].type
    let team1Move1 = pkmMoves[vgcTeam[activeTeam[1]].movePool[1]].type

    if (enemyPkm0.liveSpeed >= activeTeam0.liveSpeed && strongestAttackCalc(0, 0) >= activeTeam0.liveHealth && enemyPkm1.liveSpeed >= activeTeam1.liveSpeed && strongestAttackCalc(1, 1) >= activeTeam1.liveHealth) {
        targetedStrongestAttack(0, 0)
        targetedStrongestAttack(1, 1)
        errorCode = 120
    } else
        if (enemyPkm0.liveSpeed >= activeTeam1.liveSpeed && strongestAttackCalc(0, 1) >= activeTeam1.liveHealth && enemyPkm1.liveSpeed >= activeTeam0.liveSpeed && strongestAttackCalc(1, 0) >= activeTeam0.liveHealth) {
            targetedStrongestAttack(0, 1)
            targetedStrongestAttack(1, 0)
            errorCode = 121
        } else
            if (enemyPkm0.liveSpeed >= activeTeam0.liveSpeed && enemyPkm0.liveSpeed >= enemyPkm1.liveSpeed && strongestAttackCalc(0, 0) >= activeTeam0.liveHealth && activeTeam0.liveHealth >= 1) {
                targetedStrongestAttack(0, 0)
                targetedStrongestAttack(1, 1)
                errorCode = 122
            } else
                if (enemyPkm0.liveSpeed >= activeTeam1.liveSpeed && enemyPkm0.liveSpeed >= enemyPkm1.liveSpeed && strongestAttackCalc(0, 1) >= activeTeam1.liveHealth && activeTeam1.liveHealth >= 1) {
                    targetedStrongestAttack(0, 1)
                    targetedStrongestAttack(1, 0)
                    errorCode = 123
                } else
                    if (enemyPkm1.liveSpeed >= activeTeam0.liveSpeed && enemyPkm0.liveSpeed <= enemyPkm1.liveSpeed && strongestAttackCalc(1, 0) >= activeTeam0.liveHealth && activeTeam0.liveHealth >= 1) {
                        targetedStrongestAttack(0, 1)
                        targetedStrongestAttack(1, 0)
                        errorCode = 124
                    } else
                        if (enemyPkm1.liveSpeed >= activeTeam1.liveSpeed && enemyPkm0.liveSpeed <= enemyPkm1.liveSpeed && strongestAttackCalc(1, 1) >= activeTeam1.liveHealth && activeTeam1.liveHealth >= 1) {
                            targetedStrongestAttack(0, 0)
                            targetedStrongestAttack(1, 1)
                            errorCode = 125
                        } else

                            if (enemyPkm1.weakness[team0Move0][0] >= 4 || enemyPkm1.weakness[team0Move1][0] >= 4) {
                                if (enemyPkm0.liveSpeed >= activeTeam0.liveSpeed && enemyPkm1.liveSpeed >= activeTeam0.liveSpeed && bestCombinedAttacks(0) >= activeTeam0.liveHealth && activeTeam0.liveHealth >= 1) {
                                    enemyFocus(0)
                                    errorCode = 126
                                } else
                                    if (enemyPkm0.liveSpeed >= activeTeam0.liveSpeed && strongestAttackCalc(0, 0) >= activeTeam0.liveHealth) {
                                        targetedStrongestAttack(0, 0)
                                        targetedStrongestAttack(1, 1)
                                        errorCode = 127
                                    } else
                                        if (!enemyPkm1.wasProtectUsedLastTurn && enemyPkm0.liveHealth >= 1 && activeTeam0.liveHealth >= 1) {
                                            protect1attackFrom0(0)
                                            errorCode = 1208
                                        } else
                                            if (!(inactiveEnemy[0] >= 4)) {
                                                if (enemyInactivePkm0.weakness[team0Move0][0] <= .5 && enemyPkm0.weakness[team0Move0][0] >= 4) {
                                                    addTurn(9000, switchEnemyPkm, [1, 0])
                                                    targetedStrongestAttack(0, 0)
                                                    errorCode = 1306112
                                                } else
                                                    if (enemyInactivePkm0.weakness[team0Move1][0] <= .5 && enemyPkm0.weakness[team0Move1][0] >= 4) {
                                                        addTurn(9000, switchEnemyPkm, [1, 0])
                                                        targetedStrongestAttack(0, 0)
                                                        errorCode = 13061122222
                                                    } else {
                                                        enemyFocus(0)
                                                        errorCode = 130616654222
                                                    }
                                            } else {
                                                enemyFocus(0)
                                                errorCode = 1306
                                            }
                            } else

                                if (enemyPkm1.weakness[team1Move0][0] >= 4 || enemyPkm1.weakness[team1Move1][0] >= 4) {
                                    if (enemyPkm0.liveSpeed >= activeTeam1.liveSpeed && enemyPkm1.liveSpeed >= activeTeam1.liveSpeed && bestCombinedAttacks(1) >= activeTeam1.liveHealth && activeTeam1.liveHealth >= 1) {
                                        enemyFocus(1)
                                        errorCode = 12010
                                    } else
                                        if (enemyPkm0.liveSpeed >= activeTeam1.liveSpeed && strongestAttackCalc(0, 1) >= activeTeam1.liveHealth) {
                                            targetedStrongestAttack(0, 1)
                                            targetedStrongestAttack(1, 0)
                                            errorCode = 130
                                        } else
                                            if (!enemyPkm1.wasProtectUsedLastTurn && enemyPkm0.liveHealth >= 1 && activeTeam1.liveHealth >= 1) {
                                                protect1attackFrom0(1)
                                                errorCode = 1301
                                            } else
                                                if (!(inactiveEnemy[1] >= 4)) {
                                                    if (enemyInactivePkm1.weakness[team1Move0][0] <= .5 && enemyPkm0.weakness[team1Move0][0] >= 4) {
                                                        addTurn(9000, switchEnemyPkm, [1, 1])
                                                        targetedStrongestAttack(0, 1)
                                                        errorCode = 13061155
                                                    } else if (enemyInactivePkm1.weakness[team1Move0][0] <= .5 && enemyPkm0.weakness[team1Move1][0] >= 4) {
                                                        addTurn(9000, switchEnemyPkm, [1, 1])
                                                        targetedStrongestAttack(0, 1)
                                                        errorCode = 130611557
                                                    }
                                                    else {
                                                        enemyFocus(1)
                                                        errorCode = 13061665455
                                                    }
                                                } else {
                                                    enemyFocus(1)
                                                    errorCode = 1306787
                                                }
                                } else


                                    if (enemyPkm0.weakness[team0Move0][0] >= 4 || enemyPkm0.weakness[team0Move1][0] >= 4) {
                                        if (enemyPkm0.liveSpeed >= activeTeam0.liveSpeed && enemyPkm1.liveSpeed >= activeTeam0.liveSpeed && bestCombinedAttacks(0) >= activeTeam0.liveHealth && activeTeam0.liveHealth >= 1) {
                                            enemyFocus(0)
                                            errorCode = 1303
                                        } else
                                            if (enemyPkm1.liveSpeed >= activeTeam0.liveSpeed && strongestAttackCalc(1, 0) >= activeTeam0.liveHealth) {
                                                targetedStrongestAttack(0, 1)
                                                targetedStrongestAttack(1, 0)
                                                errorCode = 1304
                                            } else
                                                if (!enemyPkm0.wasProtectUsedLastTurn && enemyPkm1.liveHealth >= 1 && activeTeam0.liveHealth >= 1) {
                                                    protect0attackFrom1(0)
                                                    errorCode = 1305
                                                } else
                                                    if (!(inactiveEnemy[1] >= 4)) {
                                                        if (enemyInactivePkm1.weakness[team0Move0][0] <= .5 && enemyPkm0.weakness[team0Move0][0] >= 4) {
                                                            addTurn(9000, switchEnemyPkm, [0, 1])
                                                            targetedStrongestAttack(1, 0)
                                                            errorCode = 130611
                                                        } else
                                                            if (enemyInactivePkm1.weakness[team0Move1][0] <= .5 && enemyPkm0.weakness[team0Move1][0] >= 4) {
                                                            addTurn(9000, switchEnemyPkm, [0, 1])
                                                            targetedStrongestAttack(1, 0)
                                                            errorCode = 13061155
                                                        }
                                                        else {
                                                            enemyFocus(0)
                                                            errorCode = 13061665444
                                                        }
                                                    } else {
                                                        enemyFocus(0)
                                                        errorCode = 1306
                                                    }


                                    } else
                                        if (enemyPkm0.weakness[team1Move0][0] >= 4 || enemyPkm0.weakness[team1Move1][0] >= 4) {
                                            if (enemyPkm0.liveSpeed >= activeTeam0.liveSpeed && enemyPkm1.liveSpeed >= activeTeam0.liveSpeed && bestCombinedAttacks(0) >= activeTeam0.liveHealth && activeTeam0.liveHealth >= 1) {
                                                enemyFocus(1)
                                                errorCode = 1307
                                            } else
                                                if (enemyPkm1.liveSpeed >= activeTeam1.liveSpeed && strongestAttackCalc(1, 1) >= activeTeam1.liveHealth) {
                                                    targetedStrongestAttack(0, 0)
                                                    targetedStrongestAttack(1, 1)
                                                    errorCode = 1308
                                                } else
                                                    if (!enemyPkm0.wasProtectUsedLastTurn && enemyPkm1.liveHealth >= 1 && activeTeam1.liveHealth >= 1) {
                                                        protect0attackFrom1(1)
                                                        errorCode = 1309
                                                    } else
                                                        if (!(inactiveEnemy[1] >= 4)) {
                                                            if (enemyInactivePkm1.weakness[team1Move0][0] <= .5 && enemyPkm0.weakness[team1Move0][0] >= 4) {
                                                                addTurn(9000, switchEnemyPkm, [0, 1])
                                                                targetedStrongestAttack(1, 1)
                                                                errorCode = 1306113
                                                            } else
                                                                if (enemyInactivePkm1.weakness[team1Move1][0] <= .5 && enemyPkm0.weakness[team1Move1][0] >= 4) {
                                                                    addTurn(9000, switchEnemyPkm, [0, 1])
                                                                    targetedStrongestAttack(1, 1)
                                                                    errorCode = 130611333
                                                                } else {
                                                                    enemyFocus(0)
                                                                    errorCode = 1306113333
                                                                }
                                                        } else {
                                                            enemyFocus(1)
                                                            errorCode = 1306
                                                        }
                                        } else

                                            if (enemyPkm0.liveSpeed >= activeTeam0.liveSpeed && enemyPkm1.liveSpeed >= activeTeam0.liveSpeed && bestCombinedAttacks(0) >= activeTeam0.liveHealth && activeTeam0.liveHealth >= 1) {
                                                enemyFocus(0)
                                                errorCode = 1401
                                            } else
                                                if (enemyPkm0.liveSpeed >= activeTeam1.liveSpeed && enemyPkm1.liveSpeed >= activeTeam1.liveSpeed && bestCombinedAttacks(1) >= activeTeam1.liveHealth && activeTeam1.liveHealth >= 1) {
                                                    enemyFocus(1)
                                                    errorCode = 1402
                                                } else

                                                    if (enemyPkm1.weakness[team0Move0][0] >= 2 || enemyPkm1.weakness[team0Move1][0] >= 2 && activeTeam0.liveHealth >= 1 && enemyPkm1.liveHealth >=1) {
                                                        if (enemyPkm1.weakness[team1Move0][0] >= 2 || enemyPkm1.weakness[team1Move1][0] >= 2) {
                                                            if (!enemyPkm1.wasProtectUsedLastTurn && enemyPkm0.liveHealth >= 1 && activeTeam0.liveHealth >= 1 && activeTeam1.liveHealth >= 1) {
                                                                protect1attackFrom0(0)
                                                                errorCode = 1403
                                                            } else {
                                                                enemyFocus(0)
                                                                errorCode = 1404
                                                            }
                                                        } else
                                                            if (enemyPkm0.liveSpeed >= activeTeam0.liveSpeed && enemyPkm1.liveSpeed >= activeTeam0.liveSpeed && bestCombinedAttacks(0) >= activeTeam0.liveHealth && activeTeam0.liveHealth >= 1) {
                                                                enemyFocus(0)
                                                                errorCode = 1405
                                                            } else
                                                                if (!enemyPkm1.wasProtectUsedLastTurn && enemyPkm0.liveHealth >= 1 && activeTeam0.liveHealth >= 1) {
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
                                                                            errorCode = 1500262877
                                                                        }
                                                                    } else {
                                                                        enemyFocus(0)
                                                                        errorCode = 1407
                                                                    }
                                                    } else
                                                        if (enemyPkm1.weakness[team1Move0][0] >= 2 || enemyPkm1.weakness[team1Move1][0] >= 2 && activeTeam1.liveHealth >= 1) {
                                                            if (enemyPkm0.liveSpeed >= activeTeam0.liveSpeed && enemyPkm1.liveSpeed >= activeTeam0.liveSpeed && bestCombinedAttacks(0) >= activeTeam0.liveHealth && activeTeam0.liveHealth >= 1) {
                                                                enemyFocus(1)
                                                                errorCode = 1408
                                                            } else
                                                                if (!enemyPkm1.wasProtectUsedLastTurn && enemyPkm0.liveHealth >= 1 && activeTeam1.liveHealth >= 1) {
                                                                    protect1attackFrom0(1)
                                                                    errorCode = 1409
                                                                } else
                                                                    if (!(inactiveEnemy[1] >= 4)) {
                                                                        if (enemyInactivePkm1.weakness[team1Move0][0] <= .25 || enemyInactivePkm1.weakness[team1Move1][0] <= .25) {
                                                                            addTurn(9000, switchEnemyPkm, [1, 1])
                                                                            targetedStrongestAttack(0, 1)
                                                                            errorCode = 15004726
                                                                        } else {
                                                                            enemyFocus(1)
                                                                            errorCode = 15002628
                                                                        }
                                                                    } else {
                                                                        enemyFocus(1)
                                                                        errorCode = 150
                                                                    }
                                                        } else


                                                            if (enemyPkm0.weakness[team0Move0][0] >= 2 || enemyPkm0.weakness[team0Move1][0] >= 2 && activeTeam0.liveHealth >= 1) {
                                                                if (enemyPkm0.liveSpeed >= activeTeam0.liveSpeed && enemyPkm1.liveSpeed >= activeTeam0.liveSpeed && bestCombinedAttacks(0) >= activeTeam0.liveHealth && activeTeam0.liveHealth >= 1) {
                                                                    enemyFocus(0)
                                                                    errorCode = 1501
                                                                } else
                                                                    if (!enemyPkm0.wasProtectUsedLastTurn && enemyPkm1.liveHealth >= 1 && activeTeam0.liveHealth >= 1) {
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
                                                                if (enemyPkm0.weakness[team1Move0][0] >= 2 || enemyPkm0.weakness[team1Move1][0] >= 2 && activeTeam1.liveHealth >= 1) {
                                                                    if (enemyPkm0.liveSpeed >= activeTeam0.liveSpeed && enemyPkm1.liveSpeed >= activeTeam0.liveSpeed && bestCombinedAttacks(0) >= activeTeam0.liveHealth && activeTeam0.liveHealth >= 1) {
                                                                        enemyFocus(1)
                                                                        errorCode = 1504
                                                                    } else
                                                                        if (!enemyPkm0.wasProtectUsedLastTurn && enemyPkm1.liveHealth >= 1 && activeTeam1.liveHealth >= 1) {
                                                                            protect0attackFrom1(1)
                                                                            errorCode = 1505
                                                                        } else
                                                                            if (!(inactiveEnemy[1] >= 4)) {
                                                                                if (enemyInactivePkm1.weakness[team1Move0][0] <= .25 || enemyInactivePkm1.weakness[team1Move1][0] <= .25) {
                                                                                    addTurn(9000, switchEnemyPkm, [0, 1])
                                                                                    targetedStrongestAttack(1, 1)
                                                                                    errorCode = 1500472
                                                                                } else {
                                                                                    enemyFocus(1)
                                                                                    errorCode = 1500262
                                                                                }
                                                                            } else {
                                                                                enemyFocus(1)
                                                                                errorCode = 1506
                                                                            }
                                                                } else {
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
    if (enemyVgcTeam[activeEnemy[0]].liveHealth >= 1) {
        addTurn(8, protect, [0]);
    }
    if (strongestAttackCalc(1, threat) >= 1) {
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
    if (enemyVgcTeam[activeEnemy[1]].liveHealth >= 1) {
        addTurn(8, protect, [1]);
    }
    if (strongestAttackCalc(0, threat) >= 1) {
        targetedStrongestAttack(0, threat);
    } else {
        targetedStrongestAttack(0, other);
    }
}

function enemyFocus(teamLocation) {
    let enemyPkm1 = enemyVgcTeam[activeEnemy[1]]
    let enemyPkm0 = enemyVgcTeam[activeEnemy[0]]
    if (enemyPkm1.liveHealth >= 1) {
        targetedStrongestAttack(1, teamLocation)
    }
    if (enemyPkm0.liveHealth >= 1) {
        targetedStrongestAttack(0, teamLocation)
    }
}

function targetedStrongestAttack(enemyLocation, teamLocation) {
    let enemyPkm = enemyVgcTeam[activeEnemy[enemyLocation]]
    if (enemyPkm.liveHealth >= 1) {
        let Move0 = enemyPkm.movePool[0]
        let Move1 = enemyPkm.movePool[1]
        let realSpeed = enemyPkm.liveSpeed - 5000
        let speedMultiplyer = realSpeed * enemyPkm.boostSpeed[0] / enemyPkm.boostSpeed[1]
        if (enemyAiDamageCalc(Move0, enemyLocation, teamLocation) > enemyAiDamageCalc(Move1, enemyLocation, teamLocation)) {
            let priority = pkmMoves[Move0].priority + 5000 + speedMultiplyer
            addTurn(priority, damageCalc, [Move0, enemyLocation, teamLocation])
        } else {
            let priority = pkmMoves[Move1].priority + 5000 + speedMultiplyer
            addTurn(priority, damageCalc, [Move1, enemyLocation, teamLocation])
        }
    }
}
function strongestAttack(enemyLocation) {
    let teamLocation = 0
    let enemyPkm = enemyVgcTeam[activeEnemy[enemyLocation]]

    if (enemyPkm.liveHealth >= 1) {

        let Move0 = enemyPkm.movePool[0]
        let Move1 = enemyPkm.movePool[1]
        let damageTo0 = 0
        let damageTo1 = 0
        let realSpeed = enemyPkm.liveSpeed - 5000
        let speedMultiplyer = realSpeed * enemyPkm.boostSpeed[0] / enemyPkm.boostSpeed[1]
        if (enemyAiDamageCalc(Move0, enemyLocation, 0) > enemyAiDamageCalc(Move1, enemyLocation, 0)) {
            damageTo0 = enemyAiDamageCalc(Move0, enemyLocation, 0)
        } else {
            damageTo0 = enemyAiDamageCalc(Move1, enemyLocation, 0)
        }
        if (enemyAiDamageCalc(Move0, enemyLocation, 1) > enemyAiDamageCalc(Move1, enemyLocation, 1)) {
            damageTo1 = enemyAiDamageCalc(Move0, enemyLocation, 1)
        } else {
            damageTo1 = enemyAiDamageCalc(Move1, enemyLocation, 1)
        }
        if (damageTo0 <= damageTo1) {
            teamLocation = 1
        }
        if (enemyAiDamageCalc(Move0, enemyLocation, teamLocation) > enemyAiDamageCalc(Move1, enemyLocation, teamLocation) && vgcTeam[activeTeam[teamLocation]].liveHealth <=0) {
            let priority = pkmMoves[Move0].priority + 5000 + speedMultiplyer
            addTurn(priority, damageCalc, [Move0, enemyLocation, teamLocation])
        } else {
            let priority = pkmMoves[Move1].priority + 5000 + speedMultiplyer
            addTurn(priority, damageCalc, [Move1, enemyLocation, teamLocation])
        }
    }
}
// The Numbers
function enemyAiDamageCalc(moveId, enemyLocation, teamLocation) {
    let move = pkmMoves[moveId];
    let defender = vgcTeam[activeTeam[teamLocation]];
    let attacker = enemyVgcTeam[activeEnemy[enemyLocation]];
    let attackStat = 0;
    let defenseStat = 0;
    let critical = 1
    let stab = 1
    let atkBoost = 2
    let atkDebuf = 2
    let defBoost = 2
    let defDebuf = 2
    if (attacker.type[0] == move.type || attacker.type[1] == move.type) {
        stab = 1.5
    }
    if (move.alwaysCrits) {
        critical = 1.5
    }
    if (attacker.liveAtk > attacker.liveSpAtk) {
        attackStat = attacker.liveAtk;
        defenseStat = defender.liveDef;
        atkBoost = attacker.boostAtk[0]
        atkDebuf = attacker.boostAtk[1]
        defBoost = defender.boostDef[0]
        defDebuf = defender.boostDef[1]
    } else {
        attackStat = attacker.liveSpAtk;
        defenseStat = defender.liveSpDef;
        atkBoost = attacker.boostSpAtk[0]
        atkDebuf = attacker.boostSpAtk[1]
        defBoost = defender.boostSpDef[0]
        defDebuf = defender.boostSpDef[1]
    };
    let damage = 0
    if (critical > 1) {
        damage = 22 * attackStat * atkBoost / 2 * move.power / defenseStat * 2 / defDebuf;
        damage = damage / 50;
        damage += 2;
        damage = Math.floor(damage * defender.weakness[move.type][0] * critical * stab);
    } else {
        damage = 22 * attackStat * atkBoost / atkDebuf * move.power / defenseStat * defBoost / defDebuf;
        damage = damage / 50;
        damage += 2;
        damage = Math.floor(damage * defender.weakness[move.type][0] * stab);
    }
    return damage
}
function bestCombinedAttacks(teamLocation) {
    let enemyPkm1 = enemyVgcTeam[activeEnemy[1]]
    let enemyPkm0 = enemyVgcTeam[activeEnemy[0]]
    let bestDamageFrom0 = 0
    let bestDamageFrom1 = 0

    if (enemyPkm0.liveHealth >= 1) {
        let Move0 = enemyPkm0.movePool[0]
        let Move1 = enemyPkm0.movePool[1]

        if (enemyAiDamageCalc(Move0, 0, teamLocation) > enemyAiDamageCalc(Move1, 0, teamLocation)) {
            bestDamageFrom0 = enemyAiDamageCalc(Move0, 0, teamLocation)
        }
        else {
            bestDamageFrom0 = enemyAiDamageCalc(Move1, 0, teamLocation)
        }
    }


    if (enemyPkm1.liveHealth >= 1) {
        let Move0 = enemyPkm1.movePool[0]
        let Move1 = enemyPkm1.movePool[1]

        if (enemyAiDamageCalc(Move0, 1, teamLocation) > enemyAiDamageCalc(Move1, 1, teamLocation)) {
            bestDamageFrom1 = enemyAiDamageCalc(Move0, 1, teamLocation)
        }
        else {
            bestDamageFrom1 = enemyAiDamageCalc(Move1, 1, teamLocation)
        }
    }
    return bestDamageFrom0 + bestDamageFrom1
}
function strongestAttackCalc(enemyLocation, teamLocation) {

    let enemyPkm = enemyVgcTeam[activeEnemy[enemyLocation]]
    if (enemyPkm.liveHealth >= 1) {
        let Move0 = enemyPkm.movePool[0]
        let Move1 = enemyPkm.movePool[1]
        if (enemyAiDamageCalc(Move0, enemyLocation, teamLocation) > enemyAiDamageCalc(Move1, enemyLocation, teamLocation)) {
            return enemyAiDamageCalc(Move0, enemyLocation, teamLocation)
        } else {
            return enemyAiDamageCalc(Move1, enemyLocation, teamLocation)
        }
    }
}
function strongestTeamAttackCalc(FromActiveTeam, target) {

    let enemyPkm = vgcTeam[activeTeam[FromActiveTeam]]
    if (enemyPkm.liveHealth >= 1) {
        let Move0 = enemyPkm.movePool[0]
        let Move1 = enemyPkm.movePool[1]
        if (enemyAiDamageCalc(Move0, vgcTeam[activeTeam[target]].id, enemyPkm.id) > enemyAiDamageCalc(Move1, vgcTeam[activeTeam[target]].id, enemyPkm.id)) {
            return enemyAiDamageCalc(Move0, enemyVgcTeam[activeEnemy[target]].id, enemyPkm.id)
        } else {
            return enemyAiDamageCalc(Move1, enemyVgcTeam[activeEnemy[target]].id, enemyPkm.id)
        }
    }
}