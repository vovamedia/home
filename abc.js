var index= 0,
    tes_end = 0,
    left = document.querySelector('.click b.left'),
    right = document.querySelector('.click b.right'),
    slide = document.querySelectorAll('.slide ul li'),
    leng_sl = slide.length,
    tes_end_ok = 'stop_n';

var nut_option = '<ol><li class="cl_0 active" onclick="checkclick(0)"></li>';
for(let i = 1; i < leng_sl; i++){
    nut_option = nut_option + '<li class="cl_'+i+'" onclick="checkclick('+i+')"></li>';
}
var naak = document.querySelector(".nut_option");
    naak.innerHTML = nut_option;

function removeActive() {
    for(let i = 0; i < leng_sl; i++){
        document.querySelector('.cl_'+i).classList.remove('active');
    }
}

function checkclick(click){
    if(tes_end_ok == 'run_n'){
        return false;
    };
    tes_end_ok = 'run_n';
    huy = index;

    removeActive();

    var check_end = 0,
        true_nunber = Number.isInteger(click); 

    var slide_on = slide[index];
    if(click=='click_right'){
        index = (index < leng_sl - 1) ? (index + 1):(0);
    }else if(click=='click_left'){
        index = (index > 0) ? (index - 1) : (leng_sl - 1); 
    }else{
        index = click;
    }

    var slide_next = slide[index];

    document.querySelector('.cl_' + index).classList.add('active');

    var end_event = function(){ 
        this.classList.remove('dangxem');
        if(true_nunber){
            this.classList.remove(ok=(huy < index)?('out-next'):('out-prev'));
        }else{
            this.classList.remove(ok=(click=='click_right')?('out-next'):('out-prev'));
        }
        check_end++;
        if(check_end == 2){tes_end_ok = 'stop_n';};
    };

    var end_event1 = function(){ 
        if(true_nunber){
            this.classList.remove(ok = (huy < index)?('in-next'):('in-prev'));
        }else{
            this.classList.remove(ok = (click=='click_right')?('in-next'):('in-prev'));
        }
        this.classList.add('dangxem');
        check_end++;
        if(check_end == 2){tes_end_ok = 'stop_n';};
    };
    slide_on.addEventListener("webkitAnimationEnd",end_event);
    slide_next.addEventListener("webkitAnimationEnd",end_event1);
    if(true_nunber){
        slide_on.classList.add(ok=(huy < index)?('out-next'):('out-prev'));
        slide_next.classList.add(ok=(huy < index)?('in-next'):('in-prev'));
        console.log(huy);
        console.log(index);
    }else{
        slide_on.classList.add(ok=(click=='click_right')?('out-next'):('out-prev'));
        slide_next.classList.add(ok=(click=='click_right')?('in-next'):('in-prev'));
    }
}

var click_right = function(){
    checkclick('click_right');
};
var click_left = function(){
    checkclick('click_left');
};
left.addEventListener('click',click_left);
right.addEventListener('click',click_right);
// autorun = setInterval(click_right, 3000);  