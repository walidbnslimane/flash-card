let currentCardIndex = 1;

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });
});

function nextCard(isTrue) {
    const currentCard = document.getElementById(`card${currentCardIndex}`);
    currentCard.classList.remove('active');
    currentCardIndex++;
    if (currentCardIndex > 10) currentCardIndex = 1; // Loop back to the first card
    const nextCard = document.getElementById(`card${currentCardIndex}`);
    nextCard.classList.add('active');
}

function showIKnow(imageId1, imageId2, imageId3, imageId4, imageId5, imageId6, imageId7, imageId8, imageId9, imageId10) {
    const image1 = document.getElementById(imageId1);
    const image2 = document.getElementById(imageId2);
    const image3 = document.getElementById(imageId3);
    const image4 = document.getElementById(imageId4);
    const image5 = document.getElementById(imageId5);
    const image6 = document.getElementById(imageId6);
    const image7 = document.getElementById(imageId7);
    const image8 = document.getElementById(imageId8);
    const image9 = document.getElementById(imageId9);
    const image10 = document.getElementById(imageId10);

    if (image1) {
        image1.style.opacity = '0.5';
        const text = document.createElement('div');
        text.textContent = 'I know';
        text.style.position = 'absolute';
        text.style.top = '50%';
        text.style.left = '50%';
        text.style.transform = 'translate(-50%, -50%)';
        text.style.color = 'white';
        text.style.fontSize = '24px';
        text.style.fontWeight = 'bold';
        text.style.zIndex = '10';
        image1.parentElement.appendChild(text);
        image1.dataset.textElement = text;
    }

    if (image2) {
        image2.style.opacity = '0.5';
        const text = document.createElement('div');
        text.textContent = 'I know';
        text.style.position = 'absolute';
        text.style.top = '50%';
        text.style.left = '50%';
        text.style.transform = 'translate(-50%, -50%)';
        text.style.color = 'white';
        text.style.fontSize = '24px';
        text.style.fontWeight = 'bold';
        text.style.zIndex = '10';
        image2.parentElement.appendChild(text);
        image2.dataset.textElement = text;
    }
    if (image3) {
        image3.style.opacity = '0.5';
        const text = document.createElement('div');
        text.textContent = 'I know';
        text.style.position = 'absolute';
        text.style.top = '50%';
        text.style.left = '50%';
        text.style.transform = 'translate(-50%, -50%)';
        text.style.color = 'white';
        text.style.fontSize = '24px';
        text.style.fontWeight = 'bold';
        text.style.zIndex = '10';
        image3.parentElement.appendChild(text);
        image3.dataset.textElement = text;
    }

    if (image4) {
        image2.style.opacity = '0.5';
        const text = document.createElement('div');
        text.textContent = 'I know';
        text.style.position = 'absolute';
        text.style.top = '50%';
        text.style.left = '50%';
        text.style.transform = 'translate(-50%, -50%)';
        text.style.color = 'white';
        text.style.fontSize = '24px';
        text.style.fontWeight = 'bold';
        text.style.zIndex = '10';
        image2.parentElement.appendChild(text);
        image2.dataset.textElement = text;
    } if (image5) {
        image1.style.opacity = '0.5';
        const text = document.createElement('div');
        text.textContent = 'I know';
        text.style.position = 'absolute';
        text.style.top = '50%';
        text.style.left = '50%';
        text.style.transform = 'translate(-50%, -50%)';
        text.style.color = 'white';
        text.style.fontSize = '24px';
        text.style.fontWeight = 'bold';
        text.style.zIndex = '10';
        image1.parentElement.appendChild(text);
        image1.dataset.textElement = text;
    }

    if (image6) {
        image2.style.opacity = '0.5';
        const text = document.createElement('div');
        text.textContent = 'I know';
        text.style.position = 'absolute';
        text.style.top = '50%';
        text.style.left = '50%';
        text.style.transform = 'translate(-50%, -50%)';
        text.style.color = 'white';
        text.style.fontSize = '24px';
        text.style.fontWeight = 'bold';
        text.style.zIndex = '10';
        image2.parentElement.appendChild(text);
        image2.dataset.textElement = text;
    } if (image7) {
        image1.style.opacity = '0.5';
        const text = document.createElement('div');
        text.textContent = 'I know';
        text.style.position = 'absolute';
        text.style.top = '50%';
        text.style.left = '50%';
        text.style.transform = 'translate(-50%, -50%)';
        text.style.color = 'white';
        text.style.fontSize = '24px';
        text.style.fontWeight = 'bold';
        text.style.zIndex = '10';
        image1.parentElement.appendChild(text);
        image1.dataset.textElement = text;
    }

    if (image8) {
        image2.style.opacity = '0.5';
        const text = document.createElement('div');
        text.textContent = 'I know';
        text.style.position = 'absolute';
        text.style.top = '50%';
        text.style.left = '50%';
        text.style.transform = 'translate(-50%, -50%)';
        text.style.color = 'white';
        text.style.fontSize = '24px';
        text.style.fontWeight = 'bold';
        text.style.zIndex = '10';
        image2.parentElement.appendChild(text);
        image2.dataset.textElement = text;
    } if (image9) {
        image1.style.opacity = '0.5';
        const text = document.createElement('div');
        text.textContent = 'I know';
        text.style.position = 'absolute';
        text.style.top = '50%';
        text.style.left = '50%';
        text.style.transform = 'translate(-50%, -50%)';
        text.style.color = 'white';
        text.style.fontSize = '24px';
        text.style.fontWeight = 'bold';
        text.style.zIndex = '10';
        image1.parentElement.appendChild(text);
        image1.dataset.textElement = text;
    }

    if (image10) {
        image2.style.opacity = '0.5';
        const text = document.createElement('div');
        text.textContent = 'I know';
        text.style.position = 'absolute';
        text.style.top = '50%';
        text.style.left = '50%';
        text.style.transform = 'translate(-50%, -50%)';
        text.style.color = 'white';
        text.style.fontSize = '24px';
        text.style.fontWeight = 'bold';
        text.style.zIndex = '10';
        image2.parentElement.appendChild(text);
        image2.dataset.textElement = text;
    }
}

function hideIKnow(imageId1, imageId2) {
    const image1 = document.getElementById(imageId1);
    const image2 = document.getElementById(imageId2);

    if (image1 && image1.dataset.textElement) {
        const textElement = image1.parentElement.querySelector('div');
        if (textElement) {
            textElement.remove();
        }
        delete image1.dataset.textElement;
        image1.style.opacity = '1'; // Reset opacity to fully visible
    }

    if (image2 && image2.dataset.textElement) {
        const textElement = image2.parentElement.querySelector('div');
        if (textElement) {
            textElement.remove();
        }
        delete image2.dataset.textElement;
        image2.style.opacity = '1'; // Reset opacity to fully visible
    }
}

function showIDontKnow(cardImage1, cardImage2, cardImage3) {
    const image1 = document.getElementById(cardImage1);
    const image2 = document.getElementById(cardImage2);
    const image3 = document.getElementById(cardImage3);
    // const image2 = document.getElementById(cardImage2);
    // const image1 = document.getElementById(cardImage1);
    // const image2 = document.getElementById(cardImage2);
    // const image1 = document.getElementById(cardImage1);
    // const image2 = document.getElementById(cardImage2);
    // const image1 = document.getElementById(cardImage1);
    // const image2 = document.getElementById(cardImage2);

    if (image1) {
        image1.style.opacity = '0.5';
        const text = document.createElement('div');
        text.textContent = "I don't know";
        text.style.position = 'absolute';
        text.style.top = '50%';
        text.style.left = '50%';
        text.style.transform = 'translate(-50%, -50%)';
        text.style.color = 'white';
        text.style.fontSize = '24px';
        text.style.fontWeight = 'bold';
        text.style.zIndex = '2';
        image1.parentElement.appendChild(text);
        image1.dataset.textElement = text;
    }

    if (image2) {
        image2.style.opacity = '0.5';
        const text = document.createElement('div');
        text.textContent = "I don't know";
        text.style.position = 'absolute';
        text.style.top = '50%';
        text.style.left = '50%';
        text.style.transform = 'translate(-50%, -50%)';
        text.style.color = 'white';
        text.style.fontSize = '24px';
        text.style.fontWeight = 'bold';
        text.style.zIndex = '2';
        image2.parentElement.appendChild(text);
        image2.dataset.textElement = text;
    }
    if (image3) {
        image3.style.opacity = '0.5';
        const text = document.createElement('div');
        text.textContent = "I don't know";
        text.style.position = 'absolute';
        text.style.top = '50%';
        text.style.left = '50%';
        text.style.transform = 'translate(-50%, -50%)';
        text.style.color = 'white';
        text.style.fontSize = '24px';
        text.style.fontWeight = 'bold';
        text.style.zIndex = '2';
        image3.parentElement.appendChild(text);
        image3.dataset.textElement = text;
    }
}

function hideIDontKnow(imageId1, imageId2) {
    const image1 = document.getElementById(imageId1);
    const image2 = document.getElementById(imageId2);

    if (image1 && image1.dataset.textElement) {
        const textElement = image1.parentElement.querySelector('div');
        if (textElement) {
            textElement.remove();
        }
        delete image1.dataset.textElement;
        image1.style.opacity = '1'; // Reset opacity to fully visible
    }

    if (image2 && image2.dataset.textElement) {
        const textElement = image2.parentElement.querySelector('div');
        if (textElement) {
            textElement.remove();
        }
        delete image2.dataset.textElement;
        image2.style.opacity = '1'; // Reset opacity to fully visible
    }
}