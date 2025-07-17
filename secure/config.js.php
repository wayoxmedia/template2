<?php
  header('Content-Type: application/javascript');
?>
export const msaConfig = {
  siteName: <?= json_encode(defined('SITE_NAME') ? SITE_NAME : '') ?>,
  siteAdminUrl: <?= json_encode(defined('SITE_ADMIN_URL') ? SITE_ADMIN_URL : '') ?>,
  supportEmail: <?= json_encode(defined('SUPPORT_EMAIL') ? SUPPORT_EMAIL : '') ?>,
  apiUrl: <?= json_encode(defined('API_URL') ? API_URL : '') ?>,
  local_env: <?= json_encode(defined('LOCAL_ENV') && LOCAL_ENV) ?>,
  version: <?= json_encode(defined('VERSION') ? VERSION : '') ?>,
};
