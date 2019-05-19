



function minimumSwaps (ratings) {
  
    var swap = 0;
    var visited = [];
    ratings.forEach(function (rating, i) {
      var cycle = 0;
      while(!visited[i]) {
        visited[i] = true;
        i = ratings.length - ratings[i];
        cycle += 1;
      }
      if (cycle != 0) {
        swap += cycle - 1;
      }
    });
    return swap;
  }