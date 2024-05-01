/*
1. DOM에서 제어할 노드를 가져 오기
2. 6개 버튼 클릭을 확인
3. 버튼 클릭이 되면
    -해당하는 버튼의 숫자를 추출 => 사용자 선택 숫자(user) => 이미지 변경
    -랜덤수를 생성 => 컴퓨터 숫자(com) => 이미지 변경
    -사용자 선택수(user)와 컴퓨터 선택수(com)을 비교
    -결과출력
*/
document.addEventListener("DOMContentLoaded", () => {
    const com = document.querySelector('#com');
    //const user = document.querySelector('#user');

    const bts = document.querySelectorAll('section > button');
    const result = document.querySelector('msg');
    console.log(bts);
/*
    //반복문1
    console.log('반복문1')
    for(let i = 0; i < bts.length; i++) {
        console.log(bts[i]);
    }
    //반복문2
    console.log('반복문2')
    for(let i in bts) {
        console.log(bts[i]);
    }
    //반복문3
    console.log('반복문3');
    bts.forEach((bt) => {
        console.log(bt)
    });
    //반복문4
    console.log('반복문4')
    for(let bt of bts) {
        console.log(bt)
    }
    for(let [i, bt] of bts.entries()) {
        console.log(i, bt)
    }
*/
    for(let bt of bts) {
        bt.addEventListener('click', () => {
            const user2 = parseInt(bt.innerHTML.slice(0,1));
            randomNumber = Math.floor(Math.random() * 6 + 1);
            com.setAttribute('src', `./img/${randomNumber}.png`);
            com.setAttribute('alt', `computer.${randomNumber}`);

            if(user2 == randomNumber) 
                msg.innerHTML = '맞음';
            else
                msg.innerHTML = '틀림';
            
        });
    }

});

function handleClick(n) {
    user.setAttribute('src', `./img/${n}.png`);
    user.setAttribute('alt', `user.${n}`);
}
