class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  showProfile(user) {
    this.profile.innerHTML = `
<div class="card card-body mb-3">
    <div class="row">
        <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${
              user.html_url
            }" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
            <span class="badge-primary btn">Public Repos: ${
              user.public_repos
            }</span>
            <span class="badge-secondary btn">Public Gists: ${
              user.public_gists
            }</span>
            <span class="badge-success btn">Followers: ${user.followers}</span>
            <span class="badge-info btn">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
            <li class="list-group-item"><b>Company:</b> ${user.company}</li>
            <li class="list-group-item"><b>Website/Blog:</b> ${user.blog}</li>
            <li class="list-group-item"><b>Location:</b> ${user.location}</li>
            <li class="list-group-item"><b>Member Since:</b> ${
              user.created_at
            }</li>
            </ul>
            
        </div>

    </div>

</div>
<h3 class="page-heading mb-3">Latest Repos</h3>
<div id="repos"></div>
`;
  }
  //clear the profile area
  clearProfile() {
    this.profile.innerHTML = "";
  }
  //show repos
  showRepos(repos) {
    let output = "";
    repos.forEach(repo => {
      output += `
        <div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">${repo.name}
                </div>
                <div class="col-md-6">
                <span class="badge-primary btn">Stars: ${
                  repo.stargazers_count
                }</span>
                  <span class="badge-secondary btn">Watchers: ${
                    repo.watchers_count
                  }</span>
                  <span class="badge-success btn">Forks: ${
                    repo.forks_count
                  }</span>
                </div>
            </div>
        </div>
        `;
    });
    //Output repos
    document.getElementById("repos").innerHTML = output;
  }
  ///
  showAlert(message, className) {
    //create div
    const div = document.createElement("div");
    //add classes
    div.className = className;
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector(".searchContainer");
    //Get search box
    const search = document.querySelector(".search");
    //Inser alert
    container.insertBefore(div, search);
    setTimeout(function() {
      container.removeChild(div);
    }, 2000);
  }
}
