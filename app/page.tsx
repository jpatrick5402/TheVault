"use client";

import { useState } from "react";

const platforms = [
  "Netflix",
  "Max",
  "Hulu",
  "Disney+",
  "Prime Video",
  "Apple TV+",
  "Spotify",
  "Apple Music",
  "Steam",
  "Xbox",
  "PlayStation",
  "YouTube",
];

const categories = [
  {
    title: "Shows",
    blurb: "The next series you'll actually finish, not the one you abandon after episode two.",
  },
  {
    title: "Movies",
    blurb: "From Friday-night blockbusters to the hidden gem nobody in the group has seen yet.",
  },
  {
    title: "Music",
    blurb: "New artists and albums matched to your taste, plus the songs your friends can't stop playing.",
  },
  {
    title: "Games",
    blurb: "Your next obsession, whether you have twenty minutes or an entire weekend.",
  },
];

const steps = [
  {
    n: "01",
    title: "Tell The Vault what you love",
    blurb:
      "Rate a few favorites and The Vault learns your taste — across every platform, not just one.",
  },
  {
    n: "02",
    title: "Bring your friends",
    blurb:
      "Add your group and The Vault finds the overlap: the picks everyone in the room will enjoy.",
  },
  {
    n: "03",
    title: "Get picks, not homework",
    blurb:
      "One short list of things worth your time tonight. No endless scrolling, no decision fatigue.",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  function joinWaitlist(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim().includes("@")) setJoined(true);
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-xl font-bold tracking-tight">
          The Vault<span className="text-amber-400">.</span>
        </span>
        <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-300">
          Coming soon
        </span>
      </header>

      {/* Hero */}
      <main className="mx-auto w-full max-w-6xl px-6">
        <section className="py-16 text-center sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            A recommendation engine for everything you love
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Stop scrolling.
            <br />
            Start watching.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            The Vault is the first platform-agnostic recommendation engine for
            shows, movies, music, and games. Tell it what you love, bring
            your friends, and get picks the whole group will actually enjoy —
            no matter which app they&apos;re on.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#waitlist"
              className="rounded-full bg-amber-400 px-7 py-3 font-semibold text-zinc-950 transition hover:bg-amber-300"
            >
              Join the waitlist
            </a>
            <a
              href="#how"
              className="rounded-full border border-zinc-700 px-7 py-3 font-semibold text-zinc-200 transition hover:border-zinc-500"
            >
              How it works
            </a>
          </div>

          <div className="mt-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Works across your platforms
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {platforms.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-300"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            One vault, everything you love
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6"
              >
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {c.blurb}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="py-16">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            How it works
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6"
              >
                <span className="text-sm font-bold tracking-widest text-amber-400">
                  {s.n}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {s.blurb}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Friend groups */}
        <section className="py-16 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Movie night, minus the 45-minute scroll
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Picking something everyone likes shouldn&apos;t be the hardest part
            of the night. The Vault matches your friend group&apos;s combined
            taste, so the group agrees before the popcorn&apos;s ready.
          </p>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="pb-24 pt-8">
          <div className="mx-auto max-w-xl rounded-3xl border border-amber-400/30 bg-amber-400/5 px-6 py-12 text-center sm:px-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Be first in when the doors open
            </h2>
            <p className="mt-3 text-zinc-400">
              Join the waitlist and we&apos;ll let you know the moment The
              Vault is ready.
            </p>
            {joined ? (
              <p className="mt-8 rounded-full bg-amber-400 px-6 py-3 font-semibold text-zinc-950">
                You&apos;re on the list — see you inside.
              </p>
            ) : (
              <form
                onSubmit={joinWaitlist}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full flex-1 rounded-full border border-zinc-700 bg-zinc-950 px-5 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-amber-400 px-7 py-3 font-semibold text-zinc-950 transition hover:bg-amber-300"
                >
                  Notify me
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900 py-8 text-center text-sm text-zinc-500">
        The Vault — coming soon.
      </footer>
    </div>
  );
}
