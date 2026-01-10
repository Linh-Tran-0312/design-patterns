/**
 * INTERACTIVE ISLAND: Social Buttons Component
 * 
 * This component demonstrates:
 * - Pre-rendered HTML (visible immediately)
 * - Lazy hydration (only loads JS when visible)
 * - Independent state management
 */
import { useState } from 'preact/hooks';

interface ShareCounts {
  twitter: number;
  facebook: number;
  linkedin: number;
  email: number;
}

export default function SocialButtons() {
  const [shares, setShares] = useState<ShareCounts>({
    twitter: 42,
    facebook: 38,
    linkedin: 25,
    email: 12
  });

  const handleShare = (platform: keyof ShareCounts) => {
    setShares(prev => ({
      ...prev,
      [platform]: prev[platform] + 1
    }));

    console.log(`✅ Shared on ${platform}! New count: ${shares[platform] + 1}`);
    
    // In a real app, this would open share dialogs
    alert(`Thanks for sharing on ${platform}! 🎉`);
  };

  const buttons: Array<{ platform: keyof ShareCounts; icon: string; label: string; color: string }> = [
    { platform: 'twitter', icon: '🐦', label: 'Twitter', color: '#1DA1F2' },
    { platform: 'facebook', icon: '👍', label: 'Facebook', color: '#4267B2' },
    { platform: 'linkedin', icon: '💼', label: 'LinkedIn', color: '#0077B5' },
    { platform: 'email', icon: '✉️', label: 'Email', color: '#666' }
  ];

  return (
    <div className="social-buttons">
      <h4>Share This Article</h4>
      <div className="buttons-grid">
        {buttons.map(({ platform, icon, label, color }) => (
          <button
            key={platform}
            onClick={() => handleShare(platform)}
            className="social-btn"
            style={{ backgroundColor: color }}
          >
            <span className="social-icon">{icon}</span>
            <span className="social-label">{label}</span>
            <span className="social-count">{shares[platform]}</span>
          </button>
        ))}
      </div>
      <p className="social-note">
        🏝️ This island uses <code>client:visible</code> - JS loaded when scrolled into view!
      </p>
    </div>
  );
}

