const silder = document.querySelector('.silder');
const before = document.querySelector('.before-image-container');
const after = document.querySelector('.after-image-container');
const container = document.querySelector('.cotnainer');


function silde(e) {
    // const size = e.clientX;
    const layer  = e.layerX;
    before.style.width = layer + 'px';
    silder.style.left= layer + 'px';
    if(layer < 30) {
        silder.style.left = '0px';
        before.style.width = '0px';
    }
    if(layer + 10 > 560) {
        silder.style.left = '574px';
        before.style.width = '574px';
    }

}

container.addEventListener('mousemove',silde);