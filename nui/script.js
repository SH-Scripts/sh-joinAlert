$(document).ready(function(){
    var audioplayer = {};
    audioplayer.playSound = function(soundFile, soundVolume) {
        if (audioplayer.sound != null) audioplayer.sound.pause();
        audioplayer.sound = new Audio('./' + soundFile + '.ogg');
        audioplayer.sound.volume = soundVolume;
        audioplayer.sound.play();
    }

    audioplayer.stopSound = function() {
        if (audioplayer.sound) {
            audioplayer.sound.pause()
        }
    }

    window.addEventListener('message', (event) => {
        if (event.data.type === 'open') {
            $('.text').html(event.data.text);
            $(".main").css({
                'display': 'block',
            }).animate({
                bottom: "10vh"
            }, 1e3)
        } else if (event.data.type === "close") {
            $(".main").css({
                'display': 'block'
            }).animate({
                bottom: "-10vh"
            }, 1e3, function () {
                $(".main").css({
                    'display': 'none'
                })
            })
        } else if (event.data.type === 'update') {
            $('.text').html(event.data.text);
        } else if (event.data.type === 'playSound') {
            audioplayer.playSound('explosion', 0.1)
        }
    });
});