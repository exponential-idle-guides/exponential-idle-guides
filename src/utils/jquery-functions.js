(function($) {
    $.fn.isAfter = function(sel) {
        return $(this).index() > $(sel).index();
    };
    $.fn.isBefore = function(sel) {
        return $(this).index() < $(sel).index();
    };
    $.fn.nextEle = function(sel) {
        return $(sel).eq($(this).index(sel) + 1);
    };
    $.fn.changeElementType = function(newType) {
        let attrs = {};

        $.each(this[0].attributes, function(idx, attr) {
            attrs[attr.nodeName] = attr.nodeValue;
        });

        return this.replaceWith(function() {
            return $("<" + newType + "/>", attrs).append($(this).contents());
        });
    };
})(jQuery);
