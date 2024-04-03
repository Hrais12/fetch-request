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


    /*In the provided code, jsonData.message is not applicable because the response structure from the Cat API differs from that of the Dog API.
For the Dog API (https://dog.ceo/api/breeds/image/random), the response structure typically looks like this:
json

Copy code
{ "message": "https://images.dog.ceo/breeds/bulldog/n02096585_10047.jpg", "status": "success" } 
Here, the URL of the dog image is contained within the message property of the JSON object.
However, for the Cat API (https://api.thecatapi.com/v1/images/search), the response structure looks like this:
json

Copy code
[ { "breeds": [], "id": "5qj", "url": "https://cdn2.thecatapi.com/images/5qj.jpg", "width": 500, "height": 750 } ] 
Here, the URL of the cat image is directly stored as the url property of the first object in the JSON array.
So, to get the URL of the cat image, we need to access it using jsonData[0].url, as demonstrated in the code. Using jsonData.message would not work because the response structure doesn't have a message property.
*/