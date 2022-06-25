// export all variables requirement of javascript code
"use strict"; // inject strict mode

const explorerLogo = qsa(".editor-explorer img", true);
const accountLogo = qsa(".editor-accounts img", true);
const settingLogo = qsa(".cursor", true);

const settingOptions = qsa(".editor-settings-options", true);
const accountLayout = qsa(".editor-account-signup-control", true);
const explorerControl = qsa(".editor-public-part", true);

const fileopt = qsa(".editor-file-menu", true);
const editopt = qsa(".editor-edit-menu", true);
const privacyopt = qsa(".editor-control-menu", true);
const helpopt = qsa(".editor-help-menu", true);

const filelist = qsa(".editor-file-list", true);
const editlist = qsa(".editor-edit-list", true);
const privacylist = qsa(".editor-control-list", true);
const helplist = qsa(".editor-help-list", true);

export { explorerLogo, accountLogo, settingLogo };
export { settingOptions, accountLayout, explorerControl };
export { fileopt, editopt, privacyopt, helpopt };
export { filelist, editlist, privacylist, helplist };

export function qsa( selector, bool ) {
    try {
        var qsa = window.document.querySelectorAll( selector );
        var qso = window.document.querySelector( selector );
        return typeof bool === "boolean" && bool ? 
            qso : qsa;
    } catch ( e ) {};
}

export function ajax( url, callback, data ) {
    var xhr = new window.XMLHttpRequest();
    xhr.open( !!data ? "POST" : "GET", url, true );
    xhr.onload = function() {
        if ( xhr.readyState === xhr.DONE && ( ( xhr.status >= 200 && xhr.status < 300 ) || xhr.status === 304 ) ) {
            try {
                callback.call( xhr, !!data ? this.response : JSON.parse( this.response ), "success" );
            }
            catch( e ) {
                callback.call( xhr, this.response, "error" );
            }
        }
    }

    !!data ? xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded") : null;
    xhr.send( !!data ? data : null );
}