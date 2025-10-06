import { useEffect, useState } from "react";
import { TariffCard } from "../tariffCard/TariffCard";
import { CheckSquare, Square } from "lucide-react";
import { Guarantee } from "../guarantee/Guarantee";

export interface ITariffItem {
    id: string;
    period: string;
    price: number;
    full_price: number;
    is_best: boolean;
    text: string;
}

interface MainProps {
    isAgree: boolean;
    setIsAgree: (value: boolean) => void;
    isLostTime: boolean;
    currentTariff: {
        id: string;
        period: string;
        price: number | null;
        full_price: number;
    };
    setCurrentTariff: (value: {
        id: string;
        period: string;
        price: number | null;
    }) => void;
}

export const Main = ({
    isAgree,
    setIsAgree,
    currentTariff,
    setCurrentTariff,
    isLostTime,
}: MainProps) => {
    const [tariffs, setTariffs] = useState<ITariffItem[]>([]);
    const [agreeError, setAgreeError] = useState(false);

    useEffect(() => {
        fetch("https://t-core.fit-hub.pro/Test/GetTariffs")
            .then((res) => res.json())
            .then((data) => setTariffs(data));
    }, []);

    const onSubmit = () => {
        if (!isAgree) {
            setAgreeError(true);
            return;
        } else {
            setAgreeError(false);
            alert(
                `Спасибо за покупку! Вы выбрали тариф: ${currentTariff.period}`
            );
        }
    };

    return (
        <div className="max-w-[1200px] mx-auto flex flex-col p-5 gap-5 max-[375px]:p-3">
            <h1 className="text-[40px] mt-5 mb-[60px] max-[375px]:text-[24px] max-[375px]:m-0">
                Выбери подходящий для себя{" "}
                <span className="text-[#fdb056]">тариф</span>
            </h1>

            <div className="flex justify-center items-center my-5 max-[1200px]:flex-col">
                <img
                    className="max-h-[767px] max-w-full h-auto max-[375px]:max-h-[250px] max-[320px]:max-h-[200px]"
                    src="./img.png"
                />
                <div className="flex flex-col ml-5 max-[1200px]:ml-0 mt-0 max-[1200px]:mt-5">
                    <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-auto">
                        {tariffs
                            .sort((a, b) => b.price - a.price)
                            .map((tariff, index) => (
                                <div
                                    key={tariff.period}
                                    className={`${
                                        index === 0 ? "md:col-span-3" : ""
                                    } w-full`}
                                >
                                    <TariffCard
                                        {...tariff}
                                        currentTariff={currentTariff}
                                        setCurrentTariff={setCurrentTariff}
                                    />
                                </div>
                            ))}

                        {/* Информационный блок */}
                        <div className="flex bg-[#2d3233] p-[18px_20px] rounded-[20px] text-[16px] gap-2.5 w-full md:col-span-2 max-[800px]:text-[12px]">
                            <div className="text-[20px] text-[#fdb056] max-[800px]:text-[16px]">
                                !
                            </div>
                            <p>
                                Следуя плану на 3 месяца и более, люди получают
                                в 2 раза лучший результат, чем за 1 месяц
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-2.5 my-5 items-start max-[800px]:flex-col">
                        <div className="w-8 cursor-pointer">
                            {isAgree ? (
                                <CheckSquare
                                    size={32}
                                    strokeWidth={1}
                                    color="#fdb056"
                                    onClick={() => setIsAgree(false)}
                                />
                            ) : (
                                <Square
                                    strokeWidth={1}
                                    size={32}
                                    color="#606566"
                                    onClick={() => {
                                        setAgreeError(false);
                                        setIsAgree(true);
                                    }}
                                />
                            )}
                        </div>
                        <p
                            className={`max-w-[550px] text-[16px] max-[800px]:text-[12px]`}
                            style={{ color: agreeError ? "#FD5656" : "" }}
                        >
                            Я согласен с{" "}
                            <span className="underline cursor-pointer transition-colors hover:text-[#606566] active:text-[#fdb056]">
                                офертой рекуррентных платежей
                            </span>{" "}
                            и{" "}
                            <span className="underline cursor-pointer transition-colors hover:text-[#606566] active:text-[#fdb056]">
                                Политикой конфиденциальности
                            </span>
                        </p>
                    </div>

                    <button
                        onClick={onSubmit}
                        className="bg-[#fdb056] text-black font-bold text-[20px] py-5 px-[60px] rounded-[20px] max-w-[400px] border-none transition-colors duration-200 hover:bg-[#606566] active:bg-[#d37c18] max-[800px]:w-full max-[800px]:mx-auto max-[800px]:text-[16px] max-[320px]:py-4"
                    >
                        Купить
                    </button>

                    <div className="text-[#9b9b9b] text-[14px] my-5 max-[375px]:text-[10px]">
                        Нажимая кнопку «Купить», Пользователь соглашается на
                        разовое списание денежных средств для получения
                        пожизненного доступа к приложению. Пользователь
                        соглашается, что данные кредитной/дебетовой карты будут
                        сохранены для осуществления покупок дополнительных услуг
                        сервиса в случае желания пользователя.
                    </div>
                </div>
            </div>

            <Guarantee />
        </div>
    );
};
