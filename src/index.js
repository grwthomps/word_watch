import $ from 'jquery'

$(document).ready(() => {
  fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    var topWord = Object.keys(myJson.word)[0]
    var topWordCount = Object.values(myJson.word)[0]
    document.getElementById("top-word").innerHTML = topWord + " - " + topWordCount;
  });
})
