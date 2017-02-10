require('./shared/lib/TweenLite.min.js');


function ready(fn) {
	if (document.readyState !== 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

ready(() => {
	//const app = new App();
	//window.app = app;
	console.log("ready ok bonsoir");
});