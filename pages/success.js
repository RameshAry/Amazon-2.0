import React from "react";
import Header from "./components/Header";
import { TiTickOutline } from "react-icons/ti";
import { useRouter } from "next/router";

function Success() {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <TiTickOutline className="color: bg-green-500 h-10 w-10 rounded-full" />
            <h1 className="text-3xl">Your Order has been confirmed</h1>
          </div>
          <p className="">
            Thank you for shopping with us. We will send a confirmation once
            your item has shipped, if you would like to check the satus of your
            order(s) please press the link below
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="button mt-8"
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default Success;
