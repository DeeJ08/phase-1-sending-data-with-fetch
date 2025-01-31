const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
};

const configurationObject = {
    method: "POST",
    header: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
        return response.json();
    })
        .then (function (object) {
            console.log(object);
    });
    
function submitData(usersName, usersEmail) {
   const userData = {
      name: usersName,
      email: usersEmail
   };
   return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(userData)
})
.then(response => response.json())
.then(data => {
    document.body.appendChild(
        document.createElement('p')
    ).textContent = `New User ID: ${data.id}`;
})
.catch((error) => {
    document.body.appendChild(
        document.createElement('p')
    ).textContent = `Error: ${error.message}`;
});
}
