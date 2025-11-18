<template>
  <div>
    <!-- HERO -->
    <section
      class="py-32 bg-cover bg-center bg-no-repeat text-white opacity shadow-md"
      style="background-image: url('/batakan.jpg')"
    >
      <div
        class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10"
      >
        <!-- Text -->
        <div class="flex-1">
          <h1
            class="text-4xl font-extrabold mb-4 leading-tight"
            style="-webkit-text-stroke: 3px #0f2573; paint-order: stroke fill"
          >
            Selamat Datang di Website Kota Balikpapan
          </h1>

          <RouterLink
            to="/contact"
            class="inline-block mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Hubungi Kami →
          </RouterLink>
        </div>

        <!-- Gambar -->
        <div class="flex-1 flex justify-center">
          <img
            src="/Balikpapan.png"
            class="w-72 md:w-[350px] drop-shadow-2xl rounded-xl"
          />
        </div>
      </div>
    </section>

    <!-- OVERVIEW -->
    <section class="py-16 bg-gray-50">
      <h2 class="text-center text-3xl font-bold mb-12">Overview</h2>

      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div
          class="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
        >
          <img
            src="/kilang.jpg"
            class="h-48 w-full object-cover"
            alt="Balikpapan"
          />
          <div class="p-6">
            <h3 class="font-semibold text-xl mb-2">Balikpapan</h3>
            <p class="text-gray-600 text-justify">
              Balikpapan adalah kota di Kalimantan Timur yang terkenal dengan
              keindahan alam antara hutan, bukit, dan lautannya serta sebagai
              kota minyak dan gas terbesar di Indonesia.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
        >
          <img
            src="/Beriman.webp"
            class="h-48 w-full object-cover"
            alt="Beriman"
          />
          <div class="p-6">
            <h3 class="font-semibold text-xl mb-2">Beriman</h3>
            <p class="text-gray-600 text-justify">
              Kota Balikpapan dikenal dengan slogan "Beriman" yang merupakan
              singkatan dari Bersih, Indah, Aman dan Nyaman. Ku bangun, Kujaga,
              dan Kubela. Kubangun dengan amal, Kujaga dengan iman, Kubela
              dengan doa.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
        >
          <img
            src="/beruang.webp"
            class="h-48 w-full object-cover"
            alt="Beruang Madu"
          />
          <div class="p-6">
            <h3 class="font-semibold text-xl mb-2">Beruang Madu</h3>
            <p class="text-gray-600 text-justify">
              Beruang madu adalah maskot Kota Balikpapan yang melambangkan
              kekuatan, keberanian, dan ketangguhan. Beruang madu juga
              menggambarkan keindahan alam dan keanekaragaman hayati yang ada di
              Balikpapan.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
/* Tidak perlu tambahan CSS — Tailwind sudah meng-handle semuanya */
</style>
