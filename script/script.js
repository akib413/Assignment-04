let interviewCount = 0
let rejectedCount = 0
function selectInterview(applyInterview, interviewPost, greenBorder) {
    const interviewBtn = document.getElementById(applyInterview)
    const interviewBorderLine = document.getElementById(greenBorder)
    const totalInterviewCount = document.getElementById('int-count')
    const totalRejectedCount = document.getElementById('rej-count')
    const showInterview = document.getElementById('interview-tab')
    const uploadInterviewPost = document.getElementById(interviewPost)
    const removeDefault = document.getElementById('total-interview-post')

    if (interviewBtn.classList.contains('rejected-class-add')) {
        rejectedCount--
        totalRejectedCount.innerText = rejectedCount
    }

    if (!interviewBtn.classList.contains('interview-class-add') && interviewCount < 8) {
        interviewCount++
        totalInterviewCount.innerText = interviewCount
    }

    showInterview.append(uploadInterviewPost)
    removeDefault.classList.add('hidden')

    interviewBtn.innerText = 'INTERVIEW'
    interviewBtn.classList.remove('rejected-class-add')
    interviewBtn.classList.add('interview-class-add')

    interviewBorderLine.classList.remove('border-red')
    interviewBorderLine.classList.add('border-green')
}


function selectRejected(applyRejected, rejectedPost, redBorder) {
    const rejectedBtn = document.getElementById(applyRejected)
    const rejectedBorderLine = document.getElementById(redBorder)
    const totalRejectedCount = document.getElementById('rej-count')
    const totalInterviewCount = document.getElementById('int-count')
    const showRejected = document.getElementById('rejected-tab')
    const uploadRejectedPost = document.getElementById(rejectedPost)
    const removeDefault = document.getElementById('no-jobs')

    if (rejectedBtn.classList.contains('interview-class-add')) {
        interviewCount--
        totalInterviewCount.innerText = interviewCount
    }

    if (!rejectedBtn.classList.contains('rejected-class-add') && rejectedCount < 8) {
        rejectedCount++
        totalRejectedCount.innerText = rejectedCount
    }

    showRejected.append(uploadRejectedPost)
    removeDefault.classList.add('hidden')

    rejectedBtn.innerText = 'REJECTED'
    rejectedBtn.classList.remove('interview-class-add')
    rejectedBtn.classList.add('rejected-class-add')

    rejectedBorderLine.classList.remove('border-green')
    rejectedBorderLine.classList.add('border-red')
}

function switchTab(id, btnId) {
    const allTab = document.getElementById('all-jobs')
    const interviewTab = document.getElementById('interview-tab')
    const rejectedTab = document.getElementById('no-jobs-available')
    const allBtn = document.getElementById('all-btn')
    const interviewBtn = document.getElementById('interview-btn')
    const rejectedBtn = document.getElementById('rejected-btn')
    let totalJobs2 = document.getElementById('total-jobs')

    allTab.classList.add('hidden')
    interviewTab.classList.add('hidden')
    rejectedTab.classList.add('hidden')

    const showTab = document.getElementById(id)
    showTab.classList.remove('hidden')

    allBtn.classList.remove('btn-background')
    interviewBtn.classList.remove('btn-background')
    rejectedBtn.classList.remove('btn-background')

    const btn = document.getElementById(btnId)
    btn.classList.add('btn-background')

    if (id === 'all-jobs') {
        if (count === 1) {
            totalJobs2.innerText = count + ' job'
        } else {
            totalJobs2.innerText = count + ' jobs'
        }
    }

    else if (id === 'interview-tab') {
        if (interviewCount === 1) {
            totalJobs2.innerText = interviewCount + ' ' + 'of ' + count + ' job'
        } else {
            totalJobs2.innerText = interviewCount + ' ' + 'of ' + count + '  jobs'
        }
    }

    else if (id === 'no-jobs-available') {
        if (rejectedCount === 1) {
            totalJobs2.innerText = rejectedCount + ' ' + 'of ' + count + ' job'
        } else {
            totalJobs2.innerText = rejectedCount + ' ' + 'of ' + count + '  jobs'
        }
    }

    allBtn.classList.remove('add-all')
}

let count = 8
function removeJobPost(remove) {
    let removePost = document.getElementById(remove)
    removePost.classList.add('hidden')

    let totalJobs = document.getElementById('tot-count')
    let totalJobs2 = document.getElementById('total-jobs')

    if (count === 2) {
        count--
        totalJobs.innerText = count;
        totalJobs2.innerText = count + ' ' + 'job'
    } else {
        count--;
        totalJobs.innerText = count;
        totalJobs2.innerText = count + ' ' + 'jobs'
    }

    const noJobsAll = document.getElementById('no-jobs-all')

    if (count === 0) {
        noJobsAll.classList.remove('hidden')
    }
}


