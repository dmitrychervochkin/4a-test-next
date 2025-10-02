import "./tariffCard.style.scss";

interface TariffCardProps {
    id: string;
    period: string;
    price: number;
    fullPrice: number;
    isBest: boolean;
    text: string;
    isLostTime: boolean;
    setCurrentTariff: (value: {
        id: string;
        period: string;
        price: number | null;
    }) => void;
    currentTariff: {
        id: string;
        period: string;
        price: number | null;
    };
}

function getSale(price: number, fullPrice: number) {
    return Math.round(((fullPrice - price) / fullPrice) * 100);
}

export const TariffCard = ({
    id,
    period,
    price,
    fullPrice,
    isBest,
    text,
    setCurrentTariff,
    currentTariff,
    isLostTime,
}: TariffCardProps) => {
    return (
        <div
            className={`bg-[#313637] flex gap-[50px] rounded-[40px] relative border-[2px] border-[#484d4e] transition-colors duration-200 hover:cursor-pointer hover:border-[#a1a1a1] max-md:w-full max-md:rounded-[20px] max-md:p-5 max-md:h-full max-md:flex-row max-md:items-center max-md:justify-between  ${
                isBest
                    ? "row-start-1 col-span-3 flex items-center gap-[50px] p-[30px_100px]"
                    : "flex flex-col h-[335px] p-[30px_20px]"
            } ${
                currentTariff.period === period
                    ? "border-2 border-[#fdb056]"
                    : ""
            }`}
            key={id}
            onClick={() => setCurrentTariff({ id, period, price })}
        >
            <div
                className={`text-center max-md:max-w-[200px] max-md:flex-1 max-sm:p-[30px_10px] ${
                    isBest ? "min-w-[300px] min-w-0" : ""
                }`}
            >
                <div
                    className={`text-[26px] max-md:m-0 max-md:text-[18px] max-xs:text-[16px] ${
                        isBest ? "my-2.5" : "my-7.5"
                    }`}
                >
                    {period}
                </div>
                <div
                    className={`text-[50px] font-semibold max-md:text-[34px] max-xs:text-[20px] ${
                        isBest ? "text-[#fdb056]" : ""
                    }`}
                >
                    {isLostTime ? fullPrice : price} ₽
                </div>
                {!isLostTime && (
                    <div className="text-[24px] text-[#919191] line-through w-full text-right max-md:text-[16px] max-xs:text-[14px]">
                        {fullPrice} ₽
                    </div>
                )}
            </div>
            <div className="text-[16px] max-md:flex-1 max-md:text-[14px] max-xs:text-[12px]">
                {text}
            </div>
            <div className="absolute bg-[#fd5656] text-[22px] font-light px-[8px] py-[5px] rounded-bl-[7px] rounded-br-[7px] top-0 left-[40px] max-md:text-[14px] max-md:px-2 max-md:py-[5px] max-md:top-0 max-md:left-auto max-md:right-[50px]">
                -{getSale(price, fullPrice)} %
            </div>
            {isBest && (
                <div className="absolute text-[#fdb056] text-[22px] top-[10px] right-[25px] max-md:text-[14px] max-md:top-[5px] max-md:right-[10px]">
                    хит!
                </div>
            )}
        </div>
    );
};
