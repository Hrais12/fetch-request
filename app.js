// let request;

// document.getElementById("myBtn").addEventListener("click", testRequest);

// function testRequest() {
//   request = new XMLHttpRequest();
// //----------------------------------Establish new Request

//   if (!request) {
//     alert("Failed to create an XMLHttpRequest Object.");
//     return false;
//   }
// //----------------------------------Error / Fail State
//   request.onreadystatechange = alertResponse;
// //----------------------------------Link the state change to the alertFunc()
//   request.open("GET", "test.html");
// // //----------------------------------Set request to the html doc "test"
//   request.send();
// }


// function alertResponse() {
//   if (request.readyState === XMLHttpRequest.DONE) {
//     if (request.status === 200) {
//         // if request is DONE , status = 200(complete)
//       alert(request.responseText);
//     } else {
//       alert(
//         "The request returned a status other than 200 OK: " + request.status,
//         // Return status
//       );
//     }
//   }
// }
// const populateData = (arr)=>{
//   let body = document.querySelector('body') 
//   arr.forEach((obj)=>{
//     let title = document.createElement('div')
//     title.setAttribute('class', 'title')
//     title.innerHTML = obj.title
//     body.append(title)

//   })
// } 
// async function logJSONData() {
//   let URL = "https://jsonplaceholder.typicode.com/todos"
//   const response = await fetch(URL);
//   const jsonData = await response.json();
//   console.log(jsonData);
//   populateData(jsonData)
// }

const dog = document.getElementById('dog');
    dog.addEventListener("click", getNewDog);

    async function getNewDog() {
        dog.style.cursor = 'wait';
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const jsonData = await response.json();
        console.log(jsonData)
        const url = jsonData.message;

        dog.src = url;
        dog.style.cursor = 'pointer';
    }

    getNewDog();

    const cat = document.getElementById('cat');
    cat.addEventListener("click", getNewCat);

    async function getNewCat() {
        dog.style.cursor = 'wait';
        const response = await fetch("https://api.thecatapi.com/v1/images/search",{
            headers: {
                'x-api-key': 'live_nsoXb5hXeUZJ3zbjw8Et1Lh2HMT2OZ0Fg7spIlvzkvcbhJ7YW3E2Mldr5eq8ekaE'
            }
        });
        const jsonData = await response.json();
        console.log(jsonData)
        const url =  jsonData[0].url;

        cat.src = url;
        cat.style.cursor = 'pointer';
    }

    getNewCat();