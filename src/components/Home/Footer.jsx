import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          {[
            {
              title: 'Stockflow',
              items: ['Sobre nós', 'nossos serviços', 'política de privacidade', 'termos e condições']
            },
            {
              title: 'Ajuda',
              items: ['FAQ','reembolso', 'pedidos', 'pagamentos']
            },
            {
              title: 'Redes sociais',
              icons: ['facebook-f', 'twitter', 'instagram', 'linkedin-in']
            }
          ].map((col, i) => (
            <div className="footer-col" key={i}>
              <h4>{col.title}</h4>
              {col.items && (
                <ul>
                  {col.items.map((item, idx) => (
                    <li key={idx}><a href="#">{item}</a></li>
                  ))}
                </ul>
              )}
              {col.icons && (
                <div className="social-links">
                  {col.icons.map((icon, idx) => (
                    <a key={idx} href="#"><i className={`fab fa-${icon}`}></i></a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 STOCKFLOW. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
