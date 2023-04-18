// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
  var headquarters = 42; 
  
  return Math.abs(pickupLocation - headquarters); 
}

function distanceFromHqInFeet(blocks){
    var blocksInFt = 264;
return distanceFromHqInBlocks(blocks) * blocksInFt;
}
function distanceTravelledInFeet(start, destination) {
    var blocksInFeet = 264; 
    var distanceInBlocks = Math.abs(destination - start); 
    var distanceInFeet = distanceInBlocks * blocksInFeet; 
    
    return distanceInFeet;
  }

  function calculatesFarePrice(start, destination) {
    var distanceInFeet = distanceTravelledInFeet(start, destination);
    var farePrice;
  
    if (distanceInFeet <401) {
      farePrice = 0;
    } else if (distanceInFeet > 400 && distanceInFeet < 2001) {
      farePrice = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2501) {
      farePrice = 25;
    } else if(distanceInFeet>2500) {
      farePrice = 'cannot travel that far';
    }
  
    return farePrice;
  }