const btnGenerateQuote = document.querySelector('.btn-generate-quote');
const displayedPhrase = document.querySelector('#displayed-phrase');
const displayedAuthor = document.querySelector('#displayed-author');

btnGenerateQuote.addEventListener('click', async ()=>{
    // dynamic import
    const stack = await import('./data.js');
    // Generate a random index between 0 and the length of the stack of phrases
    const index = Math.floor(Math.random() * (stack.phrases.length - 1)) + 1;
    // then we get a random phrase
    const randomPhrase = stack.phrases[index];
    // now we desplay it
    displayedPhrase.innerHTML = randomPhrase.phrase;
    displayedAuthor.innerHTML = randomPhrase.author;
})