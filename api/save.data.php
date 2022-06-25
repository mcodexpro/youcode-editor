<?php
if ( isset( $_POST["page"] ) && $_POST["data"] ) {
    $file = $_POST["page"];
    $data = $_POST["data"];

    $data = trim( $data );

    $data = str_replace([">"], ">\n", $data);
    $data = str_replace("\t", "\t", $data);

    if ( file_exists( $file ) ) {
        $fopen = fopen($file, "w+");
        if ( fwrite($fopen, $data) ) {
            echo $data;
        }
    }
}
?>