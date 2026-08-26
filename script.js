
    function toggleMenu() {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('active');
    }
    function toggleDropdown(event) {
                if (window.innerWidth <= 768) {
                    event.preventDefault();
                    const dropdown = document.getElementById('dropdown-menu');
                    dropdown.classList.toggle('open');
                }
    }
    //hamburger button.
    const hamburger=document.querySelector('.hamburger');
    const links=document.querySelector('.nav-links');

    hamburger.addEventListener('click', () =>{
        links.classList.toggle('show');
    })
    // Close menu when a link is clicked
    document.querySelectorAll('.links a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('nav-links').classList.remove('active');
        });
    });


    function showSection(event,targetSectionId){

        if(event){
            event.preventDefault();
        }
        var allSections=document.querySelectorAll('.page-section');

        allSections.forEach(function(section){
            section.classList.remove('active-section');
        });
        var chosenSection=document.getElementById(targetSectionId);
        if(chosenSection){
            chosenSection.classList.add('active-section');
        }
    }
    function openModal(id) {
        document.getElementById(id).classList.add('active');
        document.body.style.overflow = 'hidden'; // stop background scrolling
        }
        
        function closeModal(id) {
            document.getElementById(id).classList.remove('active');
            document.body.style.overflow = '';
        }

    // Close on clicking the dark overlay itself, not just the X button
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.active').forEach(m => {
                m.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    });

        function submitFormToGoogle(formEl,googleFormURL) {
            formEl.addEventListener('submit', function (event) {
                
        event.preventDefault();
        
        const formData=new FormData();
        formData.append("entry.111111111", document.getElementById("fullName").value);
        formData.append("entry.222222222", document.getElementById("phone").value);
        formData.append("entry.333333333", document.getElementById("email").value);
        formData.append("entry.444444444", document.getElementById("visitMessage").value);

        fetch("https://docs.google.com/forms/d/e/1FAIpQLSd6NTCaJpC4eXf0dUhNJFQk-9X0eJZsugCF6knXWX1inpmQlQ/viewform?usp=dialog",{
            method:"POST",
            mode:"no-cors",
            body:formData
        });
        submitFormToGoogle(
            document.getElementById('visitForm'),
            "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse",
            {}, // fieldMap isn't actually used inside the function right now — see note below
            "Thanks! We'll see you soon.",
            "visitModal"
);
    
})
        }