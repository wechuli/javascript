//Search input

const userInput = document.getElementById("searchUser");

//Add Event listener to user input

//INstantiate github class
const github = new Github();

//Instatiate the user ui class
const ui = new UI();

userInput.addEventListener("keyup", takeUserInput);

//Handle key up events
function takeUserInput(e) {
  //Get input text
  let userText = e.target.value;
  if (userText !== "") {
    // console.log(userText);

    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        //show alert
        console.log("No User Found");
        ui.clearProfile();
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        //Show the profile
        // console.log(data.profile);
        // console.log(data.repos);
        // console.log(data.profile.avatar_url);
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //Clear profile
    ui.clearProfile();
  }

  e.preventDefault();
}
