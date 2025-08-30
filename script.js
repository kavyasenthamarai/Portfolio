// Typing animation
const lines = [
    "AI | Data Science | Machine Learning Engineer",
    "Python | Real-Time Model Developer | Open to Opportunities",
    "Building modern, scalable, high-performance systems"
];

let currentLine = 0;
const typingText = document.querySelector(".typing-text");

function typeLine(line, index = 0) {
    if(index < line.length) {
        typingText.textContent += line[index];
        setTimeout(() => typeLine(line, index + 1), 50);
    } else {
        setTimeout(nextLine, 1000);
    }
}

function nextLine() {
    currentLine = (currentLine + 1) % lines.length;
    typingText.textContent = "";
    typeLine(lines[currentLine]);
}

typeLine(lines[currentLine]);

function viewProject(imgArray, title, description, tech, github, contributor) {
    const modal = document.getElementById('modal');
    const modalImages = document.querySelector('.modal-images');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTech = document.getElementById('modal-tech');
    const modalGithub = document.getElementById('modal-github');
    const modalContributor = document.getElementById('modal-contributor');

    modal.style.display = 'flex';

    // Clear previous images
    modalImages.innerHTML = '';

    // Add new images
    imgArray.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('modal-project-img'); // optional styling
        modalImages.appendChild(img);
    });

    // Set project details
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalTech.textContent = tech;
    modalGithub.href = github;
    modalContributor.textContent = contributor;
}

// Certificates only show one image
function viewCertificate(imgSrc) {
    const modal = document.getElementById('modal');
    const modalImages = document.querySelector('.modal-images');

    modal.style.display = 'flex';
    modalImages.innerHTML = ''; // clear previous images

    const img = document.createElement('img');
    img.src = imgSrc;
    img.classList.add('modal-project-img'); 
    modalImages.appendChild(img);

    // Clear details
    document.getElementById('modal-title').textContent = '';
    document.getElementById('modal-description').textContent = '';
    document.getElementById('modal-tech').textContent = '';
    document.getElementById('modal-github').href = '#';
    document.getElementById('modal-contributor').textContent = '';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
