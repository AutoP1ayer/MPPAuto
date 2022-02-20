$(function() {
    //audio
    MPP.piano.audio.lramp = 0;
    MPP.piano.audio.sstop = 0;

    //addon ced
    MPP.ced_addon = {};

    MPP.ced_addon.debug = {
        startTime: null,
        endTime: null,
        fps: 0,
        frame: 0,

        NPSTimer: null,
        notes: 0,
        nps: 0,
        fps: 0
    };

    MPP.ced_addon.functions = {
        initFPS() {
            MPP.ced_addon.debug.startTime = new Date().getTime();
            
            function gameLoop(){
                MPP.ced_addon.debug.frame ++;
                document.getElementById('fps').innerText = `FPS: ${MPP.ced_addon.debug.fps}`;
                MPP.ced_addon.debug.endTime = new Date().getTime();
                if(MPP.ced_addon.debug.endTime - MPP.ced_addon.debug.startTime >= 1000){
                    MPP.ced_addon.debug.fps = MPP.ced_addon.debug.frame;
                    MPP.ced_addon.debug.frame = 0;
                    MPP.ced_addon.debug.startTime = new Date().getTime();
                }
                requestAnimationFrame(gameLoop);
            }
            gameLoop();
        },
        addDebugCounters() {
            var nc = MPP.ced_addon.debug.notes += 1;
            var ret = (nc).toString().padStart(6, '0');
            document.getElementById('notes').innerText = `Notes: ${ret}`;
            MPP.ced_addon.debug.nps += 1;
        },
        initNPS() {
            MPP.ced_addon.debug.NPSTimer = setInterval(() => {
                document.getElementById('nps').innerHTML = `NPS: ${MPP.ced_addon.debug.nps}`;
                MPP.ced_addon.debug.nps = 0;
            }, 1000);
        }
    };

    MPP.ced_addon.functions.initFPS();
    MPP.ced_addon.functions.initNPS();
});