import * as $ from '../export/editor.export.main';

$.qsa("#openFile", true).addEventListener("change", function( e ) {
    var xhr,
        dir,
        form = document.createElement("form");
    form.appendChild( e.target.cloneNode( true ) );

    dir = ( e.target.files[ 0 ].webkitRelativePath ).split("/");
    $.qsa(".act-foldername", true).innerHTML = dir[dir.length - 2 ];
    $.qsa(".project-name strong", true).innerHTML = dir[dir.length - 2 ];
    window.localStorage.setItem("foldername", dir[dir.length - 2 ] );
    
    xhr = new window.XMLHttpRequest();
    xhr.open("POST", "./api/upload.files.php", true);
    xhr.onload = function() {
        if ( xhr.readyState === xhr.DONE && ( xhr.status >= 200 && xhr.status < 300 ) ) {
            if ( this.response === "success" ) {
                $.qsa(".refresh-files-folders", true).click();
            }
        }
    }
    xhr.send( new FormData( form ) );
} );

$.qsa(".new-file-add", true).addEventListener("click", function() {
    document.querySelector(".add-files").click();
} );

var localfolder = window.localStorage.getItem("foldername");
if ( localfolder ) {
    $.qsa(".project-name strong", true).innerHTML = localfolder;
    $.qsa(".act-foldername", true).innerHTML = localfolder;
}