'use client'
import { useState } from 'react'

export default function BuyAlai() {
  const [amount, setAmount] = useState('')
  return (
    <section style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <div style={{
        maxWidth: 400,
        margin: '0 auto',
        background: '#111',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid #ff2d55'
      }}>
        <h2 style={{ color: '#ff2d55' }}>Buy ALAI</h2>
        <input
          type="number"
          placeholder="Enter BNB"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '1rem' }}
        />
        <button style={{
          padding: '10px 20px',
          background: '#ff2d55',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>Buy ALAI Now</button>
      </div>
    </section>
  )
}