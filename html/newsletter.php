<section class="newsletter bg-light" style="background: url(images/pattern-bg.png) no-repeat;">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 py-5 my-5">
        <div class="subscribe-header text-center pb-3">
          <h3 class="section-title text-uppercase">Sign Up for our newsletter</h3>
        </div>
        <form id="subscribeForm"
              method="post"
              class="d-flex flex-wrap gap-2">
          <label for="iptAddress"></label>
          <input type="text"
                 id="iptAddress"
                 name="iptAddress"
                 placeholder="Your Email Address"
                 class="form-control form-control-lg">
          <input type="hidden"
                 id="selAddressType"
                 name="selAddressType"
                 value="e">
          <button class="btn btn-dark btn-lg text-uppercase w-100" id="btnSubmitSubscribe">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</section>
