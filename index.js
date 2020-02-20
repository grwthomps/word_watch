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

  document.getElementById ("submit-button").addEventListener ("click", submitWord, false);
})

function submitWord() {
  var user_input = document.getElementById("text-box").value.replace(/\s+/g, '').replace(/[^A-Za-z]/g, '')

  fetch('https://wordwatch-api.herokuapp.com/api/v1/words', {
    method: 'post',
    body: JSON.stringify({
      word: {
        value: user_input
      }
    }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then((response) => {
    return response.json();
  }).then((jsonResponse) => {
    alert(jsonResponse.message)
  });
}
