'use client'
import { useAccount } from 'wagmi'

export default function ClaimAlai() {
  const { address } = useAccount()
  return (
    <section style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <div style={{
        maxWidth: 400,
        margin: '0 auto',
        background: '#111',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid #00ffaa'
      }}>
        <h2 style={{ color: '#00ffaa' }}>Claim Dividends</h2>
        <p>{address ? "You're eligible to claim" : "Connect wallet to check claim status"}</p>
        <button style={{
          padding: '10px 20px',
          background: '#00ffaa',
          color: '#000',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '1rem'
        }}>Claim Now</button>
      </div>
    </section>
  )
}