const searchResults = document.querySelectorAll('.tF2Cxc');

function getGoogleSearchResults() {
  const results = [];

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

function removeNotMatchingResults(textArray) {
  searchResults.forEach((result) => {
    const title = result.querySelector('h3')?.textContent || '';
    const link = result.querySelector('a')?.getAttribute('href') || '';
    const description = result.querySelector('.VwiC3b')?.textContent || '';

    const containsText = textArray.some(
      (searchText) =>
        title.toLowerCase().includes(searchText.toLowerCase()) ||
        link.toLowerCase().includes(searchText.toLowerCase()) ||
        description.toLowerCase().includes(searchText.toLowerCase())
    );

    if (!containsText) {
      result.style.display = 'none';
    }
    document.querySelector('.cUnQKe').style.display = 'none';
    document.querySelector('.oIk2Cb').style.display = 'none';
    document.querySelector('.hlcw0c').style.display = 'none';
  });
}

removeNotMatchingResults(['Вводить текст сюда1', 'Вводить текст сюда2']);
