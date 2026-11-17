import { ImageResponse } from "next/og";

export const alt =
  "The Increase — A Quranic Study of Z-K-W, 56 verses, one meaning, zero contradictions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#080b0a",
          color: "#e9efec",
          padding: "72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: 999,
            background:
              "radial-gradient(circle, rgba(201,168,106,0.22) 0%, rgba(8,11,10,0) 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid #1f2a26",
            borderRadius: 28,
            padding: "54px 58px",
            background: "rgba(14,19,17,0.72)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 999,
                border: "1px solid #2c3a34",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 3,
                  height: 26,
                  background: "#c9a86a",
                  borderRadius: 2,
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 15,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#96a59f",
              }}
            >
              A Quranic word study
              <span style={{ color: "#6b7a74", marginTop: 6 }}>Z-K-W · 56 verses</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 86,
                lineHeight: 1,
                letterSpacing: -2,
                fontFamily: "Georgia, serif",
                display: "flex",
              }}
            >
              The <span style={{ color: "#c9a86a", marginLeft: 18 }}>Increase</span>
            </div>
            <div
              style={{
                marginTop: 26,
                fontSize: 26,
                lineHeight: 1.4,
                color: "#96a59f",
                maxWidth: 820,
                display: "flex",
              }}
            >
              Growth-through-purity: the release of a portion that cleanses what remains
              and causes it to increase.
            </div>
          </div>

          <div style={{ display: "flex", gap: 42, fontSize: 18, color: "#6b7a74" }}>
            <span>56 direct fits</span>
            <span>0 nuances</span>
            <span style={{ color: "#c9a86a" }}>0 contradictions</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
