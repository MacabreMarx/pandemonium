let button_1 = document.querySelector('#id1')

let button_2 = document.querySelector('#id2')

let redir_places = ['https://yahoo.com',
					'https://www.state.gov/',
					'https://www.mvd.gov.by/',
					'https://en.wikipedia.org/wiki/X_Japan',
					'https://en.wikipedia.org/wiki/Friedrich_Nietzsche']

function f_Rand(min, max){
	confirm('IT WORKS!')
	return Math.floor(Math.random() * (max - min) + min)
}

button_2.addEventListener('click', function() {
	window.location.href = redir_places[f_Rand(0,4)]
	confirm('Just have been redirected.')
})

button_1.addEventListener('click', function(){
	document.body.style.backgroundColor = prompt('insert HTLM color name')
})