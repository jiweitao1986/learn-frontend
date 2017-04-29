/**
 * Created by jiweitao on 2017/4/8.
 */

$.widget('custom.superprogressbar', $.custom.progressbar, {
    red: function() {
        this.color('red');
    },

    yellow: function() {
        this.color('yellow');
    },

    blue: function() {
        this.color('blue');
    },

    color: function(color) {
        this.element.find('.progressbar-value').css('background-color', color);
    }
});