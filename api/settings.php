<?php
    if ( isset( $_POST["theme"] ) ) {
        $fopen = fopen("../settings/settings.json", "a+");

        $bytes = 0;
        $read = readfile("../settings/settings.json");
        $rBytes = "/[\t\s\r\f\n]*(\d+)[\t\s\r\f\n]*$/";
        preg_match_all($rBytes, $read, $result, true);
        
        $bytes = $result[ 0 ][ 0 ];

        $file_data = fread($fopen, $bytes );

        $decodeJson = json_decode($file_data, true)[ 0 ];
        $decodeJson["editor.theme"] = $_POST["theme"];

        $encodeJson = json_encode($decodeJson);
        $encodeJson = str_replace(",", ",\n\t\t", $encodeJson);
        $encodeJson = str_replace("{", "\t{\n\t\t", $encodeJson);
        $encodeJson = str_replace("}", "\n\t}", $encodeJson);
        $encodeJson = str_replace(":", ": ", $encodeJson);

        $fopen = fopen("../settings/settings.json", "w+");
        fwrite($fopen, "[\n".$encodeJson."\n]" );

        echo $_POST["theme"]; die();
    }

    if ( isset( $_POST["sData"] ) ) {

        $fopen = fopen("../settings/settings.json", "a+");

        $bytes = 0;
        $read = readfile("../settings/settings.json");
        $rBytes = "/[\t\s\r\f\n]*(\d+)[\t\s\r\f\n]*$/";
        preg_match_all($rBytes, $read, $result, true);
        
        $bytes = $result[ 0 ][ 0 ];

        $file_data = fread($fopen, $bytes );

        $decodeJson = json_decode($file_data, true)[ 0 ];
        foreach( json_decode($_POST["sData"], true) as $key=>$value ) {

            if ( gettype($value) === "boolean" && $value ) {
                $value = "true";
            }

            if ( $value === "off" ) {
                $value = false;
            }
            $decodeJson[ $key ] = preg_match("/[0-9]/", $value) ? intval( $value ) : $value;
        }

        $encodeJson = json_encode($decodeJson);
        $encodeJson = str_replace(",", ",\n\t\t", $encodeJson);
        $encodeJson = str_replace("{", "\t{\n\t\t", $encodeJson);
        $encodeJson = str_replace("}", "\n\t}", $encodeJson);
        $encodeJson = str_replace(":", ": ", $encodeJson);

        $fopen = fopen("../settings/settings.json", "w+");
        fwrite($fopen, "[\n".$encodeJson."\n]" );
        die();
    }
?>