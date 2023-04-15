const x = 1
let text

if (x >= 100) {
	text = 'x >= 100'
} else if (x < 100 && x > 30) {
	text = 'x jest średniakiem'
} else {
	text = 'x jest mały'
}

console.log(text.toUpperCase());