
import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/getupandgoatx/',
      icon: Facebook
    },
    {
      name: 'Google Maps',
      url: 'https://www.google.com/maps/place/Get+Up+And+Go+Kayaking+-+ATX/@30.2512702,-97.7358398,883m/data=!3m1!1e3!4m6!3m5!1s0x8644b53e68d790c5:0x6d157737f8345017!8m2!3d30.2479063!4d-97.7240928!16s%2Fg%2F11y51wb5tj?entry=ttu&g_ep=EgoyMDI1MDYwOS4wIKXMDSoASAFQAw%3D%3D',
      icon: null,
      emoji: '🗺️'
    },
    {
      name: 'Instagram',
      url: 'http://instagram.com/getupandgo.atx/',
      icon: Instagram
    },
    {
      name: 'Pinterest',
      url: 'https://www.pinterest.com/GetUpAndGoATX/_created/',
      icon: null,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@getupandgoatx',
      icon: null,
      logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg'
    },
    {
      name: 'X (Twitter)',
      url: 'http://x.com/getupandgoatx',
      icon: null,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_original.svg'
    },
    {
      name: 'Yelp',
      url: 'https://www.yelp.com/biz/get-up-and-go-kayaking-austin',
      icon: null,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@GetUpAndGoATX',
      icon: Youtube
    }
  ];

  return (
    <div className="bg-gradient-to-r from-water-deep to-water-primary">
      {/* Social Media Icons - Clean Design */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          {/* Desktop: Horizontal Layout */}
          <div className="hidden md:flex justify-center items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 transition-all rounded-lg flex items-center justify-center group border border-white/20 hover:border-white/40"
              >
                {social.icon ? (
                  <social.icon className="w-6 h-6 text-white" />
                ) : social.logo ? (
                  <img 
                    src={social.logo} 
                    alt={social.name}
                    className="w-6 h-6 object-contain filter brightness-0 invert"
                  />
                ) : (
                  <span className="text-white text-lg">
                    {social.emoji}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile: 2-Column Vertical Layout */}
          <div className="md:hidden grid grid-cols-2 gap-3 max-w-xs mx-auto">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 transition-all rounded-lg border border-white/20 hover:border-white/40"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  {social.icon ? (
                    <social.icon className="w-5 h-5 text-white" />
                  ) : social.logo ? (
                    <img 
                      src={social.logo} 
                      alt={social.name}
                      className="w-5 h-5 object-contain filter brightness-0 invert"
                    />
                  ) : (
                    <span className="text-white text-base">
                      {social.emoji}
                    </span>
                  )}
                </div>
                <span className="text-white text-sm font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Voltihost Footer */}
      <div className="bg-black">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-center items-center">
            <img 
              src="/lovable-uploads/f8374979-d9f6-4165-bc44-d3ff9357ea32.png" 
              alt="Powered by Voltihost" 
              className="h-24 w-auto" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
