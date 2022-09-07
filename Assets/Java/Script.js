//buttons
var highBtn = document.querySelector("#highBtn");
var startBtn = document.querySelector("#startBtn");
var ansBtn = document.querySelector("#ansBtn");
var subBtn = document.querySelector("#subBtn");

//pages
var beginPg = document.querySelector("#Begin");
var questionPg = document.querySelector("#Question");
var endPg = document.querySelector("#End");
var scorePg = document.querySelector("#Score");

//header elements
var timeFull = document.querySelector(".highRight");
var timer = document.querySelector("#time");


var points = 0;
//Current page is based on var
//0 = Start, 1 = Quiz, 2 = End, 3 = High
var page = 0;
var totalQ = 0;
pageStart();

//Page Functions
function pageStart(){
    page = 0;

    pageReset();
    beginPg.style.display = "block";
}

function pageQuiz(){
    page = 1;

    pageReset();
    questionPg.style.display = "block";
}

function pageEnd(points){
    page = 2;

    pageReset();
    endPg.style.display = "block";
}

function pageHigh(){
    page = 3;

    highBtn.textContent = "Start Page"
    pageReset();
    scorePg.style.display = "block";
}

function pageReset(){
    beginPg.style.display = "none";
    questionPg.style.display = "none";
    endPg.style.display = "none";
    scorePg.style.display = "none";
}

//Button onClick Functions
highBtn.addEventListener("click", function(event) {

    if(page == 3){
        highBtn.textContent = "HighScores"
        pageStart();
    }
    else if (page == 2 || page == 1){
        if(window.confirm("Are you sure?\nYour Progress will be lost!")){
            pageHigh();
        }
    }
    else{
        pageHigh();
    }

});

//TODO Quiz Functionality
startBtn.addEventListener("click", function(event) {
    pageQuiz();
});

ansBtn.addEventListener("click", function(event) {
    pageEnd();
});

subBtn.addEventListener("click", function(event) {


    pageHigh();
});


//Other Functions
function timeStart(){

}