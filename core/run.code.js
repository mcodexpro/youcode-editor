import * as $ from '../export/editor.export.main';

$.qsa(".code-runner", true).addEventListener("click", function() {
    $.qsa(".editor-signup-layout", true).style.transform = "scale(1)";
    $.qsa(".editor-signup-layout", true).style.transition = "all 0.3s ease-in";

    $.qsa(".choose-run-file label", true).innerHTML = "Enter HTML Filename";

    var existData = window.localStorage.getItem("existFilename"),
        input = $.qsa("#runFile", true);

    input.focus();

    if ( !existData ) {
        setTimeout( function() {
            $.qsa(".choose-run-file", true).style.transition = "all 0.3s ease-in";
            $.qsa(".choose-run-file", true).style.transform = "scaleY(1)";
        }, 1000 );
    }

    $.qsa(".run-file", true).addEventListener("click", function() {
        input.focus();

        if ( !existData ) {
            setTimeout( function() {
                $.qsa(".choose-run-file", true).style.transition = "all 0.3s ease-in";
                $.qsa(".choose-run-file", true).style.transform = "scaleY(1)";
            }, 500 );
        } else {
            setTimeout( function() {
                $.qsa(".choose-run-file", true).style.transition = "all 0.3s ease-in";
                $.qsa(".choose-run-file", true).style.transform = "scaleY(1)";
                $.qsa(".choose-run-file label", true).innerHTML = "Change Filename";
            }, 500 );
        }
    } );

    $.qsa(".close-tupple", true).addEventListener("click", function() {
        $.qsa(".choose-run-file", true).style.transition = "all 0.1s ease-out";
        $.qsa(".choose-run-file", true).style.transform = "scaleY(0)";
        $.qsa("#runFile", true).value = "";
    } );

    $.qsa(".done", true).addEventListener("click", function() {
        input.focus();

        if ( !input.value ) {
            input.style.borderColor = "#eba0a0";
            $.qsa(".choose-run-file label", true).innerHTML = "Filename required";
            $.qsa(".choose-run-file label", true).style.color = "#eba0a0";
            return false;

        } else {
            $.qsa(".choose-run-file label", true).innerHTML = "Enter HTML Filename";
            $.qsa(".choose-run-file label", true).style.color = "";
            input.style.borderColor = "";

            var ins = document.createElement("input"),
                xhr = new window.XMLHttpRequest(),
                form = document.createElement("form");

            ins.value = input.value;
            ins.name = "run-file";
            form.appendChild( ins );

            xhr.open("POST", "./api/code.run.php", true);
            xhr.onload = function() {
                if ( xhr.readyState === xhr.DONE && ( xhr.status >= 200 && xhr.status < 300 ) ) {
                    if ( this.response === "error" ) {
                        $.qsa(".choose-run-file label", true).innerHTML = "File does not exists";
                        $.qsa(".choose-run-file label", true).style.color = "#eba0a0";
                        $.qsa("#runFile", true).style.borderColor = "#eba0a0";
                        
                    } else if ( this.response === "success" ) {

                        $.qsa(".run-file", true).dataset["runFileNw"] = input.value;
                        $.qsa(".run-file", true).innerHTML = input.value;
                        window.localStorage.setItem("existFilename", input.value);

                        $.qsa(".close-tupple", true).click();

                        $.qsa(".choose-run-file label", true).innerHTML = "Change Filename";
                        $.qsa(".choose-run-file label", true).style.color = "";
                        $.qsa("#runFile", true).style.borderColor = "";
                    }
                }
            };
            xhr.send( new FormData( form ) );
        }
    } );

    var form = document.createElement("form"),
        $mrg = document.createElement("input"),
        xhr = new window.XMLHttpRequest();

    $mrg.name = "run-file";
    $mrg.value = $.qsa(".run-file", true).dataset["runFileNw"];
    form.appendChild( $mrg );

    xhr.open("POST", "./api/code.run.php?access=true", true);
    xhr.onload = function() {
        if ( xhr.readyState === xhr.DONE && ( xhr.status >= 200 && xhr.status < 300 ) ) {
            if ( this.response !== "error" && this.response ) {
                var iframe = document.createElement("fieldset");
                    iframe.innerHTML = this.response;

                var title = iframe.querySelector("title");
                $.qsa(".title span", true).innerHTML = ( !!title ?  title.innerHTML : "Document" );

                $.qsa(".preview-code", true).innerHTML = iframe.innerHTML;
            }
        }
    };
    xhr.send( new FormData( form ) );
} );

$.qsa(".relaod", true).addEventListener("click", function() {
    $.qsa(".code-runner", true).click();
} );

if ( window.localStorage.getItem("existFilename") ) {
    $.qsa(".run-file", true).dataset["runFileNw"] = window.localStorage.getItem("existFilename");
    $.qsa(".run-file", true).innerHTML = window.localStorage.getItem("existFilename");
}

$.qsa(".run-close", true).addEventListener("click", function() {

    $.qsa(".editor-signup-layout", true).style.transform = "scale(0, 0)";
    $.qsa(".editor-signup-layout", true).style.transition = "all 0.1s ease-out";

    $.qsa("#runFile", true).value = "";

    $.qsa(".choose-run-file", true).style.transition = "all 0.1s ease-out";
    $.qsa(".choose-run-file", true).style.transform = "scaleY(0)";
} );