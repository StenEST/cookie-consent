'use strict';

const ccVersion = require('vanilla-cookieconsent/package.json').version;

class UiOptions extends require('./AbstractOptions') {
    constructor() {
        super();

        this.include_default_stylesheets = true;
        this.external_stylesheets = [];
        this.internal_stylesheets = [];
        this.show_floating_button = true;
        this.floating_button_position = 'left';
    }

    get defaultStylesheets() {
        if (true === this.include_default_stylesheets) {
            return [
                `https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@${ccVersion}/dist/cookieconsent.css`
            ];
        }

        return [];
    }
}

module.exports = UiOptions;
