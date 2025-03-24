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
    coverImage: "/assets/zamanasimi-hukuk.jpg", // Eğer kapak resmi eklemek isterseniz
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
    coverImage: "/assets/tuketici-hukuku.jpg", // Eğer kapak resmi eklemek isterseniz
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
  // 3 numaralı yeni post
  {
    id: 3,
    title: "İşçi Alacakları Davası",
    tags: ["işçi alacakları", "iş hukuku", "iş sözleşmesinin feshi"],
    author: {
      name: "Av. Mustafa Kahraman",
      profilePic: "/assets/cubbeli-vesika.jpg",
    },
    createdAt: "2025-03-24T09:00:00Z",
    updatedAt: "2025-03-24T10:30:00Z",
    coverImage: "/assets/isci-hukuk.jpg", // Eğer kapak resmi eklemek isterseniz
    excerpt:
      "İşçi alacakları davası, bir iş sözleşmesinin sona ermesiyle birlikte işçinin hak etmiş olduğu ücret, tazminat ve diğer parasal haklarını talep edebildiği hukuk davasıdır.",
    content: `
      <h1><strong>İşçi Alacakları Davası Nedir ve Hangi Durumlarda Açılır?</strong></h1>
      <p><span style="font-weight: 400;">İşçi alacakları davası, bir iş sözleşmesinin sona ermesiyle birlikte işçinin hak
          etmiş olduğu ücret, tazminat ve diğer parasal haklarını talep edebildiği hukuk davasıdır. Bu dava genellikle iş
          sözleşmesinin feshi sonrasında gündeme gelir. İş sözleşmesi ister işveren ister işçi tarafından feshedilsin, eğer
          fesih sonucunda işçinin hakları ödenmemişse işçi alacakları davası açılabilir. Ancak işçinin hangi hallerde bu
          hakları talep edebileceği, fesih türüne göre değişir.</span></p>
      <p><strong>İşveren Feshettiğinde:</strong><span style="font-weight: 400;"> İşveren işçiyi haksız veya geçersiz bir
          nedenle işten çıkarırsa (örneğin iş kanununda sayılan haklı nedenler olmaksızın), işçi kıdem tazminatı, ihbar
          tazminatı gibi feshe bağlı tazminatlarını ve varsa diğer birikmiş alacaklarını talep edebilir. İşverenin
        </span><strong>haklı nedenle</strong><span style="font-weight: 400;"> (örneğin işçinin </span><em><span
            style="font-weight: 400;">ahlak ve iyi niyet kurallarına aykırı davranışı</span></em><span
          style="font-weight: 400;"> gibi 4857 sayılı İş Kanunu m.25/2’de sayılan haller) feshetmesi durumunda ise işçi kıdem
        </span><strong>ve ihbar tazminatı alamaz</strong><span style="font-weight: 400;">, sadece ödenmemiş ücret, izin ücreti
          gibi hak etmiş olduğu alacaklarını isteyebilir. İşveren fesih bildirimi yapmadan işçiyi çıkarmışsa (ihbar süresine
          uymamışsa), bu durumda işçi ihbar tazminatı da talep edebilir; işverenin bunu ödemediğini ispat yükü
          işverendedir.</span></p>
      <p><strong>İşçi Feshettiğinde:</strong><span style="font-weight: 400;"> Kural olarak kendi isteğiyle (istifa ederek)
          ayrılan işçi kıdem tazminatı </span><strong>alamaz</strong><span style="font-weight: 400;">. Ancak kanun işçiye bazı
          istisnai durumlarda </span><strong>haklı nedenle derhal fesih</strong><span style="font-weight: 400;"> imkânı tanır.
          İşçi, İş Kanunu m.24’de belirtilen sağlık sebepleri, ahlak ve iyi niyet kurallarına aykırı haller veya benzeri haklı
          sebeplerle sözleşmesini feshederse, bu </span><strong>haklı fesih</strong><span style="font-weight: 400;"> sayesinde
          kıdem tazminatına hak kazanır. Örneğin işveren ücretleri kanuna veya sözleşmeye uygun şekilde ödemiyorsa (ücretin
          gününde ödenmemesi de buna dahildir), işçi noterden bildirim yaparak sözleşmeyi haklı nedenle feshedip kıdem
          tazminatını talep edebilir. Yargıtay kararları da </span><strong>ücretin zamanında ödenmemesini</strong><span
          style="font-weight: 400;">, işçiye haklı fesih hakkı veren önemli bir neden olarak kabul etmektedir. İşçi haklı
          nedenle feshettiğinde ihbar süresine uyması gerekmez ve ihbar tazminatı talep edemez (zira ihbar tazminatı,
          sözleşmeyi fesheden tarafa değil, karşı tarafa ödenir).</span></p>
      <p><span style="font-weight: 400;">Bunun dışında kanundan doğan bazı özel hallerde işçi kendi isteği ile ayrıldığı halde
          kıdem tazminatı alabilir. Örneğin kadın işçi evlilik tarihinden itibaren bir yıl içinde evlilik nedeniyle işten
          ayrılırsa kıdem tazminatına hak kazanır; yine erkek işçi muvazzaf askerlik hizmeti nedeniyle ayrılırsa veya işçi
          emeklilik şartlarını sağladığı için ayrılırsa kıdem tazminatı talep edebilir. İşçinin ölümü halinde de kıdem
          tazminatı hakkı doğar ve bu tazminat yasal mirasçılarına ödenir (mirasçılar gerektiğinde dava açabilir).</span></p>
      <p><span style="font-weight: 400;">Özetle, </span><strong>işverenin feshi</strong><span style="font-weight: 400;">
          haksız/geçersiz ise veya </span><strong>işçinin feshi</strong><span style="font-weight: 400;"> haklı nedene
          dayanıyorsa, işçi kıdem tazminatı başta olmak üzere haklarını talep edebilir. İşçinin
        </span><strong>istifa</strong><span style="font-weight: 400;"> gibi haklı nedene dayanmayan kendi fesihlerinde ise
          yalnızca ödenmemiş ücret, izin ücreti gibi alacaklarını isteyebilir; kıdem ve ihbar tazminatı alamaz.</span></p>
      <h1><strong>İşçi Alacağı Davasını Kimler Açabilir?</strong></h1>
      <p><span style="font-weight: 400;">İşçilik alacaklarını talep etmek amacıyla dava açma hakkı öncelikle işçiye aittir. İş
          sözleşmesiyle çalışan (mavi yaka ya da beyaz yaka fark etmeksizin) her işçi, yukarıda belirtilen şartlar oluştuğunda
          işvereninden alacaklarını talep etmek için dava açabilir. İşçinin vefatı halinde, kanuni mirasçıları (eş, çocuklar
          gibi) işçinin hak ettiği ancak ödenmemiş bulunan tüm işçilik alacaklarını (örneğin kıdem tazminatı, son aya ait
          ücret vb.) talep etmek üzere dava açabilir.</span></p>
      <p><span style="font-weight: 400;">İşçilik alacakları davası, bireysel bir dava türüdür; genellikle sendika gibi üçüncü
          kişiler doğrudan dava açamaz. Ancak işçi, bir avukata vekalet verebileceği gibi, miras bırakan işçinin mirasçıları
          da kendi adlarına dava açarken ölen işçiyi temsilen hareket ederler. Eğer işçi alacağı birden fazla işçiyi
          ilgilendiren toplu bir uyuşmazlık konusu ise, her işçi kendi alacağı için ayrı dava açmalıdır (veya usul ekonomisi
          açısından bir araya gelerek birlikte dava açabilirler).</span></p>
      <p><span style="font-weight: 400;">Bazı durumlarda işçi alacakları, iflas eden işverenin masasına kayıt ettirilerek veya
          Sosyal Güvenlik Kurumu aracılığıyla (örneğin SGK’nın rücuen tahsil etmesi gibi) dolaylı yollarla da talep
          edilebilir. Ancak klasik anlamda </span><strong>işçi alacağı davasını bizzat alacağı olan işçi veya onun yasal
          halefleri</strong><span style="font-weight: 400;"> açabilir.</span></p>
      <h1><strong>İşçi Alacakları Davası Açmak İçin Gerekli Şartlar (Arabuluculuk Şartı)</strong></h1>
      <p><span style="font-weight: 400;">2018 yılından bu yana, işçilik alacaklarıyla ilgili dava açmadan önce
        </span><strong>arabulucuya başvurma zorunluluğu</strong><span style="font-weight: 400;"> getirilmiştir. 7036 sayılı İş
          Mahkemeleri Kanunu uyarınca, “işçi veya işveren alacağı ve tazminatı ile işe iade talebiyle açılan davalarda”
        </span><strong>dava şartı</strong><span style="font-weight: 400;"> olarak öncelikle arabuluculuğa başvurulmuş olması
          gerekir. Yani işçi alacakları konusunda dava açmadan önce, arabuluculuk süreci tamamlanmış olmalıdır; aksi halde
          mahkeme dava şartı yokluğundan davayı usulden reddedecektir.</span></p>
      <p><strong>Zorunlu arabuluculuk</strong><span style="font-weight: 400;"> süreci, işçi işveren uyuşmazlıklarında
          genellikle şu şekilde işler: İşçi, işverenin merkezinin veya işyerinin bulunduğu yer arabuluculuk merkezine
          başvurarak arabulucu talep eder. Arabulucu, başvuru tarihinden itibaren genellikle </span><strong>3 hafta (gerekirse
          +1 hafta)</strong><span style="font-weight: 400;"> içinde tarafları toplantıya çağırarak görüşmeleri yürütür.
          Taraflar anlaşırsa bir </span><strong>anlaşma tutanağı</strong><span style="font-weight: 400;"> düzenlenir;
          anlaşamazlarsa </span><strong>son tutanak</strong><span style="font-weight: 400;"> (anlaşmama tutanağı) düzenlenir.
          İşçi, anlaşma sağlanamadığına dair bu son tutanak ile birlikte mahkemeye dava açabilir. Arabulucuya başvuru ve
          görüşme sürecinde geçen süre, zamanaşımı bakımından durur, bu da işçinin hak kaybını önler.</span></p>
      <p><span style="font-weight: 400;">Arabuluculuk sürecinin istisnası, </span><strong>iş kazası ve meslek hastalığından
          kaynaklı maddi-manevi tazminat davalarıdır</strong><span style="font-weight: 400;">; bu tür davalar arabulucuya tabi
          değildir. Onun dışında kıdem, ihbar, fazla mesai, yıllık izin, ücret, UBGT ücreti gibi bütün işçilik alacağı ve
          tazminatı konularında arabuluculuk dava şartıdır.</span></p>
      <p><strong>Arabuluculukta Anlaşma Sağlanırsa:</strong><span style="font-weight: 400;"> Taraflar arabulucuda anlaşır ve
          alacaklar konusunda protokol imzalarsa, bu anlaşma belgesi ilam niteliğinde sayılır. İşveren daha sonra bu belgede
          kararlaştırılan ödemeleri yapmazsa, işçi bu belgeyi icra dairesine vererek doğrudan </span><strong>ilamlı
          icra</strong><span style="font-weight: 400;"> yoluna başvurabilir. Bu durumda yeniden dava açmaya gerek
          kalmaz.</span></p>
      <p><strong>Arabuluculukta Anlaşma Sağlanamazsa:</strong><span style="font-weight: 400;"> Arabulucunun düzenlediği
          anlaşmama tutanağı ile işçi </span><strong>davasını iş mahkemesinde açar</strong><span style="font-weight: 400;">.
          Dava açmak için arabuluculuk son tutanağı tarihinden itibaren 2 haftalık bir süre öngörülmüştür (özellikle işe iade
          davalarında bu süre kritik önemdedir). Arabuluculuk dava şartına uyulduktan sonra, dava dilekçesi hazırlanarak
          görevli mahkemede dava açılır.</span></p>
      <h1><strong>İşçi Alacakları Davasında Görevli ve Yetkili Mahkemeler</strong></h1>
      <p><span style="font-weight: 400;">İşçilik alacakları davalarında görevli mahkeme, </span><strong>iş
          mahkemeleridir</strong><span style="font-weight: 400;">. İş mahkemeleri, işçi ile işveren arasındaki iş
          sözleşmesinden doğan her türlü uyuşmazlıkta uzman mahkeme olarak görevlendirilmiştir (4857 sayılı İş Kanunu m.5;
          7036 sayılı Kanun m.5). Eğer uyuşmazlığın bulunduğu yerde ayrı bir iş mahkemesi yoksa, görev Asliye Hukuk Mahkemesi
          tarafından iş mahkemesi sıfatıyla yürütülür. Dolayısıyla, davanın açılacağı yerde iş mahkemesi kurulmamışsa, dava
          dilekçesi o yer asliye hukuk mahkemesine sunulur ancak yargılama usulü iş mahkemesi usulüne göre ilerler.</span></p>
      <p><strong>Yetkili mahkeme</strong><span style="font-weight: 400;"> konusunda, iş mahkemeleri kanunu ve Hukuk
          Muhakemeleri Kanunu özel yetki kuralları öngörmüştür. İşçilik alacağı davalarında genel yetki kuralı olarak davalı
          işverenin yerleşim yeri mahkemesi yetkili olmakla birlikte, </span><strong>işçinin işini yaptığı yer
          mahkemesi</strong><span style="font-weight: 400;"> de yetkilidir. Bu, uygulamada işçinin çalıştığı işyerinin
          bulunduğu yer mahkemesi anlamına gelir. Örneğin işverenin merkezi İstanbul’da ancak işçinin çalıştığı işyeri
          Kocaeli’de ise, işçi davasını İstanbul’da veya Kocaeli’de açmakta serbesttir. Yargıtay da işçinin fiilen çalıştığı
          işyerinin bulunduğu yerin, işçilik alacakları davalarında yetkili kabul edilmesi gerektiğini belirtmektedir.</span>
      </p>
      <p><span style="font-weight: 400;">Buna ek olarak, HMK m.10 gereğince sözleşmenin ifa edileceği yer mahkemesi de yetkili
          sayılır. Ücret alacağı davalarında ifa yeri, ücretin ödenmesi gereken yerdir (genellikle işçinin maaşının yattığı
          banka şubesinin yeri de ifa yeri sayılabilir). Bu da işçinin ikametgahında dava açabilmesine olanak tanıyabilir.
          Uygulamada en pratik yol, </span><strong>işyerinin bulunduğu yer mahkemesinde</strong><span
          style="font-weight: 400;"> davayı açmaktır.</span></p>
      <p><span style="font-weight: 400;">Özetle: Görevli mahkeme </span><strong>İş Mahkemesi</strong><span
          style="font-weight: 400;">, yetkili mahkeme ise </span><strong>işverenin merkezinin veya işçinin çalıştığı işyerinin
          bulunduğu yer iş (veya asliye) mahkemesidir</strong><span style="font-weight: 400;">.</span></p>
      <h1><strong>İşçi Alacaklarının Türleri</strong></h1>
      <p><span style="font-weight: 400;">İşçi alacakları denince, işçinin çalışması karşılığında hak kazandığı tüm parasal
          haklar anlaşılır. Bunlar, </span><em><span style="font-weight: 400;">iş sözleşmesinin sona ermesine bağlı
            olanlar</span></em><span style="font-weight: 400;"> ve </span><em><span style="font-weight: 400;">devam eden
            çalışma sırasında da talep edilebilenler</span></em><span style="font-weight: 400;"> olarak ikiye
          ayrılabilir.</span></p>
      <p><span style="font-weight: 400;">Kıdem, ihbar, yıllık izin ücreti, kötü niyet tazminatı gibi işçi alacaklarının bir
          kısmı iş sözleşmesinin sona ermesiyle doğar. </span></p>
      <p><span style="font-weight: 400;">Ücret, fazla mesai, hafta tatili, UBGT ücreti, iş sözleşmesi yada toplu iş
          sözleşmesinden doğan prim, ikramiye, sosyal hak ödemeleri (yakacak yardımı, giyim yardımı vb.) gibi bazı alacaklar
          ise iş ilişkisi devam ederken de talep edilebilirdir ancak uygulamada genelde ilişki bittikten sonra topluca talep
          konusu olurlar. </span></p>
      <p><span style="font-weight: 400;">İşçi alacakları davası açılırken, </span><strong>belirsiz alacak davası</strong><span
          style="font-weight: 400;"> olarak açılması sık rastlanan bir yöntemdir; böylece işçi hesaplayamadığı alacakların
          miktarını dava içinde bilirkişi yardımıyla netleştirip talebini artırabilir.</span></p>
      <h1><strong>İşçi Alacaklarında Zamanaşımı Süreleri</strong></h1>
      <p><span style="font-weight: 400;">İşçi alacaklarında zamanaşımı, alacak hakkının belli bir süre geçtikten sonra dava
          edilebilme niteliğini yitirmesidir. 25 Ekim 2017 tarihinde yürürlüğe giren 7036 sayılı Kanun ile pek çok işçilik
          alacağının zamanaşımı süreleri 5 yıla indirilmiştir. Bu tarihten </span><strong>önce</strong><span
          style="font-weight: 400;"> sona eren iş sözleşmelerinden doğan bazı alacaklar için eski 10 yıllık süre uygulanmaya
          devam ederken, bu tarihten sonra sona erenler için yeni 5 yıllık süreler geçerlidir. </span></p>
      <p><span style="font-weight: 400;">Zamanaşımı, işveren tarafından mahkemede </span><strong>def’i olarak ileri
          sürülmedikçe</strong><span style="font-weight: 400;"> hakim tarafından re’sen dikkate alınmaz. Yani üzerinden 5
          yıldan fazla süre geçmiş bir alacak için dava açılsa bile, işveren “zamanaşımı itirazında” bulunmazsa, hakim alacağı
          hükmedebilir. Ancak uygulamada işverenler genellikle zamanaşımı defi’ni ileri sürerler. Bir de </span><strong>kısmi
          dava</strong><span style="font-weight: 400;"> açılması halinde, sadece dava edilen kısım için zamanaşımı kesilir;
          davaya konu edilmeyen kısım için süre işlemeye devam eder. Bu nedenle işçilik alacaklarında tüm alacak kalemlerini
          ve dönemlerini kapsayacak şekilde talepte bulunmak önemlidir.</span></p>
      <p><span style="font-weight: 400;">İşçi alacaklarında zamanaşımı sürelerine ilişkin daha detaylı içerikler için web
          sitemizi ve sosyal medya hesaplarımızı takip edebilirsiniz.</span></p>
      <h1><strong>İşçi Alacaklarında Faiz Türü ve Faiz Başlangıç Tarihleri</strong></h1>
      <p><span style="font-weight: 400;">İşçilik alacaklarında farklı faiz türleri uygulanabilmektedir. Genel olarak
        </span><strong>4857 sayılı İş Kanunu m.34</strong><span style="font-weight: 400;">, gününde ödenmeyen işçi ücretleri
          için bankaların </span><strong>mevduata uyguladığı en yüksek faiz oranının</strong><span style="font-weight: 400;">
          uygulanacağını emretmiştir. Yargıtay da işçilik alacaklarında kanunda belirtilen bu “en yüksek mevduat faizinin”,
          sözleşmede veya dava dilekçesinde ayrıca belirtilmemiş olsa bile uygulanması gerektiğini içtihat etmiştir. Bu
          nedenle kıdem tazminatı, ücret, fazla mesai, izin ücreti gibi </span><em><span style="font-weight: 400;">parasal
            işçi alacaklarında</span></em><span style="font-weight: 400;"> temerrüt faizi olarak genellikle </span><strong>en
          yüksek mevduat faizi</strong><span style="font-weight: 400;"> işletilir. Aksi özel bir durum olmadıkça, ayrı bir
          düşük yasal faiz uygulanmaz. Örneğin Yargıtay bir kararında, dava dilekçesinde sadece “yasal faiz” istenmiş olsa
          bile işçilik alacağı için bunun iş kanunundan kaynaklanan </span><strong>en yüksek mevduat faizi</strong><span
          style="font-weight: 400;"> olarak anlaşılması gerektiğini belirtmiştir. Faiz başlangıcı ise alacak türüne göre
          değişir.</span></p>
      <p><strong>Örnek olarak:</strong><span style="font-weight: 400;"> Bir işçi Eylül ayında ödenmesi gereken maaşını
          alamamışsa ve 5 Ekim’de arabulucu başvurusu yapıp 20 Ekim’de anlaşamama tutanağı almışsa, Yargıtay’a göre işveren 20
          Ekim’de temerrüde düşmüş kabul edilir ve faiz o tarihten başlatılır. Kıdem tazminatı için ise fesih tarihi diyelim
          ki 1 Ekim ise, 2 Ekim’den itibaren faiz işler (30 günlük mevduat faizi). Faiz oranları dönemsel olarak Türkiye
          Cumhuriyet Merkez Bankası tarafından açıklanan mevduat faiz oranlarına göre tespit edilir. İşçilik alacaklarında
          uygulanacak faiz zaman aşımı bakımından da </span><strong>5 yıl</strong><span style="font-weight: 400;"> olup, asıl
          alacağa bağlı fer’i haktır (faizin kendisi ayrıca talep edilmezse dahi hakim tarafından resen hesaplanmaz, talep
          etmek gerekir).</span></p>
      <p><span style="font-weight: 400;">İşçi alacaklarında faize ilişkin daha detaylı içerikler için web sitemizi ve sosyal
          medya hesaplarımızı takip edebilirsiniz.</span></p>
      <h1><strong>İşçi Alacaklarında İspat Yükü ve Deliller</strong></h1>
      <p><span style="font-weight: 400;">İş davalarında ispat yükü, genel kural olan “iddia eden ispatlar” prensibine göre
          uyarlanmıştır ancak işçi lehine bazı kolaylıklar getirilmiştir. Her bir alacak kalemi için ispat yükünün kimde
          olduğu değişebilmektedir:</span></p>
      <p><span style="font-weight: 400;">İşçi alacağını doğuran olguları ortaya koymakla yükümlü iken, işveren ödemenin
          yapıldığını veya hakkın ortadan kalktığını ispatla yükümlüdür. Bu düzenleme, işçi-işveren arasındaki güç
          dengesizliğinden dolayı, zayıf durumda olan işçiyi korumak amacıyla geliştirilmiştir. </span></p>
      <p><span style="font-weight: 400;">İşçi alacaklarında ispat yüküne ilişkin daha detaylı içerikler için web sitemizi ve
          sosyal medya hesaplarımızı takip edebilirsiniz.</span></p>
      <h1><strong>İşçi Alacakları Davasında Kanun Yolları (İstinaf ve Temyiz)</strong></h1>
      <p><span style="font-weight: 400;">İş mahkemesinde görülen işçi alacağı davasında mahkeme kararını verdikten sonra,
          tarafların kanun yolu hakları vardır:</span></p>
      <p><strong>İstinaf (Bölge Adliye Mahkemesine Başvuru):</strong><span style="font-weight: 400;"> İlk derece iş
          mahkemesinin kararına karşı taraflar, kararın tebliğinden itibaren </span><strong>2 hafta</strong><span
          style="font-weight: 400;"> içinde bölge adliye mahkemesine (istinaf mahkemesine) başvurabilir. İstinaf, maddi
          vakıaları ve hukuku hem şekilde hem esas yönünden denetleyen ikinci derece yargı yoludur. Bölge adliye mahkemesi
          (BAM), dosyayı inceler; gerekli görürse duruşma yapabilir veya dosya üzerinden karar verebilir. BAM, ilk derece
          kararını hukuka uygun bulursa </span><strong>istinaf başvurusunu esastan reddeder</strong><span
          style="font-weight: 400;">; hukuka aykırılık tespit ederse kararı kaldırıp düzelterek yeni hüküm kurar veya
          yargılamada eksiklik varsa ilk derece kararını kaldırıp dosyayı yeniden yargılama yapılmak üzere geri gönderir.
          İşçilik alacağı davalarında istinaf sınırı oldukça düşüktür (2024 yılı için </span><strong>≈₺28.250</strong><span
          style="font-weight: 400;"> üzerindeki davalar istinafa tabidir), bu yüzden hemen her işçilik davası istinafa
          götürülebilir. BAM kararı, değeri belirli bir sınırı aşmayan davalar için </span><strong>kesin</strong><span
          style="font-weight: 400;"> olup temyize gidilemez; sınırı aşıyorsa temyiz edilebilir. (Örneğin 2024’te işçilik
          alacaklarında yaklaşık ₺378.000’ün altındaki uyuşmazlıklarda BAM kararı kesindir.)</span></p>
      <p><strong>Temyiz (Yargıtay’a Başvuru):</strong><span style="font-weight: 400;"> Bölge adliye mahkemesi kararına karşı,
          şartları mevcutsa, tebliğden itibaren </span><strong>2 hafta</strong><span style="font-weight: 400;"> içinde
          Yargıtay’a temyiz başvurusu yapılabilir. Yargıtay, hukuki denetim yapar; kural olarak olguları yeniden
          değerlendirmez, hukuka uygunluk inceler. Temyiz edilebilme sınırı her yıl yeniden belirlenir (2024 için BAM
          kararlarında </span><strong>₺78.630</strong><span style="font-weight: 400;"> ve üzeri işçilik alacakları kararları
          temyize tabidir, manevi tazminat gibi belirsiz değerli davalar hariç). Yargıtay, dosya üzerinde inceleme yaparak BAM
          kararını onayabilir veya bozabilir. </span><strong>Onama halinde</strong><span style="font-weight: 400;"> BAM kararı
          kesinleşir. </span><strong>Bozma halinde</strong><span style="font-weight: 400;"> dosya tekrar ilgili BAM veya ilk
          derece mahkemesine gider; bozma gerekçesine uyularak yeniden karar verilir veya önceki kararda direnilebilir.
          Direnme kararlarını Yargıtay Hukuk Genel Kurulu inceler.</span></p>
      <p><strong>Süreler:</strong><span style="font-weight: 400;"> İstinaf ve temyiz başvuruları için 2 haftalık süreler hak
          düşürücüdür. Bu nedenle işçi veya işveren, mahkeme kararını tebliğ aldıktan sonra 2 hafta içinde dilekçesini
          vermezse kararı kabul etmiş sayılır ve karar kesinleşir. İşe iade davaları gibi özel durumlarda temyiz mercii
          doğrudan Yargıtay olup süre 2 hafta olarak uygulanır (BAM’a gitmez). Kanun yollarına başvuru harç ve masrafları,
          haksız çıkan taraf üzerine bırakılabilir; ancak </span><strong>işçi lehine hükmedilen alacakların icra takibinde
          işçilerden harç alınmaz</strong><span style="font-weight: 400;"> (İş Mahk. K. m.5).</span></p>
      <p><strong>Kesinleşme ve İcra:</strong><span style="font-weight: 400;"> Mahkeme kararı istinaf/temyiz edilmeyerek ya da
          kanun yolu sonucunda </span><strong>kesinleştiğinde</strong><span style="font-weight: 400;">, işverenin kararda
          yazan tutarları genelde 30 gün içinde ödemesi beklenir. Ödeme yapılmazsa, işçi mahkemeden </span><strong>ilam (icra)
          harcırahını</strong><span style="font-weight: 400;"> alarak </span><strong>icra dairesine</strong><span
          style="font-weight: 400;"> başvurabilir. İş mahkemesi kararları, ilamlı icra yoluyla aynen bir mahkeme hükmü gibi
          zorla icra edilir. Bu kapsamda işçi, işverenin banka hesaplarına, taşınmazlarına, araçlarına haciz koydurabilir.
          İşveren temyize giderken </span><strong>karar düzeltme</strong><span style="font-weight: 400;"> gibi yollara da
          başvurabilir ancak işçilik davalarında karar düzeltme yolu 2022’de kaldırılmıştır.</span></p>
      <p><span style="font-weight: 400;">Sonuç olarak, işçi alacağı davasında ilk derece mahkemesi kararı kesin hüküm
          değildir; istinaf ve şartları sağlanırsa temyiz yoluyla denetime tabidir. İşçi açısından önemli olan, süreleri
          kaçırmadan haklarını takip etmektir. Kesinleşen alacaklar ödenmezse, devlet zoruyla tahsil mekanizmaları (icra-iflas
          hukuku yolları) devreye sokulabilir.</span></p>
      <p><br /><br /></p>
    `,
  },
];
