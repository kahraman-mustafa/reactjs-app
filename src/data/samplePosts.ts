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
  // 2 numaralı yeni post
  {
    id: 2,
    title: "Ayıplı Mal Karşısında Tüketicinin Hakları",
    tags: ["ayıplı mal", "tüketici hukuku", "tazminat"],
    author: {
      name: "Av. Mustafa Kahraman",
      profilePic: "/assets/cubbeli-vesika.jpg",
    },
    createdAt: "2025-03-13T09:00:00Z",
    updatedAt: "2025-03-13T10:30:00Z",
    coverImage: "/assets/blog-cover-3.jpg", // Eğer kapak resmi eklemek isterseniz
    excerpt: "Ayıplı Mal Karşısında Tüketicinin Hakları",
    content: `
          <h1><strong>Ayıplı Mal ve Tüketici Hakları</strong></h1>
          <h2><strong>Ayıplı Mal Kavramı, Satıcının Sorumluluğu ve İspat Yükü</strong></h2>
          <p><strong>Ayıplı Mal Nedir?</strong><span style="font-weight: 400;"> 6502 sayılı Tüketicinin Korunması Hakkında
              Kanun’un 8. maddesi uyarınca </span><strong>ayıplı mal</strong><span style="font-weight: 400;">, tüketiciye
            </span><strong>teslim anında sözleşmeye aykırı durumda olan mal</strong><span style="font-weight: 400;"> anlamına
              gelir. Başka bir deyişle, ürünün ambalajında, etiketinde, tanıtımında veya satış sözleşmesinde belirtilen
              özellikleri taşımaması, standartlarına uymaması ya da objektif olarak beklenen faydaları sağlamaması halinde mal
              ayıplı kabul edilir. Örneğin, çalışır durumda olması gereken  bir elektronik cihazın arızalı çıkması veya vaat edilen
              özellikleri barındırmaması ayıplı mal kapsamındadır. Satıcı, tüketiciye ürünü </span><strong>sözleşmeye uygun halde
              teslim etmekle yükümlüdür</strong><span style="font-weight: 400;">; aksi takdirde ortaya çıkan ayıptan yasal olarak
              sorumlu olur.</span></p>
          <p><strong>Satıcının Sorumluluğu ve İspat Yükü:</strong><span style="font-weight: 400;"> Ayıplı maldan sorumluluk,
              tüketicinin korunmasına ilişkin yasa ile ayrıntılı şekilde düzenlenmiştir. Satıcı, maldaki ayıbı gidermek veya
              tüketicinin tercih edeceği çözümü sağlamakla yükümlüdür. Kanun, tüketiciyi ispat yükü konusunda da koruyucu bir
              yaklaşım benimsemiştir. </span><strong>Malın tesliminden itibaren 6 ay içinde ortaya çıkan ayıpların, teslim anında
              mevcut olduğu karine olarak kabul edilir</strong><span style="font-weight: 400;">. Bu, hukuki olarak şu anlama
              gelir: bir ürün satın aldıktan sonraki ilk altı ay içinde bir kusur ortaya çıkarsa, ürünün zaten bozuk halde teslim
              edildiği varsayılır ve </span><strong>ayıpsız olduğunu ispat etme yükü satıcıya aittir</strong><span
              style="font-weight: 400;">. Satıcı bu süre içerisindeki bir arızanın sonradan, tüketici hatasıyla oluştuğunu iddia
              ederse bunu kanıtlama yükümlülüğündedir. Bu düzenleme, özellikle satın alma sonrası kısa sürede ortaya çıkan
              sorunlarda tüketiciyi uzun ispat süreçlerinden korumayı amaçlar. </span><strong>6 aylık süreden sonra</strong><span
              style="font-weight: 400;"> ortaya çıkan ayıplarda ise genel ispat kuralı geçerli hale gelir; yani artık ayıbın malın
              tesliminde zaten var olduğunu ispat etmek kural olarak tüketiciye düşebilir (satıcı bu aşamada ayıbın sonradan
              oluştuğunu ileri sürebilir). Bununla birlikte, ürünün niteliği veya ayıbın mahiyeti gereği bu karinenin
              uygulanamayacağı istisnai durumlar olabileceği de kanunda belirtilmiştir.</span></p>
          <h2><strong>Ayıbın İhbar Edilmesi (Bildirim Süreci)</strong></h2>
          <p><strong>Ayıbın fark edilmesi ve bildirim:</strong><span style="font-weight: 400;"> Tüketici, teslim aldığı malda veya
              ifa edilen hizmette bir ayıp tespit ettiğinde bunu </span><strong>gecikmeksizin satıcıya bildirmelidir</strong><span
              style="font-weight: 400;">. Mevzuatta güncel olarak belirli bir gün sayısı verilmemiş olsa da ihbarın
            </span><strong>“uygun süre” içinde yapılması</strong><span style="font-weight: 400;"> gerekir; zira Türk Borçlar
              Kanunu m.223 gereği alıcı (tüketici), malı olağan akış içinde mümkün olan en kısa sürede gözden geçirmek ve bir ayıp
              gördüğünde durumu </span><strong>derhâl satıcıya bildirmekle</strong><span style="font-weight: 400;"> yükümlüdür.
            </span><strong>Tüketici ayıbı fark ettiği anda makul bir süre içinde satıcıya bildirimi yapmazsa</strong><span
              style="font-weight: 400;">, mal veya hizmeti ayıplı haliyle kabul etmiş sayılması ve ileride haklarını kaybetmesi
              riski doğabilir.</span></p>
          <p><strong>İhbarın şekli ve sonuçları:</strong><span style="font-weight: 400;"> Ayıp ihbarı, ispat açısından yazılı
              yapılması tercih edilen bir bildirimdir (örneğin ihtarname, e-posta veya noter bildirimi gibi yöntemlerle). Kanun
              ihbar için özel bir şekil şartı öngörmemiştir; önemli olan, tüketicinin ayıbı satıcıya ilettiğini
              kanıtlayabilmesidir. Zamanında yapılan </span><strong>ihbar</strong><span style="font-weight: 400;">, tüketicinin
              aşağıda değinilen seçimlik haklarını güvence altına alır. Satıcı, kendisine ayıp bildirildiğinde, tüketicinin
              talebine kayıtsız kalmamalı ve gerekli çözümü sağlamak için harekete geçmelidir. Aksi takdirde, tüketici hukuki
              süreç başlatarak haklarını arayabilir. İhbar üzerine satıcının cevabı veya tutumu da ileride olası bir uyuşmazlıkta
              önem kazanacaktır; örneğin, satıcının ayıbı kabul edip giderme yoluna gitmesi durumu mahkeme veya hakem heyeti
              sürecine gerek kalmadan çözebilir. Sonuç olarak, </span><strong>tüketicinin ayıbı bildirimi</strong><span
              style="font-weight: 400;">, hem uyuşmazlığın hızlı çözümünü kolaylaştıran hem de gerekli olduğu takdirde tüketicinin
              dava yoluna gitmesinin önünü açan kritik bir adımdır.</span></p>
          <h2><strong>Tüketicinin Hakları ve Zamanaşımı Süreleri</strong></h2>
          <p><strong>Ayıplı mala karşı seçimlik haklar:</strong><span style="font-weight: 400;"> Bir malın ayıplı olduğunun
              anlaşılması durumunda tüketiciye kanunen dört temel </span><strong>seçimlik hak</strong><span
              style="font-weight: 400;"> tanınmıştır (TKHK m.11):</span></p>
          <ul>
            <li style="font-weight: 400;"><strong>Sözleşmeden dönme:</strong><span style="font-weight: 400;"> Tüketici, malı iade
                etmeye hazır olduğunu bildirerek satış sözleşmesini feshedebilir. Bu durumda ödediği bedelin tamamını geri alma
                hakkına sahiptir.</span></li>
            <li style="font-weight: 400;"><strong>Bedel indirimi:</strong><span style="font-weight: 400;"> Malı elinde tutup ayıp
                oranında satış bedelinden indirim talep edebilir. Örneğin, ayıplı ürün değeri düşmüşse, ödediği fiyatın bir
                kısmının iadesini isteyebilir.</span></li>
            <li style="font-weight: 400;"><strong>Ücretsiz onarım:</strong><span style="font-weight: 400;"> Malın,
              </span><strong>tüm masrafları satıcıya ait olmak üzere</strong><span style="font-weight: 400;"> ücretsiz tamir
                edilmesini talep edebilir. Eğer ayıp çok masraflı bir onarım gerektirmiyorsa satıcı bu seçeneği yerine
                getirmelidir.</span></li>
            <li style="font-weight: 400;"><strong>Ayıpsız misli ile değişim:</strong><span style="font-weight: 400;"> İmkan varsa
                malın </span><strong>ayıpsız bir yenisiyle değiştirilmesini</strong><span style="font-weight: 400;"> isteyebilir.
                Örneğin, bozuk çıkan bir telefonu yenisiyle değiştirme talebi bu kapsamdadır.</span></li>
          </ul>
          <p><span style="font-weight: 400;">Tüketici bu haklardan dilediğini </span><strong>tek taraflı beyanla</strong><span
              style="font-weight: 400;"> seçip satıcıdan talep edebilir; satıcı da tüketicinin tercihini yerine getirmekle
              yükümlüdür. Ayrıca, ayıplı mal nedeniyle tüketicinin uğradığı başka zararlar (örneğin ayıp yüzünden oluşan maddi
              kayıplar) varsa, seçimlik haklara ek olarak </span><strong>tazminat talep etme</strong><span
              style="font-weight: 400;"> hakkı da saklıdır. </span></p>
          <p><strong>Zamanaşımı süreleri:</strong><span style="font-weight: 400;"> Tüketici, yukarıdaki haklarını sonsuza dek
              kullanamaz; kanun, hakların kullanılabileceği belli </span><strong>zamanaşımı süreleri</strong><span
              style="font-weight: 400;"> öngörmüştür. Genel kural olarak, </span><strong>ayıplı maldan doğan talepler, malın
              teslim tarihinden itibaren 2 yıl içinde zamanaşımına uğrar</strong><span style="font-weight: 400;">. Yani tüketici,
              ayıbı sonradan fark etmiş olsa bile teslimden itibaren iki yıl geçtikten sonra satıcıya karşı bu ayıptan dolayı
              hukuken bir talepte bulunamaz. </span><strong>Konut veya tatil amaçlı taşınmaz mal</strong><span
              style="font-weight: 400;"> satışlarında ise bu süre daha uzundur: Taşınmazın tesliminden itibaren </span><strong>5
              yıl</strong><span style="font-weight: 400;"> olarak belirlenmiştir. Örneğin, yeni aldığınız bir evdeki kusurlar için
              5 yıl boyunca yasal haklarınızı kullanabilirsiniz. </span><strong>İkinci el (kullanılmış) mal
              satışlarında</strong><span style="font-weight: 400;"> ise satıcının sorumluluk süresi, kanunun izin verdiği ölçüde
              kısaltılabilmekle birlikte </span><strong>en az 1 yıl</strong><span style="font-weight: 400;"> olmalıdır; ikinci el
              konut ve tatil amaçlı taşınmazlarda da </span><strong>en az 3 yıl</strong><span style="font-weight: 400;"> olarak
              uygulanır. Bu hükümler, tüketicinin kullanılmış mal alımlarında dahi tamamen korumasız kalmamasını sağlar.</span>
          </p>
          <p><strong>Zamanaşımı ve istisnalar:</strong><span style="font-weight: 400;"> Belirtilen 2 ve 5 yıllık süreler, kanunda
              aksine bir hüküm yoksa veya tarafların anlaşmasıyla (örneğin ek garanti verilmesi gibi) uzatılmamışsa uygulanır.
              Örneğin, üretici firma 5 yıl garanti verdiyse, tüketici 5 yıl boyunca ayıp nedeniyle hak talep edebilir. Öte yandan,
            </span><strong>ayıbın satıcı veya sağlayıcı tarafından ağır kusur veya hile ile gizlenmesi</strong><span
              style="font-weight: 400;"> durumunda, tüketici aleyhine zamanaşımı süresi işlemez. Bu, hukukumuzda dürüstlük
              kuralının bir yansımasıdır: Böyle bir durumda tüketici 2 yıl geçse bile hakkını ileri sürebilir; doktrinde TBK
              göndermesiyle genel zamanaşımı süresi 10 yıl olarak uygulanması kabul görmüştür. Örneğin, satıcı aracın ciddi bir
              kazası olduğunu bilerek gizlemişse yahut üreticiden kaynaklı gizli bir üretim hatası varsa ve bu durum 3. yılda
              ortaya çıkarsa, tüketici yine de gerekli hukuki yollara başvurabilir.</span></p>
          <h2><strong>Uyuşmazlıkların Çözüm Yolları: Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri</strong></h2>
          <p><span style="font-weight: 400;">Tüketici ile satıcı/sağlayıcı arasındaki ayıplı mal veya hizmet kaynaklı
              uyuşmazlıklarda </span><strong>Tüketici Hakem Heyetleri</strong><span style="font-weight: 400;"> ve
            </span><strong>Tüketici Mahkemeleri</strong><span style="font-weight: 400;"> özel olarak görevlendirilmiştir. Aşağıda,
              bu mercilere başvuru usulleri, parasal sınırlar ve yargı yolları açıklanmıştır.</span></p>
          <p><strong>Tüketici Hakem Heyetleri:</strong><span style="font-weight: 400;"> Tüketici hakem heyetleri, belirli bir
              parasal sınırın altındaki uyuşmazlıklarda </span><strong>zorunlu</strong><span style="font-weight: 400;"> olarak
              başvurulması gereken, mahkeme dışı çözüm mercileridir. 2025 yılı için bu parasal sınır </span><strong>değeri 149.000
              TL’nin altındaki uyuşmazlıklar</strong><span style="font-weight: 400;"> olarak belirlenmiştir. Her yıl bu tutar,
              yeniden değerleme oranına göre güncellenmektedir. Bu uyuşmazlıklarda ilk olarak il veya ilçe tüketici hakem heyetine
              başvurmak gerekmektedir. Hakem heyetlerine başvuruda harcı ya da yargılama masrafı yoktur, heyet bünyesindeki
              bilirkişi incelemeleri vs. tüketiciden ücret talep edilmeksizin gerçekleştirilir. Heyet, başvuruyu aldıktan sonra
              tarafların sunduğu delilleri inceleyerek </span><strong>bağlayıcı bir karar</strong><span style="font-weight: 400;">
              verir. Bu karar, adeta mahkeme ilamı hükmünde olup tarafları bağlar </span></p>
          <p><span style="font-weight: 400;">Taraflar, hakem heyeti kararına </span><strong>iki hafta içinde</strong><span
              style="font-weight: 400;"> tüketici mahkemesi nezdinde itiraz edebilirler. Bu itiraz, tüketici mahkemesinde bir dava
              gibi görülür ve mahkeme, gerekli görürse ek delil inceleyerek veya dosya üzerinden inceleme ile bir karar verir.
              Hakem heyeti kararı, süresinde itiraz edilmezse kesinleşir ve ilam (mahkeme ilâmı) gibi icra edilebilir hale gelir.
              İtiraz edilip tüketici mahkemesine taşındığında, mahkemenin vereceği karar </span><strong>kesin</strong><span
              style="font-weight: 400;"> olup üst mahkemeye götürülemez. Hakem heyeti süreci, tüketicilerin hızlı, masrafsız ve
              uzmanlaşmış bir çözüm mercisiyle sorunlarını halletmelerine olanak tanır.</span></p>
          <p><strong>Tüketici Mahkemeleri ve Arabuluculuk:</strong><span style="font-weight: 400;"> Uyuşmazlık tutarı hakem heyeti
              sınırının </span><strong>üzerinde</strong><span style="font-weight: 400;"> ise (2025 itibarıyla
              1</span><strong>49.000 TL ve üzeri</strong><span style="font-weight: 400;"> değerli uyuşmazlıklar) artık doğrudan
            </span><strong>Tüketici Mahkemesi</strong><span style="font-weight: 400;">’nde dava açılması gerekir. Tüketici
              mahkemeleri, tüketici işlemleri ve ilişkileri konusunda uzmanlaşmış yargı mercileridir. Ancak, </span><strong>dava
              açmadan önce arabulucuya başvurma zorunluluğu (dava şartı arabuluculuk)</strong><span style="font-weight: 400;">
              getirilmiştir. Buna göre, eğer uyuşmazlık miktarı doğrudan tüketici mahkemesine gitmeyi gerektiriyorsa, tüketici
              öncelikle arabuluculuk kurumu aracılığıyla satıcı/sağlayıcı ile anlaşma yoluna gitmelidir. Arabuluculuk süreci,
              genellikle hızlı (başvuru tarihinden itibaren 3 hafta + 1 hafta uzatma süresi içinde sonuçlanır) ve ücretsizdir;
              anlaşma sağlanamazsa arabulucu bunun bir tutanağını verir. </span><strong>Arabuluculuk sonucunda çözüm
              olmazsa</strong><span style="font-weight: 400;">, tüketici bu tutanakla birlikte tüketici mahkemesinde davasını
              açabilir. Tüketici mahkemesinde yargılama basit usulle yürütülür. Tüketicilerin açtıkları davalar harçtan muaftır.
              Yargılama giderleri davacı tarafından ödense de dava sonunda davayı kaybeden tarafa yüklenir. Mahkeme, delilleri
              değerlendirip uyuşmazlığı karara bağlar. </span></p>
          <p><span style="font-weight: 400;">Tüketici mahkemesi kararlarına karşı; uyuşmazlık değerine göre 40.000 TL üzerinde ise
              istinaf (bölge adliye mahkemesi) ve istinaf sonrasında da 544.000 TL üzerinde temyiz (Yargıtay) kanun yolları
              açıktır. Ancak uyuşmazlık konusu 40.000 TL ve altında olan davalar ile hakem heyeti itirazlarında tüketici
              mahkemesinin verdiği kararlar kesindir.</span></p>
          <p> </p>
    `,
  },
];
