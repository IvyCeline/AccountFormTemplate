const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const htmlPath = path.resolve(__dirname, 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
const win = dom.window;

// Sample input from user
const sample = `6227 0738 8046 9128 何平 建行福建省福州市宁化支行
200万rmb

150万
6221840504005315073 黄国水 
福建仙游农村商业银行云峰支行
电话：18059449821

150万
张炜：浦发银行长沙雨花支行6217932672085818 备注还款，
手机号码15995313315`;

function waitFor(fn, timeout = 2000) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    (function poll() {
      try {
        const result = fn();
        if (result) return resolve(result);
      } catch (e) {}
      if (Date.now() - start > timeout) return resolve(null);
      setTimeout(poll, 50);
    })();
  });
}

(async () => {
  // Wait until parseInputToRecords is available
  const available = await waitFor(() => typeof win.parseInputToRecords === 'function', 3000);
  if (!available) {
    console.error('parseInputToRecords not found in DOM scripts.');
    process.exit(2);
  }

  try {
    const records = win.parseInputToRecords(sample);
    console.log(JSON.stringify(records, null, 2));
  } catch (err) {
    console.error('Error running parser:', err);
    process.exit(1);
  }
})();


