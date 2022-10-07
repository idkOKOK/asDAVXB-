function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
}

function draw() {
    strokeWeight(8);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(gotResult);
    document.getElementById('label').innerHTML = 'label' + results[0].label;

    document.getAnimations('confidence').innerHTML = 'Confidence:' + Math.round(results[0].confidence * 100) + '%';

    utterThis = new SpeechSynthesisUtterance(esults[0].label);
    synth.speak(utterThis);
}

function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function clearCanvas() {

    background("white");
}