
let request;

const testRequest = () => {
  request = new XMLHttpRequest();
  if (request.status === 200 || request.status === 201) {
  alert(request.responseText);
}
  request.open("POST", "https://jsonplaceholder.typicode.com/todos");

  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // Headers that specify type of data and its required options

  let inputVal = document.getElementById("myInput").value;
  console.log(inputVal)
  let encodedVal = encodeURIComponent(inputVal);
  console.log(encodedVal, "ENCODED")
  request.send(`data=${encodedVal}`);
};

document.getElementById("myBtn").addEventListener("click", testRequest);

