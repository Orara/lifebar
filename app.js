// ==========================================================================
// 0. Multilingual Translation System
// ==========================================================================
const translations = {
    ko: {
        onboardingTitle: "나의 인생 진척도",
        onboardingSubtitle: "나의 하루, 한 달, 일 년, 그리고 평생의 흘러가는 순간을 마주해 보세요.",
        labelBirthDate: "태어난 날짜",
        labelExpectancyAge: "예상 수명 (나이)",
        privacyNotice: "개인정보 보호 안내: 생년월일과 회고록 등 모든 데이터는 인터넷 서버에 절대 전송되거나 저장되지 않으며, 오직 사용자의 브라우저(localStorage)에만 안전하게 보관됩니다.",
        btnOpenDashboard: "인생 진척도 열기",
        btnSettingsTitle: "설정 변경",
        btnResetTitle: "초기화",
        btnLangTitle: "언어 변경",
        cardTodayTitle: "오늘 하루",
        cardTodayDesc: "오늘이 흐르는 중",
        cardMonthTitle: "이번 달",
        cardMonthDesc: "이번 달의 흐름",
        cardYearTitle: "올해",
        cardYearDesc: "올해가 지나가는 중",
        cardLifeTitle: "내 인생",
        cardLifeDesc: "나의 평생진척률",
        statLivedDaysLabel: "살아온 일수 (Days)",
        statLeftDaysLabel: "남은 일수 (Days)",
        ddayBoardTitle: "나의 디데이 (D-Day)",
        ddayAddBtn: "추가",
        ddayEmptyMsg: "등록된 디데이가 없습니다. 우측 상단의 추가 버튼을 눌러보세요!",
        ddayInputTitlePlaceholder: "목표명 (예: 시험)",
        ddayCancelBtn: "취소",
        ddaySaveBtn: "등록",
        resolutionTitle: "오늘의 한 줄 다짐",
        resolutionStreakSuffix: "일 연속 달성 중!",
        resolutionInputPlaceholder: "오늘 하루 집중할 단 한 가지 목표를 적어보세요...",
        resolutionHint: "달성했다면 왼쪽의 원을 눌러 완료 표시를 해보세요! 다음 날이 되면 기록장으로 보관됩니다.",
        diaryTitle: "오늘 하루 회고록",
        diaryInputPlaceholder: "오늘 흘러간 시간 동안 느꼈던 솔직한 생각을 자유롭게 남겨보세요. 실시간으로 브라우저에 저장됩니다...",
        archiveTitle: "지나온 하루 기록장",
        weekdays: ["일", "월", "화", "수", "목", "금", "토"],
        calendarPrevTitle: "이전 달",
        calendarNextTitle: "다음 달",
        calendarStatPlanned: "다짐 계획일",
        calendarStatCompleted: "완료한 다짐",
        calendarStatAverage: "평균 다짐 달성률",
        btnShareText: "결과 텍스트 복사",
        btnExportInstagram: "인스타 스토리용 저장",
        footerTitle: "나의 인생 진척도 v2.0.0",
        footerPrivacyPolicy: "개인정보 보관 정책: 100% 로컬 브라우저 저장",
        footerPrivacyLink: "개인정보 처리방침",
        footerCopyright: "© 2026 Life Progress Bar. All rights reserved. 본 웹 애플리케이션의 모든 데이터는 개인 기기에 암호화/로컬 저장되어 유출로부터 완벽히 보호됩니다.",
        settingsTitle: "나의 인생 설정",
        settingsDesc: "생년월일과 예상 수명을 언제든 수정할 수 있습니다.",
        settingsWarning: "기기를 변경하거나 브라우저 쿠키/캐시를 지우면 설정값이 초기화될 수 있습니다.",
        settingsSaveBtn: "설정 변경 저장",
        btnBackup: "설정 백업 (.json)",
        btnRestore: "설정 복원 (.json)",
        btnExportCsv: "기록 CSV 다운로드",
        btnPrintPdf: "일기장 인쇄 / PDF",
        adminVisitsLabel: "방문자 통계",
        detailDdayTitle: "오늘의 디데이 (D-Day)",
        detailResolutionPlaceholder: "이날의 다짐을 기록해 보세요...",
        detailDiaryLabel: "하루 회고록",
        detailDiaryPlaceholder: "이날 흘러간 시간 동안 느꼈던 생각을 자유롭게 적어보세요...",
        btnDelete: "삭제",
        btnClose: "닫기",
        btnSave: "저장",
        musicPlayerTitle: "집중용 백색소음",
        musicTrackRain: "🌧️ 포근한 빗소리",
        musicTrackLofi: "🎹 감성 로파이 비트",
        musicTrackCampfire: "🔥 따뜻한 모닥불",
        musicVolumeLabel: "볼륨",
        musicToggleTitle: "백색소음 켜기/끄기",
        musicStateStopped: "정지됨",
        musicStatePlaying: "재생 중",
        musicStatePaused: "일시 정지",
        unitDay: "일",
        unitAge: "세",
        dynamicMonthProgress: "{month}월 진척도",
        dynamicYearProgress: "{year}년 진척도",
        dynamicLifeRemaining: "남은 수명: 약 {days}일",
        dynamicLifeTargetMet: "목표 수명에 도달했습니다!",
        dynamicVisitorCount: "{count} 회",
        dynamicVisitorFailed: "조회 실패",
        dynamicVisitorPWFailed: "비밀번호 오동작",
        dynamicVisitorAdmin: "관리자 활성",
        alertResetConfirm: "정말 모든 설정을 초기화하시겠습니까? 다짐 및 일기 데이터가 완전히 지워집니다.",
        alertBackupReady: "데이터 백업 파일이 다운로드됩니다.",
        alertBackupFail: "백업할 데이터가 없습니다. 먼저 인생 설정을 완료해 주세요.",
        alertRestoreSuccess: "데이터 복원이 완료되었습니다!",
        alertRestoreFail: "올바른 백업 파일이 아닙니다.",
        alertCaptureFail: "이미지 캡처 과정에서 문제가 발생했습니다.",
        alertDeleteConfirm: "이 날의 기록을 완전히 삭제하시겠습니까?",
        alertDdayDeleteConfirm: "이 디데이를 삭제하시겠습니까?",
        alertPrivacyText: "🔒 개인정보 처리방침 및 안내:\n\n'나의 인생 진척도'는 사용자의 생년월일, 예상 수명, 오늘의 다짐, 작성 일기 등 어떠한 데이터도 외부 서버로 전송하지 않습니다.\n\n모든 정보는 오직 사용자의 웹 브라우저 로컬 저장소(localStorage)에만 프라이빗하게 보관되며, 브라우저 캐시를 지우거나 초기화 버튼을 누르면 완전히 영구 삭제됩니다.\n\n안심하고 인생을 채워나가세요!",
        alertDdayTitleRequired: "디데이 제목을 입력해 주세요.",
        alertDdayDateRequired: "디데이 날짜를 선택해 주세요.",
        alertShareCopied: "인생 진척도 결과 텍스트가 클립보드에 복사되었습니다! SNS나 카카오톡에 자유롭게 공유해 보세요.",
        alertPasswordIncorrect: "비밀번호가 올바르지 않습니다.",
        alertPopupBlocked: "팝업이 차단되었습니다. 팝업 차단을 해제하고 다시 시도해 주세요.",
        alertNoHistory: "기록이 존재하지 않습니다. 먼저 기록을 작성해 주세요.",
        shareReportTitle: "⏳ 나의 인생 진척도 리포트 ⏳",
        shareToday: "오늘",
        shareMonth: "이번 달",
        shareYear: "올해",
        shareLife: "내 인생",
        shareDaysLived: "살아온 날",
        shareDaysLeft: "남은 날",
        shareStreakSuffix: "일 연속 다짐 실천 중!",
        shareHashtags: "#인생진척도 #동기부여",
        streakFormat: "{streak}일 연속 달성 중!",
        labelStart: "시작",
        labelTarget: "목표"
    },
    en: {
        onboardingTitle: "My Life Progress Bar",
        onboardingSubtitle: "Face the passing moments of your day, month, year, and entire life.",
        labelBirthDate: "Date of Birth",
        labelExpectancyAge: "Life Expectancy (Age)",
        privacyNotice: "Privacy Notice: All data, including your birthday and diaries, is never sent to or stored on any server. It is saved 100% locally and safely inside your browser's localStorage.",
        btnOpenDashboard: "Open Life Progress",
        btnSettingsTitle: "Settings",
        btnResetTitle: "Reset All",
        btnLangTitle: "Change Language",
        cardTodayTitle: "Today",
        cardTodayDesc: "Today is passing by",
        cardMonthTitle: "This Month",
        cardMonthDesc: "Monthly flow",
        cardYearTitle: "This Year",
        cardYearDesc: "Year is passing by",
        cardLifeTitle: "My Life",
        cardLifeDesc: "Lifetime progress",
        statLivedDaysLabel: "Days Lived",
        statLeftDaysLabel: "Days Remaining",
        ddayBoardTitle: "My D-Days",
        ddayAddBtn: "Add",
        ddayEmptyMsg: "No D-Days registered. Click the Add button at the top right!",
        ddayInputTitlePlaceholder: "Target (e.g., Exam)",
        ddayCancelBtn: "Cancel",
        ddaySaveBtn: "Register",
        resolutionTitle: "Today's Resolution",
        resolutionStreakSuffix: " Day Streak!",
        resolutionInputPlaceholder: "Write the single most important goal to focus on today...",
        resolutionHint: "Click the circle on the left to check it off when completed! It will be archived tomorrow.",
        diaryTitle: "Today's Retrospective Diary",
        diaryInputPlaceholder: "Share your honest thoughts about the passing hours today. It is saved in real-time in your browser...",
        archiveTitle: "Daily Archive Logbook",
        weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        calendarPrevTitle: "Prev Month",
        calendarNextTitle: "Next Month",
        calendarStatPlanned: "Planned Days",
        calendarStatCompleted: "Completed Goals",
        calendarStatAverage: "Avg Completion Rate",
        btnShareText: "Copy Text Report",
        btnExportInstagram: "Save for Instagram Story",
        footerTitle: "My Life Progress Bar v2.0.0",
        footerPrivacyPolicy: "Privacy Policy: 100% Local Browser Storage Only",
        footerPrivacyLink: "Privacy Policy",
        footerCopyright: "© 2026 Life Progress Bar. All rights reserved. All data is encrypted and saved locally on your device, fully protected from external leaks.",
        settingsTitle: "My Life Settings",
        settingsDesc: "You can modify your birthdate and life expectancy at any time.",
        settingsWarning: "Clearing cookies/cache or changing devices may reset your configuration values.",
        settingsSaveBtn: "Save Settings",
        btnBackup: "Backup Settings (.json)",
        btnRestore: "Restore Settings (.json)",
        btnExportCsv: "Download History CSV",
        btnPrintPdf: "Print Diary / PDF",
        adminVisitsLabel: "Visitor Stats",
        detailDdayTitle: "Today's D-Days",
        detailResolutionPlaceholder: "Record your resolution for this day...",
        detailDiaryLabel: "Retrospective Diary",
        detailDiaryPlaceholder: "Record your thoughts about how this day passed...",
        btnDelete: "Delete",
        btnClose: "Close",
        btnSave: "Save",
        musicPlayerTitle: "Ambient Sounds for Focus",
        musicTrackRain: "🌧️ Cozy Rain Sound",
        musicTrackLofi: "🎹 Lofi Music Beats",
        musicTrackCampfire: "🔥 Warm Campfire",
        musicVolumeLabel: "Volume",
        musicToggleTitle: "Toggle Ambient Sound Mixer",
        musicStateStopped: "Stopped",
        musicStatePlaying: "Playing",
        musicStatePaused: "Paused",
        unitDay: " Day(s)",
        unitAge: " Years Old",
        dynamicMonthProgress: "{month} Month Progress",
        dynamicYearProgress: "{year} Year Progress",
        dynamicLifeRemaining: "Remaining: ~{days} days",
        dynamicLifeTargetMet: "You have met your target life expectancy!",
        dynamicVisitorCount: "{count} visits",
        dynamicVisitorFailed: "Load Failed",
        dynamicVisitorPWFailed: "Invalid PW",
        dynamicVisitorAdmin: "Admin Active",
        alertResetConfirm: "Are you sure you want to reset all settings? All resolutions and diary entries will be permanently deleted.",
        alertBackupReady: "Your data backup file is ready to download.",
        alertBackupFail: "No data to backup. Please complete your life settings first.",
        alertRestoreSuccess: "Data restoration completed successfully!",
        alertRestoreFail: "Invalid backup file structure.",
        alertCaptureFail: "An error occurred during image capture.",
        alertDeleteConfirm: "Do you want to delete this day's records?",
        alertDdayDeleteConfirm: "Are you sure you want to delete this D-Day?",
        alertPrivacyText: "🔒 Privacy Policy & Info:\n\n'My Life Progress Bar' does not collect or transmit any of your personal data, birthdate, life expectancy, resolutions, or diary entries to external servers.\n\nAll data is stored strictly inside your local web browser storage (localStorage). Clearing browser cookies/cache or clicking 'Reset All' will permanently delete all stored data.\n\nFill your life with peace of mind!",
        alertDdayTitleRequired: "Please enter a D-Day title.",
        alertDdayDateRequired: "Please select a target date.",
        alertShareCopied: "Life progress report copied to clipboard! Share it on social media or chat apps.",
        alertPasswordIncorrect: "Incorrect password.",
        alertPopupBlocked: "Popup was blocked. Please allow popups and try again.",
        alertNoHistory: "No history found. Please write a resolution or diary first.",
        shareReportTitle: "⏳ My Life Progress Bar Report ⏳",
        shareToday: "Today",
        shareMonth: "This Month",
        shareYear: "This Year",
        shareLife: "My Life",
        shareDaysLived: "Days Lived",
        shareDaysLeft: "Days Left",
        shareStreakSuffix: " Day Streak!",
        shareHashtags: "#LifeProgressBar #Motivation",
        streakFormat: "{streak} Day Streak!",
        labelStart: "Start",
        labelTarget: "Target"
    },
    ja: {
        onboardingTitle: "マイライフ進捗バー",
        onboardingSubtitle: "今日、今月、今年、そして人生の流れる瞬間と向き合ってみましょう。",
        labelBirthDate: "生年月日",
        labelExpectancyAge: "想定寿命（年齢）",
        privacyNotice: "個人情報保護について: 生年月日や日記等のすべてのデータは、外部サーバーに送信されたり保存されたりすることはありません。すべてユーザーのブラウザ（localStorage）に安全にローカル保存されます。",
        btnOpenDashboard: "進捗バーを開く",
        btnSettingsTitle: "設定変更",
        btnResetTitle: "初期化",
        btnLangTitle: "言語変更",
        cardTodayTitle: "今日の進捗",
        cardTodayDesc: "今日の時間が流れています",
        cardMonthTitle: "今月の進捗",
        cardMonthDesc: "今月の時間の流れ",
        cardYearTitle: "今年の進捗",
        cardYearDesc: "今年が過ぎていきます",
        cardLifeTitle: "人生の進捗",
        cardLifeDesc: "一生の進捗率",
        statLivedDaysLabel: "生きてきた日数 (Days)",
        statLeftDaysLabel: "残りの日数 (Days)",
        ddayBoardTitle: "マイD-Day目標",
        ddayAddBtn: "追加",
        ddayEmptyMsg: "登録されたD-Dayはありません。右上の追加ボタンを押してみてください！",
        ddayInputTitlePlaceholder: "目標名（例：試験）",
        ddayCancelBtn: "キャンセル",
        ddaySaveBtn: "登録",
        resolutionTitle: "今日の一言目標",
        resolutionStreakSuffix: "日連続達成中！",
        resolutionInputPlaceholder: "今日一日で集中すべき唯一の目標を書いてみましょう...",
        resolutionHint: "達成したら、左側の円を押して完了マークをつけてみましょう！翌日になると自動で記録帳へ保存されます。",
        diaryTitle: "今日一日の振り返り日記",
        diaryInputPlaceholder: "今日流れた時間の中で感じた率直な思いを自由に書いてみましょう。ブラウザにリアルタイムで自動保存されます...",
        archiveTitle: "過ぎ去った日々の記録帳",
        weekdays: ["日", "月", "火", "水", "木", "金", "土"],
        calendarPrevTitle: "前月",
        calendarNextTitle: "次月",
        calendarStatPlanned: "目標設定日数",
        calendarStatCompleted: "達成した目標日数",
        calendarStatAverage: "平均目標達成率",
        btnShareText: "結果テキストをコピー",
        btnExportInstagram: "インスタストーリー用保存",
        footerTitle: "マイライフ進捗バー v2.0.0",
        footerPrivacyPolicy: "個人情報保護方針: 100%ローカルブラウザ保存",
        footerPrivacyLink: "個人情報処理方針",
        footerCopyright: "© 2026 Life Progress Bar. All rights reserved. 本ウェブアプリのすべてのデータは、個人端末に暗号化およびローカル保存され、外部漏洩から完全に保護されます。",
        settingsTitle: "マイライフ設定",
        settingsDesc: "生年月日と想定寿命はいつでも変更可能です。",
        settingsWarning: "ブラウザキャッシュの削除やデバイスの変更により、設定値が初期化される場合があります。",
        settingsSaveBtn: "設定を保存",
        btnBackup: "設定をバックアップ (.json)",
        btnRestore: "設定を復元 (.json)",
        btnExportCsv: "記録をCSVで保存",
        btnPrintPdf: "日記帳を印刷 / PDF",
        adminVisitsLabel: "訪問者統計",
        detailDdayTitle: "今日のD-Day目標",
        detailResolutionPlaceholder: "この日の目標を記録する...",
        detailDiaryLabel: "振り返り日記",
        detailDiaryPlaceholder: "この日どんな一日だったか、思いを記録する...",
        btnDelete: "削除",
        btnClose: "閉じる",
        btnSave: "保存",
        musicPlayerTitle: "集中用ホワイトノイズ",
        musicTrackRain: "🌧️ 心地よい雨の音",
        musicTrackLofi: "🎹 癒しのLofiミュージック",
        musicTrackCampfire: "🔥 暖かな焚き火",
        musicVolumeLabel: "音量",
        musicToggleTitle: "ホワイトノイズミキサーを開く",
        musicStateStopped: "停止中",
        musicStatePlaying: "再生中",
        musicStatePaused: "一時停止中",
        unitDay: " 日",
        unitAge: " 歳",
        dynamicMonthProgress: "{month}月の進捗率",
        dynamicYearProgress: "{year}年の進捗率",
        dynamicLifeRemaining: "残り寿命: 約 {days}日",
        dynamicLifeTargetMet: "目標とする想定寿命に到達しました！",
        dynamicVisitorCount: "{count} 回",
        dynamicVisitorFailed: "読み込み失敗",
        dynamicVisitorPWFailed: "PWエラー",
        dynamicVisitorAdmin: "管理者有効",
        alertResetConfirm: "本当にすべての設定を初期化しますか？目標や日記のデータが完全に削除されます。",
        alertBackupReady: "バックアップ用ファイルをダウンロードします。",
        alertBackupFail: "バックアップするデータがありません。先に人生設定を完了してください。",
        alertRestoreSuccess: "データの復元が完了しました！",
        alertRestoreFail: "有効なバックアップファイルではありません。",
        alertCaptureFail: "画像キャプチャ中にエラーが発生しました。",
        alertDeleteConfirm: "この日の記録を削除しますか？",
        alertDdayDeleteConfirm: "このD-Day目標を削除しますか？",
        alertPrivacyText: "🔒 個人情報処理方針とご案内:\n\n'マイライフ進捗バー'は、ユーザーの生年月日、想定寿命、今日の目標、日記など、いかなるデータも外部サーバーに送信することはありません。\n\nすべてのデータはユーザーのウェブブラウザのローカルストレージ（localStorage）にのみ保存され、キャッシュを消去するか初期化を行うと完全に削除されます。\n\nどうぞ安心してお使いください！",
        alertDdayTitleRequired: "D-Dayの目標名を入力してください。",
        alertDdayDateRequired: "D-Dayの目標日付を選択してください。",
        alertShareCopied: "人生進捗レポートをクリップボードにコピーしました！SNS等で共有してください。",
        alertPasswordIncorrect: "パスワードが正しくありません。",
        alertPopupBlocked: "ポップアップがブロックされました。ポップアップを許可してもう一度お試しください。",
        alertNoHistory: "記録がありません。先に目標や日記を入力してください。",
        shareReportTitle: "⏳ マイライフ進捗レポート ⏳",
        shareToday: "今日",
        shareMonth: "今月",
        shareYear: "今年",
        shareLife: "人生",
        shareDaysLived: "生きてきた日",
        shareDaysLeft: "残りの日",
        shareStreakSuffix: "日連続目標達成中！",
        shareHashtags: "#ライフ進捗バー #モチベーション",
        streakFormat: "{streak}日連続目標達成中！",
        labelStart: "開始",
        labelTarget: "目標"
    },
    zh: {
        onboardingTitle: "我的人生进度条",
        onboardingSubtitle: "面对你的一天、一个月、一年以及整个人生流逝的瞬间。",
        labelBirthDate: "出生日期",
        labelExpectancyAge: "预期寿命（岁）",
        privacyNotice: "隐私政策说明：出生日期及日记等所有数据均不会发送或存储到外部服务器，而是100%安全地保存在您本人的浏览器本地存储（localStorage）中。",
        btnOpenDashboard: "开启人生进度",
        btnSettingsTitle: "更改设置",
        btnResetTitle: "重置",
        btnLangTitle: "切换语言",
        cardTodayTitle: "今日进度",
        cardTodayDesc: "今天正在流逝中",
        cardMonthTitle: "本月进度",
        cardMonthDesc: "本月的流逝",
        cardYearTitle: "今年进度",
        cardYearDesc: "今年正流逝中",
        cardLifeTitle: "人生进度",
        cardLifeDesc: "一生总进度率",
        statLivedDaysLabel: "已度过天数 (Days)",
        statLeftDaysLabel: "剩余天数 (Days)",
        ddayBoardTitle: "我的倒计时 (D-Day)",
        ddayAddBtn: "添加",
        ddayEmptyMsg: "暂无倒计时项目。点击右上角“添加”按钮开始创建！",
        ddayInputTitlePlaceholder: "目标名（例：考试）",
        ddayCancelBtn: "取消",
        ddaySaveBtn: "保存",
        resolutionTitle: "今日一句话目标",
        resolutionStreakSuffix: "天连续达成中！",
        resolutionInputPlaceholder: "写下今天你需要专注的这一个目标...",
        resolutionHint: "如果达成了，点击左侧的圆圈将其标记为已完成！明天起它会自动归档到记录本中。",
        diaryTitle: "今日复盘日记",
        diaryInputPlaceholder: "自由记录今天这段流逝光阴中的所思所想。会实时保存到浏览器中...",
        archiveTitle: "逝去时光记录本",
        weekdays: ["日", "一", "二", "三", "四", "五", "六"],
        calendarPrevTitle: "上个月",
        calendarNextTitle: "下个月",
        calendarStatPlanned: "计划天数",
        calendarStatCompleted: "达成天数",
        calendarStatAverage: "平均目标达成率",
        btnShareText: "复制文本报告",
        btnExportInstagram: "保存为 Instagram Story",
        footerTitle: "我的人生进度条 v2.0.0",
        footerPrivacyPolicy: "数据保存政策：100% 浏览器本地存储",
        footerPrivacyLink: "隐私政策",
        footerCopyright: "© 2026 Life Progress Bar. All rights reserved. 本网页应用的所有数据均加密并保存在您的个人设备中，完全免受泄露风险。",
        settingsTitle: "我的人生设置",
        settingsDesc: "您可以随时修改您的出生日期和预期寿命。",
        settingsWarning: "清除浏览器缓存或更换设备可能会导致设置值重置。",
        settingsSaveBtn: "保存设置修改",
        btnBackup: "备份数据 (.json)",
        btnRestore: "恢复数据 (.json)",
        btnExportCsv: "下载历史记录 CSV",
        btnPrintPdf: "打印日记本 / PDF",
        adminVisitsLabel: "访问者统计",
        detailDdayTitle: "今日目标 (D-Day)",
        detailResolutionPlaceholder: "记录这天的目标...",
        detailDiaryLabel: "复盘日记",
        detailDiaryPlaceholder: "自由记录这天所想所感...",
        btnDelete: "删除",
        btnClose: "关闭",
        btnSave: "保存",
        musicPlayerTitle: "专注白噪音",
        musicTrackRain: "🌧️ 舒适的雨声",
        musicTrackLofi: "🎹 舒缓的Lofi律动",
        musicTrackCampfire: "🔥 温暖的篝火声",
        musicVolumeLabel: "音量",
        musicToggleTitle: "开启白噪音混音面板",
        musicStateStopped: "已停止",
        musicStatePlaying: "播放中",
        musicStatePaused: "暂停中",
        unitDay: " 天",
        unitAge: " 岁",
        dynamicMonthProgress: "{month}月进度率",
        dynamicYearProgress: "{year}年进度率",
        dynamicLifeRemaining: "剩余寿命：约 {days}天",
        dynamicLifeTargetMet: "您已达到设定的预期寿命目标！",
        dynamicVisitorCount: "{count} 次",
        dynamicVisitorFailed: "加载失败",
        dynamicVisitorPWFailed: "密码错误",
        dynamicVisitorAdmin: "管理员激活",
        alertResetConfirm: "您确定要重置所有设置吗？这会永久清除您所有的目标和日记数据。",
        alertBackupReady: "备份文件准备下载。",
        alertBackupFail: "没有可备份的数据。请先完成人生设置。",
        alertRestoreSuccess: "数据已恢复完成！",
        alertRestoreFail: "并非有效的备份文件。",
        alertCaptureFail: "图片捕获过程中发生错误。",
        alertDeleteConfirm: "您确定要删除这天的记录吗？",
        alertDdayDeleteConfirm: "您确定要删除这个倒计时吗？",
        alertPrivacyText: "🔒 隐私政策与声明:\n\n'我的人生进度条'不会将您的出生日期、预期寿命、今日目标、复盘日记等任何数据传输或上传到外部服务器。\n\n所有设置和记录仅保存在用户浏览器的本地存储（localStorage）中，清除缓存或点击重置将会彻底清除该数据。\n\n请放心记录您的人生足迹！",
        alertDdayTitleRequired: "请输入倒计时目标名。",
        alertDdayDateRequired: "请选择目标日期。",
        alertShareCopied: "人生进度报告已复制到剪贴板！分享到社交媒体或聊天工具中吧。",
        alertPasswordIncorrect: "密码不正确。",
        alertPopupBlocked: "弹窗被拦截。请允许弹窗后重试。",
        alertNoHistory: "没有可导出的记录。请先填写今日目标或复盘日记。",
        shareReportTitle: "⏳ 我的人生进度条报告 ⏳",
        shareToday: "今日",
        shareMonth: "本月",
        shareYear: "今年",
        shareLife: "人生",
        shareDaysLived: "已度过天数",
        shareDaysLeft: "剩余天数",
        shareStreakSuffix: "天连续目标达成中！",
        shareHashtags: "#我的人生进度条 #自我提升",
        streakFormat: "连续达成 {streak} 天！",
        labelStart: "开始",
        labelTarget: "目标"
    }
};let currentLang = localStorage.getItem('lifebar-lang') || 'ko';

function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('lifebar-lang', lang);
    const dict = translations[lang] || translations.ko;
    
    // Onboarding
    const onboardingTitle = document.querySelector('.onboarding-card h1.main-title');
    if (onboardingTitle) onboardingTitle.textContent = dict.onboardingTitle;
    
    const onboardingSubtitle = document.querySelector('.onboarding-card p.subtitle');
    if (onboardingSubtitle) onboardingSubtitle.textContent = dict.onboardingSubtitle;
    
    const labelBirthDate = document.querySelector('label[for="birth-date"]');
    if (labelBirthDate) labelBirthDate.innerHTML = `<i class="fa-solid fa-cake-candles"></i> ${dict.labelBirthDate}`;
    
    const labelExpectancyAge = document.querySelector('label[for="expectancy-age"]');
    if (labelExpectancyAge) labelExpectancyAge.innerHTML = `<i class="fa-solid fa-heart-pulse"></i> ${dict.labelExpectancyAge}`;
    
    const privacyNotice = document.querySelector('.onboarding-card .privacy-warning span');
    if (privacyNotice) {
        const parts = dict.privacyNotice.split(' 안내:');
        if (parts.length >= 2) {
            privacyNotice.innerHTML = `<i class="fa-solid fa-shield-halved"></i> <strong>${parts[0]} 안내:</strong>${parts[1]}`;
        } else {
            privacyNotice.textContent = dict.privacyNotice;
        }
    }
    
    const btnOpenDashboard = document.querySelector('#onboarding-form button[type="submit"] span');
    if (btnOpenDashboard) btnOpenDashboard.textContent = dict.btnOpenDashboard;
    
    // Header
    const settingsBtn = document.getElementById('settings-btn');
    if (settingsBtn) settingsBtn.title = dict.btnSettingsTitle;
    
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) resetBtn.title = dict.btnResetTitle;
    
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.title = dict.btnLangTitle;
    
    // Cards titles
    const cardTodayTitle = document.querySelector('#card-today .card-title');
    if (cardTodayTitle) cardTodayTitle.innerHTML = `<i class="fa-solid fa-sun icon-today"></i> ${dict.cardTodayTitle}`;
    
    const descToday = document.getElementById('desc-today');
    if (descToday) descToday.textContent = dict.cardTodayDesc;
    
    const cardMonthTitle = document.querySelector('#card-month .card-title');
    if (cardMonthTitle) cardMonthTitle.innerHTML = `<i class="fa-solid fa-calendar-days icon-month"></i> ${dict.cardMonthTitle}`;
    
    const cardYearTitle = document.querySelector('#card-year .card-title');
    if (cardYearTitle) cardYearTitle.innerHTML = `<i class="fa-solid fa-calendar icon-year"></i> ${dict.cardYearTitle}`;
    
    const cardLifeTitle = document.querySelector('#card-life .card-title');
    if (cardLifeTitle) cardLifeTitle.innerHTML = `<i class="fa-solid fa-user icon-life"></i> ${dict.cardLifeTitle}`;
    
    // Stats Labels
    const livedDaysLabel = document.querySelector('#stat-days-lived + .stat-label');
    if (livedDaysLabel) livedDaysLabel.textContent = dict.statLivedDaysLabel;
    
    const leftDaysLabel = document.querySelector('#stat-days-left + .stat-label');
    if (leftDaysLabel) leftDaysLabel.textContent = dict.statLeftDaysLabel;
    
    // D-Day Board
    const ddayTitle = document.querySelector('#dday-card .dday-board-header h3 span');
    if (ddayTitle) ddayTitle.textContent = dict.ddayBoardTitle;
    
    const ddayToggleBtn = document.getElementById('dday-toggle-add-btn');
    if (ddayToggleBtn) {
        const addForm = document.getElementById('dday-add-form');
        const isHidden = !addForm || addForm.classList.contains('hidden');
        ddayToggleBtn.innerHTML = isHidden ? `<i class="fa-solid fa-plus"></i> ${dict.ddayAddBtn}` : `<i class="fa-solid fa-xmark"></i> ${dict.ddayCancelBtn}`;
    }
    
    const ddayEmpty = document.getElementById('dday-empty-message');
    if (ddayEmpty) ddayEmpty.textContent = dict.ddayEmptyMsg;
    
    const ddayInputTitle = document.getElementById('dday-input-title');
    if (ddayInputTitle) ddayInputTitle.placeholder = dict.ddayInputTitlePlaceholder;
    
    const ddayCancelAdd = document.getElementById('dday-cancel-add-btn');
    if (ddayCancelAdd) ddayCancelAdd.textContent = dict.ddayCancelBtn;
    
    const ddaySaveAdd = document.getElementById('dday-save-add-btn');
    if (ddaySaveAdd) ddaySaveAdd.textContent = dict.ddaySaveBtn;
    
    // Resolution
    const resTitle = document.querySelector('.resolution-card .section-title span');
    if (resTitle) resTitle.innerHTML = `<i class="fa-solid fa-pen-nib"></i> ${dict.resolutionTitle}`;
    
    const resInput = document.getElementById('resolution-input');
    if (resInput) resInput.placeholder = dict.resolutionInputPlaceholder;
    
    const resHint = document.querySelector('.resolution-card .input-hint');
    if (resHint) resHint.textContent = dict.resolutionHint;
    
    // Diary
    const diaryTitle = document.querySelector('.diary-card .section-title');
    if (diaryTitle) diaryTitle.innerHTML = `<i class="fa-solid fa-book-open"></i> ${dict.diaryTitle}`;
    
    const diaryInput = document.getElementById('diary-input');
    if (diaryInput) diaryInput.placeholder = dict.diaryInputPlaceholder;
    
    // Archive calendar header & weekdays
    const archiveTitle = document.querySelector('.history-card .section-title');
    if (archiveTitle) archiveTitle.innerHTML = `<i class="fa-solid fa-calendar-days"></i> ${dict.archiveTitle}`;
    
    const calPrev = document.getElementById('calendar-prev-btn');
    if (calPrev) calPrev.title = dict.calendarPrevTitle;
    
    const calNext = document.getElementById('calendar-next-btn');
    if (calNext) calNext.title = dict.calendarNextTitle;
    
    const weekdaySpans = document.querySelectorAll('.calendar-weekdays span');
    if (weekdaySpans.length >= 7) {
        weekdaySpans.forEach((span, idx) => {
            span.textContent = dict.weekdays[idx];
        });
    }
    
    // Calendar statistics labels
    const recEl = document.querySelector('#cal-stat-recorded');
    const plannedLabel = recEl ? recEl.previousElementSibling : null;
    if (plannedLabel) plannedLabel.textContent = dict.calendarStatPlanned;
    
    const compEl = document.querySelector('#cal-stat-completed');
    const completedLabel = compEl ? compEl.previousElementSibling : null;
    if (completedLabel) completedLabel.textContent = dict.calendarStatCompleted;
    
    const ratEl = document.querySelector('#cal-stat-ratio');
    const avgLabel = ratEl ? ratEl.previousElementSibling : null;
    if (avgLabel) avgLabel.textContent = dict.calendarStatAverage;
    
    // Action buttons
    const shareTextBtn = document.querySelector('#share-text-btn span');
    if (shareTextBtn) shareTextBtn.textContent = dict.btnShareText;
    
    const exportImgBtn = document.querySelector('#export-img-btn span');
    if (exportImgBtn) exportImgBtn.textContent = dict.btnExportInstagram;
    
    // Footer
    const footerTitle = document.querySelector('.dashboard-footer div:nth-child(1) span:nth-child(1)');
    if (footerTitle) footerTitle.textContent = dict.footerTitle;
    
    const footerPrivacyPolicy = document.querySelector('.dashboard-footer div:nth-child(1) span:nth-child(3)');
    if (footerPrivacyPolicy) footerPrivacyPolicy.textContent = dict.footerPrivacyPolicy;
    
    const footerPrivacyBtn = document.getElementById('footer-privacy-btn');
    if (footerPrivacyBtn) footerPrivacyBtn.textContent = dict.footerPrivacyLink;
    
    const footerCopyright = document.querySelector('.dashboard-footer div:nth-child(2)');
    if (footerCopyright) footerCopyright.textContent = dict.footerCopyright;
    
    // Settings Modal
    const settingsTitle = document.querySelector('#settings-modal h2');
    if (settingsTitle) settingsTitle.textContent = dict.settingsTitle;
    
    const settingsDesc = document.querySelector('#settings-modal p.modal-desc');
    if (settingsDesc) settingsDesc.textContent = dict.settingsDesc;
    
    const labelSetBirth = document.querySelector('label[for="settings-birth-date"]');
    if (labelSetBirth) labelSetBirth.textContent = dict.labelBirthDate;
    
    const labelSetExp = document.querySelector('label[for="settings-expectancy-age"]');
    if (labelSetExp) labelSetExp.textContent = dict.labelExpectancyAge;
    
    const setWarning = document.querySelector('#settings-modal .privacy-warning span');
    if (setWarning) setWarning.textContent = dict.settingsWarning;
    
    const setSaveBtn = document.querySelector('#settings-form button[type="submit"]');
    if (setSaveBtn) setSaveBtn.textContent = dict.settingsSaveBtn;
    
    const backupBtn = document.querySelector('#backup-data-btn span');
    if (backupBtn) backupBtn.textContent = dict.btnBackup;
    
    const restoreBtn = document.querySelector('#restore-data-btn span');
    if (restoreBtn) restoreBtn.textContent = dict.btnRestore;
    
    const exportCsv = document.querySelector('#export-csv-btn span');
    if (exportCsv) exportCsv.textContent = dict.btnExportCsv;
    
    const printPdf = document.querySelector('#print-pdf-btn span');
    if (printPdf) printPdf.textContent = dict.btnPrintPdf;
    
    const visitsLabel = document.querySelector('#admin-visits-section .admin-visits-label');
    if (visitsLabel) visitsLabel.innerHTML = `<i class="fa-solid fa-users"></i> ${dict.adminVisitsLabel}`;
    
    // Detail Modal
    const detailDdayTitle = document.querySelector('#calendar-detail-modal #detail-dday-container div:nth-child(1) span');
    if (detailDdayTitle) detailDdayTitle.textContent = dict.detailDdayTitle;
    
    const detailResInput = document.getElementById('detail-resolution-input');
    if (detailResInput) detailResInput.placeholder = dict.detailResolutionPlaceholder;
    
    const detailDiaryLabel = document.querySelector('label[for="detail-diary-textarea"]');
    if (detailDiaryLabel) detailDiaryLabel.textContent = dict.detailDiaryLabel;
    
    const detailDiaryTextarea = document.getElementById('detail-diary-textarea');
    if (detailDiaryTextarea) detailDiaryTextarea.placeholder = dict.detailDiaryPlaceholder;
    
    const detailDeleteBtn = document.getElementById('detail-delete-btn');
    if (detailDeleteBtn) detailDeleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i> ${dict.btnDelete}`;
    
    const detailCloseBtn = document.getElementById('detail-close-btn');
    if (detailCloseBtn) detailCloseBtn.textContent = dict.btnClose;
    
    const detailSaveBtn = document.getElementById('detail-save-btn');
    if (detailSaveBtn) detailSaveBtn.textContent = dict.btnSave;
    
    // Music Player
    const playerTitle = document.querySelector('#ambient-panel div:nth-child(1) span:nth-child(1) span');
    if (playerTitle) playerTitle.textContent = dict.musicPlayerTitle;
    
    const trackRain = document.querySelector('.ambient-track-btn[data-track="rain"] span');
    if (trackRain) trackRain.textContent = dict.musicTrackRain;
    
    const trackLofi = document.querySelector('.ambient-track-btn[data-track="lofi"] span');
    if (trackLofi) trackLofi.textContent = dict.musicTrackLofi;
    
    const trackCampfire = document.querySelector('.ambient-track-btn[data-track="campfire"] span');
    if (trackCampfire) trackCampfire.textContent = dict.musicTrackCampfire;
    
    const volSlider = document.querySelector('#ambient-volume-slider');
    const volLabel = (volSlider && volSlider.previousElementSibling) ? volSlider.previousElementSibling.firstElementChild : null;
    if (volLabel) volLabel.textContent = dict.musicVolumeLabel;
    
    const toggleBtn = document.getElementById('ambient-toggle-widget-btn');
    if (toggleBtn) toggleBtn.title = dict.musicToggleTitle;
    
    // Update active dropdown item styles
    document.querySelectorAll('.lang-option').forEach(opt => {
        if (opt.getAttribute('data-lang') === lang) {
            opt.classList.add('active');
        } else {
            opt.classList.remove('active');
        }
    });
    
    // Refresh dynamic boards to apply translations instantly
    updateDDayCard();
    renderHistoryCalendar();
    updateStreak();
}


// ==========================================================================
// 1. Particle Background Generator (Stardust Effect)
// ==========================================================================
function generateStardust() {
    const container = document.getElementById('stars-container');
    if (!container) return;
    
    // Clean existing stars
    container.innerHTML = '';
    
    const count = 40;
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random sizes, positions, and delays
        const size = Math.random() * 3 + 1; // 1px to 4px
        const left = Math.random() * 100; // 0% to 100%
        const top = Math.random() * 100;
        const delay = Math.random() * 4; // 0s to 4s
        const duration = Math.random() * 3 + 2; // 2s to 5s
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${left}%`;
        star.style.top = `${top}%`;
        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;
        
        container.appendChild(star);
    }
}

// ==========================================================================
// 2. Dynamic Sky Color Shifter based on time
// ==========================================================================
function updateSkyBackground() {
    const sky = document.getElementById('sky-background');
    if (!sky) return;
    
    const hour = new Date().getHours();
    
    // Reset classes
    sky.classList.remove('dawn', 'sunrise', 'day', 'sunset', 'night');
    
    if (hour >= 0 && hour < 5) {
        sky.classList.add('dawn'); // 12 AM - 5 AM
    } else if (hour >= 5 && hour < 9) {
        sky.classList.add('sunrise'); // 5 AM - 9 AM
    } else if (hour >= 9 && hour < 17) {
        sky.classList.add('day'); // 9 AM - 5 PM
    } else if (hour >= 17 && hour < 20) {
        sky.classList.add('sunset'); // 5 PM - 8 PM
    } else {
        sky.classList.add('night'); // 8 PM - 12 AM
    }
}

// ==========================================================================
// 3. Core Calculations & Update Loop
// ==========================================================================
let updateIntervalId = null;

function padZero(num, length = 2) {
    return String(num).padStart(length, '0');
}

function calculateProgress() {
    const birthStr = localStorage.getItem('aw-life-birth');
    const expectancyStr = localStorage.getItem('aw-life-expectancy');
    
    if (!birthStr || !expectancyStr) return;
    
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const dict = translations[currentLang] || translations.ko;
    
    // ----------------------------------------------------
    // A. Today's Progress (Precision calculation)
    // ----------------------------------------------------
    const startOfToday = new Date(year, month, date, 0, 0, 0, 0);
    const endOfToday = new Date(year, month, date, 23, 59, 59, 999);
    
    const todayLivedMs = now.getTime() - startOfToday.getTime();
    const todayTotalMs = 86400 * 1000;
    const todayProgress = (todayLivedMs / todayTotalMs) * 100;
    
    // Display clock & percent
    const clockDisplay = document.getElementById('clock-display');
    if (clockDisplay) {
        clockDisplay.textContent = `${padZero(now.getHours())}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())}`;
    }
    const percentToday = document.getElementById('percent-today');
    if (percentToday) {
        percentToday.textContent = `${todayProgress.toFixed(4)}%`;
    }
    const barToday = document.getElementById('bar-today');
    if (barToday) {
        barToday.style.width = `${todayProgress}%`;
    }
    
    // ----------------------------------------------------
    // B. This Month's Progress
    // ----------------------------------------------------
    const startOfMonth = new Date(year, month, 1, 0, 0, 0, 0);
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
    const monthTotalMs = totalDaysInMonth * 86400 * 1000;
    const monthLivedMs = now.getTime() - startOfMonth.getTime();
    const monthProgress = (monthLivedMs / monthTotalMs) * 100;
    
    const monthDisplay = document.getElementById('month-display');
    if (monthDisplay) {
        monthDisplay.textContent = `${date}${dict.unitDay} / ${totalDaysInMonth}${dict.unitDay}`;
    }
    const percentMonth = document.getElementById('percent-month');
    if (percentMonth) {
        percentMonth.textContent = `${monthProgress.toFixed(4)}%`;
    }
    const barMonth = document.getElementById('bar-month');
    if (barMonth) {
        barMonth.style.width = `${monthProgress}%`;
    }
    const descMonth = document.getElementById('desc-month');
    if (descMonth) {
        descMonth.textContent = dict.dynamicMonthProgress.replace('{month}', month + 1);
    }

    // ----------------------------------------------------
    // C. This Year's Progress
    // ----------------------------------------------------
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    const totalDaysInYear = isLeap ? 366 : 365;
    const startOfYear = new Date(year, 0, 1, 0, 0, 0, 0);
    const yearTotalMs = totalDaysInYear * 86400 * 1000;
    const yearLivedMs = now.getTime() - startOfYear.getTime();
    const yearProgress = (yearLivedMs / yearTotalMs) * 100;
    
    // Calculate passed days count
    const passedDaysInYear = Math.floor(yearLivedMs / (86400 * 1000)) + 1;
    
    const yearDisplay = document.getElementById('year-display');
    if (yearDisplay) {
        yearDisplay.textContent = `${passedDaysInYear}${dict.unitDay} / ${totalDaysInYear}${dict.unitDay}`;
    }
    const percentYear = document.getElementById('percent-year');
    if (percentYear) {
        percentYear.textContent = `${yearProgress.toFixed(4)}%`;
    }
    const barYear = document.getElementById('bar-year');
    if (barYear) {
        barYear.style.width = `${yearProgress}%`;
    }
    const descYear = document.getElementById('desc-year');
    if (descYear) {
        descYear.textContent = dict.dynamicYearProgress.replace('{year}', year);
    }

    // ----------------------------------------------------
    // D. My Life's Progress
    // ----------------------------------------------------
    const birth = new Date(birthStr);
    const expectancy = parseInt(expectancyStr);
    
    // Average length of a year including leap years
    const MS_PER_YEAR = 365.2425 * 86400 * 1000;
    const death = new Date(birth.getTime() + expectancy * MS_PER_YEAR);
    
    const lifeTotalMs = death.getTime() - birth.getTime();
    const lifeLivedMs = now.getTime() - birth.getTime();
    const lifeProgress = Math.max(0, Math.min(100, (lifeLivedMs / lifeTotalMs) * 100));
    
    const elapsedAge = lifeLivedMs / MS_PER_YEAR;
    
    const lifeDisplay = document.getElementById('life-display');
    if (lifeDisplay) {
        lifeDisplay.textContent = `${elapsedAge.toFixed(2)}${dict.unitAge} / ${expectancy}${dict.unitAge}`;
    }
    const percentLife = document.getElementById('percent-life');
    if (percentLife) {
        percentLife.textContent = `${lifeProgress.toFixed(4)}%`;
    }
    const barLife = document.getElementById('bar-life');
    if (barLife) {
        barLife.style.width = `${lifeProgress}%`;
    }

    // Lived Days / Remaining Days Display
    const livedDays = Math.floor(lifeLivedMs / (86400 * 1000));
    const totalLifeDays = Math.floor(lifeTotalMs / (86400 * 1000));
    const leftDays = Math.max(0, totalLifeDays - livedDays);
    
    const statDaysLived = document.getElementById('stat-days-lived');
    if (statDaysLived) {
        statDaysLived.textContent = livedDays.toLocaleString('ko-KR');
    }
    const statDaysLeft = document.getElementById('stat-days-left');
    if (statDaysLeft) {
        statDaysLeft.textContent = leftDays.toLocaleString('ko-KR');
    }
    
    const descLife = document.getElementById('desc-life');
    if (descLife) {
        if (leftDays > 0) {
            descLife.textContent = dict.dynamicLifeRemaining.replace('{days}', leftDays.toLocaleString(currentLang));
        } else {
            descLife.textContent = dict.dynamicLifeTargetMet;
        }
    }
}

function startCalculationLoop() {
    calculateProgress();
    clearInterval(updateIntervalId);
    updateIntervalId = setInterval(calculateProgress, 1000);
}

// ==========================================================================
// 4. Input & Settings Storage Handlers
// ==========================================================================
function checkOnboardingState() {
    const birth = localStorage.getItem('aw-life-birth');
    const expectancy = localStorage.getItem('aw-life-expectancy');
    
    const onboarding = document.getElementById('onboarding-screen');
    const dashboard = document.getElementById('dashboard-screen');
    
    const todayStr = new Date().toISOString().split('T')[0];
    const settingsBirthInput = document.getElementById('settings-birth-date');
    if (settingsBirthInput) settingsBirthInput.max = todayStr;
    const birthInput = document.getElementById('birth-date');
    if (birthInput) birthInput.max = todayStr;
    
    if (birth && expectancy) {
        onboarding.classList.add('hidden');
        dashboard.classList.remove('hidden');
        
        // Populate inputs in settings
        if (settingsBirthInput) settingsBirthInput.value = birth;
        const settingsExpInput = document.getElementById('settings-expectancy-age');
        if (settingsExpInput) settingsExpInput.value = expectancy;
        
        // Update D-Day Card and Streak Badge
        updateDDayCard();
        updateStreak();
        
        // Manage daily resolution reset
        checkDailyResolutionReset();
        
        // Start live ticker
        startCalculationLoop();
    } else {
        onboarding.classList.remove('hidden');
        dashboard.classList.add('hidden');
        clearInterval(updateIntervalId);
    }
}

function getTodayDateString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function loadHistory() {
    try {
        const historyStr = localStorage.getItem('aw-life-history');
        return historyStr ? JSON.parse(historyStr) : {};
    } catch (e) {
        console.error("Failed to parse history data", e);
        return {};
    }
}

function saveHistory(history) {
    localStorage.setItem('aw-life-history', JSON.stringify(history));
}

function getTodayData() {
    const history = loadHistory();
    const todayStr = getTodayDateString();
    return history[todayStr] || { resolution: '', completed: false, diary: '' };
}

let currentCalendarYear = new Date().getFullYear();
let currentCalendarMonth = new Date().getMonth();
let selectedDateForDelete = null;
let detailModalCompletedState = false;

function saveTodayData(updates, shouldRedrawCalendar = false) {
    const history = loadHistory();
    const todayStr = getTodayDateString();
    const todayData = history[todayStr] || { resolution: '', completed: false, diary: '' };
    
    const updatedData = { ...todayData, ...updates };
    history[todayStr] = updatedData;
    
    saveHistory(history);
    updateStreak();
    
    if (shouldRedrawCalendar) {
        renderHistoryCalendar();
    }
}

function migrateOldStorage() {
    const oldResolution = localStorage.getItem('aw-resolution-text');
    const oldDiary = localStorage.getItem('aw-diary-text');
    const oldDate = localStorage.getItem('aw-resolution-date') || getTodayDateString();
    
    if (oldResolution || oldDiary) {
        const history = loadHistory();
        if (!history[oldDate]) {
            history[oldDate] = {
                resolution: oldResolution || '',
                completed: false,
                diary: oldDiary || ''
            };
            saveHistory(history);
        }
        
        // Remove old keys to clean up
        localStorage.removeItem('aw-resolution-text');
        localStorage.removeItem('aw-diary-text');
        localStorage.removeItem('aw-resolution-date');
    }
}

// Check if a new day has arrived to reset resolution text
function checkDailyResolutionReset() {
    // 1. Run migration if there is old data
    migrateOldStorage();
    
    // 2. Fetch today's data
    const todayData = getTodayData();
    
    const resolutionInput = document.getElementById('resolution-input');
    const diaryInput = document.getElementById('diary-input');
    const completeBtn = document.getElementById('resolution-complete-btn');
    
    if (resolutionInput) {
        resolutionInput.value = todayData.resolution || '';
        if (todayData.completed) {
            resolutionInput.classList.add('completed');
        } else {
            resolutionInput.classList.remove('completed');
        }
    }
    
    if (diaryInput) {
        diaryInput.value = todayData.diary || '';
    }
    
    if (completeBtn) {
        const icon = completeBtn.querySelector('i');
        if (todayData.completed) {
            completeBtn.classList.add('completed');
            if (icon) icon.className = 'fa-solid fa-circle-check';
        } else {
            completeBtn.classList.remove('completed');
            if (icon) icon.className = 'fa-regular fa-circle';
        }
    }
    
    // 3. Render the calendar
    renderHistoryCalendar();
}

function renderHistoryCalendar() {
    const calendarGrid = document.getElementById('calendar-grid');
    const calendarTitle = document.getElementById('calendar-title');
    if (!calendarGrid || !calendarTitle) return;
    
    if (currentLang === 'en') {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        calendarTitle.textContent = `${monthNames[currentCalendarMonth]} ${currentCalendarYear}`;
    } else {
        const titleStr = `${currentCalendarYear}년 ${currentCalendarMonth + 1}월`;
        calendarTitle.textContent = titleStr.replace('년', currentLang === 'ja' || currentLang === 'zh' ? '年' : '년').replace('월', currentLang === 'ja' || currentLang === 'zh' ? '月' : '월');
    }
    
    calendarGrid.innerHTML = '';
    
    const history = loadHistory();
    const ddays = loadDDays();
    const todayStr = getTodayDateString();
    
    const firstDayIndex = new Date(currentCalendarYear, currentCalendarMonth, 1).getDay();
    const totalDays = new Date(currentCalendarYear, currentCalendarMonth + 1, 0).getDate();
    const prevMonthTotalDays = new Date(currentCalendarYear, currentCalendarMonth, 0).getDate();
    
    // 1. Render prefix cells (other month)
    for (let i = firstDayIndex - 1; i >= 0; i--) {
        const dayNum = prevMonthTotalDays - i;
        const cell = document.createElement('div');
        cell.className = 'calendar-cell other-month';
        cell.innerHTML = `<span class="calendar-cell-num">${dayNum}</span>`;
        calendarGrid.appendChild(cell);
    }
    
    // 2. Render actual day cells
    const todayObj = new Date();
    todayObj.setHours(0, 0, 0, 0);
    
    for (let d = 1; d <= totalDays; d++) {
        const cell = document.createElement('div');
        cell.className = 'calendar-cell';
        
        const dateStr = `${currentCalendarYear}-${String(currentCalendarMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        
        const cellNum = document.createElement('span');
        cellNum.className = 'calendar-cell-num';
        cellNum.textContent = d;
        cell.appendChild(cellNum);
        
        if (dateStr === todayStr) {
            cell.classList.add('today');
        }
        
        // Add record indicator dot if present
        if (history[dateStr]) {
            const record = history[dateStr];
            if (record.resolution || record.diary) {
                cell.classList.add('has-record');
                
                const dot = document.createElement('div');
                dot.className = 'calendar-record-indicator';
                if (record.completed) {
                    dot.classList.add('completed');
                }
                cell.appendChild(dot);
            }
        }
        
        // Check if date has D-Days
        const dateMatches = ddays.filter(item => item.targetDate === dateStr);
        if (dateMatches.length > 0) {
            cell.classList.add('has-dday');
            const flag = document.createElement('div');
            flag.className = 'calendar-dday-flag';
            flag.title = dateMatches.map(item => item.title).join(', ');
            flag.innerHTML = '<i class="fa-solid fa-flag"></i>';
            cell.appendChild(flag);
        }
        
        // Check if date is in the past or today for editing OR has a D-Day (including future)
        const cellDate = new Date(currentCalendarYear, currentCalendarMonth, d);
        const hasDDay = dateMatches.length > 0;
        if (cellDate <= todayObj || hasDDay) {
            cell.classList.add('editable-day');
            cell.addEventListener('click', (e) => {
                e.stopPropagation();
                const record = history[dateStr] || { resolution: '', completed: false, diary: '' };
                openCalendarDetailModal(dateStr, record);
            });
        }
        
        calendarGrid.appendChild(cell);
    }
    
    // 3. Render suffix cells (other month)
    const totalCellsSoFar = firstDayIndex + totalDays;
    const remainingCells = (7 - (totalCellsSoFar % 7)) % 7;
    for (let i = 1; i <= remainingCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'calendar-cell other-month';
        cell.innerHTML = `<span class="calendar-cell-num">${i}</span>`;
        calendarGrid.appendChild(cell);
    }
    
    // 4. Update stats below calendar
    updateCalendarStats();
}

function updateCalendarStats() {
    const recordedEl = document.getElementById('cal-stat-recorded');
    const completedEl = document.getElementById('cal-stat-completed');
    const ratioEl = document.getElementById('cal-stat-ratio');
    const chartCircle = document.getElementById('stats-chart-circle');
    const chartPercent = document.getElementById('stats-chart-percent');
    
    const history = loadHistory();
    let totalRecorded = 0;
    let totalCompleted = 0;
    
    const totalDays = new Date(currentCalendarYear, currentCalendarMonth + 1, 0).getDate();
    
    for (let d = 1; d <= totalDays; d++) {
        const dateStr = `${currentCalendarYear}-${String(currentCalendarMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        if (history[dateStr] && history[dateStr].resolution) {
            totalRecorded++;
            if (history[dateStr].completed) {
                totalCompleted++;
            }
        }
    }
    
    const ratio = totalRecorded > 0 ? (totalCompleted / totalRecorded) * 100 : 0.0;
    
    const dict = translations[currentLang] || translations.ko; if (recordedEl) recordedEl.textContent = `${totalRecorded}${dict.unitDay}`;
    if (completedEl) completedEl.textContent = `${totalCompleted}${dict.unitDay}`;
    if (ratioEl) ratioEl.textContent = `${ratio.toFixed(1)}%`;
    
    // Update SVG Progress Ring
    if (chartCircle && chartPercent) {
        const circumference = 213.6;
        const offset = circumference - (ratio / 100) * circumference;
        chartCircle.style.strokeDashoffset = offset;
        chartPercent.textContent = `${Math.round(ratio)}%`;
    }
}

function changeCalendarMonth(offset) {
    currentCalendarMonth += offset;
    if (currentCalendarMonth < 0) {
        currentCalendarMonth = 11;
        currentCalendarYear -= 1;
    } else if (currentCalendarMonth > 11) {
        currentCalendarMonth = 0;
        currentCalendarYear += 1;
    }
    renderHistoryCalendar();
}

function openCalendarDetailModal(dateStr, record) {
    const modal = document.getElementById('calendar-detail-modal');
    const dateText = document.getElementById('detail-date');
    const resInput = document.getElementById('detail-resolution-input');
    const diaryTextarea = document.getElementById('detail-diary-textarea');
    
    if (!modal || !dateText || !resInput || !diaryTextarea) return;
    
    selectedDateForDelete = dateStr;
    detailModalCompletedState = record.completed || false;
    
    const dateObj = new Date(dateStr);
    const dict = translations[currentLang] || translations.ko; const weekdays = dict.weekdays;
    const dayOfWeek = weekdays[dateObj.getDay()];
    dateText.textContent = `${dateStr.replace(/-/g, '. ')} (${dayOfWeek})`;
    
    resInput.value = record.resolution || '';
    diaryTextarea.value = record.diary || '';
    
    updateDetailModalCheckUI();
    
    // Render D-Days in detail modal if there are any matching D-Days on this date
    const ddayContainer = document.getElementById('detail-dday-container');
    const ddayList = document.getElementById('detail-dday-list');
    if (ddayContainer && ddayList) {
        const ddays = loadDDays();
        const dateMatches = ddays.filter(item => item.targetDate === dateStr);
        if (dateMatches.length > 0) {
            ddayContainer.classList.remove('hidden');
            ddayList.innerHTML = dateMatches.map(item => {
                return `<div style="display: flex; align-items: center; gap: 8px;">
                    <span>• ${escapeHtml(item.title)}</span>
                </div>`;
            }).join('');
        } else {
            ddayContainer.classList.add('hidden');
            ddayList.innerHTML = '';
        }
    }

    // Hide inputs and save/delete buttons for future dates
    const todayObj = new Date();
    todayObj.setHours(0, 0, 0, 0);
    const checkDate = new Date(dateStr);
    checkDate.setHours(0, 0, 0, 0);
    const isFuture = checkDate > todayObj;
    
    const resContainer = document.getElementById('detail-resolution-container');
    const diaryContainer = document.querySelector('.detail-diary-container');
    const saveBtn = document.getElementById('detail-save-btn');
    const deleteBtn = document.getElementById('detail-delete-btn');
    
    if (isFuture) {
        if (resContainer) resContainer.style.display = 'none';
        if (diaryContainer) diaryContainer.style.display = 'none';
        if (saveBtn) saveBtn.style.display = 'none';
        if (deleteBtn) deleteBtn.style.display = 'none';
    } else {
        if (resContainer) resContainer.style.display = '';
        if (diaryContainer) diaryContainer.style.display = '';
        if (saveBtn) saveBtn.style.display = '';
        if (deleteBtn) {
            if (record.resolution || record.diary) {
                deleteBtn.style.display = '';
            } else {
                deleteBtn.style.display = 'none';
            }
        }
    }
    
    modal.classList.remove('hidden');
}

function updateDetailModalCheckUI() {
    const btn = document.getElementById('detail-resolution-check-btn');
    const icon = document.getElementById('detail-resolution-icon');
    const input = document.getElementById('detail-resolution-input');
    if (!btn || !icon || !input) return;
    
    if (detailModalCompletedState) {
        btn.classList.add('completed');
        input.classList.add('completed');
        icon.className = 'fa-solid fa-circle-check check-success';
    } else {
        btn.classList.remove('completed');
        input.classList.remove('completed');
        icon.className = 'fa-regular fa-circle';
    }
}

function saveSelectedCalendarRecord() {
    if (!selectedDateForDelete) return;
    
    const resVal = document.getElementById('detail-resolution-input').value.trim();
    const diaryVal = document.getElementById('detail-diary-textarea').value.trim();
    
    const history = loadHistory();
    
    if (!resVal && !diaryVal) {
        delete history[selectedDateForDelete];
    } else {
        history[selectedDateForDelete] = {
            resolution: resVal,
            completed: detailModalCompletedState,
            diary: diaryVal
        };
    }
    
    saveHistory(history);
    updateStreak();
    closeCalendarDetailModal();
    renderHistoryCalendar();
    
    // Update dashboard inputs if saved today's record
    const todayStr = getTodayDateString();
    if (selectedDateForDelete === todayStr) {
        checkDailyResolutionReset();
    }
}

function closeCalendarDetailModal() {
    const modal = document.getElementById('calendar-detail-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
    selectedDateForDelete = null;
}

function deleteSelectedCalendarRecord() {
    if (!selectedDateForDelete) return;
    
    const dict = translations[currentLang] || translations.ko; if (confirm(dict.alertDeleteConfirm)) {
        const history = loadHistory();
        delete history[selectedDateForDelete];
        saveHistory(history);
        updateStreak();
        closeCalendarDetailModal();
        renderHistoryCalendar();
        
        const todayStr = getTodayDateString();
        if (selectedDateForDelete === todayStr) {
            checkDailyResolutionReset();
        }
    }
}

function backupData() {
    const keys = ['aw-life-birth', 'aw-life-expectancy', 'aw-life-history', 'aw-life-dday-list'];
    const backupObj = {};
    
    keys.forEach(key => {
        const val = localStorage.getItem(key);
        if (val) {
            backupObj[key] = val;
        }
    });
    
    if (Object.keys(backupObj).length === 0) {
        const dict = translations[currentLang] || translations.ko; alert(dict.alertBackupFail);
        return;
    }
    
    const jsonStr = JSON.stringify(backupObj, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const today = new Date();
    const dateStr = `${today.getFullYear()}${String(today.getMonth()+1).padStart(2,'0')}${String(today.getDate()).padStart(2,'0')}`;
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `lifebar_backup_${dateStr}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function restoreData(file) {
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const backupObj = JSON.parse(e.target.result);
            
            if (!backupObj['aw-life-birth'] || !backupObj['aw-life-expectancy']) {
                throw new Error("올바른 백업 파일 구조가 아닙니다. 생년월일과 예상 수명 데이터가 필요합니다.");
            }
            
            localStorage.setItem('aw-life-birth', backupObj['aw-life-birth']);
            localStorage.setItem('aw-life-expectancy', backupObj['aw-life-expectancy']);
            
            if (backupObj['aw-life-history']) {
                localStorage.setItem('aw-life-history', backupObj['aw-life-history']);
            } else {
                localStorage.removeItem('aw-life-history');
            }
            
            // Restore D-Day list
            if (backupObj['aw-life-dday-list']) {
                localStorage.setItem('aw-life-dday-list', backupObj['aw-life-dday-list']);
            } else {
                localStorage.removeItem('aw-life-dday-list');
            }
            
            const dict = translations[currentLang] || translations.ko; alert(dict.alertRestoreSuccess);
            window.location.reload();
            
        } catch (err) {
            const dict = translations[currentLang] || translations.ko; alert(dict.alertRestoreFail + ": " + err.message);
        }
    };
    reader.readAsText(file);
}
async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// Firebase Presence Setup
const firebaseConfig = {
    projectId: "chromaglow-app-2026",
    appId: "1:756931852879:web:6065bd640b06798efac83a",
    apiKey: "AIzaSyDPDfgcTxO0DKduc5UCvaaeFnBXB75TsS0",
    authDomain: "chromaglow-app-2026.firebaseapp.com"
};

let db;
try {
    if (typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
    }
} catch (e) {
    console.error("Firebase init error:", e);
}

const sessionId = 'session_' + Math.random().toString(36).substring(2, 11);

function startPresenceHeartbeat(appName) {
    const sessionRef = db.collection('presence').doc(appName + '_' + sessionId);
    const sendHeartbeat = () => {
        sessionRef.set({
            appName: appName,
            lastActive: firebase.firestore.FieldValue.serverTimestamp()
        }).catch(err => console.error("Presence heartbeat write error:", err));
    };

    sendHeartbeat();
    const heartbeatInterval = setInterval(sendHeartbeat, 15000);

    window.addEventListener('beforeunload', () => {
        clearInterval(heartbeatInterval);
        sessionRef.delete().catch(err => console.error("Presence exit delete error:", err));
    });
}

function initVisitorCounter() {
    const todayStr = getTodayDateString();
    
    // 1. Total (Cumulative) Visitor Count (Once ever per device/browser)
    if (!localStorage.getItem('lifebar-visited')) {
        fetch('https://abacus.jasoncameron.dev/hit/lifebar-orara/visits?cb=' + Date.now())
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('lifebar-visited', 'true');
                console.log("Total visitor count initialized");
            })
            .catch(err => console.error("Total Visitor Counter hit error:", err));
    }
    
    // 2. Today's Visitor Count (Once per day per device/browser)
    if (!localStorage.getItem('lifebar-visited-' + todayStr)) {
        fetch(`https://abacus.jasoncameron.dev/hit/lifebar-orara-visits-${todayStr}/visits?cb=` + Date.now())
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('lifebar-visited-' + todayStr, 'true');
                console.log("Today visitor count initialized for " + todayStr);
            })
            .catch(err => console.error("Today Visitor Counter hit error:", err));
    }
    
    if (db) {
        startPresenceHeartbeat('lifebar');
    }
}

let settingsTitleClicks = 0;

function revealVisitorCount() {
    const adminSection = document.getElementById('admin-visits-section');
    const countEl = document.getElementById('admin-visits-count');
    if (!adminSection || !countEl) return;
    
    adminSection.classList.remove('hidden');
    localStorage.setItem('lifebar-admin-unlocked', 'true');
    
    const todayStr = getTodayDateString();
    
    Promise.all([
        fetch('https://abacus.jasoncameron.dev/get/lifebar-orara/visits?cb=' + Date.now()).then(res => res.json()),
        fetch(`https://abacus.jasoncameron.dev/get/lifebar-orara-visits-${todayStr}/visits?cb=` + Date.now()).then(res => res.json())
    ])
    .then(([totalData, todayData]) => {
        let totalCount = 0;
        let todayCount = 0;
        
        if (totalData && totalData.value !== undefined) {
            totalCount = totalData.value;
        }
        if (todayData && todayData.value !== undefined) {
            todayCount = todayData.value;
        }
        
        if (todayCount < 1) todayCount = 1;
        if (totalCount < todayCount) totalCount = todayCount;
        
        const formatCountText = (liveCountVal) => {
            const formattedTotal = totalCount.toLocaleString(currentLang);
            const formattedToday = todayCount.toLocaleString(currentLang);
            
            if (currentLang === 'ko') {
                return `누적 ${formattedTotal}명 / 오늘 ${formattedToday}명 (실시간 ${liveCountVal}명)`;
            } else if (currentLang === 'ja') {
                return `累計 ${formattedTotal}人 / 本日 ${formattedToday}人 (リアルタイム ${liveCountVal}人)`;
            } else if (currentLang === 'zh') {
                return `累计 ${formattedTotal} 人次 / 今日 ${formattedToday} 人次 (实时 ${liveCountVal} 人)`;
            } else {
                return `Total: ${formattedTotal} / Today: ${formattedToday} (live: ${liveCountVal})`;
            }
        };
        
        if (db) {
            if (window.presenceUnsubscribe) {
                window.presenceUnsubscribe();
            }
            window.presenceUnsubscribe = db.collection('presence')
                .where('appName', '==', 'lifebar')
                .onSnapshot(snapshot => {
                    const now = Date.now();
                    let activeCount = 0;
                    
                    snapshot.forEach(doc => {
                        const docData = doc.data();
                        if (docData.lastActive) {
                            const lastActiveMs = docData.lastActive.toDate().getTime();
                            if (now - lastActiveMs < 40000) {
                                activeCount++;
                            }
                        } else {
                            activeCount++;
                        }
                    });
                    
                    if (activeCount < 1) activeCount = 1;
                    countEl.textContent = formatCountText(activeCount);
                }, err => {
                    console.error("Presence listener error:", err);
                    countEl.textContent = formatCountText(1);
                });
        } else {
            countEl.textContent = formatCountText(1);
        }
    })
    .catch(err => {
        console.error("Fetch counter error:", err);
        if (currentLang === 'ko') {
            countEl.textContent = "조회 실패";
        } else if (currentLang === 'ja') {
            countEl.textContent = "読み込み失敗";
        } else if (currentLang === 'zh') {
            countEl.textContent = "加载失败";
        } else {
            countEl.textContent = "Load Failed";
        }
    });
}

function checkAdminState() {
    if (localStorage.getItem('lifebar-admin-unlocked') === 'true') {
        revealVisitorCount();
    }
}

function updateStreak() {
    const history = loadHistory();
    const streakBadge = document.getElementById('streak-badge');
    const streakCountEl = document.getElementById('streak-count');
    if (!streakBadge || !streakCountEl) return;
    
    let streak = 0;
    const todayStr = getTodayDateString();
    
    const todayRecord = history[todayStr];
    let startStr = null;
    
    if (todayRecord && todayRecord.completed) {
        startStr = todayStr;
    } else {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = formatDate(yesterday);
        const yesterdayRecord = history[yesterdayStr];
        if (yesterdayRecord && yesterdayRecord.completed) {
            startStr = yesterdayStr;
        }
    }
    
    if (startStr) {
        let checkDate = new Date(startStr);
        while (true) {
            const checkStr = formatDate(checkDate);
            const record = history[checkStr];
            if (record && record.completed) {
                streak++;
                checkDate.setDate(checkDate.getDate() - 1);
            } else {
                break;
            }
        }
    }
    
    if (streak > 0) {
        const streakText = document.getElementById('streak-text');
    if (streakText) {
        const dict = translations[currentLang] || translations.ko;
        streakText.textContent = dict.streakFormat.replace('{streak}', streak);
    }
        streakBadge.classList.remove('hidden');
    } else {
        streakBadge.classList.add('hidden');
    }
}

function formatDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function loadDDays() {
    try {
        const ddays = localStorage.getItem('aw-life-dday-list');
        if (ddays) {
            return JSON.parse(ddays);
        }
    } catch (e) {
        console.error("Failed to parse D-Days list", e);
    }
    
    // Migration logic from old single D-Day settings
    const oldTitle = localStorage.getItem('aw-life-dday-title');
    const oldDate = localStorage.getItem('aw-life-dday-date');
    const oldSetDate = localStorage.getItem('aw-life-dday-set-date') || getTodayDateString();
    
    if (oldDate) {
        const migratedList = [{
            id: Date.now().toString(),
            title: oldTitle || '디데이',
            targetDate: oldDate,
            setDate: oldSetDate
        }];
        saveDDays(migratedList);
        localStorage.removeItem('aw-life-dday-title');
        localStorage.removeItem('aw-life-dday-date');
        localStorage.removeItem('aw-life-dday-set-date');
        return migratedList;
    }
    
    return [];
}

function saveDDays(list) {
    localStorage.setItem('aw-life-dday-list', JSON.stringify(list));
}

function updateDDayCard() {
    const listContainer = document.getElementById('dday-list-container');
    const emptyMsg = document.getElementById('dday-empty-message');
    if (!listContainer || !emptyMsg) return;
    
    const ddays = loadDDays();
    listContainer.innerHTML = '';
    
    if (ddays.length === 0) {
        emptyMsg.style.display = 'block';
        return;
    }
    
    emptyMsg.style.display = 'none';
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const dict = translations[currentLang] || translations.ko; ddays.forEach(item => {
        const targetDate = new Date(item.targetDate);
        targetDate.setHours(0, 0, 0, 0);
        
        const diffTime = targetDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        let ddayText = '';
        if (diffDays > 0) {
            ddayText = `D-${diffDays}`;
        } else if (diffDays === 0) {
            ddayText = `D-Day`;
        } else {
            ddayText = `D+${Math.abs(diffDays)}`;
        }
        
        let pct = 0;
        if (item.setDate) {
            const setDate = new Date(item.setDate);
            setDate.setHours(0, 0, 0, 0);
            const totalTime = targetDate.getTime() - setDate.getTime();
            const elapsedTime = today.getTime() - setDate.getTime();
            if (totalTime > 0) {
                pct = Math.max(0, Math.min(100, (elapsedTime / totalTime) * 100));
            } else {
                pct = 100;
            }
        }
        
        const itemEl = document.createElement('div');
        itemEl.className = 'dday-item';
        itemEl.style.cssText = `
            display: flex;
            flex-direction: column;
            gap: 6px;
            padding: 12px;
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,255,255,0.04);
            border-radius: 12px;
            position: relative;
        `;
        
        itemEl.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                <span style="font-weight: 700; font-size: 13px; color: var(--text-primary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1;">
                    ${escapeHtml(item.title)}
                </span>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span class="dday-badge" style="font-size: 11px; font-weight: 800; color: #00f2fe; background: rgba(0,242,254,0.08); padding: 2px 8px; border-radius: 10px; border: 1px solid rgba(0,242,254,0.15); white-space: nowrap;">
                        ${ddayText}
                    </span>
                    <button class="dday-delete-btn" data-id="${item.id}" style="background: transparent; border: none; color: rgba(255, 65, 108, 0.7); cursor: pointer; padding: 4px; font-size: 12px; transition: color 0.2s;" title="삭제">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
            <div class="progress-bar-container" style="height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden; width: 100%;">
                <div class="progress-bar" style="width: ${pct}%; height: 100%; background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%); transition: width 0.5s ease;"></div>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 10px; color: var(--text-muted);">
                <span>${dict.labelStart}: ${item.setDate.replace(/-/g, '. ')}</span>
                <span>${dict.labelTarget}: ${item.targetDate.replace(/-/g, '. ')}</span>
            </div>
        `;
        
        listContainer.appendChild(itemEl);
    });
    
    const deleteBtns = listContainer.querySelectorAll('.dday-delete-btn');
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.getAttribute('data-id');
            deleteDDay(id);
        });
    });
}

function deleteDDay(id) {
    if (confirm("이 디데이를 삭제하시겠습니까?")) {
        let ddays = loadDDays();
        ddays = ddays.filter(item => item.id !== id);
        saveDDays(ddays);
        updateDDayCard();
        renderHistoryCalendar();
    }
}

function escapeHtml(str) {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}

// ==========================================================================
// 5. Instagram Story Export (html2canvas Wrapper Rendering)
// ==========================================================================
function generateInstagramStoryImage() {
    const birth = localStorage.getItem('aw-life-birth');
    const expectancy = localStorage.getItem('aw-life-expectancy');
    if (!birth || !expectancy) return;
    
    const now = new Date();
    const clockStr = `${padZero(now.getHours())}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())}`;
    
    // Retrieve computed values to display on Instagram Card
    const percentTodayText = document.getElementById('percent-today').textContent;
    const percentMonthText = document.getElementById('percent-month').textContent;
    const percentYearText = document.getElementById('percent-year').textContent;
    const percentLifeText = document.getElementById('percent-life').textContent;
    
    const todayDetailText = document.getElementById('clock-display').textContent;
    const monthDetailText = document.getElementById('month-display').textContent;
    const yearDetailText = document.getElementById('year-display').textContent;
    const lifeDetailText = document.getElementById('life-display').textContent;
    
    // Get actual width percentages
    const todayWidth = document.getElementById('bar-today').style.width;
    const monthWidth = document.getElementById('bar-month').style.width;
    const yearWidth = document.getElementById('bar-year').style.width;
    const lifeWidth = document.getElementById('bar-life').style.width;

    // Create the temporary Instagram container
    const container = document.createElement('div');
    container.className = 'instagram-story-wrapper';
    
    // Apply current sky background class style to match site ambiance
    const currentSkyClass = document.getElementById('sky-background').className;
    container.style.background = getSkyGradientForIG();
    
    container.innerHTML = `
        <div class="ig-header">
            <i class="fa-solid fa-hourglass-half ig-logo"></i>
            <h1 class="ig-title">나의 인생 진척도</h1>
            <p class="ig-subtitle">My Life Progress Bar</p>
        </div>
        
        <div class="ig-cards-container">
            <!-- Card 1 -->
            <div class="ig-card">
                <div class="ig-card-header">
                    <span class="ig-card-title">오늘 하루</span>
                    <span class="ig-card-detail">${todayDetailText}</span>
                </div>
                <div class="ig-bar-container">
                    <div class="ig-bar" style="width: ${todayWidth}; background: var(--grad-today);"></div>
                </div>
                <div class="ig-card-footer">
                    <span class="ig-percent" style="color: #00f2fe;">${percentTodayText}</span>
                    <span class="ig-desc">오늘이 흐르는 중</span>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="ig-card">
                <div class="ig-card-header">
                    <span class="ig-card-title">이번 달</span>
                    <span class="ig-card-detail">${monthDetailText}</span>
                </div>
                <div class="ig-bar-container">
                    <div class="ig-bar" style="width: ${monthWidth}; background: var(--grad-month);"></div>
                </div>
                <div class="ig-card-footer">
                    <span class="ig-percent" style="color: #81fbb8;">${percentMonthText}</span>
                    <span class="ig-desc">${now.getMonth() + 1}월 진척도</span>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="ig-card">
                <div class="ig-card-header">
                    <span class="ig-card-title">올해</span>
                    <span class="ig-card-detail">${yearDetailText}</span>
                </div>
                <div class="ig-bar-container">
                    <div class="ig-bar" style="width: ${yearWidth}; background: var(--grad-year);"></div>
                </div>
                <div class="ig-card-footer">
                    <span class="ig-percent" style="color: #ffd3a5;">${percentYearText}</span>
                    <span class="ig-desc">${now.getFullYear()}년 진척도</span>
                </div>
            </div>

            <!-- Card 4 -->
            <div class="ig-card">
                <div class="ig-card-header">
                    <span class="ig-card-title">내 인생</span>
                    <span class="ig-card-detail">${lifeDetailText}</span>
                </div>
                <div class="ig-bar-container">
                    <div class="ig-bar" style="width: ${lifeWidth}; background: var(--grad-life);"></div>
                </div>
                <div class="ig-card-footer">
                    <span class="ig-percent" style="color: #f355da;">${percentLifeText}</span>
                    <span class="ig-desc">나의 평생진척률</span>
                </div>
            </div>
        </div>
        
        <div class="ig-footer">
            <span>${window.location.host + window.location.pathname}</span>
        </div>
    `;
    
    document.body.appendChild(container);
    
    // Render with html2canvas
    html2canvas(container, {
        scale: 1, // Render exactly 1080x1920
        useCORS: true,
        allowTaint: true,
        backgroundColor: null
    }).then(canvas => {
        // Remove temporary container
        document.body.removeChild(container);
        
        // Download logic
        const link = document.createElement('a');
        link.download = `life_progress_${now.getFullYear()}${padZero(now.getMonth()+1)}${padZero(now.getDate())}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }).catch(err => {
        console.error("Failed to capture Instagram card:", err);
        const dict = translations[currentLang] || translations.ko; alert(dict.alertCaptureFail);
        document.body.removeChild(container);
    });
}

function getSkyGradientForIG() {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 5) {
        return 'radial-gradient(circle at 50% 50%, #2c1a4d 0%, #0d061c 100%)';
    } else if (hour >= 5 && hour < 9) {
        return 'radial-gradient(circle at 50% 100%, #ff8e53 0%, #ff6b8b 30%, #4b134f 80%, #0a011a 100%)';
    } else if (hour >= 9 && hour < 17) {
        return 'radial-gradient(circle at 50% 0%, #4ea5d9 0%, #0a2240 70%, #030a1c 100%)';
    } else if (hour >= 17 && hour < 20) {
        return 'radial-gradient(circle at 50% 100%, #f37055 0%, #a11f3c 40%, #2f0f30 80%, #03001e 100%)';
    } else {
        return 'radial-gradient(circle at 50% 50%, #0f1026 0%, #070814 70%, #020205 100%)';
    }
}

// ==========================================================================
// 5b. Premium Features (Ambient Player, CSV/PDF Exports)
// ==========================================================================
let ytAudioPlayer = null;
let currentAmbientTrack = null;
const YT_TRACKS = {
    rain: 'O_ZiH-MlZZ0',      // Rain on Window (from window-to-the-world)
    lofi: 'N3ur5Ey21zg',      // Ghibli Lofi Music (from window-to-the-world cartoon room!)
    campfire: '3_gdxb7AyGo'   // Cozy Fireplace (from window-to-the-world)
};

// Dynamically load the YouTube Iframe Player API script
(function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
        document.head.appendChild(tag);
    }
})();

// YouTube Player Ready Callback
window.onYouTubeIframeAPIReady = function() {
    ytAudioPlayer = new YT.Player('yt-audio-player', {
        height: '1',
        width: '1',
        videoId: 'N3ur5Ey21zg', // Default to Lofi
        playerVars: {
            autoplay: 0,
            loop: 1,
            playlist: 'N3ur5Ey21zg'
        },
        events: {
            onReady: (event) => {
                console.log("YouTube Ambient Player loaded.");
                const playBtn = document.getElementById('ambient-play-toggle-btn');
                if (playBtn) playBtn.disabled = false;
            }
        }
    });
};

function playAmbientTrack(trackName) {
    if (!ytAudioPlayer || typeof ytAudioPlayer.loadVideoById !== 'function') {
        console.warn("YouTube player not ready yet.");
        return;
    }
    
    currentAmbientTrack = trackName;
    ytAudioPlayer.loadVideoById({
        videoId: YT_TRACKS[trackName],
        suggestedQuality: 'small'
    });
    
    const slider = document.getElementById('ambient-volume-slider');
    if (slider) {
        ytAudioPlayer.setVolume(parseFloat(slider.value) * 100);
    }
    
    // Update UI active states
    const trackBtns = document.querySelectorAll('.ambient-track-btn');
    trackBtns.forEach(btn => {
        if (btn.getAttribute('data-track') === trackName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    const playBtn = document.getElementById('ambient-play-toggle-btn');
    if (playBtn) {
        playBtn.disabled = false;
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
    
    const statusLabel = document.getElementById('ambient-track-status');
    if (statusLabel) {
        const trackTitles = { rain: '🌧️ 빗소리 재생 중', lofi: '🎹 로파이 재생 중', campfire: '🔥 모닥불 재생 중' };
        statusLabel.textContent = trackTitles[trackName] || '재생 중';
    }
    
    // Start spin animation on floating button
    const floatingBtn = document.getElementById('ambient-toggle-widget-btn');
    if (floatingBtn) {
        floatingBtn.classList.add('playing');
    }
}

function toggleAmbientPlay() {
    if (!ytAudioPlayer || typeof ytAudioPlayer.getPlayerState !== 'function') return;
    
    const playBtn = document.getElementById('ambient-play-toggle-btn');
    const statusLabel = document.getElementById('ambient-track-status');
    const floatingBtn = document.getElementById('ambient-toggle-widget-btn');
    
    const playerState = ytAudioPlayer.getPlayerState();
    
    // YT.PlayerState.PLAYING is 1
    if (playerState !== 1) {
        ytAudioPlayer.playVideo();
        if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        if (floatingBtn) floatingBtn.classList.add('playing');
        if (statusLabel) {
            const trackTitles = { rain: '🌧️ 빗소리 재생 중', lofi: '🎹 로파이 재생 중', campfire: '🔥 모닥불 재생 중' };
            statusLabel.textContent = trackTitles[currentAmbientTrack] || '재생 중';
        }
    } else {
        ytAudioPlayer.pauseVideo();
        if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        if (floatingBtn) floatingBtn.classList.remove('playing');
        if (statusLabel) statusLabel.textContent = '일시 정지됨';
    }
}

function exportToCSV() {
    const history = loadHistory();
    const dates = Object.keys(history).sort();
    
    if (dates.length === 0) {
        const dict = translations[currentLang] || translations.ko; alert(dict.alertNoHistory);
        return;
    }
    
    // CSV Header (UTF-8 BOM to prevent Korean character corruption in Excel)
    let csvContent = "\uFEFF"; 
    csvContent += "날짜,다짐 완료 여부,오늘의 다짐,하루 회고록\n";
    
    dates.forEach(date => {
        const record = history[date];
        const completed = record.completed ? "완료" : "미완료";
        const resolution = record.resolution ? record.resolution.replace(/"/g, '""') : "";
        const diary = record.diary ? record.diary.replace(/"/g, '""') : "";
        
        csvContent += `"${date}","${completed}","${resolution}","${diary}"\n`;
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `lifebar_diary_export_${getTodayDateString().replace(/-/g, '')}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function printDiaryToPDF() {
    const history = loadHistory();
    const dates = Object.keys(history).sort();
    
    if (dates.length === 0) {
        const dict = translations[currentLang] || translations.ko; alert(dict.alertNoHistory);
        return;
    }
    
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        const dict = translations[currentLang] || translations.ko; alert(dict.alertPopupBlocked);
        return;
    }
    
    let htmlContent = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <title>나의 인생 기록장 - 일기장 PDF 출력</title>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;700&display=swap" rel="stylesheet">
        <style>
            body {
                font-family: 'Noto Serif KR', serif;
                padding: 40px;
                color: #222;
                line-height: 1.8;
                max-width: 800px;
                margin: 0 auto;
            }
            .header {
                text-align: center;
                border-bottom: 2px solid #333;
                padding-bottom: 20px;
                margin-bottom: 40px;
            }
            .header h1 {
                font-size: 28px;
                margin: 0 0 10px 0;
                font-weight: 700;
            }
            .header p {
                font-size: 14px;
                color: #666;
                margin: 0;
            }
            .entry {
                margin-bottom: 40px;
                page-break-inside: avoid;
                border-bottom: 1px solid #eee;
                padding-bottom: 20px;
            }
            .entry-date {
                font-size: 18px;
                font-weight: 700;
                color: #000;
                margin-bottom: 10px;
                border-left: 4px solid #333;
                padding-left: 10px;
            }
            .entry-resolution {
                font-size: 14px;
                font-weight: bold;
                color: #555;
                margin-bottom: 10px;
                background: #f9f9f9;
                padding: 8px 12px;
                border-radius: 4px;
                display: inline-block;
            }
            .entry-resolution.completed::after {
                content: " (달성)";
                color: green;
            }
            .entry-diary {
                font-size: 15px;
                white-space: pre-wrap;
                color: #333;
                text-align: justify;
            }
            @media print {
                body { padding: 20px; }
                .no-print { display: none; }
            }
        </style>
    </head>
    <body>
        <div class="no-print" style="background: #f0f0f0; padding: 15px; text-align: center; margin-bottom: 30px; border-radius: 8px; font-family: sans-serif;">
            <p style="margin: 0 0 10px 0; font-size: 14px; font-weight: bold;">인쇄 및 PDF 저장 창이 열렸습니다.</p>
            <button onclick="window.print()" style="padding: 8px 20px; background: #333; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">인쇄 / PDF로 저장</button>
            <button onclick="window.close()" style="padding: 8px 15px; background: #ccc; border: none; border-radius: 4px; cursor: pointer; margin-left: 10px;">창 닫기</button>
        </div>
        
        <div class="header">
            <h1>⏳ 나의 인생 기록장</h1>
            <p>나의 하루, 한 달, 일 년, 그리고 평생의 흐름 속에서 남긴 소중한 회고록</p>
        </div>
    `;
    
    dates.forEach(date => {
        const record = history[date];
        const completedClass = record.completed ? "completed" : "";
        const resHtml = record.resolution ? `<div class="entry-resolution ${completedClass}">오늘의 다짐: ${escapeHtml(record.resolution)}</div>` : "";
        const diaryHtml = record.diary ? `<div class="entry-diary">${escapeHtml(record.diary)}</div>` : "<div class=\"entry-diary\" style=\"color: #999; font-style: italic;\">일기 기록 없음</div>";
        
        htmlContent += `
        <div class="entry">
            <div class="entry-date">${date.replace(/-/g, '. ')}</div>
            ${resHtml}
            ${diaryHtml}
        </div>
        `;
    });
    
    htmlContent += `
    </body>
    </html>
    `;
    
    printWindow.document.write(htmlContent);
    printWindow.document.close();
}

// ==========================================================================
// 6. Initialize & DOM Listeners
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // 0. Initialize Visitor Session Counter
    initVisitorCounter();

    // 1. Setup ambient particle backgrounds
    generateStardust();
    updateSkyBackground();
    
    // Reshuffle sky classes every 10 minutes
    setInterval(updateSkyBackground, 600000);
    
    // 2. Check login state/onboarding setup
    checkOnboardingState();
    
    // 3. Setup Onboarding form submit
    const onboardingForm = document.getElementById('onboarding-form');
    if (onboardingForm) {
        onboardingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const birthDate = document.getElementById('birth-date').value;
            const expectancy = document.getElementById('expectancy-age').value;
            
            if (birthDate && expectancy) {
                localStorage.setItem('aw-life-birth', birthDate);
                localStorage.setItem('aw-life-expectancy', expectancy);
                checkOnboardingState();
            }
        });
    }

    // 4. Setup Settings form submit
    const settingsForm = document.getElementById('settings-form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const birthDate = document.getElementById('settings-birth-date').value;
            const expectancy = document.getElementById('settings-expectancy-age').value;
            
            if (birthDate && expectancy) {
                localStorage.setItem('aw-life-birth', birthDate);
                localStorage.setItem('aw-life-expectancy', expectancy);
                document.getElementById('settings-modal').classList.add('hidden');
                checkOnboardingState();
            }
        });
    }

    // 5. Open settings button
    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    if (settingsBtn && settingsModal) {
        settingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            settingsModal.classList.remove('hidden');
            checkAdminState();
        });
    }

    // 6. Close settings button
    const closeSettingsBtn = document.getElementById('close-settings-btn');
    if (closeSettingsBtn && settingsModal) {
        closeSettingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            settingsModal.classList.add('hidden');
        });
    }
    
    if (settingsModal) {
        settingsModal.addEventListener('click', (e) => {
            if (e.target === settingsModal) {
                settingsModal.classList.add('hidden');
            }
        });
    }

    // 6b. Settings modal header click (Secret Admin panel)
    const settingsTitle = document.querySelector('#settings-modal h2');
    if (settingsTitle) {
        settingsTitle.addEventListener('click', async (e) => {
            settingsTitleClicks++;
            if (settingsTitleClicks >= 5) {
                settingsTitleClicks = 0;
                const passwordInput = prompt("관리자 비밀번호를 입력하세요:");
                if (passwordInput === null) return;
                
                const hashedPassword = await sha256(passwordInput);
                const targetHash = "ab7e67e9480cb9aecd206859cd28e942c5647ad85e6e3e5f1fb20783828ed190";
                
                if (hashedPassword === targetHash) {
                    revealVisitorCount();
                } else {
                    const dict = translations[currentLang] || translations.ko; alert(dict.alertPasswordIncorrect);
                }
            }
        });
    }

    // 7. Reset settings button
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (confirm("설정값과 기록을 모두 삭제하고 첫 화면으로 돌아가시겠습니까?")) {
                localStorage.removeItem('aw-life-birth');
                localStorage.removeItem('aw-life-expectancy');
                localStorage.removeItem('aw-life-history');
                localStorage.removeItem('aw-life-dday-title');
                localStorage.removeItem('aw-life-dday-date');
                localStorage.removeItem('aw-life-dday-set-date');
                checkOnboardingState();
            }
        });
    }

    // 8. Daily resolution autosave
    const resolutionInput = document.getElementById('resolution-input');
    if (resolutionInput) {
        resolutionInput.addEventListener('input', (e) => {
            saveTodayData({ resolution: e.target.value }, false);
        });
    }

    // 8b. Daily resolution toggle complete
    const completeBtn = document.getElementById('resolution-complete-btn');
    if (completeBtn && resolutionInput) {
        completeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const todayData = getTodayData();
            const newCompleted = !todayData.completed;
            
            saveTodayData({ completed: newCompleted }, false);
            
            // Update UI
            const icon = completeBtn.querySelector('i');
            if (newCompleted) {
                completeBtn.classList.add('completed');
                resolutionInput.classList.add('completed');
                if (icon) icon.className = 'fa-solid fa-circle-check';
            } else {
                completeBtn.classList.remove('completed');
                resolutionInput.classList.remove('completed');
                if (icon) icon.className = 'fa-regular fa-circle';
            }
        });
    }

    // 9. Diary autosave
    const diaryInput = document.getElementById('diary-input');
    if (diaryInput) {
        diaryInput.addEventListener('input', (e) => {
            saveTodayData({ diary: e.target.value }, false);
        });
    }

    // 10. Copy results to clipboard button
    const shareTextBtn = document.getElementById('share-text-btn');
    if (shareTextBtn) {
        shareTextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            const todayPercent = document.getElementById('percent-today').textContent;
            const monthPercent = document.getElementById('percent-month').textContent;
            const yearPercent = document.getElementById('percent-year').textContent;
            const lifePercent = document.getElementById('percent-life').textContent;
            
            const livedDaysText = document.getElementById('stat-days-lived').textContent;
            const leftDaysText = document.getElementById('stat-days-left').textContent;
            
            const shareText = `⏳ 나의 인생 진척도 (My Life Progress Bar)

• 오늘 하루 진행도: ${todayPercent}
• 이번 달 진행도: ${monthPercent}
• 올해 진행도: ${yearPercent}
• 나의 인생 진행도: ${lifePercent}

지나온 날은 ${livedDaysText}일, 남은 날은 약 ${leftDaysText}일입니다.
시간은 흐르는 것이 아니라 채워지는 것입니다. 

👉 사이트 주소: ${window.location.origin + window.location.pathname}`;

            navigator.clipboard.writeText(shareText).then(() => {
                const dict = translations[currentLang] || translations.ko; alert(dict.alertShareCopied);
            }).catch(err => {
                console.error("Failed to copy text:", err);
            });
        });
    }

    // 11. Instagram Image Export button
    const exportImgBtn = document.getElementById('export-img-btn');
    if (exportImgBtn) {
        exportImgBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            generateInstagramStoryImage();
        });
    }

    // 12. Backup / Restore Data Action Buttons
    const backupBtn = document.getElementById('backup-data-btn');
    const restoreBtn = document.getElementById('restore-data-btn');
    const restoreFileInput = document.getElementById('restore-file-input');

    if (backupBtn) {
        backupBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            backupData();
        });
    }

    if (restoreBtn && restoreFileInput) {
        restoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            restoreFileInput.click();
        });
        
        restoreFileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                restoreData(e.target.files[0]);
            }
        });
    }

    // 13. Calendar Navigation and Modal Listeners
    const prevBtn = document.getElementById('calendar-prev-btn');
    const nextBtn = document.getElementById('calendar-next-btn');
    const detailCloseBtn = document.getElementById('detail-close-btn');
    const detailSaveBtn = document.getElementById('detail-save-btn');
    const detailDeleteBtn = document.getElementById('detail-delete-btn');
    const detailModal = document.getElementById('calendar-detail-modal');
    const detailResCheckBtn = document.getElementById('detail-resolution-check-btn');

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            changeCalendarMonth(-1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            changeCalendarMonth(1);
        });
    }

    if (detailCloseBtn) {
        detailCloseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeCalendarDetailModal();
        });
    }

    if (detailSaveBtn) {
        detailSaveBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            saveSelectedCalendarRecord();
        });
    }

    if (detailDeleteBtn) {
        detailDeleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteSelectedCalendarRecord();
        });
    }

    if (detailResCheckBtn) {
        detailResCheckBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            detailModalCompletedState = !detailModalCompletedState;
            updateDetailModalCheckUI();
        });
    }

    if (detailModal) {
        detailModal.addEventListener('click', (e) => {
            if (e.target === detailModal) {
                closeCalendarDetailModal();
            }
        });
    }

    // D-Day Board Event Listeners
    const ddayToggleAddBtn = document.getElementById('dday-toggle-add-btn');
    const ddayAddForm = document.getElementById('dday-add-form');
    const ddayCancelAddBtn = document.getElementById('dday-cancel-add-btn');
    const ddaySaveAddBtn = document.getElementById('dday-save-add-btn');
    
    if (ddayToggleAddBtn && ddayAddForm) {
        ddayToggleAddBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            ddayAddForm.classList.toggle('hidden');
            if (!ddayAddForm.classList.contains('hidden')) {
                const titleInput = document.getElementById('dday-input-title');
                const dateInput = document.getElementById('dday-input-date');
                if (titleInput) titleInput.focus();
                if (dateInput && !dateInput.value) {
                    dateInput.value = getTodayDateString();
                }
            }
        });
    }
    
    if (ddayCancelAddBtn && ddayAddForm) {
        ddayCancelAddBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            ddayAddForm.classList.add('hidden');
            const titleInput = document.getElementById('dday-input-title');
            const dateInput = document.getElementById('dday-input-date');
            if (titleInput) titleInput.value = '';
            if (dateInput) dateInput.value = '';
        });
    }
    
    if (ddaySaveAddBtn && ddayAddForm) {
        ddaySaveAddBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const titleInput = document.getElementById('dday-input-title');
            const dateInput = document.getElementById('dday-input-date');
            if (!titleInput || !dateInput) return;
            
            const title = titleInput.value.trim();
            const targetDate = dateInput.value;
            
            if (!title) {
                const dict = translations[currentLang] || translations.ko; alert(dict.alertDdayTitleRequired);
                titleInput.focus();
                return;
            }
            if (!targetDate) {
                const dict = translations[currentLang] || translations.ko; alert(dict.alertDdayDateRequired);
                dateInput.focus();
                return;
            }
            
            const ddays = loadDDays();
            const newDDay = {
                id: Date.now().toString(),
                title: title,
                targetDate: targetDate,
                setDate: getTodayDateString()
            };
            
            ddays.push(newDDay);
            saveDDays(ddays);
            
            // Reset & Hide Form
            titleInput.value = '';
            dateInput.value = '';
            ddayAddForm.classList.add('hidden');
            
            // Update Board and Calendar Grid
            updateDDayCard();
            renderHistoryCalendar();
        });
    }

    // 14. CSV / PDF Export Event Listeners
    const exportCsvBtn = document.getElementById('export-csv-btn');
    const printPdfBtn = document.getElementById('print-pdf-btn');
    const footerPrivacyBtn = document.getElementById('footer-privacy-btn');
    
    if (exportCsvBtn) {
        exportCsvBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            exportToCSV();
        });
    }
    
    if (printPdfBtn) {
        printPdfBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            printDiaryToPDF();
        });
    }
    
    if (footerPrivacyBtn) {
        footerPrivacyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const dict = translations[currentLang] || translations.ko; alert(dict.alertPrivacyText);
        });
    }

    // 15. Ambient White Noise Player Event Listeners
    const ambToggleBtn = document.getElementById('ambient-toggle-widget-btn');
    const ambPanel = document.getElementById('ambient-panel');
    const ambPlayBtn = document.getElementById('ambient-play-toggle-btn');
    const ambVolSlider = document.getElementById('ambient-volume-slider');
    const ambVolLabel = document.getElementById('ambient-vol-label');
    const ambTrackBtns = document.querySelectorAll('.ambient-track-btn');
    
    if (ambToggleBtn && ambPanel) {
        ambToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            ambPanel.classList.toggle('hidden');
        });
        
        // Hide panel when clicking outside
        document.addEventListener('click', (e) => {
            if (!ambPanel.classList.contains('hidden') && !ambPanel.contains(e.target) && e.target !== ambToggleBtn) {
                ambPanel.classList.add('hidden');
            }
        });
    }
    
    if (ambPlayBtn) {
        ambPlayBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleAmbientPlay();
        });
    }
    
    if (ambVolSlider && ambVolLabel) {
        ambVolSlider.addEventListener('input', (e) => {
            const vol = parseFloat(e.target.value);
            if (ytAudioPlayer && typeof ytAudioPlayer.setVolume === 'function') {
                ytAudioPlayer.setVolume(vol * 100);
            }
            ambVolLabel.textContent = `${Math.round(vol * 100)}%`;
        });
    }
    
    ambTrackBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const track = btn.getAttribute('data-track');
            playAmbientTrack(track);
        });
    });

    // Language select toggle
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.add('hidden');
            }
        });
        
        // Connect Language Options
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', (e) => {
                e.stopPropagation();
                const selectedLang = opt.getAttribute('data-lang');
                console.log(`Language selected: ${selectedLang}`);
                applyTranslations(selectedLang);
                langDropdown.classList.add('hidden');
            });
        });
    }

    // Apply initial translation on start
    applyTranslations(currentLang);
});
