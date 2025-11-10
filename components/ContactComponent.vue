<template>
  <div id="contact" class="contact-area over-hidden mb-160 mt-155">
    <div class="contact-wrapper position-relative">
      <div class="container">
        <div class="row align-items-start">
          <div class="col-xl-12">
            <div class="title text-center">
              <span class="meta-text-color text-uppercase d-block mb-6"
                >Contact Me</span
              >
              <h2>Let's Get In Touch</h2>
              <div
                style="
                  margin-top: 12px;
                  font-size: 1.05rem;
                  color: #00bfae;
                  font-weight: 500;
                "
              >
                <span
                  >Available for hire as the
                  <strong>Best Full Stack Laravel Developer</strong> and
                  <strong>Best Flutter Mobile App Developer</strong>.
                  <a
                    href="mailto:darahat42@gmail.com"
                    style="color: #0077b5; text-decoration: underline"
                    >Contact now for your project!</a
                  ></span
                >
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-8 col-md-10">
            <div class="contact-wrapper mt-5">
              <div class="professional-contact-cards">
                <!-- LinkedIn Card -->
                <div
                  class="contact-card professional-card mb-4 p-4 transition-3"
                >
                  <div class="d-flex align-items-center">
                    <div class="mr-4">
                      <span class="icon-wrapper bg-linkedin">
                        <i class="fab fa-linkedin-in text-white" />
                      </span>
                    </div>
                    <div class="contact-details">
                      <h5 class="font-weight-600 mb-1">Professional Profile</h5>
                      <a
                        href="https://www.linkedin.com/in/darahat/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-dark hover-underline d-block"
                      >
                        Connect on LinkedIn
                        <i class="fas fa-external-link-alt ml-2 small" />
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Email Card -->
                <div
                  class="contact-card professional-card mb-4 p-4 transition-3"
                >
                  <div class="d-flex align-items-center">
                    <div class="mr-4">
                      <span class="icon-wrapper bg-email">
                        <i class="fas fa-envelope text-white" />
                      </span>
                    </div>
                    <div class="contact-details">
                      <h5 class="font-weight-600 mb-1">Direct Email</h5>
                      <a
                        href="mailto:darahat42@gmail.com"
                        class="text-dark hover-underline d-block"
                      >
                        darahat42@gmail.com
                        <i class="fas fa-paper-plane ml-2 small" />
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Fiverr Card -->
                <div
                  class="contact-card professional-card mb-4 p-4 transition-3"
                >
                  <div class="d-flex align-items-center">
                    <div class="mr-4">
                      <span class="icon-wrapper bg-fiverr">
                        <i class="fas fa-star text-white" />
                      </span>
                    </div>
                    <div class="contact-details">
                      <h5 class="font-weight-600 mb-1">Freelance Services</h5>
                      <a
                        href="https://www.fiverr.com/s/0bG74BA"
                        target="_blank"
                        class="text-dark hover-underline d-block"
                      >
                        View Fiverr Profile
                        <i class="fas fa-external-link-alt ml-2 small" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Contact Component Styles */
.contact-area {
  overflow: hidden;
}

.contact-wrapper {
  position: relative;
}

.title {
  text-align: center;
  margin-bottom: 50px;
}

.title h2 {
  font-size: 48px;
  margin-bottom: 20px;
}

.meta-text-color {
  color: var(--meta-text-color, #000000);
  text-transform: uppercase;
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  letter-spacing: 2px;
}

.professional-contact-cards {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.05);
  padding: 30px;
}

.contact-card {
  background: #fff;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 20px;
}

.bg-linkedin {
  background: linear-gradient(135deg, #0077b5 0%, #00a0dc 100%);
}

.bg-email {
  background: linear-gradient(135deg, #ea4335 0%, #fbbc05 100%);
}

.bg-fiverr {
  background: linear-gradient(135deg, #1dbf73 0%, #00b22d 100%);
}

.contact-details h5 {
  font-size: 18px;
  margin-bottom: 4px;
}

.contact-details a {
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 16px;
}

.hover-underline {
  position: relative;
  display: inline-block;
}

.hover-underline::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: currentColor;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.font-weight-600 {
  font-weight: 600;
}

/* Responsive */
@media screen and (max-width: 767px) {
  .title h2 {
    font-size: 32px;
  }
  .professional-contact-cards {
    padding: 20px;
  }
  .contact-card {
    padding: 15px !important;
  }
  .icon-wrapper {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
}
</style>
