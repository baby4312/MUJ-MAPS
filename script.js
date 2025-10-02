const buildings = [
    "CAMPUS TOUR",
    "DOME BUILDING",
    "AB 1",
    "AB 2",
    "AB 3",
    "AB 4",
    "KNOWLEDGE BLOCK",
    "OLD MESS"
];

const searchInput = document.getElementById('search');
const suggestions = document.getElementById('suggestions');
const mapSection = document.getElementById('map-section');

searchInput.addEventListener('input', () => {
    const value = searchInput.value.toLowerCase();
    suggestions.innerHTML = '';
    if (value) {
        const filtered = buildings.filter(b => b.toLowerCase().includes(value));
        filtered.forEach(b => {
            const div = document.createElement('div');
            div.textContent = b;
            div.addEventListener('click', () => selectBuilding(b));
            suggestions.appendChild(div);
        });
        suggestions.style.display = filtered.length ? 'block' : 'none';
    } else {
        suggestions.style.display = 'none';
    }
});

function selectBuilding(buildingName) {
    suggestions.style.display = 'none';
    searchInput.value = buildingName;
    mapSection.style.display = 'block';
    mapSection.innerHTML = `<h2 style="text-align:center;padding-top:200px;">Map will open here for: ${buildingName}</h2>`;
}
