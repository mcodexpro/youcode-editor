<div class="editor_left_nav eln" draggable="false">
    <div class="editor-primary-part primary-part">
        <div class="editor-content-top">
            <div class="editor-files editor-explorer prime-hover">
                <div class="label">Explorer (Ctrl + Shift + E)</div>
                <img src="./container/images/svg/files.svg" alt="Editor settings" draggable="false" width="34" height="34">
            </div>
        </div>
        <div class="editor-content-below">
            <div class="editor-accounts prime-hover">
                <div class="label">Accounts</div>
                <img src="./container/images/svg/account.svg" alt="Editor settings" draggable="false" width="34" height="34">
            </div>
            <div class="editor-settings prime-hover">
                <div class="">
                    <div class="label">Manage</div>
                    <div class="cursor"></div>
                    <img src="./container/images/svg/settings.svg" alt="Editor settings" draggable="false" width="34" height="34">
                </div>
                <div class="editor-settings-options editor-primary-toggle-box" data-editor-toggle-box-animation="true">
                    <ul>
                        <li>
                            <div class="lsc">Command Palette...</div>
                            <div class="rsc">Ctrl + Shift + P</div>
                        </li>
                    </ul>
                    <ul>
                        <li class="editor-settings-trigger">
                            <div class="lsc">Settings</div>
                            <div class="rsc">Ctrl + /</div>
                        </li>
                        <li>
                            <div class="lsc">Keyboard Shortcuts</div>
                            <div class="rsc">Ctrl + K</div>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div class="lsc">Configure User Snippets</div>
                        </li>
                    </ul>
                    <ul>
                        <li class="editor-color-theme-trigger">
                            <div class="lsc">Color Theme</div>
                            <div class="rsc">Ctrl + Shift + K</div>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div class="lsc">Check for Updates...</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- public and usable user box -->
    <div class="public-part editor-public-part">
        <div class="">
            <div class="explorer">
                <strong>explorer</strong>
            </div>
            <div class="active-files-folders">
                <div class="project-name">
                    <strong title="code">YouCode projects folder</strong>
                </div>
                <div class="add-files-folders">
                    <div class="add-files _3FuC">
                        <div class="plus">+</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
                            <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                        </svg>
                    </div>
                    <div class="refresh-files-folders _3FuC">
                        <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                        </svg> </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="editor-active-files-folders">
            <ul>

                <li class="editor-create-file-input" style="display:none;">
                    <div class="_ecfi">
                        <form action="">
                            <input type="text" name="create_file" id="create_file" spellcheck="false" autocomplete="off">
                            <input type="submit" value="" hidden>
                        </form>
                    </div>
                    <div class="editor-create-file-suggession-error" style="display:none;">
                        The Folder or file name is not supported and /.@ Symbols only accept.
                    </div>
                </li>

                <!-- <li>
                    <div class="editor-file-icon">
                        <div class="e-f-ico" style="width: 18px;" height="18px">
                            <img src="./container/support-lang-ico/css.svg" alt="" draggable="false">
                        </div>
                    </div>
                    <div class="editor-file-name">
                        <span title="<?=__DIR__?>/editor.top.nav.php">editor.top.nav.php</span>
                    </div>
                </li> -->
            </ul>
        </div>
    </div>
</div>