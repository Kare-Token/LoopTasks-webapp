import Head from "next/head";

const tiers = [
  { name: "Starter", price: 20, daily: 2.5 },
  { name: "Bronze", price: 55, daily: 5 },
  { name: "Silver", price: 115, daily: 15 },
  { name: "Gold", price: 210, daily: 27 },
  { name: "Platinum", price: 550, daily: 55 },
  { name: "Diamond", price: 1550, daily: 70 },
];

// Your admin wallet (not shown on screen, only used for redirect)
const adminWallet = "0xeAA2b4BF0594bF735F1e8faB43f729A4794d1D7e";

export default function Upgrade() {
  const handleUpgrade = (amount) => {
    const polygonUSDT = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"; // USDT on Polygon
    const url = `https://metamask.app.link/send/${polygonUSDT}?address=${adminWallet}&uint256=${amount * 1e6}`;
    window.location.href = url;
  };

  return (
    <>
      <Head>
        <title>Upgrade | LoopTask Pro</title>
      </Head>

      <main className="min-h-screen bg-black text-lightYellow px-4 py-10">
        <h1 className="text-4xl text-center font-bold text-burgundy mb-6">
          🔓 Choose Your Plan
        </h1>

        <p className="max-w-2xl mx-auto text-center text-lightYellow/80 mb-8">
          Upgrade to unlock full earnings and withdraw instantly. Each plan is valid for 30 days —
          renew monthly to stay active and profitable. 💼
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="border border-lightYellow/30 rounded-xl p-6 bg-burgundy/10 hover:bg-burgundy/30 transition"
            >
              <h2 className="text-2xl font-bold text-lightYellow mb-2">{tier.name}</h2>
              <p className="text-lg">💳 ${tier.price} one-time</p>
              <p className="text-md mb-4">📈 Earns ${tier.daily} / day</p>

              <button
                onClick={() => handleUpgrade(tier.price)}
                className="bg-lightYellow text-black font-bold py-2 px-4 rounded hover:bg-yellow-300 transition w-full"
              >
                🚀 Upgrade to {tier.name}
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
