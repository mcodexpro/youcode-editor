<?php
    if ( isset($_POST["filename"] ) ) {
        $dir = "../pages/";
        $exe = "";

        $exe = explode(".", $_POST["filename"]);
        $exe = end( $exe );

        if ( fopen($dir.$_POST["filename"], "a+") ) {
            echo '<li data-includes-filename="'.$_POST["filename"].'">
                    <div class="editor-file-icon">
                        <div class="e-f-ico" style="width: 18px;" height="18px">
                            <img src="./container/support-lang-ico/'.$exe.'.svg" alt="" draggable="false">
                        </div>
                    </div>
                    <div class="editor-file-name">
                        <span title="/pages/'.$_POST["filename"].'">'.$_POST["filename"].'</span>
                    </div>
                </li>';
            die();
        } else {
            echo "error";
            die();
        }
    }

    if ( isset($_GET["show-files"]) ) {

        $ret = "";
        $exe = "";

        $rsupport = "/(js|html|css)+$/i";

        $dir = "../pages/";
        $files = array_diff(scandir($dir), array(".", "..") );

        foreach( $files as $index=>$filename ) {
            $exe = explode(".", $filename);
            $exe = end( $exe );
            
            if ( preg_match( $rsupport, $exe ) ) {
                $exe = strtolower( $exe );
                $ret .= '<li data-includes-filename="'.$filename.'">
                            <div class="editor-file-icon">
                                <div class="e-f-ico" style="width: 18px;" height="18px">
                                    <img src="./container/support-lang-ico/'.$exe.'.svg" alt="" draggable="false">
                                </div>
                            </div>
                            <div class="editor-file-name">
                                <span title="/pages/'.$filename.'">'.$filename.'</span>
                            </div>
                        </li>';
            }
        }

        echo $ret;
    }
?>