const ulList = document.createElement('ul')
const number = 10
document.body.append(ulList)

for (i = 1; i <= number; i++) {
	const liItem = document.createElement('li')
	liItem.textContent = i
	ulList.append(liItem)
}

const lastItem = ulList.querySelector('li:last-child')
lastItem.textContent = "Jestem ostatni."
lastItem.style.backgroundColor = "tomato"
lastItem.style.fontSize = "30px"
lastItem.style.padding = "20px"