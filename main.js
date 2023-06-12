class Card {
    constructor(templateId) {

    }
}
class CardTemplate {
    static all;
    constructor(properties) {

    }
}
var cards = {
    "0":new Card(),
};







function changeTheme(themeName) {
    document.getElementById("themeSheet").href = `themes/${themeName}.css`;
}











makeDraggable(document.getElementById("dragTest"));
makeDraggable(document.getElementById("dragTest2"));
makeDraggable(document.getElementById("dragTest3"));

var dragManager = (e) => {onDragMove(e)};
var dragEnder = (e) => {endDrag(e)};
var dragGhost = undefined;
var dragInstigator = undefined;

document.addEventListener('mousedown', (e) => {
  //if target is an eleemnt of class draggable
  if (e.target.classList.contains("draggable")) {
    onDragStart(e);
    document.addEventListener('mousemove', dragManager, true);
    document.addEventListener('mouseup', dragEnder, true);
  }
});
function endDrag(e) {
  onDragEnd(e);

  dragGhost.remove();
  dragGhost = undefined;
  dragInstigator = undefined;
  
  document.removeEventListener("mousemove", dragManager, true);
  document.removeEventListener('mouseup', dragEnder, true);
}
function onDragStart(e) {
  var elem = e.target;
    
  dragInstigator = elem;
  var ghost = elem.cloneNode(true);
  ghost.classList.remove("draggable");
  ghost.classList.add("drag_ghost");
  ghost.classList.add(".state-vanished");
  setTimeout(() => {
    ghost.classList.remove("state-vanished");
  },500);

  dragGhost = ghost;
  dragGhost.style.setProperty("--drag-top", e.clientY + "px"); 
  dragGhost.style.setProperty("--drag-left", e.clientX + "px");

  document.body.appendChild(ghost);
}
function onDragMove(e) {
  dragGhost.style.setProperty("--drag-top", e.clientY + "px"); 
  dragGhost.style.setProperty("--drag-left", e.clientX + "px");
}
function onDragEnd(e) {
  dragInstigator.style.setProperty("--drag-top", e.clientY + "px"); 
  dragInstigator.style.setProperty("--drag-left", e.clientX + "px");
  //move original card to place
}
function makeDraggable(elem) {
  elem.classList.add("draggable");
}