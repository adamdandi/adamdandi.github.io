let info = document.getElementById('info');
let aside = document.getElementById('aside');

function hideProfile () {
	let content = document.querySelector("#content");
	let hideButton = document.getElementById('show');
	let showButton = document.getElementById('hide');
	let info = document.getElementById('info');

	content.setAttribute("id", "content-full");
	info.parentNode.removeChild(info);
	hideButton.setAttribute("style", "visibility: visible;");
	showButton.setAttribute("style", "visibility: hidden;");
}

function showProfile () {
	let contentFull = document.querySelector("#content-full");
	let hideButton = document.getElementById('show');
	let showButton = document.getElementById('hide');

	contentFull.setAttribute("id", "content");
	aside.insertAdjacentHTML('afterbegin', '<article id="info" class="profile card"><header><h4 style="padding-top: 20px;">Profile</h4><figure><img src="assets/image/profile.jpg"></figure><figcaption>FARHAN</figcaption></header><section><p>Dicoding member</p><div class="social"><a href="https://www.instagram.com/maulanafaa" target="_blank"> <img src="assets/image/instagram.jpg" alt="instagram"></a><a href="https://www.dicoding.com/users/223068" target="_blank"> <img src="assets/image/dicoding.jpg" alt="dicoding"></a></div></section></article>');
	hideButton.setAttribute("style", "visibility: hidden;");
	showButton.setAttribute("style", "visibility: visible;");
}
