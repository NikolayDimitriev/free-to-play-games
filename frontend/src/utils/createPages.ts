export function createPages(pagesCount: number, activePage: number) {
  const pages = [];

  if (pagesCount > 10) {
    if (activePage > 5) {
      for (let i = activePage - 4; i <= activePage + 5; i++) {
        pages.push(i);
        if (i === pagesCount) break;
      }
    } else {
      for (let i = 1; i <= 10; i++) {
        pages.push(i);
        if (i === pagesCount) break;
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }
  
  return pages;
}
