const darkModeCSS = `
  /*背景、全体設定*/
        :root{
        color-scheme: dark;
        }
        body{
        color:#aaa;
        }
        #pageMain,.login-view,.login{
        background-color: #001a;
        }
        .btn,.btn-color{
        border:1px solid #666;
        }
        /*ログインページ*/
        .login-btn.red-btn-color.btn-txt{
        background-color: rgb(168, 21, 21);
        border-color: rgb(152, 19, 19);
        box-shadow: rgb(140 63 63) 0px 1px 3px 1px;
        color: rgb(232, 230, 227);
        }
        .own-auth,.login-auth{
        border: 1px solid #5C5C5C !important;
        }
        /*ログアウトページ*/
        .logout-body {
        background-color: rgb(40, 45, 51);
        }
        .logout-select-box {
        background-color: rgb(24, 26, 27);
        box-shadow: rgb(58 63 66) 5px 5px 5px;
        border-color: rgb(65, 71, 73);
        }
        /*ヘッダ*/
        .sitelogo > img{
        filter: drop-shadow(0 0px 4px #fff);
        }
        #page_head{
        background-color: #303134;
        box-shadow: #6665 0px 1px 2px, #6662 0px 2px 6px 2px !important;
        }
        .page-head-navi-colomn{
        color: #abaaaa;
        }
        .header-img{
        filter: invert();
        }
        .mainmenu-head-logo:hover{
        background:#444;
        }
        .control-menu {
        background-color: rgb(24, 26, 27);
        box-shadow: rgb(98 103 106) 0px 0px 5px;
        }
        .header-control-color:nth-child(2n+1) {
        background-color: rgb(24, 26, 27);
        }
        .header-control-color:nth-child(2n) {
        background-color: rgb(35, 38, 40);
        }
        .header-control-colomn > .info_title,.header-control-colomn{
        color: rgb(179, 172, 162);
        }
        /*フッタ*/
        #page_foot{
        background-color: #303134;
        }
        /*サイドメニュー関連*/

        .sidemenu-logo > a > img{
        filter: invert(1) grayscale(40%) hue-rotate(180deg);
        }
        .hamburger-icon .hamburger-line {
        background-color: #ecedea;
        }

        .header-new-icon{
        background-color:#d00a;
        border: #303134 solid 2px;
        }
        .sidemenu{
        background-color:#303134;
        border-right: none;
        }
        .sidemenu-link.sidemenu-lms-link.sidemenu-link-txt{
        background-color:#38393b;
        }
        .sidemenu-link.sidemenu-lms-link.sidemenu-link-txt:hover{
        background-color:#505154;
        }
        .sidemenu-link.sidemenu-lms-link.sidemenu-link-txt:active{
        background-color:#5e5e62 !important;
        }
        .sidemenu-head{
        background-color:#303134;
        border-bottom:1px solid #444c;
        filter:grayscale(40%);
        }
        .sidemenu-link-txt{
        color:#ccc;
        }
        .sidemenu-link{
        border-bottom:1px solid #444;
        border-top:none !important;
        }
        .sidemenu-pull {
        background-color: rgba(26, 29, 30, 0.19);
        color: rgb(210, 206, 200);
        border-bottom-color: rgb(48, 52, 54);
        text-decoration-color: initial;
        }
        .sidemenu-list-txt {
        text-decoration-color: initial;
        color: rgb(232, 230, 227);
        }
        .sidemenu-list-colomn {
        background-color: rgb(34, 37, 38);
        border-bottom-color: rgb(72, 78, 81);
        }
        .sidemenu-list-colomn:hover {
        background-color: rgb(44, 47, 48);
        }
        /*サブ時間割関連*/
        .page-main .subtimetableBody {
        color: rgb(232, 230, 227);
        }
        .subtimetableBodyCulm{
        background-color:rgba(160,160,160,0.5) !important;
        }
        td.SubTimetable, th.SubTimetable{
        background-color:rgb(31, 34, 35) !important;
        }
        th.SubTimetable{
        background-color:rgb(85, 71, 42) !important;
        }
        td.SubTimetable:nth-child(1), th.SubTimetable:nth-child(1){
        background-color:rgb(108, 28, 19) !important;
        }
        td.SubTimetable > a{
        color:#ccc !important;
        }
        a.SubTimetable:hover{
        background:rgb(41,44,45) !important;
        }
        .subk-head,.note-line.note-head{
        background-color:rgb(31, 34, 35) !important;
        color: #ddd !important;
        border-bottom:2px solid rgba(160,160,160,0.5) !important;
        }
        .subk-subjname-link,a.subk-link,.subk-deadline,.memo-add,.memo-remove{
        color: #bbb !important;
        }
        .subk-line,.note-line{
        background-color:rgb(41, 44, 45) !important;
        color: #ccc !important;
        border-bottom:1px solid rgba(160,160,160,0.5) !important;
        }
        .note-head{
        border-top: 1px solid #333 !important;
        }
        .noteInput.inputmode{
        background-color:#333 !important;
        border:1px solid #999;
        }
        /*LMSページ関連*/
        .timetable-course-top-btn{
        background-color: rgb(33, 78, 57);
        border-bottom-color: rgb(56, 112, 37);
        box-shadow: rgb(51 55 57) 0px 1px 4px;
        }
        #nowPeriod{
        color:#000 !important;
        }
        .div-table-cell-detail {
        background-color: rgb(24, 26, 27);
        border-bottom-color: rgb(70, 76, 78);
        border-right-color: rgb(70, 76, 78);
        }
        .div-table-cell {
        border-color: rgb(66, 72, 74) rgb(66, 72, 74) rgb(66, 72, 74) rgb(48, 52, 54);
        color:#aaa !important;
        }
        .div-table-colomn-period-color {
        background-color: rgb(108, 28, 19);
        border-bottom-color: rgb(34, 59, 56);
        }
        .input {
        border-color: rgb(71, 77, 80);
        }
        .yobi-color1,.yobi-color3,.yobi-color5 {
        background-color: rgb(134, 111, 66);
        }
        .yobi-color2,.yobi-color4,.yobi-color6 {
        background-color: rgb(93, 78, 46);
        }
        .div-table-head-color {
        color: rgb(232, 230, 227);
        border-left-color: rgb(34, 59, 76);
        }
        /*メインページ*/
        .portal-subblock-mark-finish{
        background-color:#fff4;
        }
        .portal-subblock-link > div > a{
        color:#aaa !important;
        }
        .portal-subblock,.information-area,.login-body,.login-block {
        background-color: #333;
        box-shadow: #444 5px 5px 5px;
        }
        .portal-subblock-list {
        border-bottom-color: rgb(72, 78, 81);
        }
        .result-list:nth-child(2n-1) {
        background-color: rgb(24, 26, 27);
        }
        .result-list:nth-child(2n) {
        background-color: rgb(31, 34, 35);
        }
        .portal-subblock-list-main a,.portal-subblock-list-sub {
        color: rgb(214, 211, 205);
        text-decoration-color: initial;
        }
        .portal-calendar {
        background-color: rgb(24, 26, 27);
        box-shadow: rgb(58 63 66) 5px 5px 5px;
        }
        .portal-calendar-day-td-a {
        color: rgb(214, 211, 205);
        text-decoration-color: initial;
        }
        .portal-calendar-month,.portal-calendar-week {
        background-color: rgba(25, 127, 46,0.6);
        border-top-color: rgba(5, 210, 74,0.6);
        }
        .portal-calendar-event-contents,.portal-calendar-event-pull {
        color: rgb(182, 180, 187);
        background-color: rgb(74, 61, 36);
        border-top-color: rgb(109, 90, 54);
        }
        .portal-calendar-booking {
        background-color: rgb(53, 76, 98);
        }
        .portal-calendar-today {
        background-color: rgb(142, 13, 13);
        }
        .portal-calendar-event-add-a, .portal-calendar-event-export-a {
        color: rgb(182, 180, 187);
        background-color: #195627;
        text-decoration-color: initial;
        }
        .portal-calendar-event-add-a:hover, .portal-calendar-event-export-a:hover {
        background-color: #094617;
        text-decoration-color: initial;
        }
        .portal-top-subblock-title {
        color: rgb(101, 225, 127);
        }
        .portal-info-tab-name {
        background-color: rgb(78, 77, 73);
        }
        .portal-subblock-title {
        font-weight: bold;
        position: relative;
        margin-bottom: 25px;
        border-bottom: solid 4px #1f9f3a;
        }
        .top_personal_pull::after, .top_kamoku_pull::after, .top_etc_pull::after,.portal-questionnaire-title::after,.portal-banner-title::after,.portal-notice-title::after,.portal-notice-title::after,.portal-attention-title::after,.timetable-title-txt:after {
        border-bottom-color: rgb(44, 111, 73);
        }
        .portal-info-tab-select {
        background-color: rgb(114, 92, 44);
        }
        .portal-subblock-link-main-a {
        color: rgb(214, 211, 205);
        }
        .portal-subblock-link-subtitle {
        color: rgb(214, 211, 205);
        background-color: #222;
        border-top-color: rgb(67, 72, 75);
        border-bottom-color: rgb(67, 72, 75);
        }
        /*科目別ページ関連*/
        .scombz-util-survey-button-help-popup{
            background-color:#333;
        }
        .ql-editor > p > span{
        color:#aaa !important;
        }
        .course-view-header-btn-area{
        border-top-color:rgb(98, 102, 105);
        }
        .course-header{
        background-color: #333;
        box-shadow: #444 5px 5px 5px;
        }
        .white-btn-color{
        background-color:#111;
        box-shadow:0px 2px 3px 1px #222;
        color:#ddd;
        border:none;
        }
        .course-view-header-btn-color{
        background-color:#c00a;
        }
        .block {
        background-color: rgb(24, 26, 27);
        box-shadow: rgb(58 63 66) 5px 5px 5px;
        }
        .block-contents {
        background-color: rgb(24, 26, 27);
        }
        .contents-tag {
        border-bottom-color: rgb(58, 62, 65);
        }
        .contents-list {
        border-top-color: initial;
        }
        .course-result-list {
        border-bottom-color: rgb(58, 62, 65);
        }
        .course-result-list:nth-of-type(2n+1) {
        background-color: rgb(24, 26, 27);
        }
        .course-result-list:nth-of-type(2n) {
        background-color: rgb(31, 34, 35);
        }
        .link-txt {
        color: rgb(86, 142, 241);
        text-decoration-color: initial;
        }
        .material-sub-color {
        background-color: rgb(59, 60, 30);
        }
        .block-title.block-cube{
        filter: contrast(150%);
        filter: opacity(60%);
        }
        .control-menu .control-list:nth-child(2n-1) {
        background-color: rgb(24, 26, 27);
        }
        .control-menu .control-list:nth-child(2n) {
        background-color: rgb(34, 36, 37);
        }
        .control-menu .control-list > .control-menu-colomn{
        color:#aaa !important;
        }
        .btn-control:hover:before {
        background-color: rgba(24, 26, 27, 0.4);
        }
        /*ダイアログ*/
        .ui-widget.ui-widget-content {
        border-color: rgb(64, 70, 72);
        }
        .ui-widget-header {
        border-color: rgb(58, 62, 65);
        background-image: initial;
        background-color: rgb(36, 39, 41);
        color: rgb(200, 195, 188);
        }
        .ui-widget-content {
        border-color: rgb(58, 62, 65);
        background-image: initial;
        background-color: rgb(24, 26, 27);
        color: rgb(200, 195, 188);
        }
        .information-popup-block {
        box-shadow: rgb(58 63 66) 0px 0px 15px;
        }
        .information-popup-block {
        background-color: rgb(24, 26, 27) !important;
        box-shadow: rgb(58 63 66) 5px 5px 5px !important;
        }
        .contents-vertical {
        border-bottom-color: rgb(98, 102, 105);
        }
        .course-title-txt {
        border-top-color: rgb(98, 102, 105);
        }
        .course-header-detail {
        border-top-color: rgb(98, 102, 105);
        }
        .information-color {
        background-color: #ac732d !important;
        }
        .contents-title {
        border-top-color: rgb(59, 64, 66);
        }
        /*アンケート*/
        #survey_timer{
        background-color: rgb(41, 45, 46);
        box-shadow: rgb(58 63 66) 0px 5px 5px;
        }
        .survey-color{
        background-color:#9f6215;
        }
        /*課題提出*/
        .minBtn {
        border-color: rgb(98, 102, 105) !important;
        background-color: rgb(31, 34, 35) !important;
        }
        .minBtn:hover {
        background-color: #000 !important;
        }
        .input-checkbox:checked:after {
        border-color: #ccc;
        opacity: 1.0;
        }
        .report-submission-link-area {
        background-color: rgb(31, 34, 35);
        }
        .report-color {
        background-color: rgb(136, 12, 12);
        }
        .block-under-area .block-under-area-btn #submitButton, #report_submission_btn,.block-under-area .block-under-area-btn #takebtn,.block-under-area .block-under-area-btn .takeConfirm,.block-under-area .block-under-area-btn #submit{
        background-color: #545555 !important;
        }
        .block-under-area .block-under-area-btn #backPage, #back, #backBtn, #backbtn,.block-under-area .block-under-area-btn .tempSaveBtn,.block-under-area .block-under-area-btn .backbutton{
        background-color: #333 !important;
        color:#aaa !important;
        }
        .result-list {
        border-bottom-color: rgb(58, 62, 65);
        }
        .block-popup {
        background-color: rgb(24, 26, 27);
        }
        .drag-drop-area {
        background-color: rgb(38, 41, 43) !important;
        color: rgba(232, 230, 227, 0.35) !important;
        }
        /*コミュニティ*/
        .participating-community-list-li .participating-community-list-li-img{
        filter: invert();
        }
        .community-header {
        background-color: rgb(24, 26, 27);
        box-shadow: rgb(58 63 66) 0px 7px 5px;
        }
        /*課題一覧*/
        div.result_list_content .result_list_line:nth-of-type(2n+1) {
        background-color: rgb(24, 26, 27);
        }
        .result_list .result_list_line {
        color: rgb(179, 172, 162);
        border-bottom-color: rgb(58, 62, 65);
        }
        .result_list .result_list_tag {
        color: rgb(210, 206, 200);
        border-bottom-color: rgb(58, 62, 65);
        }
        /*オンライン授業情報*/
        .week-label {
        background-color: rgb(24, 26, 27);
        }
        .week-checked {
        background-color: rgb(50, 54, 56);
        }
        /*テスト*/
        .examination-color {
        background-color: #003560;
        }
        .timer-btn-area {
        background-color: rgb(41, 45, 46);
        }
        .input-radio:checked:after {
        opacity: 1.0;
        background-color: #aaa;
        }
        .large-timer-number,.small-timer-number {
        background-color: #111;
        color:#999;
        }
        .input-box{
            color :#ddd;
        }
        .portal-subblock-bottom-a,.portal-survey-content-part-left,.portal-survey-content-right{
            color:#c4c5c5;
        }
        .ItemBox-CheckBox-Label{
            background-color:#000 !important;
        }
        .ItemBox-CheckBox-Input:checked+.ItemBox-CheckBox-Label {
            background: #1b449f !important;
        }
        .subk-remove-btn {
            background-color: #0aa6 !important;
            background-blend-mode: darken !important;
            filter: invert(1);
        }
        .examination-question-answer-input-box{
            color:#ddd;
        }
        .relative-deadline-time{
            color:#a00 !important;
        }
        .highlightMark .relative-deadline-time{
            color:#555 !important;
        }
        .today.highlightMark .relative-deadline-time,.today.highlightMark .subk-deadline-time{
            color:#f00 !important;
        }
        .shorttime.highlightMark,.shorttime.highlightMark .subk-deadline-time{
            background-color: rgb(100, 44, 45) !important;
        }
        .a-few-days.highlightMark .relative-deadline-time,.a-few-days.highlightMark .subk-deadline-time{
            color:#e22 !important;
        }
        .a-week.highlightMark .relative-deadline-time{
            color:#999 !important;
        }
        .task-get-time,#add-task-manual{
            color:#ccc !important;
        }
        #manAddtaskSelectLayer{
            background-color:#333 !important;
        }
        #mdNotepadAdd{
            filter: invert(0.8);
        }
        .header-clear .header-icon-space{
            border-color: #303134 !important;
        }
        .now-period {
            background: rgb(20 126 60) !important;
        }
        #materialList .contents-detail.clearfix{
            border-bottom: 1px solid #444;
        }
        #materialList .contents-detail.clearfix:hover{
            filter: brightness(106%);
        }
        .close-button,.open-button{
            filter: invert(1);
        }
        .close-button:hover,.open-button:hover{
            background-color:#0003;
            background-blend-mode:darken;
        }
        .utilities-dl-file-button{
            background-color:#fff0;
        }
        .utilities-dl-file-button:hover{
            background-color:#fff3;
        }
        #quickMenu{
            background-color:#2a2a2d;
        }
        #quickMenu a{
            color: #8997a5;
        }
        #quickMenu a:hover{
            color: #b0c4de;
        }
        #scombzUtilitiesContextMenu{
            background: #444c;
            color: #dfdfdf;
        }
        .scombz-utilites-email-button-group > button {
            background: #333;
        }
        .scombz-utilites-email-button-group > button:hover {
        background-color: #2a2b2f;
        border-color: #646e9b;
        color: #646e9b;
        }
        a.utilities-anchor {
            color: #66f !important;
            text-decoration: underline !important;
        }

        #scombzUtilitiesMultiFileInputArea {
            background-color: #2b2b2b;
            border-color: #5c5c5c;
            box-shadow: 2px 2px 5px #5a9bff22;
            color: #5a9bff;
        }
        #scombzUtilitiesMultiFileInputArea:hover {
            background-color: #333333;
            color: #6aabff;
        }
        #scombzUtilitiesMultiFileInputArea:active {
            background-color: #444444;
        }

        #scombzUtilitiesMultiFileInputArea.isDragover {
            background-color: #1e3b5a;
            border-color: #5a9bff;
            color: #5a9bff;
        }

        #fileDadArea {
            border-color: #5a9bff;
        }
        #fileDadArea.isDragover {
            background-color: #1e3b5a;
            border-color: #5a9bff;
            color: #ffffff;
        }

`;

export default darkModeCSS;
