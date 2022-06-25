import * as $ from '../export/editor.export.main';
import { executeTheme } from '../frontend/editor.theme';
import { executeSetting } from '../frontend/editor.settings';

window.addEventListener("keydown", function( e ) {
    if ( e.keyCode === 27 ) {
        executeTheme( 27 );
    }
    if ( e.ctrlKey === true && e.shiftKey === true && e.keyCode === 75 ) {
        executeTheme();
    }
    if ( e.ctrlKey === true && e.keyCode === 191 ) {
        executeSetting();
    }
} );