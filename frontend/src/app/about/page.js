
export default function AboutPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>אודותינו</h1>
      <p>
        ברוכים הבאים לדף האודות! כאן תוכלו לספר על הפרויקט שלכם, 
        על המטרות שלו ועל הצוות שמאחוריו.
      </p>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>החזון שלנו</h2>
        <p>
          אנחנו שואפים לבנות אפליקציות ווב מודרניות ומהירות בעזרת Next.js,
          תוך דגש על חווית משתמש מעולה וקוד נקי.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>מה תמצאו כאן?</h3>
        <ul>
          <li>חדשנות טכנולוגית</li>
          <li>ביצועים ללא פשרות</li>
          <li>ממשק משתמש אינטואיטיבי</li>
        </ul>
      </section>
    </main>
  );
}