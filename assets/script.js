let ukuranlayar = window.innerWidth;
const audio = document.querySelector('.audio');
// $(".time").each((index, item) => {
//     item.dataset.aos='fade-left';
//     item.dataset.aosDuration = index * 1000;
// })

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset:120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
});




$('.link').on('click', function(e) {
    e.preventDefault(); 
    href = $(this).attr('href'); 
    href = $(href);
    href = href.offset().top; 
    $('body, html').animate({
        scrollTop:href,
    }, 1000, 'easeInOutExpo')
})

gsap.from('.invite-title', {
    y:'-500%',
    opacity:0,
    duration:2,
})

gsap.to('.profile-frame', {
    rotation: "360deg", 
    repeat: -1,
    ease: "none",
    duration:10,
})


function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
var cookie  = getCookie('login'); 
var scookie = String(cookie); 

$(window).on('resize', function() {
    let mobile = window.innerWidth;
    if(mobile <= 683) {
        $('.nav').css({
            'display': 'inline-block',
        })
    } else if(mobile > 683) {
        $('.nav').css({
            'display': 'none',
        })
    }
})

$('.open').on('click', function() {
    $('body, html').animate({
        scrollTop: 0,
    })
    if(ukuranlayar <= 683) {
        $('.nav').css({
            'display':'inline-block',
        })
    } else if(ukuranlayar > 683) {
        $('.nav').css({
            'display':'none',
        })
    }

    $('.invite').addClass('buka'); 
    $('.profile').addClass('aktif'); 
    $('.myicon').css({
        'display': 'inline-block'
    })
    audio.play(); 
    setCookie('login','true',1);    
})

$('.myicon').on('click', function() {
    if($('.myicon i').hasClass('fa-play')) {
        $('.myicon').html('<i class="fas fa-pause"></i>');
        audio.play(); 
    } else {
        $('.myicon').html('<i class="fas fa-play"></i>');
        audio.pause();
    }
 });






$(window).on('scroll', function() {
    let scrollPos = $(this).scrollTop();
    let objectPos = Math.ceil($('.amplop').offset().top); 
    let boxesPos  = Math.ceil($('.boxs').offset().top);
    
    
    if(window.innerWidth <= 683) {
        // Quran Translate 
        let zoompos = Math.ceil($('.quran').offset().top); 
        if(scrollPos > zoompos - 500) {
            $('.quran .zoomdown').each((index, item) => {
                setTimeout(() => {
                    $('.quran .zoomdown').eq(index).addClass('zoomdownnormal');
                }, index * 500);
            });
        }
        // Waktu
        let waktupos = Math.ceil($('.waktu').offset().top); 
        if(scrollPos > waktupos - 500) {
            $('.waktu .zoomdown').each((index, item) => {
                setTimeout(() => {
                    $('.waktu .zoomdown').eq(index).addClass('zoomdownnormal');
                }, index * 500);
            });
        } 
        if(scrollPos > waktupos - 200) {
            $('.waktu .slideleft').each((index, item) => {
                setTimeout(() => {
                    $('.waktu .slideleft').eq(index).addClass('slideleftnormal');
                }, index * 500);
            });
        }
        if(scrollPos > waktupos) {
            $('.waktu .card').each((index, item) => {
                setTimeout(() => {
                    $('.waktu .card').eq(index).addClass('slideleftnormal');
                }, index * 500);
            });
        }
        // Love story
        let lovestorypos = Math.ceil($('.love-story').offset().top); // 1858
        console.log(scrollPos);
        if(scrollPos > lovestorypos - 400) {
            $('.love-story .zoomdown').each((index, item) => {
                setTimeout(() => {
                    $('.love-story .zoomdown').eq(index).addClass('zoomdownnormal');
                }, index * 500);
            });
        } 
        if(scrollPos > lovestorypos - 200) {
            $('.love-story .slideleft').each((index, item) => {
                setTimeout(() => {
                    $('.love-story .slideleft').eq(index).addClass('slideleftnormal');
                }, index * 500);
            });
        }

        // Bismillah
        let bismillah = Math.ceil($('.bismillah .slideup').offset().top); 
        if(scrollPos > bismillah - 1000) {
            console.log("Kesini");
            $('.bismillah .slideup').addClass('slideupnormal')
        }
        // Laki laki
        if(scrollPos > Math.ceil($('.bismillah .male').offset().top) - 1000) {
            $('.bismillah .male').addClass('slideleftnormal')
        }
        // Perempuan
        if(scrollPos > Math.ceil($('.bismillah .female').offset().top) - 1000) {
            $('.bismillah .female').addClass('sliderightnormal')
        }

        let amploppos = Math.ceil($('.amplop').offset().top); 
        if(scrollPos > amploppos - 500) {
            $('.amplop .zoomdown').each((index, item) => {
                setTimeout(() => {
                    $('.amplop .zoomdown').eq(index).addClass('zoomdownnormal');
                }, index * 500);
            });
        } 
        // Amplop
        if(scrollPos > amploppos - 200) {
            $('.amplop .card').each((index, item) => {
                setTimeout(() => {
                    $('.amplop .card').eq(index).addClass('muncul');
                }, index * 500); 
            });
        }

        let himbaupos = Math.ceil($('.himbauan').offset().top); 
        if(scrollPos > himbaupos - 500) {
            $('.himbauan .zoomdown').each((index, item) => {
                setTimeout(() => {
                    $('.himbauan .zoomdown').eq(index).addClass('zoomdownnormal');
                }, index * 500);
            });
        } 
        // Protokol Kesehatan
        if(scrollPos > boxesPos - 500) {        
            $('.box').each((index, item) => {
                
                setTimeout(() => {
                    $('.box').eq(index).addClass('muncul');
                }, index * 500)
            })
        }

        
        let ucapanpos = Math.ceil($('.ucapan').offset().top); 
        if(scrollPos > ucapanpos - 500) {
            $('.ucapan .zoomdown').each((index, item) => {
                setTimeout(() => {
                    $('.ucapan .zoomdown').eq(index).addClass('zoomdownnormal');
                }, index * 500);
            });
        } 
    } 
    
    
    
    else {
        // Quran Translate 
        let zoompos = Math.ceil($('.quran').offset().top); 
        if(scrollPos > zoompos - 500) {
            $('.quran .zoomdown').each((index, item) => {
                setTimeout(() => {
                    $('.quran .zoomdown').eq(index).addClass('zoomdownnormal');
                }, index * 500);
            });
        }
        // Waktu
        let waktupos = Math.ceil($('.waktu').offset().top); 
        if(scrollPos > waktupos - 500) {
            $('.waktu .zoomdown').each((index, item) => {
                setTimeout(() => {
                    $('.waktu .zoomdown').eq(index).addClass('zoomdownnormal');
                }, index * 500);
            });
        } 
        if(scrollPos > waktupos - 300) {
            $('.waktu .slideleft').each((index, item) => {
                setTimeout(() => {
                    $('.waktu .slideleft').eq(index).addClass('slideleftnormal');
                }, index * 500);
            });
        }
        if(scrollPos > waktupos) {
            $('.waktu .card').each((index, item) => {
                setTimeout(() => {
                    $('.waktu .card').eq(index).addClass('slideleftnormal');
                }, index * 500);
            });
        }
        // Love story
        let lovestorypos = Math.ceil($('.love-story').offset().top); // 1858
        console.log(scrollPos);
        if(scrollPos > lovestorypos - 600) {
            $('.love-story .zoomdown').each((index, item) => {
                setTimeout(() => {
                    $('.love-story .zoomdown').eq(index).addClass('zoomdownnormal');
                }, index * 500);
            });
        } 
        if(scrollPos > lovestorypos - 300) {
            $('.love-story .slideleft').each((index, item) => {
                setTimeout(() => {
                    $('.love-story .slideleft').eq(index).addClass('slideleftnormal');
                }, index * 500);
            });
        }

        // Bismillah
        let bismillah = Math.ceil($('.bismillah .slideup').offset().top); 
        if(scrollPos > bismillah) {
            console.log("Kesini");
            $('.bismillah .slideup').addClass('slideupnormal')
        }
        // Laki laki
        if(scrollPos > Math.ceil($('.bismillah .male').offset().top) - 500) {
            $('.bismillah .male').addClass('slideleftnormal')
        }
        // Perempuan
        if(scrollPos > Math.ceil($('.bismillah .female').offset().top) - 500) {
            $('.bismillah .female').addClass('sliderightnormal')
        }

        let amploppos = Math.ceil($('.amplop').offset().top); 
        if(scrollPos > amploppos - 600) {
            $('.amplop .zoomdown').each((index, item) => {
                setTimeout(() => {
                    $('.amplop .zoomdown').eq(index).addClass('zoomdownnormal');
                }, index * 500);
            });
        } 
        // Amplop
        if(scrollPos > amploppos -200) {
            $('.amplop .card').each((index, item) => {
                setTimeout(() => {
                    $('.amplop .card').eq(index).addClass('muncul');
                }, index * 500); 
            });
        }

        let himbaupos = Math.ceil($('.himbauan').offset().top); 
        if(scrollPos > himbaupos - 600) {
            $('.himbauan .zoomdown').each((index, item) => {
                setTimeout(() => {
                    $('.himbauan .zoomdown').eq(index).addClass('zoomdownnormal');
                }, index * 500);
            });
        } 
        // Protokol Kesehatan
        if(scrollPos > boxesPos -600) {        
            $('.box').each((index, item) => {
                
                setTimeout(() => {
                    $('.box').eq(index).addClass('muncul');
                }, index * 500)
            })
        }

        
        let ucapanpos = Math.ceil($('.ucapan').offset().top); 
        if(scrollPos > ucapanpos - 600) {
            $('.ucapan .zoomdown').each((index, item) => {
                setTimeout(() => {
                    $('.ucapan .zoomdown').eq(index).addClass('zoomdownnormal');
                }, index * 500);
            });
        } 
    }
    
})


function copy(id){
    var temp = $("<input>");
    $("body").append(temp);
    temp.val($(id).data('rekening')).select();
    document.execCommand("copy");
    temp.remove();
    Swal.fire(
        'Good job!',
        `Copy success`,
        'success'
    );
}
  

$(window).on('load', function() {
    if($('.profile').hasClass('aktif')) {
        $('.myicon').css({
            'display': 'inline-block'
        })
    }
    if(scookie != 'null') {
        $('.myicon').css({
            'display': 'inline-block'
        })
        if(ukuranlayar <= 683) {
            $('.nav').css({
                'display': 'inline-block',
            })
        } else if(ukuranlayar > 683) {
            $('.nav').css({
                'display': 'none',
            })
        }
    } else {
        $('.nav').css({
            'display': 'none',
        })
    }
   
})

let wedding = new Date("Sept 19, 2025 11:00:00").getTime();

let x = setInterval(() => {
    let current = new Date().getTime(); 
    var targets = wedding - current; 
    var hari  = Math.floor(targets / (1000 * 60 * 60 * 24)); 
    var jams  = Math.floor(targets % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var menit = Math.floor(targets % (1000 * 60 * 60)      / (1000 * 60));
    var detik = Math.floor(targets % (1000 * 60)           / (1000)); 

    $('.hari').html(hari); 
    $('.jam').html(jams); 
    $('.menit').html(menit); 
    $('.detik').html(detik);

    if(targets <= 0) {
        $('.hari').html(0); 
        $('.jam').html(0); 
        $('.menit').html(0); 
        $('.detik').html(0);
        clearInterval(x); 
    }
}, 1000);