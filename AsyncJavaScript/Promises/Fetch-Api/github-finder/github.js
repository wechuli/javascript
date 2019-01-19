class Github {
  constructor() {
    this.clientID = "881a436c040fb5094ac7";
    this.clientKey = "170a52f7cd86ce957a330536d69d7de5c183c542";
    this.repos_count = 10;
    this.repos_sort = "created: asc";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.clientID
      }&client_secret=${this.clientKey}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.clientID}&client_secret=${
        this.clientKey
      }`
    );
    const profileData = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile: profileData,
      repos //same as repos:repos
    };
  }
}
