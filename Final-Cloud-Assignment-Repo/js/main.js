// Set the region  

var FinalAssignment = window.FinalAssignment || {};
FinalAssignment.map = FinalAssignment.map || {};

var jsonObjects = [] 



  function SignOut(){ 
    window.location.href = 'index.html';
  }


  function SearchStudentID(){

    var searchID = document.getElementById('SearchID').value

    document.getElementById('fullName').innerHTML = ""

    if (searchID == "") {
      alert("Fill In Search ID")
      return;
  }


  fetch('https://w6oqauthzj.execute-api.eu-west-1.amazonaws.com/prod/execution?search=' + searchID, { method: 'GET' })
  .then(response => response.text())
  .then(data => {
      console.log(data)
      document.getElementById('fullName').innerHTML = data
  })
  .catch(error => console.error(error))


  
    

  }

  function AddStudent(){ 
    var firstName = document.getElementById('firstNameStudent').value 
    var lastName = document.getElementById('lastNameStudent').value 
    var ID = document.getElementById('IDStudent').value 
    var Age = document.getElementById('ageStudent').value 
    var TeacherID = document.getElementById('teacherIDStudent').value 
    var year = document.getElementById("yearToSelect").value;
    var email = document.getElementById("email").value;

    if (firstName == "" || lastName == "" || ID == "" || Age == "" || TeacherID == "" || email == "") { 
        alert("Fill all values") 
        return; 
    }

    if (ID > 0  && Age > 0 && TeacherID > 0)
    {
      var url = 'https://w6oqauthzj.execute-api.eu-west-1.amazonaws.com/prod/execution'
      const params = {"input": "{\"ID\":" + ID + ",\"Email\":" + JSON.stringify(email) + ",\"Role\": \"Student\", \"Year\":" + JSON.stringify(year) + ",\"First Name\":" + JSON.stringify(firstName) + ",\"Last Name\":" +  JSON.stringify(lastName) + ",\"Age\":" + Age + " ,\"TeacherID\":" + TeacherID + "}","stateMachineArn": "arn:aws:states:eu-west-1:317421968948:stateMachine:FinalAssignmentStateMachine"}

     fetch(url, { 
        method: 'POST',  
        headers: { 
          'Content-Type': 'application/json', 
        }, 
        body: JSON.stringify(params), 
      }) 
    .then(response => response.json()) 
    .then(data => console.log(data));
         
    }
    else{
      alert("Numbers must be positive") 
        return;
    }


    

  }  

  function AddClass(){ 

    var className = document.getElementById('ClassName').value 
    var ID = document.getElementById('IDClass').value 
    var TeacherID = document.getElementById('teacherIDClass').value 

if (className == ""  || ID == "" || TeacherID == "") { 
    alert("Fill all values") 
    return; 
}

if (ID > 0 && TeacherID > 0)
{

  var url = 'https://w6oqauthzj.execute-api.eu-west-1.amazonaws.com/prod/execution'
const params = {"input": "{\"ID\":" + ID + ",\"Role\": \"Class\""  + ",\"Class Name\":" + JSON.stringify(className) + " ,\"TeacherID\":" + TeacherID + "}","stateMachineArn": "arn:aws:states:eu-west-1:317421968948:stateMachine:FinalAssignmentStateMachine"}

 fetch(url, { 
    method: 'POST',  
    headers: { 
      'Content-Type': 'application/json', 
    }, 
    body: JSON.stringify(params), 
  }) 
.then(response => response.json()) 
.then(data => console.log(data)); 
}

else{
  alert("Numbers must be positive") 
    return; 
}

} 

function AddTeacher(){ 
    var firstName = document.getElementById('firstNameTeacher').value 
    var lastName = document.getElementById('lastNameTeacher').value 
    var ID = document.getElementById('IDTeacher').value 

    

    if (firstName == "" || lastName == "" || ID == "") { 
        alert("Fill all values") 
        return; 
    }

    if (ID > 0)
    {

      var url = 'https://w6oqauthzj.execute-api.eu-west-1.amazonaws.com/prod/execution'
      const params = {"input": "{\"ID\":" + ID + ",\"Role\": \"Teacher\""  + ",\"First Name\":" + JSON.stringify(firstName) + ",\"Last Name\":" +  JSON.stringify(lastName) + "}","stateMachineArn": "arn:aws:states:eu-west-1:317421968948:stateMachine:FinalAssignmentStateMachine"}

     fetch(url, { 
        method: 'POST',  
        headers: { 
          'Content-Type': 'application/json', 
        }, 
        body: JSON.stringify(params), 
      }) 
    .then(response => response.json()) 
    .then(data => {
      console.log(data)
    }); 
    }

    else{
      alert("Numbers must be positive") 
        return; 
    }

      
} 