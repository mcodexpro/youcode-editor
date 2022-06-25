import * as $ from '../export/editor.export.main';

var sendData, themetrigger = $.qsa(".editor-color-theme-trigger", true);

export function executeTheme( keyCode ) {
    if ( keyCode && typeof keyCode === "number" ) {
        $.qsa(".editor-top-status-bar-layout", true).style.display = ""
        return;
    }
    
    $.qsa(".editor-top-status-bar-layout", true).style.display = "block";
    
    [].slice.call( $.qsa(".options-theme div") ).forEach( function( elem ) {
        elem.addEventListener("click", function( _ev ) {
            sendData = elem.dataset["theme"];

            $.ajax("./api/settings.php", function( _res ) {
                _res = ( _res.match(/(dark|light)+$/i) || [] )[ 0 ];
                document.querySelector(".editor-code-editable-component").dataset["editorTheme"] = _res;
                document.querySelector(".public-part").dataset["editorTheme"] = _res;
                document.querySelector(".youcode_editor").dataset["editorTheme"] = _res;
            }, "theme=" + sendData );

            $.qsa(".editor-top-status-bar-layout", true).style.display = "";
        } );
    } );
}

export function controlTheme() {
    themetrigger.addEventListener("click", function( _e ) {
        executeTheme();
    } );
}
controlTheme();