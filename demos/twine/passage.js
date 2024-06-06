
<div id="p5-container" style="width: 100%; height: 70vh;"></div>
<script>
    // Wait for the p5.js script to be loaded, then initialize the sketch
    if(!window.p5LoadedDone) {
    window.p5Loaded.then(() => {
        if (window.initializeP5) {
            window.initializeP5();
            window.p5LoadedDone = true
        }
    }).catch((error) => {
        console.error('Error loading p5.js:', error);
    });
    } else {
       window.initializeP5();
    }
</script>

Go [[Forward]]