/*
    1. DOM에서 제어할 노드를 가져오기
    2. 버튼이 눌러지면
    [확인버튼일때]
        - 랜덤수를 생성 => 랜덤수는 다시 하기 전까지 변경되면 안됨
        - input 박스 값이 없으면 '값을 입력하세요' 메시지 출력
        - input 박스 값이 1에서 100사이 숫자가 아니면 '입력오류' 메시지 출력
        - input 박스 값이 랜덤수 보다 작으면 up이미지, 
        - input 박스 값이 랜덤수 보다 크면 down이미지
        - input 박스 값이 랜덤수가 같으면 good이미지
            -input 보이지 않아야 함
            -버튼의 캡션을 '숫자를 생성해 주세요' 변경
    [숫자를 생성해 주세요 버튼일때]
        -초기화 : 랜덤수 새로생성, input 박스 보이기 ..
    3. 
*/

//화면 이미지
const showImg = (imgName) => {
    const updownImg = document.querySelector('#updownImg');

    updownImg.setAttribute('src', `./img/${imgName}.png`);
    updownImg.setAttribute('alt', `${imgName}`);
}


document.addEventListener('DOMContentLoaded', () => {
    
    const input = document.querySelector('#txt1');
    const bt = document.querySelector('#bt');

    let n;
    let flag = false;
    let imgName;
    
    bt.addEventListener('click', (e)=>{
        
        // 폼 태그사용시 
        e.preventDefault();
        
        //랜덤수 생성 : flag가 true일때만 생성
        if(!flag) {
            flag = true;
            n = Math.floor(Math.random() * 100) + 1;
            console.log('n=', n);

            showImg('what');
            input.style.display = 'inline';
            bt.textContent = '확인';
        }
        
        //입력값 체크
        if(input.value == '') {
            alert('값을 입력하세요.');
            input.focus();
            return;
        }

        //입력값이 1에서 100 사이가 아닐경우
        if((input.value < 1) || (input.value > 100)) {
            alert('[입력오류] 1~100사이의 숫자를 입력하세요.');
            input.focus();
            return;
        }

        
        //input 박스 값이 랜덤수 보다 작으면 up이미지, 
        //input 박스 값이 랜덤수 보다 크면 down이미지
        //input 박스 값이 랜덤수가 같으면 good이미지
        if(input.value < n) 
            imgName = 'up';
        else if (input.value > n)
            imgName = 'down';
        else {
            imgName = 'good';

            input.style.display = 'none';
            bt.textContent = '숫자를 다시 생성해 주세요.';
            flag = false;
            input.value = '';
        }
        
        if(imgName === 'up' || imgName === 'down') {
            input.value = '';
            input.focus();
        }
            
        showImg(imgName);
    });
});