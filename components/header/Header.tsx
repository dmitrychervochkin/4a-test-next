import { useEffect, useState } from "react";

export const Header = ({
    setIsLostTime,
}: {
    setIsLostTime: (p: boolean) => void;
}) => {
    const [timeLeft, setTimeLeft] = useState(35);

    useEffect(() => {
        if (timeLeft <= 0) {
            setIsLostTime(true);
            return;
        }

        const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft, setIsLostTime]);

    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");

    const isCritical = timeLeft <= 30 && timeLeft > 0;
    const isFinished = timeLeft <= 0;

    const getClass = (isCritical: boolean, isFinished: boolean) => {
        if (isFinished) return "text-white";
        if (isCritical) return "blink-color";
        return "text-[#ffbb00]";
    };

    return (
        <div className="flex flex-col items-center justify-center bg-[#1d5b43] px-4 py-2">
            <h2 className="text-[24px] max-[500px]:text-[18px] max-[320px]:text-[14px] text-white">
                Успейте открыть пробную неделю
            </h2>

            <div className="flex items-center gap-2 font-bold text-[40px] max-[500px]:text-[32px] max-[320px]:text-[28px]">
                <span
                    className={`text-[14px] ${getClass(
                        isCritical,
                        isFinished
                    )}`}
                >
                    ✦
                </span>
                <div
                    className={`text-center ${getClass(
                        isCritical,
                        isFinished
                    )}`}
                >
                    {isFinished ? "00:00" : `${minutes}:${seconds}`}
                </div>
                <span
                    className={`text-[14px] ${getClass(
                        isCritical,
                        isFinished
                    )}`}
                >
                    ✦
                </span>
            </div>
        </div>
    );
};
