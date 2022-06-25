import * as $ from '../export/editor.export.main';

function settngs( autorun, match, data ) {
    $.ajax("./settings/settings.json", function( data ) {
        for ( var i = 0; i < data.length; i++ ) {
            document.querySelector(".youcode_editor").dataset["editorAnimation"] = data[ i ]["editor.animation"];
            document.querySelector(".editor-code-editable-component").dataset["editorTheme"] = data[ i ]["editor.theme"];
            document.querySelector(".public-part").dataset["editorTheme"] = data[ i ]["editor.theme"];
            document.querySelector(".youcode_editor").dataset["editorTheme"] = data[ i ]["editor.theme"];

            var clientSetting = document.querySelector(".private-not-disturbed-container");
            clientSetting.querySelector(".xead").value = data[ i ]["editor.autoSave.delay"];
            clientSetting.querySelector(".xea").value = data[ i ]["editor.autoSave"];
            clientSetting.querySelector(".xeww").value = data[ i ]["editor.wordWrap"];
            clientSetting.querySelector(".xefw").value = data[ i ]["editor.fontWeight"];
            clientSetting.querySelector(".xeff").value = data[ i ]["editor.fontFamily"];
            clientSetting.querySelector(".xefs").value = data[ i ]["editor.fontSize"];

            clientSetting.querySelector(".xead").dataset["setupJson"] = data[ i ]["editor.autoSave.delay"];
            clientSetting.querySelector(".xea").dataset["setupJson"] = data[ i ]["editor.autoSave"];
            clientSetting.querySelector(".xeww").dataset["setupJson"] = data[ i ]["editor.wordWrap"];
            clientSetting.querySelector(".xefw").dataset["setupJson"] = data[ i ]["editor.fontWeight"];
            clientSetting.querySelector(".xeff").dataset["setupJson"] = data[ i ]["editor.fontFamily"];
            clientSetting.querySelector(".xefs").dataset["setupJson"] = data[ i ]["editor.fontSize"] + "px";
        }
    } );
}
settngs();