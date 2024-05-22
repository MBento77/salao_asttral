// JavaScript para o modal
function setupModal() {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() { 
        modal.style.display = "none";
    }

    // Fechar o modal quando clicar fora da imagem
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    $(document).on('click', '.carousel-images .active img', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
}

// JavaScript para o carrossel
(function ($) {
    var slide = function (ele, options) {
        var $ele = $(ele);
        
        var setting = {
            speed: 2000,
            interval: 3000,
        };
        
        $.extend(true, setting, options);
        
        var states = [
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 134, $opacity: 0.2 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 0, $opacity: 0.4 },
            { $zIndex: 3, width: 170, height: 218, top: 35, left: 110, $opacity: 0.7 },
            { $zIndex: 4, width: 224, height: 288, top: 0, left: 263, $opacity: 1 }, // Este é o meio
            { $zIndex: 3, width: 170, height: 218, top: 35, left: 470, $opacity: 0.7 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 620, $opacity: 0.4 },
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 },
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 },
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 },
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 },
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 },
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 },
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 },
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 }
        ];

        var $lis = $ele.find('li');
        var timer = null;

        function move() {
            $lis.each(function (index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
                if (state.$zIndex === 4) { // Se estiver no meio
                    $(element).addClass('active').siblings().removeClass('active');
                }
            });
        }

        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }

        move();
        autoPlay();
    }
    
    $.fn.hiSlide = function (options) {
        $(this).each(function (index, ele) {
            slide(ele, options);
        });
        return this;
    }
})(jQuery);

// Inicialização do modal e carrosséis
$(document).ready(function() {
    setupModal();
});