import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>LoopTask Pro</title>
        <meta name="description" content="Earn daily USDT by completing paid video tasks." />
      </Head>

      <main className="min-h-screen bg-black text-lightYellow font-sans flex flex-col items-center justify-center px-6">
        <div className="max-w-3xl text-center space-y-8 py-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-burgundy drop-shadow">
            Welcome to LoopTask Pro
          </h1>

          <p className="text-lg md:text-xl text-lightYellow/90">
            🎬 Complete high-paying video tasks & earn <span className="text-green-400 font-bold">USDT daily</span>. No free users. Paid members only.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a
              href="/register"
              className="bg-burgundy hover:bg-lightYellow text-lightYellow hover:text-burgundy font-bold py-3 px-6 rounded-xl shadow transition"
            >
              🚀 Get Started Now
            </a>
            <a
              href="/upgrade"
              className="border-2 border-lightYellow text-lightYellow hover:bg-lightYellow hover:text-black font-bold py-3 px-6 rounded-xl transition"
            >
              💰 View Pricing Tiers
            </a>
          </div>

          <div className="mt-10 rounded-xl overflow-hidden border-2 border-burgundy shadow-lg">
            <video autoPlay loop muted playsInline className="w-full max-w-xl">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="mt-6 text-sm text-lightYellow/60">
            🔒 Secure Platform | 💸 Instant Withdrawals | 🌍 Global Access
          </p>
        </div>
      </main>
    </>
  );
}
