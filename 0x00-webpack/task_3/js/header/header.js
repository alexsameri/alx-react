import $ from 'jquery';
import _ from 'lodash';
import './header.css';

$(document).ready(function() {
    const headerContent = `
        <div id="header" class="header-container">
            <img src="" alt="" class="">
            <h2>ALX Dashboard</h2>
        </div>
    `;
    $('header').prepend(headerContent);
});