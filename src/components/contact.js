import React from 'react';
import MailIcon from '../assets/mail.svg';
import MobileIcon from '../assets/mobile.svg';
import GlobeIcon from '../assets/globe.svg';
import LocationIcon from '../assets/location.svg';
import AmericasIcon from '../assets/globe-americas-solid.svg';

const Contact = ({ field, value }) => (
  <span className="flex my-2 text-primary-900 tracking-widest items-center">
    {field === 'email' && (
      <>
        <MailIcon className="contact-icon" />
        <a className="contact-link" href={`mailto:${value}`} title="email">
          {value}
        </a>
      </>
    )}
    {field === 'phone' && (
      <>
        <MobileIcon className="contact-icon" />
        <a className="contact-link" href={`tel:${value}`} title="phone">
          {value}
        </a>
      </>
    )}
    {field === 'website' && (
      <>
        <GlobeIcon className="contact-icon" />
        <a
          className="contact-link"
          target="_blank"
          href={value}
          rel="noopener noreferrer"
          title="website"
        >
          Personal Site
        </a>
      </>
    )}
    {field === 'location' && (
      <a href="https://goo.gl/maps/cqzpQc435cJHGmfUA" target="_blank" rel="noreferrer" style={{ display: 'flex' }}>
        <LocationIcon className="contact-icon" />
        <span className="contact-link">{value}</span>
      </a>
    )}
    {field === 'country' && (
      <a href="https://goo.gl/maps/ETqtadJMaQiYxoq7A" target="_blank" rel="noreferrer" style={{ display: 'flex' }}>
        <AmericasIcon className="contact-icon" />
        <span className="contact-link">{value}</span>
      </a>
    )}
  </span>
);

export default Contact;
