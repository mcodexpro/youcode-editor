<?php
    error_reporting( 0 );
    if ( isset($_POST["run-file"]) ) {
        $rfile = $_POST["run-file"];

        $mfile = "../pages/".$rfile;

        if ( file_exists( $mfile ) ) {
            
            if ( isset($_GET["access"]) ) {
                $fopen = fopen($mfile, "r");
                echo fread( $fopen, filesize( $mfile ) );
                die();
            }

            echo "success";
            die();

        } else {
            echo "error";
        }
    }
?>