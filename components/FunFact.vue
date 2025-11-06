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
                    <Counter
                      class="primary-color d-inline-block"
                      :target="7"
                    />
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
