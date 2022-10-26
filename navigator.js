
    // 교재 320p.

    const idxList = ["[Home]","[Dev Class]","[Dev Note]","[About]"];
    const purl = [
            "./index.html",
            "./class.html",
            "./devnote.html",
            "./about.html",
        ]; 
    (window.onload = function() {
        showIndex();


    })();




    // hd.setAttribute('class' , navitem);

    function showIndex() {
    //dvi 영역까지 스크립트로 흡수할것
    const hdr = document.createElement('div');
    hdr.setAttribute('id' , "header-idx");
    document.body.appendChild(hdr);
    //parentNode 대신 body
    // 2개 출력되는 현상은 스타일시트 정리 후 사라짐
    // 
    //var hdr = document.getElementById('header-idx');
        //격자괄호(대괄호)가 HOVER 상태에서만 나타나게 할것.
        // mouseon 에 따르는 설명창 추가

        // 아이콘 추가 += 연산자로 문자열 처리
        // dvi 내에 항목을 위치 (완료)

    for (var i=0;i<=idxList.length;i++) {

            const dv_hdr = document.createElement('div');
            dv_hdr.setAttribute('class' , "navitem");
            hdr.appendChild(dv_hdr);

            const hd = document.createElement('a');
            
            hd.textContent = idxList[i];
            hd.setAttribute('href' , purl[i]);
            hd.setAttribute('class' , "lstitem");

            dv_hdr.appendChild(hd);


            
            //var itemList = document.createTextNode(idxList[i]);
            // TAG 를 생성하지 못함
            //var navList = document.createElement("a");
            //navList.appendChild(itemList);
            //navList.href = purl[i];
            //navList.text = idxList[i];
            //itemList.appendChild(navList);

            //document.body.appendChild(navList);
            // 대상에 제대로 타겟을 잡지 못함
            }




            const selItem = document.getElementsByClassName('lstitem');
            
            selItem.addEventListner("mouseover", () => {
                console.log("정상진행");
                hd.textContent = `"[" + idxList + "]"`;
            });



        // const testIdx = [ "item1" , "item2" , "item3" ];
        // const prtIdx = testIdx.map( function(event) { `${testIdx}` } );
        
        
        // for (var j=0; j<=prtIdx.length; j++) {document.write(`<p>$(prtIdx[j])</p>`);}
        //while(prtIdx) {console.log(prtIdx);}
        
        // document.addEventListener('DOMContentLoaded' , () => {
        //     const navbar = document.querySelector('a');
        //     navbar.addEventListner("mouseon", (event) => {
        //         navbar
        //     });

        // });
        // mouse pointer 위치할때마다 대괄호 추가
        // hd는 전체항목이므로 개별 아이템에 접근해야 한다.
        


        // if (hd.hasChildNodes()) {
        //     var pglink = hd.childNodes;
        //     for (var i = 0; i < pglink.length; i++) {
        //         //
        //         pglink[i].addEventListner("mouseon", function(event) { 
                    
        //             pglink[i]=("["+${pglink[i]}+"]"); 
        //             hdr.appendChild(hd);
        //         });
        //         // cancat , join(array)

        //     }
        // };

    };

    // function topMargin() {
    //     const hddr = document.createElement('div');
    //     hddr.setAttribute('id' , "hdr-idx");
    //     document.body.appendChild(hddr);
    // };
     //2개 출력된다. 호출부 또한 비활성화함.