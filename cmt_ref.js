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



// dom 에서 null undefaied 처리
// function updateHTML(elmId, value) {
//     var elem = document.getElementById(elmId);
//     if(typeof elem !== 'undefined' && elem !== null) {
//       elem.innerHTML = value;
//     }
//   }



// ( () => fn(); )(); // 즉시시행함수 맨위로 가야한다. hiosting, 메모리 적재 순서 문제 
// window.onload 로 다 불러들인후 실행
// 익명함수는 즉시시행 함수가 잘 따라다닌다.
// 콜백함수 참고
// hoisting
// https://first-class.tistory.com/15

// 클로저 해설 
// https://poiemaweb.com/js-closure





// dom GENERATOR

// var DomFactory = (function (document) {

//     var api = {
//         element: function (name, attributes) {
//             var el = document.createElement(name);

//             if (attributes) {
//                 for (var key in attributes) {
//                     if (attributes.hasOwnProperty(key)) {
//                         el.setAttribute(key, attributes[key]);
//                     }
//                 }
//             }

//             return el;
//         },

//         div: function (attributes) {
//             return api.element('div', attributes);
//         }
//     };

//     return api;

// }(window.document));


// function attach(source, target, position) {
//     switch (position) {
//       case 'before': {
//         target.parentNode.insertBefore(source, target);
//         break;
//       }
//       case 'after': {
//         if (target.nextSibling) {
//           target.parentNode.insertBefore(source, target.nextSibling);
//         } else {
//           target.parentNode.appendChild(source);
//         }
//       }
//     }
//   }


// 노드

// class Node {
//     constructor(data, left = null, right = null) {
//       this.data = data;
//       this.left = left;
//       this.right = right;
//     }
//   }
  
//   class BST {
//     constructor() {
//       this.root = null;
//     }
  
//     add(data) {
//       const node = this.root;
//       if (node === null) {
//         this.root = new Node(data);
//         return;
//       } else {
//         const searchTree = function (node) {
//           if (data < node.data) {
//             if (node.left === null) {
//               node.left = new Node(data);
//               return;
//             } else if (node.left !== null) {
//               //left에 함수 있을 시 재귀 함수 적용
//               return searchTree(node.left);
//             }
//           } else if (data > node.data) {
//             if (node.right === null) {
//               node.right = new Node(data);
//               return;
//             } else if (node.right !== null) {
//               return searchTree(node.right);
//             }
//           } else {
//             return null;
//           }
//         };
//         return searchTree(node);
//       }
//     }
  
//     remove(data) {
//       //제거할 data의 파라미터를 두번째에 놓았다.
//       const removeNode = function (node, data) {
//         if (node == null) {
//           return null;
//         }
//         if (data == node.data) {
//           // node has no children ~ 밑에 뿌리가 없는 노드
//           if (node.left == null && node.right == null) {
//             return null;
//           }
//           // node has no left child  ~ left는 없는 경우 node right가 해당 삭제 데이터에 들어간다.
//           if (node.left == null) {
//             return node.right;
//           }
//           // node has no right child 
//           if (node.right == null) {
//             return node.left;
//           }
//           // node has two children
//           var tempNode = node.right;
//           //tempNode는 삭제할 node의 right가 되고
//           while (tempNode.left !== null) {
//             tempNode = tempNode.left; //다시 node right의 left가 된다.
//           }
//           node.data = tempNode.data; //그리고 삭제 node에는 위의 tempnode가 들어가게된다.
//           node.right = removeNode(node.right, tempNode.data);
//           return node;
//         } else if (data < node.data) {
//           node.left = removeNode(node.left, data);
//           return node;
//         } else {
//           node.right = removeNode(node.right, data);
//           return node;
//         }
//       }
//       this.root = removeNode(this.root, data);
//     }
//   }
  
//   const bst = new BST();
  
//   bst.add(9);
//   bst.add(4);
//   bst.add(17);
//   bst.add(3);
//   bst.add(6);
//   bst.add(22);
//   bst.add(5);
//   bst.add(7);
//   bst.add(20);
//   //console.log(bst)
//   //bst.remove(4)
//   console.log(bst)




// 노드 계속 
// https://developer.mozilla.org/ko/docs/Web/API/Node
// https://www.30secondsofcode.org/articles/s/js-data-structures-tree
// https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/


// Generator function
// https://cpro95.tistory.com/469


// 객체의 키 값 검색
// https://www.techiedelight.com/ko/find-value-array-objects-javascript/



// Y combinator javascript
//
// function Y(f) {
//     var g = f((function(h) {
//         return function() {
//             var g = f(h(h));
//             return g.apply(this, arguments);
//         }
//     })(function(h) {
//         return function() {
//             var g = f(h(h));
//             return g.apply(this, arguments);
//         }
//     }));
//     return g;
// }

// var fac = Y(function(f) {
//     return function (n) {
//         return n > 1 ? n * f(n - 1) : 1;
//     };
// });

// var fib = Y(function(f) {
//     return function(n) {
//         return n > 1 ? f(n - 1) + f(n - 2) : n;
//     };
// });


