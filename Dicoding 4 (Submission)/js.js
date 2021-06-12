const profilImg = document.querySelector('#gambarSaya');
let i=0;

profilImg.addEventListener('click',function(){
    i++;
    if(i==3){
        alert('anda membuat saya terTEKAN:(')
    }
    if(i==5){
        alert('yameteeh!!!');
        i=0;
    }
})

