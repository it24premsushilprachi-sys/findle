// Get the header element
const header = document.getElementById('header');

// Get all the icons in the header
const icons = header.getElementsByClassName('fa-solid');

// Add click event listeners to each icon
for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener('click', function() {
    // Remove the 'selected-icon' class from all icons
    for (let j = 0; j < icons.length; j++) {
      icons[j].classList.remove('selected-icon');
    }

    // Add the 'selected-icon' class to the clicked icon
    this.classList.add('selected-icon');
  });
}
