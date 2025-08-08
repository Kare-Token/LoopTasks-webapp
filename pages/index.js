import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>LoopTask Pro</title>
        <meta name="description" content="Earn USDT by completing paid video tasks daily" />
      </Head>

      <main className="min-h-screen bg-black text-lightYellow font-sans flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl text-center space-y-8 py-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-burgundy drop-shadow">
            LoopTask Pro
          </h1>

          <p className="text-lg md:text-xl text-lightYellow/90">
            💼 Join our premium platform and earn <span className="text-green-400 font-bold">daily USDT</span> by completing paid video tasks.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-6">
            <a
              href="/register"
              className="bg-burgundy hover:bg-lightYellow text-lightYellow hover:text-burgundy font-bold py-3 px-6 rounded-xl shadow transition"
            >
              🚀 Become a Paid Member
            </a>

            <a
              href="/upgrade"
              className="border-2 border-lightYellow text-lightYellow hover:bg-lightYellow hover:text-black font-bold py-3 px-6 rounded-xl transition"
            >
              💰 View Tiers & Pricing
            </a>
          </div>

          <div className="rounded-xl mt-10 overflow-hidden border-2 border-burgundy shadow-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-xl"
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="mt-4 text-sm text-lightYellow/60">
            🔒 Secure | 🎯 Real Tasks | 💸 Instant Withdrawals
          </p>
        </div>
      </main>
    </>
  );
}
          
