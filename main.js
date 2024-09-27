//listing element
var _a;
(_a = document
    .getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    var profilePicInput = document.getElementById("profilePic");
    var nameElement = document.getElementById("name");
    var fatherNameElement = document.getElementById("fathername");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experinceElement = document.getElementById("experince");
    var skillsElement = document.getElementById("skills");
    var usernameElement = document.getElementById("username");
    if (profilePicInput &&
        nameElement &&
        fatherNameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experinceElement &&
        skillsElement &&
        usernameElement) {
        var name_1 = nameElement.value;
        var fatherName = fatherNameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experince = experinceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        //profile picture element
        var profilePicInputFile = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePicURL = profilePicInputFile ? URL.createObjectURL(profilePicInputFile) : "";
        //create resume output
        var resumeOutPut = "<h2>Resume</h2>\n     ".concat(profilePicURL ? "<img src=\"".concat(profilePicURL, "\" alt=\"Profile Picture\" class=\"profilePic\">") : "", "\n    <p><strong>Name:</strong> <span id=\"edit-name\" className= \"editable\">  ").concat(name_1, "</span></p>\n    <p><strong>Father Name:</strong> <span id=\"edit-fatherName\" className= \"editable\">  ").concat(fatherName, "</span></p>\n    <p><strong>Email:</strong> <span id=\"edit-edit\" className= \"editable\"> ").concat(email, "</span></p>\n    <p><strong>Phone:</strong> <span id=\"edit-phone\" className= \"editable\"> ").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p id=\"edit-education\" className= \"editable\"> ").concat(education, "</p>\n\n    <h3>Experince</h3>\n    <p id=\"edit-experince\" className= \"editable\">").concat(experince, "</p>\n\n    <h3 >Skill</h3>\n    <p id=\"edit-education\" className= \"editable\">").concat(skills, "</p>\n\n\n    ");
        //
        var dowmloadLink = document.createElement('a');
        dowmloadLink.href = 'data:text/html;charset="UTF-8",' + encodeURIComponent(resumeOutPut);
        dowmloadLink.download = uniquePath;
        dowmloadLink.textContent = 'Download Your 2024 Resume ';
        var resumeOutPutElement = document.getElementById('resumeOutput');
        if (resumeOutPutElement) {
            resumeOutPutElement.innerHTML = resumeOutPut;
            resumeOutPutElement.appendChild(dowmloadLink);
            makeEditable();
        }
    }
    else {
        console.error('one or more output are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || '';
            // Replace content
            if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
