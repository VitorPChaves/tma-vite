import { TonConnectButton } from "@tonconnect/ui-react";
import { useCounterContract } from "../hooks/useCounterContract";
import { useTonConnect } from "../hooks/useTonConnect";

import padlock from "/padlock.png";
import toycoin from "/toy-coin.png";
import toybuilder from "/toybuilder.png";
import toygersgold from "/toygers-gold.png";
import toygerssilver from "/toygers-silver.png";

import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Ellipsis,
  Button,
} from "./styled/styled";
import { useEffect } from "react";

export function ToygersHome() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();
  //   document.getElementById("toybuilder").src = toybuilder;

  return (
    <div className="">
      <TonConnectButton />

      <div className="relative flex flex-col items-center justify-center w-full h-[200px] border-[2px] rounded-[20px] border-[#2EA7F2] hover:scale-[1.02] smooth-transition">
        <p className="text-[18px] text-[#00000060]">
          $<b className="text-[#000000]">TOY</b>
        </p>
        <img src={toycoin} className="mt-[-10px] w-[150px] h-[150px]" />
        <div className="flex items-center justify-center absolute right-[0px] bottom-[-2px] mr-[14px] w-[100px] h-[34px] border-[2px] rounded-[10px] border-[#2EA7F2] bg-[#FFFFFF] cursor-pointer hover:scale-[1.08] smooth-transition">
          <p className="text-center text-[#2EA7F2]">Buy</p>
        </div>
      </div>

      <div className="mt-[20px] relative flex flex-col items-center justify-center w-full h-[200px] border-[2px] rounded-[20px] border-[#2EA7F2] hover:scale-[1.02] smooth-transition">
        <b className="text-[18px] text-[#000000]">ToyBuilder</b>
        <img
          alt="toy"
          src={toybuilder}
          className="mt-[-10px] w-[150px] h-[150px]"
        />
        <div className="flex items-center justify-center absolute right-[0px] bottom-[-2px] mr-[14px] w-[100px] h-[34px] border-[2px] rounded-[10px] border-[#2EA7F2] bg-[#FFFFFF] cursor-pointer hover:scale-[1.08] smooth-transition">
          <p className="text-center text-[#2EA7F2]">Soon</p>
        </div>
      </div>

      <div className="flex flex-row gap-[4px] items-center justify-center w-full mt-[20px] mb-[10px]">
        <b className="text-[#000000] text-[22px]">TOYGERS</b>
        <img alt="locked" src={padlock} className="w-[20px] h-[20px]" />
      </div>

      <div className="flex flex-row justify-around w-full gap-[20px]">
        <div className="flex flex-col items-center justify-between w-[160px] md:w-[40%] h-[240px] border-[2px] rounded-[20px] border-[#2EA7F2] hover:scale-[1.02] smooth-transition">
          <div className="flex flex-row w-full items-start justify-between p-[12px] text-[#000000] text-[12px] md:text-[14px]">
            <p>Serie 1</p>
            <p>100 units</p>
          </div>
          <img
            alt="toy"
            src={toygersgold}
            className="h-[150px] mt-[-20px] hover:scale-[1.12] smooth-transition"
          />
          <div className="flex items-center justify-center mb-[-2px] w-[100px] h-[34px] border-[2px] rounded-[10px] border-[#2EA7F2] bg-[#FFFFFF] cursor-pointer hover:scale-[1.08] smooth-transition">
            <p className="text-center text-[#2EA7F2]">Soon</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between w-[160px] md:w-[40%] h-[240px] border-[2px] rounded-[20px] border-[#2EA7F2] hover:scale-[1.02] smooth-transition">
          <div className="flex flex-row w-full items-start justify-between p-[12px] text-[#000000] text-[12px] md:text-[14px]">
            <p>Serie 1</p>
            <p>100 units</p>
          </div>
          <img
            alt="toy"
            src={toygerssilver}
            className="h-[150px] mt-[-20px] hover:scale-[1.12] smooth-transition"
          />
          <div className="flex items-center justify-center mb-[-2px] w-[100px] h-[34px] border-[2px] rounded-[10px] border-[#2EA7F2] bg-[#FFFFFF] cursor-pointer hover:scale-[1.08] smooth-transition">
            <p className="text-center text-[#2EA7F2]">Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
