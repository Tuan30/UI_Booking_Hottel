index = 1
Imagechame = function(){
    var imgs = ["/images/room_1.jpg","/images/room_1_3.jpg","/images/room_1_2.jpg","/images/room_1_4.jpg"]
    document.getElementById('img').src = imgs[index]
    index++
    if(index==4){
        index = 0
    }
}