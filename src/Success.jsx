import React from "react";

const SIZE_LABELS = {
  S: "Small",
  M: "Medium",
  L: "Large",
};

const SIZE_PRICES = {
  S: 80,
  M: 100,
  L: 120,
};

export default function Success({ order, onRestart }) {
  if (!order) {
    return (
      <div style={{ padding: 24 }}>
        <h2>Henüz sipariş yok</h2>
        <button onClick={onRestart}>Yeni Sipariş</button>
      </div>
    );
  }

  const toplam = SIZE_PRICES[order.boyut];

  return (
    <>
      <header style={{ background: "#CE2829", padding: 20, color: "#fff", textAlign: "center" }}>
        <h1>Teknolojik Yemekler</h1>
      </header>

      <main style={{ padding: 24, maxWidth: 800, margin: "0 auto" }}>
        <section style={{ background: "#fff", padding: 24, borderRadius: 8 }}>
          <h2>🍕 Sipariş Alındı</h2>

          <hr />

          <p><b>İsim:</b> {order.isim}</p>
          <p><b>Boyut:</b> {SIZE_LABELS[order.boyut]}</p>
          <p><b>Malzemeler:</b> {order.malzemeler.join(", ")}</p>
          <p><b>Not:</b> {order.not?.trim() || "-"}</p>

          <hr />

          <p style={{ fontSize: 18 }}>
            <b>Toplam:</b> {toplam} ₺
          </p>

          <hr />

          <h4>Sunucu Yanıtı (mock)</h4>
          <pre style={{ background: "#f5f5f5", padding: 12 }}>
            {JSON.stringify(order.apiResponse, null, 2)}
          </pre>

          <button
            onClick={onRestart}
            style={{
              marginTop: 16,
              padding: "12px 20px",
              background: "#FDC913",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            YENİ SİPARİŞ
          </button>
        </section>
      </main>
    </>
  );
}

