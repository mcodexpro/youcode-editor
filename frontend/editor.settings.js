import * as $ from '../export/editor.export.main';
import { executeTheme } from './editor.theme';

var settingtrigger = $.qsa(".editor-settings-trigger", true);

export function executeSetting( runOnlytab ) {
    var getpagename, activepage, insertData, parseHTML, settingData,
        aiselect, showOpt, optmainparent, closetab;

        $.qsa(".open-setting-json", true).style.display = "flex";

    $.ajax("./setting/setting.php", function( res ) {
        if ( runOnlytab === undefined ) {
            $.qsa(".editor-code-edit-frame", true).innerHTML = res;

            getpagename = $.qsa(".editor-core", true).dataset["editorPage"];
            activepage = `<li class="${ getpagename } editor-active-page">
                <div class="editor-file-icon">
                    <div class="e-f-ico" style="width: 18px; height: 18px;">
                        <span> <svg width="16" height="16" fill="currentcolor" viewBox="0 0 20 20"> <path d="M17.206,5.45l0.271-0.27l-4.275-4.274l-0.27,0.269V0.9H3.263c-0.314,0-0.569,0.255-0.569,0.569v17.062 c0,0.314,0.255,0.568,0.569,0.568h13.649c0.313,0,0.569-0.254,0.569-0.568V5.45H17.206z M12.932,2.302L16.08,5.45h-3.148V2.302z M16.344,17.394c0,0.314-0.254,0.569-0.568,0.569H4.4c-0.314,0-0.568-0.255-0.568-0.569V2.606c0-0.314,0.254-0.568,0.568-0.568 h7.394v4.55h4.55V17.394z"> </path> </svg> </span>
                    </div>
                </div>
                <div class="editor-file-name">
                    <span>${ getpagename }</span>
                </div>
                <div class="editor-close-active-page close-setting-page">
                    <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path> </svg> </span>
                </div>
            </li>`;
            insertData = $.qsa(".editor-filename-tab", true);
            parseHTML = document.createElement("fieldset");
            parseHTML.innerHTML = activepage;

            parseHTML.firstElementChild.querySelector(".close-setting-page").addEventListener("click", function() {
                $.qsa(".open-setting-json", true).style.display = "none";
            } );

            if ( !insertData.querySelector( "."+getpagename ) ) {
                insertData.append( parseHTML.firstElementChild );
            }
            

            // set settings data from settings json file
            $.ajax("./settings/settings.json", function( resJSON ) {
                resJSON = resJSON[ 0 ];
               
                if ( resJSON["editor.animation"] !== true ) {
                    $.qsa(".handle-checkbox input", true).checked = false;
                }
                if ( resJSON["editor.wordWrap"] === false ) {
                    $.qsa(".word-wrap span", true).innerHTML = "off";
                    document.querySelector("#editorWw").value = "off";
                }
                $.qsa(".color-theme span", true).innerHTML = resJSON["editor.theme"];
                $.qsa("#efw", true).value = resJSON["editor.fontWeight"];
                $.qsa("#efs", true).value = resJSON["editor.fontSize"];
                $.qsa("#eff", true).value = resJSON["editor.fontFamily"];
                $.qsa(".auto-save span", true).innerHTML = resJSON["editor.autoSave"] || "off";
                $.qsa("#editorAs", true).value = resJSON["editor.autoSave"] || "off";
                $.qsa(".e-as-d span", true).innerHTML = resJSON["editor.autoSave.delay"];
                $.qsa("#easd", true).value = resJSON["editor.autoSave.delay"];
            } );

            var keypaire, values;
            aiselect = $.qsa(".ai-select");

            [].slice.call(aiselect).forEach( function( elem ) {
                elem.addEventListener("click", function() {
                    showOpt = this.parentNode.querySelector(".editor-opt-all");
                    !!showOpt ? showOpt.classList.toggle("show-opt") : null;

                    if ( !!showOpt ) {
                        [].slice.call( showOpt.querySelectorAll(".option.data-values")).forEach( function( opt ) {
                            opt.addEventListener("click", function( _e ) {
                                settingData = this.innerHTML;
                                optmainparent = this.parentNode.parentNode;
                                optmainparent.classList.remove("show-opt");
                                optmainparent.parentNode.querySelector(".data-values span").innerHTML = this.innerHTML;

                                
                                if ( optmainparent.dataset["themeRun"] ) {
                                    document.querySelector(".editor-code-editable-component").dataset["editorTheme"] = settingData;
                                    document.querySelector(".public-part").dataset["editorTheme"] = settingData;
                                    document.querySelector(".youcode_editor").dataset["editorTheme"] = settingData;
                                }

                                keypaire = optmainparent.parentNode.querySelector(".data-values span");
                                keypaire = keypaire.dataset["editorUpdater"];

                                values = !isNaN( +this.innerHTML ) ? parseFloat( this.innerHTML ) : 
                                    this.innerHTML == "on" ? true : ( this.innerHTML || "" ).toLowerCase();
                                keypaire = keypaire.replace(/\-/g, ".");

                                var toStringData = {};
                                toStringData[ keypaire ] = values;
                                toStringData = JSON.stringify( toStringData );

                                // update setting from settings in settings.json file
                                $.ajax("./api/settings.php", function() {}, "sData=" + toStringData );
                                return;
                            } );
                        } );
                    }
                } );
            } );
            $.qsa(".editor-active-page-nav", true).style.display = "";
        }

        closetab = $.qsa(".close-setting-page", true);
        if ( closetab ) {
            closetab.addEventListener("click", function( _e ) {
                
                this.parentNode.classList.contains("settings") ? this.parentNode.remove() : null;
                $.qsa(".editor-code-edit-frame", true).innerHTML = "";

                var tester = document.querySelectorAll(".editor-filename-tab li");
                $.qsa(".editor-active-page-nav", true).style.display = "none";

                [].slice.call( tester ).forEach( function( el ) {
                    if ( el.style.display !== "none" ) {
                        $.qsa(".editor-active-page-nav", true).style.display = "";
                    }
                } );
            } );
        }
    } );
}

settingtrigger.addEventListener("click", function() {
    executeSetting();
} );

executeSetting( true );