/*
단위 환산
*/

const show = (s1, s2, l1, l2) => {
    if (s1.value == '℃')
        s2.value = '℉';
    else
        s2.value = '℃';
    l1.textContent = s1.value;
    l2.textContent = s2.value;
};

const show2 = (s1) => {
    if (s1.value == '℃')
        txt2.value = txt1.value * 9 / 5 + 32;
    else
        txt2.value = (txt1.value - 32) * 5 / 9;
};

document.addEventListener('DOMContentLoaded', () => {
    const sel1 = document.querySelector('#sel1');
    const sel2 = document.querySelector('#sel2');

    const txt1 = document.querySelector('#txt1');
    const txt2 = document.querySelector('#txt2');

    const label1 = document.querySelector('#label1');
    const label2 = document.querySelector('#label2');


    sel1.addEventListener('change', () => {
        show(sel1, sel2, label1, label2);
    });

    sel2.addEventListener('change', () => {
        show(sel2, sel1, label2, label1);
    });

    txt1.addEventListener('change', () => {
        show2(sel1);
    });

});