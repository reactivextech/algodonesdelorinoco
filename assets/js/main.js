const modalViews = document.querySelectorAll('.primary-modal'),
    modalBtns = document.querySelectorAll('.primary-button-modal'),
    modalCloses = document.querySelectorAll('.primary-modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtns, i) => {
    modalBtns.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== DATE COPYRIGHT FOOTER ====================*/
var date = new Date();
var year = date.getFullYear();
document.getElementById('date-copyright').innerHTML = year;