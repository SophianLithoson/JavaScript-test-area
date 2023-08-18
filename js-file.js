const container = document.querySelector('#container');

let content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

content = document.createElement('p');
content.style.color = "red";
content.textContent = "Hey I'm red!"
container.appendChild(content);

content = document.createElement('h3');
content.style.cssText = "color: blue;";
content.textContent = "I'm a blue h3!"
container.appendChild(content);

content = document.createElement("div");
content.setAttribute("style", "border: 2px solid black; background: pink;");
let subcontent = document.createElement("h1");
subcontent.textContent = "I'm in a div";
content.appendChild(subcontent);
subcontent = document.createElement("p");
subcontent.textContent = "ME TOO!";
content.appendChild(subcontent);
container.appendChild(content);

