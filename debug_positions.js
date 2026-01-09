const text = `6227 0738 8046 9128 何平 建行福建省福州市宁化支行
200万rmb

150万
6221840504005315073 黄国水 
福建仙游农村商业银行云峰支行
电话：18059449821

150万
张炜：浦发银行长沙雨花支行6217932672085818 备注还款，
手机号码15995313315`;

const accRe = /(?:\d[\s\-]?){16,22}/g;
let a;
console.log('---Accounts---');
while ((a = accRe.exec(text)) !== null) {
  console.log(JSON.stringify(a[0].replace(/\n/g, ''), null, 0), 'pos', a.index);
}

const branchRe = /([^\n\d]{0,120}[\u4e00-\u9fff\s]{0,40}?(?:支行|分行))/gi;
let b;
console.log('---Branches---');
while ((b = branchRe.exec(text)) !== null) {
  console.log(JSON.stringify(b[0].replace(/\n/g, ''), null, 0), 'pos', b.index);
}

console.log('---Raw text---');
console.log(text);


