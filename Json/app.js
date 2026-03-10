// Run after the page loads
window.addEventListener("DOMContentLoaded", () => {
  const demo = document.querySelector("#demo");

  // Create UI containers
  const buttonsWrap = document.createElement("div");
  buttonsWrap.className = "buttons";

  const output = document.createElement("div");
  output.className = "output";

  const status = document.createElement("div");
  status.className = "loading";

  demo.append(buttonsWrap, status, output);

  // Fetch JSON helper
  async function getJSON(url) {
    const response = await fetch(url);

    // If API fails
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  }

  // Create card elements
  function makeCard(text) {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = text;
    return card;
  }

  // Load category items and render
  async function showCategory(url) {
    status.textContent = "Loading...";
    output.innerHTML = "";

    try {
      const data = await getJSON(url);

      // swapi.tech sometimes uses result or results
      const items = data.result || data.results || [];

      // Convert to cards
      const cards = items.map((item) => {
        // films have "description" (A Star Wars Film), others have "name"
        const label = item.name || item.title || item.description || "Unknown";
        return makeCard(label);
      });

      if (cards.length === 0) {
        status.textContent = "No results found.";
        return;
      }

      status.textContent = "";
      output.append(...cards);

    } catch (err) {
      status.textContent = "Error loading data. Check your internet / console.";
      console.error(err);
    }
  }

  // Init: load API index and create buttons
  async function init() {
    status.textContent = "Loading categories...";

    try {
      const indexData = await getJSON("https://www.swapi.tech/api/");
      const index = indexData.result;

      // Build buttons from keys: films, people, planets...
      for (const key in index) {
        const btn = document.createElement("button");
        btn.textContent = key;

        btn.addEventListener("click", () => showCategory(index[key]));

        buttonsWrap.append(btn);
      }

      status.textContent = "Click a category button to load items.";

      // Optional: auto-load films first
      if (index.films) showCategory(index.films);

    } catch (err) {
      status.textContent = "Could not load categories. Open console for error.";
      console.error(err);
    }
  }

  init();
});