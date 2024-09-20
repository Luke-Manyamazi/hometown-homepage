var tours;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


tours = ['Cable Car', 'The Bo-Kaap', 'Paragliding'];
tours.push('The Robbeneiland');
tours.push('The V&A Waterfront Cruise');
tours.push('The Wine Tram');


document.getElementById('button').addEventListener('click', (event) => {
  let element_trip = document.getElementById('trip');
  element_trip.innerText = randomMember(tours);

});