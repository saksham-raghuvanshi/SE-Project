import React from 'react'
import cover_image from '../cover_image.jpg'
import photo_2 from '../photo_2.webp'
import photo_5 from '../photo_5.webp'


export default function header() {
  return (
    <div>
     <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class=" carousel-inner ">
    <div class="carousel-item active">
      <img src={cover_image} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={photo_2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={photo_5} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
