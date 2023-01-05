/*scroll dos links do menu*/
function menuScroll(alvo) {
	window.scroll(700);
	let distancia = document.querySelector('.sobre-mim').offsetTop + 700;
}

/*Animação do menu para dispositivos menores*/
function slideMenu() {
	let menu = document.querySelector('.nav_cell');
	if (menu.classList.contains('slideUp')) {
		menu.classList.remove('slideUp');
		menu.classList.add('slideDown');
	} else {
		menu.classList.add('slideUp');
		menu.classList.remove('slideDown');
	}
}

/*Variáveis do animeScroll*/
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';
const html = document.querySelector('#html');
const css = document.querySelector('#css');
const js = document.querySelector('#js');
const git = document.querySelector('#git');
const github = document.querySelector('#github');

/*Otimizando a function*/
function debounce(func, wait) {
	let timer = null;
	return function () {
		clearTimeout(timer);
		timer = setTimeout(func, wait);
	}
}

/*Animações de scroll*/
function animeScroll() {
	const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
	target.forEach(function (item) {
		let dis = item.offsetTop;
		if (item == html || item == css || item == js || item == git || item == github) {
			dis += 2875;
		}

		if (windowTop > dis) {
			item.classList.add(animationClass);
		} else {
			item.classList.remove(animationClass);
		}
	})
}

animeScroll();

if (target.length) {
	window.addEventListener('scroll', debounce(function () {
		animeScroll();
	}))
}

/*Variáveis do showText*/
let nome = document.querySelector('.nome');
const copiaNome = 'Thomas';
const animaDigito = document.querySelector('.animaDigito')
const c = 0;

/*Animação do menu*/
function menu(x) {
	x.classList.toggle('change')
}

/*Animação de digito na tela*/
function showText(el, text, interval) {
	el.innerHTML = '';
	const char = text.split("");

	const typer = setInterval(() => {
		if (!char.length) {
			animaDigito.innerHTML += '|';
			setInterval(() => {
				if (animaDigito.classList.contains('hide')) {
					animaDigito.classList.remove('hide')
				} else {
					animaDigito.classList.add('hide')
				}

			}, 750)
			return clearInterval(typer);
		}
		const next = char.shift();
		el.innerHTML += next
	}, interval)
}

document.body.addEventListener('load', showText(nome, copiaNome, 150));


/*Modal*/
const fundo = document.querySelector('.fundo');
const modal = document.querySelector('.modal');
const header = document.querySelector('.modal-header');
const modalContent = document.querySelector(".modal-content");
const imgs = document.querySelectorAll('.skill-imgs');

imgs.forEach((item) => {
	item.addEventListener("click", openModal);
	console.log(item);
})

function openModal(e) {
	let id = e.target.getAttribute('id');
	switch (id) {
		case "html":
			header.innerHTML = `<h3>HTML</h3>
			<span onclick="addHide()">X</span>`;
			modalContent.innerHTML = "<p>HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo.</p>";
			break;
		case "css":
			header.innerHTML = `<h3>CSS</h3>
			<span onclick="addHide()">X</span>`;
			modalContent.innerHTML = "<p>Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos.</p>";
			break;
		case "js":
			header.innerHTML = `<h3>Javascript</h3>
			<span onclick="addHide()">X</span>`;
			modalContent.innerHTML = `<p>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto
			nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das
			três
			principais tecnologias da World Wide Web.</p>`;
			break;
		case "git":
			header.innerHTML = `<h3>Git</h3>
			<span onclick="addHide()">X</span>`;
			modalContent.innerHTML = `<p>Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.</p>`;
			break;
		case "github":
			header.innerHTML = `<h3>GitHub</h3>
			<span onclick="addHide()">X</span>`;
			modalContent.innerHTML = `<p>GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.</p>`;
			break;
	}
	fundo.classList.remove('hide');
	fundo.classList.remove('z-index-1');
	modal.classList.remove('hide');
	modal.classList.remove('z-index-1');
}

function addHide() {
	fundo.classList.add('hide');
	fundo.classList.add('z-index-1');
	modal.classList.add('hide');
	modal.classList.add('z-index-1');
}