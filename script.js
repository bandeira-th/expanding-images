const panels = document.querySelectorAll('.panel')//

panels.forEach((item)=>{
    item.addEventListener('click', ()=>{
        removeActiveClasses()
        item.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}