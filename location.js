document.addEventListener('DOMContentLoaded', function() {
    const locations = {
        hyderabad: {
            heading: 'Reservations - Hyderabad',
            description: 'Let us host your special party in Hyderabad. We love doing things like that.',
            reserveLink: '#',
            backgroundImage: './images/Location-images/hyderabad.png',
            address: 'Hyderabad Address',
            phoneNumber: 'Hyderabad Phone Number',
            hours: 'Hyderabad Hours'
        },
        chennai: {
            heading: 'Reservations - Chennai',
            description: 'Let us host your special party in Chennai. We love doing things like that.',
            reserveLink: '#',
            backgroundImage: './images/Location-images/chennai.png',
            address: 'Chennai Address',
            phoneNumber: 'Chennai Phone Number',
            hours: 'Chennai Hours'
        },
        mumbai: {
            heading: 'Reservations - Mumbai',
            description: 'Let us host your special party in Mumbai. We love doing things like that.',
            reserveLink: '#',
            backgroundImage: './images/Location-images/mumbai.png',
            address: 'Mumbai Address',
            phoneNumber: 'Mumbai Phone Number',
            hours: 'Mumbai Hours'
        },
        bengaluru: {
            heading: 'Reservations - Bengaluru',
            description: 'Let us host your special party in Bengaluru. We love doing things like that.',
            reserveLink: '#',
            backgroundImage: './images/Location-images/bengaluru.png',
            address: 'Bengaluru Address',
            phoneNumber: 'Bengaluru Phone Number',
            hours: 'Bengaluru Hours'
        },
        delhi: {
            heading: 'Reservations - Delhi',
            description: 'Let us host your special party in Delhi. We love doing things like that.',
            reserveLink: '#',
            backgroundImage: './images/Location-images/delhi.png',
            address: 'Delhi Address',
            phoneNumber: 'Delhi Phone Number',
            hours: 'Delhi Hours'
        }
        // Add more locations as needed
    };

    const urlParams = new URLSearchParams(window.location.search);
    const locationParam = urlParams.get('city');
    const locationContent = document.getElementById('locationContent');
    const locationDetails = document.getElementById('location-details');

    // Load content based on the location parameter in the URL
    if (locationParam && locations.hasOwnProperty(locationParam)) {
        const location = locations[locationParam];
        const locationHTML = `
            <div class="c-split__col" style="padding: 40px; background-image: url('${location.backgroundImage}'); ">
                <div class="c-split__col-inner">
                    <div class="c-split__content content" >
                        <h2 class="h2 c-split__heading" style="padding: 30px 0; color: #f5f5f5;">${location.heading}</h2>
                        <p style="color: #f5f5f5;">${location.description}</p>
                        <a style="color:white" href="./reservation.html" ><p class="ubuntu-regular element1" id="location-arrow-color" style="margin-top: 65px; color: #f5f5f5;" id="location-arrow-color"><span class="Takeout_Delivery" style="color:white" id="location-arrow-color">Reserve now</span><span class="arrow-Animation" style="color: #f5f5f5;" id="location-arrow-color">→</span></p></a>
                    </div>
                </div>
            </div>
        `;
        locationContent.innerHTML = locationHTML;

        // Update location details
        locationDetails.innerHTML = `
            <h2 class="h1 ubuntu-regular">Hours & Location</h2>
            <p class="ubuntu-regular">
                <a href="#" target="_blank" rel="noopener" data-bb-track="button" data-bb-track-on="click" data-bb-track-category="Address" data-bb-track-action="Click" data-bb-track-label="Location">
                    ${location.address},
                    <br>
                    City, State ZipCode
                </a>
                <br>
                <a href="#" data-bb-track="button" data-bb-track-on="click" data-bb-track-category="Phone Number" data-bb-track-action="Click" data-bb-track-label="Location">${location.phoneNumber}</a>
            </p>
            <p class="ubuntu-regular">${location.hours}</p>
        `;
    }
});
