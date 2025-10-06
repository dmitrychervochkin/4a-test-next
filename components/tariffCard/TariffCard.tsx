import React from "react";

interface TariffCardProps {
    id: string;
    period: string;
    price: number;
    full_price: number;
    is_best?: boolean;
    text: string;
    currentTariff: { id: string; period: string; price: number | null };
    setCurrentTariff: (value: {
        id: string;
        period: string;
        price: number | null;
    }) => void;
}

export const TariffCard: React.FC<TariffCardProps> = ({
    id,
    period,
    price,
    full_price: fullPrice,
    is_best: isBest,
    text,
    currentTariff,
    setCurrentTariff,
}) => {
    const getSale = (price: number, fullPrice: number) =>
        Math.round(((fullPrice - price) / fullPrice) * 100);

    return (
        <div
            className={`
        relative w-full h-full rounded-[20px] py-8 px-4 cursor-pointer border-2
        ${
            currentTariff.period === period
                ? "border-[#fdb056]"
                : "border-[#484d4e]"
        }
        ${isBest ? "flex-row" : "flex-col"}
        hover:border-[#a1a1a1] transition-colors
        bg-[#313637] text-white 
        flex justify-between gap-5 items-center
        max-md:px-3 max-md:py-5 max-md:flex-row
      `}
            onClick={() => setCurrentTariff({ id, period, price })}
        >
            <div className="space-y-2 flex-1 text-center max-md:text-left max-w-[200] max-md:max-w-[100]">
                <div className="text-lg font-semibold">{period}</div>
                <div
                    className={`text-4xl font-bold ${
                        isBest ? "text-[#fdb056]" : ""
                    } max-md:text-2xl`}
                >
                    {price} ₽
                </div>
                <div className="text-sm text-[#919191] line-through text-right">
                    {fullPrice} ₽
                </div>
            </div>
            <div className="text-sm flex-1">{text}</div>

            {isBest && (
                <div className="absolute top-0 right-0 text-[#fdb056] px-2 py-1 ">
                    хит!
                </div>
            )}
            <div className="absolute top-0 left-10 bg-[#fd5656] px-2 py-1 text-white rounded max-md:left-auto max-md:right-12 max-md:p-1 max-md:text-xs">
                -{getSale(price, fullPrice)}%
            </div>
        </div>
    );
};
