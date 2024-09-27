//listing element

document
  .getElementById("resumeform")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    //type assertion
    const profilePicInput = document.getElementById("profilePic") as HTMLInputElement
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const fatherNameElement = document.getElementById("fathername") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experinceElement = document.getElementById(
      "experince"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

    const usernameElement = document.getElementById(
      "username"
    ) as HTMLInputElement;

    if (
      profilePicInput &&
      nameElement &&
      fatherNameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      experinceElement &&
      skillsElement &&
      usernameElement
    ) {
      const name = nameElement.value;
      const fatherName = fatherNameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experince = experinceElement.value;
      const skills = skillsElement.value;

      const username = usernameElement.value;
      const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`


      //profile picture element
      const profilePicInputFile = profilePicInput.files?.[0]
      const profilePicURL = profilePicInputFile ? URL.createObjectURL(profilePicInputFile) : "";



      //create resume output
      const resumeOutPut = `<h2>Resume</h2>
     ${profilePicURL ? `<img src="${profilePicURL}" alt="Profile Picture" class="profilePic">` : ""}
    <p><strong>Name:</strong> <span id="edit-name" className= "editable">  ${name}</span></p>
    <p><strong>Father Name:</strong> <span id="edit-fatherName" className= "editable">  ${fatherName}</span></p>
    <p><strong>Email:</strong> <span id="edit-edit" className= "editable"> ${email}</span></p>
    <p><strong>Phone:</strong> <span id="edit-phone" className= "editable"> ${phone}</span></p>

    <h3>Education</h3>
    <p id="edit-education" className= "editable"> ${education}</p>

    <h3>Experince</h3>
    <p id="edit-experince" className= "editable">${experince}</p>

    <h3 >Skill</h3>
    <p id="edit-education" className= "editable">${skills}</p>


    `;

    //
    const dowmloadLink = document.createElement('a')
    dowmloadLink.href = 'data:text/html;charset="UTF-8",' + encodeURIComponent(resumeOutPut)
    dowmloadLink.download = uniquePath;
    dowmloadLink.textContent = 'Download Your 2024 Resume '



    const resumeOutPutElement = document.getElementById('resumeOutput')
    if(resumeOutPutElement){
        resumeOutPutElement.innerHTML = resumeOutPut;

        resumeOutPutElement.appendChild(dowmloadLink)

    makeEditable();
    }  
    }else{
        console.error('one or more output are missing');
        
    
    }
  });



function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function() {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || '';
            
            // Replace content
            if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing-input');

                input.addEventListener("blur",function() {
                  currentElement.textContent = input.value;
                  currentElement.style.display = "inline";
                  input.remove()

                })

                currentElement.style.display = 'none';
                currentElement.parentNode?.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}