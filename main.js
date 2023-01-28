camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});
Webacm.attach( '#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}