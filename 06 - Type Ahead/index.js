const ENDPOINT = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const CITIES = [];

document.addEventListener('DOMContentLoaded', () => {
    getCities(ENDPOINT);
    
    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');
    
    searchInput.addEventListener('change', displayMatches)
    searchInput.addEventListener('keyup', displayMatches)

    function displayMatches() {
        const matchArray = findMatchingCities(this.value);
        const html = matchArray.map(place => {
            const regex = new RegExp(this.value, 'gi');
            const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
            const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
            return `
                <li>
                    <span class="name">${cityName}, ${stateName}</span>
                    <span class="population">${numberWithCommas(place.population)}</span>
                </li>
                `;
            }).join('');
            suggestions.innerHTML = html;
        }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
});

function getCities(endpoint) {
    fetch(endpoint)
    .then(resp => resp.json())
    .then(data => CITIES.push(...data));
}

function findMatchingCities(wordToMatch) {
    return CITIES.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');

        return place.city.match(regex) || place.state.match(regex);
    })
}









