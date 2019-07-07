let feature = document.getElementsByClassName("feature-box");
let textBox = document.getElementsByClassName("feature-box-text-h2");
let title = textBox[0];

function slide() {
	if( !this.classList.contains( "active" ) ) {
		for( let j of feature ) {
			if( j.classList.contains( "active" )) {
				j.classList.remove( "active" );
			}
		}
		this.classList.add("active");
	}
	if(this == feature[0]) {
		title.textContent = 'Modern App Design';
	} else if (this == feature[1]) {
		title.textContent = 'The Fastest Work';
	} else if (this == feature[2]) {
		title.textContent = 'Great Support';
	} else if (this == feature[3]) {
		title.textContent = 'The best team';
	}
}

for(let box of feature) {
	box.onclick = () => { slide.call(box) };
}

let teamPhotos = document.getElementsByClassName("hover-box");
let nameBar = document.getElementsByClassName("team-photo-box-name");
let name1 = nameBar[0];
let photo1 = teamPhotos[0];
let name2 = nameBar[1];
let photo2 = teamPhotos[1];
let name3 = nameBar[2];
let photo3 = teamPhotos[2];

photo1.addEventListener("mouseover", () => 	{ name1.style.display = "none"; } );
photo1.addEventListener("mouseout", () => { name1.style.display = "inline-block"; });

photo2.addEventListener("mouseover", () => 	{ name2.style.display = "none"; } );
photo2.addEventListener("mouseout", () => { name2.style.display = "inline-block"; });

photo3.addEventListener("mouseover", () => 	{ name3.style.display = "none"; } );
photo3.addEventListener("mouseout", () => { name3.style.display = "inline-block"; });

let btns = document.getElementsByClassName("btn-handler");
let comments = document.getElementsByClassName("words-box-parent");
let activeNow = 0;

btns[0].addEventListener("click", () => {
	activeNow = 0;
	comments[0].style.zIndex = '100';
	comments[1].style.zIndex = '100';
	comments[4].style.zIndex = '90';
	comments[5].style.zIndex = '90';
	comments[2].style.zIndex = '90';
	comments[3].style.zIndex = '90';
	btns[0].classList.add("btn-handler-active");
	btns[1].classList.remove('btn-handler-active');
	btns[2].classList.remove('btn-handler-active');
});

btns[1].addEventListener("click", () => {
	activeNow = 1;
	comments[2].style.zIndex = '100';
	comments[3].style.zIndex = '100';
	comments[0].style.zIndex = '90';
	comments[1].style.zIndex = '90';
	comments[4].style.zIndex = '90';
	comments[5].style.zIndex = '90';
	btns[1].classList.add("btn-handler-active");
	btns[0].classList.remove('btn-handler-active');
	btns[2].classList.remove('btn-handler-active');
});

btns[2].addEventListener("click", () => {
	activeNow = 2;
	comments[2].style.zIndex = '90';
	comments[3].style.zIndex = '90';
	comments[0].style.zIndex = '90';
	comments[1].style.zIndex = '90';
	comments[4].style.zIndex = '100';
	comments[5].style.zIndex = '100';
	btns[1].classList.remove('btn-handler-active');
	btns[0].classList.remove('btn-handler-active');	
	btns[2].classList.add("btn-handler-active");
});


let btnAct = document.querySelector('.menuClosed');
btnAct.addEventListener('click', () => {
	openMenu();
})


function openMenu() {
	let closedMenu = document.querySelector('.menuClosed');
	let menu = document.createElement('div');
	menu.className = 'col-xl-4 offset-xl-6 col-sm-8 offset-lg-1';
	let div = document.createElement('div');
	div.className = 'menu-main';
	menu.append(div);
	let btn = document.createElement('button');
	btn.className = 'cmn-toggle-switch cmn-toggle-switch__rot';
	btn.style.backgroundColor = '#fc704f';
	btn.style.marginLeft = '0';
	let span = document.createElement('span');
	span.textContent = 'toggle menu';
	btn.append(span);
	let a = document.createElement('a');
	a.textContent = 'Working Process';
	a.setAttribute('href', '#working');
	let a2 = document.createElement('a');
	a2.setAttribute('href', '#featured');
	a2.textContent = 'Featured Works';
	let a3 = document.createElement('a');
	a3.setAttribute('href', '#services');
	a3.textContent = 'Services We Provide'
	let a4 = document.createElement('a');
	a4.setAttribute('href', '#team');
	a4.textContent = 'Our Team';
	let a5 = document.createElement('a');
	a5.setAttribute('href', '#clients');
	a5.textContent = 'Clients Said';
	div.append(btn);
	div.append(a);
	div.append(a2);
	div.append(a3);
	div.append(a4);
	div.append(a5);
	closedMenu.replaceWith(menu);
	btn.onclick = function() {
		menu.replaceWith(btnAct)
	}
}