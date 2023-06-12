let newsImage1=document.querySelector('#news-Image-1');
let newsImage2=document.querySelector('.news-Image-2');
let newsImage3=document.querySelector('.news-Image-3');
let classIntroImage1=document.querySelector('.classIntro-Image-1');
let classIntroImage2=document.querySelector('.classIntro-Image-2');
let classIntroImage3=document.querySelector('.classIntro-Image-3');
let meau=document.querySelector('.meau');
let logo=document.querySelector('.container2');
let onetwo=document.querySelector('.onetwo');
function imgMove1(){
    let moveint=newsImage1.offsetTop/2;
    if(window.scrollY>moveint){
        newsImage1.classList.add('move');
    }
    else{
        newsImage1.classList.remove('move');
    }
}
window.addEventListener('scroll',imgMove1);

function imgMove2(){
    let moveint=newsImage2.offsetTop/2;
    if(window.scrollY>moveint){
        newsImage2.classList.add('move');
    }
    else{
        newsImage2.classList.remove('move');
    }
}
window.addEventListener('scroll',imgMove2);

function imgMove3(){
    let moveint=newsImage3.offsetTop/2;
    if(window.scrollY>moveint){
        newsImage3.classList.add('move');
    }
    else{
        newsImage3.classList.remove('move');
    }
}
window.addEventListener('scroll',imgMove3);

function imgMove4(){
    let moveint=classIntroImage1.offsetTop/2;
    moveint=moveint+150;
    if(window.scrollY>moveint){
        classIntroImage1.classList.add('moveagain');
    }
    else{
        classIntroImage1.classList.remove('moveagain');
    }
}
window.addEventListener('scroll',imgMove4);

function imgMove5(){
    let moveint=classIntroImage2.offsetTop/2;
    moveint=moveint+400;
    if(window.scrollY>moveint){
        classIntroImage2.classList.add('moveagain');
    }
    else{
        classIntroImage2.classList.remove('moveagain');
    }
}
window.addEventListener('scroll',imgMove5);

function imgMove6(){
    let moveint=classIntroImage3.offsetTop/2;
    moveint=moveint+50;
    if(window.scrollY>moveint){
        classIntroImage3.classList.add('moveagain');
    }
    else{
        classIntroImage3.classList.remove('moveagain');
    }
}
window.addEventListener('scroll',imgMove6);

logo.addEventListener('click',function(){
    meau.classList.toggle('showmeau')
})
onetwo.addEventListener('click',function(){
    meau.classList.toggle('showmeau')
})
function goTop(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}