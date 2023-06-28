
var personal_info_1 = document.getElementById('personal-info_1');
var personal_info_2 = document.getElementById('personal-info_2');
var inFo=document.getElementsByClassName('item3');
var view=document.getElementsByClassName('view');
;
const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
personal_info_2.hidden=true;

console.log('okokok');

function checkMail(){
    var inputEmail = document.getElementById('inputEmail').value
    if(inputEmail.match(regexMail)){
        personal_info_1.hidden=true;
        personal_info_2.hidden=false;
    }else document.getElementById('idTB').innerHTML = 'sai định dạng mail';
}

function hiddenInfo(){
    for (let i = 0; i < inFo.length; i++) {
        inFo[i].hidden=true;
    }
}
hiddenInfo();

function showInfo(index){
    
    if(view[index].innerHTML=='View More'){
        view[index].innerHTML='View Less';
        inFo[index].hidden=false;
    }else{
        view[index].innerHTML='View More';
        inFo[index].hidden=true;
    }
}