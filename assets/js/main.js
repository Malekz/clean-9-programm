$.ajax({
  url:
    "http://api.ipstack.com/check?access_key=db5df308353018712b1220db9d00b850",
  dataType: "jsonp",
  success: function(response) {
    var country = response.country_code;

    // If the visitor is browsing from Germany.
    if (country == "DE") {
      // Show them all the things related to Germany.
      $(".DE").show();
    }
    // Show all each div based on its GEO location country
    else if (country == "AE") {
      $(".AE").show();
    } else if (country == "SA") {
      $("SA").show();
    } else if (country == "TR") {
      $(".TR").show();
    } else if (country == "QA") {
      $(".QA").show();
    } else if (country == "BH") {
      $(".BH").show();
    } else if (country == "SE") {
      $(".SE").show();
    } else if (country == "KW") {
      $(".KW").show();
    } else if (country == "IQ") {
      $(".IQ").show();
    } else if (country == "LB") {
      $(".LB").show();
    } else if (country == "OM") {
      $(".OM").show();
    } else if (country == "JO") {
      $(".JO").show();
    } else {
      $(".yellow-text").show();
    }
  }
});
