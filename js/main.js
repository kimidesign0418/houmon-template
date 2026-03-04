// site.config.js の情報を読み込む
const S = window.SITE || {};

// 文字を差し替える
document.querySelectorAll("[data-text]").forEach((el) => {
  const key = el.getAttribute("data-text");
  el.textContent = S[key] || "";
});

// 電話番号リンク
document.querySelectorAll("[data-tel]").forEach((el) => {
  const key = el.getAttribute("data-tel");
  const phone = S[key] || "";
  if(phone){
    el.href = "tel:" + phone.replace(/-/g,"");
  }
});

// URLリンク
document.querySelectorAll("[data-href]").forEach((el) => {
  const key = el.getAttribute("data-href");
  const url = S[key] || "";

  if(url){
    el.href = url;
  } else {
    el.style.display = "none";
  }
});

// 福利厚生リスト
const benefitList = document.querySelector("[data-list='recruitBenefits']");
if(benefitList && Array.isArray(S.recruitBenefits)){
  benefitList.innerHTML = S.recruitBenefits.map(item => `<li>${item}</li>`).join("");
}

// 募集要項
const jobWrap = document.querySelector("[data-jobs='jobs']");
if(jobWrap && Array.isArray(S.jobs)){
  jobWrap.innerHTML = S.jobs.map(job => `
    <div class="card">
      <h3>${job.title}</h3>
      <p>給与：${job.pay}</p>
      <p>勤務：${job.time}</p>
      <p>休日：${job.rest}</p>
    </div>
  `).join("");
}
