function distanceFromHqInBlocks(someValue) {
    // Assuming headquarters is located at block 42
    return Math.abs(someValue - 42);
  }
  
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    // Assuming each block is 264 feet
    return blocks * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(start - destination);
    // Assuming each block is 264 feet
    return distanceInBlocks * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      // First 400 feet are free
      return 0;
    } else if (distanceInFeet <= 2000) {
      // Charges 2 cents per foot for distances between 400 and 2000 feet
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet <= 2500) {
      // Flat fare for distances between 2000 and 2500 feet
      return 25;
    } else {
      // Does not allow rides over 2500 feet
      return 'cannot travel that far';
    }
  }
  