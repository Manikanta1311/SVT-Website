// Popular Indian cities with their images (fallback data)
const indianCities = [
    { name: 'Hyderabad', region: 'Telangana', icon: '🏛️', image: 'https://images.unsplash.com/photo-1560967596-c0b69d12d063?w=100&q=80' },
    { name: 'Bangalore', region: 'Karnataka', icon: '🌆', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=100&q=80' },
    { name: 'Mumbai', region: 'Maharashtra', icon: '🌃', image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=100&q=80' },
    { name: 'Delhi', region: 'Delhi NCR', icon: '🏰', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=100&q=80' },
    { name: 'Chennai', region: 'Tamil Nadu', icon: '🏖️', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=100&q=80' },
    { name: 'Kolkata', region: 'West Bengal', icon: '🌉', image: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=100&q=80' },
    { name: 'Pune', region: 'Maharashtra', icon: '🏙️', image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=100&q=80' },
    { name: 'Ahmedabad', region: 'Gujarat', icon: '🕌', image: 'https://images.unsplash.com/photo-1609619385002-f40d5b30c2b5?w=100&q=80' },
    { name: 'Jaipur', region: 'Rajasthan', icon: '🏰', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=100&q=80' },
    { name: 'Surat', region: 'Gujarat', icon: '🏭', image: 'https://images.unsplash.com/photo-1605649487212-47b9fb5c6723?w=100&q=80' },
    { name: 'Lucknow', region: 'Uttar Pradesh', icon: '🕌', image: 'https://images.unsplash.com/photo-1591361795-d4e5e5e1e8c4?w=100&q=80' },
    { name: 'Kanpur', region: 'Uttar Pradesh', icon: '🏭', image: 'https://images.unsplash.com/photo-1573226220725-e9e9b5d7e7ef?w=100&q=80' },
    { name: 'Nagpur', region: 'Maharashtra', icon: '🍊', image: 'https://images.unsplash.com/photo-1573226220725-e9e9b5d7e7ef?w=100&q=80' },
    { name: 'Indore', region: 'Madhya Pradesh', icon: '🏛️', image: 'https://images.unsplash.com/photo-1573226220725-e9e9b5d7e7ef?w=100&q=80' },
    { name: 'Thane', region: 'Maharashtra', icon: '🌆', image: 'https://images.unsplash.com/photo-1573226220725-e9e9b5d7e7ef?w=100&q=80' },
    { name: 'Bhopal', region: 'Madhya Pradesh', icon: '🏞️', image: 'https://images.unsplash.com/photo-1573226220725-e9e9b5d7e7ef?w=100&q=80' },
    { name: 'Visakhapatnam', region: 'Andhra Pradesh', icon: '⛱️', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=100&q=80' },
    { name: 'Vijayawada', region: 'Andhra Pradesh', icon: '🏞️', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=100&q=80' },
    { name: 'Guntur', region: 'Andhra Pradesh', icon: '🌾', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=100&q=80' },
    { name: 'Macherla', region: 'Andhra Pradesh', icon: '🏘️', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=100&q=80' },
    { name: 'Nellore', region: 'Andhra Pradesh', icon: '🌾', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=100&q=80' },
    { name: 'Kurnool', region: 'Andhra Pradesh', icon: '🏞️', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=100&q=80' },
    { name: 'Tirupati', region: 'Andhra Pradesh', icon: '🛕', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=100&q=80' },
    { name: 'Warangal', region: 'Telangana', icon: '🏰', image: 'https://images.unsplash.com/photo-1560967596-c0b69d12d063?w=100&q=80' },
    { name: 'Nizamabad', region: 'Telangana', icon: '🏘️', image: 'https://images.unsplash.com/photo-1560967596-c0b69d12d063?w=100&q=80' }
];

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Owner name hover effect
    const ownerName = document.querySelector('.owner-name');
    const ownerPopup = document.querySelector('.owner-image-popup');
    
    if (ownerName && ownerPopup) {
        ownerName.addEventListener('mouseenter', function() {
            ownerPopup.style.opacity = '1';
        });
        
        ownerName.addEventListener('mouseleave', function() {
            ownerPopup.style.opacity = '0';
        });
        
        ownerName.addEventListener('mousemove', function(e) {
            // Position popup near cursor
            const x = e.clientX + 20;
            const y = e.clientY + 20;
            
            // Make sure popup doesn't go off screen
            const popupWidth = 320;
            const popupHeight = 460;
            
            let finalX = x;
            let finalY = y;
            
            // Check right edge
            if (x + popupWidth > window.innerWidth) {
                finalX = e.clientX - popupWidth - 20;
            }
            
            // Check bottom edge
            if (y + popupHeight > window.innerHeight) {
                finalY = e.clientY - popupHeight - 20;
            }
            
            ownerPopup.style.left = finalX + 'px';
            ownerPopup.style.top = finalY + 'px';
        });
    }
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Form submission handler - WHATSAPP INTEGRATION
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const pickup = document.getElementById('pickup').value;
            const destination = document.getElementById('destination').value;
            const date = document.getElementById('date').value;
            const vehicle = document.getElementById('vehicle').options[document.getElementById('vehicle').selectedIndex].text;
            
            // Create WhatsApp message with proper formatting
            const message = `*🚗 New Booking Request - Sri Veeranjaneya Travels*%0A%0A` +
                           `*Name:* ${name}%0A` +
                           `*Phone:* ${phone}%0A` +
                           `*Pickup Location:* ${pickup}%0A` +
                           `*Destination:* ${destination}%0A` +
                           `*Travel Date:* ${date}%0A` +
                           `*Vehicle:* ${vehicle}%0A%0A` +
                           `_Please confirm this booking. Thank you!_`;
            
            const whatsappNumber = '919963850773';
            
            // Open WhatsApp with the booking message
            window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
            
            // Show success message
            alert('✅ Thank you! Redirecting to WhatsApp to send your booking request.\n\nWe will confirm your booking shortly.');
            
            // Reset form
            this.reset();
        });
    }
    
    // Add animation on scroll for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards for scroll animation
    document.querySelectorAll('.service-card, .feature-card, .contact-card, .testimonial-card, .area-card, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // Active navigation link on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // Add current date as minimum for date picker
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
    
    // Phone number validation
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            // Remove non-numeric characters
            this.value = this.value.replace(/[^0-9]/g, '');
            
            // Limit to 10 digits
            if (this.value.length > 10) {
                this.value = this.value.slice(0, 10);
            }
        });
    }
    
    // Form field animations
    const formInputs = document.querySelectorAll('.form-group input, .form-group select');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
    
    // Hide floating buttons when scrolled to bottom (near footer)
    window.addEventListener('scroll', function() {
        const footer = document.querySelector('footer');
        const whatsappFloat = document.querySelector('.whatsapp-float');
        const callFloat = document.querySelector('.call-float');
        
        if (footer && whatsappFloat && callFloat) {
            const footerRect = footer.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (footerRect.top < windowHeight) {
                whatsappFloat.style.opacity = '0';
                whatsappFloat.style.pointerEvents = 'none';
                callFloat.style.opacity = '0';
                callFloat.style.pointerEvents = 'none';
            } else {
                whatsappFloat.style.opacity = '1';
                whatsappFloat.style.pointerEvents = 'all';
                callFloat.style.opacity = '1';
                callFloat.style.pointerEvents = 'all';
            }
        }
    });
    
    console.log('Sri Veeranjaneya Travels website loaded successfully!');
    console.log('🚗 All features active: Mobile Menu, FAQ Accordion, WhatsApp Booking, Scroll Animations');
});

// Google Analytics (Optional - Add your GA tracking code here)
// Example:
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'YOUR-GA-MEASUREMENT-ID');
