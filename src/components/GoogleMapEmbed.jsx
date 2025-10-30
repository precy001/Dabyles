import React from 'react';

const DEFAULT_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.568972121527!2d3.5382417747846473!3d6.449342724021136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf723807aeb43%3A0xe93c4797ffad3b0b!2sScintilla%20road%20by%20Chevron%20Alternative%20route!5e0!3m2!1sen!2sng!4v1761828436587!5m2!1sen!2sng";

export default function GoogleMapEmbed({
  src = DEFAULT_SRC,
  width = 600,
  height = 450,
  className = '',
  style = {},
  title = 'Google Map - Scintilla close',
}) {
  const iframeStyle = { border: 0, ...style };

  return (
    <div style={{ maxWidth: '100%', overflow: 'hidden' }} className={className}>
      <iframe
        src={src}
        width={width}
        height={height}
        style={iframeStyle}
        allowFullScreen 
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

