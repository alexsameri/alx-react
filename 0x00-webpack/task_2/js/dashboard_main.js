import $ from "jquery";
import _ from "lodash";
import '../css/main.css';
import logo from '../assets/holberton-logo.png';

$(document).ready(function() {
    const logoDiv = $(`<div id="logo"><img src="${logo}" alt="Holberton Logo" style="width: 200px; height: auto;" /></div>`);
    $('body').prepend(logoDiv);
    $('body').append('<p>ALX Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    const button = $('<button>Click here to get started</button>');
    $('body').append(button);
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyroght - ALX</P>');

    let count = 0;
    function updateCounter() {
        count += 1;
        $('#count').text(`${count} clicks on the button`);
    }

    const debouncedUpdateCounter = _.debounce(updateCounter, 500); // 500ms delay to prevent spamming
    button.on('click', debouncedUpdateCounter);
});