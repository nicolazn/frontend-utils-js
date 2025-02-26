export function DynamicHeightAdjuster(target, targetsToRemove) {
        let heightToRemove = 0.0;
        document.querySelectorAll(targetsToRemove).forEach(item => {
            heightToRemove = heightToRemove + item.offsetHeight;
        })
        target.style.minHeight = (window.innerHeight - heightToRemove)+"px";
}

export function HeaderSpacer (header, target = false){
    if (target) {
        target.style.marginTop = header.offsetHeight + "px";
    }
    else {
        header.querySelector('~section').style.marginTop = header.offsetHeight + "px";
    }
}