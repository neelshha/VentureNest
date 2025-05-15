export const formatCurrency = (amount: number): string => {
  // Convert to INR (assuming 1 USD = 83 INR)
  const inrAmount = amount * 83;
  
  // Format in Lakhs and Crores
  if (inrAmount >= 10000000) { // 1 Crore = 10 Million
    return `₹${(inrAmount / 10000000).toFixed(1)} Cr`;
  } else if (inrAmount >= 100000) { // 1 Lakh = 100 Thousand
    return `₹${(inrAmount / 100000).toFixed(1)} L`;
  } else {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    }).format(inrAmount);
  }
};

export const formatCompactCurrency = (amount: number): string => {
  // Convert to INR (assuming 1 USD = 83 INR)
  const inrAmount = amount * 83;
  
  // Format in Lakhs and Crores
  if (inrAmount >= 10000000) { // 1 Crore = 10 Million
    return `₹${(inrAmount / 10000000).toFixed(1)} Cr`;
  } else if (inrAmount >= 100000) { // 1 Lakh = 100 Thousand
    return `₹${(inrAmount / 100000).toFixed(1)} L`;
  } else {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(inrAmount);
  }
}; 