//
//
// OOP 
// https://photos.google.com/share/AF1QipOj3DRaArVO9X3lyxpI5W8vkcK8pokzo4CwZXbsJ5Xa3Z2vDHKVErxqi_7ffE43Fg?key=dkdGRFdkWUl6R3lfdnY5LWU3TS1YYUNiMlNqODlB
//

// binding
// https://velog.io/@danmin20/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-this-%EB%B0%94%EC%9D%B8%EB%94%A9%EC%9D%B4%EB%9E%80
// https://ko.javascript.info/bind

// DOM
// https://photos.google.com/share/AF1QipMppMn8mFbs8-0BVfxk8ULnYDRiwko9ZdxCV4KX4Vs9tjJ7tBZkGrSRqm0Jih3_7w?key=UXVJUkdMWEo5Y0tHNDhXUnp3YVdUdUNQVTB3a0JR
//

// DOM
// https://ko.javascript.info/dom-navigation


// MAP REDUCE
// https://developer-talk.tistory.com/146
// https://www.zerocho.com/category/JavaScript/post/5acafb05f24445001b8d796d
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays

// https://stackoverflow.com/questions/55538806/javascript-factorial-function-memoization

// let cache = {0: 1};
// function factMemoize(key) {
//     if (!cache[key]) {
//         let maxVal = Object.keys(cache).reduce(function (a, b) {
//             return Math.max(a, b);
//         });
//         console.log(maxVal);
//         while (key >= maxVal) {
//             cache[key] = key * factMemoize(key - 1);
//             maxVal++;
//         }
//     }
//     return cache[key];
// }

// Memoization
// https://medium.com/@soyoung823/memoization-cache-f8b5930e3ee1
// https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/

//피보나치 + 메모이제이션
// https://choonse.com/2022/01/23/675/


// Promise
// https://elvanov.com/2597
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


// btn.addEventListener('click', record_lot() );
// 콜백 반환값 없으면 무조건 익명함수 쓸것.
// 콜백의 리턴을 함수로 정의 가능.
// f(); 반환함수
// f()(); 반환함수 실행 

// https://deftkang.tistory.com/20


// DOM 으로 table 제작 
// 동적 테이블 Dynamic Table


// <script>
//     var x = document.createElement("TABLE");
//     x.setAttribute("id","myTable");
//     document.body.appendChild(x);

//     var y = document.createElement("TR");
//     x.setAttribute("id","myTr");
//     document.getElementById("myTable").appendChild(y);

//     var z = document.createElement("TD");
//     var t = document.createElement("cell");
//     z.appendChild(t);

//     document.getElementById("myTr").appendChild(z);
//     document.getElementById("myTable").style.border = "1px solid black"
// </script>

// document.x.appendChild(y) 가 아니다.
// https://velog.io/@msjulyone/TIL-0001.-Table%EB%A7%8C%EB%93%A4%EA%B8%B0

// tr 열 레코드처럼 추가 삭제
// https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=javaking75&logNo=140163950156




