"use strict";

{
  //スクロールしたらヘッダーを変更
  window.addEventListener("scroll", headerScroll);
  function headerScroll() {
    const topHeader = document.querySelector(".js-topHeader");
    const scroll = window.pageYOffset;
    const point = 74; //どれだけスクロールしたらヘッダーを変更するのか

    if(scroll > point){
      if(topHeader != null){
        topHeader.classList.add("js-active");
        //window.removeEventListener("scroll", headerScroll);
      }
      
    }
    else if(scroll < 10){
      if(topHeader != null){
        topHeader.classList.remove("js-active");
      }
    }
  }

  //ハンバーガーメニュー
  const spBtn = document.querySelector(".bl-header_spBtn");
  const spMenu = document.querySelector(".bl-header_spMenu");
  const body = document.querySelector("body");

  spBtn.addEventListener("click", (e) => {
    e.preventDefault();
    spBtn.classList.toggle("js-active");
    spMenu.classList.toggle("js-active");
    body.classList.toggle("js-hidden");
  });

  //タブメニュー
  const tabBtns = document.querySelectorAll(".bl-menu li a");
  const tabs = document.querySelectorAll(".bl-miniCardUnit");

  tabBtns.forEach(element => {
    element.addEventListener("click", e => {
      e.preventDefault();

      tabBtns.forEach(element => {
        element.classList.remove("js-active");
      });
      element.classList.add("js-active");

      tabs.forEach(element => {
        element.classList.remove("js-active");
      });
      document.getElementById(element.dataset.id).classList.add("js-active");
    });
  });

  //モーダルウィンドウ
  const modalBtn = document.querySelector(".bl-header_btn");
  const modal = document.querySelector(".bl-modal");
  const closeBtn = document.querySelector(".bl-modal_closeBtn");
  //const body = document.querySelector("body");

  modalBtn.addEventListener("click", e => {
    e.preventDefault(); //aタグのリンク機能をなくす
    modal.classList.add("js-active");
    body.classList.add("js-hidden");
  });
  closeBtn.addEventListener("click", e => {
    e.preventDefault(); //aタグのリンク機能をなくす
    modal.classList.remove("js-active");
    body.classList.remove("js-hidden");
  });
}