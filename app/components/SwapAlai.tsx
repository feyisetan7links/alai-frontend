'use client'
import { useState } from 'react'

export default function SwapAlai() {
  const [amount, setAmount] = useState('')
  return (
    <section style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <div style={{
        maxWidth: 400,
        margin: '0 auto',
        background: '#111',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid #ffaa00'
      }}>
        <h2 style={{ color: '#ffaa00' }}>Swap ALAI</h2>
        <input
          type="number"
          placeholder="Enter Old ALAI"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '1rem' }}
        />
        <p style={{ fontSize: '0.9rem', color: '#bbb' }}>1:1 Swap Rate • 0.15 BNB Fee</p>
        <button style={{
          padding: '10px 20px',
          background: '#ffaa00',
          color: '#000',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>Swap Now</button>
      </div>
    </section>
  )
}