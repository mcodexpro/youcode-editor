export function removeTopnavigationlist() {
    var nextS, 
        list = document.querySelectorAll(".editor-filename-tab li .close-files");

    [].slice.call( list ).forEach( function( li ) {
        li.addEventListener("click", function() {

            this.parentNode.nodeName === "LI" ? this.parentNode.style.display = "none" : null;
            if ( this.parentNode.style.display !== "none" ) {
                document.querySelector(".editor-active-page-nav").style.display = "";
            }
            
            li = this.parentNode;
            
            while( ( li = li.previousElementSibling ) && li.nodeType !== 9 ) {
                if ( li.className !== "editor-filename-tab" && li.style.display !== "none" ) {
                    li.classList.add("eap");
                    break;
                }
            }

            if ( li == null ) {
                nextS = this.parentNode;
                while( ( nextS = nextS.nextElementSibling) && nextS.nodeType ) {
                    if ( nextS.style.display !== "none" ) {
                        nextS.classList.add("eap");
                        break;
                    }
                }
            }

            var access = false;

            document.querySelector(".editor-active-page-nav").style.display = "none";
            [].slice.call( document.querySelectorAll(".editor-filename-tab li") ).forEach( function( exli ) {

                if ( exli.style.display !== "none") {
                    document.querySelector(".editor-active-page-nav").style.display = "";
                    access = true;
                }
            } );

            if ( !access ) {
                document.querySelector(".editor-code-edit-frame").innerHTML = "";
            }
        } );

        var pre = document.querySelector(".frame pre");
        document.querySelector(".xeww").dataset["setupJson"] ? pre.classList.add("word-wrap-on") : null;

        if ( document.querySelector(".xefw").dataset["setupJson"] ) {
            pre.style.fontWeight = document.querySelector(".xefw").dataset["setupJson"];
            [].slice.call( pre.querySelectorAll("*") ).forEach( function( el ) {
                el.style.fontWeight = document.querySelector(".xefw").dataset["setupJson"];
            } );
        }

        if ( document.querySelector(".xeff").dataset["setupJson"] ) {
            pre.style.fontFamily = document.querySelector(".xeff").dataset["setupJson"];
            [].slice.call( pre.querySelectorAll("*") ).forEach( function( el ) {
                el.style.fontFamily = document.querySelector(".xeff").dataset["setupJson"];
            } );
        }
    } );
}