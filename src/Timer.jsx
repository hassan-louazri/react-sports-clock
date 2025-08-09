import { useTimer } from "react-timer-hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
const Timer = ({ sessionTime, breakTime, setSessionTime, setBreakTime }) => {
    const [mode, setMode] = useState("session");
    const [autoStart, setAutoStart] = useState(false);
    // const audioLink =
    //     "https://github.com/hassan-louazri/audio-file/raw/refs/heads/main/alarm.wav";
    const audioRef = useRef(null);

    const getExpiryTimestamp = (minutes) => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 60 * minutes);
        return time;
    };

    const { seconds, minutes, hours, isRunning, pause, resume, restart } =
        useTimer({
            expiryTimestamp: getExpiryTimestamp(sessionTime),
            autoStart: autoStart,
            onExpire: () => {
                if (audioRef.current) {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play();
                }
                setTimeout(() => {
                    setMode((prev) => (prev === 'session' ? 'break': 'session'));
                    setAutoStart(true);
                }, 1000);
            },
        });

    const formatTime = () => {
        return `${String(minutes + hours * 60).padStart(2, "0")}:${String(
            seconds
        ).padStart(2, "0")}`;
    };

    const handleStartStop = () => {
        if (isRunning) pause();
        else resume();
    };
    const handleReset = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        setMode("session");
        setSessionTime(25);
        setBreakTime(5);
        restart(getExpiryTimestamp(sessionTime), false);
    };

    useEffect(() => {
        restart(mode === 'session' ? getExpiryTimestamp(sessionTime) : getExpiryTimestamp(breakTime), autoStart);
        setAutoStart(false);
    }, [sessionTime, breakTime, mode]);

    return (
        <div>
            <audio id="beep" ref={audioRef} src="/alarm.wav" preload="auto" />
            <div className="border-8 border-solid border-[#13353A] rounded-md my-8 mx-auto relative w-[270px] h-[150px] text-center">
                <div className="absolute w-[190px] h-[110px] left-1/2 top-1/2 -ml-[95px] -mt-[57px]">
                    <div id="timer-label" className="font-semibold text-2xl">
                        {mode}
                    </div>
                    <div id="time-left" className="text-7xl">
                        {formatTime()}
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <button
                    id="start_stop"
                    className="cursor-pointer"
                    onClick={handleStartStop}
                >
                    <FontAwesomeIcon icon={faPlay} size="2x" />
                    <FontAwesomeIcon icon={faPause} size="2x" />
                </button>
                <button
                    id="reset"
                    onClick={handleReset}
                    className="cursor-pointer px-4"
                >
                    <FontAwesomeIcon icon={faRefresh} size="2x" />
                </button>
            </div>
        </div>
    );
};

export default Timer;
