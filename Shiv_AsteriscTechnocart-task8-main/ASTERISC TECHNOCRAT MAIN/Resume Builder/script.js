// script.js
document.getElementById("generate-btn").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var experienceCompany = document.getElementById("company").value;
    var experiencePosition = document.getElementById("position").value;
    var experienceDescription = document.getElementById("description").value;
    var educationUniversity = document.getElementById("university").value;
    var educationDegree = document.getElementById("degree").value;
    var educationYear = document.getElementById("year").value;
    var skills = document.getElementById("skills").value;
  
    document.getElementById("preview-name").textContent = name;
    document.getElementById("preview-email").textContent = email;
    document.getElementById("preview-phone").textContent = phone;
  
    var experienceList = document.getElementById("preview-experience");
    experienceList.innerHTML = "";
    var experienceItem = document.createElement("li");
    experienceItem.innerHTML = "<strong>" + experiencePosition + "</strong> at " + experienceCompany + "<br>" + experienceDescription;
    experienceList.appendChild(experienceItem);
  
    var educationList = document.getElementById("preview-education");
    educationList.innerHTML = "";
    var educationItem = document.createElement("li");
    educationItem.innerHTML = "<strong>" + educationDegree + "</strong> - " + educationUniversity + " (" + educationYear + ")";
    educationList.appendChild(educationItem);
  
    document.getElementById("preview-skills").textContent = skills;
  
    document.getElementById("form-container").style.display = "none";
    document.getElementById("resume-preview").style.display = "block";
  });