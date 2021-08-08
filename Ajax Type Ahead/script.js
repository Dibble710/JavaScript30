const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
const cities = [];

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    // Figure out if city or state matches what was searched

    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex, "gi");
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map((place) => {
    const regex = RegExp(this.value, "gi");
    const cityName = place.city.replace(
      regex,
      `<span class='highlight'>${this.value}</span>`
    );
    const stateName = place.state.replace(
      regex,
      `<span class='highlight'>${this.value}</span>`
    );
    function numberWithCommas(x) {
      // Thanks StackOverflow!
      x = x.toString();
      var pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
      return x;
    }
    return `
        <li>
            <span class='name'>${cityName}, ${stateName}</span>
            <span class='population'>Population: ${numberWithCommas(
              place.population
            )}</span>
        </li>
        `;
  });
  suggestions.innerHTML = html;
}

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
