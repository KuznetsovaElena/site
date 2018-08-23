var elem=null;
var elemRatio=0;
var elemIsEmb=false;

function elemResize()
{
    if(elem!==null && elemRatio !== 0)
    {
        if(elemIsEmb)
        {
            var contentData = document.getElementById("content");
            var ratio = contentData.width()/contentData.height();
            if(elemRatio<ratio)
            {
               $(elem).width($(elem).width()*(elemRatio/ratio));
            }
            else if(elemRatio>ratio)
            {
                $(elem).height($(elem).height()*(ratio/elemRatio));
            }
        }
        else
        {
            $(elem).height($(elem).width()/elemRatio);
        }
    }
}

function changeData(type, path, ratio){
    var contentData = document.getElementById("content");
    
    elemRatio=0;
    elemIsEmb=false;
    
    if(elem!==null)
    {
        contentData.removeChild(elem);
        elem=null;
    }
    if(path===null && type===null){

    }
    else{
        if(typeof ratio !== 'undefined')
        {
            var indexFirst=ratio.indexOf(':',0);
            if(-1 !== indexFirst)
            {
                var ratioW=parseInt(ratio.substring(0, indexFirst));
                var ratioH=0;
                var indexLast=ratio.indexOf(':',indexFirst+1);
                if(-1 !== indexLast && indexFirst !== indexLast)
                {
                    ratioH=parseInt(ratio.substring(indexFirst+1, indexLast));
                    elemIsEmb=('emb' === (ratio.substring(indexLast+1)));
                }
                else
                    ratioH=parseInt(ratio.substring(indexLast+1));
                if(ratioW === 0 || ratioH === 0)
                    elemRatio=0;
                else
                    elemRatio=ratioW/ratioH;
            }
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
            elem.setAttribute('class', 'ui-widget-shadow embElement');
            elem.setAttribute('width', '100%');
            elem.setAttribute('height', '100%');
            elem.setAttribute('onload', elemResize());
        }
        else if(type==='iframe')
        {
            elem=document.createElement('iframe');
            elem.setAttribute('src',path);
            contentData.appendChild(elem);
            elem.setAttribute('class', 'ui-widget-shadow embElement');
            elem.setAttribute('width', '100%');
            elem.setAttribute('height', '100%');
            elem.setAttribute('onload', elemResize());
        }
        else if(type==='swf')
        {
            elem=document.createElement('embed');
            elem.setAttribute('pluginspage','http://www.macromedia.com/go/getflashplayer');
            elem.setAttribute('src',path);
            contentData.appendChild(elem);
            elem.setAttribute('class', 'ui-widget-shadow embElement');
            elem.setAttribute('width', '100%');
            elem.setAttribute('height', '100%');
            elem.setAttribute('onload', elemResize());
        }
    }
};

$( window ).resize(function()
{
    elemResize();
});
