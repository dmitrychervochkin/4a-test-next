export const Guarantee = () => {
    return (
        <div
            className="guarantee border border-[#484d4e] w-full rounded-[30px] p-5 flex flex-col gap-5
                    max-w-[800px]:p-3"
        >
            <div className="flex">
                <p
                    className="text-[#81fe95] border border-[#81fe95] rounded-[30px] px-[30px] py-4 text-[28px]
                      max-[800px]:px-2 max-[800px]:py-2 max-[800px]:text-[16px] w-full"
                >
                    гарантия возврата 30 дней
                </p>
            </div>
            <p className="text-[#dcdcdc] text-[24px] max-[800px]:text-[14px]">
                Мы уверены, что наш план сработает для тебя и ты увидишь видимые
                результаты уже через 4 недели! Мы даже готовы полностью вернуть
                твои деньги в течение 30 дней с момента покупки, если ты не
                получишь видимых результатов.
            </p>
        </div>
    );
};
