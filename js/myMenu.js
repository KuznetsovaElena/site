//                data.setAttribute('src', "http://docs.google.com/gview?url=http://www.africau.edu/images/default/sample.pdf&embedded=true");
        $(function() {$( ".accordion" ).accordion({
            activeIndex: false,
            collapsible: true,
            heightStyle: "content"
            });
        });
        $(function() {$( ".button" ).button();});
        $(function() {$( "#tabs" ).tabs();});
        var dataPath;
        var dataHeight;
        function changeData(type, path){
            var content=document.getElementById('content')
            if(path===null && type===null){

            }
            else if(type==='pdf')
            {
                content.appendChild(elem)
            }


            var data=document.getElementById('objectData');
            var iframe=document.getElementById('iframeData');
            if(path===null && type===null){
                data.setAttribute('data', null);
                data.setAttribute('width',0);
                data.setAttribute('height',0);
                dataPath=null;
            }else {
                if(type==='html'){
                    iframeData

                }
                dataHeight=$(window).height()-68;
                dataPath=path;
                data.setAttribute('data', path);
                data.setAttribute('width','100%');
                data.setAttribute('height',dataHeight);

                if(type==='pdf'){
                    data.setAttribute('type', 'application/pdf');
                }
                else if(type==='flash'){
                    data.setAttribute('type', 'application/x-shockwave-flash');
                    data.param('move').value=path;
                    data.param('allowScriptAccess').value='sameDomain';
                    data.param('quality').value='high';
                    data.param('allowFullScreen').value=true;
                }
                else if(type==='html'){

                }
            }
        }
        window.onresize = function(event) {
            dataHeight=$(window).height()-68;
            if(dataPath!==null){
                var data=document.getElementById('objectData');
                data.setAttribute('height',dataHeight);
            }
        }