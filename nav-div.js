
    // 교재 320p.

    const idxList = ["[Home]","[Dev Class]","[Dev Note]","[Contact]"];
    const purl = [
            "./index.html",
            "./class.html",
            "./devnote.html",
            "./contact.html",
        ]; 
    (window.onload = function() {
        showIndex();
        //topMargin();
        //한번더 나오는 문제가 있으며 이 함수를 호출하지 않고 
        //본문내의 div의 top 을 충분히 주면 해결된다.
    })();

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
        // 아이콘 추가 
        // dvi 내에 항목을 위치시켜 

    for (var i=0;i<=idxList.length;i++) {


            const hd = document.createElement('a');
            
            hd.textContent = idxList[i];
            hd.setAttribute('href' , purl[i]);
            
            hdr.appendChild(hd);

            // hd.addEventListner("mouseon", function() {  
            //     hd.textContent=("\[" + idxList[i] + "\]"); 
            // });

            //var navList = document.createElement("a");
            //var itemList = document.createTextNode(idxList[i]);

            //navList.appendChild(itemList);
            //navList.href = purl[i];
            //navList.text = idxList[i];
            

            //document.body.appendChild(navList);

        }


        // const testIdx = [ "item1" , "item2" , "item3" ];
        
        // const prtIdx = testIdx.map( function(event) { `${testIdx}` } );
        
        
        // for (var j=0; j<=prtIdx.length; j++) {document.write(`<p>$(prtIdx[j])</p>`);}
        //while(prtIdx) {console.log(prtIdx);}
        
        // mouse pointer 위치할때마다 대괄호 추가
        // hd는 전체항목이므로 개별 아이템에 접근해야 한다.
        // childNode 
        // hd.addEventListner("mouseon", function() {});

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

    }

    // function topMargin() {
    //     const hddr = document.createElement('div');
    //     hddr.setAttribute('id' , "hdr-idx");
    //     document.body.appendChild(hddr);
    // };
     //2개 출력된다. 호출부 또한 비활성화함.