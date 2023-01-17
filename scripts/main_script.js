const menuDesktop = document.querySelectorAll(".header__menu a");
const menuDesktopArea = document.querySelectorAll(".header__menu li");
const selectItemMenu = document.querySelector(".menu__selection");
const presentation = document.querySelector(".description__profesion");
const sections = document.querySelectorAll(".section");
const sectionHome = document.querySelector(".home");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const typeSkills = document.querySelectorAll(".technologies");
const containerSkills = document.querySelector(".logos");
const containerProjects = document.querySelector(".projects__container");
const project = document.querySelector(".project");
const menuMobilSelect = document.querySelector(".menumobil__link--select");
const menuMobilContainer = document.querySelector(".menumobil");
const menuMobil = document.querySelectorAll(".link");


selectItemMenu.style.left = "0px";
selectItemMenu.style.top = "0px";

const textPresentation = ['Software Developer', 'Front-End Developer', 'Electrical Design'];
const numbertags = 35;
let containerTags = [];
const nameTags = ["<header>", "<section>", "<footer>", "<nav>", "<aside>", "<img>", "<button>", "<input>", "<picture>", "<table>", "<meta>", "<select>", "<span>", "<textarea>", "<video>"];
const nameLogos = ["html", "css", "javascript", "sass", "pug", "git", "github", "mysql", "csharp", "netcore", "xamarin", "xaml", "c", "vscode", "vs", "labview", "teststand", "cvi"];


const mobileDetect = () => {
	let check = false;
	(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
	return check;
};

onload = () => {
	CreateProject();
	initAnimation();
	scroll(0, 0);
	CreateLogoSkill(0);
}

for (let index = 0; index < menuDesktop.length; index++) {
	menuDesktop.item(index).addEventListener('mouseup', (e) => {
		menuDesktop.forEach(elementMenuUnSelected => {
			elementMenuUnSelected.style.borderBottom = "none";
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
}

setTimeout(() => {
	let intervalPresentetion = setInterval(LoadPresentation, 130);
	let numLetter = 0;
	let reverse = false;
	let textReverse = '';
	let textNumber = 0;
	function LoadPresentation() {
		if (numLetter < textPresentation[textNumber].length && !reverse) {
			presentation.innerHTML += textPresentation[textNumber][numLetter];
			textReverse = textPresentation[textNumber];
			console.log("DENTRO")
			numLetter += 1;			
		} else {
			reverse = true;
		}
		if(reverse) {
			presentation.innerHTML = textReverse.substring(0, numLetter);
			numLetter -= 1;
			if(presentation.innerHTML.length == 0) {
				reverse = false;
				numLetter = 0;				
				textNumber += 1;
				textNumber = textNumber > textPresentation.length - 1?0: textNumber;
				
			}
		}		
	}
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
		//newTagMove.textContent = nameTags[GetRandomNumber(0, 14)];
		newTagMove.style.backgroundImage = "url('./assets/icons/" + nameLogos[GetRandomNumber(0, nameLogos.length - 1)] + "-logo.svg')";
		newTagMove.classList = "tag__move";
		newTagMove.style.left = `${this.posX}px`;
		newTagMove.style.top = `${this.posY}px`;
		containerTags.push(newTagMove);
		sectionHome.appendChild(newTagMove);
		let fontSize = parseFloat(window.getComputedStyle(newTagMove, null).getPropertyValue('font-size'));
		newTagMove.style.width = `${Math.floor(newTagMove.getBoundingClientRect().width + 40)}px`;
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
		sectionHome.addEventListener('mouseup', (e) => {
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
	for (let index = 0; index < numbertags; index++) {
		let positionTagX = GetRandomNumber(50, window.innerWidth - 50);
		let positionTagY = GetRandomNumber(100, window.innerHeight - 20);
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
	const collisionLimitYTop = 100;
	const collisionLimitYBottom = window.innerHeight - 70;

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

for (let index = 0; index < typeSkills.length; index++) {
	typeSkills[index].addEventListener("click", (e) => {
		CreateLogoSkill(index);
	})
}

const CreateLogoSkill = (numberSkill) => {
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

	do {
		containerSkills.removeChild(containerSkills.lastChild);
	} while (containerSkills.lastChild.className === "logos__name");

	for (let index = 0; index < SKILLS[numberSkill].length; index++) {
		const newLogoTech = document.createElement("div");
		newLogoTech.classList = "logos__name";
		containerSkills.appendChild(newLogoTech);
		newLogoTech.style.zIndex = "1";
		const newLogoBubble = document.createElement("div");
		newLogoBubble.classList = "logos__bubble";
		newLogoTech.appendChild(newLogoBubble);
		const newLogoImage = document.createElement("img");
		newLogoImage.classList = "logo";
		newLogoImage.src = sourceLogos + SKILLS[numberSkill][index] + "-logo.svg";
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

const Title = [
	"Draw Board",
	"Test Sequence",
	"Electronic Encyclopedia"
]
const Technologies = [
	["html", "css", "javascript", "pug", "sass"],
	["csharp", "netcore", "xaml", "sql", "mysql", "git", "github"],
	["csharp", "netcore", "xamarin", "xaml"],
	["c", "csharp", "xaml", "labview",],
	["vscode", "vs", "git", "labview"]
]
const Repositories = [
	"https://aletzman.github.io/",
	"https://github.com/AletzMan",
	"https://aletzman.github.io/",
]


const CreateProject = () => {
	for (let index = 0; index < 2; index++) {
		const newProject = project.cloneNode(true);
		containerProjects.appendChild(newProject);
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
	projectsZoom = document.querySelectorAll(".project__options--zoom");

	for (let index = 0; index < projects.length; index++) {
		projectsTitle[index].innerHTML = Title[index];
		Technologies[index].forEach(namelogo => {
			const newImgTech = document.createElement("img");
			newImgTech.src = sourceLogos + namelogo + "-logo.svg";
			projectsTechnologies[index].appendChild(newImgTech);
		});
		projectsImage[index].src = sourcePhotos + index + ".jpg";
		projectsRepository[index].href = Repositories[index];
	}

	AsignEvent();
}

let containerCreate = false;

const AsignEvent = () => {
	const projects = document.querySelector(".projects");

	projectsZoom.forEach((element, index) => {
		element.addEventListener("mouseup", () => {
			containerCreate = false;
			const newPreviewContainer = document.createElement("div");
			newPreviewContainer.classList = "previewContainer";
			newPreviewContainer.style.height = window.innerHeight + 18 + "px";
			body.appendChild(newPreviewContainer);
			newPreviewContainer.style.top = (scrollY) + "px";
			newPreviewContainer.style.left = `0px`;
			const newPreview = document.createElement("div");
			newPreview.classList = "previewContainer__preview";
			newPreviewContainer.appendChild(newPreview);
			const newPreviewImage = document.createElement("img");
			newPreviewImage.classList = "previewContainer__preview--image";
			newPreviewImage.src = sourcePhotos + index + ".jpg";
			newPreview.appendChild(newPreviewImage);

			body.style.overflowX = "hidden";
			body.style.overflowY = "hidden";
			setTimeout(() => {
				containerCreate = true;
			}, 1200);
		})
	});
}

body.addEventListener("mouseup", () => {
	if (containerCreate) {
		do {
			body.removeChild(body.lastChild);
		} while (body.lastChild.className === "previewContainer");
		body.style.overflowX = "auto";
		body.style.overflowY = "auto";
	}
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
		sections.forEach(section => {
			section.style.opacity = 0;
		})
		indexMenuBefore = indexMenuCurrent;
		indexMenuCurrent = index;
		numberOfSectionsDisplaced = Math.abs(indexMenuCurrent - indexMenuBefore);

		console.log(sections[index].getBoundingClientRect().height);
		let scrollPosition = 0;
		for (let numberSection = 0; numberSection < index; numberSection++) {
			scrollPosition += (sections[numberSection].getBoundingClientRect().height) + (80);
		}
		scrollPosition -= 16;
		scroll(0, scrollPosition);
		setTimeout(() => {
			sections.forEach(section => {
				section.style.opacity = 1;
			})
		}, 600);
	})
}

window.addEventListener("resize", () => {
	positionMenuselected = ((menuMobilContainer.getBoundingClientRect().width / 16) / 5 * (indexMenuCurrent + 1)) - (menuMobilSelect.getBoundingClientRect().width / 16) - 0.2;
	menuMobilSelect.style.left = `${positionMenuselected}rem`;
})

document.addEventListener("scroll", () => {
	if (scrollY) {
		let designMobil = window.getComputedStyle(menuMobilContainer, null).getPropertyValue("display") == "none" ? false : true;

		for (let index = 0; index < sections.length; index++) {
			if (sections[index].getBoundingClientRect().y < 200 && sections[index].getBoundingClientRect().y > -20) {
				if (designMobil) {
					positionMenuselected = ((menuMobilContainer.getBoundingClientRect().width / 16) / 5 * (index + 1)) - (menuMobilSelect.getBoundingClientRect().width / 16) - 0.2;
					menuMobilSelect.style.left = `${positionMenuselected}rem`;
					setTimeout(() => {
						menuMobil.forEach(section => {
							section.style.filter = "invert(1)";
						});
						menuMobil[index].style.filter = "invert(0)";
						menuMobilSelect.innerText = nameTagMenu[index];
					}, 400);
				} else {
					selectItemMenu.style.left = menuDesktopArea.item(index).getBoundingClientRect().left - menuDesktopArea.item(0).getBoundingClientRect().left - 1 + "px";
					menuDesktop.forEach(elementMenuUnSelected => {
						//elementMenuUnSelected.style.borderBottom = "none";
						elementMenuUnSelected.style.color = "var(--color_font)";
					});
					menuDesktop.item(index).style.color = "var(--color_activated)";
				}
			}
		}
	}
})

