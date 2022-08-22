const itemList = document.querySelectorAll('.accordeon-item');
const titleList = document.querySelectorAll('.accordeon-item__title');
const arrowList = document.querySelectorAll('.accordeon-img');
const textList = document.querySelectorAll('.accordeon-text');
const switcherList = document.querySelectorAll('.switch-btn');

switcherList.forEach((switcher)=>{
    switcher.addEventListener('click', () => {
        switcher.classList.toggle('switch-on');
    });
})

itemList.forEach((el, id)=>{
    el.addEventListener('click', ()=>{
        if(!el.classList.contains('show')){
            itemList.forEach((element, idd)=>{
                element.classList.remove('show');
                const title = titleList[idd];
                const text = textList[idd];
                const arrow = arrowList[idd];
                title.classList.remove('accordeon-blue');
                text.classList.add('none');
                arrow.classList.remove('rotate');
                arrow.src = './img/accordeon-arrow-gray.svg';
            })
            el.classList.add('show');
            const title = titleList[id];
            const text = textList[id];
            const arrow = arrowList[id];
            title.classList.add('accordeon-blue');
            text.classList.remove('none');
            arrow.classList.add('rotate');
            arrow.src = './img/accordeon-arrow-blue.svg';
        }
    })
});
