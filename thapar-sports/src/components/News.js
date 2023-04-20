import React from 'react'

export default function News() {
  return (
    <div class="container-fluid mt-1" id="News">
    <div class="row">
        <div class="col-md-12">
            <div class="d-flex justify-content-between align-items-center breaking-news bg-white">
                <div class="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news"><span class="d-flex align-items-center">&nbsp;Thapar Sports News</span></div>
                <marquee class="news-scroll" behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();"> <a href="#">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </a> <span class="dot"></span> <a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </a> <span class="dot"></span> <a href="#">Duis aute irure dolor in reprehenderit in voluptate velit esse </a>
                </marquee>
            </div>
        </div>
    </div>
</div>
  )
}
