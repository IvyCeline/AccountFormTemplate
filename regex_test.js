const s = '农村商业银行 福建仙游农村商业银行云峰支行';
const bankToken = '农村商业银行';
const re = new RegExp('[\\u4e00-\\u9fff]{0,40}' + bankToken + '[\\u4e00-\\u9fff\\s]{0,40}?支行', 'i');
console.log('string:', s);
const m = s.match(re);
console.log('match:', m ? m[0] : null);
if (m) {
  const whole = m[0].trim();
  const idx = whole.indexOf(bankToken);
  console.log('whole:', whole, 'idx:', idx);
  const prefix = whole.slice(0, idx + bankToken.length).trim();
  const suffixMatch = whole.slice(idx + bankToken.length).match(/[\u4e00-\u9fff\s]*?(支行|分行)/i);
  const suffix = suffixMatch && suffixMatch[0] ? suffixMatch[0].trim() : '';
  console.log('prefix:', prefix);
  console.log('suffix:', suffix);
}


