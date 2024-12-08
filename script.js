// Function to copy code from the section
function copySection(button) {
    // Find the textarea element in the same section as the clicked button
    const textarea = button.closest('section').querySelector('textarea');
    
    // Get the code from the textarea
    const codeText = textarea.value;
    
    // Copy the code to the clipboard
    navigator.clipboard.writeText(codeText).then(() => {
        // Update button text after success
        button.textContent = 'Copied!';
        setTimeout(() => (button.textContent = 'Copy Code'), 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// Function to toggle the navigation visibility
function toggleNav() {
    const nav = document.getElementById('side-nav');
    const mainContent = document.getElementById('main-content');
    const toggleButton = document.querySelector('.toggle-nav-btn');

    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden');
        mainContent.classList.remove('full-width');
        toggleButton.textContent = 'Hide Navigation';
    } else {
        nav.classList.add('hidden');
        mainContent.classList.add('full-width');
        toggleButton.textContent = 'Show Navigation';
    }
}

// Initialize CodeMirror for all textareas
function initializeCodeMirror() {
    const codeAreas = document.querySelectorAll('.code-area');
    codeAreas.forEach(function (area) {
        CodeMirror.fromTextArea(area, {
            mode: "python",
            theme: "dracula",
            lineNumbers: true,
            readOnly: true,  // Makes the editor read-only
        });
    });
}

// Initialize CodeMirror on page load
window.onload = initializeCodeMirror;
