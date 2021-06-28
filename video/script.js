
// Allow accessing the camera

var video = document.querySelector("#videoElement");

//mediaDevice and userMedia to navigate the access for camera

    if(navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
            video: true
            // after allowing the camera start the video stream
        }).then(function(stream) {
            video.srcObject = stream
            //play the video
            video.play();
        }).catch(function(error) {
            console.log(error);
        });
    }

    // capture Images

    var image = document.getElementById('image'),
        context = image.getContext('2d');  //setting for resolution of image

    document.getElementById('capture').addEventListener('click' , function() {
            // draw a image when the button clicked on the canvas
        
        context.drawImage(video , 0 , 0 , image.width , image.height);
        
    });


    const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function() {
  realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
  if (realFileBtn.value) {
    customTxt.innerHTML = realFileBtn.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
  } else {
    customTxt.innerHTML = "No file chosen, yet.";
  }
});
