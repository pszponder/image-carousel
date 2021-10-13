# Image Carousel

This is a solution to

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Utilize a Doubly Linked List data structure to create an image Carousel

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [https://github.com/pszponder/image-carousel](https://github.com/pszponder/image-carousel)
- Live Site URL: [https://pszponder.github.io/image-carousel/](https://pszponder.github.io/image-carousel/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- JS Modules

### What I learned

#### Circular Doubly Linked List

I have created a Doubly Linked List in the past but I have never implemented a circularly linked list. It turns out that it is pretty easy to convert a standard linked list to a circular one. All I needed to do is to update the references of the head and tail pointers to point to one another at the end of my pop, shift, push and unshift methods.

```js
// Connect the head to the tail
this.head.prev = this.tail;

// Connect the tail to the head
this.tail.next = this.head;
```

Feel free to refer to my DoublyLinkedListCircular.js file to view the full doubly linked list data structure implementation.

#### JS ES6 Modules

I learned to use JS ES6 Modules. In order to use a module, you need to declare the type as module for the script file in the HTML

```html
<script type="module" src="./src/js/script.js"></script>
```

To Export functions or classes from one JS file to another, use the `export` keyword in front of the function or class that you wish to export to another file. Then use the `import` keyword in the file you wish to import the exported class, function or variable to.

Ex. Using the export keyword to export the Node class

```js
export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
```

Ex. Importing the Node class

```js
import { Node } from "./DoublyLinkedListCircular.js";
```

Notice the curly braces wrapped around the Node keyword, this is because when exporting, unless you use the `default` keyword, you are exporting the item with a specific name.

### Continued development

I think it would be fun to implement some of the other methods such as the shift, pop and reverse methods into the app to demonstrate how those methods could work in a real world application.

### Useful resources

- [Wes Bos - Modules](https://wesbos.com/javascript/14-es-modules-and-structuring-larger-apps/78-modules) - Wes Bos has amazing tutorials and notes. I learned everything I needed about modules from this article.

## Author

- Website - [Piotr Szponder](https://github.com/pszponder)
- Frontend Mentor - [@pszponder](https://www.frontendmentor.io/profile/pszponder)
- Twitter - [@PSzponder](https://twitter.com/PSzponder)
