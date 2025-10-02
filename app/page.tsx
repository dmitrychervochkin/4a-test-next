"use client";

import { useState } from "react";
import { Main, Header } from "../components";

export default function HomePage() {
  const [isAgree, setIsAgree] = useState(false);
  const [isLostTime, setIsLostTime] = useState(false);
  const [currentTariff, setCurrentTariff] = useState<{ id: string; period: string; price: number | null }>({
    id: "",
    period: "",
    price: null,
  });

  return (
    <div>
      <Header setIsLostTime={setIsLostTime} />
      <Main
        isLostTime={isLostTime}
        isAgree={isAgree}
        setIsAgree={setIsAgree}
        currentTariff={currentTariff}
        setCurrentTariff={setCurrentTariff}
      />
    </div>
  );
}