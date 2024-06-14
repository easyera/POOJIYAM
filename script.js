const toggleButton = document.querySelector('.toggle-button');
const mobileView = document.querySelector('.mobileview');

toggleButton.addEventListener('click', function () {
    this.classList.toggle('active');
    mobileView.style.display = mobileView.style.display === 'flex' ? 'none' : 'flex';
    mobileView.style.transform = this.classList.contains('active') ? 'scaleY(1)' : 'scaleY(0)';
});

window.addEventListener('resize', function () {
    if (mobileView.style.display === 'flex' && window.innerWidth > 668) {
        mobileView.style.display = 'none';
        toggleButton.classList.remove('active');
    }
})