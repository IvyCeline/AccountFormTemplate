const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
const win = dom.window;

async function waitForFn(fn, timeout = 3000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (fn()) return true;
    await new Promise(r => setTimeout(r, 50));
  }
  return false;
}

(async () => {
  const ok = await waitForFn(() => typeof win.findAmbiguities === 'function');
  if (!ok) {
    console.error('findAmbiguities not available');
    process.exit(2);
  }
  const sample = `6227 0738 8046 9128 何平 建行福建省福州市宁化支行
200万rmb

150万
6221840504005315073 黄国水 
福建仙游农村商业银行云峰支行
电话：18059449821

150万
张炜：浦发银行长沙雨花支行6217932672085818 备注还款，
手机号码15995313315`;

const records = win.parseInputToRecords(sample);
console.log('records:', JSON.stringify(records, null, 2));
const amb = win.findAmbiguities(records);
console.log('ambigs:');
for (const a of amb) {
  console.log('index', a.index);
  for (const s of a.suggestions) {
    console.log(' -', s.label, '->', s.bank);
  }
}
})();


