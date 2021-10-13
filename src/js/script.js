// Import Doubly Linked List and Node class from Module
// NOTE: THE DOUBLY LINKED LIST IS CIRCULAR
import DoublyLinkedList, { Node } from "./DoublyLinkedListCircular.js";

// Wrap all of the code in an IFFE to avoid polluting the global namespace
(function () {
  // =====================
  // VARIABLE DECLARATIONS
  // =====================

  // Create a Doubly Linked List to store the links to the images
  const dll = new DoublyLinkedList();

  // Create a variable to control how many images the linked list should hold
  let maxPhotos = 10;

  // ================================
  // POPULATE DYNAMICALLY LINKED LIST
  // ================================

  // Create a function to generate a new photo url using photoID
  function generateURL(id) {
    return `https://picsum.photos/id/${id}/400`;
  }

  // Create a function to populate the DLL
  function populateDLL() {
    const start = 50;
    let counter = 0;
    for (let i = start; i < start + maxPhotos; i++) {
      // Store an object as the value of each node
      // The object contains an index and a corresponding url
      dll.push({ idx: counter, url: generateURL(i) });
      counter++;
    }
  }

  // Populate the DLL
  populateDLL();

  // Create a pointer to the current location of the DLL (initialize to head)
  let ptr = dll.head;

  // ====================================
  // TRAVERSING THE DLL: HELPER FUNCTIONS
  // ====================================

  // Group all helper functions in a util object
  const util = {
    // Create a function to update the index value between the previous and next buttons
    updateIdx: function (idx) {
      // Select the index DOM element
      const indexElem = document.querySelector(".main__idx");

      indexElem.innerText = `${idx}`;
    },

    // Create a function to update the image based on a passed in URL
    updateImage: function (url) {
      // Select the image DOM element
      const img = document.querySelector("img");

      // Update the img src with url
      img.src = url;
    },

    // Create a function to update the value of the pointer based on the passed in direction
    movePtr: function (direction) {
      direction === "prev" ? (ptr = ptr.prev) : (ptr = ptr.next);
    },
  };
<<<<<<< HEAD
=======

  // // Create a function to update the index value between the previous and next buttons
  // function updateIdx(idx) {
  //   // Select the index DOM element
  //   const indexElem = document.querySelector(".main__idx");

  //   indexElem.innerText = `${idx}`;
  // }

  // // Create a function to update the image based on a passed in URL
  // function updateImage(url) {
  //   // Select the image DOM element
  //   const img = document.querySelector("img");

  //   // Update the img src with url
  //   img.src = url;
  // }

  // // Create a function to update the value of the pointer based on the passed in direction
  // function movePtr(direction) {
  //   direction === "prev" ? (ptr = ptr.prev) : (ptr = ptr.next);
  // }
>>>>>>> 29508341f5be892f650fceab5d49cc39c471064b

  // ============================
  // TRAVERSING THE DLL: BACKWARD
  // ============================

  // Create an event handler for the previous button
  function handlePrevBtn() {
    // Move the pointer back
    util.movePtr("prev");

    // Extract the index and url at ptr using object deconstruction
    const { idx, url } = ptr.value;

    // Update the index
    util.updateIdx(idx);

    // Update the carousel's image
    util.updateImage(url);
  }

  // Add event listener to Previous Button
  document.querySelector("#prev").addEventListener("click", handlePrevBtn);

  // ===========================
  // TRAVERSING THE DLL: FORWARD
  // ===========================

  // Create an event handler for the next button
  function handleNextBtn() {
    // Move the pointer back
    util.movePtr("next");

    // Extract the index and url at ptr using object deconstruction
    const { idx, url } = ptr.value;

    // Update the index
    util.updateIdx(idx);

    // Update the carousel's image
    util.updateImage(url);
  }

  // Add event listener to Next Button
  document.querySelector("#next").addEventListener("click", handleNextBtn);

  // ============================
  // TRAVERSING THE DLL: BY INDEX
  // ============================

  // Create an event handler for the find button
  function handleFindBtn() {
    // Select the Input DOM element
    const idxInput = document.querySelector("#find");

    // Extract the value of the DOM element and convert it to a number
    const targetIdx = parseInt(idxInput.value);

    if (!isNaN(targetIdx) && targetIdx <= maxPhotos - 1 && targetIdx > 0) {
      // Update pointer to value of findByIdx
      ptr = dll.findByIdx(targetIdx);
    }

    // Extract the index and url at ptr using object deconstruction
    const { idx, url } = ptr.value;

    // Update the index
    util.updateIdx(idx);

    // Update the carousel's image
    util.updateImage(url);

    // Clear the input
    idxInput.value = "";
  }

  // Add event listener to Find Button
  document.querySelector("#findBtn").addEventListener("click", handleFindBtn);

  // =======================
  // INITIALIZE THE CAROUSEL
  // =======================

  // On page load, load the 1st image at the head
  util.updateImage(ptr.value.url);
})();
