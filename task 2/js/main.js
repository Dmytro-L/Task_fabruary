/*$(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height > 300){
    $('.front').css({'transform' : 'rotateX(180deg)'});
    } else{
    $('.front').css({'transform' : 'rotateX(0deg)'});
    }
    if(height < 300){
    $('.back').css({'transform' : 'rotateX(180deg)'});
    } else{
    $('.back').css({'transform' : 'rotateX(360deg)'});
    }

    });
*/

    



function moveCard() {
    var intViewportHeight = window.innerHeight / 2;
    var scrollDistance = window.scrollY;
    var cont = document.querySelector('.container');
    var flip = document.querySelector('.flipper');
    var h = cont.offsetHeight / 2;
    var topDistance = cont.offsetTop - intViewportHeight  + h;
    
        console.log(topDistance)
        console.log(scrollDistance)
        console.log(intViewportHeight)

        
        if (scrollDistance - topDistance < 0) {
 
            flip.classList.add('active');
        }
        else{
            flip.classList.remove('active');
        }

}

window.addEventListener('scroll', moveCard);
