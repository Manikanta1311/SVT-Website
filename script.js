

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
    const ownerBackdrop = document.getElementById('ownerBackdrop');
    
    if (ownerName && ownerPopup) {
        const isMobile = () => window.innerWidth <= 768;

        // Desktop: hover to show, follow cursor
        ownerName.addEventListener('mouseenter', function() {
            if (!isMobile()) ownerPopup.style.opacity = '1';
        });

        ownerName.addEventListener('mouseleave', function() {
            if (!isMobile()) ownerPopup.style.opacity = '0';
        });

        ownerName.addEventListener('mousemove', function(e) {
            if (isMobile()) return;

            const popupWidth = 220;
            const popupHeight = 320;
            let x = e.clientX + 20;
            let y = e.clientY + 20;

            if (x + popupWidth > window.innerWidth) x = e.clientX - popupWidth - 20;
            if (y + popupHeight > window.innerHeight) y = e.clientY - popupHeight - 20;

            ownerPopup.style.left = x + 'px';
            ownerPopup.style.top = y + 'px';
        });

        // Mobile: tap to open centered popup
        ownerName.addEventListener('click', function(e) {
            if (!isMobile()) return;
            e.preventDefault();
            ownerPopup.classList.add('visible');
            ownerBackdrop.classList.add('visible');
        });

        // Close on backdrop tap
        if (ownerBackdrop) {
            ownerBackdrop.addEventListener('click', function() {
                ownerPopup.classList.remove('visible');
                ownerBackdrop.classList.remove('visible');
            });
        }

        // Close on popup tap (mobile)
        ownerPopup.addEventListener('click', function() {
            if (isMobile()) {
                ownerPopup.classList.remove('visible');
                ownerBackdrop.classList.remove('visible');
            }
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


