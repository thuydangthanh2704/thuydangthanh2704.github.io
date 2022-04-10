const divModel = document.querySelector('.js-imgTShirt')
const divOpenModel = document.querySelector('.model-tshirt')
const iconCloseModel = document.querySelector('.js-cancel-icon')

function openModel(){
    divOpenModel.classList.add('open')
}

function closeModel(){
    divOpenModel.classList.remove('open')
}
divModel.addEventListener('click', openModel)
iconCloseModel.addEventListener('click',closeModel)
//
const divModelHoodie = document.querySelector('.js-imgHoodie')
const divOpenModelHoodie = document.querySelector('.model-hoodie')
const iconCloseModelHoodie = document.querySelector('.js-cancel-icon-hoodie')

function openModelHoodie(){
    divOpenModelHoodie.classList.add('openHoodie')
}

function closeModelHoodie(){
    divOpenModelHoodie.classList.remove('openHoodie')
}

divModelHoodie.addEventListener('click', openModelHoodie)
iconCloseModelHoodie.addEventListener('click',closeModelHoodie)

//
const divModelSweater = document.querySelector('.js-imgSweater')
const divOpenModelSweater = document.querySelector('.model-sweater')
const iconCloseModelSweater = document.querySelector('.js-cancel-icon-sweater')

function openModelSweater(){
    divOpenModelSweater.classList.add('openSweater')
}
function closeModelSweater(){
    divOpenModelSweater.classList.remove('openSweater')
}

divModelSweater.addEventListener('click', openModelSweater)
iconCloseModelSweater.addEventListener('click',closeModelSweater)

//
const divModelTat = document.querySelector('.js-imgTat')
const divOpenModelTat = document.querySelector('.model-tat')
const iconCloseModelTat = document.querySelector('.js-cancel-icon-tat')
function openModelTat(){
    divOpenModelTat.classList.add('openTat')
}
function closeModelTat(){
    divOpenModelTat.classList.remove('openTat')
}
divModelTat.addEventListener('click', openModelTat)
iconCloseModelTat.addEventListener('click', closeModelTat)