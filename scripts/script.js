// Updated sample data for property listings with image URLs
const properties = [
    { id: 1, title: 'Beautiful Apartment', price: 'rs.1000000000', phone: '9743339653', location: 'Bangalore', image: 'images/apartment.jpg', description: 'A BEAUTIFUL APARTMENT.' },
    { id: 2, title: 'Luxury Villa', price: 'rs.90000000000', location: 'Hyderabad', phone: '9743339653', image: 'images/Villa_Mistral-Singapore.webp', description: 'ELEGANT VILLA.' },
    { id: 3, title: 'Cozy Cottage', price: 'rs.499999999', location: 'Chennai', phone: '9743339653', image: 'images/cottage.jpg', description: 'BEAUTIFUL COTTAGE.' },
    { id: 4, title: 'Modern Condo', price: 'rs.56000000', location: 'Mumbai', phone: '9743339653', image: 'images/condo.webp', description: 'MODERN CONDO' },
    { id: 5, title: 'Elegant Mansion', price: 'rs.549353566', location: 'Kochi', phone: '9743339653', image: 'images/Gelbensande3.jpg', description: 'ELEGANT MANSION ' },
];

// Function to display property listings
function displayListings() {
    const listingsSection = document.getElementById('property-listings');

    properties.forEach(property => {
        const card = document.createElement('div');
        card.classList.add('property-card');
        card.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <h2>${property.title}</h2>
            <p>Price: ${property.price}</p>
            <p>Location: ${property.location}</p>
            <p>Phone: ${property.phone}</p>
        `;
        card.addEventListener('click', () => openPropertyModal(property));
        listingsSection.appendChild(card);
    });
}

// Function to open the detailed property description modal
function openPropertyModal(property) {
    const modal = document.getElementById('property-modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementsByClassName('close')[0];

    modalContent.innerHTML = `
        <img src="${property.image}" alt="${property.title}">
        <h2>${property.title}</h2>
        <p>Price: ${property.price}</p>
        <p>Location: ${property.location}</p>
        <p>${property.description}</p>
    `;

    modal.style.display = 'block';

    // Close the modal when the close button is clicked
    closeBtn.onclick = function () {
        modal.style.display = 'none';
    };

    // Close the modal when clicking outside the modal content
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Function to close the property modal
function closePropertyModal() {
    const modal = document.getElementById('property-modal');
    modal.style.display = 'none';
}

// Function to search properties by title, location, and phone
function searchProperties() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProperties = properties.filter(property =>
        property.title.toLowerCase().includes(searchInput) ||
        property.location.toLowerCase().includes(searchInput) ||
        property.phone.includes(searchInput)
    );

    // Clear existing listings
    const listingsSection = document.getElementById('property-listings');
    listingsSection.innerHTML = '';

    // Display filtered listings
    filteredProperties.forEach(property => {
        const card = document.createElement('div');
        card.classList.add('property-card');
        card.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <h2>${property.title}</h2>
            <p>Price: ${property.price}</p>
            <p>Location: ${property.location}</p>
            <p>Phone: ${property.phone}</p>
        `;
        card.addEventListener('click', () => openPropertyModal(property));
        listingsSection.appendChild(card);
    });
}

// Call the function to display listings when the page loads
window.onload = displayListings;
