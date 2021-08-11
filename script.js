const mobileNav = document.querySelector('.mobile-nav')
const openNav = document.querySelector('.open-nav')
const closeNav = document.querySelector('.close-nav')

openNav.addEventListener('click', () => {
  mobileNav.classList.add('active')
})

closeNav.addEventListener('click', () => {
  mobileNav.classList.remove('active')
})
