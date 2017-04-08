
$.widget('custom.progressbar', {
    options: {
        value: 0
    },

    /**
     * 插件初始化
     * @private
     */
    _create: function() {
        this.element.addClass('progressbar');
        this.element.html('<div class="progressbar-value"></div>');
        this._update();
    },

    /**
     * 设置值
     * @param value
     * @returns {number}
     */
    value: function(value) {
        if ( value === undefined ) {
            return this.options.value;
        } else {
            this.options.value = this._constrain( value );
            this._update();
        }
    },

    /**
     * 设置一个选项值
     * @param key 选项名
     * @param value 选项值
     * @private
     */
    _setOption: function(key, value) {
        console.log('The ' + key + ' option will change.');
        this._super(key, value);
        this._update();
    },

    /**
     * 设置多个选项值
     * @param key
     * @param value
     * @private
     */
    _setOptions: function(options) {
        console.log('The options will change.');
        this._super(options);
    },

    /**
     * 检测值的合法性
     * @param value
     * @returns {*}
     * @private
     */
    _constrain: function(value) {
        if (value > 100) {
            console.log('The value can not be greater than 100.');
            value = 100;
        }
        if (value < 0) {
            console.log('The value can not be less than 0');
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
        this.element.find('.progressbar-value').css('width', this.options.value + '%');

        if (this.options.value == 100) {
            this._trigger('complete', null, {value: 100});
        }
    },

    test: function() {
        console.log('test');
    },

    _test: function() {
        console.log('_test');
    }

});