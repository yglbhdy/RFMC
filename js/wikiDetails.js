(function(win, doc, $){

    $('section').css('padding-top', $('.navbar').height()+20+'px');

    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }

    $.each(blog, function(index, elem){
        var pID = GetQueryString('id');
        if( pID == elem.ID ){
            if(changeBtn == 'en'){
                doc.title = elem.enTitle;
                $('.navbar .navbar-collapse .navbar-right .changeBtn a').prop('href', './zh-cn/wikiDetails.html?id=' + elem.ID);
                $('section .container').html(elem.enContent);
            }else if(changeBtn == 'ch'){
                doc.title = elem.chTitle;
                $('.navbar .navbar-collapse .navbar-right .changeBtn a').prop('href', '../wikiDetails.html?id=' + elem.ID);
                $('section .container').html(elem.chContent);
            }
        }
    });

})(window, document, jQuery);