import React from 'react';

const NumberToWords = ({ value }) => {
  // Function to convert a number to words
  const numberToWords = (num) => {
    const ones = [
      '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
      'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen',
      'Eighteen', 'Nineteen'
    ];
    const tens = [
      '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
    ];
    const thousands = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];

    if (num === 0) return 'Zero';
    
    let word = '';
    let i = 0;

    while (num > 0) {
      if (num % 1000 !== 0) {
        word = `${convertChunk(num % 1000)} ${thousands[i]} ${word}`;
      }
      num = Math.floor(num / 1000);
      i++;
    }

    return word.trim();

    function convertChunk(num) {
      if (num === 0) return '';
      if (num < 20) return ones[num];
      if (num < 100) return `${tens[Math.floor(num / 10)]} ${ones[num % 10]}`.trim();
      return `${ones[Math.floor(num / 100)]} Hundred ${convertChunk(num % 100)}`.trim();
    }
  };

  // Handling if the value is null or undefined
  const totalAmount = value || 0;

  return (
   <>
   Rs. {numberToWords(totalAmount)} Only.
   </>
  );
};

export default NumberToWords;
