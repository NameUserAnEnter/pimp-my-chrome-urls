let styleElements = [];

styleElements.push("background-color:#3000D0;");

styleElements.push("accent-color:#00FFFF;");
styleElements.push("border-block-color:#00FFFF;");
styleElements.push("border-color:#00FFFF;");
styleElements.push("caret-color:#00FFFF;");
styleElements.push("column-rule-color:#00FFFF;");
styleElements.push("outline-color:#00FFFF;");
styleElements.push("scrollbar-color:#00FFFF;");
styleElements.push("text-decoration-color:#00FFFF;");

styleElements.push("color:#FFFFFF;");



let styleElementsStr = "";
for (let i = 0; i < styleElements.length; i++){
	styleElementsStr += styleElements[i];
}

let styleClassName = 'pimp-my-chrome-urls';
let styleStr = '.' + styleClassName + '{' + styleElementsStr + '}';
let defaultForeground = '#FFFFFF';


function processNode(node){
	if ((node.shadowRoot == undefined) == false){
		processNode(node.shadowRoot);
		
		let styleNode = document.createElement("style");
		styleNode.innerHTML = styleStr;
		
		appendIfNotInside(node.shadowRoot, styleNode);
	}

	for (let i = 0; i < node.children.length; i++){
		processNode(node.children[i]);
		if (node.children[i].getAttribute("id") != null){
			if (node.children[i].className == null || node.children[i].className == ""){
				node.children[i].className = styleClassName;
				node.children[i].style.color = defaultForeground;
			}
			else if(node.children[i].className.includes(styleClassName) == false){
				node.children[i].className += ' ' + styleClassName;
				node.children[i].style.color = defaultForeground;
			}
		}
	}
}

function appendIfNotInside(parentNode, attemptedChildNode){
	let found = false;
	
	for (let i = 0; i < parentNode.children.length; i++){
		if (parentNode.children[i].innerHTML == attemptedChildNode.innerHTML){
			found = true;
			return;
		}
	}
	
	if (!found){
		parentNode.appendChild(attemptedChildNode);
	}
}

function repeatProcess(){
	processNode(document.body);

	let styleNode = document.createElement("style");
	styleNode.innerHTML = styleStr;

	appendIfNotInside(document.body, styleNode);
}

setInterval(repeatProcess, 1);











