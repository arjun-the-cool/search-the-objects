status_var= "";
function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting le object";
    search= document.getElementById("input").value;
}
function modelLoaded()
{
    console.log("Model is le loaded!");
    status_var= "true";
}
function draw()
{
    image(video, 0, 0, 380, 380);7
}