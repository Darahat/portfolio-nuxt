<template>
  <client-only>
    <div
      class="fun-fact-area fun-fact-bg position-relative over-hidden pt-150 pb-120"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div class="container">
        <div class="row">
          <div class="col-xl-5 col-lg-6 col-md-12">
            <div class="fun-fact-content mb-50 mr-lg-2 mr-xl-0">
              <div class="position-relative">
                <div class="title">
                  <span
                    class="meta-text-color text-uppercase d-block mb-1 mt--5"
                  />
                  <h2 class="mb-30 text-white">Why you will select me?</h2>
                </div>
              </div>
              <p>
                Since beginning my journey as a freelance developer 7 years ago,
                I've done remote work for agencies, consulted for startups, and
                collaborated with talented people to create digital products for
                both business and consumer use.
              </p>
            </div>
          </div>

          <div class="col-xl-6 offset-xl-1 col-lg-6 col-md-12">
            <div class="row justify-content-center align-items-center">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-10">
                <div
                  class="single-fact d-flex align-items-center border-radius10 mb-30"
                >
                  <div class="mr-25 d-flex">
                    <Counter class="primary-color d-inline-block" :target="7" />
                  </div>
                  <h3 class="text-white mb-0">
                    Years of <br />
                    Experience
                  </h3>
                </div>
              </div>

              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-10">
                <div
                  class="single-fact d-flex align-items-center border-radius10 mb-30"
                >
                  <div class="mr-25 d-flex">
                    <Counter
                      class="primary-color d-inline-block"
                      :target="31"
                    />
                  </div>
                  <h3 class="text-white mb-0">
                    Total <br />
                    Clients
                  </h3>
                </div>
              </div>

              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-10">
                <div
                  class="single-fact d-flex align-items-center border-radius10 mb-30"
                >
                  <div class="mr-25 d-flex">
                    <Counter
                      class="primary-color d-inline-block"
                      :target="68"
                    />
                  </div>
                  <h3 class="text-white mb-0">
                    Projects <br />
                    Completed
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script setup>
import Counter from "./Counter.vue";
</script>

<style scoped>
/* Fun Fact Component Styles */
.fun-fact-area {
  overflow: hidden;
  position: relative;
}

.fun-fact-bg {
  background: #25262f;
}

.fun-fact-content {
  margin-bottom: 50px;
}

.fun-fact-content p {
  color: #a0a0bb;
  font-size: 16px;
  line-height: 1.7;
}

.title h2 {
  font-size: 48px;
  margin-bottom: 30px;
  color: #ffffff;
}

.title span {
  color: var(--meta-text-color, #000000);
  text-transform: uppercase;
  display: block;
  margin-bottom: 4px;
  margin-top: -5px;
  font-size: 14px;
  letter-spacing: 2px;
}

.single-fact {
  padding: 48px 30px;
  border: 1px solid rgba(204, 211, 217, 0.2);
  border-radius: 10px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
}

.single-fact .primary-color {
  color: var(--primary-color, #ffffff);
  font-size: 72px;
  line-height: 0.4;
  font-weight: 600;
}

.single-fact h3 {
  font-size: 21px;
  line-height: 1.5;
  color: #ffffff;
  margin-bottom: 0;
}

.text-white {
  color: #ffffff;
}

.border-radius10 {
  border-radius: 10px;
}

/* Responsive */
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .single-fact {
    padding: 40px 20px;
    text-align: center;
  }
  .single-fact h3 {
    font-size: 18px;
    text-align: left;
  }
  .single-fact .primary-color {
    font-size: 60px;
  }
}

@media screen and (max-width: 991px) {
  .title h2 {
    font-size: 36px;
  }
  .single-fact {
    padding: 35px 25px;
  }
  .single-fact .primary-color {
    font-size: 56px;
  }
  .single-fact h3 {
    font-size: 20px;
  }
}

@media screen and (max-width: 767px) {
  .single-fact {
    padding: 30px 20px;
  }
  .single-fact .primary-color {
    font-size: 48px;
  }
  .single-fact h3 {
    font-size: 18px;
  }
}

@media screen and (max-width: 575px) {
  .title h2 {
    font-size: 28px;
  }
  .single-fact {
    padding: 25px 15px;
    flex-direction: column;
    text-align: center;
  }
  .single-fact .primary-color {
    font-size: 42px;
    margin-bottom: 10px;
  }
  .single-fact h3 {
    font-size: 16px;
  }
}
</style>
