import { useState } from "react";
import Head from "next/head";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    wallet: "",
    pin: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.wallet && formData.pin.length === 4) {
      setSubmitted(true);
    } else {
      alert("Please fill out all fields correctly.");
    }
  };

  return (
    <>
      <Head>
        <title>Register | LoopTask Pro</title>
      </Head>

      <main className="min-h-screen bg-black text-lightYellow flex items-center justify-center px-6">
        <div className="bg-burgundy/20 border border-burgundy rounded-xl p-8 w-full max-w-md shadow-lg">
          {!submitted ? (
            <>
              <h1 className="text-3xl font-bold text-burgundy mb-6 text-center">
                Create Your Account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded bg-black border border-lightYellow text-lightYellow"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Wallet Address (USDT Polygon)</label>
                  <input
                    type="text"
                    name="wallet"
                    value={formData.wallet}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded bg-black border border-lightYellow text-lightYellow"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">4-digit PIN</label>
                  <input
                    type="password"
                    name="pin"
                    maxLength={4}
                    value={formData.pin}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded bg-black border border-lightYellow text-lightYellow"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-burgundy hover:bg-lightYellow hover:text-black text-lightYellow font-bold py-2 px-4 rounded transition"
                >
                  🚀 Activate Free Trial
                </button>
              </form>
            </>
          ) : (
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-green-400">✅ Registration Successful!</h2>
              <p className="text-lightYellow/80">
                You’ve activated your free trial and earned your first <strong>$2</strong> by completing one task.
              </p>
              <a
                href="/task"
                className="inline-block mt-4 bg-green-500 hover:bg-green-300 text-black font-bold py-2 px-6 rounded transition"
              >
                🎬 Go to Today’s Task
              </a>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
