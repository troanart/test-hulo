export default function Modal() {
    const itemContainet = document.querySelector('.swiper-wrapper');
    itemContainet.addEventListener('click', onClickModal);

 
    function createVimeoSlide(id, containerSelector) {
       
        const iframe = document.createElement('iframe');
        iframe.id = `vimeo-player${id}`;
        iframe.src = `https://player.vimeo.com/video/${id}`;
        iframe.width = "924px";
        iframe.height = "924px";
        iframe.frameborder = "0";
        iframe.allowfullscreen = true;
        iframe.allow = "autoplay; encrypted-media";
    
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.appendChild(iframe);
    
        const container = document.querySelector(containerSelector);
    
        if (container) {
            container.appendChild(slide);
        } else {
            console.error(`Контейнер с селектором "${containerSelector}" не найден`);
        }
    }
    
    for (let i = 0; i <= 8; i++) {
        createVimeoSlide('824804225', '.js-container');
    }
    
    function onClickModal(e) {
        const modal = document.querySelector('.modal');
        const backdrop = document.querySelector('.backdrop');
        if (e.target.tagName === 'IMG') {
            backdrop.classList.toggle('is-hidden');
            modal.classList.toggle('is-hidden');
        } 
        

       
    }

   

    


    
}

  
