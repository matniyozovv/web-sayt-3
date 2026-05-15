// Kontakt forma yuborish va xabar chiqishi
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('contactForm').reset();
    const box = document.getElementById('thankYouMsg');
    box.style.display = 'inline-block';
    box.style.opacity = '0';
    setTimeout(() => box.style.opacity = '1', 50);
    setTimeout(() => { box.style.opacity = '0'; }, 2100);
    setTimeout(() => { box.style.display = 'none'; }, 2600);
});

// FAQ interaktiv ochish-yopish
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function(){
        const ans = this.nextElementSibling;
        if(ans.classList.contains('show')){
            ans.classList.remove('show');
            this.classList.remove('active');
        } else {
            document.querySelectorAll('.faq-answer').forEach(a=>a.classList.remove('show'));
            document.querySelectorAll('.faq-question').forEach(q=>q.classList.remove('active'));
            ans.classList.add('show');
            this.classList.add('active');
        }
    });
});
