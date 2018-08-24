var elem=null;
var elemRatio=0;
var elemIsEmb=false;

function elemResize()
{

    
        if(elemIsEmb)
        {
        
           
            var W=$(elem).width();
            var H=$(elem).height();
  


            if(H*elemRatio>W)
            {
                $(elem).height(W/elemRatio);
            }
            else
            {
                $(elem).width(H*elemRatio);
            }
        }
        else
        {
            $(elem).height($(elem).width()/elemRatio);
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
//        $(document.getElementById("loader")).hide();
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
            elem.setAttribute('class', 'ui-widget-shadow embElement');
            elem.setAttribute('width','100%');
            elem.setAttribute('height','100%');
            contentData.appendChild(elem);
            elem.setAttribute('onload', elemResize());
        }
        else if(type==='iframe')
        {
            elem=document.createElement('iframe');
            elem.setAttribute('src',path);
            elem.setAttribute('class', 'ui-widget-shadow embElement');
            elem.setAttribute('width','100%');
            elem.setAttribute('height','100%');
            contentData.appendChild(elem);
            elem.setAttribute('onload', elemResize());
        }
        else if(type==='swf')
        {
            elem=document.createElement('embed');
            elem.setAttribute('pluginspage','http://www.macromedia.com/go/getflashplayer');
            elem.setAttribute('src',path);
            elem.setAttribute('class', 'ui-widget-shadow embElement');
            elem.setAttribute('width','100%');
            elem.setAttribute('height','100%');
            contentData.appendChild(elem);
            elem.setAttribute('onload', elemResize());
        }
        else if(type==='mp4')
        {
            elem=document.createElement('video');
            elem.setAttribute("controls", "controls");
            source=document.createElement('source');
            source.setAttribute('src',path);
            source.setAttribute('type','video/mp4');
            elem.appendChild(source);
            elem.setAttribute('class', 'ui-widget-shadow embElement');
            elem.setAttribute('width', '80%');
            elemRatio=0;
            contentData.appendChild(elem);
            elem.setAttribute('onload', elemResize());
        }
    }
};

$(window).resize(function()
{
    if(elem!==null && elemRatio !== 0)
    {
        if(elemIsEmb)
        {
            $(elem).width('100%');
            $(elem).height('100%');
            var W=$(elem).width();
            var H=$(elem).height();
        }
  elemResize();
        }
});
/*
$(window).on("orientationchange",function()
{
  elemResize();
  alert("The orientation has changed!");
});
*/
