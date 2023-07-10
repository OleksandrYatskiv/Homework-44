const body = document.querySelector('body');
const registration = document.createElement('div');
const doneButton = document.createElement('button');
const container = document.querySelector('.form-container');

registration.innerHTML = `
<h1>Registration</h1>
<form>
<input type="text" id="name" placeholder="Name" required>
<input type="text" id="surname" placeholder="Surname" required>
<input type="text" id="birthDate" placeholder="Birth Date" required>

<p>Please select your gender:</p>
<input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label><br>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label><br>

<label for="cities">Choose your city:</label>
<select name="cities" id="cities" required>
    <option value="" disabled selected hidden></option>
    <option value="Kyiv">Kyiv</option>
    <option value="Odesa">Odesa</option>
    <option value="Lviv">Lviv</option>
    <option value="Kharkiv">Kharkiv</option>
</select>

<textarea name="adress" id="adress" cols="30" placeholder="Type your adress..." rows="3"></textarea>

<p>Choose languages you know:</p>
<input type="checkbox" id="en" name="language" data-language="English">
<label for="en"> English</label><br>
<input type="checkbox" id="ua" name="language" data-language="Ukrainian">
<label for="ua">Ukrainian</label><br>
<input type="checkbox" id="ger" name="language" data-language="German">
<label for="ger">German</label><br>
</form>`;

doneButton.innerText = 'Done';

doneButton.setAttribute('id', 'done-btn');
registration.classList.add('registration-wrapp');

doneButton.addEventListener('click', () => {
    const name = document.querySelector('#name').value;
    const surname = document.querySelector('#surname').value;
    const birthDate = document.querySelector('#birthDate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const city = document.querySelector('#cities').value;
    const adress = document.querySelector('#adress').value;
    const languages = Array.from(document.querySelectorAll('input[name="language"]:checked')).map(checkbox => checkbox.getAttribute('data-language'));

    showUserInfo(name, surname, birthDate, gender, city, adress, languages);
});

container.append(registration);
container.append(doneButton);


function showUserInfo(name, surname, birthDate, gender, city, adress, languages) {
    const body = document.querySelector('body');
    body.innerHTML = '';

    let detailsHTML = `
    <h1>User info</h1>
    <table>
    <tr>
      <th>Name</th>
      <th>Surname</th>
      <th>Birth Date</th>
      <th>Gender</th>
      <th>City</th>
      <th>Adress</th>
      <th>Languages</th>
    </tr>
    <tr>
      <td>${name}</td>
      <td>${surname}</td>
      <td>${birthDate}</td>
      <td>${gender}</td>
      <td>${city}</td>
      <td>${adress}</td>
      <td>${languages.join(', ')}</td>
    </tr>
  </table>`;

    body.innerHTML = detailsHTML;
}
