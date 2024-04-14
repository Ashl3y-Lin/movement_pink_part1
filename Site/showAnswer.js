// const div = document.getElementById('hide-box');
// let display = 1;

// function ShowAnswer(){
//     if(display == 1){
//         div.style.display = 'block';
//         display = 0;
//     } 
//     else{
//         div.style.display = 'none';
//         display = 1;
//     }
// }


// Worked
// const div = document.getElementById('hide-box');

// // Retrieve the state from localStorage
// let display = localStorage.getItem('hideBoxState') || 'hidden';

// // Apply the retrieved state to the div
// if (display === 'visible') {
//     div.style.display = 'block';
// } else {
//     div.style.display = 'none';
// }

// function ShowAnswer() {
//     // Toggle the visibility of the div
//     if (div.style.display === 'none') {
//         div.style.display = 'block';
//         localStorage.setItem('hideBoxState', 'visible');
//     } else {
//         div.style.display = 'none';
//         localStorage.setItem('hideBoxState', 'hidden');
//     }
// }



const div = document.getElementById('hide-box');

// Hide the div initially
div.style.display = 'none';

// Define the function to toggle the visibility of the div
function ShowAnswer() {
    // Toggle the visibility of the div
    if (div.style.display === 'none') {
        // If the div is hidden, show it
        div.style.display = 'block';
        // Update localStorage to reflect the new state
        localStorage.setItem('hideBoxState', 'visible');
    } else {
        // If the div is visible, hide it
        div.style.display = 'none';
        // Update localStorage to reflect the new state
        localStorage.setItem('hideBoxState', 'hidden');
    }
}






// didnt work

// const div = document.getElementById('hide-box');

//         // Check if the item is stored in the local storage
//         let display = localStorage.getItem('hideBoxState') || 'hidden';
//         if (display === 'visible') {
//             div.classList.remove('hidden');
//         }

//         function ShowAnswer() {
//             if (div.classList.contains('hidden')) {
//                 div.classList.remove('hidden');
//                 localStorage.setItem('hideBoxState', 'visible');
//             } else {
//                 div.classList.add('hidden');
//                 localStorage.setItem('hideBoxState', 'hidden');
//             }
//         }