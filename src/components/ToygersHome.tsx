import { TonConnectButton } from "@tonconnect/ui-react";
import { useCounterContract } from "../hooks/useCounterContract";
import { useTonConnect } from "../hooks/useTonConnect";

import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Ellipsis,
  Button,
} from "./styled/styled";

export function ToygersHome() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();

  return (
    <div className="">
      <TonConnectButton />
      <div className="flex flex-col items-center justify-center w-full h-[200px] border-[2px] rounded-[20px] border-[#2EA7F2]">
        <p className="text-[18px] text-[#00000060]">
          $<b className="text-[#000000]">TOY</b>
        </p>
        <img
          alt="toy"
          src="/toy-coin.png"
          className="mt-[-10px] w-[150px] h-[150px]"
        />
      </div>
    </div>
  );
}
