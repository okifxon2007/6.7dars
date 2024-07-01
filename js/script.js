let ism = document.querySelector('.ism');
let button = document.querySelector('.btnn');
let delet = document.querySelector('#delete');
let wrapper = document.querySelector('#wrapper')

function validate(){
    if (ism.value.length < 5) {
        return false;
        alert('6tadan kop hardan iborat bolsin');
        ism.focus();
        ism.style.outlineColor = 'red'
    }
    return true
}

function creatitem(value){
    return `
    
    <div class="pend" >
    <p class="ismim">${value}</p>
    <button class="btnnn" id="#delete">delete</button>
 </div>
    
    `
}
function saveitem(value){
    const todo = {
        ism:value,
        id: Date.now()
    }
    let data = [];
    if(localStorage.getItem('todos')){
        data.JSON.parse(localStorage.getItem('todos'))
    }
    data.push(todo);    
    localStorage.setItem('todos', JSON.stringify(data))
}
button && button.addEventListener('click', function(e){
    e.preventDefault();
    const isvalid = (validate);
    if (!isvalid) {
        return;
    }

    const item = creatitem(ism.value);

    wrapper.innerHTML += item;
    ism.value =''
    ism.focus();


   
    
})

local && local.addEventListener('click', function(e){
    e.preventDefault();
    let name = 'okifxon'
    localStorage.setItem('ism', value)
})