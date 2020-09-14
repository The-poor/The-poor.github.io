//设置图片切换效果
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    
    if(mySrc === './images/1.png'){
        myImage.setAttribute('src', './images/2.png');
    } else {
        myImage.setAttribute('src', './images/1.png');
    }
}


//设置个性化欢迎信息
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function set_user_name() {
    let myName = prompt('请输入你的名字');

    if(!myName || myName === null){
        set_user_name();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla 酷毙了' + myName;
    }
}

if(!localStorage.setItem('name')) {
    set_user_name();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Mozilla 酷毙了, " + storedName;
}

myButton.onclick = function() {
    console.log(1);
    set_user_name();
}