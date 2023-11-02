$('.tit .btn').click(function (ev) {
  ev.preventDefault(ev);
  //$('.nav').toggle();
  //$('.nav').fadeToggle();
  $('.nav').slideToggle();
  $(this).toggleClass("on");
});

$('.ban').slick({
  infinite: true,
  slidesToShow: 3,
  /* 한 화면에 보이는 그림이 3개 */
  slidesToScroll: 1,
  /* 버튼을 누르면 넘어가는 그림이 1개 */
  dots: true,
  autoplay: true
});



/* 📍 포트폴리오 슬릭 */
$('.gallery_img').slick({
  arrows: false
});

$('.gallery_btn .play').click(function () {
  $('.gallery_img').slick('slickPlay');
});

$('.gallery_btn .pause').click(function () {
  $('.gallery_img').slick('slickPause');
});

$('.gallery_btn .prev').click(function () {
  $('.gallery_img').slick('slickPrev');
});

$('.gallery_btn .next').click(function () {
  $('.gallery_img').slick('slickNext');
});

/* 📍 lightGallery */
lightGallery(document.getElementById('lightgallery'), {
  plugins: [lgThumbnail],
});



//탭 메뉴
// .next() : 바로 밑 요소(바로 아래 동생)를 부름 내가 첫째면 둘째를 부름
// .parent() : 부모 요소
// .siblings() : 나를 제외한 형제들
//.find() 하위요소(내 안에 있는 요소들)
//변수를  만들때 사용할수 있는 특수문자 : $, _

/* 📍 탭 메뉴 */
let tab_list = $('.tab_menu');

tab_list.find('ul ul').hide();
/* 공지사항1,2,3 밑에 있는 공지사항입니다~~~ 6개 전부 해당 */
tab_list.find('li.active ul').show();
/* 3개의 li 중에 active가 붙은 건 첫번째 하나다 */

/* 공지사항1,2,3만! 안에 있는 건 아님 */
$('.tab_menu>ul>li>a').click(function (ev) {
  ev.preventDefault();
  let $this = $(this);
  //console.log($this)
  $this.next('ul').show();
  $this.parent('li').siblings('li').find('ul').hide();
  $this.parent('li').addClass('active');
  $this.parent('li').siblings('li').removeClass('active');
});


/* 📍 layer popup */
$('.layer').click(function (ev) {
  ev.preventDefault();
  /* 새로고침 방지 */
  /* $('#layer').show(); */
  $('#layer').fadeIn();
});

$('#layer .close').click(function (ev) {
  ev.preventDefault();
  /* 새로고침 방지 */
  /* $('#layer').show(); */
  $('#layer').fadeOut();
});


/* 📍 window 창 열기 */
window.open("https://www.w3schools.com");

$('.window').click(function (ev) {
  ev.preventDefault();
  window.open("popup.html", "popup", "top=500,left=500,width=900,height=590");
});

/* _blank : 새 창이 열린다 */