
function fetchEtsy() {
  $.ajax({
    url:
      "https://openapi.etsy.com/v2/shops/untitled21/listings/active.js?api_key=Ash4nl56r53k0wttvrc7whz3&includes=MainImage&fields=url,price,title,shop_section_id,description&limit=100",
    dataType: "jsonp",
    success: resp => {
      for (i = 0; i < resp.results.length; i++) {
        const div = $("<div>");
        const name = $("<h3>");
        const a = $("<a>");
        const img = $("<img>");
        const description = $("<p>");
        const price = $("<h3>");
        const button = $("<a>Buy Now</a>");
        const artRow = $(".art__row");

        const artname = resp.results[i].title;
        const artdescription = resp.results[i].description;
        const artprice = resp.results[i].price.slice(0, -3);
        const arturl = resp.results[i].url;
        const artimg = resp.results[i].MainImage.url_fullxfull;

        button.attr({
            href: arturl,
            target: "_blank"
        });

        artRow.append(div);
        name.append(artname);
        description.append(artdescription);
        price.append("$" + artprice);
        div.append(img);
        div.append(name, description, price, button);

        description.attr("class", "art__row__text");
        price.attr("class", "art__row__price");
        button.attr("class", "general-btn art__row__button");

        a.attr("href", arturl);
        img.attr({
          src: artimg,
          class: "art__row__image",
          id: "modalActivate",
          "data-toggle": "modal",
          "data-target": "#exampleModalPreview"
        });
        div.attr("class", "art__row__container");
      }
    }
  });
}
