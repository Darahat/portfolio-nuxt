// /plugins/seo-schema.ts
export default defineNuxtPlugin(() => {
  useHead({
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Didarul Alam Rahat",
          url: "https://darahat.dev",
          image:
            "https://darahat.dev/images/about/rahat-flutter-developer.webp",
          sameAs: [
            "https://www.linkedin.com/in/darahat/",
            "https://github.com/Darahat",
            "https://x.com/darahat42",
            "https://medium.com/@darahat42",
            "https://stackoverflow.com/users/3424210/didarul-alam-rahat",
            "https://darahat.dev/",
          ],
          jobTitle:
            "Full-Stack Laravel & Flutter Developer | Web3 & Blockchain Specialist",
          skills:
            "Laravel 12, CodeIgniter, Vue.js, Nuxt.js, Flutter, Solidity, Web3.js, DeFi, Smart Contracts, Oracle, MySQL, REST API",
          worksFor: {
            "@type": "Organization",
            name: "Freelancer / Remote Developer",
          },
          description:
            "Hire Rahat – a seasoned Flutter & Full-Stack Web Developer with expertise in Laravel 12, CodeIgniter, Vue.js, Nuxt.js, Oracle, MySQL, REST API, AWS, and Blockchain.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Mymensingh",
            addressRegion: "Mymensingh",
            addressCountry: "BD",
          },
        }),
      },
    ],
    __dangerouslyDisableSanitizers: ["script"], // ✅ Works perfectly here
  });
});
