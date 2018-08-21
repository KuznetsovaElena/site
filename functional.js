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
    if(elem!==null && elemRatio!==0)
    {


        var realRatio=$(elem).width()/$(elem).height();
        if((realRatio<1 && elemRatio>1) || (realRatio>1 && elemRatio<1))
        {
            //normalize
           $(elem).width();

        }







        $(elem).height($(elem).width()/elemRatio)

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
        var ratioW=ratio.substring(0, ratio.lastIndexOf(':'));
        var ratioH=ratio.substring(ratio.lastIndexOf(':')+1);
        if(ratioW!==0 && ratioH!==0)
            elemRatio=ratioW/ratioH;
        else
            elemRatio=0;
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

            //elem.setAttribute('onload', elemLoaded());

elem.setAttribute('frameBorder','0');
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
        }
//        else if(type==='html')
//        {
//            if ('.' === path.substring(0,1)){
//                var href = window.location.href;
//                var dir = href.substring(0, href.lastIndexOf('/'));
//                path=dir+path.substring(1);
//            }
//            
//            // 1. Создаём новый объект XMLHttpRequest
//            var xhr = new XMLHttpRequest();
//
//            // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
//            xhr.open('GET', path, false);
//
//            // 3. Отсылаем запрос
//            xhr.send();
//
//            // 4. Если код ответа сервера не 200, то это ошибка
//            if (xhr.status !== 200) {
//              // обработать ошибку
//              alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
//            } else {
//              // вывести результат
//              
//              innerHTML=xhr.responseText;
//              
////              var start = innerHTML.indexOf("<body");
////              var end = -1;
////              if(start !== -1)
////              {
////                  start = innerHTML.indexOf(">", start);
////                  if(start !== -1)
////                  {
////                      end = innerHTML.lastIndexOf("</body>");
////                      if(end === -1)
////                      {
////                          end = innerHTML.lastIndexOf("</html>");
////                      }
////                      if(end === -1)
////                      {
////                          end = innerHTML.length;    // If no HTML then just grab everything till end
////                      }
////                  }
////              }
//              alert(innerHTML);
////              if(start !== -1 && end !==-1)
////              {
////                  innerHTML=innerHTML.slice(start + 1, end);
////              }
////              else
////              {
////                  innerHTML="Содержимое не загружено";
////              }
//              elem=document.createElement('div');
//              elem.setAttribute('width','100%');
//              elem.setAttribute('frameBorder','0');
//              elem.setAttribute('class', 'ui-widget-shadow');
//              elem.innerHTML = innerHTML;
//              contentData.appendChild(elem);
//            }
//        }
    }
};

$( window ).resize(function()
{
    elemResize();
});
