// document.addEventListener('DOMContentLoaded', function() {
//     // Function to toggle visibility of dashboard sections based on navigation clicks
//     function toggleDashboardSection(sectionId) {
//         // Hide all dashboard sections
//         const dashboardSections = document.querySelectorAll('.dashboard-section');
//         dashboardSections.forEach(section => {
//             section.style.display = 'none';
//         });

//         // Show the selected dashboard section
//         const selectedSection = document.getElementById(sectionId);
//         if (selectedSection) {
//             selectedSection.style.display = 'block';
//         }
//     }

//     // Initial display: Show the Super Admin Dashboard by default
//     toggleDashboardSection('superAdminDashboard');

//     // Event listener for navigation links
//     const navLinks = document.querySelectorAll('nav ul li a');
//     navLinks.forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             const sectionId = link.getAttribute('href').substring(1); // Remove the # symbol
//             toggleDashboardSection(sectionId);
//         });
//     });

//     // Example: Simulate form submission (console log the form data)
//     const addAdminForm = document.querySelector('#adminDashboard form');
//     if (addAdminForm) {
//         addAdminForm.addEventListener('submit', function(event) {
//             event.preventDefault(); // Prevent actual form submission

//             // Get form data
//             const formData = new FormData(addAdminForm);
//             const formDataObject = {};
//             formData.forEach((value, key) => {
//                 formDataObject[key] = value;
//             });

//             // Log the form data (in real application, you would send this data to the server)
//             console.log('Form data:', formDataObject);

//             // Optionally, reset the form after submission
//             addAdminForm.reset();
//         });
//     }
// });



document.addEventListener('DOMContentLoaded', function() {
    // Function to show a specific dashboard section and hide others
    function showDashboardSection(sectionId) {
        // Hide all sections
        var sections = document.querySelectorAll('section');
        sections.forEach(function(section) {
            section.style.display = 'none';
        });

        // Show the selected section
        var selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    }

    // Show default section on page load (Super Admin Dashboard)
    showDashboardSection('superAdminDashboard');

    // Add event listeners to navigation links to toggle sections
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            var sectionId = link.getAttribute('href').substring(1); // Get section ID from href
            showDashboardSection(sectionId); // Show corresponding section
        });
    });

    // Handle form submission for adding new admin
    var addAdminForm = document.getElementById('addAdminForm');
    if (addAdminForm) {
        addAdminForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            // Fetch form input values
            var name = document.getElementById('name').value;
            var address = document.getElementById('address').value;
            var contact = document.getElementById('contact').value;
            var email = document.getElementById('email').value;
            var cars = document.getElementById('cars').value;

            // Perform basic validation (you can add more validation as needed)
            if (name && email) {
                // Simulate adding admin (replace with actual logic)
                var newAdmin = {
                    name: name,
                    address: address,
                    contact: contact,
                    email: email,
                    cars: cars
                };

                // Display added admin details (you can replace this with your logic)
                console.log('New Admin Added:', newAdmin);

                // Clear form fields after submission
                addAdminForm.reset();
            } else {
                alert('Name and Email are required!');
            }
        });
    }
});
