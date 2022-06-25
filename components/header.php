<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- ADDRESS THEME -->
    <meta name="theme-color" content="#fff">
    <!-- SEO -->
    <title>YouCode</title>
    <meta name="keywords" content="YouCode, youcode">
    <meta name="description" content="YouCode, youcode">
    <meta name="author" content="Modassir">
    <!-- FAVICON -->
    <link rel="shortcut icon" href="./container/images/svg/vscode.svg" type="image/x-icon">
    <!-- CSS -->
    <link rel="stylesheet" href="./designs/styles/editor.all.css?editor=youcode">
    <!-- JS -->
</head>
<body>
<div class="youcode youcode_editor" data-editor="youcode">
<?php include_once("./components/editor.top.nav.php"); ?>
<div class="editor_content eda" data-wrap="eda">
    <?php include_once("./components/editor.left.nav.php"); ?>
    <div class="editor-code-editable-component" > <!--- data-editor-theme="dark" --->
        <?php include_once("./components/editor.top.status.bar.php"); ?>
        <?php include_once("./components/editor.active.page.nav.php"); ?>
        <div class="editor-code-edit-frame-layer">
            <?php include_once("./components/editor.snipt.php"); ?>
            <?php include_once("./components/editor.find.replace.php"); ?>
            <?php /*================Boundry===============*/ ?>
            <div class="editor-code-edit-frame"></div>
            <?php /*================Boundry===============*/ ?>
        </div>
        <?php include_once("./components/signup.php"); ?>
    </div>
</div>
<?php include_once("./components/editor.status.bar.php"); ?>