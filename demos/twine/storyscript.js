function loadScripts(urls) {
    return urls.reduce((promise, url) => {
        return promise.then(() => loadScript(url));
    }, Promise.resolve());
}

function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
        document.head.appendChild(script);
    });
}
// Function to add p5 properties and methods to the global window object
function addP5Globals(p) {
    window._p5Globals = {};
    for (let key in p) {
        if (typeof p[key] === 'function') {
            window._p5Globals[key] = p[key].bind(p);
        } else {
            Object.defineProperty(window, key, {
                get: () => p[key],
                set: (value) => p[key] = value,
                configurable: true
            });
        }
    }
    Object.assign(window, window._p5Globals);
}
function removeP5Globals() {
    if (window._p5Globals) {
        for (let key in window._p5Globals) {
            delete window[key];
        }
        delete window._p5Globals;
    }
}

window.p5Loaded = loadScripts([
  'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js'
])
    .then(() => {
        console.log('p5.js loaded successfully');
        // Define the initializeP5 function in the global scope
        window.initializeP5 = function () {
          
        if (window.myP5) {
            window.myP5.remove();
          removeP5Globals()
        }
            window.myP5 = new p5((p) => {
              addP5Globals(p);

              // p5 Script goes here:

              function setup () {
                    
                const container = document.getElementById('p5-container');
                const width = container.offsetWidth;
                const height = container.offsetHeight;
                	createCanvas(width, height);
                    background(200);
                  };
              	  function draw () {
                      background(200);
                      fill(255, 0, 0);
                      ellipse(mouseX, mouseY, 50, 50);
	                };
			// End p5 script
                p.setup = setup
                p.draw = draw
            }, document.getElementById('p5-container'));
        };
    })
    .catch((error) => {
        console.error(error);
    });
