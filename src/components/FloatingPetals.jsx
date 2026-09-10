import React, { useMemo } from 'react';
import './FloatingPetals.css';

export default function FloatingPetals() {
    const PETAL_COUNT = 35; // Thodi aur badha di hai taaki poori screen par sundar lage

    const petals = useMemo(() => {
        return Array.from({ length: PETAL_COUNT }).map((_, i) => {
            const left = Math.random() * 100;
            const duration = (Math.random() * 5 + 4).toFixed(1);
            const delay = (Math.random() * 5).toFixed(1);
            const width = (Math.random() * 10 + 16).toFixed(1);
            const height = (Math.random() * 6 + 9).toFixed(1);
            const opacity = (Math.random() * 0.3 + 0.6).toFixed(2);
            const swayDistance = (Math.random() * 70 - 35).toFixed(0);

            return {
                id: i,
                style: {
                    left: `${left}%`,
                    width: `${width}px`,
                    height: `${height}px`,
                    opacity: opacity,
                    animationDuration: `${duration}s`,
                    animationDelay: `${delay}s`,
                    '--sway-distance': `${swayDistance}px`
                }
            };
        });
    }, []);

    return (
        <div className="petals-container">
            {petals.map((petal) => (
                <div
                    key={petal.id}
                    className={`petal rose-type-${petal.id % 4}`}
                    style={petal.style}
                />
            ))}
        </div>
    );
}