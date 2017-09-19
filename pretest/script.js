//////////////////////////////////////////////////
/// QUESTIONS
//////////////////////////////////////////////////

//Test

var questions = {
	multiplyWholeNumbers: [ //[a, b] makes the question a * b
		[2, 5],   [0, 10],   [10, 5],
		[2, 20],   [5, 5],   [10, 10],
		[20, 20],   [3, 10],   [5, 0],
		[5, 20],   [25, 5],   [10, 20],
		[4, 4],   [3, 9],   [6, 15],
		[3, 3],   [4, 15],  [6, 6],
		[9, 6],  [9, 9],   [15, 9],
		[15, 15],  [2, 9],   [5, 7],
		[11, 8],  [7, 7],  [4, 25],
		[8, 8],  [11, 12],  [8, 7],
		[25, 25], [12, 8],  [11, 11],
		[7, 6],   [12, 7],   [25, 12]
	],
	divideWholeNumbers: [ //[a, b] makes the question a / b
		[10, 2],    [0, 5],   [30, 5],
		[20, 20],   [10, 2],   [6, 2],
		[10, 5],   [4, 2],   [120, 10],
		[20, 10],   [22, 2],   [45, 5],
		[54, 6],   [90, 9],   [42, 6],
		[225, 25],   [36, 6],   [75, 15],
		[54, 9],  [81, 9],   [16, 4],
		[60, 15],   [225, 9],  [72, 6],
		[33, 11],  [125, 25], [144, 12],
		[63, 7], [132, 11],   [56, 7],
		[49, 7],  [72, 8],   [121, 11],
		[400, 25],   [84, 7],   [99, 11]
	],
	divisibility: [
		[476],
		[102],
		[555],
		[3024],
		[6705],
		[1110],
		[3555],
		[303030]
	],
	factorWholeNumbers: [ //[a, b] makes the question "list a factors of b"
		[3, 9],
		[2, 19],
		[6, 12],
		[6, 75],
		[4, 51],
		[10, 80]
	],
	primeFactorization: [
		[24],
		[45],
		[100],
		[48],
		[75],
		[210],
		[144],
		[51]
	],
	leastCommonMultiple: [ //[a, b] makes the question LCM(a, b)
		[4, 3],
		[6, 8],
		[10, 6],
		[8, 7],
		[15, 25],
		[9, 6],
		[20, 12],
		[18, 24]
	],
	greatestCommonFactor: [ //[a, b] makes the question GCF(a, b)
		[6, 8],
		[8, 14],
		[20, 30],
		[16, 40],
		[18, 24],
		[40, 56],
		[150, 225],
		[8, 25]
	],
	addSubtractIntegers: [
		[-3, "+", -1],      [-4, "-", 0],       [-2, "+", 1],
		[-5, "+", 5],       [3, "+", "(-5)"],   [3, "-", 5],
		[4, "-", "(-4)"],   [-3, "+", 5],       [-2, "-", "(-7)"],
		[-3, "+", 10],      [-11, "-", 11],     [-10, "+", -8],
		[-8, "+", 10],      [12, "-", "(-5)"],  [3, "-", 12],
		[-2, "-", "(-5)"],  [-9, "+", -2],      [10, "+", -11],
		[-5, "-", 3],       [-8, "+", 7],       [2, "-", "(-11)"],
		[0, "-", "(-10)"],      [-12, "+", -4],     [-5, "+", 9],
		[4, "-", "(-9)"],   [-3, "+", 6],       [7, "-", 10],
		[-10, "+", -9],     [4, "+", -1],       [-8, "+", 8],
		[-30, "+", 10],     [-11, "-", 41]     
	],
	multiplyDivideIntegers: [
		[-20, "&divide;", 10],     [-1, "&bull;", "(-1)"],    [-16, "&divide;", "(-8)"],
		[-16, "&divide;", 8],      [8, "&bull;", "(-5)"],     [3, "&bull;", "(-1)"],
		[-20, "&divide;", "(-5)"], [-30, "&divide;", -3],     [14, "&divide;", "(-7)"],
		[-8, "&bull;", 8],         [-36, "&divide;", -9],     [10, "&bull;", "(-15)"],
		[-30, "&divide;", 10],     [-11, "&bull;", 11],       [-64, "&divide;", -8],
		[-81, "&divide;", 9],      [12, "&bull;", "(-5)"],    [3, "&bull;", 12],
		[-2, "&bull;", "(-50)"],   [-90, "&divide;", -9],     [121, "&divide;", -11],
		[-5, "&bull;", 8],         [-56, "&divide;", -7],     [-20, "&bull;", "(-20)"],
		[0, "&bull;", -10],        [-144, "&divide;", -16],   [-72, "&divide;", 9],
		[7, "&bull;", "(-9)"],     [-42, "&divide;", 6],      [-17, "&bull;", 10],
		[-8, "&bull;", -9],        [51, "&divide;", -3]      
	],
	theNumberGame: [
		[12, 8],
		[10, -7],
		[20, 9],
		[32, 12],
		[-45, -4],
		[-6, 1],
		[-81, 0],
		[72, -17]
	],
	orderOfOperations: [
		["6 + 3 &bull; 2"],         ["12 - 6 &bull; 2"],
		["16 + 4 &bull; 4"],        ["8 &bull; 4 &divide; 2"],
		["2 &bull; 3 ^ 2"],         ["-3 ^ 2"],
		["(2 + 3) ^ 2"],            ["2 &bull; 2 ^ 2 + 3 ^ 2"],
		["8 (3 + 4)"],             ["-(-2) ^ 2"]
	],
	equivalentFractions: [
		[1, 2, 4, 8, 12],
		[2, 7, 14, 28, 35],
		[4, 11, 22, 55, 88],
		[1, 3, 9, 21, 33],
		[5, 6, 12, 18, 60],
		[4, 7, 14, 28, 56],
		[3, 8, 16, 24, 32],
		[1, 3, 30, 45, 60]
	],
	reducingFractions: [
		[2, 4],     [3, 9],     [8, 10],
		[10, 12],   [12, 15],   [20, 25],
		[30, 40],   [18, 45],   [16, 56],
		[16, 24],   [12, 18],   [20, 28]
	],
	improperAndMixedFractions: [
		["", 14, 3],  [3, 1, 2],    ["", 9, 2],
		[4, 1, 3],    ["", 14, 3],  [-5, 3, 5],
		["-", 12, 7], [7, 3, 8],    ["", 23, 2],
		[9, 1, 7]
	],
	solveEquations: [
		["a - 5 = 4"],  ["3x = 12"],
		["h + (-4) = 7"],  ["-4x + 15 = -21"],
		["10m + 30 = 8m - 50"],  ["11t + 9t - 10 = 50"],
		["3(a - 5) = 18"],  ["(1/2)n + (3/5) = (2/3)"],
		["(4/5)b = (8/15)"],  ["(4/3)w + (3/2) = (5/6)"]
	],
	addSubtractFractions: [ //[a,b,c,+,d,e,f] becomes a(b/c)+d(e/f) where a(b/c) is the mixed number a b/c.
		["", 5, 11, "+", "", 2, 11],  ["", 3, 8, "+", "", 1, 2],
		["", 11, 12, "-", "", 7, 12], ["", 16, 25, "+", "", 4, 15],
		["", 5, 6, "-", "", 7, 20],   ["", 11, 18, "+", "", 5, 12],
		["", 6, 11, "-", "", 17, 33], [5, "", "", "-", 2, 1, 5],
		[-1, 4, 5, "-", 2, 1, 2],     [-2, 4, 9, "+", 1, 1, 6]
	],
	multiplyDivideFractions: [ //Same as above. Use &bull; or &times; for multiplication.
		["", 2, 3, "&bull;", "", 1, 5],     ["", 3, 5, "&divide;", "", 1, 3],
		["", 7, 8, "&bull;", "", 4, 7],     ["", 10, 11, "&divide;", "", 3, 44],
		["", 9, 14, "&divide;", "", 18, 7], ["", 16, 25, "&bull;", "", 5, 8],
		[-10, "", "", "&divide;", 1, 3, 5], [-1, 4, 5, "&bull;", -2, 1, 2],
		[2, 5, 6, "&bull;", 9, "", ""],     [2, 9, 10, "&divide;", -4, 5, 6]
	],
	exponents: [ //[a, b] a^b
		[3, 2],       [-3, 2],  [1, 7],
		[2, 3],       [2, -3],  [-1, 4],
		["(-1)", -4], [5, 3],   [-2, 4],
		["(-5)", 3],  [-5, -3], [3, 4],
		["(-1)", 2],  [10, -3], [10, 3]
	],
	toScientificNotation: [
		[0.00003], [0.0047],
		[2000000], [345.2],
		[7423], [0.055]
	],
	fromScientificNotation: [ //[a, b] becomes a*10^b
		[5, -6], [2.5, -3],
		[8.03, 5], [1.4, 1]
	],
	decimals: [
		["Which digit is in the thousandths place? 95603.84172"],
		["Which digit is in the tenths place? 95603.84172"],
		["3.5 + 1.3="], ["7.6 + 1.23="], ["10.4 - 6.6="], ["2.5 &bull; 0.02="],
		["4.03 &bull; 2.0="], ["0.002 &bull; 0.05="], ["12.6 &divide; 4.2="],
		["5.2 &divide; 0.01="]
	],
	percents: [
		["Write as a percent: 1/10"], ["Write as a percent: 7/25"],
		["Write as a percent: 1.25"], ["Write as a percent: 0.04"],
		["Write as a reduced fraction: 25%"], ["Write as a reduced fraction: 45%"],
		["Write as a decimal: 0.45%"], ["Write as a decimal: 150%"],
		["25% of 80 is "], ["What is 110% of 80?"]
	],
	percentProblems: [
		["40 is 80% of"],
		["12 is what percent of 60?"],
		["Jackson started the month with a debit card balance of $500. He finished the month with a balance of $400. By what percent did his balance decrease?"],
		["Monet started the month with a debit card balance of $200. Shee finished the month with a balance of $500. By what percent did her balance increase?"]
	]
};
var correctAnswers = {
	multiplyWholeNumbers: [
		[10],   [0],  [50],
		[40],  [25],   [100],
		[400],  [30],  [0],
		[100],  [125],  [200],
		[16],  [27],  [90],
		[9],  [60],  [36],
		[54],  [81],  [135],
		[225],  [18],  [35],
		[88],  [49],  [100],
		[64],  [132],  [56],
		[625], [96], [121],
		[42], [84],  [300]
	],
	divideWholeNumbers: [
		[5],  [0], [6],
		[1],  [5],  [3],
		[2],  [2],  [12],
		[2],  [11],  [9],
		[9],  [10], [7],
		[9],  [6],  [5],
		[6],  [9], [4],
		[4],  [25],  [12],
		[3],  [5],  [12],
		[9],  [12], [8],
		[7],  [9],  [11],
		[16], [12],  [9]
	],
	divisibility: [
		["2,4"],
		["2,3,6"],
		["3,5"],
		["2,3,4,6,9"],
		["3,5,9"],
		["2,3,5,6,10"],
		["3,5,9"],
		["2,3,5,6,9,10"]
	],
	factorWholeNumbers: [
		["1,3,9"],
		["1,19"],
		["1,2,3,4,6,12"],
		["1,3,5,15,25,75"],
		["1,3,17,51"],
		["1,2,4,5,8,10,16,20,40,80"]
	],
	primeFactorization: [
		["2,2,2,3"],
		["3,3,5"],
		["2,2,5,5"],
		["2,2,2,2,3"],
		["3,5,5"],
		["2,3,5,7"],
		["2,2,2,2,3,3"],
		["3,17"]
	],
	leastCommonMultiple: [
		[12], [24],
		[30], [56],
		[75], [18],
		[60], [72],
	],
	greatestCommonFactor: [
		[2],  [2],
		[10], [8],
		[6],  [8],
		[75], [1]
	],
	addSubtractIntegers: [
		[-4],  [-4],   [-1],
		[0],   [-2],   [-2],
		[8],   [2],    [5],
		[7],   [-22],  [-18],
		[2],   [17],   [-9],
		[3],   [-11],  [-1],
		[-8],  [-1],   [13],
		[10],  [-16],  [4],
		[13],  [3],    [-3],
		[-19], [3],    [0],
		[-20], [-52]
	],
	multiplyDivideIntegers: [
		[-2],  [1],    [2],
		[-2],  [-40],  [-3],
		[4],   [10],   [-2],
		[-64], [4],    [-150],
		[-3],  [-121], [8],
		[-9],  [-60],  [36],
		[100], [10],   [-11],
		[-40], [8],    [400],
		[0],   [9],    [-8],
		[-63], [-7],   [-170],
		[72],  [-17]
	],
	theNumberGame: [
		[2,  6],
		[-5, -2],
		[5,  4],
		[8,  4],
		[-9, 5],
		[3, -2],
		[-9, 9],
		[-9, -8]
	],
	orderOfOperations: [
		[12], [0],
		[32], [16],
		[18], [-9],
		[25], [17],
		[56], [-4]
	],
	equivalentFractions: [
		[2,4,6],    [4,8,10],
		[8,20,32],  [3,7,11],
		[10,15,50], [8,16,32],
		[6,9,12],   [10,15,20]
	],
	reducingFractions: [
		[2, 2, 1, 2],    [3, 3, 1, 3],   [2, 2, 4, 5],
		[2, 2, 5, 6],    [3, 3, 4, 5],   [5, 5, 4, 5],
		[10, 10, 3, 4],  [9, 9, 2, 5],   [8, 8, 2, 7],
		[8, 8, 2, 3],    [6, 6, 2, 3],   [4, 4, 5, 7]
	],
	improperAndMixedFractions: [
		[4, 2, 3],   [0, 7, 2],  [4, 1, 2],
		[0, 13, 3],  [4, 2, 3],  [0, -28, 5],
		[-1, 5, 7],  [0, 59, 8], [11, 1, 2],
		[0, 64, 7]
	],
	solveEquations: [
		[9], [4],
		[11], [9],
		[-40], [30],
		[11], ["2/15"],
		["2/3"], ["-1/2"]
	],
	addSubtractFractions: [
		[7, 11],  [7, 8],
		[1, 3],   [68, 75],
		[47, 80], [37, 36],
		[1, 33],  [14, 5],
		[-43, 10], [-23, 18]
	],
	multiplyDivideFractions: [
		[2, 15], [9, 5],
		[1, 2],  [40, 3],
		[1, 4],  [2, 5],
		[-25, 4], [9, 2],
		[51, 2], [-1, 2]
	],
	exponents: [
		[9, 1],    [-9, 1],   [1, 1],
		[8, 1],    [1, 8],    [-1, 1],
		[1, 1],    [125, 1],  [-16, 1],
		[-125, 1], [-1, 125], [81, 1],
		[1, 1],    [1, 1000], [1000, 1]
	],
	toScientificNotation: [
		[3, -5],    [4.7, -3],
		[2, 6],     [3.452, 2],
		[7.423, 3], [5.5, -2]
	],
	fromScientificNotation: [
		[0.000005], [0.0025],
		[803000], [14]
	],
	decimals: [
		[1],[8],
		[4.8], [8.83], [3.8], [0.05],
		[8.06], [0.0001], [3], [520]
	],
	percents: [
		[10], [28],
		[125], [4],
		["1/4"],["9/20"],
		[0.0045],[1.5],
		[20], [88]
	],
	percentProblems: [
		[50], ["20%"], 
		["20%"], [150]
	]
};
var userAnswers = {
	multiplyWholeNumbers: [
		//
	],
	divideWholeNumbers: [
		//
	],
	divisibility: [
		//
	],
	factorWholeNumbers: [
		//
	],
	primeFactorization: [
		//
	],
	leastCommonMultiple: [
		//
	],
	greatestCommonFactor: [
		//
	],
	addSubtractIntegers: [
		//
	],
	multiplyDivideIntegers: [
		//
	],
	theNumberGame: [
		//
	],
	orderOfOperations: [
		//
	],
	equivalentFractions: [
		//
	],
	reducingFractions: [
		//
	],
	improperAndMixedFractions: [
		//
	],
	solveEquations: [
		//
	],
	addSubtractFractions: [
		//
	],
	multiplyDivideFractions: [
		//
	],
	exponents: [
		//
	],
	toScientificNotation: [
		//
	],
	fromScientificNotation: [
		//
	],
	decimals: [
		//
	],
	percents: [
		//
	],
	percentProblems: [
		//
	]
};
var timeLimits = { //Given in minutes
	multiplyWholeNumbers: 3, //0.25, //3,
	divideWholeNumbers: 3, //0.25, //3,
	divisibility: 3, //0.25, //3,
	factorWholeNumbers: 2, //0.25, //2,
	primeFactorization: 3, //0.25, //3,
	leastCommonMultiple: 3, //0.25, //3,
	greatestCommonFactor: 3, //0.25, //3,
	addSubtractIntegers: 3, //0.25, //3,
	multiplyDivideIntegers: 3, //0.25, //3,
	theNumberGame: 3, //0.25, //3,
	orderOfOperations: 3, //0.25, //3,
	equivalentFractions: 3, //0.25, //3,
	reducingFractions: 3, //0.25, //3,
	improperAndMixedFractions: 2, //0.25, //2,
	solveEquations: 8, //0.25, //8,
	addSubtractFractions: 8, //0.25, //8,
	multiplyDivideFractions: 8, //0.25, //8,
	exponents: 3, //0.25, //3,
	toScientificNotation: 2, //0.25, //5,
	fromScientificNotation: 2, //0.25, //5,
	decimals: 5, //0.25, //5,
	percents: 4, //0.25, //4,
	percentProblems: 4 //0.25 //4
};
var requiresSpecificCheck = {
	multiplyWholeNumbers: false,
	divideWholeNumbers: false,
	divisibility: true,
	factorWholeNumbers: true,
	primeFactorization: true,
	leastCommonMultiple: false,
	greatestCommonFactor: false,
	addSubtractIntegers: false,
	multiplyDivideIntegers: false,
	theNumberGame: true,
	orderOfOperations: false,
	equivalentFractions: false,
	reducingFractions: false,
	improperAndMixedFractions: true,
	solveEquations: false,
	addSubtractFractions: false,
	multiplyDivideFractions: false,
	exponents: false,
	toScientificNotation: false,
	fromScientificNotation: false,
	decimals: false,
	percents: true,
	percentProblems: true
}

//////////////////////////////////////////////////
/// GLOBAL VARIABLES
//////////////////////////////////////////////////

var sectionInProgress = false; //Whether or not a mini test is currently being taken.
var currentMiniTestStartTime; //The start time of the current mini test.
var stopTimer = false; //Force the timer to stop.
var firstName, lastName, school;
var currentPart = 0;
var currentTest = 0;
var currentQuestion = 0;
var currentMiniTestIndex;
var userScores = [];
var currentLoadedMiniTest = ""; //multiplyWholeNumbers, divideWholeNumbers, divisibility, factorWholeNumbers, primeFactorization, leastCommonMultiple,
                                //greatestCommonFactor, addSubtractInegers, multiplyDivideIntegers, theNumberGame, orderOfOperations, equivalentFractions,
                                //reducingFractions, improperAndMixedFractions, solveEquations, addSubtractFractions, multiplyDivideFractions,
                                //exponents, toScientificNotation, fromScientificNotation, decimals, percents, percentProblems
var miniTestList = [
	["multiplyWholeNumbers", "divideWholeNumbers", "divisibility", "factorWholeNumbers", "primeFactorization", "leastCommonMultiple", "greatestCommonFactor"],
	["addSubtractIntegers", "multiplyDivideIntegers", "theNumberGame", "orderOfOperations", "equivalentFractions", "reducingFractions", "improperAndMixedFractions"],
	["solveEquations", "addSubtractFractions", "multiplyDivideFractions"],
	["exponents", "toScientificNotation", "fromScientificNotation", "decimals", "percents", "percentProblems"]
];

//////////////////////////////////////////////////
/// FUNCTIONS
//////////////////////////////////////////////////

function validUsername(name) {
	if(name == null) {
		return false;
	}
	else if(name == "") {
		return false;
	}
	else {
		return true;
	}
}
function clickedACheckbox(e) {
	var id = e.target.id;
	var partNum = Number(id.slice(-1));
	if(currentPart != 0) {
		document.getElementById("testSelectionCheckbox" + String(currentPart)).checked = false;
	}
	else {
		var continueButton = document.getElementById("testSelectionContinueButton");
		continueButton.style.display = "inline-block";
		continueButton.addEventListener("click", loadTestInstructions);
	}
	currentPart = partNum;
	document.getElementById("testSelectionCheckbox" + currentPart).checked = true;
}
function sendAnswers() {
	//Prefilled form link https://docs.google.com/forms/d/e/1FAIpQLSfvbHVlkg0_x71NgBrFM8vqWeU4MOzTYFqoUXHUptmqAkqq9A/viewform?usp=pp_url&entry.409708748=FIRST_NAME&entry.2035091652=LAST_NAME&entry.563116119=SCHOOL_NAME&entry.1773403100=TEST_NAME&entry.1400737813=TEST_1_SCORE&entry.2061434955=TEST_2_SCORE&entry.1426620466=TEST_3_SCORE&entry.370173566=TEST_4_SCORE&entry.1635064555=TEST_5_SCORE&entry.401578479=TEST_6_SCORE&entry.15559398=TEST_7_SCORE
	//Submission link https://docs.google.com/forms/d/e/1FAIpQLSfvbHVlkg0_x71NgBrFM8vqWeU4MOzTYFqoUXHUptmqAkqq9A/formResponse?usp=pp_url&entry.409708748=FIRST_NAME&entry.2035091652=LAST_NAME&entry.563116119=SCHOOL_NAME&entry.1773403100=TEST_NAME&entry.1400737813=TEST_1_SCORE&entry.2061434955=TEST_2_SCORE&entry.1426620466=TEST_3_SCORE&entry.370173566=TEST_4_SCORE&entry.1635064555=TEST_5_SCORE&entry.401578479=TEST_6_SCORE&entry.15559398=TEST_7_SCORE

	document.getElementById("testCont").style.display = "none";
	document.getElementById("thanks").style.display = "inline-block";

	for(var i=0; i<firstName.length; ++i) {
		if(firstName.substring(i, i+1) == " ") {
			var newString = firstName.slice(0, i) + "%20" + firstName.slice(i+1);
			firstName = newString;
		}
	}
	for(var i=0; i<lastName.length; ++i) {
		if(lastName.substring(i, i+1) == " ") {
			var newString = lastName.slice(0, i) + "%20" + lastName.slice(i+1);
			lastName = newString;
		}
	}
	for(var i=0; i<school.length; ++i) {
		if(school.substring(i, i+1) == " ") {
			var newString = school.slice(0, i) + "%20" + school.slice(i+1);
			school = newString;
		}
	}
	

	var submissionURL = "docs.google.com/forms/d/e/1FAIpQLSfvbHVlkg0_x71NgBrFM8vqWeU4MOzTYFqoUXHUptmqAkqq9A/formResponse?usp=pp_url&entry.409708748=" + firstName + "&entry.2035091652=" + lastName + "&entry.563116119=" + school + "&entry.1773403100=" + currentPart + "&entry.1400737813=" + userScores[0] + "&entry.2061434955=" + userScores[1] + "&entry.1426620466=" + userScores[2] + "&entry.370173566=" + userScores[3] + "&entry.1635064555=" + userScores[4] + "&entry.401578479=" + userScores[5] + "&entry.15559398=" + userScores[6];
	submissionURL = "https://" + submissionURL;

	window.open(submissionURL, "_blank");

	console.log(submissionURL);
	document.body.innerHTML += "<br><br>If the submission received page didn't open, please click this link to submit:<br><a href=" + submissionURL + ">Submit</a>";
}
function checkAnswers() {
	for(var i=0; i<miniTestList[currentPart-1].length; ++i) {
		userScores.push(0);
		var currentTestName = miniTestList[currentPart-1][i];
		for(var j=0; j<correctAnswers[currentTestName].length; ++j) {
			var correct = true;
			if(requiresSpecificCheck[currentTestName]) {
				if(userAnswers[currentTestName][j][0] == null) {
					correct = false;
				}
				else {
					switch(currentTestName) {
						case "divisibility":
							var responseNums = userAnswers[currentTestName][j][0].split(",");
							var correctNums = correctAnswers[currentTestName][j][0].split(",");
							for(var k=0; k<correctNums.length; ++k) {
								correctNums[k] = Number(correctNums[k]);
							}
							for(var k=0; k<responseNums.length; ++k) {
								responseNums[k] = Number(responseNums[k]);
								if(!correctNums.includes(responseNums[k])) {
									correct = false;
									break;
								}
							}
							if(/*still*/ correct) {
								for(var k=0; k<correctNums.length; ++k) {
									if(!responseNums.includes(correctNums[k])) {
										correct = false;
										break;
									}
								}
							}
							break;
						case "factorWholeNumbers":
							var responseNums = userAnswers[currentTestName][j][0].split(",");
							var correctNums = correctAnswers[currentTestName][j][0].split(",");
							for(var k=0; k<correctNums.length; ++k) {
								correctNums[k] = Number(correctNums[k]);
							}
							for(var k=0; k<responseNums.length; ++k) {
								responseNums[k] = Number(responseNums[k]);
								if(!correctNums.includes(responseNums[k])) {
									correct = false;
									break;
								}
							}
							if(/*still*/ correct) {
								for(var k=0; k<correctNums.length; ++k) {
									if(!responseNums.includes(correctNums[k])) {
										correct = false;
										break;
									}
								}
							}
							break;
						case "primeFactorization":
							var responseNums = userAnswers[currentTestName][j][0].split(",");
							var correctNums = correctAnswers[currentTestName][j][0].split(",");
							for(var k=0; k<correctNums.length; ++k) {
								correctNums[k] = Number(correctNums[k]);
							}
							while(responseNums.length > 0 && correctNums.length > 0) {
								if(responseNums.length != correctNums.length) {
									correct = false;
									break;
								}
								var currentNum = responseNums.pop();
								currentNum = Number(currentNum);
								var index = correctNums.indexOf(currentNum);
								if(index == -1) {
									correct = false;
									break;
								}
								else {
									correctNums.splice(index, 1);
								}
							}
							break;
						case "theNumberGame":
							var responseNums = userAnswers[currentTestName][j].slice(0);
							var correctNums = correctAnswers[currentTestName][j].slice(0);
							for(var k=0; k<correctNums.length; ++k) {
								correctNums[k] = Number(correctNums[k]);
							}
							while(responseNums.length > 0 && correctNums.length > 0) {
								if(responseNums.length != correctNums.length) {
									correct = false;
									break;
								}
								var currentNum = responseNums.pop();
								currentNum = Number(currentNum);
								var index = correctNums.indexOf(currentNum);
								if(index == -1) {
									correct = false;
									break;
								}
								else {
									correctNums.splice(index, 1);
								}
							}
							break;
						case "improperAndMixedFractions":
							if(userAnswers[currentTestName][j][1] != correctAnswers[currentTestName][j][1]) {
								correct = false;
							}
							else if(userAnswers[currentTestName][j][2] != correctAnswers[currentTestName][j][2]) {
								correct = false;
							}
							else if(correctAnswers[currentTestName][j][0] != 0) {
								if(userAnswers[currentTestName][j][0] != correctAnswers[currentTestName][j][0]) {
									correct = false;
								}
							}
							else {
								if(!(userAnswers[currentTestName][j][0] == "0" || userAnswers[currentTestName][j][0] == " " || userAnswers[currentTestName][j][0] == "" || userAnswers[currentTestName][j][0] == null)) {
									correct = false;
								}
							}
							break;
						case "percents":
							if(userAnswers[currentTestName][j][0].includes("%")) {
								userAnswers[currentTestName][j][0].splice(userAnswers[currentTestName][j][0].indexOf("%"), 1);
							}
							if(userAnswers[currentTestName][j][0] == correctAnswers[currentTestName][j][0]) {
								correct = false;
							}
							break;
						case "percentProblems":
							if(userAnswers[currentTestName][j][0].includes("%")) {
								userAnswers[currentTestName][j][0].splice(userAnswers[currentTestName][j][0].indexOf("%"), 1);
							}
							if(userAnswers[currentTestName][j][0] == correctAnswers[currentTestName][j][0]) {
								correct = false;
							}
							break;
					}
				}
			}
			else {
				for(var k=0; k<correctAnswers[currentTestName][j].length; ++k) {
					if(userAnswers[currentTestName][j] == null) {
						correct = false;
						break;
					}
					if(userAnswers[currentTestName][j][k] != correctAnswers[currentTestName][j][k]) {
						correct = false;
						break;
					}
				}
			}
			if(correct) {
				++userScores[i];
			}
		}
	}
}
function endTest() {
	var currentTestName = miniTestList[currentPart-1][currentTest];
	for(var i=userAnswers[currentTestName].length; i<correctAnswers[currentTestName].length; ++i) {
		userAnswers[currentTestName].push(null);
	}
	++currentTest;
	document.getElementById("timer").style.display = "none";
	if(currentTest >= miniTestList[currentPart-1].length) {
		checkAnswers();
		sendAnswers();
	}
	else {
		loadTest(currentTest);
	}
}
function timerLoop() {
	var currentTime = new Date().getTime();
	var timeElapsed = currentTime - currentMiniTestStartTime;
	var timeRemaining = ((timeLimits[currentLoadedMiniTest]*60*1000) - timeElapsed)/1000;
	timeRemaining = Math.max(timeRemaining, 0);
	var minutes = Math.floor(timeRemaining / 60);
	var minutesString = "0" + String(minutes);
	minutesString = minutesString.slice(-2);
	var seconds = Math.floor(timeRemaining - (minutes * 60));
	var secondsString = "0" + String(seconds);
	secondsString = secondsString.slice(-2);
	document.getElementById("min").innerHTML = minutesString;
	document.getElementById("sec").innerHTML = secondsString;

	if(timeRemaining == 0 || stopTimer) {
		stopTimer = false;
		endTest();
	}
	else {
		requestAnimationFrame(timerLoop);
	}
}
function loadNextQuestion() {
	++currentQuestion;
	if(currentQuestion-1 >= questions[miniTestList[currentPart-1][currentTest]].length) {
		stopTimer = true;
	}
	else {
		var currentTestName = miniTestList[currentPart-1][currentTest];
		for(var i=0; i<questions[currentTestName][currentQuestion-1].length; ++i) {
			var currentVal = questions[currentTestName][currentQuestion-1][i];
			document.getElementById(currentTestName + "Question" + String(i+1)).innerHTML = currentVal;
		}
		document.getElementById(currentTestName + "Answer1").focus();
	}
}
function submitAnswer() {
	var currentTestName = miniTestList[currentPart-1][currentTest];
	userAnswers[currentTestName].push([]);
	for(var i=0; i<correctAnswers[currentTestName][currentQuestion-1].length; ++i) {
		var ans = document.getElementById(currentTestName + "Answer" + String(i+1)).value;
		userAnswers[currentTestName][currentQuestion-1].push(ans);
	}
	clearAnswers();
	loadNextQuestion();
}
function skipQuestion() {
	var currentTestName = miniTestList[currentPart-1][currentTest];
	userAnswers[currentTestName].push([]);
	for(var i=0; i<correctAnswers[currentTestName][currentQuestion-1].length; ++i) {
		userAnswers[currentTestName][currentQuestion-1].push(null);
	}
	clearAnswers();
	loadNextQuestion();
}
function clearAnswers() {
	var currentTestName = miniTestList[currentPart-1][currentTest];
	for(var i=0; i<correctAnswers[currentTestName][currentQuestion-1].length; ++i) {
		document.getElementById(currentTestName + "Answer" + String(i+1)).value = "";
	}
}
function startTest() {
	currentQuestion = 0;
	document.getElementById("timer").style.display = "inline-block";
	currentMiniTestStartTime = new Date().getTime();
	requestAnimationFrame(timerLoop);
	sectionInProgress = true;
	document.getElementById(miniTestList[currentPart-1][currentTest] + "HideUntilStart").style.display = "inline-block";
	document.getElementById(miniTestList[currentPart-1][currentTest] + "SubmitButton").addEventListener("click", submitAnswer);
	document.getElementById(miniTestList[currentPart-1][currentTest] + "SkipButton").addEventListener("click", skipQuestion);
	document.getElementById(miniTestList[currentPart-1][currentTest] + "StartButton").style.display = "none";
	loadNextQuestion();
}
function loadTest(testNum) {
	document.getElementById("testExplanationCont").style.display = "none";
	document.getElementById("part" + String(currentPart) + "Explanation").style.display = "none";

	document.getElementById("testCont").style.display = "inline-block";
	document.getElementById("test" + String(currentPart)).style.display = "inline-block";
	for(var i=0; i<miniTestList[currentPart-1].length; ++i) {
		document.getElementById(miniTestList[currentPart-1][i]).style.display = "none";
	}
	document.getElementById(miniTestList[currentPart-1][testNum]).style.display = "inline-block";
	document.getElementById(miniTestList[currentPart-1][testNum] + "StartButton").addEventListener("click", startTest);
	currentLoadedMiniTest = miniTestList[currentPart-1][testNum];
}
function loadTestInstructions() {
	document.getElementById("testSelectionCont").style.display = "none";

	document.getElementById("testExplanationCont").style.display = "inline-block";
	document.getElementById("part" + String(currentPart) + "Explanation").style.display = "inline-block";
	document.getElementById("startWholeTest" + currentPart).addEventListener("click", function() {
		currentTest = 0;
		loadTest(currentTest);
	});
}
function setup() {
	firstName = prompt("What is your first name?");
	while(!validUsername(firstName)) {
		firstName = prompt("I'm sorry, but that's not a valid first name. Try again!");
	}
	lastName = prompt("What is your last name?");
	while(!validUsername(lastName)) {
		lastName = prompt("I'm sorry, but that's not a valid last name. Try again!");
	}
	school = prompt("What is your school?");
	while(!validUsername(school)) {
		school = prompt("I'm sorry, but that's not a valid school name. Try again!");
	}
	document.getElementById("testSelectionCont").style.display = "inline-block";
	for(var i=1; i<=4; ++i) {
		document.getElementById("testSelectionCheckbox" + String(i)).addEventListener("click", function(event) { clickedACheckbox(event); });
	}
}

window.setTimeout(setup, 0);
