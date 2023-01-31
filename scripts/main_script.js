const DESKTOP_MENU_LINKS = document.querySelectorAll(".menu__list--link");
const DESKTOP_MENU_ITEMS = document.querySelectorAll(".menu__list");
const SELECTED_MENU_ITEM = document.querySelector(".menu__selection");
const presentation = document.querySelector(".landscape__window--text");
const SECTIONS = document.querySelectorAll(".section");
const SECTION_TITLES = document.querySelectorAll(".title");
const SLOGAN = document.querySelector(".home__slogan");
const GREETINGS = document.querySelector(".home__greetings");
const SKILL_CATEGORY_LABELS = document.querySelectorAll(".label__tech");
const ABOUT_PARAGRAPHS = document.querySelectorAll(".aboutme__paragraph");
const ABOUT_PARAGRAPHS_LIST = document.querySelector(".aboutme__paragraph--list");
const CONTACT_MESSAGE = document.querySelector(".contact__type--message");
const SECTION_BUBBLES = document.querySelector(".section__bubbles");
const FOOTER = document.querySelector(".footer");
const SKILLS_CATEGORIES = document.querySelectorAll(".technologies");
const CONTAINER_SKILLS = document.querySelector(".logos");
const containerProjects = document.querySelector(".projects__container");
const project = document.querySelector(".project");
const menuMobilSelect = document.querySelector(".menumobil__link--select");
const menuMobilContainer = document.querySelector(".menumobil");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal__image");
const modalButton = document.querySelector(".modal__button");
const languageCheck = document.querySelector(".language__check");
const menuMobil = document.querySelectorAll(".link");

let textPresentation = [];
const NUMBER_BUBBLE = 20;
const SIZE_BUBBLE = 45;
const NAME_LOGOS = ["html", "css", "javascript", "sass", "pug", "git", "github", "mysql", "csharp", "netcore", "xamarin", "xaml", "c", "vscode", "vs", "labview", "teststand", "cvi"];
let containerTags = [];
let selectedLanguage = "spanish";





onload = () => {
	SELECTED_MENU_ITEM.style.left = "0px";
	SELECTED_MENU_ITEM.style.top = "0px";
	CreateLogoSkill(0);
	CreateProject();
	initAnimation();
	scroll(0, 0);
	selectLanguage();
}


const mobileDetect = () => {
	let check = false;
	(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
	return check;
};

////SELECT LANGUAGE//////
const LANGUAGE = {
	english: {
		header: ["Home", "Skills", "Projects", "About Me", "Contact"],
		section: ["HOME", "SKILLS", "PROJECTS", "ABOUT ME", "CONTACT"],
		intro: ["Hey, <br> My name is", '"Transforming concepts and design, into code"'],
		skills: ["Web", "Mobil", "Desktop", "Test & Measurement", "Tools & Platforms"],
		about: [
			"ALWAYS",
			"I am a self-taught person, and passionate about programming. From a very young age I was very interested in technology, first electronics, I liked to disassemble electronic objects and see how they worked inside.",
			"I decided to study electronics, where I came across microcontrollers and so I was able to combine my two current passions, electronics and programming.",
			"I started working in the electronics field as a diagnostic technician.",
			"I set up my own business, where I offered computer rental and repair services. Here I started to delve into the world of programming in a self-taught way, with ActionScript and Visual Basic.",
			"I started working as a mechanical assembly technician for the electronics industry, where test and automation equipment is manufactured for companies that manufacture electronic products.",
			"I was promoted to hardware technician, where I did the routing and wiring of the electrical and electronic part of the equipment.",
			"I was promoted to Hardware Engineer, where I did the electrical diagrams and debugging of the electrical and electronics.",
			[{
				devsoft: [
					"I was promoted to Development Engineer, my responsibilities:",
					"Logical part of the equipment by programming (C, C#, LabView, TestStand, CVI, PLC Siemens(TIA Portal))",
					"BOM(Bill Of Materials)",
					"Realization of electrical diagrams",
					"Debugging of the code and electrical part",
					"Equipment manual",
					"Delivery and installation of the equipment on site to the customer"
				]
			}],
			"I had the opportunity to start a business, and I decided to work as a freelance, where I do residential electrical installation work, and in the area of development with languages such as C #, for mobile and desktop applications.",
			"Since then I have dedicated myself independently to study several programming languages, I focus on Web Development, and from the first day I have been excited about this world, I want to work in this fascinating area, at the moment I am in the Front-End area and little by little I want to go deeper into the Back-End. And above all, never stop learning."
		],
		contact: ["To know more about me, and to be able to work together you can find me at:"],
		footer: ["Made in <img class='footer__copyright--icon' title='México' src='./assets/icons/mexico-icon.ico' alt='mexico flag' loading='lazy' draggable='false'> by Alejandro Garcia Alonso"]
	},
	spanish: {
		header: ["Inicio", "Habilidades", "Proyectos", "Sobre mi", "Contacto"],
		section: ["INICIO", "HABILIDADES", "PROYECTOS", "SOBRE MI", "CONTACTO"],
		intro: ["Hola, <br> Mi nombre es", '"Transformando conceptos y diseño, en código"'],
		skills: ["Web", "Mobil", "Desktop", "Prueba y Medición", "Herramientas y Plataformas"],
		about: [
			"SIEMPRE",
			"Soy una persona autodidacta, y apasionado por la programación. Desde muy pequeño me interesó mucho la tecnología, primero la electrónica, me gustaba desmontar objetos electrónicos y ver como funcionaban por dentro.",
			"Decidí estudiar la carrera de electrónica, donde me encontré con los microcontroladores y así pude combinar mis dos actuales pasiones, la electrónica y la programación.",
			"Comencé a trabajar en el campo de la electrónica como tecnico de diagnostico.",
			"Emprendi mi negocio donde ofrecía servicios de renta y reparación de computadoras. Aquí comencé a adentrarme más en el mundo de la programación de forma autodidacta, con ActionScript y Visual Basic.",
			"Empecé a trabajar como técnico de ensamble mecanico, para la industria electrónica, donde se fabrican equipos de prueba y automatización para empresas que fabrican productos electrónicos.",
			"Fui ascendido a técnico de hardware, donde realizaba el ruteo y cableado de la parte eléctrica y electrónica de los equipos.",
			"Fui ascendido a Ingeniero de Hardware, donde realizaba los diagramas eléctricos y la depuración de la parte eléctrica y electrónica.",
			[{
				devsoft: [
					"Fui ascendido a Ingeniero de Desarrollo, mis responsabilidades:",
					"Parte lógica de los equipos mediante programación (C, C#, LabView, TestStand, CVI, PLC Siemens(TIA Portal))",
					"BOM(Lista de materiales)",
					"Realización de esquemas eléctricos",
					"Depuración del código y parte electrica",
					"Manual del equipo",
					"Entrega e instalación del equipo en sitio al cliente"
				]
			}],
			"Tuve la oportunidad de montar un negocio, y decidí trabajar como freelance, donde realizo trabajos de instalación eléctrica residencial, y en el área de desarrollo con lenguajes como C#, para aplicaciones móviles y de escritorio.",
			"Desde entonces me he dedicado de manera autonoma a estudiar varios lenguajes de programación, me enfoque en Desarrollo Web, y desde el primer día he estado entusiasmado con este mundo, quiero trabajar en esta fascinante área, de momento estoy en el área de Front-End y poco a poco quiero ir adentrandome en el Back-End. Y sobre todo, nunca dejar de aprender."
		],
		contact: ["Para saber más sobre mí, y poder trabajar juntos puedes encontrarme en:"],
		footer: ["Hecho en <img class='footer__copyright--icon' title='México' src='./assets/icons/mexico-icon.ico' alt='mexico flag' loading='lazy' draggable='false'> por Alejandro Garcia Alonso"]
	}
}


languageCheck.addEventListener('change', () => {
	selectedLanguage = languageCheck.checked ? "english" : "spanish";
	setTimeout(() => {
		selectLanguage();
	}, 300);
})

const selectLanguage = () => {
	let lan = selectedLanguage == "spanish" ? LANGUAGE.spanish : LANGUAGE.english;
	DESKTOP_MENU_LINKS.forEach((menu, index) => {
		menu.innerText = lan.header[index];
	})
	SECTION_TITLES.forEach((section, index) => {
		section.innerText = lan.section[index];
	})
	GREETINGS.innerHTML = lan.intro[0];
	SLOGAN.innerHTML = lan.intro[1];
	SKILL_CATEGORY_LABELS.forEach((label, index) => {
		label.innerText = lan.skills[index];
	})
	ABOUT_PARAGRAPHS.forEach((paragraph, index) => {
		if (paragraph.nodeName === "P") {
			paragraph.innerText = lan.about[index + 1];
		} else {
			for (let i = 0; i < ABOUT_PARAGRAPHS_LIST.childElementCount; i++) {
				ABOUT_PARAGRAPHS_LIST.children[i].innerText = lan.about[8][0].devsoft[i];
			}
		}
	})
	CONTACT_MESSAGE.innerHTML = lan.contact[0];
	FOOTER.children[0].innerHTML = lan.footer[0];

}

const contentPresentation = () => {
	textPresentation = languageCheck.checked ?
		['Software Developer', 'Front-End Developer', 'Electrical Design']
		: ['Desarrollador de Sofware', 'Desarrollador Front-End', 'Diseño Electrico']
}






for (let index = 0; index < DESKTOP_MENU_LINKS.length; index++) {
	DESKTOP_MENU_LINKS.item(index).addEventListener('mouseup', (e) => {
		DESKTOP_MENU_LINKS.forEach(elementMenuUnSelected => {
			elementMenuUnSelected.style.color = "var(--color_font)";
		});
		setTimeout(() => {
			e.target.style.color = "var(--color_activated)";
		}, 1500);
		if (e.target.innerHTML === "HOME") {
			setTimeout(() => {
				scroll(0, 0);
			}, 0);
		}
	})
	DESKTOP_MENU_LINKS.item(index).addEventListener('mouseover', (e) => {
		e.target.style.color = "var(--color_activated)";
	})
	DESKTOP_MENU_LINKS.item(index).addEventListener('mouseout', (e) => {
		e.target.style.color = "var(--color_font)";
	})
}

setTimeout(() => {
	let timeInit;
	let timeElapsed;
	let numLetter = 0;
	let reverse = false;
	let textReverse = '';
	let textNumber = 0;
	let delayON = true;
	const delay = 3500;
	setInterval(() => {
		contentPresentation();
		if (delayON) timeInit = new Date().getTime();
		if (numLetter < textPresentation[textNumber].length && !reverse) {
			presentation.innerHTML += textPresentation[textNumber][numLetter];
			textReverse = textPresentation[textNumber];
			numLetter += 1;
			delayON = false;
		} else {
			reverse = true;
			timeElapsed = new Date().getTime() - timeInit;
		}
		if (reverse && timeElapsed > delay) {
			presentation.innerHTML = textReverse.substring(0, numLetter);
			numLetter -= 1;
			if (presentation.innerHTML.length === 0) {
				reverse = false;
				textNumber += 1;
				numLetter = 0;
				delayON = true;
				if (textNumber > textPresentation.length - 1) {
					textNumber = 0;
				}
			}
		}

	}, 100);
}, 1600);


class TagBubble {
	constructor(posX, posY, speedX, speedY, mass) {
		this.posX = posX;
		this.posY = posY;
		this.speedX = speedX;
		this.speedY = speedY;
		this.mass = mass;
		this.isColliding = false;
	}

	createItem() {
		const newTagMove = document.createElement("div");
		newTagMove.style.backgroundImage = "url('./assets/icons/" + NAME_LOGOS[GetRandomNumber(0, NAME_LOGOS.length - 1)] + "-logo.svg')";
		newTagMove.classList = "tag__move";
		newTagMove.style.left = `${this.posX}px`;
		newTagMove.style.top = `${this.posY}px`;
		containerTags.push(newTagMove);
		SECTION_BUBBLES.appendChild(newTagMove);
		let fontSize = parseFloat(window.getComputedStyle(newTagMove, null).getPropertyValue('font-size'));
		newTagMove.style.width = `${Math.floor(newTagMove.getBoundingClientRect().width + SIZE_BUBBLE)}px`;
		newTagMove.style.paddingTop = `${(Math.floor(newTagMove.getBoundingClientRect().width / 2) - fontSize / 1.5)}px`;
		newTagMove.style.height = `${Math.floor(newTagMove.getBoundingClientRect().width)}px`;

		this.width = Math.floor(newTagMove.getBoundingClientRect().width);
		this.height = Math.floor(newTagMove.getBoundingClientRect().height);

		this.initPosMouseX = 0;
		this.initPosMouseY = 0;
		newTagMove.addEventListener('mousedown', (e) => {
			this.initPosMouseX = e.clientX;
			this.initPosMouseY = e.clientY;
		});
		let directionX = 0;
		let directionY = 0;
		body.addEventListener('mouseup', (e) => {
			if (this.initPosMouseX != 0) {
				if (this.initPosMouseX - e.clientX > 0) {
					directionX = -10;
				} else {
					directionX = +10;
				}
				if (this.initPosMouseY - e.clientY > 0) {
					directionY = -10;
				} else {
					directionY = +10;
				}
				for (let index = 0; index < 20; index++) {
					setTimeout(() => {
						this.speedX += directionX;
						this.speedY += directionY;
					}, 50);
				}
				this.initPosMouseX = 0;
				this.initPosMouseY = 0;
			}
		});
	}
	updatePosition(timeElapsed) {
		this.posX += this.speedX * timeElapsed;
		this.posY += this.speedY * timeElapsed;
	}
}

let timeElapsed = 0;
let oldTimeStamp = 0;
let bubblesContainer = [];

const initAnimation = () => {
	createBubbleTags();
	window.requestAnimationFrame((timeStamp) => { animationLoop(timeStamp) });
}
const createBubbleTags = () => {
	for (let index = 0; index < NUMBER_BUBBLE; index++) {
		let positionTagX = GetRandomNumber(50, window.innerWidth - 50);
		let positionTagY = GetRandomNumber(100, SECTION_BUBBLES.getBoundingClientRect().height - 20);
		bubblesContainer.push(new TagBubble(positionTagX, positionTagY, GetRandomNumber(-20, 70), GetRandomNumber(-20, 70), GetRandomNumber(1, 10)));
	}
	for (let i = 0; i < bubblesContainer.length; i++) {
		bubblesContainer[i].createItem();
		bubblesContainer[i].mass = bubblesContainer[i].width * 150;
	}
}

const animationLoop = (timeStamp) => {
	timeElapsed = (timeStamp - oldTimeStamp) / 1000;
	oldTimeStamp = timeStamp;
	for (let i = 0; i < bubblesContainer.length; i++) {
		bubblesContainer[i].updatePosition(timeElapsed);
	}
	UpdatePosition();
	detectCollisions();
	borderCollisionDetection();
	window.requestAnimationFrame((timeStamp) => animationLoop(timeStamp));
}

const UpdatePosition = () => {
	for (let index = 0; index < containerTags.length; index++) {
		containerTags[index].style.left = bubblesContainer[index].posX + "px";
		containerTags[index].style.top = bubblesContainer[index].posY + "px";
	}
}

const detectCollisions = () => {
	let objectOne;
	let objectTwo;
	for (let i = 0; i < bubblesContainer.length; i++) {
		bubblesContainer[i].isColliding = false;
	}

	for (let i = 0; i < bubblesContainer.length; i++) {
		objectOne = bubblesContainer[i];
		for (let j = i + 1; j < bubblesContainer.length; j++) {
			objectTwo = bubblesContainer[j];
			if (intersectionCircles(objectOne.posX, objectOne.posY, objectOne.width / 2, objectTwo.posX, objectTwo.posY, objectTwo.width / 2)) {
				objectOne.isColliding = true;
				objectTwo.isColliding = true;
				let collisionVector = { x: objectTwo.posX - objectOne.posX, y: objectTwo.posY - objectOne.posY };
				let distance = Math.sqrt((objectTwo.posX - objectOne.posX) * (objectTwo.posX - objectOne.posX) + (objectTwo.posY - objectOne.posY) * (objectTwo.posY - objectOne.posY));
				let collisionVectorNorm = { x: collisionVector.x / distance, y: collisionVector.y / distance };
				let relativeVelocityVector = { x: objectOne.speedX - objectTwo.speedX, y: objectOne.speedY - objectTwo.speedY };
				let speed = relativeVelocityVector.x * collisionVectorNorm.x + relativeVelocityVector.y * collisionVectorNorm.y;

				if (speed < 0) break;
				let impulse = 2 * speed / (objectOne.mass + objectTwo.mass);
				objectOne.speedX -= (impulse * objectTwo.mass * collisionVectorNorm.x);
				objectOne.speedY -= (impulse * objectTwo.mass * collisionVectorNorm.y);
				objectTwo.speedX += (impulse * objectOne.mass * collisionVectorNorm.x);
				objectTwo.speedY += (impulse * objectOne.mass * collisionVectorNorm.y);
			}
		}
	}
}

const borderCollisionDetection = () => {
	const collisionLimitXLeft = (1);
	const collisionLimitXRight = window.outerWidth - 30;
	const collisionLimitYTop = 57;
	const collisionLimitYBottom = SECTION_BUBBLES.getBoundingClientRect().height - 57;
	const speedReset = 0.95;
	let bubble;
	for (let i = 0; i < bubblesContainer.length; i++) {
		bubble = bubblesContainer[i];


		if (bubble.posX < collisionLimitXLeft) {
			bubble.speedX = Math.abs(bubble.speedX) * speedReset;
			bubble.posX = collisionLimitXLeft;
		} else if (bubble.posX > collisionLimitXRight - bubble.width) {
			bubble.speedX = -Math.abs(bubble.speedX) * speedReset;
			bubble.posX = collisionLimitXRight - bubble.width;
		}

		if (bubble.posY < collisionLimitYTop) {
			bubble.speedY = Math.abs(bubble.speedY) * speedReset;
			bubble.posY = collisionLimitYTop;
		} else if (bubble.posY > collisionLimitYBottom - bubble.height) {
			bubble.speedY = -Math.abs(bubble.speedY) * speedReset;
			bubble.posY = collisionLimitYBottom - bubble.height;
		}
	}
}


function intersectionCircles(posXOne, posYOne, radiusOne, posXTwo, posYTwo, radiusTwo) {
	let distanceBetweenCircles = (posXOne - posXTwo) * (posXOne - posXTwo) + (posYOne - posYTwo) * (posYOne - posYTwo);
	return distanceBetweenCircles <= ((radiusOne + radiusTwo) * (radiusOne + radiusTwo));
}

function GetRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function GetRandomNumberFloat(min, max) {
	return Math.random() * (max - min) + min;
}

////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////--------- SECTION SKILLS ---------/////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

const sourceLogos = "./assets/icons/";
const selectSkills = document.querySelector('.skills__select');

selectSkills.addEventListener('change', (e) => {
	console.log(e.target.value)
	CreateLogoSkill(e.target.value);
})


for (let index = 0; index < SKILLS_CATEGORIES.length; index++) {
	SKILLS_CATEGORIES[index].addEventListener("click", (e) => {
		CreateLogoSkill(index);
	})
}
const SKILLS = [
	["html", "css", "javascript", "pug", "sass", "git", "github", "vscode"],
	["csharp", "netcore", "xaml", "git", "github", "vs"],
	["csharp", "netcore", "xamarin", "xaml", "vs", "git", "github"],
	["c", "csharp", "xaml", "labview", "siemens", "git", "github"],
	["vscode", "vs", "git", "labview", "teststand", "cvi", "tiaportal"]
]
const SKILLSNAME = [
	["html", "css", "javascript", "pug", "sass", "git", "git hub", "visual studio code"],
	["c#", "netcore", "xaml", "git", "github", "visual studio"],
	["c#", "netcore", "xamarin forms", "xaml", "visual studio", "git", "github"],
	["c", "c#", "xaml", `labview (Graphic)`, "scl, kop", "git", "github"],
	["visual studio code", "visual studio", "git", "labview", "teststand", "lab/windows cvi", "tia portal"]
]
const CreateLogoSkill = (numberSkill) => {


	do {
		CONTAINER_SKILLS.removeChild(CONTAINER_SKILLS.lastChild);
	} while (CONTAINER_SKILLS.lastChild.className === "skills__name");

	for (let index = 0; index < SKILLS[numberSkill].length; index++) {
		const newLogoTech = document.createElement("div");
		newLogoTech.classList = "skills__name";
		CONTAINER_SKILLS.appendChild(newLogoTech);
		newLogoTech.style.zIndex = "1";
		const newLogoBubble = document.createElement("div");
		newLogoBubble.classList = "skills__bubble";
		newLogoTech.appendChild(newLogoBubble);
		const newLogoImage = document.createElement("img");
		newLogoImage.classList = "logo";
		newLogoImage.src = sourceLogos + SKILLS[numberSkill][index] + "-logo.svg";
		newLogoImage.alt = "logo " + SKILLS[numberSkill][index];
		newLogoBubble.appendChild(newLogoImage);
		const newLogoName = document.createElement("span");
		newLogoName.textContent = SKILLSNAME[numberSkill][index];
		newLogoTech.appendChild(newLogoName);
	}
}

////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////--------- SECTION PROJECTS ---------/////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


let projectsZoom = document.querySelectorAll(".project__options--zoom");
const body = document.querySelector("body");
const sourcePhotos = "./assets/photos/project_";

let Title = [];
const Technologies = [
	["html", "css", "javascript", "pug", "sass"],
	["csharp", "netcore", "xaml", "sql", "mysql", "git"],
	["csharp", "netcore", "xamarin", "xaml"],
	["c", "csharp", "xaml", "labview",],
	["vscode", "vs", "git", "labview"]
];
const Repositories = [
	"https://aletzman.github.io/",
	"https://github.com/AletzMan",
	"https://aletzman.github.io/",
];


const CreateProject = () => {
	for (let index = 0; index < 2; index++) {
		const newProject = project.cloneNode(true);
		containerProjects.appendChild(newProject);
	}

	if (mobileDetect()) {
		Title = [
			"Drawing Board",
			"Test Sequence",
			"Electronic Encyclopedia"
		];
	} else {
		Title = [
			"Drawin g-Board",
			"Test-Se quence",
			"Electronic-E ncyclopedia"
		];
	}

	EditProjects();
}
const EditProjects = () => {
	const projects = document.querySelectorAll(".project");
	const projectsTitle = document.querySelectorAll(".project__title");
	const projectsTechnologies = document.querySelectorAll(".project__technologies");
	const projectsImage = document.querySelectorAll(".project__image");
	const projectsRepository = document.querySelectorAll(".project__options--repository");
	const projectsPreview = document.querySelectorAll(".project__options--linkpreview");
	const projectCortainOne = document.querySelectorAll(".project__cortain--one");
	const projectCortainTwo = document.querySelectorAll(".project__cortain--two");
	projectsZoom = document.querySelectorAll(".project__options--zoom");




	for (let index = 0; index < projects.length; index++) {
		projectCortainOne[index].style.display = mobileDetect() ? 'none' : 'block';
		projectCortainTwo[index].style.display = mobileDetect() ? 'none' : 'block';
		projectsTitle[index].style.display = !mobileDetect() ? 'none' : 'block';
		projectsTitle[index].innerHTML = Title[index];
		Technologies[index].forEach(namelogo => {
			const newContainer = document.createElement("div");
			newContainer.classList = "project__technologies--container";
			projectsTechnologies[index].appendChild(newContainer);
			const newImgTech = document.createElement("img");
			newImgTech.src = sourceLogos + namelogo + "-logo.svg";
			newImgTech.alt = "logo" + namelogo;
			newImgTech.classList = "project__technologies--image";
			newContainer.appendChild(newImgTech);
			const newImgDescription = document.createElement("span");
			newImgDescription.textContent = namelogo;
			newImgDescription.classList = "project__technologies--label";
			newContainer.appendChild(newImgDescription);
		});
		projectsImage[index].src = sourcePhotos + index + ".jpg";
		projectsRepository[index].href = Repositories[index];
		projectCortainOne[index].innerText = Title[index].split(' ')[0];
		projectCortainTwo[index].innerText = Title[index].split(' ')[1];
	}
	AsignEvent();
}

let containerCreate = false;
const AsignEvent = () => {
	projectsZoom.forEach((element, index) => {
		element.addEventListener("mouseup", () => {
			modalImage.src = sourcePhotos + index + ".jpg";
			modal.style.transform = 'scale(1)';
			body.style.overflowX = "hidden";
			body.style.overflowY = "hidden";
		})
	});
}

window.addEventListener("mouseup", (event) => {
	if (event.target == modal) {
		modal.style.transform = 'scale(0)';
		body.style.overflowX = "auto";
		body.style.overflowY = "auto";
	}
})

modalButton.addEventListener("mouseup", (event) => {
	modal.style.transform = 'scale(0)';
	body.style.overflowX = "auto";
	body.style.overflowY = "auto";
})




////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////--------- MENU MOBIL ---------/////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

const nameTagMenu = [
	"HOME",
	"SKILLS",
	"PROJECTS",
	"ABOUT",
	"CONTACT"
]

let positionMenuselected = 0;
let indexMenuCurrent = 0;
let indexMenuBefore = 0;
let numberOfSectionsDisplaced = 0;

for (let index = 0; index < menuMobil.length; index++) {
	menuMobil.item(index).addEventListener('mousedown', (e) => {
		SECTIONS.forEach(section => {
			section.style.opacity = 0;
		})
		indexMenuBefore = indexMenuCurrent;
		indexMenuCurrent = index;
		numberOfSectionsDisplaced = Math.abs(indexMenuCurrent - indexMenuBefore);

		console.log(SECTIONS[index].getBoundingClientRect().height);
		let scrollPosition = 0;
		for (let numberSection = 0; numberSection < index; numberSection++) {
			scrollPosition += (SECTIONS[numberSection].getBoundingClientRect().height) + (80);
		}
		scrollPosition -= 16;
		scroll(0, scrollPosition);
		setTimeout(() => {
			SECTIONS.forEach(section => {
				section.style.opacity = 1;
			})
		}, 500);
	})
}

window.addEventListener("resize", () => {
	positionMenuselected = ((menuMobilContainer.getBoundingClientRect().width / 16) / 5 * (indexMenuCurrent + 1)) - (menuMobilSelect.getBoundingClientRect().width / 16) - 0.2;
	menuMobilSelect.style.left = `${positionMenuselected}rem`;
})

document.addEventListener("scroll", () => {
	if (scrollY) {
		let designMobil = window.getComputedStyle(menuMobilContainer, null).getPropertyValue("display") == "none" ? false : true;

		for (let index = 0; index < SECTIONS.length; index++) {
			if (SECTIONS[index].getBoundingClientRect().y < 350 && SECTIONS[index].getBoundingClientRect().y > -20) {
				if (designMobil) {
					positionMenuselected = ((menuMobilContainer.getBoundingClientRect().width / 16) / 5 * (index + 1)) - (menuMobilSelect.getBoundingClientRect().width / 16) - 0;
					menuMobilSelect.style.left = `${positionMenuselected}rem`;
					setTimeout(() => {
						menuMobil.forEach(section => {
							//section.style.filter = "invert(1)";
							section.style.top = "0.65rem";
						});
						//menuMobil[index].style.filter = "brightness(1)";
						menuMobil[index].style.top = "0rem";
						menuMobilSelect.innerText = nameTagMenu[index];
					}, 200);
				} else {
					SELECTED_MENU_ITEM.style.left = DESKTOP_MENU_ITEMS.item(index).getBoundingClientRect().left - DESKTOP_MENU_ITEMS.item(0).getBoundingClientRect().left - 1 + "px";
					DESKTOP_MENU_LINKS.forEach(elementMenuUnSelected => {
						elementMenuUnSelected.style.color = "var(--color_font)";
					});
					DESKTOP_MENU_LINKS.item(index).style.color = "var(--color_activated)";
				}
			}
		}
	}
})

