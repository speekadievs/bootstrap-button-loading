(function( $ ){
    var afterTextTimeout;

    $.fn.buttonLoading = function(spin, afterText, afterClass) {
        var self = this;
        if(spin){
            if(!this.hasClass('btn-block')){
                this.css('width', this.outerWidth());
            }

            if(!this.attr('old-text')){
                this.attr('old-text', this.html());
                this.attr('old-class', this.attr('class'));
            } else {
                afterTextTimeout = null;
            }

            this.html('<i class="fa fa-refresh fa-spin"></i>');
            this.addClass('disabled');
        } else {
            if(afterText){
                this.html(afterText);
                if(afterClass){
                    this.removeClass('btn-primary btn-success btn-info btn-warning btn-default btn-danger').addClass(afterClass);
                }

                afterTextTimeout = setTimeout(function(){
                    self.removeClass().addClass(self.attr('old-class')).html(self.attr('old-text'))
                }, 5000);
            } else {
                this.html(this.attr('old-text'));
                this.attr('old-text', '');
                this.attr('old-class', '');
            }

            if(!this.hasClass('btn-block')){
                this.css('width', '');
            }


            this.removeClass('disabled');
        }
        return this;
    };
})( jQuery );