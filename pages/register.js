// pages/register.js

import { useState } from "react";
import Head from "next/head";

export default function Register() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [wallet, setWallet] = useState("");
  const [pin, setPin] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate successful registration
    if (name && wallet && pin.length === 4) {
      setIsSubmitted(true);
    } else {
      alert("Please complete all fields correctly.");
    }
  };

  return (
    <>
      <Head>
        <title>Register | LoopTask Pro</title>
      </Head>

      <main className="min-h-screen bg-black text-lightYellow flex items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-burgundy/20 p-8 rounded-xl shadow-xl">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h1 className="text-3xl font-bold text-center text-lightYellow mb-4">
                ✨ Create Your LoopTask Pro Account
              </h1>

              {step === 1 && (
                <>
                  <label className="block text-sm font-medium mb-2">
                    👤 Full Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded bg-black border border-lightYellow/50 text-white placeholder:text-lightYellow/50"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => name.length > 2 && setStep(2)}
                    className="mt-4 w-full bg-lightYellow text-black font-bold py-3 rounded hover:bg-yellow-300 transition"
                  >
                    Next
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <label className="block text-sm font-medium mb-2">
                    💼 Wallet Address:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Polygon USDT wallet"
                    value={wallet}
                    onChange={(e) => setWallet(e.target.value)}
                    className="w-full px-4 py-3 rounded bg-black border border-lightYellow/50 text-white placeholder:text-lightYellow/50"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => wallet.length > 10 && setStep(3)}
                    className="mt-4 w-full bg-lightYellow text-black font-bold py-3 rounded hover:bg-yellow-300 transition"
                  >
                    Next
                  </button>
                </>
              )}

              {step === 3 && (
                <>
                  <label className="block text-sm font-medium mb-2">
                    🔐 Set a 4-digit PIN:
                  </label>
                  <input
                    type="password"
                    placeholder="e.g. 1234"
                    value={pin}
                    maxLength={4}
                    onChange={(e) => setPin(e.target.value)}
                    className="w-full px-4 py-3 rounded bg-black border border-lightYellow/50 text-white placeholder:text-lightYellow/50"
                    required
                  />
                  <button
                    type="submit"
                    className="mt-4 w-full bg-green-500 text-black font-bold py-3 rounded hover:bg-green-400 transition"
                  >
                    ✅ Complete Registration
                  </button>
                </>
              )}
            </form>
          ) : (
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold text-green-400">
                🎉 Trial Activated!
              </h2>
              <p className="text-lightYellow/80">
                You earned your first <strong>$2</strong>! 🤑<br />
                <span className="text-red-400 font-semibold block mt-2">
                  You must upgrade to withdraw your earnings.
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                <a
                  href="/task"
                  className="bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-6 rounded transition"
                >
                  🎬 Do Today’s Task
                </a>
                <a
                  href="/upgrade"
                  className="bg-burgundy hover:bg-lightYellow text-lightYellow hover:text-black font-bold py-3 px-6 rounded transition"
                >
                  🔓 Unlock & Upgrade
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
