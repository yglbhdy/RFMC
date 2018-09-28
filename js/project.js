(function(win, doc, $){

    $('section').css('padding', $('.navbar').height()+20+'px 0');

    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
    

    $.each(proData, function(index, elem){
        var pID = GetQueryString('id'),
            proDataIn = proData[index];
        if( pID == proDataIn.ID){
            doc.title = proDataIn.ID;
            if(changeBtn == 'en'){
                $('section').html(proDataIn.enContent);
                $('.navbar .navbar-collapse .navbar-right a').prop('href', './zh-cn/projects.html?id=' + pID);
            }else if(changeBtn == 'ch'){
                $('.navbar .navbar-collapse .navbar-right a').prop('href', '../projects.html?id=' + pID);
                $('section').html(proDataIn.chContent);
            }
        }
    });

    if($(win).width() <= 768){
        $('.introduction .slide').each(function(index, elem){
            if(index%2 == 0){
                this.style.backgroundColor = '#F6F6F6';
        }
    });
    }
    

})(window, document, jQuery);