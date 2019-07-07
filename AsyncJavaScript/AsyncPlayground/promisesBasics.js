const axios = require("axios");

axios.get("http://example.com").then(response => {
  console.log(response.data);
});
