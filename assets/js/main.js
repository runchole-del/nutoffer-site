/* 全站交互脚本：菜单、筛选、FAQ、数据渲染 */
(function () {
  'use strict';

  function initMenu() {
    var t = document.getElementById('menuToggle');
    var m = document.getElementById('menu');
    if (!t || !m) return;
    t.addEventListener('click', function () { m.classList.toggle('open'); });
    m.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { m.classList.remove('open'); });
    });
  }

  function initFilters() {
    var bars = document.querySelectorAll('[data-filter-group]');
    if (!bars.length) return;
    var state = {};

    function apply() {
      var cards = document.querySelectorAll('[data-filter-item]');
      cards.forEach(function (card) {
        var groups = (card.getAttribute('data-filter-item') || '').split(/\s+/);
        var values = (card.getAttribute('data-values') || '').split('|');
        var show = groups.every(function (g) {
          var v = state[g];
          return !v || v === 'all' || values.indexOf(v) !== -1;
        });
        card.classList.toggle('card-hidden', !show);
      });
      bars.forEach(function (bar) {
        var group = bar.getAttribute('data-filter-group');
        var hint = document.querySelector('[data-filter-hint="' + group + '"]');
        if (!hint) return;
        var visible = 0;
        document.querySelectorAll('[data-filter-item~="' + group + '"]').forEach(function (c) {
          if (!c.classList.contains('card-hidden')) visible++;
        });
        hint.textContent = '当前显示 ' + visible + ' 条内容';
      });
    }

    bars.forEach(function (bar) {
      var group = bar.getAttribute('data-filter-group');
      state[group] = 'all';
      var buttons = bar.querySelectorAll('.filter-btn');
      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          state[group] = btn.getAttribute('data-filter-value') || 'all';
          buttons.forEach(function (b) { b.classList.toggle('active', b === btn); });
          apply();
        });
      });
    });
    apply();
  }

  function initFaq() {
    document.querySelectorAll('.faq-q').forEach(function (q) {
      q.addEventListener('click', function () {
        var item = q.closest('.faq-item');
        if (item) item.classList.toggle('open');
      });
    });
  }

  function renderFromData() {
    var data = window.OP_DATA;
    if (!data) return;

    document.querySelectorAll('[data-render="team"]').forEach(function (el) {
      var list = el.getAttribute('data-limit') ? data.TEAM.slice(0, parseInt(el.getAttribute('data-limit'), 10)) : data.TEAM;
      el.innerHTML = data.teamCards(list);
    });

    document.querySelectorAll('[data-render="cases"]').forEach(function (el) {
      var list = data.CASES;
      if (el.getAttribute('data-limit')) list = list.slice(0, parseInt(el.getAttribute('data-limit'), 10));
      el.innerHTML = list.map(function (c) {
        return '' +
          '<article class="case-card" data-filter-item="cases degree" data-values="' + c.country + '|' + c.degree + '">' +
            '<img class="case-img" src="' + c.img + '" alt="' + c.title + '（示意图片）">' +
            '<div class="case-body">' +
              '<div class="case-tags"><span class="tag">' + c.country + '</span><span class="tag orange">' + c.degree + '</span></div>' +
              '<h3>' + c.title + '</h3><p>' + c.story + '</p>' +
              '<div class="case-offer">🎯 录取：' + c.offer + '</div>' +
            '</div>' +
          '</article>';
      }).join('');
    });

    document.querySelectorAll('[data-render="news"]').forEach(function (el) {
      var list = data.NEWS;
      if (el.getAttribute('data-limit')) list = list.slice(0, parseInt(el.getAttribute('data-limit'), 10));
      el.innerHTML = list.map(function (n) {
        return '' +
          '<article class="news-item" data-filter-item="news" data-values="' + n.cat + '">' +
            '<div class="news-date">' + n.date + '</div>' +
            '<div><h3><a href="news-detail.html?id=' + n.id + '">' + n.title + '</a></h3><p>' + n.excerpt + '</p></div>' +
            '<span class="news-cat">' + n.cat + '</span>' +
          '</article>';
      }).join('');
    });

    document.querySelectorAll('[data-render="jobs"]').forEach(function (el) {
      el.innerHTML = data.JOBS.map(function (j) {
        return '' +
          '<article class="job-card">' +
            '<div class="job-head"><h3>' + j.title + '</h3><div class="job-tags">' +
              j.tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('') +
            '</div></div>' +
            '<p><strong>工作地点：</strong>' + j.place + '</p>' +
            '<p><strong>岗位职责：</strong>' + j.desc + '</p>' +
            '<p><strong>任职要求：</strong>' + j.require + '</p>' +
            '<div class="job-apply">投递方式：发送简历至 hello@nutoffer.com（占位邮箱），或扫码添加微信咨询 → <a href="contact.html" style="color:var(--green)">联系我们</a></div>' +
          '</article>';
      }).join('');
    });
  }

  function renderSharedBits() {
    var site = window.OP_SITE;
    document.querySelectorAll('[data-qr]').forEach(function (el) {
      if (window.OP_QR_SVG) el.innerHTML = window.OP_QR_SVG();
    });
    if (!site) return;
    document.querySelectorAll('[data-site]').forEach(function (el) {
      var key = el.getAttribute('data-site');
      if (site[key]) el.textContent = site[key];
    });
  }

  function renderNewsDetail() {
    var box = document.querySelector('[data-news-detail]');
    if (!box || !window.OP_DATA) return;
    var id = new URLSearchParams(window.location.search).get('id');
    var article = window.OP_DATA.findNews(id) || window.OP_DATA.NEWS[0];
    document.title = article.title + ' — 坚果留学';
    var html = '<div class="article-meta"><span class="news-cat">' + article.cat + '</span>' + article.date + ' · 坚果留学</div><div class="article-body">';
    article.body.forEach(function (line) {
      if (line.indexOf('## ') === 0) html += '<h2>' + line.slice(3) + '</h2>';
      else if (line.indexOf('> ') === 0) html += '<blockquote>' + line.slice(2) + '</blockquote>';
      else html += '<p>' + line + '</p>';
    });
    html += '</div><a class="article-back" href="news.html">← 返回新闻列表</a>';
    box.innerHTML = '<h1 style="font-size:32px;color:var(--green);margin-bottom:18px">' + article.title + '</h1>' + html;
  }

  function renderStories() {
    var data = window.OP_DATA;
    if (!data || !data.STORIES) return;
    document.querySelectorAll('[data-render="stories"]').forEach(function (el) {
      var list = data.STORIES;
      if (el.getAttribute('data-limit')) list = list.slice(0, parseInt(el.getAttribute('data-limit'), 10));
      el.innerHTML = list.map(function (s) {
        return '' +
          '<article class="story-card">' +
            '<a class="story-cover" href="story.html?id=' + s.id + '"><img src="' + s.cover + '" alt="' + s.title + '"></a>' +
            '<div class="story-card-body">' +
              '<div class="story-tags">' + s.tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('') + '</div>' +
              '<h3><a href="story.html?id=' + s.id + '">' + s.title + '</a></h3>' +
              '<p class="story-excerpt">' + s.excerpt + '</p>' +
              '<div class="story-mini-bg"><strong>学生背景：</strong>' + s.bg + '　<strong>录取：</strong>' + s.offers[0] + '</div>' +
              '<a class="story-more" href="story.html?id=' + s.id + '">阅读全文 →</a>' +
            '</div>' +
          '</article>';
      }).join('');
    });
  }

  function renderHomeStories() {
    var data = window.OP_DATA;
    if (!data || !data.STORIES) return;
    document.querySelectorAll('[data-render="home-stories"]').forEach(function (el) {
      var list = data.STORIES;
      if (el.getAttribute('data-limit')) list = list.slice(0, parseInt(el.getAttribute('data-limit'), 10));
      el.innerHTML = list.map(function (s) {
        var tags = s.tags.slice(0, 2).map(function (t, i) {
          return '<span class="tag' + (i === 1 ? ' orange' : '') + '">' + t + '</span>';
        }).join('');
        return '' +
          '<article class="case-card story-home-card">' +
            '<a href="story.html?id=' + s.id + '"><img class="case-img" src="' + s.cover + '" alt="' + s.title + '"></a>' +
            '<div class="case-body">' +
              '<div class="case-tags">' + tags + '</div>' +
              '<h3><a href="story.html?id=' + s.id + '">' + s.title + '</a></h3>' +
              '<p>' + s.excerpt + '</p>' +
              '<div class="case-offer">🎯 录取：' + s.offers[0] + '</div>' +
            '</div>' +
          '</article>';
      }).join('');
    });
  }

  function renderStoryDetail() {
    var box = document.querySelector('[data-story-detail]');
    var data = window.OP_DATA;
    if (!box || !data || !data.STORIES) return;
    var id = new URLSearchParams(window.location.search).get('id');
    var story = data.findStory(id) || data.STORIES[0];
    document.title = story.title + ' — 坚果留学';

    var html = '' +
      '<div class="story-detail-head">' +
        '<div class="sec-kicker">Real Application Story</div>' +
        '<h1>' + story.title + '</h1>' +
        '<div class="story-source">来源：<a href="' + story.sourceUrl + '" target="_blank" rel="noopener">' + story.source + ' ↗</a></div>' +
        '<div class="story-tags">' + story.tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('') + '</div>' +
      '</div>' +
      '<div class="story-bg-card">' +
        '<div><h4>学生背景</h4><p>' + story.bg + '</p></div>' +
        '<div><h4>录取结果</h4><ul>' + story.offers.map(function (o) { return '<li>' + o + '</li>'; }).join('') + '</ul></div>' +
      '</div>' +
      '<div class="story-body">';

    story.blocks.forEach(function (b) {
      if (b.type === 'h2') html += '<h2>' + b.text + '</h2>';
      else if (b.type === 'h3') html += '<h3>' + b.text + '</h3>';
      else if (b.type === 'p') html += '<p>' + b.text + '</p>';
      else if (b.type === 'figure') {
        html += '<figure class="story-figure story-auto"><img src="' + b.src + '" alt="原文图片" loading="lazy"></figure>';
      } else if (b.type === 'emojis') {
        // 先按普通图片渲染，加载后自动隐藏纯装饰的小图（蝴蝶、闪片、栏目小图标等）
        b.images.forEach(function (src) {
          html += '<figure class="story-figure story-auto"><img src="' + src + '" alt="原文图片" loading="lazy"></figure>';
        });
      }
      // 'decor' 类型（栏目装饰图）按需求不展示
    });

    html += '</div>' +
      '<div class="story-end">' +
        '<p>—— 以上文字与图片整理自公众号原文，已保留原始内容；如涉及隐私或授权问题，请联系我们处理。</p>' +
        '<a class="btn" href="contact.html">聊聊你的申请故事 →</a>' +
        '<a class="article-back" href="stories.html" style="margin-left:18px">← 返回申请故事列表</a>' +
      '</div>';
    box.innerHTML = html;

    // 隐藏纯装饰小图：宽高都不超过 200px 的图片视为装饰，不展示
    box.querySelectorAll('.story-figure.story-auto img').forEach(function (img) {
      function hideIfTiny() {
        if (img.naturalWidth && img.naturalWidth <= 200 && img.naturalHeight <= 200) {
          var fig = img.closest('.story-figure');
          if (fig) fig.style.display = 'none';
        }
      }
      if (img.complete) hideIfTiny();
      else img.addEventListener('load', hideIfTiny, { once: true });
    });
  }

  function init() {
    initMenu();
    initFilters();
    initFaq();
    renderFromData();
    renderStories();
    renderHomeStories();
    renderSharedBits();
    renderNewsDetail();
    renderStoryDetail();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(init, 0); });
  } else {
    setTimeout(init, 0);
  }
})();
