-- Blog yazıları için tablo oluşturma
CREATE TABLE public.blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT NOT NULL,
  category TEXT NOT NULL,
  tags TEXT[] NOT NULL,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  author UUID REFERENCES auth.users(id) DEFAULT auth.uid(),
  is_published BOOLEAN DEFAULT false NOT NULL
);

-- Etiketler için tablo oluşturma
CREATE TABLE public.blog_categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- RLS (Row Level Security) politikaları
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;

-- Herkes yayınlanmış blog yazılarını okuyabilir
CREATE POLICY "Herkes yayınlanmış blog yazılarını okuyabilir" 
ON public.blog_posts FOR SELECT 
USING (is_published = true);

-- Herkes kategorileri okuyabilir
CREATE POLICY "Herkes kategorileri okuyabilir" 
ON public.blog_categories FOR SELECT 
USING (true);

-- Sadece yetkilendirilmiş kullanıcılar blog yazısı ekleyebilir
CREATE POLICY "Yetkilendirilmiş kullanıcılar blog yazısı ekleyebilir" 
ON public.blog_posts FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = author);

-- Sadece yazının sahibi veya admin blog yazısını güncelleyebilir
CREATE POLICY "Yazının sahibi veya admin blog yazısını güncelleyebilir" 
ON public.blog_posts FOR UPDATE 
TO authenticated 
USING (auth.uid() = author OR auth.jwt() ->> 'role' = 'admin');

-- Sadece yazının sahibi veya admin blog yazısını silebilir
CREATE POLICY "Yazının sahibi veya admin blog yazısını silebilir" 
ON public.blog_posts FOR DELETE 
TO authenticated 
USING (auth.uid() = author OR auth.jwt() ->> 'role' = 'admin');

-- Sadece admin kategorileri yönetebilir
CREATE POLICY "Sadece admin kategorileri yönetebilir" 
ON public.blog_categories FOR ALL 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin');

-- Örnek kategoriler ekleme
INSERT INTO public.blog_categories (name, slug, description)
VALUES 
  ('Kişisel', 'kisisel', 'Kişisel deneyimler ve düşünceler'),
  ('Web Geliştirme', 'web-gelistirme', 'Web geliştirme ile ilgili makaleler'),
  ('Mobil Geliştirme', 'mobil-gelistirme', 'Mobil uygulama geliştirme ile ilgili makaleler'),
  ('Backend', 'backend', 'Backend geliştirme ile ilgili makaleler'),
  ('Frontend', 'frontend', 'Frontend geliştirme ile ilgili makaleler'),
  ('Yazılım Geliştirme', 'yazilim-gelistirme', 'Genel yazılım geliştirme konuları'),
  ('Kariyer', 'kariyer', 'Yazılım kariyeri ile ilgili makaleler'),
  ('Eğitim', 'egitim', 'Eğitim ve öğrenme ile ilgili makaleler'),
  ('Teknoloji', 'teknoloji', 'Genel teknoloji konuları');

-- Örnek blog yazıları ekleme
INSERT INTO public.blog_posts (
  title, 
  slug, 
  excerpt, 
  content, 
  image_url, 
  category, 
  tags, 
  published_at, 
  is_published
)
VALUES 
  (
    'Sencer Gök Kimdir?', 
    'sencer-gok-kimdir', 
    'Ankara doğumlu, Başkent Üniversitesi''nde okuyan ve modern web & mobil teknolojileri ile çalışan bir yazılım geliştiricisinin hikayesi.', 
    '<h2>Kişisel Bilgiler ve Eğitim</h2>
    <p>Merhaba! Ben Sencer Gök, 2002 yılında Ankara''da doğdum. Şu anda Başkent Üniversitesi Yönetim Bilişim Sistemleri bölümünde eğitimime devam ediyorum. Üniversite eğitimim boyunca, teorik bilgileri pratiğe dökme fırsatı buldum ve yazılım geliştirme alanında kendimi sürekli geliştirmeye odaklandım.</p>
    
    <h2>Profesyonel Yolculuğum</h2>
    <p>Ankara''da modern web ve mobil uygulamalar geliştiren tutkulu bir yazılım geliştiricisiyim. Kullanıcı deneyimini ön planda tutan, performanslı ve ölçeklenebilir çözümler üretmeye odaklanıyorum.</p>
    
    <p>Next.js, React, Supabase gibi modern web teknolojileri ve SwiftUI ile iOS uygulamaları geliştirme konusunda uzmanım. Hem frontend hem de backend tarafında çalışarak, projeleri baştan sona hayata geçirebiliyorum.</p>
    
    <h2>Teknoloji Yaklaşımım</h2>
    <p>Teknoloji dünyasında sürekli öğrenmeye ve kendimi geliştirmeye inanıyorum. Yeni teknolojileri keşfetmek ve bunları projelerimde uygulamak benim için her zaman heyecan verici. Özellikle kullanıcı deneyimini ön planda tutan, performanslı ve ölçeklenebilir çözümler üretmeye odaklanıyorum.</p>
    
    <h2>Projelerim ve Çalışma Alanlarım</h2>
    <p>Profesyonel kariyerimde çeşitli web ve mobil projeler geliştirdim. App Store''da yayınladığım iOS uygulamaları, kullanıcı dostu arayüzleri ve işlevsel özellikleriyle dikkat çekiyor. Web tarafında ise, modern JavaScript framework''leri kullanarak hızlı, güvenli ve SEO dostu uygulamalar geliştiriyorum.</p>
    
    <h2>Gelecek Hedeflerim</h2>
    <p>Gelecekte, yazılım geliştirme alanında daha da uzmanlaşmak ve özellikle yapay zeka ve makine öğrenimi teknolojilerini projelerime entegre etmek istiyorum. Ayrıca, bilgi ve deneyimlerimi paylaşmak için eğitim içerikleri oluşturmayı ve teknoloji topluluklarına katkıda bulunmayı hedefliyorum.</p>
    
    <p>Bu blog üzerinden, teknik bilgilerimi, proje deneyimlerimi ve yazılım dünyasındaki güncel gelişmelere dair görüşlerimi paylaşmaya devam edeceğim. Benimle iletişime geçmekten çekinmeyin!</p>', 
    '/blog/sencer-gok-kimdir.jpg', 
    'Kişisel', 
    ARRAY['Kişisel', 'Yazılım Geliştirici', 'Kariyer', 'Eğitim'], 
    '2023-05-01', 
    true
  ),
  (
    'Next.js ile Modern Web Uygulamaları Geliştirme', 
    'nextjs-ile-modern-web-uygulamalari-gelistirme', 
    'Next.js''in sunduğu özellikler ve modern web uygulamaları geliştirirken sağladığı avantajlar hakkında detaylı bir inceleme.', 
    '<h2>Next.js Nedir?</h2>
    <p>Next.js, React tabanlı web uygulamaları geliştirmek için kullanılan güçlü bir framework''tür. Vercel tarafından geliştirilen Next.js, React''in sunduğu komponent tabanlı geliştirme yaklaşımını, sunucu taraflı rendering (SSR), statik site oluşturma (SSG) ve API route''ları gibi özelliklerle birleştirir.</p>
    
    <h2>Next.js''in Avantajları</h2>
    <h3>1. Hibrit Rendering</h3>
    <p>Next.js, sayfa bazında SSR, SSG ve ISR (Incremental Static Regeneration) seçenekleri sunar. Bu, her sayfa için en uygun rendering stratejisini seçme esnekliği sağlar.</p>
    
    <h3>2. Otomatik Kod Bölümleme</h3>
    <p>Next.js, uygulamanızı otomatik olarak kod parçalarına böler, böylece kullanıcılar sadece ihtiyaç duydukları kodu indirir. Bu, sayfa yükleme sürelerini önemli ölçüde azaltır.</p>
    
    <h3>3. Dosya Tabanlı Routing</h3>
    <p>Next.js''in dosya tabanlı routing sistemi, karmaşık route yapılandırmalarını basitleştirir. pages/ veya app/ dizinindeki dosya yapısı, uygulamanızın URL yapısını belirler.</p>
    
    <h3>4. API Routes</h3>
    <p>Next.js, aynı proje içinde API endpoint''leri oluşturmanıza olanak tanır. Bu, full-stack uygulamalar geliştirmeyi kolaylaştırır.</p>
    
    <h2>Next.js ile Proje Başlatma</h2>
    <p>Next.js ile yeni bir proje başlatmak oldukça kolaydır. Aşağıdaki komutu kullanarak hızlıca bir Next.js projesi oluşturabilirsiniz:</p>
    
    <pre><code>npx create-next-app@latest my-next-app</code></pre>
    
    <p>Bu komut, en son Next.js sürümüyle bir proje iskeleti oluşturur ve gerekli bağımlılıkları yükler.</p>
    
    <h2>Next.js App Router vs Pages Router</h2>
    <p>Next.js 13 ile birlikte tanıtılan App Router, Pages Router''a göre daha fazla özellik ve esneklik sunar. App Router, React Server Components, Nested Layouts ve Streaming gibi modern özellikleri destekler.</p>
    
    <h2>Sonuç</h2>
    <p>Next.js, modern web uygulamaları geliştirmek için güçlü bir araçtır. SEO dostu yapısı, performans optimizasyonları ve geliştirici deneyimini iyileştiren özellikleriyle, hem küçük hem de büyük ölçekli projeler için mükemmel bir seçimdir.</p>
    
    <p>Gelecek yazılarımda, Next.js ile ilgili daha spesifik konuları ele alacağım. Sorularınız veya önerileriniz varsa, lütfen iletişime geçmekten çekinmeyin!</p>', 
    '/blog/nextjs-modern-web.jpg', 
    'Web Geliştirme', 
    ARRAY['Next.js', 'React', 'JavaScript', 'Frontend', 'Web Geliştirme', 'SSR', 'SSG'], 
    '2023-05-15', 
    true
  ),
  (
    'SwiftUI ile iOS Uygulama Geliştirme: Başlangıç Rehberi', 
    'swiftui-ile-ios-uygulama-gelistirme-baslangic-rehberi', 
    'SwiftUI kullanarak iOS uygulamaları geliştirmeye başlamak isteyenler için adım adım rehber ve öneriler.', 
    '<h2>SwiftUI Nedir?</h2>
    <p>SwiftUI, Apple tarafından 2019 yılında tanıtılan, iOS, macOS, watchOS ve tvOS için kullanıcı arayüzleri oluşturmaya yönelik modern bir framework''tür. Declarative bir syntax kullanarak, daha az kod yazarak daha güzel ve dinamik kullanıcı arayüzleri oluşturmanıza olanak tanır.</p>
    
    <h2>SwiftUI''nin Avantajları</h2>
    <h3>1. Declarative Syntax</h3>
    <p>SwiftUI, kullanıcı arayüzünüzün nasıl görünmesi gerektiğini bildiren declarative bir syntax kullanır. Bu, UI kodunuzu daha okunabilir ve bakımı daha kolay hale getirir.</p>
    
    <h3>2. Live Preview</h3>
    <p>Xcode''un Canvas özelliği sayesinde, kodunuzdaki değişiklikleri anında görebilirsiniz. Bu, geliştirme sürecini hızlandırır ve daha verimli hale getirir.</p>
    
    <h3>3. Otomatik Adaptasyon</h3>
    <p>SwiftUI, farklı ekran boyutlarına ve yönelimlerine otomatik olarak uyum sağlar. Ayrıca, Dark Mode ve Dynamic Type gibi iOS özelliklerine de otomatik olarak uyum sağlar.</p>
    
    <h2>SwiftUI ile İlk Uygulamanızı Oluşturma</h2>
    <p>SwiftUI ile ilk uygulamanızı oluşturmak için Xcode''u açın ve "Create a new Xcode project" seçeneğini seçin. Uygulama şablonu olarak "App" seçin ve "Interface" kısmında "SwiftUI" seçeneğini işaretleyin.</p>
    
    <p>İşte basit bir SwiftUI görünümü örneği:</p>
    
    <pre><code>import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Image(systemName: "globe")
                .imageScale(.large)
                .foregroundColor(.accentColor)
            Text("Merhaba, SwiftUI!")
                .font(.title)
                .padding()
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}</code></pre>
    
    <h2>SwiftUI''de Temel Bileşenler</h2>
    <h3>1. Text</h3>
    <p>Text bileşeni, ekranda metin görüntülemek için kullanılır. Font, renk, hizalama gibi özellikleri modifier''lar aracılığıyla özelleştirebilirsiniz.</p>
    
    <h3>2. Image</h3>
    <p>Image bileşeni, resimleri görüntülemek için kullanılır. Sistem simgeleri, yerel resimler veya uzak URL''lerden resimler yükleyebilirsiniz.</p>
    
    <h3>3. Stack''ler</h3>
    <p>VStack, HStack ve ZStack, içerikleri dikey, yatay veya z-ekseni boyunca düzenlemek için kullanılır.</p>
    
    <h3>4. Button</h3>
    <p>Button bileşeni, kullanıcı etkileşimleri için kullanılır. Görünümünü ve davranışını özelleştirebilirsiniz.</p>
    
    <h2>Sonuç</h2>
    <p>SwiftUI, iOS uygulama geliştirme sürecini daha hızlı ve keyifli hale getiren güçlü bir framework''tür. Declarative syntax''ı, live preview özelliği ve otomatik adaptasyon yetenekleri sayesinde, daha az kod yazarak daha güzel ve işlevsel uygulamalar geliştirebilirsiniz.</p>
    
    <p>Gelecek yazılarımda, SwiftUI ile ilgili daha ileri düzey konuları ele alacağım. Sorularınız veya önerileriniz varsa, lütfen iletişime geçmekten çekinmeyin!</p>', 
    '/blog/swiftui-guide.jpg', 
    'Mobil Geliştirme', 
    ARRAY['SwiftUI', 'iOS', 'Mobil Geliştirme', 'Swift', 'Apple', 'Xcode', 'Başlangıç'], 
    '2023-06-22', 
    true
  ),
  (
    'Supabase ile Backend İhtiyaçlarınızı Hızlıca Karşılayın', 
    'supabase-ile-backend-ihtiyaclarinizi-hizlica-karsilayin', 
    'Supabase''in sunduğu özellikler ve Firebase alternatifi olarak nasıl kullanılabileceği hakkında kapsamlı bir inceleme.', 
    '<h2>Supabase Nedir?</h2>
    <p>Supabase, açık kaynaklı bir Firebase alternatifidir. PostgreSQL veritabanı üzerine inşa edilmiş olup, gerçek zamanlı veritabanı, kimlik doğrulama, otomatik API oluşturma, depolama ve daha fazlasını sunar.</p>
    
    <h2>Supabase''in Avantajları</h2>
    <h3>1. PostgreSQL Tabanlı</h3>
    <p>Supabase, güçlü ve olgun bir veritabanı olan PostgreSQL üzerine kurulmuştur. Bu, ilişkisel veritabanı özelliklerinden tam olarak yararlanmanıza olanak tanır.</p>
    
    <h3>2. Gerçek Zamanlı Özellikler</h3>
    <p>Supabase, veritabanı değişikliklerini gerçek zamanlı olarak dinlemenize olanak tanır. Bu, sohbet uygulamaları, canlı panolar gibi gerçek zamanlı özellikler gerektiren uygulamalar için idealdir.</p>
    
    <h3>3. RESTful ve GraphQL API''ler</h3>
    <p>Supabase, veritabanınız için otomatik olarak RESTful API''ler oluşturur. Ayrıca, GraphQL desteği de sunmaktadır.</p>
    
    <h3>4. Kimlik Doğrulama ve Yetkilendirme</h3>
    <p>Supabase, e-posta/şifre, sosyal oturum açma ve daha fazlası için kimlik doğrulama çözümleri sunar. Ayrıca, Row Level Security (RLS) ile güçlü yetkilendirme kontrolleri sağlar.</p>
    
    <h2>Supabase ile Başlangıç</h2>
    <p>Supabase ile başlamak için, öncelikle bir Supabase hesabı oluşturmanız ve yeni bir proje oluşturmanız gerekir. Ardından, Supabase JavaScript istemcisini projenize entegre edebilirsiniz:</p>
    
    <pre><code>npm install @supabase/supabase-js</code></pre>
    
    <p>İstemciyi yapılandırma:</p>
    
    <pre><code>import { createClient } from ''@supabase/supabase-js''

const supabaseUrl = ''https://your-project-url.supabase.co''
const supabaseKey = ''your-anon-key''
const supabase = createClient(supabaseUrl, supabaseKey)</code></pre>
    
    <h2>Temel Veritabanı İşlemleri</h2>
    <h3>1. Veri Ekleme</h3>
    <pre><code>const { data, error } = await supabase
  .from(''table_name'')
  .insert([
    { column1: ''value1'', column2: ''value2'' }
  ])</code></pre>
    
    <h3>2. Veri Sorgulama</h3>
    <pre><code>const { data, error } = await supabase
  .from(''table_name'')
  .select(''column1, column2'')
  .eq(''column1'', ''value1'')</code></pre>
    
    <h3>3. Veri Güncelleme</h3>
    <pre><code>const { data, error } = await supabase
  .from(''table_name'')
  .update({ column1: ''new_value'' })
  .eq(''id'', 1)</code></pre>
    
    <h3>4. Veri Silme</h3>
    <pre><code>const { data, error } = await supabase
  .from(''table_name'')
  .delete()
  .eq(''id'', 1)</code></pre>
    
    <h2>Gerçek Zamanlı Abonelikler</h2>
    <p>Supabase''in gerçek zamanlı özelliklerini kullanarak, veritabanı değişikliklerini dinleyebilirsiniz:</p>
    
    <pre><code>const subscription = supabase
  .from(''table_name'')
  .on(''INSERT'', payload => {
    console.log(''Yeni kayıt:'', payload.new)
  })
  .on(''UPDATE'', payload => {
    console.log(''Güncellenen kayıt:'', payload.new)
  })
  .on(''DELETE'', payload => {
    console.log(''Silinen kayıt:'', payload.old)
  })
  .subscribe()</code></pre>
    
    <h2>Sonuç</h2>
    <p>Supabase, modern web ve mobil uygulamalar için güçlü bir backend çözümüdür. Açık kaynaklı yapısı, PostgreSQL tabanlı olması ve sunduğu geniş özellik seti ile, Firebase''e güçlü bir alternatif sunar.</p>
    
    <p>Gelecek yazılarımda, Supabase ile ilgili daha spesifik konuları ele alacağım. Sorularınız veya önerileriniz varsa, lütfen iletişime geçmekten çekinmeyin!</p>', 
    '/blog/supabase-backend.jpg', 
    'Backend', 
    ARRAY['Supabase', 'Backend', 'PostgreSQL', 'Veritabanı', 'API', 'Authentication', 'Firebase Alternatifi'], 
    '2023-07-10', 
    true
  );

-- Blog yazıları için indeksler
CREATE INDEX blog_posts_slug_idx ON public.blog_posts (slug);
CREATE INDEX blog_posts_category_idx ON public.blog_posts (category);
CREATE INDEX blog_posts_published_at_idx ON public.blog_posts (published_at);
CREATE INDEX blog_posts_is_published_idx ON public.blog_posts (is_published);

-- Kategoriler için indeksler
CREATE INDEX blog_categories_slug_idx ON public.blog_categories (slug);

-- Fonksiyon: Blog yazılarını etiketlere göre arama
CREATE OR REPLACE FUNCTION search_posts_by_tag(search_tag TEXT)
RETURNS SETOF blog_posts
LANGUAGE sql
AS $$
  SELECT *
  FROM blog_posts
  WHERE search_tag = ANY(tags)
  AND is_published = true
  ORDER BY published_at DESC;
$$;

-- Fonksiyon: Blog yazılarını içeriğe göre arama
CREATE OR REPLACE FUNCTION search_posts_by_content(search_term TEXT)
RETURNS SETOF blog_posts
LANGUAGE sql
AS $$
  SELECT *
  FROM blog_posts
  WHERE (title ILIKE '%' || search_term || '%'
    OR excerpt ILIKE '%' || search_term || '%'
    OR content ILIKE '%' || search_term || '%')
  AND is_published = true
  ORDER BY published_at DESC;
$$;

