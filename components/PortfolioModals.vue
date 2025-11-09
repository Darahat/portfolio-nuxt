<template>
  <div>
    <!-- SensorLab Modal -->
    <div
      class="modal fade"
      :class="{
        show: activeModal === 'sensorlab',
        'd-block': activeModal === 'sensorlab',
      }"
      @click.self="$emit('close')"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="close-icon float-right pt-10 pr-10">
            <button
              type="button"
              class="close d-inline-block"
              @click="$emit('close')"
            >
              <span><i class="fa fa-times" /></span>
            </button>
          </div>
          <div class="modal-body pl-40 pr-40 pt-10 pb-20">
            <div class="blog-modal-img mb-4">
              <img
                class="w-100"
                :src="portImg6Large"
                alt="SensorLab Mobile Sensor Toolkit"
                loading="lazy"
                width="800"
                height="600"
                srcset="
                  /images/portfolio/sensorlab-flutter-android-app-development-darahat.webp 800w
                "
                sizes="(max-width: 600px) 100vw, 800px"
              />
            </div>
            <div class="row">
              <div class="col-xl-7 col-lg-7 col-md-12">
                <h2>Mobile Sensor Toolkit & Tools (SensorLab)</h2>
                <p>
                  SensorLab is a compact, extensible mobile toolkit designed to
                  collect, visualize, and export sensor data for research, field
                  work, and prototyping.
                </p>
                <h3>Features</h3>
                <ul>
                  <li>
                    🌐 Multi-Language Support — English, Spanish, Japanese,
                    Khmer
                  </li>
                  <li>📊 Comprehensive Sensor Suite</li>
                  <li>🎨 Modern UI/UX — Material Design 3</li>
                  <li>🔧 Utility Tools — QR/Barcode scanner</li>
                </ul>
              </div>
              <div class="col-xl-5 col-lg-5 col-md-12">
                <div
                  class="meta-wrapper form-bg mt-30 pt-30 pb-35 pr-20 pl-30 mb-10"
                >
                  <ul class="item-meta">
                    <li>
                      Project Type: <span class="pl-2">Mobile Toolkit</span>
                    </li>
                    <li>Platforms: <span class="pl-2">Android, iOS</span></li>
                    <li>
                      Languages:
                      <span class="pl-2"
                        >English, Spanish, Japanese, Khmer</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- BAU Modal -->
    <div
      class="modal fade"
      :class="{ show: activeModal === 'bau', 'd-block': activeModal === 'bau' }"
      @click.self="$emit('close')"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-icon float-right pt-10 pr-10">
            <button
              type="button"
              class="close d-inline-block"
              @click="$emit('close')"
            >
              <span><i class="fa fa-times" /></span>
            </button>
          </div>
          <div class="modal-body pl-50 pr-50 pt-10 pb-20">
            <div class="blog-modal-img">
              <img
                class="w-100"
                :src="portImg4Large"
                alt="BAU E-Diary Flutter App for Bangladesh Agricultural University"
                loading="lazy"
                width="800"
                height="600"
              />
            </div>
            <div class="row">
              <div class="col-xl-7 col-lg-7 col-md-12">
                <h2>
                  Flutter Mobile App for Bangladesh Agricultural University
                  (BAU)
                </h2>
                <p>
                  The Flutter mobile app developed for Bangladesh Agricultural
                  University has become a cornerstone in agricultural education.
                  With over 5,000 downloads and a rating of 4.8 stars.
                </p>
              </div>
              <div class="col-xl-5 col-lg-5 col-md-12">
                <div
                  class="meta-wrapper form-bg mt-60 pt-40 pb-45 pr-20 pl-45 mb-10"
                >
                  <ul class="item-meta">
                    <li>Project Type: <span class="pl-2">Flutter App</span></li>
                    <li>Client: <span class="pl-2">BAU</span></li>
                    <li>Duration: <span class="pl-2">2 Weeks</span></li>
                  </ul>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.bauictcell.bau_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn mt-20 pt-2 pb-2"
                    >View Live</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- StakeHive Modal -->
    <div
      class="modal fade"
      :class="{
        show: activeModal === 'stakehive',
        'd-block': activeModal === 'stakehive',
      }"
      @click.self="$emit('close')"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-icon float-right pt-10 pr-10">
            <button
              type="button"
              class="close d-inline-block"
              @click="$emit('close')"
            >
              <span><i class="fa fa-times" /></span>
            </button>
          </div>
          <div class="modal-body pl-50 pr-50 pt-10 pb-20">
            <div class="blog-modal-img">
              <img
                class="w-100"
                :src="portImg5Large"
                alt="StakeHive DeFi DApp Decentralized Staking Platform"
                loading="lazy"
                width="800"
                height="600"
              />
            </div>
            <div class="row">
              <div class="col-xl-7 col-lg-7 col-md-12">
                <h2>DeFi App - StakeHive</h2>
                <p>
                  StakeHive is a feature-rich DeFi application enabling users to
                  stake tokens and earn rewards. Built with Solidity, Nuxt 3,
                  and Web3.js.
                </p>
              </div>
              <div class="col-xl-5 col-lg-5 col-md-12">
                <div
                  class="meta-wrapper form-bg mt-60 pt-40 pb-45 pr-20 pl-45 mb-10"
                >
                  <ul class="item-meta">
                    <li>Project Type: <span class="pl-2">DeFi App</span></li>
                    <li>Duration: <span class="pl-2">4 Weeks</span></li>
                  </ul>
                  <a
                    href="https://stakehive-defi-dapp.netlify.app"
                    target="_blank"
                    class="btn mt-20 pt-2 pb-2"
                    >View Live</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- RUBI Modal -->
    <div
      class="modal fade"
      :class="{
        show: activeModal === 'rubi',
        'd-block': activeModal === 'rubi',
      }"
      @click.self="$emit('close')"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-icon float-right pt-10 pr-10">
            <button
              type="button"
              class="close d-inline-block"
              @click="$emit('close')"
            >
              <span><i class="fa fa-times" /></span>
            </button>
          </div>
          <div class="modal-body pl-50 pr-50 pt-10 pb-20">
            <div class="blog-modal-img">
              <img
                class="w-100"
                :src="portImg1Large"
                alt="RUBI Frontend Development using Vue.js and TailwindCSS"
                loading="lazy"
                width="800"
                height="600"
              />
            </div>
            <div class="row">
              <div class="col-xl-7 col-lg-7 col-md-12">
                <h2>Front End Work for RUBI</h2>
                <p>
                  Contributed to front-end development using Vue.js 3 and
                  Vuetify, creating a user-friendly interface with innovative
                  features.
                </p>
              </div>
              <div class="col-xl-5 col-lg-5 col-md-12">
                <div
                  class="meta-wrapper form-bg mt-60 pt-40 pb-45 pr-20 pl-45 mb-10"
                >
                  <ul class="item-meta">
                    <li>Project Type: <span class="pl-2">Front-end</span></li>
                    <li>Duration: <span class="pl-2">2 Weeks</span></li>
                  </ul>
                  <a
                    href="https://www.rubi.com/ca"
                    target="_blank"
                    class="btn mt-20 pt-2 pb-2"
                    >View Live</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Network Tap Modal -->
    <div
      class="modal fade"
      :class="{
        show: activeModal === 'networktap',
        'd-block': activeModal === 'networktap',
      }"
      @click.self="$emit('close')"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-icon float-right pt-10 pr-10">
            <button
              type="button"
              class="close d-inline-block"
              @click="$emit('close')"
            >
              <span><i class="fa fa-times" /></span>
            </button>
          </div>
          <div class="modal-body pl-50 pr-50 pt-10 pb-20">
            <div class="blog-modal-img">
              <img
                class="w-100"
                :src="portImg2Large"
                alt="The Network Tap Digital Card Platform Frontend Development"
                loading="lazy"
                width="800"
                height="600"
              />
            </div>
            <div class="row">
              <div class="col-xl-7 col-lg-7 col-md-12">
                <h2>Work with The Network Tap</h2>
                <p>
                  Front-end development using HTML, CSS, and Tailwind CSS for a
                  networking platform.
                </p>
              </div>
              <div class="col-xl-5 col-lg-5 col-md-12">
                <div
                  class="meta-wrapper form-bg mt-60 pt-40 pb-45 pr-20 pl-45 mb-10"
                >
                  <ul class="item-meta">
                    <li>Project Type: <span class="pl-2">Front-end</span></li>
                    <li>Budget: <span class="pl-2">$200</span></li>
                  </ul>
                  <a
                    href="https://thenetworktap.com/"
                    target="_blank"
                    class="btn mt-20 pt-2 pb-2"
                    >View Live</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="activeModal"
      class="modal-backdrop fade"
      :class="{ show: activeModal }"
      @click="$emit('close')"
    />
  </div>
</template>

<script setup>
defineProps({
  activeModal: String,
});

defineEmits(["close"]);

import portImg4Large from "/images/portfolio/bau-e-diary-flutter-android-app-development-for-bangladesh-agricultural-university-large-darahat.webp";
import portImg5Large from "/images/portfolio/decentralized-stacking-platform-web3-app-stackhive-using-solidigy-large-darahat.webp";
import portImg1Large from "/images/portfolio/rubi-frontend-development-using-tailwindcss-vuejs-large-darahat.webp";
import portImg6Large from "/images/portfolio/sensorlab-flutter-android-app-development-large-darahat.webp";
import portImg2Large from "/images/portfolio/the-network-tap-frontend-development-digital-card-and-user-profile-large-darahat.webp";
</script>
