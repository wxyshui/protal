(function (doc,win){
    var resetPage = function (){
        var deviceWidth = doc.documentElement.clientWidth;
        var scale = deviceWidth / 1360;
        if( deviceWidth >= 1360 ){
            doc.documentElement.style.fontSize = 
            '100px';
        }else{
            doc.documentElement.style.fontSize = 
            scale * 100 + 'px';
        }
    }
    if( !doc.addEventListener ) return;
    doc.addEventListener('DOMContentLoaded',resetPage,false);
    win.addEventListener('resize',resetPage,false);
})(document,window)