let balle = $("<div/>");
let v_down = 10;
let v_right = 10;
let p_top = 10;
let p_left = 10;
let rebond_ratio = 2/3;
let apesenteur = 2;
let interval;
let boule_width = $('#boule').width();
let boule_heigth = $('#boule').height();

let max_right = 500;
let max_bot = 500;

$(document).ready(function(){
        max_right = $(window).width();
        max_bot = $(window).height();
        balle
            .attr("id","boule")
            .css({
                "top" : p_top+'px',
                "left" : p_left+'px'
            })
            .click(function() {
                console.log(v_down);
                console.log(v_right);

                rand = Math.random() * 100;
                if (rand <= 25) {
                    v_down = v_down * 5;
                }
                else if (rand <= 50)
                {
                    v_right = v_right * 5;
                }
                else if (rand <= 75) {
                    if (v_down < 0)
                    {
                        v_down = v_down * -10;
                    }
                    else
                    {
                        v_down = v_down * 5;
                    }
                }
                else
                {
                    v_right = v_right * -5;
                }
                p_top = p_top + v_down;
                p_left = p_left + v_right;
                balle.css({
                        "top" : p_top+'px',
                        "left" : p_left+'px'
                });
            });
        $("body").append(balle);

        interval = setInterval(function(){
                move();
        },50);
});

function move(){
        p_top = p_top + v_down;
        p_left = p_left + v_right;
        balle.css({
                "top" : p_top+'px',
                "left" : p_left+'px'
        });
        v_down = v_down + apesenteur;
        if(p_top + v_down + 50 >= max_bot){
                v_down = - v_down * rebond_ratio;
        }
        if(p_left + v_right + 50 >= max_right){
                v_right = - v_right * rebond_ratio;
        }
        if(p_top + v_down<= 0){
                v_down = - v_down * rebond_ratio;
        }
        if(p_left + v_right<= 0){
                v_right = - v_right * rebond_ratio;
        }
}