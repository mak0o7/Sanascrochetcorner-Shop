"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ACCOUNT_KEY = "tcc_account";

export default function AccountPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState(null);

  useEffect(() => {
    const raw = window.localStorage.getItem(ACCOUNT_KEY);
    if (raw) {
      setSession(JSON.parse(raw));
    }
  }, []);

  const onLogin = (event) => {
    event.preventDefault();
    const next = { email };
    window.localStorage.setItem(ACCOUNT_KEY, JSON.stringify(next));
    setSession(next);
    setPassword("");
  };

  const onLogout = () => {
    window.localStorage.removeItem(ACCOUNT_KEY);
    setSession(null);
    setEmail("");
  };

  return (
    <div className="page-wrap">
      <Navbar />
      <main>
        <section className="cta-section" id="account">
          <div className="cta-left">
            <h2>Account</h2>
            {session ? (
              <>
                <p>Signed in as {session.email}</p>
                <div className="cta-actions">
                  <Link className="pill" href="/shop">Go to shop</Link>
                  <Link className="pill" href="/cart">View cart</Link>
                  <button className="pill pill-dark" type="button" onClick={onLogout}>
                    Log out
                  </button>
                </div>
              </>
            ) : (
              <>
                <p>Sign in to save your details for faster ordering.</p>
                <form onSubmit={onLogin} className="social-quotes" style={{ gap: "10px" }}>
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="pill"
                    style={{ width: "100%", textAlign: "left" }}
                  />
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="pill"
                    style={{ width: "100%", textAlign: "left" }}
                  />
                  <button className="pill pill-dark" type="submit">Log in</button>
                </form>
              </>
            )}
          </div>

          <aside className="packaging-card">
            <h3>Need help?</h3>
            <p>For order updates, custom requests, and support, message us directly on Instagram.</p>
            <div className="cta-actions" style={{ marginTop: "12px" }}>
              <a className="pill" href="https://www.instagram.com/thecrochet_.corner/" target="_blank" rel="noreferrer">
                DM on Instagram
              </a>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
