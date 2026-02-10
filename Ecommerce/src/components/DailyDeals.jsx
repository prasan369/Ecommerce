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
                return prev; // Timer done
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (num) => num.toString().padStart(2, '0');

    return (
        <div className="daily-deals-module">
            <div className="deal-header">
                <div className="deal-title">
                    <Timer className="icon" />
                    <h2>Daily Flash Sale</h2>
                </div>
                <div className="countdown">
                    <span>Ends in:</span>
                    <div className="time-box">{formatTime(timeLeft.hours)}</div>
                    <span className="colon">:</span>
                    <div className="time-box">{formatTime(timeLeft.minutes)}</div>
                    <span className="colon">:</span>
                    <div className="time-box">{formatTime(timeLeft.seconds)}</div>
                </div>
            </div>

            <div className="deal-content">
                <div className="deal-info">
                    <h3>Sony WH-1000XM5</h3>
                    <p className="desc">Industry-leading noise cancellation.</p>
                    <div className="price-box">
                        <span className="original-price">$399.00</span>
                        <span className="sale-price">$299.00</span>
                        <span className="discount-badge">-25%</span>
                    </div>
                    <div className="stock-bar">
                        <div className="label">
                            <span>Available: 12</span>
                            <span>Sold: 45</span>
                        </div>
                        <div className="progress">
                            <div className="fill" style={{ width: '78%' }}></div>
                        </div>
                    </div>
                    <button className="deal-btn">Claim Deal</button>
                </div>
                <div className="deal-image-placeholder">
                    {/* Placeholder for deal image */}
                    <div className="placeholder-box"></div>
                </div>
            </div>

            <style>{`
        .daily-deals-module {
            background-color: #111;
            border: 1px solid #333;
            border-radius: var(--radius);
            padding: 1.5rem;
            margin: 2rem 0;
            color: var(--text-main);
        }
        .deal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #222;
            padding-bottom: 1rem;
            margin-bottom: 1rem;
            flex-wrap: wrap;
            gap: 1rem;
        }
        .deal-title {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .deal-title .icon {
            color: var(--primary);
        }
        .deal-title h2 {
            margin: 0;
            font-size: 1.5rem;
        }
        .countdown {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 600;
        }
        .time-box {
            background-color: var(--primary);
            color: #fff;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            min-width: 32px;
            text-align: center;
        }
        .deal-content {
            display: flex;
            gap: 2rem;
            align-items: center;
        }
        .deal-info {
            flex: 1;
        }
        .deal-info h3 {
            font-size: 1.8rem;
            margin: 0 0 0.5rem 0;
        }
        .desc {
            color: var(--text-muted);
            margin-bottom: 1rem;
        }
        .price-box {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        .original-price {
            text-decoration: line-through;
            color: var(--text-muted);
        }
        .sale-price {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary);
        }
        .discount-badge {
            background-color: var(--alert);
            color: #fff;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: 700;
        }
        .stock-bar {
            margin-bottom: 1.5rem;
        }
        .stock-bar .label {
            display: flex;
            justify-content: space-between;
            font-size: 0.85rem;
            color: var(--text-muted);
            margin-bottom: 0.25rem;
        }
        .stock-bar .progress {
            height: 8px;
            background-color: #222;
            border-radius: 4px;
            overflow: hidden;
        }
        .stock-bar .fill {
            height: 100%;
            background-color: var(--primary);
        }
        .deal-btn {
            background-color: var(--primary);
            color: #fff;
            border: none;
            padding: 0.75rem 2rem;
            font-size: 1rem;
            font-weight: 600;
            border-radius: var(--radius);
            width: 100%;
        }
        .deal-btn:hover {
            background-color: var(--primary-hover);
        }
        .deal-image-placeholder {
            flex: 1;
            /* In a real app, this would be an image */
            display: none; 
        }
        @media (min-width: 768px) {
            .deal-image-placeholder {
                display: block;
            }
            .placeholder-box {
                width: 100%;
                height: 250px;
                background: linear-gradient(45deg, #222, #333);
                border-radius: var(--radius);
            }
        }
      `}</style>
        </div>
    );
};

export default DailyDeals;
