let darkMode = false;

function switchBackgroundColor() {
    let background = document.getElementById("body");
    let parentTitleElement = document.getElementById("title");
    let lightTitleElement = parentTitleElement.querySelector(".light-mode");
    let darkTitleElement = parentTitleElement.querySelector(".dark-mode");
    let parentStickElement = document.getElementById("stick");
    let lightStickElement = parentStickElement.querySelector(".light-mode");
    let darkStickElement = parentStickElement.querySelector(".dark-mode");
    let parentSwitchElement = document.getElementById("switch");
    let lightSwitchElement = parentSwitchElement.querySelector(".light-mode");
    let darkSwitchElement = parentSwitchElement.querySelector(".dark-mode");
    let parentDropElement = document.getElementById("drop");
    let lightDropElement = parentDropElement.querySelector(".light-mode");
    let darkDropElement = parentDropElement.querySelector(".dark-mode");
    let textElement = document.getElementById("text");
    let timelineElement = document.getElementById("timeline");
    let yearElement = document.getElementById("year");
    if (darkMode) {
        background.style.backgroundColor = 'white';
        lightTitleElement.style.display = 'block';
        darkTitleElement.style.display = 'none';
        lightStickElement.style.display = 'block';
        darkStickElement.style.display = 'none';
        lightSwitchElement.style.display = 'block';
        darkSwitchElement.style.display = 'none';
        lightDropElement.style.display = 'block';
        darkDropElement.style.display = 'none';
        textElement.style.color = 'black';
        timelineElement.style.color = 'grey';
        yearElement.style.color = 'grey';
        darkMode = false;
    } else {
        background.style.backgroundColor = 'black';
        lightTitleElement.style.display = 'none';
        darkTitleElement.style.display = 'block';
        lightStickElement.style.display = 'none';
        darkStickElement.style.display = 'block';
        lightSwitchElement.style.display = 'none';
        darkSwitchElement.style.display = 'block';
        lightDropElement.style.display = 'none';
        darkDropElement.style.display = 'block';
        textElement.style.color = 'white';
        timelineElement.style.color = 'white';
        yearElement.style.color = 'white';
        darkMode = true;
    }
}

let toggleButton = document.getElementById("switch");
toggleButton.onclick = switchBackgroundColor;
