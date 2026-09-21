const counters = document.querySelectorAll('[data-target]');

const animateCounter = (element) => {
  const rawTarget = element.dataset.target || '0';
  const hasDecimal = rawTarget.includes('.');
  const target = Number.parseFloat(rawTarget);
  const duration = 1100;
  const start = performance.now();

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const currentValue = target * progress;
    const display = hasDecimal ? currentValue.toFixed(1) : Math.round(currentValue);
    element.textContent = `${display}${rawTarget.includes('k') ? 'k' : ''}${rawTarget.includes('M') ? 'M' : ''}`;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      const finalDisplay = hasDecimal ? target.toFixed(1) : Math.round(target);
      element.textContent = `${finalDisplay}${rawTarget.includes('k') ? 'k' : ''}${rawTarget.includes('M') ? 'M' : ''}`;
    }
  };

  requestAnimationFrame(step);
};

counters.forEach((counter) => {
  animateCounter(counter);
});
