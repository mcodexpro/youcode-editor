    
        <script>document.querySelector(".editor-filename-tab").addEventListener("wheel", function( e ){ if ( e.deltaY >0 ){ this.scrollLeft +=100; e.preventDefault();} else{ this.scrollLeft -=100; e.preventDefault();}} ); </script>
        <script src="./frontend/toogle.box.control.js" type="module"></script>
        <script src="./frontend/editor.animation.js" type="module"></script>
        <script src="./frontend/editor.theme.js" type="module"></script>
        <script src="./frontend/editor.settings.js" type="module"></script>
        <script src="./frontend/editor.addfile.js" type="module"></script>
        <script src="./frontend/editor.upload.files.js" type="module"></script>
        <script src="./frontend/download.zip.js" type="module"></script>
        <script src="./core/editor.main.js" type="module"></script>
        <script src="./core/run.code.js" type="module"></script>
        <script src="./mapping/key.mapping.js" type="module"></script>
    </div>
</body>
</html>