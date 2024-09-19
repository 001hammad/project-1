var nameInput = document.getElementById('name');
var birthdateInput = document.getElementById('birthdate');
var ageInput = document.getElementById('age');
var birthdayplansInput = document.getElementById('birthday-plans');
var favouritefoodInputs = [
    document.getElementById('pizza'),
    document.getElementById('burger'),
    document.getElementById('tikka'),
    document.getElementById('biryani'),
];
var button = document.querySelector('.button');
var resumeContainer = document.getElementById('birth-resume');
button.addEventListener('click', function () {
    var name = nameInput.value;
    var birthdate = birthdateInput.value;
    var age = ageInput.value;
    var birthdayplans = birthdayplansInput.value;
    var favouritefood = favouritefoodInputs.filter(function (input) { return input.checked; }).map(function (input) { return input.value; });
    var resumeHtml = "\n    <h2> ".concat(name, " </h2>\n    <p> Birthdate: ").concat(birthdate, " </p>\n    <p> Age: ").concat(age, " </p>\n    <p> Birthday plans: ").concat(birthdayplans, " </p>\n    <p> Favourite food: ").concat(favouritefood.join(', '), " </p>\n    ");
    resumeContainer.innerHTML = resumeHtml;
});
