// eslint-env browser
import React from 'react';

export default {
  title: 'Browser',
};

// eslint-disable-next-line no-undef
export const Version = () => <div style={{ fontSize: '36px' }}>{window.navigator.userAgent}</div>;

export const Fonts = () => (
  <ul>
    {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
    <li>🤗✅</li>
    <li>Arial</li>
    <li>Courier</li>
    <li>Courier New</li>
    <li>Georgia</li>
    <li>Gill Sans</li>
    <li>Impact</li>
    <li>Times New Roman</li>
    <li>Trebuchet MS</li>
    <li>Verdana</li>
    <li>Arabic مرحبا بالعالم</li>
    <li>Arabic Bold مرحبا بالعالم</li>
    <li>Japanese こんにちは世界</li>
    <li>Japanese Bold こんにちは世界</li>
    <li>Korean 안녕 세상</li>
    <li>Korean Bold 안녕 세상</li>
    <li>Chinese simplified 问候</li>
    <li>Chinese simplified Bold 问候</li>
    <li>Chinese traditional 問候</li>
    <li>Chinese traditional Bold 問候</li>
    <li>Devanagari नमस्ते दुनिया</li>
    <li>Devanagari नमस्ते दुनिया</li>
    <li>Hebrew שלום עולם</li>
    <li>Hebrew Bold שלום עולם</li>
    <li>Thai สวัสดีชาวโลก</li>
    <li>Thai Bold สวัสดีชาวโลก</li>
  </ul>
);

export const ViewportHeight = () => (
  <div>
    <div style={{ height: '100vh', background: 'salmon' }} />
    <div style={{ height: '100vh', background: 'aqua' }} />
    <div style={{ height: '100vh', background: 'limegreen' }} />
  </div>
);

export const Sticky = () => (
  <div style={{ position: 'relative' }}>
    <div style={{ height: '100px', background: 'salmon', position: 'sticky', top: 0 }} />
    <div style={{ height: '3000px', background: 'aqua' }} />
  </div>
);
