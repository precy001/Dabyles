import React from 'react';

const DEFAULT_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31708.563624452137!2d3.5773799425154973!3d6.575767662343188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103be56b20a95ab1%3A0xef2d538d8c2950a1!2sIjede%20104102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1759158316571!5m2!1sen!2sng";

export default function GoogleMapEmbed({
  src = DEFAULT_SRC,
  width = 600,
  height = 450,
  className = '',
  style = {},
  title = 'Google Map - Ijede, Lagos',
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

