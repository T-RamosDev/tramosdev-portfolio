import { ImageResponse } from "next/og";

export const alt = "T-RAMOS DEV — Criar, Desenvolver, Evoluir";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 76px",
          color: "#FFFFFF",
          backgroundColor: "#09090B",
          backgroundImage:
            "linear-gradient(#27272A 1px, transparent 1px), linear-gradient(90deg, #27272A 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 88,
              height: 88,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #A855F7",
              borderRadius: 18,
              color: "#A855F7",
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: "-3px",
              background: "#111111",
            }}
          >
            TR
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14, fontSize: 34, fontWeight: 700 }}>
            T-RAMOS <span style={{ color: "#A855F7", fontSize: 18, letterSpacing: 5 }}>DEV</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#A1A1AA", fontSize: 23, letterSpacing: 2 }}>EVOLUÇÃO EM CÓDIGO</div>
          <div
            style={{
              maxWidth: 920,
              marginTop: 18,
              display: "flex",
              flexDirection: "column",
              fontSize: 70,
              lineHeight: 1.03,
              letterSpacing: "-4px",
              fontWeight: 700,
            }}
          >
            <span>Construindo projetos.</span>
            <span>Documentando evolução.</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#A1A1AA", fontSize: 20 }}>
          <span>Criar • Desenvolver • Evoluir</span>
          <span style={{ color: "#A855F7" }}>T-RAMOS DEV · 2026</span>
        </div>
      </div>
    ),
    size,
  );
}
