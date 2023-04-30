import React from 'react'

export default function Details() {
  return (
    <div>
      <section class="bg-light py-5">
  <div class="container">
    <div class="row">
      <div class="col-md-6 d-flex align-items-center">
        <div class="text-center text-md-start">
          <h3>For More Information</h3>
          <p>Please leave your contact details, we'll get back to you.</p>
        </div>
      </div>
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <input type="text" class="form-control" id="name" placeholder="Your Name" required/>
          </div>
          <div class="mb-3">
            <input type="email" class="form-control" id="email" placeholder="Your Email" required/>
          </div>
          <div class="mb-3">
            <input type="tel" class="form-control" id="phone" placeholder="Your Phone" required/>
          </div>
          <div class="mb-3">
            <textarea class="form-control" id="message" rows="3" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
