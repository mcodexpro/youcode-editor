<?php
    if ( isset( $_FILES["openend-files"] ) ) {
        $files = $_FILES["openend-files"];

        $dir = "../pages/";
        $status = "";
        $raccept = "/\.(js|css|html)+$/";

        foreach( $files[ "name" ] as $key=>$value ) {
            $file_tmp = $files["tmp_name"][ $key ];
            if ( !file_exists( $value ) && preg_match(  $raccept, $value ) ) {
                if ( move_uploaded_file( $file_tmp, $dir.$value ) ) {
                    $status = "success";
                }
            }
        }

        echo $status;
    }
?>