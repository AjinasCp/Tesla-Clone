
document.lastScrollPosition = 0;

document.addEventListener(type='scroll',listener= () => {

    const direction =  window.pageXOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
   
    document.lastScrollPosition = window.pageXOffset;
})