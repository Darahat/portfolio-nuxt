<template>
  <div class="education-area over-hidden pt-5">
    <div class="container">
      <div class="row position-relative">
        <div class="col-xl-6 col-lg-6 col-md-12">
          <div class="position-relative">
            <div class="title">
              <span class="meta-text-color text-uppercase d-block mb-1"
                >Education</span
              >
              <h2 class="mb-25">My Education</h2>
              <p>
                I am B.Sc in Software engineering graduate. I completed my
                Graduation year of 2017. It was the best part of my life.
              </p>
            </div>
          </div>

          <div class="education-wrapper mr-20 pt-25 mb-50">
            <ul class="education-content">
              <li class="mb-32 d-flex align-items-start rotate-hover">
                <div
                  class="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3"
                >
                  <span class="theme-color d-inline-block">
                    <span
                      class="d-block rotate flat-family flaticon-graduation-cap"
                    />
                  </span>
                </div>
                <div class="experience-service-text d-inline-block">
                  <h3 class="mb-2">B.Sc. in Software Engineering</h3>
                  <h4>
                    Daffodil International University
                    <span class="meta-text-color openS-font-family"
                      >(2013 - 2017)</span
                    >
                  </h4>
                  <p class="mb-0 mt-15">
                    My time at Daffodil International University equipped me
                    with the knowledge and expertise to tackle complex technical
                    challenges and innovate in the ever-evolving field of
                    software engineering.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="col-xl-5 offset-xl-1 col-lg-6 col-md-12 d-lg-block d-flex align-items-center justify-content-center"
        >
          <div
            class="education-img position-relative text-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              class="border-radius10"
              src="/images/education/study-bsc-in-software-engineering-daffodil-international-university-darahat.webp"
              alt="Education"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Education Component Styles */
.education-area {
  overflow: hidden;
}

.title h2 {
  font-size: 48px;
  margin-bottom: 25px;
}

.title span {
  color: var(--meta-text-color, #000000);
  text-transform: uppercase;
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  letter-spacing: 2px;
}

.education-wrapper {
  margin-right: 20px;
  padding-top: 25px;
  margin-bottom: 50px;
}

.education-content {
  padding: 0;
  margin: 0;
  list-style: none;
}

.education-content li {
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

.education-content li:hover .experience-ser-icon {
  background: var(--main-color, #25262f);
}

.experience-ser-icon span {
  font-size: 35px;
  color: var(--main-color, #25262f);
}

.education-content li:hover .experience-ser-icon span {
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

.education-img {
  position: relative;
  text-align: center;
}

.education-img img {
  border-radius: 10px;
  max-width: 100%;
  height: auto;
}

/* Responsive */
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .experience-service-text h3 {
    font-size: 25px;
  }
  .experience-service-text h4 {
    font-size: 16px;
  }
}

@media screen and (max-width: 991px) {
  .title h2 {
    font-size: 36px;
  }
  .education-wrapper {
    margin-right: 0;
  }
  .education-img {
    margin-top: 40px;
    margin-bottom: 40px;
  }
}

@media screen and (max-width: 767px) {
  .experience-ser-icon {
    width: 60px;
    height: 60px;
    line-height: 60px;
    margin-right: 20px;
  }
  .experience-ser-icon span {
    font-size: 28px;
  }
  .experience-service-text h3 {
    font-size: 22px;
  }
  .experience-service-text h4 {
    font-size: 16px;
  }
}

@media screen and (max-width: 575px) {
  .title h2 {
    font-size: 28px;
  }
  .experience-service-text h3 {
    font-size: 20px;
  }
}
</style>
