function getGoogleSearchResults() {
  const results = [];
  const searchResults = document.querySelectorAll('.tF2Cxc');

  searchResults.forEach((result) => {
    const title = result.querySelector('h3')?.textContent || '';
    const link = result.querySelector('a')?.getAttribute('href') || '';
    const description = result.querySelector('.VwiC3b')?.textContent || '';
    results.push({ title, link, description });
  });

  return results;
}

console.log(getGoogleSearchResults());

function filterResultsByText(results, searchText) {
  const filteredResults = results.filter((result) => {
    return (
      result.title.toLowerCase().includes(searchText.toLowerCase()) ||
      result.link.toLowerCase().includes(searchText.toLowerCase()) ||
      result.description.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return filteredResults;
}

console.log(
  filterResultsByText(getGoogleSearchResults(), 'Вводить текст сюда')
);
