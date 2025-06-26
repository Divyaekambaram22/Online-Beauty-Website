document.getElementById('learnMoreBtn').addEventListener('click', function () {
  const moreText = document.getElementById('moreText');
  if (moreText.classList.contains('hidden')) {
    moreText.classList.remove('hidden');
    this.textContent = "Show Less";
  } else {
    moreText.classList.add('hidden');
    this.textContent = "Learn More";
  }
});
