import * as $ from '../export/editor.export.main';
import { removeTopnavigationlist } from './top.nav.list.control';

export function filesAndCodeHandling() {
    var filename,
        setup,
        spaces,
        refer,
        lines,
        htmlData,
        lang = { ".js": "JAVASCRIPT", ".css": "CSS", ".html": "HTML" },
        files = [].slice.call( $.qsa(".editor-active-files-folders ul span li") );

    files.forEach( function( elem ) { elem.addEventListener("click", function() {
        filename = this.dataset["includesFilename"];
        setup = "../pages/" + filename;

        $.qsa(".open-setting-json", true).style.display = "none"; // setting file ico

        $.qsa(".act-filename", true).innerHTML = filename;
        $.qsa(".editor-active-language .lan", true).innerHTML = lang[ ( filename.match(/\.\w+$/) || [] ).slice( -1 ) ];
        
        $.ajax("./api/res.pagedata.php", function( res ) {
            if ( res != null ) {
                // convert res to html data and secure res data
                res = res.replace(/</g, "&lt;").replace(/>/g, "&gt;");

                htmlData = '<div class="frame"><pre class="data" contenteditable="true" spellcheck="false">' + res + '</pre></div>';
                $.qsa(".editor-code-edit-frame", true).innerHTML = htmlData;
                $.qsa(".frame pre", true).focus();

                htmlData = $.qsa(".frame .data", true).innerHTML;

                htmlData = ( htmlData.match(/\s|\n/g) || [] ).join("");
                lines = ( htmlData.match(/\n/g) || [] ).length;
                htmlData = htmlData.replace(/\n/g, "");
                spaces = ( htmlData.match(/\s/g ) || [] ).length;

                $.qsa(".editor-code-spaces .spaces", true).innerHTML = spaces;
                $.qsa(".editor-line-col .ln", true).innerHTML = lines;

                $.qsa(".frame .data", true).addEventListener("keydown", function( e ) {
                    if ( e.keyCode === 9 ) {
                        e.preventDefault();

                        var editor = this;
                        var doc = editor.ownerDocument.defaultView;
                        var selec = doc.getSelection();
                        var range = selec.getRangeAt( 0 );

                        var tabNode = document.createTextNode("\u00a0\u00a0\u00a0\u00a0");
                        range.insertNode( tabNode );
                
                        range.setStartAfter(tabNode);
                        range.setEndAfter(tabNode);
                        selec.removeAllRanges();
                        selec.addRange( range );
                    }
                } );

                var Ln = $.qsa(".editor-line-col .ln", true);

                $.qsa(".frame .data", true).addEventListener("keyup", function( e ) {
                    htmlData = $.qsa(".frame .data", true).innerHTML.replace(/<br>/g, "\n");

                    refer = ( htmlData.match(/\s/g) || [] ).join("");
                    lines = ( refer.match(/\n/g) || [] ).length;
        
                    refer = htmlData.replace(/\n/g, "");
                    spaces = ( refer.match(/\s/g ) || [] ).length;

                    $.qsa(".editor-code-spaces .spaces", true).innerHTML = spaces;

                    if ( e.keyCode === 13 && lines ) {
                        $.qsa(".editor-line-col .ln", true).innerHTML = ( parseInt( Ln.innerHTML ) + 1 );
                    }
                    
                    if ( e.keyCode === 8 && lines ) {
                        $.qsa(".editor-line-col .ln", true).innerHTML = ( parseInt( Ln.innerHTML ) - 1 );
                    }
                } );
            }

            var li = document.querySelectorAll(".editor-filename-tab li");

            [].slice.call( li ).forEach( function( el ) {
                el.classList.remove("editor-active-page");
            } );

            [].slice.call( li ).forEach( function ( elem ) {

                if ( elem.dataset["actFiles"] === filename ) {
                    elem.style.display = "";
                    elem.classList.add("editor-active-page");
                    $.qsa(".editor-active-page-nav", true).style.display = "";
                }

                elem.addEventListener("click", function() {
                    [].slice.call( li ).forEach( function( el ) {
                        el.classList.remove("editor-active-page");
                    } );

                    this.classList.add("editor-active-page");
                    $.qsa(".act-filename", true).innerHTML = this.dataset["actFiles"];
                    
                    var identifier = this.dataset["actFiles"];

                    [].slice.call( $.qsa(".editor-filename-tab li") ).forEach( function( elx ) {
                        if ( elx.style.display !== "none" ) {
                            getPageData("./api/res.pagedata.php", identifier,  $.qsa(".editor-code-edit-frame", true) );
                        }
                    } );
                } );
            } );

            removeTopnavigationlist();
            saveDataResponse( setup );
        
        }, "path=" + setup );
    } );  } );
}

function getPageData( url, pagename, preview ) {
    var setup = "../pages/" + pagename;

    $.ajax( url, function( res ) {
        if ( res != null ) {
            res = res.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\t/g, " ").replace(/\n/g, " ");
            preview.innerHTML = '<div class="frame"><pre class="data" contenteditable="true" spellcheck="false">' + res + '</pre></div>';
            saveDataResponse( setup );
        }
    }, "path=" + setup );
}

function saveDataResponse( pagename, code ) {
    var form = document.createElement("form"),
        inpf = document.createElement("input"),
        inpd = document.createElement("input");
    inpf.value = pagename;
    inpf.name = "page";
    inpd.name = "data";
    form.append( inpf );
    form.append( inpd );

    // save files data
    $.qsa(".editor-code-edit-frame pre", true).addEventListener("input", function() {
        code = this.textContent.replace(/\&lt;/g, "<").replace(/\&gt;/g, ">");
        code = code.replace(/\&nbsp;/g, " ").replace(/\<br\>/g, "\n\n");
        code = code === '<pre class="data" spellcheck="false" style="width: 1035px;"><br></pre>' ? "" : code;
        inpd.value = code || " ";

        var xhr = new window.XMLHttpRequest();
        xhr.open("POST", "./api/save.data.php", true );
        xhr.onload = function() {
            if ( xhr.readyState === xhr.DONE && ( xhr.status >= 200 && xhr.status < 300 ) ) {
                // console.log(this.response)
            }
        }
        xhr.send( new FormData( form ) );
    } );
}