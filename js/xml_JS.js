$(function(){
    
    setTimeout(function(){
        
        function loadXML(){
        
        var tt = '';
        var subtt = '';
        var thumb = '';
        var svgIcon = '';
        var siteLink = '';
            
        var tag = '';
        
            
            
        $.ajax({
            type:"GET",
            url: 'port_xml.xml',
            cache: true,
            async: false,
            dataType:'html',
            success:function(data){
                
                 function list(k){
                    
                    var listN = k;
                     

                  $(data).find('item').each(function(i){

                        siteLink = $(this).find('siteLink').text();
                        tt = $(this).find('title').text();
                        subtt = $(this).find('sub').text();
                        thumb = $(this).find('thumb').html();
                        svgIcon = $(this).find('icon').html();
                        
                        tag = '<a href="'+siteLink+'"target="_blank">'
                        tag += '<figure>';
                        tag += thumb;
                        tag += '<figcaption>';
                        tag += '<strong>'+tt+'</strong>';
                        tag += '<p>'+subtt+'</p>';
                        tag += svgIcon;
                        tag += '</figcaption>';
                        tag += '</figure>';
                        tag += '</a>';
                        
                        $('.box').append(tag);
                        
                    });//each

                };//list

                list(6);
                
            
            },//success function
        });//ajax
            
    };//loadXML
        
    loadXML();
        
    },100);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});