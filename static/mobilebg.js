window.addEventListener('load', function(){
    const wallpaper = document.querySelector('.wallpaper');
    const topBox = document.querySelector('.mobile-box-top');
    const bottomBox = document.querySelector('.mobile-box-bottom');

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if(!isMobile) return;

    function updateBoxes() {
        const windowH = window.innerHeight;
        const gifRatio = 1920 / 1078; // ширина/высота мобильного GIF
        const gifH = window.innerWidth / gifRatio; // высота GIF при ширине окна
        const emptySpace = windowH - gifH;
        const boxHeight = emptySpace / 2;

        topBox.style.height = boxHeight + 'px';
        bottomBox.style.height = boxHeight + 'px';
    }

    window.addEventListener('resize', updateBoxes);
    updateBoxes();
});
