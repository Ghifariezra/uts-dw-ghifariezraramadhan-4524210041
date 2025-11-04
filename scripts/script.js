const formElements = document.querySelectorAll('#cvForm input, #cvForm textarea');
let checked = false;

formElements.forEach(input => {
    input.addEventListener('input', updatePreview);
});

function updatePreview() {
    const previewSkills = document.getElementById("preview-skills");

    document.getElementById('preview-name').textContent = document.getElementById('name').value || 'Nama Lengkap';
    
    document.getElementById('preview-education').textContent = document.getElementById('education').value;

    document.getElementById('preview-experience').textContent = document.getElementById('experience').value;
    
    previewSkills.innerHTML = '';
    const ul = document.createElement("ul");
    const skills = document.getElementById('skills').value
        .split(',')
        .map((skill) => skill.trim())
        .filter((skill) => skill !== "");
    
    skills.forEach((skill) => {
        const li = document.createElement("li");
        li.textContent = skill;
        ul.appendChild(li);
    });
    previewSkills.appendChild(ul);
    
    document.getElementById('preview-photo').src = document.getElementById('photo').value;
}

const previewButton = document.querySelector('.preview-button');
previewButton.addEventListener('click', () => {
    const areaPreview = document.querySelector('.area-pratinjau');

    if (!checked) {
        areaPreview.style.display = 'flex';
        previewButton.textContent = 'Hide Preview';
        checked = true;
        return;
    }

    areaPreview.style.display = 'none';
    previewButton.textContent = 'Show Preview';
    checked = false;
});

const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', (e) => {
    e.preventDefault();

    document.getElementById('cvForm').reset();

    document.getElementById('preview-name').textContent = '';
    document.getElementById('preview-education').textContent = '';
    document.getElementById('preview-experience').textContent = '';
    document.getElementById('preview-skills').innerHTML = '';
    document.getElementById('preview-photo').src = '';
    document.getElementById('preview-name').textContent = 'Nama Lengkap';
});