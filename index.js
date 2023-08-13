let n = Math.floor(Math.random() * 101);

// Store the value of n in session storage
sessionStorage.setItem('nValue', n);

// Redirection logic
if (n >= 0 && n < 25) {
    window.location.href = './sonuclar/0-25.html';
} else if (n >= 25 && n < 50) {
    window.location.href = './sonuclar/25-50.html';
} else if (n >= 50 && n < 75) {
    window.location.href = './sonuclar/50-75.html';
} else if (n >= 75 && n <= 100) {
    window.location.href = './sonuclar/75-100.html';
} else {
    console.error('Number is out of range.');
}
