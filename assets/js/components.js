/* 公共组件：导航、页脚、站点联系信息
   通过占位 div 注入，避免每个页面重复维护一份导航和页脚。 */
(function () {
  'use strict';

  var SITE = {
    name: '坚果留学',
    phone: '029-XXXX XXXX',
    teacherPhone: 'Chloe 王老师 1XX-XXXX-XXXX',
    email: 'hello@nutoffer.com',
    address: '陕西省西安市雁塔区 momopark 写字楼 8 楼 806',
    wechatTitle: '扫码添加微信',
    wechatTip: '一对一免费咨询 · 这里替换为你的真实二维码'
  };

  var NAV = [
    { text: '首页', href: 'index.html' },
    { text: '关于我们', href: 'about.html' },
    { text: '产品服务', href: 'services.html' },
    { text: '成功案例', href: 'cases.html' },
    { text: '申请故事', href: 'stories.html' },
    { text: '新闻资讯', href: 'news.html' },
    { text: '联系我们', href: 'contact.html' },
    { text: '加入我们', href: 'join.html' }
  ];

  function logoHtml() {
    return '<a href="index.html" class="logo"><span class="logo-mark"><span>🌰</span></span>' + SITE.name + '</a>';
  }

  function headerHtml() {
    var links = NAV.map(function (item) {
      return '<a href="' + item.href + '">' + item.text + '</a>';
    }).join('');
    return '' +
      '<nav class="nav">' +
        '<div class="wrap nav-inner">' +
          logoHtml() +
          '<div class="menu" id="menu">' + links + '</div>' +
          '<a href="contact.html" class="btn">免费咨询</a>' +
          '<button class="menu-toggle" id="menuToggle" aria-label="菜单">☰</button>' +
        '</div>' +
      '</nav>';
  }

  function qrSvg() {
    return '' +
      '<svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-label="微信二维码占位图">' +
        '<rect width="100" height="100" fill="#fff"/>' +
        '<g fill="#2E2910">' +
          '<rect x="6" y="6" width="26" height="26"/><rect x="10" y="10" width="18" height="18" fill="#fff"/><rect x="14" y="14" width="10" height="10"/>' +
          '<rect x="68" y="6" width="26" height="26"/><rect x="72" y="10" width="18" height="18" fill="#fff"/><rect x="76" y="14" width="10" height="10"/>' +
          '<rect x="6" y="68" width="26" height="26"/><rect x="10" y="72" width="18" height="18" fill="#fff"/><rect x="14" y="76" width="10" height="10"/>' +
          '<rect x="40" y="8" width="4" height="4"/><rect x="48" y="8" width="4" height="4"/><rect x="56" y="12" width="4" height="4"/>' +
          '<rect x="40" y="18" width="4" height="4"/><rect x="52" y="20" width="8" height="4"/><rect x="40" y="28" width="6" height="4"/><rect x="50" y="28" width="4" height="4"/><rect x="60" y="26" width="4" height="6"/>' +
          '<rect x="8" y="42" width="4" height="4"/><rect x="16" y="46" width="4" height="4"/><rect x="24" y="42" width="8" height="4"/><rect x="36" y="44" width="4" height="4"/><rect x="44" y="42" width="6" height="4"/><rect x="56" y="48" width="4" height="4"/><rect x="66" y="42" width="4" height="4"/><rect x="74" y="46" width="8" height="4"/><rect x="88" y="42" width="4" height="4"/>' +
          '<rect x="10" y="54" width="6" height="4"/><rect x="22" y="58" width="4" height="4"/><rect x="32" y="54" width="8" height="4"/><rect x="46" y="58" width="4" height="4"/><rect x="54" y="54" width="6" height="4"/><rect x="66" y="56" width="4" height="4"/><rect x="76" y="54" width="4" height="4"/><rect x="86" y="58" width="6" height="4"/>' +
          '<rect x="8" y="66" width="4" height="4"/><rect x="18" y="62" width="4" height="4"/><rect x="28" y="66" width="6" height="4"/><rect x="40" y="64" width="4" height="6"/>' +
          '<rect x="40" y="76" width="4" height="4"/><rect x="50" y="80" width="8" height="4"/><rect x="62" y="76" width="4" height="4"/><rect x="72" y="82" width="4" height="4"/><rect x="82" y="76" width="6" height="4"/>' +
          '<rect x="42" y="90" width="6" height="4"/><rect x="54" y="88" width="4" height="4"/><rect x="64" y="92" width="8" height="4"/><rect x="80" y="90" width="4" height="4"/><rect x="90" y="86" width="4" height="8"/>' +
        '</g>' +
      '</svg>';
  }

  function footerHtml() {
    var year = new Date().getFullYear();
    return '' +
      '<footer class="footer">' +
        '<div class="wrap">' +
          '<div class="footer-grid">' +
            '<div class="footer-brand">' + logoHtml() +
              '<p class="footer-slogan">精研每一颗坚果，助力破壳而出，绽放世界舞台。</p>' +
              '<p style="margin-top:10px">地址：' + SITE.address + '</p>' +
            '</div>' +
            '<div><h5>快速导航</h5><ul>' +
              '<li><a href="index.html">首页</a></li><li><a href="about.html">关于我们</a></li>' +
              '<li><a href="services.html">产品服务</a></li><li><a href="cases.html">成功案例</a></li>' +
              '<li><a href="stories.html">申请故事</a></li>' +
            '</ul></div>' +
            '<div><h5>更多</h5><ul>' +
              '<li><a href="news.html">新闻资讯</a></li><li><a href="contact.html">联系我们</a></li>' +
              '<li><a href="join.html">加入我们</a></li>' +
            '</ul></div>' +
            '<div><h5>联系我们</h5><ul>' +
              '<li><a href="tel:">电话：' + SITE.phone + '</a></li>' +
              '<li><a href="contact.html">微信：扫码咨询</a></li>' +
              '<li><a href="mailto:' + SITE.email + '">邮箱：' + SITE.email + '</a></li>' +
            '</ul></div>' +
          '</div>' +
          '<div class="footer-bottom">© ' + year + ' 坚果留学 Nut Offer · 保留所有权利</div>' +
        '</div>' +
      '</footer>';
  }

  function floatCtaHtml() {
    return '<a href="contact.html" class="float-cta">💬 免费咨询</a>';
  }

  function inject() {
    var header = document.getElementById('site-header');
    var footer = document.getElementById('site-footer');
    if (header) header.innerHTML = headerHtml();
    if (footer) footer.innerHTML = footerHtml() + floatCtaHtml();
    markActive();
  }

  function markActive() {
    var file = (window.location.pathname.split('/').pop() || 'index.html') || 'index.html';
    if (!file) file = 'index.html';
    var aliases = { 'news-detail.html': 'news.html', 'story.html': 'stories.html' };
    file = aliases[file] || file;
    var links = document.querySelectorAll('.menu a');
    links.forEach(function (a) {
      var href = a.getAttribute('href') || '';
      if (href === file) a.classList.add('active');
    });
  }

  // 暴露给页面脚本使用（联系方式集中维护）
  window.OP_SITE = SITE;
  window.OP_QR_SVG = qrSvg;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
