const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg"
  },
  {
    name: "Jane Smith",
    age: 26,
    gender: "female",
    lookingfor: "male",
    location: "MIAMI FL",
    image: "https://randomuser.me/api/portraits/women/82.jpg"
  },
  {
    name: "William Johnson",
    age: 33,
    gender: "male",
    lookingfor: "female",
    location: "Nairobi KE",
    image: "https://randomuser.me/api/portraits/men/83.jpg"
  },
  {
    name: "Judy Ferrari",
    age: 29,
    gender: "female",
    lookingfor: "male",
    location: "Kakamega KK",
    image: "https://randomuser.me/api/portraits/women/56.jpg"
  }
];

const profiles = profileIterator(data);
//call first profile
nextProfile();

//Next Event
document.getElementById("next").addEventListener("click", nextProfile);

//Next profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
    <ul class = "list-group">
        <li class="list-group-item"><b>Name:</b> ${currentProfile.name}</li>
        <li class="list-group-item"><b>Age:</b> ${currentProfile.age}</li>
        <li class="list-group-item"><b>Location:</b> ${
          currentProfile.location
        }</li>
        <li class="list-group-item"><b>Preference:</b> ${
          currentProfile.gender
        } <b>looking for</b> ${currentProfile.lookingfor}</li>

    </ul>
    
    `;
    document.getElementById("imageDisplay").innerHTML = `
    <img src="${currentProfile.image}"/>`;
  } else {
    //No More profiles
    window.location.reload();
  }
}

//Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
