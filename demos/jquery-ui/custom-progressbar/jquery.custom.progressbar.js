
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

    /**
     * 设置选项值
     * @param key
     * @param value
     * @private
     */
    _setOption: function(key, value) {
        this.options[key] = value;
        this._update();
    },

    /**
     * 检测值的合法性
     * @param value
     * @returns {*}
     * @private
     */
    _constrain: function(value) {
        if (value > 100) {
            value = 100;
        }
        if (value < 0) {
            value = 0;
        }
        return value;
    },

    /**
     * 更新界面
     * @private
     */
    _update: function() {
        console.log('update ...');
        var progress = this.options.value + "%";
        this.element.find('.progressbar-value').css('width', this.options.value+'%');
        if (this.options.value == 100) {
            this._trigger('complete', null, {value: 100});
        }
    }
});