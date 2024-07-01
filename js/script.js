let name = document.querySelector('.name');
let surname = document.querySelector('.surname');
let age = document.querySelector('.age');
let button = document.querySelector('.button');
let wrapper = document.querySelector('.cardd');
let fimg = document.querySelector('.fimg')
let form = document.querySelector('.form')

function isvalid() {
    if (name.value.length <3) {
        alert('kamida 3ta sozdan kop yozing')
        name.focus();
        name.style.outlineColor = 'red'
        return false;
    }
    if (Number(name.value)) {
        alert('bu yerga raqam yozmang')
        name.focus();
        name.style.outlineColor = 'red'
    }
    if (surname.value.length <3) {
        alert('kamida 3ta sozdan kop yozing')
        surname.focus();
        surname.style.outlineColor = 'red'
        return false;
    }
    if (Number(surname.value)) {
        alert('bu yerga raqam yozmang')
        surname.focus();
        surname.style.outlineColor = 'red'
    }

    if (age.value <7) {
        alert('yoshingiz kichkina')
        age.focus();
        age.style.outlineColor = 'red'
        return false;
    }
    
    
}


function getusers(){
    let users = [];
    if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'))
    }
    return users;
} 

function createcard(card){
    return`
    <div class="new">
                <img src="${card.fimg}" alt="">
            <p class="p1">${card.name}</p>
            <p class="p2">${card.surname}</p>
            <p class="p3">${card.age}</p>
            
            </div>
    `
}


button.addEventListener('click', function(event){
    event.preventDefault();
    
    

    let valid = isvalid();
    if (!isvalid) {
        return;
    }


    let users = getusers()
    let user = {
        name: name.value,
        surname: surname.value,
        age: age.value,
        fimg: fimg.value,
        id: Date.now()
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    form.reset();


    let card = createcard(user);
    const wrapper = document.querySelector('#wrapper');
    wrapper.innerHTML += card; 
})

