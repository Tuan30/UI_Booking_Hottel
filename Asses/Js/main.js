var header = document.getElementById('header')
var menuIcon = document.getElementById('header__icon')
var hightHeader = header.clientHeight

menuIcon.onclick = function(){
    var isClose = header.clientHeight === hightHeader

    if(isClose){
        header.style.height = 'auto'  
    }else{
        header.style.height = null
    }
}