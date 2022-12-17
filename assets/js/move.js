window.addEventListener('scroll', function () {

  var scroll = window.scrollY; //スクロール量を取得
  var windowHeight = window.innerHeight; //画面の高さを取得


  // --- 背景色の自動変化 ---
  var main_about = document.querySelector('#about').getBoundingClientRect().top + scroll; //aboutの位置を取得
  var main_skill = document.querySelector('#skill').getBoundingClientRect().top + scroll; //skillの位置を取得
  var main_works = document.querySelector('#works').getBoundingClientRect().top + scroll; //worksの位置を取得
  var main_contact = document.querySelector('#contact').getBoundingClientRect().top + scroll; //contactの位置を取得

  if (scroll > main_contact - windowHeight / 2) {
    document.body.style.backgroundColor = '#ffffff'; //contactの背景色は#ffffff 白
  }
  else if (scroll > main_works - windowHeight / 1.5) {
    document.body.style.backgroundColor = '#8be871'; //worksの背景色は#8be871 緑
  }
  else if (scroll > main_skill - windowHeight / 1.5) {
    document.body.style.backgroundColor = '#ffc247'; //skillの背景色は#ffc247 オレンジ
  }
  else if (scroll > main_about - windowHeight/1.4) {
    document.body.style.backgroundColor = '#b6e6e4'; //aboutの背景色は#b6e6e4 水色
  }
  else {
    document.body.style.backgroundColor = '#8bb5b3'; //topの背景色は#8bb5b3 暗い水色
  }


  // --- グラフのアニメーション ---
  var target = document.querySelector('.bar-graph-wrap'); //ターゲット要素（グラフ）

  if (scroll >= main_skill - 1) { //スクロール量がmain-skil以上になるとターゲット要素（グラフ）にクラスを追加
    target.classList.add('is-animated'); 
  }
  else {
    target.classList.remove('is-animated'); //ifの条件がfalseの時はクラスを外す
  }
  
  
  // --- 文字「Please scroll」の点滅 ---
  var target = document.querySelector('.scroll-text'); //ターゲット要素（テキスト「▼ Please scroll」）

  if (scroll <= main_skill - 1) { 
    target.classList.add('is-animated'); //グラフが表示されるまで文字を点滅させる
  }
  else { 
    target.classList.remove('is-animated'); //グラフが表示される位置から文字は消える
  }


  // --- worksの製作物ズーム ---
  var parent = document.querySelectorAll('#items'); //ターゲットの親要素
  var productionItems = document.querySelector('.production-item').getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得

  if (scroll > productionItems - windowHeight) { //li要素「.production-item」が見えるまでスクロールすると以下の処理
    parent.forEach((parentItems) => { //親要素から子要素を1つずつ取り出して処理する
      var childs = parentItems.querySelectorAll('.production-item'); //
      childs.forEach((target, index) => {
        var order = index + 1;
        var delay = order * 200; //遅延速度、単位はms
        setTimeout(() => {
          target.classList.add('is-animated'); //classを付けてアニメーション動作
        }, delay);
      });
    });
  }
  else {
    parent.forEach((parentItems) => {
      var childs = parentItems.querySelectorAll('.production-item');
      childs.forEach((target, index) => {
        setTimeout(() => {
          target.classList.remove('is-animated'); //付け加えたclassを削除
        });
      });
    });
  }

});