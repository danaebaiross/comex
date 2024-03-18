const minScore = () => {
  // Initialize the minimum score to a large value
  let min = Infinity;

  // Iterate over the array of scores
  for (let i = 0; i < scores.length; i++) {
    // If the current score is less than the minimum score, update the minimum score
    if (scores[i] < min) {
      min = scores[i];
    }
  }

  // Return the minimum score
  return min;
};
