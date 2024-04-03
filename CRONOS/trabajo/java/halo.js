var $barProgress =document .querySelector ('.bar_progress')

window .addEventListener('scroll', function() {
    const $posicionScroll = window.scrollY;

    const $alturaDoc = document.documentElement.scrollHeight;

    const $alturaWindow = window.innerHeight;

    const $alturaTotal = $alturaDoc - $alturaWindow;

    // Porcentaje de desplazamiento 
    const $porcentajeScroll =
    ($posicionScroll / $alturaTotal) * 100;

    // Actualizar el ancho de la barra de progreso 
    $barProgress.style.width = `${ $porcentajeScroll}%`;

});