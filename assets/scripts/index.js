'use strict';
$(document).ready(function() {
  var html = '';
  var section_1 = [];
  var section_2 = [];
  var section_3 = [];
  var section_4 = [];
  var section_5 = [];
  var section_6 = [];
  var section_7 = [];
  var section_8 = [];
  var section_9 = [];
  var section_10 = [];
  var section_11 = [];
  var section_12 = [];
  var section_13 = [];
  var section_14 = [];
  var section_15 = [];
  var section_16 = [];
  var section_17 = [];
  var section_18 = [];
  var section_19 = [];
  var section_20 = [];
  var section_21 = [];
  var section_22 = [];
  var section_23 = [];
  var section_24 = [];
  var section_25 = [];
  var section_26 = [];
  var section_27 = [];
  var section_28 = [];
  var section_29 = [];
  var section_30 = [];
  var individual = [];

  // $.get('https://docs.google.com/spreadsheets/d/1KiYKHmCr-K0SDY1QImf5caP5_cXw-EZUYC68O_Rnon8/pub?output=csv', function (data) {
  // $.get('yir.csv', function (data) {

  $.get('/news/wp-content/themes/nu-news-002/year-in-photos-2016/yip-final.csv', function (data) {
    var images = $.csv.toObjects(data);

    var fullImageTemplate = function(image) {
      var ret = '';

      ret += '<div class="full-image-container">';
      ret += '<div class="full-image-source" style="background:url('+image.image_url+') no-repeat center center;background-size:cover;">';
      ret += '</div>';
      ret += '<div class="image-caption">';
      ret += '<p>'+image.caption+' <i>'+image.photographer+'</i></p>';
      ret += '</div>';
      ret += '</div>';

      return ret;
    };

    var twoImageTemplate = function(image) {
      var ret = '';

      ret += '<div class="two-image-source" style="background:url('+image.image_url+') no-repeat center center;background-size:cover;">';
      ret += '</div>';

      return ret;
    };

    var twoImageHorzTemplate = function(image) {
      var ret = '';

      ret += '<div class="two-image-horz-source" style="background:url('+image.image_url+') no-repeat center center;background-size:cover;">';
      ret += '</div>';

      return ret;
    }

    var twoByTwoTemplate = function(image) {
      var ret = '';

      ret += '<div class="two-x-two-image-source" style="background:url('+image.image_url+') no-repeat center center;background-size:cover;">';
      ret += '</div>';

      return ret;
    };

    var asyncVertTemplate = function(images) {
      var ret = '';

      ret += '<div class="async-wrapper clearfix">';
      ret += '<div class="async-lrg-vert-image-source" style="background:url('+images[0].image_url+') no-repeat center center;background-size:cover;">';
      ret += '</div>';
      ret += '</div>';
      ret += '<div class="async-wrapper clearfix">';
      for (var i = 1; i < images.length; i++) {
        ret += '<div class="async-sm-horz-image-source" style="background:url('+images[i].image_url+') no-repeat center center;background-size:cover;">';
        ret += '</div>';
      }
      ret += '</div>';

      return ret;
    };

    var asyncHorzTemplate = function(images) {
      var ret = '';

      ret += '<div class="async-horz-wrapper clearfix">';
      ret += '<div class="async-lg-horz-image-source" style="background:url('+images[0].image_url+') no-repeat center center;background-size:cover;">';
      ret += '</div>';
      ret += '<div class="async-horz-wrapper clearfix">';
      for (var i = 1; i < images.length; i++) {
        ret += '<div class="async-sm-vert-image-source" style="background:url('+images[i].image_url+') no-repeat center center;background-size:cover;">';
        ret += '</div>';
      }
      ret += '</div>';

      return ret;
    };

    var triTemplate = function(image) {
      var ret = '';

      ret += '<div class="tri-image-source" style="background:url('+image.image_url+') no-repeat center center;background-size:cover;">';
      ret += '</div>';

      return ret;
    };

    var heading = function() {
      var ret = '';

      ret += '<div class="heading-container">';
      ret += '<div class="heading-content">';
      ret += '<h1>Photos of the year 2016</h1>';
      ret += '<h5>Our photographers — Matthew Modoono and Adam Glanzman — were there to capture all the monumental and memorable moments of our community in 2016.</h5>'
      ret += '</div>'
      ret +='</div>'

      return ret;
    }

    var renderFullImage = function(image) {
      html += fullImageTemplate(image);
    };

    var renderTwoImages = function(images) {
      html += '<div class="two-image-container clearfix">';
      html += '<div class="two-image-wrapper clearfix">';
      for (var i = 0; i < images.length; i++) {
        html += twoImageTemplate(images[i]);
      }
      html += '</div>';
      html += '<div class="image-caption">';
      html += '<p>'+images[0].caption+' <i>'+images[0].photographer+'</i></p>';
      html += '</div>';
      html += '</div>';
    };

    var renderTwoImagesHorz = function(images) {
      html += '<div class="two-image-container clearfix">';
      html += '<div class="two-image-wrapper clearfix">';
      for (var i = 0; i < images.length; i++) {
        html += twoImageHorzTemplate(images[i]);
      }
      if (images[0].section === 'section-19') {
        html += '</div>';
        html += '<div class="image-caption">';
        html += '<p>'+images[0].caption+'';
        html += '<a href="'+images[0].link+'" target="_blank">northestrn.me/2c5p2cb</a>) <i>'+images[0].photographer+'</i></p>';
        html += '</div>';
        html += '</div>';
      } else if (images[0].section !== 'section-19') {
        html += '</div>';
        html += '<div class="image-caption">';
        html += '<p>'+images[0].caption+' <i>'+images[0].photographer+'</i></p>';
        html += '</div>';
        html += '</div>';
      }
    };

    var renderTwoByTwoImages = function(images) {
      html += '<div class="two-x-two-container clearfix">';
      html += '<div class="two-x-two-wrapper clearfix">';
      for (var i = 0; i < images.length; i++) {
        html += twoByTwoTemplate(images[i]);
      }
      html += '</div>';
      html += '<div class="image-caption">';
      html += '<p>'+images[0].caption+' <i>'+images[0].photographer+'</i></p>';
      html += '</div>';
      html += '</div>';
    };


    var renderAsyncVertImages = function(images) {
      html += '<div class="async-container clearfix">';
      html += '<div class="async-image-wrapper clearfix">';
      html += asyncVertTemplate(images);
      html += '</div>';
      html += '<div class="image-caption">';
      html += '<p>'+images[0].caption+' <i>'+images[0].photographer+'</i></p>';
      html += '</div>';
      html += '</div>';
    };

    var renderAsyncHorzImages = function(images) {
      html += '<div class="async-container clearfix">';
      html += '<div class="async-image-wrapper clearfix">';
      html += asyncHorzTemplate(images);
      html += '</div>';
      html += '<div class="image-caption">';
      html += '<p>'+images[0].caption+' <i>'+images[0].photographer+'</i></p>';
      html += '</div>';
      html += '</div>';
    };

    var renderTriImages = function(images) {
      html += '<div class="tri-container clearfix">';
      html += '<div class="tri-image-wrapper clearfix">';
      for (var i = 0; i < images.length; i++) {
        html += triTemplate(images[i]);
      }
      html += '</div>';
      html += '<div class="image-caption">';
      html += '<p>'+images[0].caption+' <i>'+images[0].photographer+'</i></p>';
      html += '</div>';
      html += '</div>';
    };

    var renderHeading = function() {
      html += heading();
    }

    for (var i = 0; i < images.length; i++) {
     if (images[i].section === 'section-1') {
        section_1.push(images[i]);
      } else if (images[i].section === 'section-2') {
         section_2.push(images[i]);
      } else if (images[i].section === 'section-3') {
         section_3.push(images[i]);
      } else if (images[i].section === 'section-4') {
         section_4.push(images[i]);
      } else if (images[i].section === 'section-5') {
         section_5.push(images[i]);
      } else if (images[i].section === 'section-6') {
         section_6.push(images[i]);
      } else if (images[i].section === 'section-7') {
         section_7.push(images[i]);
      } else if (images[i].section === 'section-8') {
         section_8.push(images[i]);
      } else if (images[i].section === 'section-9') {
         section_9.push(images[i]);
      } else if (images[i].section === 'section-10') {
         section_10.push(images[i]);
      } else if (images[i].section === 'section-11') {
         section_11.push(images[i]);
      } else if (images[i].section === 'section-12') {
         section_12.push(images[i]);
      } else if (images[i].section === 'section-13') {
         section_13.push(images[i]);
      } else if (images[i].section === 'section-14') {
         section_14.push(images[i]);
      } else if (images[i].section === 'section-15') {
         section_15.push(images[i]);
      } else if (images[i].section === 'section-16') {
         section_16.push(images[i]);
      } else if (images[i].section === 'section-17') {
         section_17.push(images[i]);
      } else if (images[i].section === 'section-18') {
         section_18.push(images[i]);
      } else if (images[i].section === 'section-19') {
         section_19.push(images[i]);
      } else if (images[i].section === 'section-20') {
         section_20.push(images[i]);
      } else if (images[i].section === 'section-21') {
         section_21.push(images[i]);
      } else if (images[i].section === 'section-22') {
         section_22.push(images[i]);
      } else if (images[i].section === 'section-23') {
         section_23.push(images[i]);
      } else if (images[i].section === 'section-24') {
         section_24.push(images[i]);
      } else if (images[i].section === 'section-25') {
         section_25.push(images[i]);
      } else if (images[i].section === 'section-26') {
         section_26.push(images[i]);
      } else if (images[i].section === 'section-27') {
         section_27.push(images[i]);
      } else if (images[i].section === 'section-28') {
         section_28.push(images[i]);
      } else if (images[i].section === 'section-29') {
         section_29.push(images[i]);
      } else if (images[i].section === 'section-30') {
         section_30.push(images[i]);
      } else if (images[i].section === 'individual') {
         individual.push(images[i]);
      }
    }

    renderHeading();
    renderFullImage(individual[3]);
    renderTriImages(section_1);
    renderFullImage(individual[10]);
    renderTwoImagesHorz(section_28);
    renderFullImage(individual[2]);
    renderTwoByTwoImages(section_3);
    renderFullImage(individual[4]);
    renderTwoByTwoImages(section_23);
    renderFullImage(individual[5]);
    renderTwoImagesHorz(section_4);
    renderFullImage(individual[6]);
    renderTwoImagesHorz(section_26);
    renderFullImage(individual[8]);
    renderTwoImagesHorz(section_5);
    renderFullImage(individual[7]);
    renderTwoImagesHorz(section_6);
    renderFullImage(individual[9]);
    renderTwoByTwoImages(section_7);
    renderFullImage(individual[11]);
    renderTwoByTwoImages(section_8);
    renderFullImage(individual[17]);
    renderTwoImagesHorz(section_9);
    renderFullImage(individual[12]);
    renderTwoImagesHorz(section_2);
    renderFullImage(individual[19]);
    renderTwoImagesHorz(section_12);
    renderFullImage(individual[13]);
    renderTwoImagesHorz(section_13);
    renderFullImage(individual[14]);
    renderTwoByTwoImages(section_10);
    renderFullImage(individual[15]);
    renderTwoImagesHorz(section_14);
    renderFullImage(individual[16]);
    renderTwoByTwoImages(section_11);
    renderFullImage(individual[18]);
    renderTwoImagesHorz(section_19);
    renderFullImage(individual[20]);
    renderTwoImagesHorz(section_15);
    renderFullImage(individual[21]);
    renderTriImages(section_17);
    renderFullImage(individual[22]);
    renderTwoImagesHorz(section_16);
    renderFullImage(individual[1]);
    renderTwoImagesHorz(section_18);
    renderAsyncVertImages(section_20);
    renderFullImage(individual[0]);
    renderTwoByTwoImages(section_21);
    // renderFullImage(individual[23]);
    renderTwoByTwoImages(section_22);
    renderTwoImagesHorz(section_24);
    renderTwoByTwoImages(section_25);
    renderTwoImages(section_27);

    $('#content-template').html(html);
  });
});
