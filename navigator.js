
    // 교재 320p.

    var idxList = ["[Home]","[Dev Class]","[Dev Note]","[Contact]"];
    var purl = [
            "./index.html",
            "./class.html",
            "./devnote.html",
            "./contact.html",
        ]; 
    (window.onload = function() {
        


    var hdr = document.getElementById('header-idx');
        for (var i=0;i<=idxList.length;i++) {


            const hd = document.createElement('a');
            
            hd.textContent = idxList[i];
            hd.setAttribute('href' , purl[i]);
            hdr.appendChild(hd);

            //var navList = document.createElement("a");
            //var itemList = document.createTextNode(idxList[i]);

            //navList.appendChild(itemList);
            //navList.href = purl[i];
            //navList.text = idxList[i];
            

            //document.body.appendChild(navList);

        }
    })();
