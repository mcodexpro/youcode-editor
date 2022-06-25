<?php
    try {
        if ( isset( $_POST["path"] ) ) {
            $path = $_POST["path"];
    
            $fopen = fopen($path, "r+");
    
            echo fread($fopen, filesize( $path ) );
        }
    } catch (\Throwable $th) {
        echo "";
    }
?>