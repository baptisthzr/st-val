const messages = [
    "Tu es sûre ?",
    "Vraiment sûre ??",
    "Quoicoubebou, s’il te plaît...",
    "Réfléchis-y juste un peu !",
    "Si tu dis non, je serai vraiment triste...",
    "Je serai très très très triste...",
    "Bon d’accord, j’arrête de demande...",
    "Je rigole, dis oui s’il te plaît ! ♥ "
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}