function thing () {
	var bar = document.getElementById('search').value;
	var text = document.getElementById('text');
	text.innerHTML=bar;
}
document.getElementById('foo').addEventListener('click', thing);

