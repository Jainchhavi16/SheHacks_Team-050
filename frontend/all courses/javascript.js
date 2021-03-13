console.log('Client side js file is loaded')

const bodyf = document.querySelector('body')
const title = document.querySelector('h3')
const descripton = document.querySelector('h4')

window.addEventListener("load", (e) =>{
    e.preventDefault()
    console.log('testing!')
    fetch('https://localhost:3000/course', {
        method: "GET", // POST, PUT, DELETE, etc.
        headers: {
          // the content type header value is usually auto-set
          // depending on the request body
          "Content-Type": "text/plain;charset=UTF-8"
        },
        referrer: "https://localhost:3000/course"
    }).then((response) =>{
        response.json().then((data) =>{
             if(data.error)
             {
                title.innerHTML = data.error
             }
             else{
                 console.log(data)
                 title.innerHTML = data[0].title
                 descripton.innerText = data[0].descripton
             }
        })
    })
}) 

