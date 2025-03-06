// samplePosts.tsx
// Örnek tip tanımı, projenizde kullandığınız interface/post tipine uyarlayınız.
export interface Author {
  name: string;
  profilePic?: string;
}

export interface Post {
  id: number;
  title: string;
  tags: string[];
  author: Author;
  createdAt: string;
  updatedAt: string;
  coverImage?: string;
  excerpt: string;
  content: string;
}

export const samplePosts: Post[] = [
  // 1 numaralı yeni post
  {
    id: 1,
    title: "Borç/Alacak İlişkilerinde Zamanaşımı",
    tags: ["zamanaşımı", "borçlar hukuku", "alacak"],
    author: {
      name: "Av. Mustafa Kahraman",
      profilePic: "/assets/cubbeli-vesika.jpg",
    },
    createdAt: "2025-03-06T09:00:00Z",
    updatedAt: "2025-03-06T10:30:00Z",
    coverImage: "/assets/blog-cover-3.jpg", // Eğer kapak resmi eklemek isterseniz
    excerpt:
      "Zamanaşımı, borçlar hukukunda borcu ortadan kaldırmaz ancak alacaklının dava hakkını zayıflatır.",
    content: `
      <h1>Borç/Alacak İlişkilerinde Zamanaşımı</h1>

      <h2>1. Kavramsal Çerçeve ve Amacı</h2>
      <p>
        Zamanaşımı, borçlar hukukunda alacak hakkını, belirli bir sürenin geçmesi
        sonucunda kanunen zayıflatan bir müessese olarak tanımlanır. Ancak bu durum,
        borcun tamamen ortadan kalkması anlamına gelmez. Borcun sona ermesi yerine,
        borçlunun mahkemeye karşı “zamanaşımı def’i” ileri sürme hakkı doğar. Zamanaşımı
        def’ini dava hakkını kaldıran bir sebep olmaktan çok, davayı reddettiren bir
        sebep olarak tanımlamak daha doğru olur. Zamanaşımının temel amacı, hukuki
        ilişkilerde belirsizliği önleyerek toplumda hukuki güvenliği ve istikrarı
        sağlamaktır.
      </p>
      <p>
        Zamanaşımının dayanak noktasında; uzun yıllar boyunca harekete geçmeyen
        alacaklının hakkını ileri sürmesinin adil olup olmadığı, borçlunun sürekli
        bir dava tehdidi altında kalmasının engellenmesi ve mahkemelerin çok eski
        olaylarla ilgili kesin delillere ulaşmakta zorlanması gibi hususlar bulunur.
        Dolayısıyla bu sistem, hak ve menfaat dengesini korumak adına yasayla
        düzenlenmiştir.
      </p>

      <h2>2. Zamanaşımı Süreleri ve Türleri</h2>
      <p>
        Borçlar hukukunda zamanaşımına dair süreler, genel olarak Türk Borçlar Kanunu
        ve ilgili özel kanunlarda düzenlenmiştir.
      </p>
      <h3>Genel Zamanaşımı Süresi:</h3>
      <p>
        Borçlar hukukunda, kanunda aksi düzenlenmemişse genel zamanaşımı süresi 10
        yıldır. Bu süre, kanunun öngördüğü hâllerde daha kısa ya da daha uzun
        olabilir.
      </p>
      <h3>Olağanüstü/Özel Zamanaşımı Süreleri:</h3>
      <p>
        <strong>Beş Yıllık Zamanaşımı:</strong> Kira bedelleri, anaparadan ayrı olarak
        ödenmesi gereken faizler, ücret alacakları ve benzeri periyodik edimler ile TBK
        147’de tanımlı diğer özel durumlar 5 yıllık zamanaşımına tabidir.
      </p>
      <p>
        <strong>Haksız Fiil-Sebepsiz Zenginleşme:</strong> Haksız fiil ve sebepsiz
        zenginleşmeye dayalı borçlar için 2 yıl ve 10 yıllık zamanaşımı süreleri söz
        konusudur.
      </p>
      <p>
        <strong>Ayıptan Doğan:</strong> TBK ve diğer kanunlarda ayıptan doğan alacaklar
        için kusur durumuna ve sözleşme türüne göre 2, 5, 10 ve 20 yıllık süreler söz
        konusudur.
      </p>
      <p>
        <strong>Diğer Özel Düzenlemeler:</strong> Ticari hayatta, bazı ticari
        alacaklara ilişkin olarak Türk Ticaret Kanunu’nda yer alan daha farklı
        zamanaşımı süreleri mevcuttur (örneğin poliçe, bono gibi kıymetli evraklarda 3
        yıllık, 5 yıllık süreler). Belli sektörlere (örneğin taşıma, sigorta)
        ilişkin de kanunlarla düzenlenmiş özel süreler bulunabilir.
      </p>
      <p>
        Burada önemli olan, davanın açılabileceği veya borçlunun def’i olarak ileri
        sürebileceği sürelerin hangi kanun maddesine dayandığını belirlemek ve buna
        göre hak kaybını engellemektir.
      </p>

      <h2>3. Zamanaşımının Başlaması, Durması ve Kesilmesi</h2>
      <p>
        Zamanaşımı genellikle alacağın muaccel olduğu (talep edilebilir hâle geldiği)
        tarihten itibaren işlemeye başlar. Haksız fiilde zararın ve sorumlunun,
        sebepsiz zenginleşmede geri isteme hakkının öğrenilmesinden itibaren başlar.
        Ayrıca alacak ilişkisinin türüne ve niteliğine göre de kendi içinde
        değişebilen başlama zamanları söz konusu olmaktadır.
      </p>
      <p>
        Diğer yandan, zamanaşımının “durma” veya “kesilmesi” halleri de söz konusu
        olabilir. Zamanaşımının durduğu hallerde o ana kadar işleyen süreler
        korunurken kesilme hallerinde işleyen süreler sıfırlanıp yeniden başlar.
        Örneğin:
      </p>
      <p>
        <strong>Kesilme:</strong> Alacaklının dava açması, icra takibi başlatması, iflas
        masasına başvurması hâlinde zamanaşımı kesilir; her dava/takip işleminden
        sonra süre yeniden işlemeye başlar. Borçlunun da alacağı açık ya da örtülü
        (örneğin kısmi ödeme veya faiz ödemesi) kabul etmesi zamanaşımını kesen
        durumlardandır.
      </p>
      <p>
        <strong>Durma:</strong> Alacaklı ile borçlu arasındaki evlilik gibi yakın
        bağlantı ya da velilik-vasilik gibi bağımlılık durumlarında, mücbir ya da
        objektif sebeplerle alacaklının hakkını ileri sürmesinin ya da dava
        açmasının fiilen imkânsız hâle geldiği durumlarda; zamanaşımı işlemez veya
        durur.
      </p>

      <h2>4. Zamanaşımı Def’i ve Sonuçları</h2>
      <p>
        Zamanaşımının dolması alacağın “ortadan kalkması” anlamına gelmemekle beraber,
        alacaklının artık hukuki yollardan alacağını talep etmesi zorlaşır. Borçlu,
        alacağa ilişkin olarak zamanaşımı def’ini ileri sürerse, yargı merci tarafından
        davanın reddi gündeme gelir.
      </p>
      <p>
        Öte yandan borçlu, zamanaşımı dolmuş bir borcu kendi isteğiyle öderse geçerli
        bir ifa söz konusudur. Çünkü burada artık eksik borç vardır. Ayrıca borçlunun,
        zamanaşımı süresi dolduğunun bilincinde olarak ödediği meblağı geri talep
        etmesi de kural olarak mümkün değildir.
      </p>

      <h2>5. Zamanaşımına İlişkin Dikkat Edilecek Hususlar</h2>
      <p>
        <strong>Sözleşmelerdeki Düzenlemeler:</strong> TBK 146, 147 ve 148 kapsamında
        tarafların sözleşmeyle buralardaki zamanaşımı sürelerini ortadan kaldırmaları
        veya daha uzun/kısa süreler öngörmeleri yasaklanmıştır. Bu kanun ve maddeler
        dışındaki zamanaşımlarına ilişkin de her hüküm değiştirilebilir olmayıp en
        fazla süreler ya da yine özel kanunlarla konulan emredici hükümler söz konusu
        olabilmektedir.
      </p>
      <p>
        <strong>Tespit ve Takip:</strong> Alacaklılar, alacaklarını hangi yasal
        düzenlemeye göre talep edeceklerini ve hangi sürelere tabi olduğunu bilmekle
        yükümlüdür. Borçlular için ise hangi haklara sahip olduklarını bilmek,
        uyuşmazlık hâlinde bunları zamanında ileri sürmek önemlidir. Özellikle
        ticaret hukuku ve taşıma, deniz ticareti gibi özel mevzuat çerçevesinde
        farklı zamanaşımı süreleri öngörülmüş olabilir. Dolayısıyla zamanaşımı
        konusunda uyuşmazlığın niteliği, tarafların sıfatı ve talebin türü göz önünde
        bulundurulmalıdır.
      </p>

      <h2>6. Sonuç ve Değerlendirme</h2>
      <p>
        Zamanaşımı, borçlar hukukunda hukuki güvenliği ve düzeni sağlamaya hizmet eden
        önemli bir kurumdur. Belirli koşullarda alacak hakkının zamanaşımına uğraması,
        taraflar arasındaki adalet dengesinin korunması ve yargının eski ve
        delillendirilemeyen davalarla uğraşmaması için getirilen bir çözümdür.
      </p>
    `,
  },
];
