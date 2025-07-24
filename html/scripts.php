<script>
  const msaConfig = {
    siteName: <?= json_encode(defined('SITE_NAME') ? SITE_NAME : '') ?>,
    supportEmail: <?= json_encode(defined('SUPPORT_EMAIL') ? SUPPORT_EMAIL : '') ?>,
    apiUrl: <?= json_encode(defined('API_URL') ? API_URL : '') ?>,
    local_env: <?= json_encode(defined('LOCAL_ENV') ? LOCAL_ENV : false) ?>
  };
</script>
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/plugins.js"></script>
<script src="assets/js/SmoothScroll.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
<script src="assets/js/script.js"></script>
<script src="assets/js/forms.js"></script>
