import * as variables from '../export/editor.export.main';

var trigger, qs;

variables.fileopt.addEventListener("click", function() {
    qs = this.parentNode.querySelector(".editor-menu-box");
    qs.classList.toggle("show-editor-toggle-box");
    trigger = this;
} );

variables.editopt.addEventListener("click", function() {
    qs = this.parentNode.querySelector(".editor-menu-box");
    qs.classList.toggle("show-editor-toggle-box");
    trigger = this;
} );

variables.privacyopt.addEventListener("click", function() {
    qs = this.parentNode.querySelector(".editor-menu-box");
    qs.classList.toggle("show-editor-toggle-box");
    trigger = this;
} );

variables.helpopt.addEventListener("click", function() {
    qs = this.parentNode.querySelector(".editor-menu-box");
    qs.classList.toggle("show-editor-toggle-box");
    trigger = this;
} );

variables.settingLogo.addEventListener("click", function( _e ) {
    variables.settingOptions.classList.toggle("show-editor-toggle-box");
} );

variables.explorerLogo.addEventListener("click", function( _e ) {
    variables.explorerControl.classList.toggle("editor-hide-left-nav");
} );

document.addEventListener("click", function( e ) {
    if ( e.target !== variables.fileopt ) {
        variables.filelist.classList.remove("show-editor-toggle-box");
    }
    if ( e.target !== variables.editopt ) {
        variables.editlist.classList.remove("show-editor-toggle-box");
    }
    if ( e.target !== variables.privacyopt ) {
        variables.privacylist.classList.remove("show-editor-toggle-box");
    }
    if ( e.target !== variables.helpopt ) {
        variables.helplist.classList.remove("show-editor-toggle-box");
    }
    if ( e.target !== variables.settingLogo ) {
        variables.settingOptions.classList.remove("show-editor-toggle-box");
    }
} );