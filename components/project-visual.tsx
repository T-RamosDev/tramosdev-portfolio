export function ProjectVisual({ color }: { type: string; color: string }) {
  return (
    <div className="project-visual visual-dashboard" style={{ "--project-color": color } as React.CSSProperties}>
      <div className="visual-noise" />
      <div className="mock dashboard-mock">
        <div className="mock-sidebar" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="mock-content">
          <div className="mock-top"><span>BUILD / VERSION 01</span><b>•••</b></div>
          <strong>T—RAMOS DEV</strong>
          <div className="chart" aria-label="Representação visual da evolução do projeto">
            <svg viewBox="0 0 360 110" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 90 C35 82 36 38 75 58 S130 83 156 40 S210 73 240 42 S300 52 360 8" />
            </svg>
          </div>
          <div className="mock-metrics" aria-hidden="true"><i /><i /><i /></div>
        </div>
      </div>
    </div>
  );
}
