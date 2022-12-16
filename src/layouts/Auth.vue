<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center mb-5">
          <h2 class="heading-section"><slot name="header" /></h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5">
          <div class="login-wrap p-4 p-md-5">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="fa fa-user-o"></span>
            </div>
            <slot />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
/* ============
 * Auth Layout
 * ============
 *
 * Used for the register and login pages.
 *
 * Layouts are used to store a lot of shared code.
 * This way the app stays clean.
 */

export default {
  /**
   * The name of the layout.
   */
  name: "AuthLayout",
};
</script>
  