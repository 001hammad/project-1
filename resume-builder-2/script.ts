const nameInput = document.getElementById('name') as HTMLInputElement;
const birthdateInput = document.getElementById('birthdate') as HTMLInputElement;
const ageInput = document.getElementById('age') as HTMLInputElement;
const birthdayplansInput = document.getElementById('birthday-plans') as HTMLTextAreaElement;
const favouritefoodInputs = [
      document.getElementById('pizza') as HTMLInputElement,
      document.getElementById('burger') as HTMLInputElement,
      document.getElementById('tikka') as HTMLInputElement,
      document.getElementById('biryani') as HTMLInputElement,
    ];
    const button = document.querySelector('.button') as HTMLButtonElement;
    const resumeContainer = document.getElementById('birth-resume') as HTMLDivElement;

    button.addEventListener('click',()=>{
    const name = nameInput.value;
    const birthdate = birthdateInput.value;
    const age = ageInput.value;
    const birthdayplans = birthdayplansInput.value;
    const favouritefood = favouritefoodInputs.filter((input) => input.checked).map((input) => input.value);

    const resumeHtml = `
    <h2> ${name} </h2>
    <p> Birthdate: ${birthdate} </p>
    <p> Age: ${age} </p>
    <p> Birthday plans: ${birthdayplans} </p>
    <p> Favourite food: ${favouritefood.join(', ')} </p>
    `;
    resumeContainer.innerHTML = resumeHtml;
    });