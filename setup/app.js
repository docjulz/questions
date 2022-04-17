//using selectors inside the element
// traversing the dom

const buttons = document.querySelectorAll('.question-btn');

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    })
})
