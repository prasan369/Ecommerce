import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

const DailyDeals = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: 10, minutes: 45, seconds: 12 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (num) => num.toString().padStart(2, '0');

    return (
        <div className="daily-deals-module">
            <div className="deal-glow" />
            <div className="deal-header">
                <div className="deal-title">
                    <div className="deal-icon-wrap">
                        <Timer size={20} />
                    </div>
                    <div>
                        <h2>Flash Sale</h2>
                        <span className="deal-subtitle">Limited time offer</span>
                    </div>
                </div>
                <div className="countdown">
                    <div className="time-unit">
                        <div className="time-box">{formatTime(timeLeft.hours)}</div>
                        <span className="time-label">HRS</span>
                    </div>
                    <span className="colon">:</span>
                    <div className="time-unit">
                        <div className="time-box">{formatTime(timeLeft.minutes)}</div>
                        <span className="time-label">MIN</span>
                    </div>
                    <span className="colon">:</span>
                    <div className="time-unit">
                        <div className="time-box">{formatTime(timeLeft.seconds)}</div>
                        <span className="time-label">SEC</span>
                    </div>
                </div>
            </div>

            <div className="deal-content">
                <div className="deal-info">
                    <h3>Sony WH-1000XM5</h3>
                    <p className="desc">Industry-leading noise cancellation with exceptional comfort.</p>
                    <div className="price-box">
                        <span className="sale-price">$299.00</span>
                        <span className="original-price">$399.00</span>
                        <span className="discount-badge">-25%</span>
                    </div>
                    <div className="stock-bar">
                        <div className="stock-label">
                            <span>Available: 12</span>
                            <span>Sold: 45</span>
                        </div>
                        <div className="progress">
                            <div className="fill" style={{ width: '78%' }} />
                        </div>
                    </div>
                    <button className="deal-btn">
                        <span>Claim Deal</span>
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10h12m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
                <div className="deal-image-placeholder">
                    <div className="placeholder-box" />
                </div>
            </div>

            <style>{`
        .daily-deals-module {
            position: relative;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: 2rem;
            margin: 3rem 0;
            overflow: hidden;
        }
        .deal-glow {
            position: absolute;
            top: -100px;
            right: -100px;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(0, 229, 255, 0.06) 0%, transparent 70%);
            pointer-events: none;
        }
        .deal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--border);
            padding-bottom: 1.25rem;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
            gap: 1rem;
            position: relative;
        }
        .deal-title {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        .deal-icon-wrap {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(0, 229, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
        }
        .deal-title h2 {
            margin: 0;
            font-size: 1.25rem;
            font-weight: 700;
            letter-spacing: -0.01em;
        }
        .deal-subtitle {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.35);
            letter-spacing: 0.5px;
        }
        .countdown {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .time-unit {
            text-align: center;
        }
        .time-box {
            background: rgba(0, 229, 255, 0.1);
            color: var(--primary);
            padding: 0.4rem 0.6rem;
            border-radius: 6px;
            min-width: 40px;
            text-align: center;
            font-weight: 700;
            font-size: 1.1rem;
            font-variant-numeric: tabular-nums;
            border: 1px solid rgba(0, 229, 255, 0.15);
        }
        .time-label {
            font-size: 0.6rem;
            color: rgba(255, 255, 255, 0.3);
            letter-spacing: 1px;
            margin-top: 4px;
            display: block;
        }
        .colon {
            color: var(--primary);
            font-weight: 700;
            font-size: 1.2rem;
            margin-top: -16px;
        }
        .deal-content {
            display: flex;
            gap: 2rem;
            align-items: center;
            position: relative;
        }
        .deal-info {
            flex: 1;
        }
        .deal-info h3 {
            font-size: 1.75rem;
            font-weight: 800;
            margin: 0 0 0.5rem 0;
            letter-spacing: -0.02em;
        }
        .desc {
            color: rgba(255, 255, 255, 0.4);
            margin: 0 0 1.25rem 0;
            font-size: 0.9rem;
            line-height: 1.6;
        }
        .price-box {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1.5rem;
        }
        .original-price {
            text-decoration: line-through;
            color: rgba(255, 255, 255, 0.3);
            font-size: 0.9rem;
        }
        .sale-price {
            font-size: 1.75rem;
            font-weight: 800;
            color: var(--primary);
        }
        .discount-badge {
            background: rgba(0, 229, 255, 0.1);
            color: var(--primary);
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 700;
            border: 1px solid rgba(0, 229, 255, 0.15);
        }
        .stock-bar {
            margin-bottom: 1.5rem;
        }
        .stock-label {
            display: flex;
            justify-content: space-between;
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.35);
            margin-bottom: 0.4rem;
        }
        .stock-bar .progress {
            height: 4px;
            background: rgba(255, 255, 255, 0.06);
            border-radius: 2px;
            overflow: hidden;
        }
        .stock-bar .fill {
            height: 100%;
            background: linear-gradient(90deg, var(--primary), rgba(0, 229, 255, 0.6));
            border-radius: 2px;
            transition: width 0.5s ease;
        }
        .deal-btn {
            background: var(--primary);
            color: var(--background);
            border: none;
            padding: 0.85rem 2rem;
            font-size: 0.875rem;
            font-weight: 600;
            border-radius: var(--radius);
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
            letter-spacing: 0.3px;
        }
        .deal-btn:hover {
            box-shadow: 0 8px 24px rgba(0, 229, 255, 0.3);
            transform: translateY(-2px);
        }
        .deal-image-placeholder {
            flex: 1;
            display: none; 
        }
        @media (min-width: 768px) {
            .deal-image-placeholder {
                display: block;
            }
            .placeholder-box {
                width: 100%;
                height: 280px;
                background: linear-gradient(135deg, rgba(255,255,255,0.02), rgba(0, 229, 255, 0.03));
                border: 1px solid var(--border);
                border-radius: var(--radius);
            }
        }
      `}</style>
        </div>
    );
};

export default DailyDeals;
