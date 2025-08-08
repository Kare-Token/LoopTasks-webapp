import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>LoopTask Pro</title>
        <meta name="description" content="Get paid daily to do what you already do — scroll and watch videos!" />
      </Head>

      <main className="min-h-screen bg-black text-lightYellow flex flex-col items-center justify-center px-6">
        <section className="max-w-4xl text-center py-16 space-y-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-burgundy drop-shadow">
            Turn Scrolling Into Daily Income 💰
          </h1>

          <p className="text-lg md:text-xl text-lightYellow/90 leading-relaxed">
            You watch videos every day. You scroll through content every day.  
            <br />
            Now it’s time to get paid for it.  
            <br />
            <span className="text-green-400 font-bold">LoopTask pays you daily</span> for watching short videos, leaving a quick comment, and staying active.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a
              href="/register"
              className="bg-burgundy hover:bg-lightYellow text-lightYellow hover:text-burgundy font-bold py-3 px-6 rounded-xl shadow transition"
            >
              🚀 Start Earning Now (Free Trial!)
            </a>
            <a
              href="/upgrade"
              className="border-2 border-lightYellow text-lightYellow hover:bg-lightYellow hover:text-black font-bold py-3 px-6 rounded-xl transition"
            >
              💸 View All Tiers
            </a>
          </div>

          <div className="mt-10 rounded-xl overflow-hidden border-2 border-burgundy shadow-lg">
            <video autoPlay loop muted playsInline className="w-full max-w-xl">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="bg-burgundy/20 border border-burgundy rounded-xl px-6 py-4 mt-10 text-left space-y-3">
            <h2 className="text-2xl font-bold text-burgundy">📌 How It Works</h2>
            <ul className="text-lightYellow/90 list-disc pl-5 space-y-1">
              <li>🎁 Get a 1-day free trial when you register</li>
              <li>💸 Complete 1 video task to earn your first $2 instantly</li>
              <li>🗓️ Return daily for new premium video tasks</li>
              <li>💬 Each task includes watching a video + leaving a comment</li>
              <li>⏱️ Countdown runs for 1 hour per task</li>
              <li>🚀 Earnings paid directly to your crypto wallet</li>
            </ul>
          </div>

          <p className="mt-8 text-sm text-lightYellow/60">
            🔒 LoopTask Pro is secure, transparent, and made for real people who want real income — one scroll at a time.
          </p>
        </section>
      </main>
    </>
  );
}
