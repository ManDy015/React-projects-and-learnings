function customRender(reactElement, container){
    /*
    const domElement =document.createElement(reactElement.type)        //create a element of reactElement type to add in DOM
    domElement.innerHTML = reactElement.children                 // writing the children contents in the inner HTML of domELement
    domElement.setAttribute('href', reactElement.props.href)       //setting Attribute of anchor tag
    domElement.setAttribute('target', reactElement.props.target)       // setting link of the anchor tag
    container.appendChild(domElement)                    // appeding the craeted child in the domElement
    */
   // another waY using loop:
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for(const prop in reactElement.props){
    if(prop === 'children')continue;
    domElement.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElement)
}

const reactElement = {             // creating a rect Element
    type : 'a',        // html type, anchor
    props: {                    // setting properties of anchor tag
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'            //The text to display, default
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)           // using the created function to render the change sinto html DOM
