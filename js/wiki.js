(function(win, doc, $) {
  $("section").css({
    minHeight: $(win).height() - $("footer").innerHeight(),
    paddingTop: $(".navbar").height()
  });
  blog = blog.sort((a, b) => b.ID - a.ID);
  var enTmp = "",
    chTmp = "";
  $.each(blog, function(index, elem) {
    if (changeBtn == "en") {
      enTmp += `
            <div class="col-md-4 col-sm-6">
                <a href="wikiDetails.html?id=${elem.ID}" class="slide">
                    <div class="img">
                        <img src="${elem.enCoverImage}">
                    </div>
                    <div class="content text-right">
                        <h3>${elem.enTitle}</h3>
                        <span>${elem.enDeta}</span>
                    </div>
                    <div class="mask">See More</div>
                </a>
            </div>    
        `;
    } else if (changeBtn == "ch") {
      chTmp += `
            <div class="col-md-4 col-sm-6">
                <a href="wikiDetails.html?id=${elem.ID}" class="slide">
                    <div class="img">
                        <img src="${elem.chCoverImage}">
                    </div>
                    <div class="content text-right">
                        <h3>${elem.chTitle}</h3>
                        <span>${elem.chDeta}</span>
                    </div>
                    <div class="mask">See More</div>
                </a>
            </div>    
        `;
    }
  });

  if (changeBtn == "en") {
    $('section.en .main-body').html(enTmp);
  } else if (changeBtn == "ch") {
    $('section.ch .main-body').html(chTmp);
  }

})(window, document, jQuery);
