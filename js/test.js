let svgEmail = document.getElementById('svgmail');
let emailCircle = document.getElementById('mailCircle');
let emaillength = twitterCircle.getTotalLength();
let emailIcon = document.getElementsByClassName('mailIcon');

emailCircle.setAttribute('stroke-dashoffset', emailCircle);

svgEmail.addEventListener('mouseenter', function (event) {
    gsap.to(emailCircle, 0.4, {
        strokeWidth: 2,
        stroke: '#0F71F9',
        strokeDashoffset: 0,
        strokeDasharray: emaillength + 10
    });
    gsap.to(emailIcon, 0.4, {fill: '#0F71F9'});
})

svgEmail.addEventListener('mouseleave', function () {
    gsap.to(emailCircle, 0.4, {
        strokeDashoffset: emaillength + 10
    });
    gsap.to(emailIcon, 0.4, {fill: '#010002'});
})