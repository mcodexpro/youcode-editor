import * as $ from '../export/editor.export.main';
import { filesAndCodeHandling } from '../core/editor.main';

var isSuccess = false;
$.qsa(".add-files", true).addEventListener("click", function() {

    var inputData = $.qsa(".editor-create-file-input input", true),
        rsupport = /\.(?:html|js|css)+$/,
        rinvalid = /[\\\/\:\*\?\|"\<\>]/,
        fileError = $.qsa(".editor-create-file-suggession-error", true);

    $.qsa(".editor-create-file-input", true).style.display = "";
    $.qsa(".editor-create-file-input input", true).focus();
    
    inputData.addEventListener("input", function() {
       
        if ( this.value && rinvalid.test( this.value ) ) {
            fileError.style.display = "block";
            fileError.innerHTML = `A file name '${ this.value }' can't contain any of the following [\/:&?|"<>] characters:`;

        } else if ( this.value && !rsupport.test( this.value ) ) {
            fileError.style.display = "block";
            fileError.innerHTML = "Unsupport language '" + inputData.value + "' please choose .html .css .js languages";

        } else {
            fileError.style.display = "none";
            fileError.innerHTML = "";
            isSuccess = true;
            return true;
        }
    } );
} );

function sendFileData() {
    $.qsa(".editor-create-file-input form", true).addEventListener("submit", function( e ) {
        e.preventDefault();

        if ( !isSuccess ) {
            return;
        }
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "./api/file.handling.php", true);
        xhr.onload = function() {
            if ( xhr.readyState === xhr.DONE && ( xhr.status >= 200 && xhr.status < 300 ) ) {
                if ( this.response !== "error" ) {
                    var data = document.createElement("span");
                    data.innerHTML = this.response;

                    insertCreatedFile( data );
                    inputData.value = ""; // reset file creater input value
                }
            }
        }
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("filename=" + inputData.value );
    } );
}
sendFileData();

function insertCreatedFile( data ) {
    $.ajax("./api/file.handling.php?show-files=true", function( res ) {
        var span = document.createElement("span");
        span.innerHTML = res;
                
        $.qsa(".editor-active-files-folders ul", true).appendChild( !!data ? data : span );
        runtopnavData();
        filesAndCodeHandling();
    } );
}
insertCreatedFile();

function runtopnavData() {
    var peresentFiles = document.querySelectorAll(".editor-active-files-folders span li");
            
    [].slice.call( peresentFiles ).forEach( function ( elem ) {
        var li = document.createElement("li"),
            exename = elem.dataset["includesFilename"],
            aexe = ( exename.match( /\.\w+$/ ) || [] ).slice( -1 ),
            datax = `<div class="editor-file-icon">
                        <div class="e-f-ico" style="width: 18px; height: 18px;">
                            <img src="./container/support-lang-ico/${aexe.join("").slice( 1 )}.svg" alt="" draggable="false">
                        </div>
                    </div>
                    <div class="editor-file-name">
                        <span>${elem.dataset["includesFilename"]}</span>
                    </div>
                    <div class="editor-close-active-page close-files">
                        <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path> </svg> </span>
                    </div>`;

        li.innerHTML = datax;
        li.dataset["actFiles"] = elem.dataset["includesFilename"];
        li.style.display = "none";

        $.qsa(".editor-filename-tab", true).appendChild( li );
    } );
}

$.qsa(".editor-active-files-folders ul", true).addEventListener("dblclick", function() {
    $.qsa(".editor-create-file-input", true).style.display = "";
    $.qsa(".editor-create-file-input input", true).focus();
} );

$.qsa(".editor-active-files-folders ul", true).addEventListener("contextmenu", function( e ) {
    e.preventDefault();
} );

var inputData = $.qsa(".editor-create-file-input input", true),
    match = $.qsa(".add-files", true), matched = match.querySelector("svg");

document.addEventListener("click", function( e ) {
    if ( !( e.target === inputData ||  e.target === match || e.target === matched || e.target === $.qsa(".new-file-add", true) ) ) {
        $.qsa(".editor-create-file-input", true).style.display = "none";
    }
} );

function refreshUploadedOrCreatedFiles() {
    [].slice.call($.qsa(".editor-active-files-folders ul li")).forEach( function( list ) {
        if ( list.className !== "editor-create-file-input" ) {
            list.parentNode.removeChild( list );
        }
    } );

    [].slice.call($.qsa(".editor-filename-tab li") ).forEach( function( elem ) {
        if ( elem.parentNode ) {
            elem.parentNode.removeChild( elem );
        }
    } );

    window.localStorage.removeItem("existFilename");
    insertCreatedFile();
}

window.refreshUploadedOrCreatedFiles = refreshUploadedOrCreatedFiles;

$.qsa(".refresh-files-folders", true).addEventListener("click", function() {
    refreshUploadedOrCreatedFiles();
} );