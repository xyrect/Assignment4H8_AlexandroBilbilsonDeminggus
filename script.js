function showEditForm() {
    document.getElementById('profileSection').style.display = 'none';
    document.getElementById('editForm').style.display = 'block';

    // Load data from local storage
    document.getElementById('editName').value = localStorage.getItem('name') || document.getElementById('name').textContent;
    document.getElementById('editJob').value = localStorage.getItem('job') || document.getElementById('job').textContent;
    document.getElementById('editAvailability').value = localStorage.getItem('availability') || document.getElementById('availability').textContent;
    document.getElementById('editAge').value = localStorage.getItem('age') || document.getElementById('age').textContent;
    document.getElementById('editLocation').value = localStorage.getItem('location') || document.getElementById('location').textContent;
    document.getElementById('editExperience').value = localStorage.getItem('experience') || document.getElementById('experience').textContent;
    document.getElementById('editEmail').value = localStorage.getItem('email') || document.getElementById('email').textContent;

    // Set the preview image to the saved profile picture
    document.getElementById('profilePicPreview').src = localStorage.getItem('profilePic') || 'https://via.placeholder.com/100';
}

function saveProfile() {
    // Save data to local storage
    localStorage.setItem('name', document.getElementById('editName').value);
    localStorage.setItem('job', document.getElementById('editJob').value);
    localStorage.setItem('availability', document.getElementById('editAvailability').value);
    localStorage.setItem('age', document.getElementById('editAge').value);
    localStorage.setItem('location', document.getElementById('editLocation').value);
    localStorage.setItem('experience', document.getElementById('editExperience').value);
    localStorage.setItem('email', document.getElementById('editEmail').value);

    // Update profile details on the page
    document.getElementById('name').textContent = localStorage.getItem('name');
    document.getElementById('job').textContent = localStorage.getItem('job');
    document.getElementById('availability').textContent = localStorage.getItem('availability');
    document.getElementById('age').textContent = localStorage.getItem('age');
    document.getElementById('location').textContent = localStorage.getItem('location');
    document.getElementById('experience').textContent = localStorage.getItem('experience');
    document.getElementById('email').textContent = localStorage.getItem('email');

    // Update the profile picture
    const profilePicInput = document.getElementById('editProfilePic');
    if (profilePicInput.files && profilePicInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profilePic').src = e.target.result; // Update the displayed profile picture
            localStorage.setItem('profilePic', e.target.result); // Save the image in local storage
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }

    document.getElementById('editForm').style.display = 'none';
    document.getElementById('profileSection').style.display = 'block';
}

function previewImage() {
    const file = document.getElementById('editProfilePic').files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
        document.getElementById('profilePicPreview').src = reader.result;
    };
    if (file) {
        reader.readAsDataURL(file);
    } else {
        document.getElementById('profilePicPreview').src = 'https://via.placeholder.com/100';
    }
}

// Load profile data from local storage on page load
window.onload = function() {
    if (localStorage.getItem('name')) {
        document.getElementById('name').textContent = localStorage.getItem('name');
        document.getElementById('job').textContent = localStorage.getItem('job');
        document.getElementById('availability').textContent = localStorage.getItem('availability');
        document.getElementById('age').textContent = localStorage.getItem('age');
        document.getElementById('location').textContent = localStorage.getItem('location');
        document.getElementById('experience').textContent = localStorage.getItem('experience');
        document.getElementById('email').textContent = localStorage.getItem('email');
        document.getElementById('profilePic').src = localStorage.getItem('profilePic') || 'https://via.placeholder.com/100';
    }
};