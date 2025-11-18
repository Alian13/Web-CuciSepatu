<template>
  <div>
    <!-- HERO (Contact Header) -->
    <section
      class="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white"
    >
      <div class="max-w-7xl mx-auto px-6">
        <h1 class="text-4xl font-extrabold mb-4">Hubungi Kami</h1>

        <p class="text-gray-300 text-lg max-w-2xl">
          Jika Anda memiliki pertanyaan, kritik, atau saran, silakan hubungi
          kami melalui informasi di bawah.
        </p>
      </div>
    </section>

    <!-- INFO & MAPS -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <!-- INFO -->
        <div class="bg-white p-8 rounded-xl shadow">
          <h2 class="text-2xl font-bold mb-6">Informasi Kontak</h2>

          <div class="space-y-4 text-gray-700">
            <p><strong>Email:</strong> info@example.com</p>
            <p><strong>Telepon:</strong> +62 812 3456 7890</p>
            <p><strong>Alamat:</strong> Jl. Pendidikan No. 25, Balikpapan</p>
          </div>

          <hr class="my-6" />

          <textarea
            class="w-full p-4 border rounded-lg shadow-sm focus:ring focus:ring-blue-200"
            placeholder="Tulis pesan Anda di sini..."
            rows="5"
          ></textarea>

          <button
            class="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition shadow"
          >
            Kirim Pesan
          </button>
        </div>

        <!-- MAPS -->
        <div>
          <h2 class="text-2xl font-bold mb-4">Lokasi Kami</h2>

          <div class="rounded-xl overflow-hidden shadow-xl">
            <iframe
              class="w-full h-80"
              src="https://maps.google.com/maps?q=balikpapan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
