function getGoogleSearchResults() {
  const results = [];
  const searchResults = document.querySelectorAll('.tF2Cxc');

  searchResults.forEach((result) => {
    const title = result.querySelector('.LC20lb')?.textContent || '';
    const link = result.querySelector('a')?.getAttribute('href') || '';
    const description = result.querySelector('.VwiC3b')?.textContent || '';
    results.push({ title, link, description });
  });

  return results;
}

console.log(getGoogleSearchResults());
