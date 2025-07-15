const toggleBtn = document.getElementById('toggle-prices');
const priceSection = document.getElementById('price-section');

if (toggleBtn && priceSection) {
  toggleBtn.addEventListener('click', () => {
    if (priceSection.classList.contains('hidden')) {
      priceSection.classList.remove('hidden');
      priceSection.classList.add('visible');
      toggleBtn.textContent = 'Hide Prices';
    } else {
      priceSection.classList.remove('visible');
      priceSection.classList.add('hidden');
      toggleBtn.textContent = 'Show Prices';
    }
  });
}
