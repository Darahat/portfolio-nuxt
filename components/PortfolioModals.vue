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

<style scoped>
/* Portfolio Modals Component Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
  background: rgba(0, 0, 0, 0.5);
}

.modal.show {
  display: block;
}

.modal.fade {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.modal.show.fade {
  opacity: 1;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
  max-width: 1180px;
  margin: 1.75rem auto;
}

.modal-dialog.modal-lg {
  max-width: 1180px;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 10px 40px 20px 40px;
}

.close-icon {
  float: right;
  padding-top: 10px;
  padding-right: 10px;
}

.close {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.close-icon span {
  font-size: 18px;
  color: var(--main-color, #25262f);
  background: #e7e1e1;
  width: 36px;
  height: 36px;
  display: inline-block;
  line-height: 37px;
  text-align: center;
  border-radius: 30px;
  transition: 0.3s;
}

.close-icon span:hover {
  box-shadow: 0px 6px 30px 0px rgba(7, 7, 7, 0.12);
  color: #f5f4f4;
  background: var(--main-color, #25262f);
}

.blog-modal-img {
  margin-bottom: 16px;
}

.blog-modal-img img {
  border-radius: 30px;
  width: 100%;
  height: auto;
}

.modal-content h2 {
  font-size: 36px;
  padding: 50px 0px 20px 0px;
  line-height: 1.32;
}

.modal-content h3 {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 15px;
}

.modal-content p {
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 20px;
}

.modal-content ul {
  padding-left: 20px;
  margin-bottom: 20px;
}

.modal-content li {
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 1.6;
}

.meta-wrapper {
  border-radius: 10px;
  margin-top: 60px;
  padding: 40px 20px 45px 45px;
  margin-bottom: 10px;
  background: var(--section-bg, #f3f6f8);
}

.form-bg {
  background: var(--section-bg, #f3f6f8);
}

.item-meta {
  padding: 0;
  margin: 0;
  list-style: none;
}

.item-meta li {
  padding-bottom: 16px;
  color: var(--main-color, #25262f);
  font-size: 16px;
}

.item-meta li span {
  color: var(--text-color, #4d4d5c);
  font-size: 15px;
}

.modal-body .btn {
  padding: 11px 25px 10px 25px;
  font-size: 14px;
  border: 1px solid var(--main-color, #25262f);
  border-radius: 5px;
  background: var(--main-color, #25262f);
  color: #ffffff;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  margin-top: 20px;
}

.modal-body .btn:hover {
  background: transparent;
  color: var(--main-color, #25262f);
}

/* Responsive */
@media screen and (max-width: 991px) {
  .modal-dialog {
    max-width: 90%;
    margin: 1rem auto;
  }
  .modal-body {
    padding: 10px 30px 20px 30px;
  }
  .modal-content h2 {
    font-size: 28px;
    padding: 30px 0px 15px 0px;
  }
  .meta-wrapper {
    margin-top: 30px;
    padding: 30px 20px;
  }
}

@media screen and (max-width: 767px) {
  .modal-dialog {
    max-width: 95%;
  }
  .modal-body {
    padding: 10px 20px 20px 20px;
  }
  .modal-content h2 {
    font-size: 24px;
    padding: 20px 0px 10px 0px;
  }
  .modal-content h3 {
    font-size: 20px;
  }
  .modal-content p,
  .modal-content li {
    font-size: 15px;
  }
  .meta-wrapper {
    margin-top: 20px;
    padding: 25px 15px;
  }
}

@media screen and (max-width: 575px) {
  .modal-content h2 {
    font-size: 20px;
  }
  .modal-content h3 {
    font-size: 18px;
  }
  .item-meta li {
    font-size: 14px;
  }
  .blog-modal-img img {
    border-radius: 15px;
  }
}
</style>
