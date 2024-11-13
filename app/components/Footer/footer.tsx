import logo from '@/app/content/В.О.svg'
export default function Footer() {
  return (
    <footer className='container'>
      <img src={logo.src} alt="" className="logo" />
      <div className="right-footer">
        <p className='footer-title'>Мы на связи с вами</p>
        <p className='footer-tel'>+7 (907) 443 53 23</p>
      </div>
    </footer>
  );
}
