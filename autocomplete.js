const articles = [
    { title: "China", content: "best in the economy." },
    { title: "USA", content: "Second military power." },
    { title: "Sri Lanka", content: "Good Improve." },
    { title: "India", content: "Good Improve." }
  ];

  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  function displayResults(results) {
    searchResults.innerHTML = '';
    if (results.length === 0) {
      searchResults.innerHTML = '<p>No results found.</p>';
      return;
    }
    results.forEach(article => {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${article.title}</strong><p>${article.content}</p>`;
      searchResults.appendChild(div);
    });
  }
  

  searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase().trim();
    if (query === '') {
      searchResults.style.display = 'none';
    } else {
      const filtered = articles
        .filter(article =>
          article.title.toLowerCase().includes(query) ||
          article.content.toLowerCase().includes(query)
        )
        .sort((a, b) => {
          // Sort by how early the match appears in title/content
          const aTitlePos = a.title.toLowerCase().indexOf(query);
          const bTitlePos = b.title.toLowerCase().indexOf(query);
          const aContentPos = a.content.toLowerCase().indexOf(query);
          const bContentPos = b.content.toLowerCase().indexOf(query);

          const aPos = (aTitlePos !== -1 ? aTitlePos : 9999) + (aContentPos !== -1 ? aContentPos : 9999);
          const bPos = (bTitlePos !== -1 ? bTitlePos : 9999) + (bContentPos !== -1 ? bContentPos : 9999);

          return aPos-bPos; // smaller position = more relevant
        });

      displayResults(filtered);
      searchResults.style.display = 'block';
    }
  });

  document.addEventListener('click', function(event) {
    if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
      searchResults.style.display = 'none';
    }
  });

  

  
  

