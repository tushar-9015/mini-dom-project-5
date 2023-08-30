const arr = [
    {
        dp: 'https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg', story: 'https://cdn.pixabay.com/photo/2023/08/12/13/59/cat-8185712_640.jpg'
    }, 
    {
        dp: 'https://images.pexels.com/photos/13746713/pexels-photo-13746713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', story: 'https://cdn.pixabay.com/photo/2017/08/05/21/42/fireworks-2585843_640.jpg' 
    }, 
    {
        dp: 'https://cdn.pixabay.com/photo/2016/01/08/06/13/woman-1127201_640.jpg', story: 'https://cdn.pixabay.com/photo/2020/06/07/13/33/fireworks-5270439_640.jpg' 
    }, 
    {
        dp: 'https://cdn.pixabay.com/photo/2016/11/22/19/26/fox-1850186_640.jpg', story: 'https://cdn.pixabay.com/photo/2017/11/24/16/29/tea-2975184_640.png' 
    }, 
    {
        dp: 'https://cdn.pixabay.com/photo/2016/01/29/20/54/dog-1168663_640.jpg', story: 'https://cdn.pixabay.com/photo/2023/01/18/14/39/family-7727035_640.jpg' 
    }
]

let clutter = "";

arr.forEach(function(elem, idx){
    clutter += `<div class="story">
    <img id='${idx}' src="${elem.dp}" alt="">
</div>`
})

document.querySelector(".stories").innerHTML = clutter;

document.querySelector(".stories").addEventListener('click',function(dets){
    document.querySelector('.full-screen').style.display = 'block'
    document.querySelector('.full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector('.full-screen').style.display = 'none'
     },4000)
  
})




