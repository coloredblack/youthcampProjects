function getComponent() {
  return import("./user").then(
    ({ default: users }) => {
      const element = document.createElement("div");
      element.innerHTML = users.join(",");
      return element;
    }
  )
  .catch((error) => "An error occurred while loading the component");
}


function handleGetUser() {
  getComponent().then(component => {
    document.body.appendChild(component);
  })
}

const element = document.createElement("button");
element.onclick = handleGetUser;
element.innerHTML = "GET USER"
document.body.appendChild(element)
