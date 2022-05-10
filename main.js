function startclassify() {
    console.log("Hello")
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/4fFrUxmXE/model.json",modeloaded)
}
function modeloaded() {
    classifier.classify(gotresult);
}
function gotresult(error,result) {
if(error)
{
    console.error(error);
}
else{
    console.log(result);
    random_r=Math.floor(Math.random()*256);
    random_g=Math.floor(Math.random()*256);
    random_b=Math.floor(Math.random()*256);
    document.getElementById("result_label").innerHTML="I can hear "+result[0].label;
    document.getElementById("result_accuracy").innerHTML="Accuracy "+result[0].confidence;
    document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")"
    document.getElementById("result_accuracy").style.color="rgb("+random_r+","+random_g+","+random_b+")"
    img1=document.getElementById("animal_sound1");
    img2=document.getElementById("animal_sound2");
    img3=document.getElementById("animal_sound3");
    if(reslt[0].label=="barking"){
        img1.src="meow.gif"
        img2.src="bark.png"
        img3.src="listen.png"
    }
    else if(reslt[0].label=="meowing"){
        img1.src="meow.png"
        img2.src="bark.gif"
        img3.src="listen.png"
    }
    else{
        img1.src="meow.png"
        img2.src="bark.png"
        img3.src="listen.gif"
    }

}

}
