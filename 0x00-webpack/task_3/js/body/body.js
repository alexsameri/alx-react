import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$(document).ready(function() {
    const bodyContent = `
        <h1>Hello world</h1>
    `;
    $('body').append(bodyContent);
});