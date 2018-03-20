'use strict';

// Constructor
var Cursos = function() {
    var timeline = $('.cursos__day__timeline');
    if ( timeline.length ) {
        var times = $('[data-target]');
        var descriptions = $('[data-description]');

        function init() {
            times.first().addClass('-active');
            descriptions.first().addClass('-active');
        }

        times.each(function(){
            var $this = $(this);

            $this.on('click',function(){

                var dataTarget = $(this).data('target');

                times.removeClass('-active');
                descriptions.removeClass('-active');
                $this.addClass('-active');

                descriptions.filter(function() {
                  return $(this).data('description') == dataTarget;
                }).addClass('-active');

            });
        });

        init();
    }

    var faqs = $('.cursos__faqs__list');
    if ( faqs.length ) {
        var faq = $('.cursos__faqs__item');

        faq.on('click', function() {
            var $this = $(this);

            if ($this.hasClass('-open')) {
                faq.removeClass('-open');
            } else {
                faq.removeClass('-open');
                $this.addClass('-open');
            }

        });
    }

    var sidebar = $('.cursos__sidebar');
    if ( sidebar.length ) {
        var list = $('.cursos__sidebar__index');
        var items = $('[data-index]');
        var toggle = $('.cursos__sidebar__toggle');
        var visible;

        items.each(function(){
            var $this = $(this);
            var href = $this.data('index');
            var text = $this.data('name');

            var li = $('<li/>')
                .appendTo(list);
            var a = $('<a/>')
                .attr('href', '#' + href)
                .html(text)
                .appendTo(li);
        });

        function isVisible(el) {
            var top = el.get(0).getBoundingClientRect().top;

            if ( top <= 150 && top >= 0 ) {
                visible = true;
            } else {
                visible = false;
            }

            return visible;
        }

        function setLinks(el) {
            var target = el.data('index');
            var links = $('.cursos__sidebar__index a');

            links.removeClass('-active');

            links.filter(function() {
              return $(this).attr('href') == '#' + target;
            }).addClass('-active');
        }

        function checkSection(el) {
            var activeSection = $('section.-visible');

            if (!el.hasClass('-visible')) {
                el.addClass('-visible');
                setLinks(el);
            } else {
                isVisible(activeSection);

                if (visible === false) {
                    items.removeClass('-visible');
                    return false;
                    scrollCheck(items);
                }
            }
        }

        function scrollCheck(el) {
            el.each(function(){
                var $this = $(this);

                $(window).on('scroll', function(){
                    _.debounce(isVisible($this), 300);

                    if (visible === true) {
                        checkSection($this);
                    }
                });
            });
        }

        scrollCheck(items);
        //setLinks(items);

        $(window).on("scroll", function() {
            var scroll = $(window).scrollTop();
            var sidebarTop = sidebar.get(0).getBoundingClientRect().top;
            var sidebarBottom = $('.contacto').get(0).getBoundingClientRect().top;

            if (sidebarBottom <= 750) {
                sidebar.addClass('-bottom');
            } else {
                sidebar.removeClass('-bottom');
            }

            if ( sidebarTop <= 120 ) {
                sidebar.addClass('-fixed');
            }

            if ( scroll <= 675 ) {
                sidebar.removeClass('-fixed');
            }

        });
    }

    var form = $('.cursos__form');
    if ( form.length ) {
        var formTrigger = $('.cursos__form__toggle');

        $(window).on("scroll", function() {
            var scroll = $(window).scrollTop();
            var formTop = form.get(0).getBoundingClientRect().top;
            //var formBottom = $('.contacto').get(0).getBoundingClientRect().top;

            if ( scroll >= 350 ) {
                form.addClass('-closed -fixed');
            } else {
                form.removeClass('-closed -fixed');
            }

        });

        formTrigger.on('click', function(e){
            form.toggleClass('-closed');
            e.preventDefault();
        });
    }
};

module.exports = Cursos;
