document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const target = this.getAttribute('data-target');

            // Hide all tab contents
            tabContents.forEach(content => {
                content.style.display = 'none';
            });

            // Remove active class from all tabs
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });

            // Show the target tab content
            document.querySelector(target).style.display = 'block';

            // Add active class to the clicked tab
            this.classList.add('active');
        });
    });

    // Show the first tab content by default
    if (tabs.length > 0) {
        tabs[0].classList.add('active');
        const firstTabTarget = tabs[0].getAttribute('data-target');
        document.querySelector(firstTabTarget).style.display = 'block';
    }
});