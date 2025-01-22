import React from "react";
import "./LandingPage.css"; // İsteğe bağlı: stilleri burada tanımlayabilirsiniz.

const LandingPage = () => {
  return (
    <main className="landing-container">
      {/* Karşılama başlığı */}
      <h1 className="welcome-title">Hoş Geldiniz</h1>

      {/* Kendimle ilgili genel açıklama alanı */}
      <section className="intro-section">
        <p>
          Ben Av. Mustafa Kahraman. Büromuz çeşitli
          hukuk dallarında danışmanlık ve avukatlık hizmetleri sunmaktadır.
          Web sitemizi şu anda güncelleme aşamasındayız; ancak aşağıdaki iletişim
          bilgilerimizden bizimle her zaman irtibata geçebilirsiniz.
        </p>
      </section>

      {/* Avukat fotoğrafı ve ismi */}
      <section className="profile-section">
        <img
          src="/assets/cubbeli-vesika.jpg"
          alt="Avukat Mustafa Kahraman"
          className="lawyer-photo"
        />
        <h2 className="lawyer-name">Avukat Mustafa Kahraman</h2>
      </section>

      {/* Adres, telefon, harita */}
      <section className="contact-section">
        <h3>İletişim Bilgileri</h3>
        <p>Adres: Odunluk Mahallesi Akpınar Caddesi No:7 Daire:14 Kat:2, Nilüfer, Bursa, Türkiye</p>
        <p>Telefon: +90 (224) 334 02 38 / Cep: +90 (538) 956 4380</p>

        {/* Gömülü harita (örnek Google Maps iframe). Konum bilgisine göre embed kodu güncelleyin. */}
        <div className="map-container">
          <iframe
            title="Office Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.0633936920044!2d28.995684812482132!3d40.207652771354944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca142b239709bf%3A0x2b1c897e6f37add6!2zxZ5lbnTDvHJrbGVyIMSwxZ8gTWVya2V6aQ!5e0!3m2!1str!2str!4v1737546144189!5m2!1str!2str"
            width="100%"
            height="300"
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Ulaşım ve otopark bilgileri */}
        <h4>Ulaşım ve Otopark</h4>
        <p>
          Büromuza toplu taşıma veya özel araçla rahatlıkla ulaşabilirsiniz.
        </p>
        <p>
          Ofisimize toplu ulaşım ile Odunluk metro istasyonundan, Odunluk üst geçidinin iki yanındaki otobüs duraklarından,
          Hüdavendigar Kent Parkının oradan geçen Mihraplı Caddesi üzerindeki otobüs duraklarından 5 dakika yürüme mesafesi
          ile ulaşabilirsiniz.
        </p>
        <p>
          Plazanın çevresinde belediyenin açık otoparkı, cadde üzeri park yerleri ve Suryapı Marka AVM'nin üç saate kadar ücretsiz
          açık ve kapalı otopark alanları bulunmaktadır.
        </p>
      </section>

      {/* QR Kodu */}
      <h4>İletişim Bilgilerini Telefon Rehberine Kaydet</h4>
      <section className="qr-section">
        <img
          src="/assets/qr-rehbere-ekle.png"
          alt="QR kodu"
          className="qr-code"
        />
        <p>QR kodu kamera ya da QR kod okuma uygulamanıza okutarak iletişim bilgilerini tek tıkla kaydedin</p>
      </section>
    </main>
  );
};

export default LandingPage;
