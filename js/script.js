$(function(){

    setTimeout(function(){
    $('header').load('header.html');
    $('footer').load('footer.html');
    },50);
    
    //커서
    var cursor = $('#cursor');
    $(document).on('mousemove',function(e){
        var x = e.clientX;
        var y = e.clientY;
        cursor.css({left:x+'px'});
        cursor.css({top:y+'px'});
    });
    //커서
    
    setTimeout(function(){
    //start
        
    //커서 이벤트
    $('.svg_').on('mouseenter',function(){
        cursor.css({width:'40px', height:'40px', background:'#000', opacity:'.5',transition:'.1s'});
    });
    $('.svg_').on('mouseleave',function(){
        cursor.css({width:'25px', height:'25px', background:'rgba(255,255,255,.3)', opacity:'1',transition:'0s'});
    });
    $('nav ul li').on('mouseenter',function(){
        cursor.css({display:'none'});
        $(this).css({background:'rgba(0,0,0,.5)'});
    });
    $('nav ul li').on('mouseleave',function(){
        cursor.css({display:'inherit'});
        $(this).css({background:'none'});
    });
    $('header div').on('mouseenter',function(){
        cursor.css({display:'none'});
        $(this).css({background:'rgba(255,255,255,.5)'});
    });
    $('header div').on('mouseleave',function(){
        cursor.css({display:'inherit'});
        $(this).css({background:'none'});
    });
    //커서 이벤트
    
    //home 이미지
    function a() {

        var minY = -1000;
        var maxY = 0;

        var minX = -1000;
        var maxX = 1000;

        var randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
        var randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;


        var animation = new TimelineLite();
        animation.set(this, { transformOrigin:"50% 50%", position: "absolute", x: randomX, y: randomY, rotation: randomX, scale: 1});
        animation.to(this, 3, { x: 0, y: 0, rotation: 0, scale: 1, ease: Power4.easeInOut, y: 0 }, 0.5);
    }
    $('#main polygon, #main path').each(a);
    //home 이미지
    var aa=0;
        
    setTimeout(function(){
        $('nav li').on('click',function(e){
            e.preventDefault();

            if(aa == 0){
                dataLoad($(this));
            }
        });
    },100);

    function svg_(){
        $('.svg_').on('click',function(e){
                e.preventDefault();
                dataLoad($(this));
        });
    }
    svg_();
        
    //페이지 이동
    function dataLoad($this){
            pageLeave();
            var dataHash = $this.attr('data-hash');
            (dataHash != 'Home') ? location.hash = '#' + dataHash : location.hash='';

            var $url = $this.attr('data-url');
            
            //setTimeout(function(){$('section').load($url, pageEvent); },1100);
            setTimeout(function(){
                //$('section').load($url, pageEvent); 
                $.ajax({
                    url : $url,
                    type : 'get',
                    cache: true,
                    async: false,
                    dataType : 'html',
                    success : function(data){
                        //$('#portS').();
                        $('section').html($(data));
                        setTimeout(function(){pageEvent(); aa = 0;},500);
                    }                   
                });
            },1100);

    } 
        
    
        
    function pageLeave(){
        var hash = location.hash;
        switch(hash){
            case '#About':
                $('#aboutS, header, footer').addClass('active');
            ;break;
                
            case '#Portfolio':
                $('#portS, header, footer').addClass('active');
            ;break;
                
            default : 
                $('#homeS, header, footer').addClass('active');
            break;
        }
    }//pageLeave
        
    function pageEvent(){
        var hash = location.hash;
        switch(hash){
            case '#About': about()  ; break;
            case '#Portfolio': portfolio() ; break;
            default : home(); break;
        }
        //dataLoad();
    }//pageEvent
        
    function home(){
        setTimeout(function(){
            $('header nav ul li a').css({color:'#000'});
            if($(window).width() < 480){
               $('header nav ul li a').css({color:'#fff'});
               $('footer div strong').css({color:'#000'});
               $('footer div p').css({color:'#000'});
               }
        },200);
        setTimeout(function(){
            $('#homeS, header, footer').removeClass('active');
        },200);

        function a() {

            var minY = -1000;
            var maxY = 0;

            var minX = -1000;
            var maxX = 1000;

            var randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
            var randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;


            var animation = new TimelineLite();
            animation.set(this, { transformOrigin:"50% 50%", position: "absolute", x: randomX, y: randomY, rotation: randomX, scale: 1});
            animation.to(this, 3, { x: 0, y: 0, rotation: 0, scale: 1, ease: Power4.easeInOut, y: 0 }, 0.5);
        }
        
        $('#main polygon, #main path').each(a);
        setTimeout(function(){
            $('.svg_').on('mouseenter',function(){
                cursor.css({width:'40px', height:'40px', background:'#000', opacity:'.5',transition:'.1s'});
            });
            $('.svg_').on('mouseleave',function(){
                cursor.css({width:'25px', height:'25px', background:'rgba(255,255,255,.3)', opacity:'1',transition:'0s'});
            });
            $('nav ul li').on('mouseenter',function(){
                cursor.css({display:'none'});
                $(this).css({background:'rgba(0,0,0,.5)'});
            });
            $('nav ul li').on('mouseleave',function(){
                cursor.css({display:'inherit'});
                $(this).css({background:'none'});
            });
            $('header div').on('mouseenter',function(){
                cursor.css({display:'none'});
                $(this).css({background:'rgba(255,255,255,.5)'});
            });
            $('header div').on('mouseleave',function(){
                cursor.css({display:'inherit'});
                $(this).css({background:'none'});
            });
        },200);
        svg_();
        
    }
        
    function about(){

        setTimeout(function(){
            $('#aboutS, header, footer').removeClass('active');
        },1000);
        
        $('#aboutS .ab_right .svg_, header nav ul #port').on('click',function(){
            $('#aboutS, header, footer').addClass('active');
        });
        
        setTimeout(function(){
            $('header li a').css({color:'#fff'});
            $('footer div strong').css({color:'#ddd'});
            $('footer div p').css({color:'#ddd'});
        },1130); //헤더 글자색 흰색
        setTimeout(function(){
            $('.svg_').on('mouseenter',function(){
            cursor.css({width:'40px', height:'40px', background:'#fff', opacity:'.5', transition:'.1s', border:'none'});
            });
            $('.svg_').on('mouseleave',function(){
                cursor.css({width:'25px', height:'25px', background:'rgba(255,255,255,.3)', opacity:'1', transition:'0s', border:'8px solid #000'});
            });
            $('nav ul li').on('mouseenter',function(){
                cursor.css({display:'none'});
                $(this).css({background:'rgba(255,255,255,.5)'});
            });
            $('nav ul li').on('mouseleave',function(){
                cursor.css({display:'inherit'});
                $(this).css({background:'none'});
            });
            $('header div').on('mouseenter',function(){
                cursor.css({display:'none'});
                $(this).css({background:'rgba(0,0,0,.5)'});
            });
            $('header div').on('mouseleave',function(){
                cursor.css({display:'inherit'});
                $(this).css({background:'none'});
            });
            
        },200);
        
        svg_();

    }
    
    function portfolio(){
        setTimeout(function(){
            $('#portS, header, footer').removeClass('active');
        },200);
        
        $('header nav ul #port').on('click',function(){
            $('#portS, header, footer').addClass('active');
        });
        
        setTimeout(function(){
            $('header li a').css({color:'#fff'});
            $('footer div strong').css({color:'#ddd'});
            $('footer div p').css({color:'#ddd'});
        },300); //헤더 글자색 흰색, 푸터 숨기기

        setTimeout(function(){
            $('.svg_').on('mouseenter',function(){
            cursor.css({width:'40px', height:'40px', background:'#000', opacity:'.5',transition:'.1s'});
            });
            $('.svg_').on('mouseleave',function(){
                cursor.css({width:'25px', height:'25px', background:'rgba(255,255,255,.3)', opacity:'1',transition:'0s'});
            });
            $('nav ul li').on('mouseenter',function(){
                cursor.css({display:'none'});
                $(this).css({background:'rgba(255,255,255,.5)'});
            });
            $('nav ul li').on('mouseleave',function(){
                cursor.css({display:'inherit'});
                $(this).css({background:'none'});
            });
            $('header div').on('mouseenter',function(){
                cursor.css({display:'none'});
                $(this).css({background:'rgba(255,255,255,.5)'});
            });
            $('header div').on('mouseleave',function(){
                cursor.css({display:'inherit'});
                $(this).css({background:'none'});
            });
            $('.list li').on('mouseenter',function(){
                cursor.css({width:'40px', height:'40px', background:'#000', opacity:'.5',transition:'.1s'});
            });
            $('.list li').on('mouseleave',function(){
                cursor.css({width:'25px', height:'25px', background:'rgba(255,255,255,.3)', opacity:'1',transition:'0s'});
            });
            $('#portS figure').on('mouseenter',function(){
                cursor.css({width:'40px', height:'40px', background:'#fff', border:'none', opacity:'.5'});
            });
            $('#portS figure').on('mouseleave',function(){
                cursor.css({width:'25px', height:'25px', background:'rgba(255,255,255,.3)', border:'8px solid #000', opacity:'1'});
            });
            
        },200);
        
        if($(window).width() > 414){
            //$.getScript('js/jquery.mCustomScrollbar.concat.min.js');
            $('.mCustomScrollbar').mCustomScrollbar({
                theme:'light',
                mouseWheelPixels : 400,
                scrollnertia : 500
            });
        }
        
        //------포폴 스크롤 헤더  
        
        var lastScrollTop = 0;
        var st=0;

        $('.mCSB_container').on('mousewheel DOMMouseScroll',function(e){
            var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;

            if(delta < 0){
                $('header').removeClass('nav-down').addClass('nav-up');
                $('footer').removeClass('fnav-down').addClass('fnav-up');
            }else{
                $('header').removeClass('nav-up').addClass('nav-down');           
                $('footer').removeClass('fnav-up').addClass('fnav-down');           
            }

        });//포폴 스크롤 헤더
       
    }
        
    //end
    },100);

});

















