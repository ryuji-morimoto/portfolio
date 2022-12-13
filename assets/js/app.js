let targetGraph = document.querySelectorAll('.bar-graph-wrap'); //ターゲット要素
let targetScrollText = document.querySelectorAll('.scroll-text');

window.addEventListener('scroll', function () {
  var scroll = window.scrollY; //スクロール量を取得
  var windowHeight = window.innerHeight; //画面の高さを取得

  //グラフのアニメーション用
  for (let target of targetGraph) { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
    var targetPosG = target.getBoundingClientRect().top + scroll; //ターゲット要素（グラフ）の位置を取得
    if (scroll > targetPosG - 210) { //スクロール量 > ターゲット要素の位置
      target.classList.add('is-animated'); //is-animatedクラスを加える
    }
  }
  
  //「Please scroll」の点滅用
  for (let target of targetScrollText) {
    var targetPosT = target.getBoundingClientRect().top + scroll; //ターゲット要素（テキスト）の位置を取得
    if (scroll > targetPosG - 210) { //グラフが表示される位置から文字は消える
      target.classList.remove('is-animated');
    }
    else if (scroll > targetPosT - scroll) { 
      target.classList.add('is-animated'); 
    }
  }
});