<template>
  <div class="experience-area over-hidden pt-5">
    <div class="experience-wrapper extra-width position-relative">
      <div
        class="experience-bg-img left-0 top-0 bottom-0 bg-cover no-repeat w-50 position-absolute"
        :style="{
          backgroundImage:
            'url(/images/work/full-stack-laravel-developer-and-flutter-app-developer-darahat-working.webp)',
        }"
      ></div>
      <!-- Show image as <img> on mobile for visibility -->

      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6 offset-lg-6 col-md-12">
            <div class="experience-margin mt-160 pb-80 pl-100 mb-50">
              <div class="position-relative">
                <div class="title">
                  <span
                    class="meta-text-color text-uppercase d-block mb-6 mt--5"
                    >Work Experience</span
                  >
                  <h2 class="mb-25">My Experience</h2>
                  <p>
                    With 7 years in software development, I've crafted web and
                    mobile solutions, mastering coding, debugging, and
                    problem-solving.
                  </p>
                </div>
              </div>

              <div class="experience-wrapper pt-25">
                <ul class="experience-content">
                  <li class="mb-32 d-flex align-items-start rotate-hover">
                    <div
                      class="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3"
                    >
                      <span class="theme-color d-inline-block">
                        <span
                          class="d-block rotate flat-family flaticon-briefcase"
                        />
                      </span>
                    </div>
                    <div class="experience-service-text d-inline-block">
                      <h3 class="mb-2">Programmer</h3>
                      <h4>
                        Bangladesh Agricultural University
                        <span class="meta-text-color openS-font-family"
                          >(Jul 2019 - Present)</span
                        >
                      </h4>
                      <p class="mb-0 mt-15">
                        Leading development of web and mobile applications for
                        educational purposes, implementing modern architectures
                        and best practices.
                      </p>
                    </div>
                  </li>

                  <li class="mb-32 d-flex align-items-start rotate-hover">
                    <div
                      class="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3"
                    >
                      <span class="theme-color d-inline-block">
                        <span
                          class="d-block rotate flat-family flaticon-briefcase"
                        />
                      </span>
                    </div>
                    <div class="experience-service-text d-inline-block">
                      <h3 class="mb-2">Front End Developer</h3>
                      <h4>
                        Funush Private Limited
                        <span class="meta-text-color openS-font-family"
                          >(Feb 2019 - Jul 2019)</span
                        >
                      </h4>
                      <p class="mb-0 mt-15">
                        Developed responsive web applications using modern
                        JavaScript frameworks, focusing on user experience and
                        performance optimization.
                      </p>
                    </div>
                  </li>

                  <li class="mb-32 d-flex align-items-start rotate-hover">
                    <div
                      class="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3"
                    >
                      <span class="theme-color d-inline-block">
                        <span
                          class="d-block rotate flat-family flaticon-briefcase"
                        />
                      </span>
                    </div>
                    <div class="experience-service-text d-inline-block">
                      <h3 class="mb-2">Frontend Developer</h3>
                      <h4>
                        Future Tech IT
                        <span class="meta-text-color openS-font-family"
                          >(Feb 2018 - Jan 2019)</span
                        >
                      </h4>
                      <p class="mb-0 mt-15">
                        Built interactive user interfaces and collaborated with
                        design teams to implement pixel-perfect designs.
                      </p>
                    </div>
                  </li>

                  <li class="mb-32 d-flex align-items-start rotate-hover">
                    <div
                      class="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3"
                    >
                      <span class="theme-color d-inline-block">
                        <span
                          class="d-block rotate flat-family flaticon-briefcase"
                        />
                      </span>
                    </div>
                    <div class="experience-service-text d-inline-block">
                      <h3 class="mb-2">Intern</h3>
                      <h4>
                        Netdoc Infotech
                        <span class="meta-text-color openS-font-family"
                          >(Aug 2017 - Oct 2017)</span
                        >
                      </h4>
                      <p class="mb-0 mt-15">
                        Gained hands-on experience in web development, learned
                        industry best practices and modern development
                        workflows.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        class="experience-img-mobile"
        src="/images/work/full-stack-laravel-developer-and-flutter-app-developer-darahat-working.webp"
        alt="Full Stack Developer Darahat Working"
        loading="lazy"
      />
    </div>
  </div>
</template>

<style scoped>
/* Experience Component Styles */
.experience-area {
  overflow: hidden;
}

.experience-wrapper {
  position: relative;
}

.experience-bg-img {
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  left: 0;
  top: 0;
  bottom: 0;
  width: 50%;
  min-height: 400px;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.experience-img-mobile {
  display: none;
}

.experience-margin {
  margin-top: 100px;
  padding-bottom: 40px;
  padding-left: 30px;
  margin-bottom: 30px;
}

.title h2 {
  font-size: 48px;
  margin-bottom: 25px;
}

.title span {
  color: var(--meta-text-color, #000000);
  text-transform: uppercase;
  display: block;
  margin-bottom: 6px;
  margin-top: -5px;
  font-size: 14px;
  letter-spacing: 2px;
}

.experience-content {
  padding: 0;
  margin: 0;
  list-style: none;
  padding-top: 25px;
}

.experience-content li {
  margin-bottom: 32px;
  display: flex;
  align-items: flex-start;
}

.experience-ser-icon {
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  margin-right: 30px;
  background: transparent;
  border: 1px solid var(--secondary-color, #d9e1e2);
  border-radius: 6px;
  transition: all 0.3s ease;
  width: 70px;
  height: 70px;
  line-height: 70px;
  flex-shrink: 0;
}

.experience-content li:hover .experience-ser-icon {
  background: var(--main-color, #25262f);
}

.experience-ser-icon span {
  font-size: 35px;
  color: var(--main-color, #25262f);
}

.experience-content li:hover .experience-ser-icon span {
  color: var(--primary-color, #ffffff);
}

.rotate-hover:hover .rotate {
  transform: rotateY(360deg);
}

.rotate {
  transition: transform 0.6s ease;
}

.experience-service-text {
  display: inline-block;
}

.experience-service-text h3 {
  font-size: 30px;
  margin-bottom: 8px;
}

.experience-service-text h4 {
  font-size: 18px;
  margin-bottom: 0;
}

.experience-service-text h4 span {
  font-size: 15px;
}

.experience-service-text p {
  margin-bottom: 0;
  margin-top: 15px;
}

/* Responsive */
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .experience-margin {
    margin-right: 0;
    padding-left: 50px;
  }
  .experience-service-text h3 {
    font-size: 25px;
  }
  .experience-service-text h4 {
    font-size: 16px;
  }
}

@media screen and (max-width: 991px) {
  .experience-bg-img {
    display: none;
  }
  .experience-img-mobile {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 24px;
    margin-top: 20px;
  }
  .experience-wrapper .row {
    display: flex;
    flex-direction: column;
  }
  .col-xl-6,
  .col-lg-6,
  .offset-lg-6,
  .col-md-12 {
    width: 100%;
    max-width: 100%;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .experience-margin {
    margin-top: 0;
    padding-left: 0;
    padding-bottom: 20px;
    margin-bottom: 20px;
    z-index: 2;
    position: relative;
    background: #fff;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
  }
  .title h2 {
    font-size: 36px;
  }
}

@media screen and (max-width: 767px) {
  .experience-bg-img {
    min-height: 160px;
    height: 160px;
  }
  .experience-ser-icon {
    width: 48px;
    height: 48px;
    line-height: 48px;
    margin-right: 12px;
  }
  .experience-ser-icon span {
    font-size: 22px;
  }
  .experience-service-text h3 {
    font-size: 18px;
  }
  .experience-service-text h4 {
    font-size: 14px;
  }
}

@media screen and (max-width: 575px) {
  .experience-bg-img {
    min-height: 120px;
    height: 120px;
  }
  .title h2 {
    font-size: 22px;
  }
  .experience-service-text h3 {
    font-size: 17px;
  }
  .experience-service-text h4 {
    font-size: 13px;
  }
  .experience-service-text p {
    font-size: 13px;
  }
}

@media screen and (min-width: 992px) {
  .experience-img-mobile {
    display: none;
  }
}
</style>
