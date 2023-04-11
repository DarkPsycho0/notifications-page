const markAllAsRead = document.querySelector('.mark-all-as-read')
const notificationsNumber = document.querySelector('.notifications-number')

markAllAsRead.addEventListener('click', () =>{
    const notRead = document.querySelectorAll('.mensage')
    notRead.forEach(element => {
        element.classList.remove('active')
    });
    notificationsNumber.innerHTML = 0
})