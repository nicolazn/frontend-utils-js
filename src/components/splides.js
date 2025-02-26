import './utils/inject-code';
import Splide from "@splidejs/splide"
import lightGallery from 'lightgallery';
import 'lightgallery/scss/lightgallery-bundle.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

export function generateGallery(targetId, gallery, options) {
    let target = document.getElementById(targetId);
    InjectCode('galleryTemplate', target);
    loadGallery(target, gallery);

    new Splide(target, options).mount();


    lightGallery(target.querySelector('#' + target.id + '-lightgallery'), {
        plugins: [lgZoom, lgThumbnail],
        licenseKey: "0000-0000-0000-0000",
        speed: 500,
        thumbnail: true,
        enableDrag: false,
        closeOnTap: false,
    });

    var galleryOpenerArray = target.querySelectorAll(".lightgallery-trigger");
    galleryOpenerArray.forEach((opener) => {
        opener.addEventListener("click", function (e) {
            e.preventDefault();
            console.log(galleryOpenerArray);
            document.querySelector(opener.getAttribute("href")).click();
        });
    });
}

function loadGallery(target, gallery) {

    let slideList = target.querySelector('.slide__list');
    let lg = target.querySelector('#' + target.id + '-lightgallery');
    gallery.forEach((item, index) => {
        slideList.insertAdjacentHTML("beforeend", '<li class="splide__slide"> <a href="#lightgallery-opener-' + index + '" class="lightgallery-trigger"> <div class="image-container"> <img class="img-fluid" src="" alt="Image 1"></div></a></li>');
        lg.insertAdjacentHTML('beforeend', '<a href="" id="lightgallery-opener-' + index + '"><img src="" alt=""></a>')
    })

}