'use client';
import { useState } from 'react';
import Head from 'next/head';

export default function Terms() {
  const [language, setLanguage] = useState('tr');

  return (
    <div className="container">
      <Head>
        <title>Kullanıcı Gizliliği | User Privacy</title>
        <meta name="description" content="İlaç Takip Uygulaması Kullanıcı Gizliliği" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="header">
          <h1 className="title">
            {language === 'tr' ? 'Kullanıcı Gizliliği' : 'User Privacy'}
          </h1>
          <div className="language-selector">
            <button 
              onClick={() => setLanguage('tr')} 
              className={language === 'tr' ? 'active' : ''}
            >
              Türkçe
            </button>
            <button 
              onClick={() => setLanguage('en')} 
              className={language === 'en' ? 'active' : ''}
            >
              English
            </button>
          </div>
        </div>

        <div className="content">
          {language === 'tr' ? (
            <div>
              <p className="last-updated">Son güncelleme: 15 Mayıs 2025</p>
              
              <section className="section">
                <h2>Hoş Geldiniz</h2>
                <p>İlaç Takip Uygulamamıza hoş geldiniz. Bu sayfa, uygulamamızı kullanırken gizliliğinizin nasıl korunduğunu açıklamaktadır.</p>
              </section>

              <section className="section">
                <h2>Veri Saklama</h2>
                <p>Tüm kullanıcı verileri <strong>yalnızca kullanıcının kendi cihazında saklanır</strong>. Sunucularımızda hiçbir kişisel veri saklanmaz.</p>
                <p>Eklediğiniz ilaçlar, hatırlatıcılar ve diğer tüm bilgiler, yalnızca cihazınızın yerel depolama alanında tutulur.</p>
              </section>

              <section className="section">
                <h2>İlaç Hatırlatıcıları</h2>
                <p>Uygulamanın temel amacı, belirlediğiniz zamanlarda ilaçlarınızı almanız için size hatırlatıcılar göndermektir.</p>
                <p>Bu hatırlatıcılar yalnızca cihazınızda yerel olarak planlanır ve internet bağlantısı gerektirmez.</p>
              </section>

              <section className="section">
                <h2>Cihaz İzinleri</h2>
                <p>Uygulamamız sadece bildirimleri gösterebilmek için bildirim iznine ihtiyaç duyar.</p>
                <p>Kamera, konum, kişiler veya diğer hassas izinler talep edilmez veya kullanılmaz.</p>
              </section>

              <section className="section">
                <h2>İnternet Kullanımı</h2>
                <p>Uygulamamız çalışmak için internet bağlantısına ihtiyaç duymaz.</p>
                <p>Hiçbir veri harici sunuculara gönderilmez veya dış kaynaklardan alınmaz.</p>
              </section>

              <section className="section">
                <h2>Veri Silme</h2>
                <p>Uygulamayı cihazınızdan kaldırdığınızda, tüm verileriniz tamamen silinir.</p>
                <p>Silinen verileri kurtarmak mümkün değildir, bu nedenle uygulama verilerinizi yedeklemek sizin sorumluluğunuzdadır.</p>
              </section>

              <section className="section">
                <h2>Çocukların Gizliliği</h2>
                <p>Uygulamamız, her yaştan kullanıcı için uygundur ve hiçbir kişisel veri toplamadığı için çocukların gizliliği konusunda endişe uyandırmaz.</p>
              </section>

              <section className="section">
                <h2>Değişiklikler</h2>
                <p>Kullanıcı gizliliği koşullarımızı herhangi bir zamanda güncelleme hakkını saklı tutarız. Değişiklikler, bu sayfada yayınlandıktan sonra geçerli olacaktır.</p>
              </section>

              <section className="section">
                <h2>İletişim</h2>
                <p>Kullanıcı gizliliği hakkında herhangi bir sorunuz varsa, lütfen bizimle sencergok@outlook.com adresinden iletişime geçin.</p>
              </section>
            </div>
          ) : (
            <div>
              <p className="last-updated">Last updated: May 15, 2025</p>
              
              <section className="section">
                <h2>Welcome</h2>
                <p>Welcome to our Medicine Tracker App. This page explains how your privacy is protected when using our application.</p>
              </section>

              <section className="section">
                <h2>Data Storage</h2>
                <p>All user data is <strong>stored only on the user's own device</strong>. No personal data is stored on our servers.</p>
                <p>The medications, reminders, and all other information you add are kept only in your device's local storage.</p>
              </section>

              <section className="section">
                <h2>Medication Reminders</h2>
                <p>The core purpose of the app is to send you reminders to take your medications at the times you specify.</p>
                <p>These reminders are scheduled locally on your device only and do not require an internet connection.</p>
              </section>

              <section className="section">
                <h2>Device Permissions</h2>
                <p>Our app only needs notification permission to display reminders.</p>
                <p>Camera, location, contacts, or other sensitive permissions are not requested or used.</p>
              </section>

              <section className="section">
                <h2>Internet Usage</h2>
                <p>Our app does not require an internet connection to function.</p>
                <p>No data is sent to external servers or retrieved from external sources.</p>
              </section>

              <section className="section">
                <h2>Data Deletion</h2>
                <p>When you remove the app from your device, all your data is completely deleted.</p>
                <p>It is not possible to recover deleted data, so it is your responsibility to back up your app data if needed.</p>
              </section>

              <section className="section">
                <h2>Children's Privacy</h2>
                <p>Our app is suitable for users of all ages and does not raise concerns about children's privacy as it does not collect any personal data.</p>
              </section>

              <section className="section">
                <h2>Changes</h2>
                <p>We reserve the right to update our user privacy terms at any time. Changes will be effective when posted on this page.</p>
              </section>

              <section className="section">
                <h2>Contact</h2>
                <p>If you have any questions about user privacy, please contact us at sencergok@outlook.com</p>
              </section>
            </div>
          )}
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 2rem;
          border-bottom: 1px solid #eaeaea;
          padding-bottom: 1.5rem;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 2.5rem;
          text-align: center;
          color: #333;
          margin-bottom: 1rem;
        }

        .language-selector {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .language-selector button {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          border: 1px solid #ddd;
          border-radius: 5px;
          background: white;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .language-selector button.active {
          background: #59C2C1;
          color: white;
          border-color: #59C2C1;
        }

        .content {
          padding: 0 1rem;
        }

        .last-updated {
          font-style: italic;
          color: #666;
          margin-bottom: 2rem;
        }

        .section {
          margin-bottom: 2rem;
        }

        h2 {
          color: #444;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        p {
          line-height: 1.6;
          font-size: 1.1rem;
          color: #333;
          margin: 0.75rem 0;
        }

        @media (max-width: 600px) {
          .title {
            font-size: 1.8rem;
          }

          .content {
            padding: 0 0.5rem;
          }

          h2 {
            font-size: 1.3rem;
          }

          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}