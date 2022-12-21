Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("webcam");
 Webcam.attach('#webcam');

 console.log(ml5.version);


 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/model.json', modelLoaded)

 function modelLoaded(){
    console.log("Modelo carregado")
 }

 function recognize(){
   img = document.getElementById("captura_imagem");
   classifier.classify(img, gotResult)
 }

 function gotResult(error, results){
   if (error){
      console.error("error");
   }
   else {
      console.log(results);
      var synth = window.speechSynthesis;
      speakData = "isto é" + results[0].label;
      var utterThis = new SpeechSynthesisUtterance(speakData);
      synth.speak(utterThis);
      document.getElementById("h2").innerHTML = results[0].label;
   }
}