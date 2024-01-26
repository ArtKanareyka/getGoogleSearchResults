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

function hideAllResults() {
  const searchResults = document.querySelectorAll('.tF2Cxc');

  searchResults.forEach((result) => {
    result.style.display = 'none';
  });
}

function showMatchingResults(textArray) {
  const searchResults = document.querySelectorAll('.tF2Cxc');

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

    if (containsText) {
      result.style.display = '';
    }
    const classes = [
      '.cUnQKe',
      '.oIk2Cb',
      '.hlcw0c',
      '.uVMCKf',
      '.Lv2Cle',
      '.g.PmEWq',
    ];

    for (const item of classes) {
      const element = document.querySelector(item);

      if (element && element.style.display !== null) {
        element.style.display = 'none';
      }
    }
  });
}

function filterSearchResults(textArray) {
  hideAllResults();
  showMatchingResults(textArray);

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length > 0) {
        hideAllResults();
        showMatchingResults(textArray);
      }
    });
  });

  const config = { childList: true, subtree: true };

  observer.observe(document.body, config);
}

filterSearchResults(['popular', 'open-source']);
