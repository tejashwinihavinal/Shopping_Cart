export function getProductEmoji(name: string): string {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('mouse')) return '🖱️';
    if (lowerName.includes('keyboard')) return '⌨️';
    if (lowerName.includes('monitor')) return '🖥️';
    if (lowerName.includes('charger')) return '🔌';
    if (lowerName.includes('headphone')) return '🎧';
    return '📦';
  }
  
  export function formatPrice(price: number): string {
    return `₹${price.toLocaleString()}`;
  }
  