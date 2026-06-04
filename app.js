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
        monthDisplay.textContent = `${date}일 / ${totalDaysInMonth}일`;
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
        descMonth.textContent = `${month + 1}월 진척도`;
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
        yearDisplay.textContent = `${passedDaysInYear}일 / ${totalDaysInYear}일`;
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
        descYear.textContent = `${year}년 진척도`;
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
        lifeDisplay.textContent = `${elapsedAge.toFixed(2)}세 / ${expectancy}세`;
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
            descLife.textContent = `남은 수명: 약 ${leftDays.toLocaleString('ko-KR')}일`;
        } else {
            descLife.textContent = `목표 수명에 도달했습니다!`;
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
    
    if (birth && expectancy) {
        onboarding.classList.add('hidden');
        dashboard.classList.remove('hidden');
        
        // Populate inputs in settings
        document.getElementById('settings-birth-date').value = birth;
        document.getElementById('settings-expectancy-age').value = expectancy;
        
        // Manage daily resolution reset
        checkDailyResolutionReset();
        
        // Start live ticker
        startCalculationLoop();
    } else {
        onboarding.classList.remove('hidden');
        dashboard.classList.add('hidden');
        clearInterval(updateIntervalId);
        
        // Set default max date to today in onboarding form
        const todayStr = new Date().toISOString().split('T')[0];
        document.getElementById('birth-date').max = todayStr;
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
    
    calendarTitle.textContent = `${currentCalendarYear}년 ${currentCalendarMonth + 1}월`;
    
    calendarGrid.innerHTML = '';
    
    const history = loadHistory();
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
        
        // Check if date is in the past or today for editing
        const cellDate = new Date(currentCalendarYear, currentCalendarMonth, d);
        if (cellDate <= todayObj) {
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
    const completedEl = document.getElementById('cal-stat-completed');
    const ratioEl = document.getElementById('cal-stat-ratio');
    if (!completedEl || !ratioEl) return;
    
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
    
    completedEl.textContent = `${totalCompleted}일 / ${totalRecorded}일`;
    const ratio = totalRecorded > 0 ? (totalCompleted / totalRecorded) * 100 : 0.0;
    ratioEl.textContent = `${ratio.toFixed(1)}%`;
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
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = weekdays[dateObj.getDay()];
    dateText.textContent = `${dateStr.replace(/-/g, '. ')} (${dayOfWeek})`;
    
    resInput.value = record.resolution || '';
    diaryTextarea.value = record.diary || '';
    
    updateDetailModalCheckUI();
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
    
    if (confirm(`${selectedDateForDelete}의 기록을 완전히 삭제하시겠습니까?`)) {
        const history = loadHistory();
        delete history[selectedDateForDelete];
        saveHistory(history);
        closeCalendarDetailModal();
        renderHistoryCalendar();
        
        const todayStr = getTodayDateString();
        if (selectedDateForDelete === todayStr) {
            checkDailyResolutionReset();
        }
    }
}

function backupData() {
    const keys = ['aw-life-birth', 'aw-life-expectancy', 'aw-life-history'];
    const backupObj = {};
    
    keys.forEach(key => {
        const val = localStorage.getItem(key);
        if (val) {
            backupObj[key] = val;
        }
    });
    
    if (Object.keys(backupObj).length === 0) {
        alert("백업할 데이터가 없습니다. 먼저 인생 설정을 완료해 주세요.");
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
            
            alert("데이터 복원이 성공적으로 완료되었습니다! 페이지를 새로고침하여 적용합니다.");
            window.location.reload();
            
        } catch (err) {
            alert("데이터 복원에 실패했습니다: " + err.message);
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

function initVisitorCounter() {
    if (!sessionStorage.getItem('lifebar-visited')) {
        fetch('https://api.counterapi.dev/v1/lifebar-orara/visits/up')
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem('lifebar-visited', 'true');
                console.log("Visitor count session initialized");
            })
            .catch(err => console.error("Visitor Counter Up error:", err));
    }
}

let settingsTitleClicks = 0;

function revealVisitorCount() {
    const adminSection = document.getElementById('admin-visits-section');
    const countEl = document.getElementById('admin-visits-count');
    if (!adminSection || !countEl) return;
    
    adminSection.classList.remove('hidden');
    localStorage.setItem('lifebar-admin-unlocked', 'true');
    
    fetch('https://api.counterapi.dev/v1/lifebar-orara/visits')
        .then(res => res.json())
        .then(data => {
            if (data && data.count !== undefined) {
                countEl.textContent = `${data.count.toLocaleString('ko-KR')} 명`;
            } else {
                countEl.textContent = "데이터 없음";
            }
        })
        .catch(err => {
            console.error("Fetch counter error:", err);
            countEl.textContent = "조회 실패";
        });
}

function checkAdminState() {
    if (localStorage.getItem('lifebar-admin-unlocked') === 'true') {
        revealVisitorCount();
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
        alert("이미지 캡처 과정에서 문제가 발생했습니다.");
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
                    alert("비밀번호가 올바르지 않습니다.");
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
                alert("인생 진척도 결과 텍스트가 클립보드에 복사되었습니다! SNS나 카카오톡에 자유롭게 공유해 보세요.");
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
});
