import * as $ from '../export/editor.export.main';

$.qsa(".create-zip-file", true).addEventListener("click", function() {

    var xhr = new window.XMLHttpRequest();
    xhr.open("GET", "./api/download.zip.php?task=convert-zip", true);
    xhr.onload = function() {
        if ( xhr.readyState === 4 && ( xhr.status >= 200 && xhr.status < 300 ) ) {
            if ( typeof this.response === "string" && this.response ) {
                $.qsa(".download-zip-file", true).dataset["zipname"] = this.response;
                window.localStorage.setItem("zipname", this.response);
            }
        }
    }
    xhr.send();
} );

function deleteAllFiles() {
    $.ajax("./api/download.zip.php?task=delete-files", function( res ) {
        if ( res === "success" ) {
            refreshUploadedOrCreatedFiles();
            $.qsa(".act-foldername", true).innerHTML = "YCPF";
            window.localStorage.setItem("foldername", "YCPF");
        }
    } );
}

$.qsa(".delete-all-files", true).addEventListener("click", function() {
    deleteAllFiles();
} );

var zipname;

if ( ( zipname =  window.localStorage.getItem("zipname") ) ) {
    $.qsa(".download-zip-file", true).dataset["zipname"] = zipname;
}

$.qsa(".download-zip-file", true).addEventListener("click", function() {
    deleteAllFiles();
    var url = "./client/" + this.dataset["zipname"];
    var anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = this.dataset["zipname"];
    anchor.click();
} );