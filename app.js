const navItems = document.querySelectorAll('.navItem')

const changeColor = (event) => {
    console.log(`Hey, you clicked the ${event.target.innerHTML} button`)
}

navItems.forEach(item => {
    item.addEventListener('click', changeColor)
})