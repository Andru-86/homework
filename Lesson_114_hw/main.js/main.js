const btnOpen = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const btnClose = document.querySelector('.modal__close-btn')
const body = document.body

const openModal = () => {
    modal.classList.add('modal--open')
    body.classList.add('body--fixed')
}
const closeModal = () => {
    modal.classList.remove('modal--open')
    body.classList.remove('body--fixed')
}


btnOpen.addEventListener('click', openModal)

modal.addEventListener('click', (event) => {
    const target = event.target

    if (target && target.classList.contains('modal') || target == btnClose) {
        closeModal()
    }
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
        modal.classList.toggle('modal--open')
    }
})