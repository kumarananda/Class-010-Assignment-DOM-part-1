//001   All Developers in DOM form object Data


const developers = document.querySelector('.developers');
console.log(developers);

deves.map(data => {
    developers.innerHTML += `
    <div class="dev-Item">
                <img src="${data.photo}" alt="">
                <h2>Name : ${data.name}</h2>
                <p>Age : ${data.age}</p>
                <p>Incom : ${data.income}</p>
                <span>Skill : ${data.skill}</span>
                <p>Gender : ${data.gender}</p>
    </div>
    `;
});


//002  All Student in DOM from Object Data


const students = document.querySelector('.students');
console.log(students);

studentArray.map(data => {
    students.innerHTML += `
    <div class="students-items">
                <img src="https://purepng.com/public/uploads/large/purepng.com-female-studentstudenteducationalinstitutionstudentsuniversity-studentschoolfemale-student-142152692239821ad6.png" alt="">
                <h2>Roll : ${data.roll}</h2>
                <p>Name : ${data.name}</p>
                <p>Class : ${data.class}</p>
                <p>Gender  : ${data.gender}</p>
                <span>Location : ${data.location}</span>
    </div> 
    `;
});


// 003 - All phone book data to DOM 
const phonebook = document.querySelector('.phonebook .phonebook-items table');

phone.map(data => {
    phonebook.innerHTML += `
    <tr>
    <td>${data.id}</td>
    <td>${data.name}</td>
    <td>${data.phoneNo}</td>
    <td>${data.location}</td>
    <td>${data.relation}</td>
  </tr>
    
    
    `
});


// 004 - Marks data to DOM 
const marksdata = document.querySelector('.marks .marks-items table');

marks.map(data => {
    marksdata.innerHTML += `
    <tr>
        <td>${data.roll}</td>
        <td>${data.name}</td>
        <td>${data.bangla}</td>
        <td>${data.english}</td>
        <td>${data.math}</td>
        <td>${data.socialScience}</td>
        <td>${data.science}</td>
        <td>${data.religion}</td>
        
    </tr>
    
    
    `
});






