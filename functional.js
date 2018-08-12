$( function() {$( ".tabs" ).tabs({
    collapsible: true,
    heightStyle: "fill"
    });
});

$( function() {$( ".accordion" ).accordion({
    activeIndex: false,
    collapsible: true,
    heightStyle: "content"
    });
});

var elem=null;
function changeData(type, path){
    var contentData = document.getElementById("content");
    if(elem!==null)
    {
        contentData.removeChild(elem);
        elem=null;
    }
    if(path===null && type===null){

    }
    else{
        if(type === 'gviewer')
        {
            
            if ('.' === path.substring(0,1)){
                var href = window.location.href;
                var dir = href.substring(0, href.lastIndexOf('/'));
                path=dir+path.substring(1);
            }
            
            elem=document.createElement('iframe');
            elem.setAttribute('src',"https://docs.google.com/viewer?url="+path+"&embedded=true");
            elem.setAttribute('width','100%');
            elem.setAttribute('frameBorder','0');
            elem.setAttribute('class', 'ui-widget-shadow');
            elem.setAttribute('height','100%');
            contentData.appendChild(elem);
        }
        else if(type==='iframe')
        {
            elem=document.createElement('iframe');
            elem.setAttribute('src',path);
            elem.setAttribute('width','100%');
            elem.setAttribute('frameBorder','0');
            elem.setAttribute('class', 'ui-widget-shadow');
            elem.setAttribute('height','100%');
            contentData.appendChild(elem);
//            elem.height='100%';
//            elem.contentWindow.document.body.scrollHeight;
        }
        else if(type==='swf')
        {
            elem=document.createElement('embed');
            elem.setAttribute('pluginspage','http://www.macromedia.com/go/getflashplayer');
            elem.setAttribute('src',path);
            elem.setAttribute('width','100%');
            elem.setAttribute('frameBorder','0');
            elem.setAttribute('class', 'ui-widget-shadow');
            elem.setAttribute('height','100%');
            contentData.appendChild(elem);
        }
    }
};

jQuery( window ).on( "orientationchange", function( event ) {
    if(elem!==null)
    {
        document.getElementById("content").reload();
    }
});