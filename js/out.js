/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//global setup
var gsap = new TimelineMax();

// SOCIAL MEDIA ICONS
// twitter
var svgtwitter = document.querySelector('.twitter');
var twitterCircle = document.getElementById('twitterCircle');
var twitterlength = twitterCircle.getTotalLength();
var twitterIcon = document.getElementById('twitterIcon');

twitterCircle.setAttribute('stroke-dashoffset', twitterlength);

svgtwitter.addEventListener('mouseover', function () {
    TweenLite.to(twitterCircle, 0.4, {
        strokeWidth: 2,
        stroke: '#0F71F9',
        strokeDashoffset: 0,
        strokeDasharray: twitterlength + 10
    });
    TweenLite.to(twitterIcon, 0.4, { fill: '#0F71F9' });
});

svgtwitter.addEventListener('mouseleave', function () {
    TweenLite.to(twitterCircle, 0.4, {
        strokeDashoffset: twitterlength + 10
    });
    TweenLite.to(twitterIcon, 0.4, { fill: '#010002' }, 0.4);
});

// facebook
var svgfb = document.getElementById('svgfb');
var fbCircle = document.getElementById('fbCircle');
var fblength = twitterCircle.getTotalLength();
var fbIcon = document.getElementById('fbIcon');

fbCircle.setAttribute('stroke-dashoffset', fblength);

svgfb.addEventListener('mouseover', function () {
    TweenLite.to(fbCircle, 0.4, {
        strokeWidth: 2,
        stroke: '#0F71F9',
        strokeDashoffset: 0,
        strokeDasharray: fblength + 10

    });
    TweenLite.to(fbIcon, 0.4, { fill: '#0F71F9' });
});

svgfb.addEventListener('mouseleave', function () {
    TweenLite.to(fbCircle, 0.4, {
        strokeDashoffset: fblength + 10
    });
    TweenLite.to(fbIcon, 0.4, { fill: '#010002' }, 0.4);
});

//linkedin
var svgli = document.querySelector('#svgLinkedIn');
var liCircle = document.getElementById('linkedinCircle');
var linkedinlength = twitterCircle.getTotalLength();
var liIcon = document.getElementById('linkedinIcon');

liCircle.setAttribute('stroke-dashoffset', linkedinlength);

svgli.addEventListener('mouseover', function () {
    TweenLite.to(liCircle, 0.4, {
        strokeWidth: 2,
        stroke: '#0F71F9',
        strokeDashoffset: 0,
        strokeDasharray: linkedinlength + 10
    });
    TweenLite.to(liIcon, 0.4, { fill: '#0F71F9' });
});

svgli.addEventListener('mouseleave', function () {
    TweenLite.to(liCircle, 0.4, {
        strokeDashoffset: linkedinlength + 10
    });
    TweenLite.to(liIcon, 0.4, { fill: '#010002' }, 0.4);
});

//eMail
var svgEmail = document.getElementById('svgmail');
var emailIcon = document.getElementsByClassName('mailIcon');

svgEmail.addEventListener('mouseover', function () {
    TweenLite.to(emailIcon, 0.4, {
        stroke: '#0E70F5'
    });
});

svgEmail.addEventListener('mouseleave', function () {
    TweenLite.to(emailIcon, 0.4, {
        stroke: '#000000'
    });
});

//SECTION LOGO
var line1hidden = "787.556,427.557 772.556,382.557 772.556,382.557 787.556,427.557  ";
var line2hidden = "788.556,430.557 788.556,430.557 804.556,382.557 804.556,382.557 ";
var line3hidden = "821.556,385.557 813.556,409.557 813.556,409.557 821.556,385.557 ";
var line4hidden = "820.556,430.557 820.556,430.557 836.556,382.557 836.556,382.557 ";

TweenMax.from('#line1', 2, { attr: { points: line1hidden }, repeat: 1000, yoyo: true, ease: Elastic.easeInOut });
TweenMax.from('#line2', 2, { attr: { points: line2hidden }, repeat: 1000, yoyo: true, ease: Elastic.easeInOut });
TweenMax.from('#line3', 2, { attr: { points: line3hidden }, repeat: 1000, yoyo: true, ease: Elastic.easeInOut });
TweenMax.from('#line4', 2, { attr: { points: line4hidden }, repeat: 1000, yoyo: true, ease: Elastic.easeInOut });

// SECTION PROJECTS
var projectBoxy = document.getElementsByClassName('projectWindow');

for (var i = 0; i < projectBoxy.length; i++) {
    projectBoxy[i].addEventListener('mouseenter', function (event) {
        var szukam = this.children[0];
        console.log(szukam);
        szukam.children[0].classList.toggle('opacity');
        szukam.classList.toggle('hidden');
    });
}

for (var i = 0; i < projectBoxy.length; i++) {
    projectBoxy[i].addEventListener('mouseleave', function (event) {
        var szukam = this.children[0];
        szukam.children[0].classList.toggle('opacity');
        szukam.classList.toggle('hidden');
    });
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);