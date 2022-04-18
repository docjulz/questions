//functionality for buttons. Open or close one or all

// const buttons = document.querySelectorAll('.question-btn');

// buttons.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     })
// })


// Opens only one question at a time.
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {

    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', (item) => {
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove('show-text')
            }
        });

        question.classList.toggle ('show-text')

    });    
    
});