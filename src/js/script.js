function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
// about page
document.getElementById('rightArrow').addEventListener('click', function() {
    window.location.href = 'education.html';  
    
});

// buttons on about page 

// hobbies btn


// Create modal elements
const modal = document.createElement('div');
modal.classList.add('modal');

const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');

// Create close button
const closeButton = document.createElement('button');
closeButton.classList.add('close-btn');
closeButton.innerHTML = '&times;'; // Close icon (× character)

const enlargedImage = document.createElement('img');
enlargedImage.alt = "Close-up view of a person reading a book.";
const imageDescription = document.createElement('p');

// Append content to modal
modalContent.appendChild(closeButton);
modalContent.appendChild(enlargedImage);
modalContent.appendChild(imageDescription);
modal.appendChild(modalContent);
document.body.appendChild(modal); // Append modal to the body

// Event listener for the Hobbies button
document.querySelector('.btn.hobbies').addEventListener('click', function() {
    const hobbiesImage = document.querySelector('.image-container img'); // Get the hobbies image
    hobbiesImage.alt = "A detailed view of the hobbies image"; 

    // Set modal content
    enlargedImage.src = hobbiesImage.src; // Set enlarged image source
    imageDescription.textContent = "Traveling has always been a profound passion of mine,allowing me to explore diverse cultures and landscapes. One of my most memorable experiences was my visit to the Hawassa region in Ethiopia. This vibrant area, known for its stunning natural beauty, captivated me from the moment I arrived.During my time there, I had the opportunity to capture the breath taking scenery of Lake Hawassa, especially during sunset. The way the golden rays of the sun reflected off the water created a mesmerizing view that I aimed to immortalize through my photography. This experience not only enriched my appreciation for nature but also honed my skills in capturing fleeting moments of beauty.Through my travels and photography, I strive to tell stories and share the unique perspectives I encounter. You can view more of my travel photography in the Adventure section of my portfolio. I look forward to continuing this journey, exploring new destinations, and further developing my photographic techniques."; // Set description text

    // Display the modal
    modal.style.display = 'flex'; // Use flex to center
});

// Close modal when clicking the close button
closeButton.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide the modal
    closeButton.alt = "Close the dialog or window";
});

// Close modal when clicking outside the content area
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none'; // Hide the modal
    }
});



// interest btn

 // Create modal elements for interests
 const interestModal = document.createElement('div');
 interestModal.classList.add('modal');

 const interestModalContent = document.createElement('div');
 interestModalContent.classList.add('modal-content');

 // Create close button
 const interestCloseButton = document.createElement('button');
 interestCloseButton.classList.add('close-btn');
 interestCloseButton.innerHTML = '&times;'; // Close icon (× character)

 const interestEnlargedImage = document.createElement('img');
 interestEnlargedImage.alt = "A person deeply engaged in reading a book in a cozy setting."; 
 const interestImageDescription = document.createElement('p');

 // Append content to modal
 interestModalContent.appendChild(interestCloseButton);
 interestModalContent.appendChild(interestEnlargedImage);
 interestModalContent.appendChild(interestImageDescription);
 interestModal.appendChild(interestModalContent);
 document.body.appendChild(interestModal); // Append modal to the body

 // Event listener for the Interests button
 document.querySelector('.btn.interest').addEventListener('click', function() {
     const interestImage = document.querySelector('.image-container img:nth-child(2)'); // Get the interest image
      interestImage.alt = "A person deeply engaged in reading a book in a cozy setting, surrounded by soft lighting and comfortable furniture.";
     


     // Set modal content
     interestEnlargedImage.src = interestImage.src; // Set enlarged image source
     interestImageDescription.textContent = "My interests are deeply rooted in my passion for photography, travel, and reading. Photography allows me to capture the beauty of the world around me, whether it's the vibrant colors of a bustling market or the serene landscapes I encounter on my journeys. Traveling fuels my curiosity and desire to explore new cultures, cuisines, and experiences, enriching my understanding of the world. Alongside this, reading provides me with an escape into different worlds and perspectives, inspiring my creativity and expanding my horizons. Together, these passions shape my worldview and continuously motivate me to seek new adventures and stories. " ;

     // Display the modal
     interestModal.style.display = 'flex'; // Use flex to center
 });

 // Close modal when clicking the close button
 interestCloseButton.addEventListener('click', function() {
     interestModal.style.display = 'none'; // Hide the modal
 });

 // Close modal when clicking outside the content area
 interestModal.addEventListener('click', function(event) {
     if (event.target === interestModal) {
         interestModal.style.display = 'none'; // Hide the modal
     }
 });

//  js for education page 
function openPDF() {
    window.open('./images/certificate-pic.png', '_blank');
}
// js for cv page 

function addSkills() {
    const skillsList = document.getElementById('skillsList');
    const existingSkills = Array.from(skillsList.getElementsByTagName('li')).map(li => li.textContent); // Get existing skills
    const newSkills = ['React', 'Node.js', 'Python']; // New skills to add

    // Add new skills only if they are not already in the list
    newSkills.forEach(skill => {
        if (!existingSkills.includes(skill)) {
            const newItem = document.createElement('li');
            newItem.textContent = skill;
            skillsList.appendChild(newItem); // Add the new item to the list
        }
    });

 
}
function toggleSkills() {
    const skillsList = document.getElementById('skillsList');
    const arrow = document.getElementById('downwardArrow'); // Select the arrow element
    const newSkills = ['React', 'Node.js', 'Python']; // New skills to toggle
    const existingSkills = Array.from(skillsList.getElementsByTagName('li')).map(li => li.textContent); // Get existing skills

    // Check if all new skills are already present
    if (newSkills.every(skill => existingSkills.includes(skill))) {
        // If all new skills are present, remove them
        newSkills.forEach(skill => {
            const itemToRemove = Array.from(skillsList.getElementsByTagName('li')).find(li => li.textContent === skill);
            if (itemToRemove) {
                skillsList.removeChild(itemToRemove);
            }
        });
        // Revert the arrow to its original position
        arrow.classList.remove('rotated');
    } else {
        // Otherwise, add the new skills
        newSkills.forEach(skill => {
            if (!existingSkills.includes(skill)) {
                const newItem = document.createElement('li');
                newItem.textContent = skill;
                skillsList.appendChild(newItem);
            }
        });
        // Rotate the arrow 180 degrees
        arrow.classList.add('rotated');
    }
}
