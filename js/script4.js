const ulList = document.createElement('ul')
const number = 10
document.body.append(ulList)

for (let i = 1; i <= number; i++) {
    const liList = document.createElement('li')
    liList.textContent = i
    ulList.append(liList)
}

const lastLi= ulList.querySelector('li:last-child')
lastLi.textContent = 'Jestem ostatnim elementem.'

lastLi.style.backgroundColor = 'royalblue'
lastLi.style.padding = '20px 40px'
lastLi.style.fontSize = '20px'
