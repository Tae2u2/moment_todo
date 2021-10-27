const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    //padstart함수는 괄호안에 첫번째는 제한 글자수 두번째는 모자란 걸 채우는 문자열
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes =String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
//1초에 한번씩 시간을 가져옴, interval = > 실시간으로 보이게 하는 함수 정해진 시간마다 함수를 실행시켜줌
//첫번째는 변수나 함수, 뒤에는 시간 1000 = 1초 ,매초 실행함
setInterval(getClock, 1000);