
$.widget('custom.progressbar', {
    options: {
        value: 0
    },
    _create: function() {
        this.element.addClass('progressbar');
        this.element.html('<div class="progressbar-value"></div>');
        this._update();
    },

    // Create a public method.
    value: function(value) {
        if ( value === undefined ) {
            return this.options.value;
        } else {
            this.options.value = this._constrain( value );
            this._update();
        }
    },

    //Set options
    _setOption: function(key, value) {
        this.options[key] = value;
        this._update();
    },

    // Create a private method.
    _constrain: function(value) {
        if (value > 100) {
            value = 100;
        }
        if (value < 0) {
            value = 0;
        }
        return value;
    },

    //update
    _update: function() {
        var progress = this.options.value + "%";
        this.element.find('.progressbar-value').css('width', this.options.value+'%');
        if (this.options.value == 100) {
            this._trigger('complete', null, {value: 100});
        }
    }
});