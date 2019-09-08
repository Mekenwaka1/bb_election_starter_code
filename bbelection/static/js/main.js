document.addEventListener("DOMContentLoaded", function() {
  axios
    .get("https://bb-election-api.herokuapp.com/")
    .then(response => {
      const {data} = response;
      const ul = document.querySelector("#candidates");
      ul.innerHTML = "";
      data.candidates.forEach(candidate => {
        let li = document.createElement("li");
        li.id = "candidate-" + candidate.id;
        li.textContent = `${candidate.name}: (${candidate.votes} votes)`;
        ul.appendChild(li);
      });
    })
    .catch(error => {
      console.log(error);
    });
});
