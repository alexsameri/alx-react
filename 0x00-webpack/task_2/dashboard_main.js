// import $ from 'jquery';
// import _ from 'lodash';
// import logo from '../assets/holberton-logo.png';
// import '../css/main.css';

// $(document).ready(function() {
//     const logoDiv = $(`<div id="logo"><img src="${logo}" alt="" style="width: 200px; height: 200px"/></div>`);
//     $('body').prepend(logoDiv);
//     $('body').append('<p>ALX Dashboard</p>');
//     $('body').append('<p>Dashboard data for the students</p>');
//     const button = $('<button>Click here to get started</button>');
//     $('body').append(button);
//     $('body').append('<p id="count"></p>');
//     $('body').append('<p>Copyright - ALX</p>');

//     let count = 0;
//     function updateCounter() {
//         count += 1;
//         $('#count').text(`${count} clicks on the button`);
//     }

//     const debouncedUpdateCounter = _.debounce(updateCounter, 300);
//     button.on('click', debouncedUpdateCounter);
// });