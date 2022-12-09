
'한'.charCodeAt(0).toString(16);
String.fromCharCode(parseInt(unicode,16))
String.fromCharCode(parseInt('\d55c',16));


window.addEventListener("keydown", (event) => {
  const p = document.createElement("p");
  p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
  document.getElementById("output").appendChild(p);
  window.scrollTo(0, document.body.scrollHeight);
}, true);

// 배열로 처리 후 객체 생성
var k_code = [
    'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0','Minus','Equal',
     'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO','KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
      'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote',
       'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash'
];



var k_lout = [27, 20, 17, 12, 17, 2, 7, 19, 13, 15,
19, 8, 6, 1, 4, 5, 3, 6, 14, 17,
21, 4, 20, 0, 18, 2, 11, 0, 12, 7, 16,
16, 1, 5, 8, 13, 9, 18 ];

var s_lout = [2, 9, 22, 14, 13, 
26, 25, 5, 15, 12, 
7, 6, 11, 10, 3, 
23, 18, 24, 3 ];



// vowel, consonant 처리 
    const sq1 = [ 9, 18, 19, 20, 21, 22, 28, 29, 30, 31, 32, 33, 39,40 ];
    const sq2 = [ 3, 4, 5, 6, 7, 8, 15, 16, 17, 25, 26, 27, 36, 37, 38 ];
    const sq3 = [ 0, 1, 2, 13, 14, 23, 24, 34, 35 ];
// sq4 는 숫자나 특수문자

const Digit1 = {

    keycode : 'Digit1',
    k_layval : 27, //
    s_layval : 2,
    k_sq : 3,
    s_sq : 3
};

const Digit2 = {

    keycode : 'Digit2',
    k_layval : 20, //
    s_layval : 9,
    k_sq : 3,
    s_sq : 3
};

const Digit3 = {

keycode : 'Digit3',
k_layval : 20, //
s_layval : 9,
k_sq : 3,
s_sq : 3
};


var k_code = [
    Digit1, Digit2, Digit3, Digit4, Digit5, Digit6, Digit7, Digit8, Digit9, Digit0, Minus, Equal,
     KeyQ, KeyW, KeyE, KeyR, KeyT, KeyY, KeyU, KeyI, KeyO, KeyP, BracketLeft, BracketRight, Backslash,
      KeyA, KeyS, KeyD, KeyF, KeyG, KeyH, KeyJ, KeyK, KeyL, Semicolon, Quote,
       KeyZ, KeyX, KeyC, KeyV, KeyB, KeyN, KeyM, Comma, Period, Slash
];


        // 한글자 배열 c 를 받은 후
        // 일련의 입력값으로 연결하여 검사
        // 2차원배열
        // 일정입력후 글자코드로 변환 후 배열을 비워야한다.
        // 시퀀스 처리

        // 검사부
        // console.log(kcode);
        // console.log(shift_on);
        // console.log(typeof kcode); // string
        // console.log(event.code);
        // console.log(typeof event.code); //string
        

        // kc_prt.textContent += kcode; //"${kcode}" string type에 맞출것
        
        // 자모검사 flag
        // first consonant
        // sq 12 또는 123 순서대로 입력되었는가 
        // 키 눌림과 복귀를 따로 처리하여 중복눌림 방지하고

        // let keyobj = k_code.find(k => k.keycode === kcode );
        // 시퀀스 처리 배열에 push
        // 
        // input(keyobj); // 함수 따로 정의할것.

        // kc_prt.textContent += kcode; //"${kcode}" string type에 맞출것

        // console.log(k_lout.valueOf('KeyA')); //작동되지 않는다
        // console.log(k_lout.'KeyA');
        // console.log(kcode);
        // console.log(shift_on);

            // kcode.addEventListener('change' , (event) => { 

    //     
    //     kc_prt.textContent += kcode; //"${kcode}" string type에 맞출것

    // });


    
// var lttr_first =
// k_code.find( k => k.sq === 1 );

// 배열연산 i++ sq 값 확인하면서 흐름제어, 분기함



// var obj = [
//     { name: 'Max', age: 23 },
//     { name: 'John', age: 20 },
//     { name: 'Caley', age: 18 }
// ];
 
// var found = obj.find(e => e.name === 'John');
// console.log(found);
 
// /*
//     결과: { name: 'John', age: 20 }
// */

// findIndex() idx 반환


// 키값에 해당하는 객체의 시퀀스를 확인하여 적합한 값을 초중종성에 배정하고 글자를 생성

// domcontentloaded 에 넣을지 결정해야 한다