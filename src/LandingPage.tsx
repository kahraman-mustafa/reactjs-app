// src/LandingPage.tsx
import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";

const LandingPage: React.FC = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Hoş Geldiniz</h1>

      {/* Genel açıklama */}
      <Row className="mb-4">
        <Col>
          <p>
            Ben Av. Mustafa Kahraman. Büromuz çeşitli hukuk dallarında
            danışmanlık ve avukatlık hizmetleri sunmaktadır. Web sitemizi şu
            anda güncelleme aşamasındayız; ancak aşağıdaki iletişim
            bilgilerimizden bizimle her zaman irtibata geçebilirsiniz.
          </p>
        </Col>
      </Row>

      {/* Avukat fotoğrafı ve ismi */}
      <Row className="text-center mb-4">
        <Col>
          <Image
            src="/assets/cubbeli-vesika.jpg"
            alt="Avukat Mustafa Kahraman"
            thumbnail
            style={{maxWidth: "180px"}}
            className="mb-3"
          />
          <h2 className="fs-4">Avukat Mustafa Kahraman</h2>
        </Col>
      </Row>

      {/* İletişim bilgileri */}
      <Row className="mb-4">
        <Col>
          <h3 className="mb-3">İletişim Bilgileri</h3>
          <p>
            Adres: Odunluk Mahallesi Akpınar Caddesi No:7 Daire:14 Kat:2,
            Nilüfer, Bursa, Türkiye
          </p>
          <p>Telefon: +90 (224) 334 02 38 / Cep: +90 (538) 956 4380</p>

          {/* Google Maps iframe */}
          <div className="ratio ratio-16x9 my-3">
            <iframe
              title="Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.0633936920044!2d28.995684812482132!3d40.207652771354944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca142b239709bf%3A0x2b1c897e6f37add6!2zxZ5lbnTDvHJrbGVyIMSwxZ8gTWVya2V6aQ!5e0!3m2!1str!2str!4v1737546144189!5m2!1str!2str"
              allowFullScreen
              loading="lazy"
              style={{border: 0}}
            ></iframe>
          </div>

          <h4>Ulaşım ve Otopark</h4>
          <p>
            Büromuza toplu taşıma veya özel araçla rahatlıkla ulaşabilirsiniz.
            Ofisimize toplu ulaşım ile Odunluk metro istasyonundan, Odunluk üst
            geçidinin iki yanındaki otobüs duraklarından, Hüdavendigar Kent
            Parkının oradan geçen Mihraplı Caddesi üzerindeki otobüs duraklarından
            5 dakika yürüme mesafesi ile ulaşabilirsiniz.
          </p>
          <p>
            Plazanın çevresinde belediyenin açık otoparkı, cadde üzeri park
            yerleri ve Suryapı Marka AVM'nin üç saate kadar ücretsiz açık ve
            kapalı otopark alanları bulunmaktadır.
          </p>
        </Col>
      </Row>

      {/* QR Kodu */}
      <Row className="text-center">
        <Col>
          <h4 className="mb-3">İletişim Bilgilerini Telefon Rehberine Kaydet</h4>
          <Image
            src="/assets/qr-rehbere-ekle.png"
            alt="QR kodu"
            style={{maxWidth: "200px"}}
            className="mb-2"
          />
          <p>
            QR kodu kamera ya da QR kod okuma uygulamanıza okutarak iletişim
            bilgilerini tek tıkla kaydedin.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
