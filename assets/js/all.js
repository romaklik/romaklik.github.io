!function(i){"use strict";i(window).on("load",function(){i("#preloader").length&&i("#preloader").delay(100).fadeOut("slow",function(){i(this).remove()})}),i(window).scroll(function(){100<i(this).scrollTop()?i(".back-to-top").fadeIn("slow"):i(".back-to-top").fadeOut("slow")}),i(".back-to-top").click(function(){return i("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1});var s=i("#header").outerHeight()-17;if(i(document).on("click",".nav-menu a, .mobile-nav a, .scrollto",function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=i(this.hash);if(t.length){e.preventDefault();var a=t.offset().top-s;return"#header"==i(this).attr("href")&&(a=0),i("html, body").animate({scrollTop:a},1500,"easeInOutExpo"),i(this).parents(".nav-menu, .mobile-nav").length&&(i(".nav-menu .active, .mobile-nav .active").removeClass("active"),i(this).closest("li").addClass("active")),i("body").hasClass("mobile-nav-active")&&(i("body").removeClass("mobile-nav-active"),i(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),i(".mobile-nav-overly").fadeOut()),!1}}}),i(document).ready(function(){if(window.location.hash){var e=window.location.hash;if(i(e).length){var t=i(e).offset().top-s;i("html, body").animate({scrollTop:t},1500,"easeInOutExpo")}}}),i(".nav-menu").length){var e=i(".nav-menu").clone().prop({class:"mobile-nav d-lg-none"});i("body").append(e),i("body").prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'),i("body").append('<div class="mobile-nav-overly"></div>'),i(document).on("click",".mobile-nav-toggle",function(e){i("body").toggleClass("mobile-nav-active"),i(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),i(".mobile-nav-overly").toggle()}),i(document).on("click",".mobile-nav .drop-down > a",function(e){e.preventDefault(),i(this).next().slideToggle(300),i(this).parent().toggleClass("active")}),i(document).click(function(e){var t=i(".mobile-nav, .mobile-nav-toggle");t.is(e.target)||0!==t.has(e.target).length||i("body").hasClass("mobile-nav-active")&&(i("body").removeClass("mobile-nav-active"),i(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),i(".mobile-nav-overly").fadeOut())})}else i(".mobile-nav, .mobile-nav-toggle").length&&i(".mobile-nav, .mobile-nav-toggle").hide();i(window).scroll(function(){100<i(this).scrollTop()?i("#header").addClass("header-scrolled"):i("#header").removeClass("header-scrolled")}),100<i(window).scrollTop()&&i("#header").addClass("header-scrolled");var t=i("section"),l=i(".nav-menu, .mobile-nav");i(window).on("scroll",function(){var a=i(this).scrollTop()+200;t.each(function(){var e=i(this).offset().top,t=e+i(this).outerHeight();e<=a&&a<=t&&(a<=t&&l.find("li").removeClass("active"),l.find('a[href="#'+i(this).attr("id")+'"]').parent("li").addClass("active")),a<300&&i(".nav-menu ul:first li:first").addClass("active")})});var a=i(".carousel"),g=i(".carousel-indicators");a.find(".carousel-inner").children(".carousel-item").each(function(e){0===e?g.append("<li data-target='#introCarousel' data-slide-to='"+e+"' class='active'></li>"):g.append("<li data-target='#introCarousel' data-slide-to='"+e+"'></li>")}),a.on("slid.bs.carousel",function(e){i(this).find("h2").addClass("animate__animated animate__fadeInDown"),i(this).find("p, .btn-get-started").addClass("animate__animated animate__fadeInUp")}),i("#skills").waypoint(function(){i(".progress .progress-bar").each(function(){i(this).css("width",i(this).attr("aria-valuenow")+"%")})},{offset:"80%"}),i('[data-toggle="counter-up"]').counterUp({delay:10,time:1e3});var o=i(".portfolio-container").isotope({itemSelector:".portfolio-item",layoutMode:"fitRows"});function m(){AOS.init({duration:1e3,once:!0})}i("#portfolio-flters li").on("click",function(){i("#portfolio-flters li").removeClass("filter-active"),i(this).addClass("filter-active"),o.isotope({filter:i(this).data("filter")}),m()}),i(document).ready(function(){i(".venobox").venobox()}),i(".clients-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,responsive:{0:{items:2},768:{items:4},900:{items:6}}}),i(".testimonials-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,items:1}),i(".portfolio-details-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,items:1}),i(window).on("load",function(){m()})}(jQuery),new Vue({el:"#cvet",data:{cimages:[{title:"Лунные бабочки",image:{large:"assets/img/cvet/1.webp"}},{title:"Крым. Любимовский пляж. Утро",image:{large:"assets/img/cvet/2.webp"}},{title:"Динозавры в Севастополе",image:{large:"assets/img/cvet/3.webp"}},{title:"Японские мотивы",image:{large:"assets/img/cvet/4.webp"}},{title:"Лунные бабочки. Белая версия",image:{large:"assets/img/cvet/5.webp"}},{title:"Пегас и роза",image:{large:"assets/img/cvet/6.webp"}},{title:"Березовая роща",image:{large:"assets/img/cvet/7.webp"}},{title:"Извержение",image:{large:"assets/img/cvet/8.webp"}},{title:"Снежинки и роза",image:{large:"assets/img/cvet/9.webp"}},{title:"Крымский берег. Маки",image:{large:"assets/img/cvet/10.webp"}},{title:"Мой мир",image:{large:"assets/img/cvet/11.webp"}},{title:"Огонь и лед",image:{large:"assets/img/cvet/12.webp"}},{title:"Шторм. Яхта. Дельфины",image:{large:"assets/img/cvet/13.webp"}},{title:"Севастополь. Май 1944 г. I часть",image:{large:"assets/img/cvet/14.webp"}},{title:"Солнечные березы",image:{large:"assets/img/cvet/15.webp"}},{title:"Севастополь. Май 1944 г. II часть",image:{large:"assets/img/cvet/19.webp"}},{title:"Севастополь. Май 1944 г. III часть",image:{large:"assets/img/cvet/18.webp"}},{title:"Богиня леса",image:{large:"assets/img/cvet/20.webp"}},{title:"Котик",image:{large:"assets/img/cvet/21.webp"}},{title:"Первобытное семя",image:{large:"assets/img/cvet/22.webp"}},{title:"Огонь и лед",image:{large:"assets/img/cvet/25.webp"}},{title:"Мой мир",image:{large:"assets/img/cvet/31.webp"}},{title:"Крымский пейзаж",image:{large:"assets/img/cvet/34.webp"}},{title:"Огонь и лед",image:{large:"assets/img/cvet/41.webp"}},{title:"Противостояние",image:{large:"assets/img/cvet/42.webp"}},{title:"Березки",image:{large:"assets/img/cvet/43.webp"}},{title:"Вино. Косатки и Перевал Дятлова",image:{large:"assets/img/cvet/48.webp"}},{title:"Единорог",image:{large:"assets/img/cvet/49.webp"}},{title:"Мир иллюзий",image:{large:"assets/img/cvet/51.webp"}},{title:"Роза и снежинки",image:{large:"assets/img/cvet/52.webp"}},{title:"Неоновые грибы",image:{large:"assets/img/cvet/53.webp"}},{title:"Цветок",image:{large:"assets/img/cvet/55.webp"}},{title:"Горное озеро",image:{large:"assets/img/cvet/56.webp"}},{title:"Ноев ковчег",image:{large:"assets/img/cvet/57.webp"}},{title:"Портал",image:{large:"assets/img/cvet/58.webp"}},{title:"Гнев Души",image:{large:"assets/img/cvet/59.webp"}},{title:"Черный кот",image:{large:"assets/img/cvet/60.webp"}},{title:"Букет",image:{large:"assets/img/cvet/61.webp"}},{title:"Роза",image:{large:"assets/img/cvet/62.webp"}},{title:"Театр Луначарского",image:{large:"assets/img/cvet/63.webp"}},{title:"Черепаха и Дуб",image:{large:"assets/img/cvet/64.webp"}},{title:"Первобытное семя. Гуашь.",year:"2020",image:{large:"assets/img/cvet/65.webp"}}]}});var chernobelie=new Vue({el:"#cherno-belie",data:{cbimages:[{title:"Динозавры в Севастополе",year:"2018",image:{large:"assets/img/cb/1.webp"}},{title:"Гнев Души",year:"2018",image:{large:"assets/img/cb/2.webp"}},{title:"Она",year:"Версия 2019",image:{large:"assets/img/cb/3.webp"}},{title:"Пегас и Космический Барашек",year:"2018",image:{large:"assets/img/cb/4.webp"}},{title:"Круги на циферблате Вечности",year:"2018",image:{large:"assets/img/cb/5.webp"}},{title:"Первобытное семя",year:"1999",image:{large:"assets/img/cb/6.webp"}},{title:"Рука в стакане Бытия",year:"2017",image:{large:"assets/img/cb/7.webp"}},{title:"Малыши",year:"1998",image:{large:"assets/img/cb/8.webp"}},{title:"Как я болел ангиной",year:"1996",image:{large:"assets/img/cb/10.webp"}},{title:"Ирина",year:"2018",image:{large:"assets/img/cb/11.webp"}},{title:"Мир Иллюзий",year:"2018",image:{large:"assets/img/cb/12.webp"}},{title:"Автопортрет. Шарж",year:"2018",image:{large:"assets/img/cb/13.webp"}},{title:"Пегас и Космический Барашек",year:"2019",image:{large:"assets/img/cb/18.webp"}},{title:"Кот и спящая Собака",year:"2018",image:{large:"assets/img/cb/19.webp"}},{title:"Дкрик Души",year:"2019",image:{large:"assets/img/cb/20.webp"}},{title:"Мой мир",year:"2019",image:{large:"assets/img/cb/21.webp"}},{title:"Ключ от времени",year:"2019",image:{large:"assets/img/cb/23.webp"}},{title:"Богиня",year:"1997",image:{large:"assets/img/cb/25.webp"}},{title:"Война",year:"2001",image:{large:"assets/img/cb/26.webp"}},{title:"Силы Света и Тьмы",year:"1994",image:{large:"assets/img/cb/27.webp"}},{title:"Хранитель Гор",year:"2003",image:{large:"assets/img/cb/28.webp"}},{title:"Татуировка",year:"1997",image:{large:"assets/img/cb/29.webp"}},{title:"Кинжал",year:"2005",image:{large:"assets/img/cb/30.webp"}},{title:"Солнечные паруса",year:"1999",image:{large:"assets/img/cb/31.webp"}},{title:"Меч",year:"1994",image:{large:"assets/img/cb/32.webp"}},{title:"Мир Иллюзий",year:"Версия 1998",image:{large:"assets/img/cb/33.webp"}},{title:"Воспоминания о сахалине",year:"1998",image:{large:"assets/img/cb/34.webp"}},{title:"Цветок",year:"1996",image:{large:"assets/img/cb/35.webp"}},{title:"Привидение и Инопланетянин",year:"2020",image:{large:"assets/img/cb/36.webp"}},{title:"Черепаха и Дуб",year:"2020",image:{large:"assets/img/cb/37.webp"}}]}});new Vue({el:"#threed",data:{threedimages:[{title:"Шар",image:{large:"assets/img/threed/1.webp"}},{title:"Шар и ножницы",image:{large:"assets/img/threed/2.webp"}},{title:"Пасажирский самолет летящий",image:{large:"assets/img/threed/3.webp"}},{title:"Карандаш",image:{large:"assets/img/threed/4.webp"}},{title:"Бабочка",image:{large:"assets/img/threed/5.webp"}},{title:"Дырка в ладоне",image:{large:"assets/img/threed/6.webp"}},{title:"Порхающая бабочка",image:{large:"assets/img/threed/7.webp"}},{title:"Луна",image:{large:"assets/img/threed/8.webp"}},{title:"В столе трещина",image:{large:"assets/img/threed/9.webp"}},{title:"Шар",image:{large:"assets/img/threed/10.webp"}},{title:"Лодка парящая. Часть I",image:{large:"assets/img/threed/11.webp"}},{title:"Лодка парящая. Часть II",image:{large:"assets/img/threed/12.webp"}}]}}),new Vue({el:"#foto-s-vistavki",data:{vistavkaimages:[{title:"1",image:{large:"assets/img/foto-s-vistavki/1.webp"}},{title:"2",image:{large:"assets/img/foto-s-vistavki/2.webp"}},{title:"3",image:{large:"assets/img/foto-s-vistavki/3.webp"}},{title:"4",image:{large:"assets/img/foto-s-vistavki/4.webp"}},{title:"5",image:{large:"assets/img/foto-s-vistavki/5.webp"}},{title:"6",image:{large:"assets/img/foto-s-vistavki/6.webp"}},{title:"7",image:{large:"assets/img/foto-s-vistavki/7.webp"}},{title:"8",image:{large:"assets/img/foto-s-vistavki/8.webp"}},{title:"9",image:{large:"assets/img/foto-s-vistavki/9.webp"}},{title:"10",image:{large:"assets/img/foto-s-vistavki/10.webp"}},{title:"11",image:{large:"assets/img/foto-s-vistavki/11.webp"}},{title:"12",image:{large:"assets/img/foto-s-vistavki/12.webp"}},{title:"13",image:{large:"assets/img/foto-s-vistavki/13.webp"}},{title:"14",image:{large:"assets/img/foto-s-vistavki/14.webp"}},{title:"15",image:{large:"assets/img/foto-s-vistavki/15.webp"}},{title:"16",image:{large:"assets/img/foto-s-vistavki/16.webp"}},{title:"17",image:{large:"assets/img/foto-s-vistavki/17.webp"}},{title:"18",image:{large:"assets/img/foto-s-vistavki/18.webp"}},{title:"19",image:{large:"assets/img/foto-s-vistavki/19.webp"}},{title:"20",image:{large:"assets/img/foto-s-vistavki/20.webp"}},{title:"21",image:{large:"assets/img/foto-s-vistavki/21.webp"}}]}}),new Vue({el:"#about",data:{about:[{h2text:"Обо мне",ptext:"Родился в 1977 году в городе Севастополе, 24 мая. Творить пытался лет с восьми, но торкнуло по-настоящему ровно в 18 лет. Собственно тогда я и нарисовал свою первую серьезную работу и назвал ее 'Она'. Самый продуктивный период творения длился примерно десять лет, с 1995 по 2005 г. За эти годы мне кажется я создал самые свои лучшие произведения. В 2005 году женился и как вы понимаете стало немного не до этого. Примерно до 2012 года был застой, но потом я вновь продолжил творить, что собственно и происходит до сих пор. Не знаю, к счастью или к сожалению, но я нигде не учился и никого художественного заведения не заканчивал."}]}}),new Vue({el:"#footer",data:{about:[{ptext:"Смотри. Учись. Твори"}]}});var video=new Vue({el:"#video",data:{video:[{videoy:"https://www.youtube.com/embed/PvRAYGADcgA"},{videoy:"https://www.youtube.com/embed/5ktNCybF19c"}]}});!function(i){"use strict";i(window).on("load",function(){i("#preloader").length&&i("#preloader").delay(100).fadeOut("slow",function(){i(this).remove()})}),i(window).scroll(function(){100<i(this).scrollTop()?i(".back-to-top").fadeIn("slow"):i(".back-to-top").fadeOut("slow")}),i(".back-to-top").click(function(){return i("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1});var s=i("#header").outerHeight()-17;if(i(document).on("click",".nav-menu a, .mobile-nav a, .scrollto",function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=i(this.hash);if(t.length){e.preventDefault();var a=t.offset().top-s;return"#header"==i(this).attr("href")&&(a=0),i("html, body").animate({scrollTop:a},1500,"easeInOutExpo"),i(this).parents(".nav-menu, .mobile-nav").length&&(i(".nav-menu .active, .mobile-nav .active").removeClass("active"),i(this).closest("li").addClass("active")),i("body").hasClass("mobile-nav-active")&&(i("body").removeClass("mobile-nav-active"),i(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),i(".mobile-nav-overly").fadeOut()),!1}}}),i(document).ready(function(){if(window.location.hash){var e=window.location.hash;if(i(e).length){var t=i(e).offset().top-s;i("html, body").animate({scrollTop:t},1500,"easeInOutExpo")}}}),i(".nav-menu").length){var e=i(".nav-menu").clone().prop({class:"mobile-nav d-lg-none"});i("body").append(e),i("body").prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'),i("body").append('<div class="mobile-nav-overly"></div>'),i(document).on("click",".mobile-nav-toggle",function(e){i("body").toggleClass("mobile-nav-active"),i(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),i(".mobile-nav-overly").toggle()}),i(document).on("click",".mobile-nav .drop-down > a",function(e){e.preventDefault(),i(this).next().slideToggle(300),i(this).parent().toggleClass("active")}),i(document).click(function(e){var t=i(".mobile-nav, .mobile-nav-toggle");t.is(e.target)||0!==t.has(e.target).length||i("body").hasClass("mobile-nav-active")&&(i("body").removeClass("mobile-nav-active"),i(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),i(".mobile-nav-overly").fadeOut())})}else i(".mobile-nav, .mobile-nav-toggle").length&&i(".mobile-nav, .mobile-nav-toggle").hide();i(window).scroll(function(){100<i(this).scrollTop()?i("#header").addClass("header-scrolled"):i("#header").removeClass("header-scrolled")}),100<i(window).scrollTop()&&i("#header").addClass("header-scrolled");var t=i("section"),l=i(".nav-menu, .mobile-nav");i(window).on("scroll",function(){var a=i(this).scrollTop()+200;t.each(function(){var e=i(this).offset().top,t=e+i(this).outerHeight();e<=a&&a<=t&&(a<=t&&l.find("li").removeClass("active"),l.find('a[href="#'+i(this).attr("id")+'"]').parent("li").addClass("active")),a<300&&i(".nav-menu ul:first li:first").addClass("active")})});var a=i(".carousel"),g=i(".carousel-indicators");a.find(".carousel-inner").children(".carousel-item").each(function(e){0===e?g.append("<li data-target='#introCarousel' data-slide-to='"+e+"' class='active'></li>"):g.append("<li data-target='#introCarousel' data-slide-to='"+e+"'></li>")}),a.on("slid.bs.carousel",function(e){i(this).find("h2").addClass("animate__animated animate__fadeInDown"),i(this).find("p, .btn-get-started").addClass("animate__animated animate__fadeInUp")}),i("#skills").waypoint(function(){i(".progress .progress-bar").each(function(){i(this).css("width",i(this).attr("aria-valuenow")+"%")})},{offset:"80%"}),i('[data-toggle="counter-up"]').counterUp({delay:10,time:1e3});var o=i(".portfolio-container").isotope({itemSelector:".portfolio-item",layoutMode:"fitRows"});function m(){AOS.init({duration:1e3,once:!0})}i("#portfolio-flters li").on("click",function(){i("#portfolio-flters li").removeClass("filter-active"),i(this).addClass("filter-active"),o.isotope({filter:i(this).data("filter")}),m()}),i(document).ready(function(){i(".venobox").venobox()}),i(".clients-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,responsive:{0:{items:2},768:{items:4},900:{items:6}}}),i(".testimonials-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,items:1}),i(".portfolio-details-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,items:1}),i(window).on("load",function(){m()})}(jQuery),new Vue({el:"#cvet",data:{cimages:[{title:"Лунные бабочки",image:{large:"assets/img/cvet/1.webp"}},{title:"Крым. Любимовский пляж. Утро",image:{large:"assets/img/cvet/2.webp"}},{title:"Динозавры в Севастополе",image:{large:"assets/img/cvet/3.webp"}},{title:"Японские мотивы",image:{large:"assets/img/cvet/4.webp"}},{title:"Лунные бабочки. Белая версия",image:{large:"assets/img/cvet/5.webp"}},{title:"Пегас и роза",image:{large:"assets/img/cvet/6.webp"}},{title:"Березовая роща",image:{large:"assets/img/cvet/7.webp"}},{title:"Извержение",image:{large:"assets/img/cvet/8.webp"}},{title:"Снежинки и роза",image:{large:"assets/img/cvet/9.webp"}},{title:"Крымский берег. Маки",image:{large:"assets/img/cvet/10.webp"}},{title:"Мой мир",image:{large:"assets/img/cvet/11.webp"}},{title:"Огонь и лед",image:{large:"assets/img/cvet/12.webp"}},{title:"Шторм. Яхта. Дельфины",image:{large:"assets/img/cvet/13.webp"}},{title:"Севастополь. Май 1944 г. I часть",image:{large:"assets/img/cvet/14.webp"}},{title:"Солнечные березы",image:{large:"assets/img/cvet/15.webp"}},{title:"Севастополь. Май 1944 г. II часть",image:{large:"assets/img/cvet/19.webp"}},{title:"Севастополь. Май 1944 г. III часть",image:{large:"assets/img/cvet/18.webp"}},{title:"Богиня леса",image:{large:"assets/img/cvet/20.webp"}},{title:"Котик",image:{large:"assets/img/cvet/21.webp"}},{title:"Первобытное семя",image:{large:"assets/img/cvet/22.webp"}},{title:"Огонь и лед",image:{large:"assets/img/cvet/25.webp"}},{title:"Мой мир",image:{large:"assets/img/cvet/31.webp"}},{title:"Крымский пейзаж",image:{large:"assets/img/cvet/34.webp"}},{title:"Огонь и лед",image:{large:"assets/img/cvet/41.webp"}},{title:"Противостояние",image:{large:"assets/img/cvet/42.webp"}},{title:"Березки",image:{large:"assets/img/cvet/43.webp"}},{title:"Вино. Косатки и Перевал Дятлова",image:{large:"assets/img/cvet/48.webp"}},{title:"Единорог",image:{large:"assets/img/cvet/49.webp"}},{title:"Мир иллюзий",image:{large:"assets/img/cvet/51.webp"}},{title:"Роза и снежинки",image:{large:"assets/img/cvet/52.webp"}},{title:"Неоновые грибы",image:{large:"assets/img/cvet/53.webp"}},{title:"Цветок",image:{large:"assets/img/cvet/55.webp"}},{title:"Горное озеро",image:{large:"assets/img/cvet/56.webp"}},{title:"Ноев ковчег",image:{large:"assets/img/cvet/57.webp"}},{title:"Портал",image:{large:"assets/img/cvet/58.webp"}},{title:"Гнев Души",image:{large:"assets/img/cvet/59.webp"}},{title:"Черный кот",image:{large:"assets/img/cvet/60.webp"}},{title:"Букет",image:{large:"assets/img/cvet/61.webp"}},{title:"Роза",image:{large:"assets/img/cvet/62.webp"}},{title:"Театр Луначарского",image:{large:"assets/img/cvet/63.webp"}},{title:"Черепаха и Дуб",image:{large:"assets/img/cvet/64.webp"}},{title:"Первобытное семя. Гуашь.",year:"2020",image:{large:"assets/img/cvet/65.webp"}}]}}),chernobelie=new Vue({el:"#cherno-belie",data:{cbimages:[{title:"Динозавры в Севастополе",year:"2018",image:{large:"assets/img/cb/1.webp"}},{title:"Гнев Души",year:"2018",image:{large:"assets/img/cb/2.webp"}},{title:"Она",year:"Версия 2019",image:{large:"assets/img/cb/3.webp"}},{title:"Пегас и Космический Барашек",year:"2018",image:{large:"assets/img/cb/4.webp"}},{title:"Круги на циферблате Вечности",year:"2018",image:{large:"assets/img/cb/5.webp"}},{title:"Первобытное семя",year:"1999",image:{large:"assets/img/cb/6.webp"}},{title:"Рука в стакане Бытия",year:"2017",image:{large:"assets/img/cb/7.webp"}},{title:"Малыши",year:"1998",image:{large:"assets/img/cb/8.webp"}},{title:"Как я болел ангиной",year:"1996",image:{large:"assets/img/cb/10.webp"}},{title:"Ирина",year:"2018",image:{large:"assets/img/cb/11.webp"}},{title:"Мир Иллюзий",year:"2018",image:{large:"assets/img/cb/12.webp"}},{title:"Автопортрет. Шарж",year:"2018",image:{large:"assets/img/cb/13.webp"}},{title:"Пегас и Космический Барашек",year:"2019",image:{large:"assets/img/cb/18.webp"}},{title:"Кот и спящая Собака",year:"2018",image:{large:"assets/img/cb/19.webp"}},{title:"Дкрик Души",year:"2019",image:{large:"assets/img/cb/20.webp"}},{title:"Мой мир",year:"2019",image:{large:"assets/img/cb/21.webp"}},{title:"Ключ от времени",year:"2019",image:{large:"assets/img/cb/23.webp"}},{title:"Богиня",year:"1997",image:{large:"assets/img/cb/25.webp"}},{title:"Война",year:"2001",image:{large:"assets/img/cb/26.webp"}},{title:"Силы Света и Тьмы",year:"1994",image:{large:"assets/img/cb/27.webp"}},{title:"Хранитель Гор",year:"2003",image:{large:"assets/img/cb/28.webp"}},{title:"Татуировка",year:"1997",image:{large:"assets/img/cb/29.webp"}},{title:"Кинжал",year:"2005",image:{large:"assets/img/cb/30.webp"}},{title:"Солнечные паруса",year:"1999",image:{large:"assets/img/cb/31.webp"}},{title:"Меч",year:"1994",image:{large:"assets/img/cb/32.webp"}},{title:"Мир Иллюзий",year:"Версия 1998",image:{large:"assets/img/cb/33.webp"}},{title:"Воспоминания о сахалине",year:"1998",image:{large:"assets/img/cb/34.webp"}},{title:"Цветок",year:"1996",image:{large:"assets/img/cb/35.webp"}},{title:"Привидение и Инопланетянин",year:"2020",image:{large:"assets/img/cb/36.webp"}},{title:"Черепаха и Дуб",year:"2020",image:{large:"assets/img/cb/37.webp"}}]}}),new Vue({el:"#threed",data:{threedimages:[{title:"Шар",image:{large:"assets/img/threed/1.webp"}},{title:"Шар и ножницы",image:{large:"assets/img/threed/2.webp"}},{title:"Пасажирский самолет летящий",image:{large:"assets/img/threed/3.webp"}},{title:"Карандаш",image:{large:"assets/img/threed/4.webp"}},{title:"Бабочка",image:{large:"assets/img/threed/5.webp"}},{title:"Дырка в ладоне",image:{large:"assets/img/threed/6.webp"}},{title:"Порхающая бабочка",image:{large:"assets/img/threed/7.webp"}},{title:"Луна",image:{large:"assets/img/threed/8.webp"}},{title:"В столе трещина",image:{large:"assets/img/threed/9.webp"}},{title:"Шар",image:{large:"assets/img/threed/10.webp"}},{title:"Лодка парящая. Часть I",image:{large:"assets/img/threed/11.webp"}},{title:"Лодка парящая. Часть II",image:{large:"assets/img/threed/12.webp"}}]}}),new Vue({el:"#foto-s-vistavki",data:{vistavkaimages:[{title:"1",image:{large:"assets/img/foto-s-vistavki/1.webp"}},{title:"2",image:{large:"assets/img/foto-s-vistavki/2.webp"}},{title:"3",image:{large:"assets/img/foto-s-vistavki/3.webp"}},{title:"4",image:{large:"assets/img/foto-s-vistavki/4.webp"}},{title:"5",image:{large:"assets/img/foto-s-vistavki/5.webp"}},{title:"6",image:{large:"assets/img/foto-s-vistavki/6.webp"}},{title:"7",image:{large:"assets/img/foto-s-vistavki/7.webp"}},{title:"8",image:{large:"assets/img/foto-s-vistavki/8.webp"}},{title:"9",image:{large:"assets/img/foto-s-vistavki/9.webp"}},{title:"10",image:{large:"assets/img/foto-s-vistavki/10.webp"}},{title:"11",image:{large:"assets/img/foto-s-vistavki/11.webp"}},{title:"12",image:{large:"assets/img/foto-s-vistavki/12.webp"}},{title:"13",image:{large:"assets/img/foto-s-vistavki/13.webp"}},{title:"14",image:{large:"assets/img/foto-s-vistavki/14.webp"}},{title:"15",image:{large:"assets/img/foto-s-vistavki/15.webp"}},{title:"16",image:{large:"assets/img/foto-s-vistavki/16.webp"}},{title:"17",image:{large:"assets/img/foto-s-vistavki/17.webp"}},{title:"18",image:{large:"assets/img/foto-s-vistavki/18.webp"}},{title:"19",image:{large:"assets/img/foto-s-vistavki/19.webp"}},{title:"20",image:{large:"assets/img/foto-s-vistavki/20.webp"}},{title:"21",image:{large:"assets/img/foto-s-vistavki/21.webp"}}]}}),new Vue({el:"#about",data:{about:[{h2text:"Обо мне",ptext:"Родился в 1977 году в городе Севастополе, 24 мая. Творить пытался лет с восьми, но торкнуло по-настоящему ровно в 18 лет. Собственно тогда я и нарисовал свою первую серьезную работу и назвал ее 'Она'. Самый продуктивный период творения длился примерно десять лет, с 1995 по 2005 г. За эти годы мне кажется я создал самые свои лучшие произведения. В 2005 году женился и как вы понимаете стало немного не до этого. Примерно до 2012 года был застой, но потом я вновь продолжил творить, что собственно и происходит до сих пор. Не знаю, к счастью или к сожалению, но я нигде не учился и никого художественного заведения не заканчивал."}]}}),new Vue({el:"#footer",data:{about:[{ptext:"Смотри. Учись. Твори"}]}}),video=new Vue({el:"#video",data:{video:[{videoy:"https://www.youtube.com/embed/PvRAYGADcgA"},{videoy:"https://www.youtube.com/embed/5ktNCybF19c"}]}});