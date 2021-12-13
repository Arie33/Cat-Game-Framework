const continueButton = document.querySelector('#continue-button');

continueButton.onclick = () => {
  const coordinates = '51.210901,4.416229'
  const locationName = 'Stadspark';
  const nextPage = 'Map'; // pagina bestaat nog niet, die moeten jullie aanmaken
  location.assign(`../mapscherm/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
}
