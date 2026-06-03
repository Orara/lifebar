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

// Check if a new day has arrived to reset resolution text
function checkDailyResolutionReset() {
    const todayStr = new Date().toISOString().split('T')[0];
    const savedDate = localStorage.getItem('aw-resolution-date');
    const resolutionInput = document.getElementById('resolution-input');
    
    if (savedDate !== todayStr) {
        // Date changed! Reset daily resolution input
        localStorage.setItem('aw-resolution-date', todayStr);
        localStorage.removeItem('aw-resolution-text');
        if (resolutionInput) resolutionInput.value = '';
    } else {
        // Keep today's text
        const savedText = localStorage.getItem('aw-resolution-text') || '';
        if (resolutionInput) resolutionInput.value = savedText;
    }
    
    // Load retrospective diary (persists across days)
    const diaryInput = document.getElementById('diary-input');
    if (diaryInput) {
        diaryInput.value = localStorage.getItem('aw-diary-text') || '';
    }
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

    // 7. Reset settings button
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (confirm("설정값과 기록을 모두 삭제하고 첫 화면으로 돌아가시겠습니까?")) {
                localStorage.removeItem('aw-life-birth');
                localStorage.removeItem('aw-life-expectancy');
                localStorage.removeItem('aw-resolution-text');
                localStorage.removeItem('aw-resolution-date');
                localStorage.removeItem('aw-diary-text');
                checkOnboardingState();
            }
        });
    }

    // 8. Daily resolution autosave
    const resolutionInput = document.getElementById('resolution-input');
    if (resolutionInput) {
        resolutionInput.addEventListener('input', (e) => {
            const todayStr = new Date().toISOString().split('T')[0];
            localStorage.setItem('aw-resolution-date', todayStr);
            localStorage.setItem('aw-resolution-text', e.target.value);
        });
    }

    // 9. Diary autosave
    const diaryInput = document.getElementById('diary-input');
    if (diaryInput) {
        diaryInput.addEventListener('input', (e) => {
            localStorage.setItem('aw-diary-text', e.target.value);
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
});
