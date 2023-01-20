"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var menuDesktop = document.querySelectorAll(".header__menu a");
var menuDesktopArea = document.querySelectorAll(".header__menu li");
var selectItemMenu = document.querySelector(".menu__selection");
var presentation = document.querySelector(".description__profesion");
var sections = document.querySelectorAll(".section");
var sectionHome = document.querySelector(".home");
var header = document.querySelector(".header");
var footer = document.querySelector(".footer");
var typeSkills = document.querySelectorAll(".technologies");
var containerSkills = document.querySelector(".logos");
var containerProjects = document.querySelector(".projects__container");
var project = document.querySelector(".project");
var menuMobilSelect = document.querySelector(".menumobil__link--select");
var menuMobilContainer = document.querySelector(".menumobil");
var menuMobil = document.querySelectorAll(".link");
selectItemMenu.style.left = "0px";
selectItemMenu.style.top = "0px";
var textPresentation = ['Software Developer', 'Front-End Developer', 'Electrical Design'];
var numbertags = 45;
var containerTags = [];
var nameTags = ["<header>", "<section>", "<footer>", "<nav>", "<aside>", "<img>", "<button>", "<input>", "<picture>", "<table>", "<meta>", "<select>", "<span>", "<textarea>", "<video>"];
var nameLogos = ["html", "css", "javascript", "sass", "pug", "git", "github", "mysql", "csharp", "netcore", "xamarin", "xaml", "c", "vscode", "vs", "labview", "teststand", "cvi"];

var mobileDetect = function mobileDetect() {
  var check = false;

  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);

  return check;
};

onload = function onload() {
  CreateLogoSkill(0);
  CreateProject();
  initAnimation();
  scroll(0, 0);
};

for (var index = 0; index < menuDesktop.length; index++) {
  menuDesktop.item(index).addEventListener('mouseup', function (e) {
    menuDesktop.forEach(function (elementMenuUnSelected) {
      elementMenuUnSelected.style.color = "var(--color_font)";
    });
    setTimeout(function () {
      e.target.style.color = "var(--color_activated)";
    }, 1500);

    if (e.target.innerHTML === "HOME") {
      setTimeout(function () {
        scroll(0, 0);
      }, 0);
    }
  });
}

setTimeout(function () {
  var time;
  var intervalPresentetion = setInterval(LoadPresentation, 100);
  var numLetter = 0;
  var reverse = false;
  var textReverse = '';
  var textNumber = 0;

  function LoadPresentation() {
    if (numLetter < textPresentation[textNumber].length && !reverse) {
      presentation.innerHTML += textPresentation[textNumber][numLetter];
      textReverse = textPresentation[textNumber];
      numLetter += 1;
    } else {
      time = new Date().getTime();
      reverse = true;
    }

    if (reverse) {
      presentation.innerHTML = textReverse.substring(0, numLetter);
      numLetter -= 1;

      if (presentation.innerHTML.length == 0) {
        reverse = false;
        numLetter = 0;
        textNumber += 1;

        if (textNumber > textPresentation.length - 1) {
          textNumber = 0;
        }
      }
    }
  }
}, 1600);

var TagBubble =
/*#__PURE__*/
function () {
  function TagBubble(posX, posY, speedX, speedY, mass) {
    _classCallCheck(this, TagBubble);

    this.posX = posX;
    this.posY = posY;
    this.speedX = speedX;
    this.speedY = speedY;
    this.mass = mass;
    this.isColliding = false;
  }

  _createClass(TagBubble, [{
    key: "createItem",
    value: function createItem() {
      var _this = this;

      var newTagMove = document.createElement("div"); //newTagMove.textContent = nameTags[GetRandomNumber(0, 14)];

      newTagMove.style.backgroundImage = "url('./assets/icons/" + nameLogos[GetRandomNumber(0, nameLogos.length - 1)] + "-logo.svg')";
      newTagMove.classList = "tag__move";
      newTagMove.style.left = "".concat(this.posX, "px");
      newTagMove.style.top = "".concat(this.posY, "px");
      containerTags.push(newTagMove);
      sectionHome.appendChild(newTagMove);
      var fontSize = parseFloat(window.getComputedStyle(newTagMove, null).getPropertyValue('font-size'));
      newTagMove.style.width = "".concat(Math.floor(newTagMove.getBoundingClientRect().width + 40), "px");
      newTagMove.style.paddingTop = "".concat(Math.floor(newTagMove.getBoundingClientRect().width / 2) - fontSize / 1.5, "px");
      newTagMove.style.height = "".concat(Math.floor(newTagMove.getBoundingClientRect().width), "px");
      this.width = Math.floor(newTagMove.getBoundingClientRect().width);
      this.height = Math.floor(newTagMove.getBoundingClientRect().height);
      this.initPosMouseX = 0;
      this.initPosMouseY = 0;
      newTagMove.addEventListener('mousedown', function (e) {
        _this.initPosMouseX = e.clientX;
        _this.initPosMouseY = e.clientY;
      });
      var directionX = 0;
      var directionY = 0;
      body.addEventListener('mouseup', function (e) {
        if (_this.initPosMouseX != 0) {
          if (_this.initPosMouseX - e.clientX > 0) {
            directionX = -10;
          } else {
            directionX = +10;
          }

          if (_this.initPosMouseY - e.clientY > 0) {
            directionY = -10;
          } else {
            directionY = +10;
          }

          for (var _index = 0; _index < 20; _index++) {
            setTimeout(function () {
              _this.speedX += directionX;
              _this.speedY += directionY;
            }, 50);
          }

          _this.initPosMouseX = 0;
          _this.initPosMouseY = 0;
        }
      });
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(timeElapsed) {
      this.posX += this.speedX * timeElapsed;
      this.posY += this.speedY * timeElapsed;
    }
  }]);

  return TagBubble;
}();

var timeElapsed = 0;
var oldTimeStamp = 0;
var bubblesContainer = [];

var initAnimation = function initAnimation() {
  createBubbleTags();
  window.requestAnimationFrame(function (timeStamp) {
    animationLoop(timeStamp);
  });
};

var createBubbleTags = function createBubbleTags() {
  for (var _index2 = 0; _index2 < numbertags; _index2++) {
    var positionTagX = GetRandomNumber(50, window.innerWidth - 50);
    var positionTagY = GetRandomNumber(100, body.getBoundingClientRect().height - 20);
    bubblesContainer.push(new TagBubble(positionTagX, positionTagY, GetRandomNumber(-20, 70), GetRandomNumber(-20, 70), GetRandomNumber(1, 10)));
  }

  for (var i = 0; i < bubblesContainer.length; i++) {
    bubblesContainer[i].createItem();
    bubblesContainer[i].mass = bubblesContainer[i].width * 150;
  }
};

var animationLoop = function animationLoop(timeStamp) {
  timeElapsed = (timeStamp - oldTimeStamp) / 1000;
  oldTimeStamp = timeStamp;

  for (var i = 0; i < bubblesContainer.length; i++) {
    bubblesContainer[i].updatePosition(timeElapsed);
  }

  UpdatePosition();
  detectCollisions();
  borderCollisionDetection();
  window.requestAnimationFrame(function (timeStamp) {
    return animationLoop(timeStamp);
  });
};

var UpdatePosition = function UpdatePosition() {
  for (var _index3 = 0; _index3 < containerTags.length; _index3++) {
    containerTags[_index3].style.left = bubblesContainer[_index3].posX + "px";
    containerTags[_index3].style.top = bubblesContainer[_index3].posY + "px";
  }
};

var detectCollisions = function detectCollisions() {
  var objectOne;
  var objectTwo;

  for (var i = 0; i < bubblesContainer.length; i++) {
    bubblesContainer[i].isColliding = false;
  }

  for (var _i = 0; _i < bubblesContainer.length; _i++) {
    objectOne = bubblesContainer[_i];

    for (var j = _i + 1; j < bubblesContainer.length; j++) {
      objectTwo = bubblesContainer[j];

      if (intersectionCircles(objectOne.posX, objectOne.posY, objectOne.width / 2, objectTwo.posX, objectTwo.posY, objectTwo.width / 2)) {
        objectOne.isColliding = true;
        objectTwo.isColliding = true;
        var collisionVector = {
          x: objectTwo.posX - objectOne.posX,
          y: objectTwo.posY - objectOne.posY
        };
        var distance = Math.sqrt((objectTwo.posX - objectOne.posX) * (objectTwo.posX - objectOne.posX) + (objectTwo.posY - objectOne.posY) * (objectTwo.posY - objectOne.posY));
        var collisionVectorNorm = {
          x: collisionVector.x / distance,
          y: collisionVector.y / distance
        };
        var relativeVelocityVector = {
          x: objectOne.speedX - objectTwo.speedX,
          y: objectOne.speedY - objectTwo.speedY
        };
        var speed = relativeVelocityVector.x * collisionVectorNorm.x + relativeVelocityVector.y * collisionVectorNorm.y;
        if (speed < 0) break;
        var impulse = 2 * speed / (objectOne.mass + objectTwo.mass);
        objectOne.speedX -= impulse * objectTwo.mass * collisionVectorNorm.x;
        objectOne.speedY -= impulse * objectTwo.mass * collisionVectorNorm.y;
        objectTwo.speedX += impulse * objectOne.mass * collisionVectorNorm.x;
        objectTwo.speedY += impulse * objectOne.mass * collisionVectorNorm.y;
      }
    }
  }
};

var borderCollisionDetection = function borderCollisionDetection() {
  var collisionLimitXLeft = 1;
  var collisionLimitXRight = window.outerWidth - 30;
  var collisionLimitYTop = 100;
  var collisionLimitYBottom = body.getBoundingClientRect().height - 70;
  var speedReset = 0.95;
  var bubble;

  for (var i = 0; i < bubblesContainer.length; i++) {
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
};

function intersectionCircles(posXOne, posYOne, radiusOne, posXTwo, posYTwo, radiusTwo) {
  var distanceBetweenCircles = (posXOne - posXTwo) * (posXOne - posXTwo) + (posYOne - posYTwo) * (posYOne - posYTwo);
  return distanceBetweenCircles <= (radiusOne + radiusTwo) * (radiusOne + radiusTwo);
}

function GetRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function GetRandomNumberFloat(min, max) {
  return Math.random() * (max - min) + min;
} ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////--------- SECTION SKILLS ---------/////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


var sourceLogos = "./assets/icons/";
var selectSkills = document.querySelector('.logos__select');
selectSkills.addEventListener('change', function (e) {
  console.log(e.target.value);
  CreateLogoSkill(e.target.value);
});

var _loop = function _loop(_index4) {
  typeSkills[_index4].addEventListener("click", function (e) {
    CreateLogoSkill(_index4);
  });
};

for (var _index4 = 0; _index4 < typeSkills.length; _index4++) {
  _loop(_index4);
}

var SKILLS = [["html", "css", "javascript", "pug", "sass", "git", "github", "vscode"], ["csharp", "netcore", "xaml", "git", "github", "vs"], ["csharp", "netcore", "xamarin", "xaml", "vs", "git", "github"], ["c", "csharp", "xaml", "labview", "siemens", "git", "github"], ["vscode", "vs", "git", "labview", "teststand", "cvi", "tiaportal"]];
var SKILLSNAME = [["html", "css", "javascript", "pug", "sass", "git", "git hub", "visual studio code"], ["c#", "netcore", "xaml", "git", "github", "visual studio"], ["c#", "netcore", "xamarin forms", "xaml", "visual studio", "git", "github"], ["c", "c#", "xaml", "labview (Graphic)", "scl, kop", "git", "github"], ["visual studio code", "visual studio", "git", "labview", "teststand", "lab/windows cvi", "tia portal"]];

var CreateLogoSkill = function CreateLogoSkill(numberSkill) {
  do {
    containerSkills.removeChild(containerSkills.lastChild);
  } while (containerSkills.lastChild.className === "logos__name");

  for (var _index5 = 0; _index5 < SKILLS[numberSkill].length; _index5++) {
    var newLogoTech = document.createElement("div");
    newLogoTech.classList = "logos__name";
    containerSkills.appendChild(newLogoTech);
    newLogoTech.style.zIndex = "1";
    var newLogoBubble = document.createElement("div");
    newLogoBubble.classList = "logos__bubble";
    newLogoTech.appendChild(newLogoBubble);
    var newLogoImage = document.createElement("img");
    newLogoImage.classList = "logo";
    newLogoImage.src = sourceLogos + SKILLS[numberSkill][_index5] + "-logo.svg";
    newLogoImage.alt = "logo " + SKILLS[numberSkill][_index5];
    newLogoBubble.appendChild(newLogoImage);
    var newLogoName = document.createElement("span");
    newLogoName.textContent = SKILLSNAME[numberSkill][_index5];
    newLogoTech.appendChild(newLogoName);
  }
}; ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////--------- SECTION PROJECTS ---------/////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


var projectsZoom = document.querySelectorAll(".project__options--zoom");
var body = document.querySelector("body");
var sourcePhotos = "./assets/photos/project_";
var Title = ["Draw Board", "Test Sequence", "Electronic Encyclopedia"];
var Technologies = [["html", "css", "javascript", "pug", "sass"], ["csharp", "netcore", "xaml", "sql", "mysql", "git", "github"], ["csharp", "netcore", "xamarin", "xaml"], ["c", "csharp", "xaml", "labview"], ["vscode", "vs", "git", "labview"]];
var Repositories = ["https://aletzman.github.io/", "https://github.com/AletzMan", "https://aletzman.github.io/"];

var CreateProject = function CreateProject() {
  for (var _index6 = 0; _index6 < 2; _index6++) {
    var newProject = project.cloneNode(true);
    containerProjects.appendChild(newProject);
  }

  EditProjects();
};

var EditProjects = function EditProjects() {
  var projects = document.querySelectorAll(".project");
  var projectsTitle = document.querySelectorAll(".project__title");
  var projectsTechnologies = document.querySelectorAll(".project__technologies");
  var projectsImage = document.querySelectorAll(".project__image");
  var projectsRepository = document.querySelectorAll(".project__options--repository");
  var projectsPreview = document.querySelectorAll(".project__options--linkpreview");
  projectsZoom = document.querySelectorAll(".project__options--zoom");

  var _loop2 = function _loop2(_index7) {
    projectsTitle[_index7].innerHTML = Title[_index7];

    Technologies[_index7].forEach(function (namelogo) {
      var newContainer = document.createElement("div");
      newContainer.classList = "project__technologies--container";

      projectsTechnologies[_index7].appendChild(newContainer);

      var newImgTech = document.createElement("img");
      newImgTech.src = sourceLogos + namelogo + "-logo.svg";
      newImgTech.alt = "logo" + namelogo;
      newImgTech.classList = "project__technologies--image";
      newContainer.appendChild(newImgTech);
      var newImgDescription = document.createElement("span");
      newImgDescription.textContent = namelogo;
      newImgDescription.classList = "project__technologies--label";
      newContainer.appendChild(newImgDescription);
    });

    projectsImage[_index7].src = sourcePhotos + _index7 + ".jpg";
    projectsRepository[_index7].href = Repositories[_index7];
  };

  for (var _index7 = 0; _index7 < projects.length; _index7++) {
    _loop2(_index7);
  }

  AsignEvent();
};

var containerCreate = false;

var AsignEvent = function AsignEvent() {
  var projects = document.querySelector(".projects");
  projectsZoom.forEach(function (element, index) {
    element.addEventListener("mouseup", function () {
      containerCreate = false;
      var newPreviewContainer = document.createElement("div");
      newPreviewContainer.classList = "previewContainer";
      newPreviewContainer.style.height = window.innerHeight + 18 + "px";
      body.appendChild(newPreviewContainer);
      newPreviewContainer.style.top = scrollY + "px";
      newPreviewContainer.style.left = "0px";
      var newPreview = document.createElement("div");
      newPreview.classList = "previewContainer__preview";
      newPreviewContainer.appendChild(newPreview);
      var newPreviewImage = document.createElement("img");
      newPreviewImage.classList = "previewContainer__preview--image";
      newPreviewImage.src = sourcePhotos + index + ".jpg";
      newPreview.appendChild(newPreviewImage);
      body.style.overflowX = "hidden";
      body.style.overflowY = "hidden";
      setTimeout(function () {
        containerCreate = true;
      }, 1200);
    });
  });
};

body.addEventListener("mouseup", function () {
  if (containerCreate) {
    do {
      body.removeChild(body.lastChild);
    } while (body.lastChild.className === "previewContainer");

    body.style.overflowX = "auto";
    body.style.overflowY = "auto";
  }
}); ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////--------- MENU MOBIL ---------/////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

var nameTagMenu = ["HOME", "SKILLS", "PROJECTS", "ABOUT", "CONTACT"];
var positionMenuselected = 0;
var indexMenuCurrent = 0;
var indexMenuBefore = 0;
var numberOfSectionsDisplaced = 0;

var _loop3 = function _loop3(_index8) {
  menuMobil.item(_index8).addEventListener('mousedown', function (e) {
    sections.forEach(function (section) {
      section.style.opacity = 0;
    });
    indexMenuBefore = indexMenuCurrent;
    indexMenuCurrent = _index8;
    numberOfSectionsDisplaced = Math.abs(indexMenuCurrent - indexMenuBefore);
    console.log(sections[_index8].getBoundingClientRect().height);
    var scrollPosition = 0;

    for (var numberSection = 0; numberSection < _index8; numberSection++) {
      scrollPosition += sections[numberSection].getBoundingClientRect().height + 80;
    }

    scrollPosition -= 16;
    scroll(0, scrollPosition);
    setTimeout(function () {
      sections.forEach(function (section) {
        section.style.opacity = 1;
      });
    }, 500);
  });
};

for (var _index8 = 0; _index8 < menuMobil.length; _index8++) {
  _loop3(_index8);
}

window.addEventListener("resize", function () {
  positionMenuselected = menuMobilContainer.getBoundingClientRect().width / 16 / 5 * (indexMenuCurrent + 1) - menuMobilSelect.getBoundingClientRect().width / 16 - 0.2;
  menuMobilSelect.style.left = "".concat(positionMenuselected, "rem");
});
document.addEventListener("scroll", function () {
  if (scrollY) {
    var designMobil = window.getComputedStyle(menuMobilContainer, null).getPropertyValue("display") == "none" ? false : true;

    var _loop4 = function _loop4(_index9) {
      if (sections[_index9].getBoundingClientRect().y < 350 && sections[_index9].getBoundingClientRect().y > -20) {
        if (designMobil) {
          positionMenuselected = menuMobilContainer.getBoundingClientRect().width / 16 / 5 * (_index9 + 1) - menuMobilSelect.getBoundingClientRect().width / 16 - 0;
          menuMobilSelect.style.left = "".concat(positionMenuselected, "rem");
          setTimeout(function () {
            menuMobil.forEach(function (section) {
              section.style.filter = "invert(1)";
              section.style.top = "0.65rem";
            });
            menuMobil[_index9].style.filter = "brightness(1)";
            menuMobil[_index9].style.top = "0rem";
            menuMobilSelect.innerText = nameTagMenu[_index9];
          }, 200);
        } else {
          selectItemMenu.style.left = menuDesktopArea.item(_index9).getBoundingClientRect().left - menuDesktopArea.item(0).getBoundingClientRect().left - 1 + "px";
          menuDesktop.forEach(function (elementMenuUnSelected) {
            elementMenuUnSelected.style.color = "var(--color_font)";
          });
          menuDesktop.item(_index9).style.color = "var(--color_activated)";
        }
      }
    };

    for (var _index9 = 0; _index9 < sections.length; _index9++) {
      _loop4(_index9);
    }
  }
});