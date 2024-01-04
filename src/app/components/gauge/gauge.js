import styles from "./gauge.module.css";

export default function Gauge({ value }) {
  const safeValue = value < 0 || value > 100 ? 50 : value;

  return (
    <div className={styles.wrapper}>
      <svg viewBox="0 0 120 120" className={styles.gauge}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#18B6F6" />
            <stop offset="100%" stopColor="#AC7FF4" />
          </linearGradient>
        </defs>

        <circle
          r="56"
          cx="60"
          cy="60"
          strokeWidth="8"
          style={{ fill: '#000', stroke: '#0000' }}
        ></circle>

        <circle
          r="56"
          cx="60"
          cy="60"
          strokeWidth="8"
          style={{
            transform: `rotate(-87.9537deg)`,
            strokeDasharray: `${safeValue * 3.51}, 351.858`,
            fill: 'none',
            transformOrigin: '50% 50%',
            strokeLinecap: 'round',
            stroke: 'url(#gradient)',
          }}
        ></circle>
      </svg>
      <span className={styles.value}>{safeValue}</span>
    </div>
  );
};