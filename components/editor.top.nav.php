<div class="youcode_header yc-header">
    <div class="app_logo_header">
        <div class="app-logo">
            <img src="./container/images/svg/vscode.svg" alt="App Logo" draggable="false" width="30">
        </div>
        <div class="app-header">
            <h1>YouCode</h1>
        </div>
        <div class="editor-top-menu">
            <ul>
                <li class="editor-iniline-menu">
                    <div class="editor-file-menu">File</div>
                    <div class="editor-file-list editor-menu-box" data-editor-toggle-box-animation="true">
                        <ul>
                            <li>
                                <div class="lsc">Command Palette..</div>
                                <div class="rsc">Ctrl + N</div>
                            </li>
                            <li class="new-file-add">
                                <div class="lsc" style="pointer-events:none;">New File</div>
                                <div class="rsc" style="pointer-events:none;">Ctrl + Alt + N</div>
                            </li>
                        </ul>
                        <ul>
                            <li onclick="document.getElementById('openFile').click();">
                                <div class="lsc">Open File</div>
                                <div class="rsc">Ctrl + O</div>
                                <input type="file" id="openFile" name="openend-files[]" accept="text/html, application/javascript, text/css" hidden webkitDirectory multiple/>
                            </li>

                            <li onclick="document.getElementById('openFile').click();">
                                <div class="lsc">Open Folder</div>
                                <div class="rsc">Ctrl + Shift + F</div>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <div class="lsc">Close Editor</div>
                                <div class="rsc">Ctrl + F4</div>
                            </li>
                            <li onclick="document.querySelector('.editor-explorer img').click()">
                                <div class="lsc">Close File</div>
                                <div class="rsc">Ctrl + F</div>
                            </li>
                            <li>
                                <div class="lsc">Close Window</div>
                                <div class="rsc">Ctrl + W</div>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <div class="lsc">Exit</div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="editor-iniline-menu">
                    <div class="editor-edit-menu">Edit</div>
                    <div class="editor-edit-list editor-menu-box" data-editor-toggle-box-animation="true">
                        <ul>
                            <li>
                                <div class="lsc">Cut</div>
                                <div class="rsc">Ctrl + X</div>
                            </li>
                            <li>
                                <div class="lsc">Copy</div>
                                <div class="rsc">Ctrl + C</div>
                            </li>
                            <li>
                                <div class="lsc">Paste</div>
                                <div class="rsc">Ctrl + V</div>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <div class="lsc">Find</div>
                                <div class="rsc">Ctrl + F</div>
                            </li>
                            <li>
                                <div class="lsc">Replace</div>
                                <div class="rsc">Ctrl + H</div>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <div class="lsc">Toggle Line Comment</div>
                                <div class="rsc">Ctrl + /</div>
                            </li>
                            <li>
                                <div class="lsc">Toggle Block Comment</div>
                                <div class="rsc">Ctrl + Shift + /</div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="editor-iniline-menu">
                    <div class="editor-control-menu">Control</div>
                    <div class="editor-control-list editor-menu-box" data-editor-toggle-box-animation="true">
                        <ul>
                            <li class="create-zip-file">
                                <div class="lsc">Create Zip</div>
                                <div class="rsc">Ctrl + Sfhit + Z</div>
                            </li>
                            <li class="download-zip-file">
                                <div class="lsc">Download Projects</div>
                                <div class="rsc">Ctrl + Shift + D</div>
                            </li>
                        </ul>
                        <ul>
                            <li class="delete-all-files">
                                <div class="lsc">Delete all Files</div>
                                <div class="rsc">Ctrl + Q</div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="editor-iniline-menu">
                    <div class="editor-help-menu">Help</div>
                    <div class="editor-help-list editor-menu-box" data-editor-toggle-box-animation="true">
                        <ul>
                            <li>
                                <div class="lsc">Get Started</div>
                            </li>
                            <li>
                                <div class="lsc">Show All Commands</div>
                                <div class="rsc">Ctrl + Shift + P</div>
                            </li>
                            <li>
                                <div class="lsc">Keyboard Shortcuts Reference</div>
                                <div class="rsc">Ctrl + K Ctrl + R</div>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <div class="lsc">Join Us Github</div>
                            </li>
                            <li>
                                <div class="lsc">Follow On Github</div>
                            </li>
                            <li>
                                <div class="lsc">Report Issue</div>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <div class="lsc">View License</div>
                            </li>
                            <li>
                                <div class="lsc">Privacy Statement</div>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <div class="lsc" style="text-transform: none;">Check for Updates...</div>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <div class="lsc">About</div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="active-page">
        <span><span class="act-filename">Not selected file</span> - <span class="act-foldername">YCPF</span> - YouCode Editor</span>
    </div>
</div>