//global setup
const gsap = new TimelineMax();


// SOCIAL MEDIA ICONS
// twitter
let svgtwitter = document.querySelector('.twitter')
let twitterCircle = document.getElementById('twitterCircle');
let twitterlength = twitterCircle.getTotalLength();
let twitterIcon = document.getElementById('twitterIcon');

twitterCircle.setAttribute('stroke-dashoffset', twitterlength);

svgtwitter.addEventListener('mouseover', function () {
    TweenLite.to(twitterCircle, 0.4, {
        strokeWidth: 2,
        stroke: '#0F71F9',
        strokeDashoffset: 0,
        strokeDasharray: twitterlength + 10
    });
    TweenLite.to(twitterIcon, 0.4, {fill: '#0F71F9'});
})

svgtwitter.addEventListener('mouseleave', function () {
    TweenLite.to(twitterCircle, 0.4, {
        strokeDashoffset: twitterlength + 10
    });
    TweenLite.to(twitterIcon, 0.4, {fill: '#010002'}, 0.4)
});

// facebook
let svgfb = document.getElementById('svgfb');
let fbCircle = document.getElementById('fbCircle');
let fblength = twitterCircle.getTotalLength();
let fbIcon = document.getElementById('fbIcon');

fbCircle.setAttribute('stroke-dashoffset', fblength);

svgfb.addEventListener('mouseover', function () {
    TweenLite.to(fbCircle, 0.4, {
        strokeWidth: 2,
        stroke: '#0F71F9',
        strokeDashoffset: 0,
        strokeDasharray: fblength + 10

    });
    TweenLite.to(fbIcon, 0.4, {fill: '#0F71F9'});
})

svgfb.addEventListener('mouseleave', function () {
    TweenLite.to(fbCircle, 0.4, {
        strokeDashoffset: fblength + 10
    });
    TweenLite.to(fbIcon, 0.4, {fill: '#010002'}, 0.4)
});


//linkedin
let svgli = document.querySelector('#svgLinkedIn');
let liCircle = document.getElementById('linkedinCircle');
let linkedinlength = twitterCircle.getTotalLength();
let liIcon = document.getElementById('linkedinIcon');

liCircle.setAttribute('stroke-dashoffset', linkedinlength);

svgli.addEventListener('mouseover', function () {
    TweenLite.to(liCircle, 0.4, {
        strokeWidth: 2,
        stroke: '#0F71F9',
        strokeDashoffset: 0,
        strokeDasharray: linkedinlength + 10
    });
    TweenLite.to(liIcon, 0.4, {fill: '#0F71F9'});
})

svgli.addEventListener('mouseleave', function () {
    TweenLite.to(liCircle, 0.4, {
        strokeDashoffset: linkedinlength + 10
    });
    TweenLite.to(liIcon, 0.4, {fill: '#010002'}, 0.4)
});


//eMail
let svgEmail = document.getElementById('svgmail');
let emailIcon = document.getElementsByClassName('mailIcon');

svgEmail.addEventListener('mouseover', function () {
    TweenLite.to(emailIcon, 0.4, {
        stroke: '#0E70F5'
    });
})

svgEmail.addEventListener('mouseleave', function () {
    TweenLite.to(emailIcon, 0.4, {
        stroke: '#000000'
    })
});

//SECTION LOGO
const line1hidden = "787.556,427.557 772.556,382.557 772.556,382.557 787.556,427.557  ";
const line2hidden = "788.556,430.557 788.556,430.557 804.556,382.557 804.556,382.557 ";
const line3hidden = "821.556,385.557 813.556,409.557 813.556,409.557 821.556,385.557 ";
const line4hidden = "820.556,430.557 820.556,430.557 836.556,382.557 836.556,382.557 ";

TweenMax.from('#line1', 2, {attr: {points: line1hidden}, repeat: 1000, yoyo: true, ease: Elastic.easeInOut});
TweenMax.from('#line2', 2, {attr: {points: line2hidden}, repeat: 1000, yoyo: true, ease: Elastic.easeInOut});
TweenMax.from('#line3', 2, {attr: {points: line3hidden}, repeat: 1000, yoyo: true, ease: Elastic.easeInOut});
TweenMax.from('#line4', 2, {attr: {points: line4hidden}, repeat: 1000, yoyo: true, ease: Elastic.easeInOut});




// SECTION PROJECTS
const projectBoxy = document.getElementsByClassName('projectWindow')


for (var i = 0; i < projectBoxy.length; i++) {
    projectBoxy[i].addEventListener('mouseenter', function (event) {
        let szukam = this.children[0];
        console.log(szukam);
        szukam.children[0].classList.toggle('opacity')
        szukam.classList.toggle('hidden');
    });
}

for (var i = 0; i < projectBoxy.length; i++) {
    projectBoxy[i].addEventListener('mouseleave', function (event) {
        let szukam = this.children[0];
        szukam.children[0].classList.toggle('opacity')
        szukam.classList.toggle('hidden');
    });
}















