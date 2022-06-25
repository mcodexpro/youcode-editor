<?php
    if ( isset($_GET["task"]) && $_GET["task"] === "convert-zip" ) {
        $files = array_diff(scandir("../pages/"), array(".", ".."));
        $archive = new ZipArchive;
        
        $identifier = "YC_";
        $dir = "../client/";
        $random = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $zipname = $identifier.substr(str_shuffle($random), 0, 8);
        
        $archive->open($dir.$zipname.".zip", ZipArchive::CREATE);
        
        foreach( $files as $index=>$filename ) {
            $path = "../pages/".$filename;
            $archive->addFile( $path );
        }
        $archive->close();
        
        echo $zipname.".zip";
    }

    if ( isset($_GET["task"]) && $_GET["task"] === "delete-files" ) {
        $files = array_diff(scandir("../pages/"), array(".", ".."));
        $status = "error";

        foreach( $files as $index=>$filename ) {
            if ( unlink("../pages/".$filename) ) {
                $status = "success";
            }
        }
        echo $status;
    }
?>