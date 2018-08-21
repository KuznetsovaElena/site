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
elemRatio=0;

function elemResize()
{
    if(elemRatio!==0)
    {
//        var realRatio=($(window).width()-264)/($(window).height()-70);
        var realRatio=($(content).width())/($(content).height());
        if(realRatio>1 && elemRatio<1)
        {
           $(elem).width($(elem).height()()*elemRatio);
        }
        else
        {
           $(elem).height($(elem).width()/elemRatio);
        }
    }
}

function changeData(type, ratio, path){
    var contentData = document.getElementById("content");
    if(elem!==null)
    {
        contentData.removeChild(elem);
        elem=null;
        elemRatio=0;
    }
    if(path===null && type===null){

    }
    else{
        var ratioW=parseInt(ratio.substring(0, ratio.lastIndexOf(':')));
        var ratioH=parseInt(ratio.substring(ratio.lastIndexOf(':')+1));
        if(ratioW === 0 && ratioH === 0)
        {
            elemRatio=0;
        }
        else
        {
            elemRatio=ratioW/ratioH;            
        }
        if(type === 'gviewer')
        {
            if ('.' === path.substring(0,1)){
                var href = window.location.href;
                var dir = href.substring(0, href.lastIndexOf('/'));
                path=dir+path.substring(1);
            }
            elem=document.createElement('iframe');
            elem.setAttribute('src',"https://docs.google.com/viewer?url="+path+"&embedded=true");
            contentData.appendChild(elem);
            elem.setAttribute('class', 'ui-widget-shadow');
            elem.setAttribute('width', '100%');
            elem.setAttribute('height', '100%');
            elem.setAttribute('frameBorder','0');
            elem.setAttribute('onload', elemResize());
        }
        else if(type==='iframe')
        {
            elem=document.createElement('iframe');
            elem.setAttribute('src',path);
            contentData.appendChild(elem);
            elem.setAttribute('class', 'ui-widget-shadow');
            elem.setAttribute('width','100%');
            elem.setAttribute('height','100%');
            elem.setAttribute('frameBorder','0');
            elem.setAttribute('onload', elemResize());
        }
        else if(type==='swf')
        {
            elem=document.createElement('embed');
            elem.setAttribute('pluginspage','http://www.macromedia.com/go/getflashplayer');
            elem.setAttribute('src',path);
            contentData.appendChild(elem);
            elem.setAttribute('class', 'ui-widget-shadow');
            elem.setAttribute('width','100%');
            elem.setAttribute('height','100%');
            elem.setAttribute('frameBorder','0');
            elem.setAttribute('onload', elemResize());
        }
    }
};

$( window ).resize(function()
{
    elemResize();
});
