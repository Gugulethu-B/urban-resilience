import React, { useState } from 'react';

function FloodAlertSubscribe() {
    const [phone, setPhone] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone }),
        });
        if (res.ok) {
            setShowSuccess(true);
            setPhone('');
            setTimeout(() => setShowSuccess(false), 3000);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                />
                <button type="submit">Subscribe for SMS Alerts</button>
            </form>
            {showSuccess && <div className="popup">Successfully subscribed!</div>}
        </div>
    );
}

export default FloodAlertSubscribe;
