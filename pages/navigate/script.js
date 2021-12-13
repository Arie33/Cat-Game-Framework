const startButton = document.querySelector('#start-button');

startButton.onclick = () => {
  const coordinates = '51.203275,4.450912'
  const locationName = 'Boelaerpark';
  const nextPage = 'start';
  location.assign(`../laadscherm/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
}
