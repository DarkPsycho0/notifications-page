const markAllAsRead = document.querySelector('.mark-all-as-read')
const notRead = document.querySelectorAll('.mensage')

markAllAsRead.addEventListener('click', () =>{
    notRead.forEach(element => {
        element.classList.remove('active')
    });
})

markAllAsRead.addEventListener('click', () =>{
    const notificationsDisplay = document.querySelector('.notifications-number')
    const notificationsNumbers = document.querySelectorAll('.active')
    notificationsDisplay.innerHTML = notificationsNumbers.length
})