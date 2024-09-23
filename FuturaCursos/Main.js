const header = document.getElementById('bar');
const headerClassList = bar.classList;
window.addEventListener('scroll', () => {
  if (window.scrollY >= 150) {
    if (!headerClassList.contains('scrollHide')) {
      headerClassList.add('scrollHide')
    }
  } else {
    if (headerClassList.contains('scrollHide')) {
      headerClassList.remove('scrollHide')
    }
  }
})

