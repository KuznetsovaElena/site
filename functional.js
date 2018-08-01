/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

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
//dataHeight=$(window).height()-90;

function changeData(type, path){
//    var contentData = document.getElementById("contentData");
    var contentData = document.getElementById("content");
    if(elem!==null)
    {
        contentData.removeChild(elem);
        elem=null;
    }
    if(path===null && type===null){

    }
    else if(type==='pdf')
    {
        elem=document.createElement('iframe');
        elem.setAttribute('src',"https://docs.google.com/viewer?url="+path+"&embedded=true");
        elem.setAttribute('width','100%');
        elem.setAttribute('frameBorder','0');
        elem.setAttribute('class', 'ui-widget-shadow');
//        elem.setAttribute('height',dataHeight);
        contentData.appendChild(elem);
    }
    else if(type==='html')
    {
        elem=document.createElement('iframe');
        elem.setAttribute('src',path);
        elem.setAttribute('width','100%');
        elem.setAttribute('frameBorder','0');
        elem.setAttribute('class', 'ui-widget-shadow');
//        elem.setAttribute('height',dataHeight);
        contentData.appendChild(elem);
    }
    else if(type==='flash')
    {
        elem=document.createElement('object');
        elem.setAttribute('class', 'ui-widget-shadow');
        elem.setAttribute('type', 'application/x-shockwave-flash');
        elem.param('move').value=path;
        elem.param('allowScriptAccess').value='sameDomain';
        elem.param('quality').value='high';
        elem.param('allowFullScreen').value=true;
    }
};

window.onresize = function(event) {
    var header = document.getElementById("header");
    var footer = document.getElementById("footer");
    
    dataHeight=$(window).height()-68;
    if(dataPath!==null){
        var data=document.getElementById('objectData');
        data.setAttribute('height',dataHeight);
    }
};
