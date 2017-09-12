import PropTypes from 'prop-types';
import React from 'react';

export const Logo = ({ fillColor, styles, width }) => {
  const height = width * 495 / 150;
  return (
    <div style={{ position: 'absolute', ...styles }}>
      <svg width={`${height}px`} height={`${width}px`} viewBox="0 0 495 150" preserveAspectRatio="xMidYMid meet">
        <g fill={fillColor}>
          <path d="M869.88,449.67c-2.72,3.68-5.73,5.88-5.91,8.29-.86,11.83-1.06,23.71-1.23,35.58,0,1.45,1.28,3.25,2.48,4.32,2,1.75,5.2,2.54,6.38,4.6,2.73,4.78,7.19,6.58,11.76,8.12,4.33,1.46,6.86-1,5.8-5.57-1.83-7.85-3.79-15.68-6-23.41-1.84-6.31,1.19-18.35,6.17-22.76,3.6-3.19,6.07-2.83,7.17,1.83a75.61,75.61,0,0,1,.3,32.86c-.43,2.08.58,6.35,1.44,6.49,4.64.76,5.86,4.8,8.58,7.4a12.9,12.9,0,0,0,13.2,3.31c4.73-1.49,4.92-5.82,4.65-9.87-.52-8-1.11-16.1-2-24.11-.74-6.66,1.74-10.8,8.68-13.07a44.73,44.73,0,0,1,1,4.62c1.36,12.76,3,25.5,3.85,38.29a128.83,128.83,0,0,1-.53,24c-.6,4.87-1.58,8.92,4.35,11.66a53.25,53.25,0,0,1,3.87-5.65,6.85,6.85,0,0,1,3.64-2.13c7.14-1.31,13.81-3.33,13.25-12.64-.87-14.37-1.78-28.75-3.26-43.07a49.67,49.67,0,0,0-4.36-16.41c-7.09-14.55-21-18-32.41-5.45-2.62,2.88-5,6-7.69,9.24-1.9-3.64-3.37-7-5.27-10-6.1-9.85-12-10.37-19.45-1.45-3.67,4.42-6.67,9.4-10,14.23ZM752.88,398a15.45,15.45,0,0,0,3.15,1.16c5.43.53,7,3.75,6.93,8.82-.09,7.76,0,15.54.56,23.27.27,4-1.17,5.77-4.86,6.55s-7.34,2-11,2.84c-4.84,1.15-7.56,4.28-7.65,9.43,8.18,1.41,15-3.93,23-4.82,0,2.4,0,4.58,0,6.77-.07,15-.18,30.07-.15,45.11a8.23,8.23,0,0,0,1.37,4.83c3.94,4.93,8.17,9.37,14.81,11.08,3.56.92,5.74.36,7.76-2.4,3.07-4.2,3.21-8.73,2.77-13.82-1.21-14-1.79-28.13-2.51-42.2-.21-4,0-8.11,0-12.28,12.72-1.64,25.12-3.31,37.53-4.83,9.57-1.18,19.29-1.89,27.65-7.35,1.88-1.23,3.08-3.49,4.6-5.27-1.83-1.52-3.44-3.69-5.54-4.39a18.65,18.65,0,0,0-8.39-.6c-12.2,1.82-24.39,3.79-36.52,6-7.23,1.32-14.36,3.22-21.8,4.92-.28-1.73-.48-2.95-.67-4.17-1.23-8-2.12-16-3.87-23.89a11.24,11.24,0,0,0-5.26-6.55C767.56,392.48,760.26,392.31,752.88,398Zm86.65,102.22c.21,2.38.28,3.31.38,4.23a10.72,10.72,0,0,0,14.39,9.24c2.94-1,4.28-2.71,3.82-6.07-1.17-8.46-1.55-17-3.15-25.41-1.63-8.52-3.61-17.12-6.81-25.13-2.45-6.13-8.83-8.65-15.31-8.79-17.12-.36-27.19,7.31-31.95,23.62-1.82,6.24-.24,12.23-1.12,18.34a12.75,12.75,0,0,0,5,12.56c2.7,1.93,5.46,3.75,8.18,5.65,7.66,5.36,15.31,4.5,21.56-2.46C835.95,504.44,837.32,502.8,839.53,500.24Zm123.86-17.68,1.22.26c-.68,10.49,2.39,18.69,11.67,25,8,5.47,15.28,6,23.43,1.72,6-3.17,6-3.21,9.16,2.62.69,1.25,1.32,2.88,2.44,3.47,2.64,1.39,5.53,3,8.36,3.13,3.42.11,3.13-3.26,3.16-5.8.15-16.71-1.74-33.09-7.75-48.82a32,32,0,0,0-1.68-4.42c-1.08-1.91-2.07-4.49-3.8-5.33-5.94-2.89-12.17-5.21-18.35-7.59-1.41-.54-3.39-1-4.58-.48-7.16,3.4-14.52,7.14-17.56,14.91C966.43,468.06,965.23,475.44,963.39,482.56ZM663,472.87l-1.69-.36c0-5.82-.26-11.66.09-17.47.24-3.93-3.73-2.51-4.83-4.52-1.07,1.16-2.76,2.15-3.11,3.5-2,8-4.42,15.92-5.41,24a67.17,67.17,0,0,0,.88,18.83c.9,5.41,6,8,11.23,6.8,4.76-1.06,5.45-2.7,4.14-7.48-.81-3-1.49-6.29-1-9.23,2-11.06,10.91-17.55,17.51-25.78a48.89,48.89,0,0,1,.63,10.51c-.39,10.91-.26,21.67,8.13,30.17,2.71,2.75,5.66,5.26,8.5,7.89,4.55,4.22,7.69,4.72,11.1,1.76,5-4.35,5.91-8.79,2.44-13.71-4.26-6-5.92-12.79-6.76-20a62.57,62.57,0,0,0-3.05-14.31c-2.68-7.28-7.63-13.06-15.51-14.7-2.79-.58-7.4.49-9,2.52C672,458.1,667.72,465.63,663,472.87Zm86,7.27c-1.71-13.33-8.87-22.71-16.91-31.48-1.06-1.15-4.31-1.09-6.13-.44-1.08.38-1.72,3-1.94,4.66-1.27,9.71-1.19,19.79-3.86,29.08-2.23,7.77-3.14,14.51,1.17,21.42,2.39,3.83,4.6,7.91,7.69,11.11,3.64,3.76,12.14,2.53,13.13-1.67C744.75,501.76,746.84,490.58,749,480.14Zm-22.2-39.37c7,0,12.07-5.75,9.1-10.69a206.81,206.81,0,0,0-11.7-17.25c-2.6-3.49-6.66-2.43-9.51.64-4.43,4.77-4.21,9-.58,13.85.88,1.18,1,3,1.34,4.52C717.2,439.25,719.12,440.78,726.79,440.78Z" transform="translate(-528.03 -391.93)"/>
          <path d="M596.46,391.93c6.62,2.1,13.52,3.6,19.76,6.5A41,41,0,0,1,629.41,408c9.35,10.57,15.62,23.23,15.95,37.31.57,24.74-5.38,47.52-26.12,63.74-8.26,6.46-18.25,8.69-28.5,9.27-14.14.8-26.59-3.88-38.27-11.8-17.83-12.09-25.29-28.84-24.36-49.94.6-13.48,1.31-26.88,6.44-39.64a44.9,44.9,0,0,1,14.5-19.58c1.41-1.07,4.08-.47,6.17-.65-.95,1.55-1.53,3.75-2.91,4.53a25.56,25.56,0,0,0-11.5,14.08c-7.38,20.24-8.1,40.5,1.3,60.44,8.35,17.73,29.54,27.61,50.94,23.94,7.15-1.23,12.61-5.73,16.65-11.75,8-11.91,10.67-25.22,10.07-39.33a58.18,58.18,0,0,0-5.7-23.29c-9.76-20.24-33.49-18.83-45.2-9-3.49,2.94-6.39,6.58-9.53,9.93-1.41,1.5-2.51,3.47-4.2,4.48-1.91,1.15-6,2.46-6.25,2-1.58-2.6-3.93-6.45-3-8.55,4.68-10.7,11.41-20.23,22.34-25.35,6.53-3.06,13.73-4.69,20.63-7Z" transform="translate(-528.03 -391.93)"/>
          <path d="M869.88,449.67,878.21,469c3.37-4.83,6.37-9.81,10-14.23,7.41-8.92,13.35-8.4,19.45,1.45,1.9,3.06,3.37,6.38,5.27,10,2.7-3.26,5.07-6.36,7.69-9.24,11.39-12.53,25.31-9.1,32.41,5.45a49.67,49.67,0,0,1,4.36,16.41c1.48,14.32,2.39,28.7,3.26,43.07.56,9.31-6.11,11.33-13.25,12.64a6.85,6.85,0,0,0-3.64,2.13,53.25,53.25,0,0,0-3.87,5.65c-5.94-2.74-4.95-6.79-4.35-11.66a128.83,128.83,0,0,0,.53-24c-.85-12.79-2.49-25.53-3.85-38.29a44.73,44.73,0,0,0-1-4.62c-6.94,2.27-9.42,6.41-8.68,13.07.89,8,1.49,16.06,2,24.11.26,4,.08,8.37-4.65,9.87a12.9,12.9,0,0,1-13.2-3.31c-2.72-2.6-3.93-6.64-8.58-7.4-.86-.14-1.86-4.41-1.44-6.49a75.61,75.61,0,0,0-.3-32.86c-1.1-4.66-3.57-5-7.17-1.83-5,4.4-8,16.45-6.17,22.76,2.25,7.74,4.21,15.56,6,23.41,1.06,4.53-1.47,7-5.8,5.57-4.58-1.54-9-3.34-11.76-8.12-1.18-2.06-4.42-2.85-6.38-4.6-1.2-1.07-2.5-2.87-2.48-4.32.17-11.87.37-23.75,1.23-35.58C864.14,455.55,867.15,453.35,869.88,449.67Z" transform="translate(-528.03 -391.93)"/><path d="M752.88,398c7.38-5.71,14.68-5.54,21.81-1.78a11.24,11.24,0,0,1,5.26,6.55c1.75,7.86,2.64,15.91,3.87,23.89.19,1.22.39,2.45.67,4.17,7.45-1.7,14.57-3.59,21.8-4.92,12.13-2.22,24.32-4.19,36.52-6a18.65,18.65,0,0,1,8.39.6c2.1.7,3.71,2.87,5.54,4.39-1.51,1.79-2.72,4-4.6,5.27-8.37,5.46-18.08,6.17-27.65,7.35-12.41,1.53-24.81,3.19-37.53,4.83,0,4.17-.17,8.23,0,12.28.72,14.08,1.3,28.17,2.51,42.2.44,5.1.3,9.62-2.77,13.82-2,2.76-4.2,3.31-7.76,2.4-6.63-1.71-10.86-6.15-14.81-11.08a8.23,8.23,0,0,1-1.37-4.83c0-15,.08-30.07.15-45.11,0-2.19,0-4.37,0-6.77-7.93.89-14.78,6.23-23,4.82.09-5.15,2.81-8.28,7.65-9.43,3.69-.88,7.32-2.06,11-2.84s5.13-2.55,4.86-6.55c-.52-7.74-.65-15.52-.56-23.27.06-5.06-1.5-8.28-6.93-8.82A15.45,15.45,0,0,1,752.88,398Z" transform="translate(-528.03 -391.93)"/>
          <path d="M839.53,500.24c-2.21,2.56-3.59,4.2-5,5.79-6.25,7-13.9,7.83-21.56,2.46-2.72-1.9-5.48-3.73-8.18-5.65a12.75,12.75,0,0,1-5-12.56c.88-6.1-.7-12.1,1.12-18.34,4.76-16.32,14.82-24,31.95-23.62,6.49.14,12.86,2.66,15.31,8.79,3.21,8,5.18,16.62,6.81,25.13,1.6,8.36,2,17,3.15,25.41.46,3.36-.88,5.1-3.82,6.07a10.72,10.72,0,0,1-14.39-9.24C839.82,503.55,839.75,502.62,839.53,500.24Zm-13.3-40.05a23.63,23.63,0,0,0-2.54.78c-12.6,6-14.3,20.43-11.46,31,.87,3.27,3.78,4.05,6.87,3.66,2.71-.34,5.4-.9,7.79-1.31C828.4,483.16,827.29,472,826.24,460.19Z" transform="translate(-528.03 -391.93)"/>
          <path d="M963.39,482.56c1.84-7.12,3-14.5,5.7-21.29,3-7.77,10.41-11.51,17.56-14.91,1.2-.57,3.17-.06,4.58.48,6.18,2.37,12.41,4.7,18.35,7.59,1.73.84,2.71,3.41,3.8,5.33a32,32,0,0,1,1.68,4.42c6,15.73,7.91,32.11,7.75,48.82,0,2.53.26,5.91-3.16,5.8-2.83-.09-5.72-1.74-8.36-3.13-1.12-.59-1.75-2.22-2.44-3.47-3.21-5.82-3.16-5.79-9.16-2.62-8.15,4.31-15.43,3.75-23.43-1.72-9.28-6.34-12.35-14.55-11.67-25Zm13.27-2,1,.3c0,1.9,0,3.79,0,5.69.2,6.84,2.15,8.72,8.7,8.49a8.75,8.75,0,0,1,1.4.24c5.88.79,14.6-6.5,14.92-12.52.25-4.57.54-9.15.59-13.72,0-1.22-.43-3.1-1.28-3.58-4.4-2.45-9-4.64-13.56-6.74-3.14-1.43-5.75-.48-6.74,2.88C979.87,467.88,978.33,474.24,976.66,480.57Z" transform="translate(-528.03 -391.93)"/>
          <path d="M663,472.87c4.7-7.24,9-14.77,14.33-21.53,1.6-2,6.21-3.1,9-2.52,7.88,1.64,12.83,7.42,15.51,14.7a62.57,62.57,0,0,1,3.05,14.31c.84,7.2,2.5,14,6.76,20,3.47,4.92,2.57,9.36-2.44,13.71-3.41,3-6.55,2.46-11.1-1.76-2.83-2.63-5.78-5.14-8.5-7.89-8.39-8.5-8.53-19.26-8.13-30.17a48.89,48.89,0,0,0-.63-10.51c-6.61,8.23-15.55,14.72-17.51,25.78-.52,2.94.16,6.26,1,9.23,1.31,4.77.62,6.42-4.14,7.48-5.23,1.17-10.33-1.39-11.23-6.8a67.17,67.17,0,0,1-.88-18.83c1-8.12,3.36-16.08,5.41-24,.35-1.34,2-2.34,3.11-3.5,1.1,2,5.07.59,4.83,4.52-.35,5.8-.09,11.64-.09,17.47Z" transform="translate(-528.03 -391.93)"/>
          <path d="M749,480.14c-2.15,10.44-4.24,21.62-6.85,32.68-1,4.2-9.49,5.44-13.13,1.67-3.09-3.2-5.3-7.29-7.69-11.11-4.31-6.91-3.39-13.65-1.17-21.42,2.66-9.29,2.59-19.37,3.86-29.08.22-1.68.86-4.27,1.94-4.66,1.83-.65,5.08-.71,6.13.44C740.12,457.43,747.29,466.81,749,480.14Z" transform="translate(-528.03 -391.93)"/>
          <path d="M726.79,440.78c-7.67,0-9.59-1.52-11.35-8.93-.37-1.54-.46-3.33-1.34-4.52-3.63-4.87-3.85-9.09.58-13.85,2.85-3.07,6.91-4.13,9.51-.64a206.81,206.81,0,0,1,11.7,17.25C738.86,435,733.79,440.78,726.79,440.78Z" transform="translate(-528.03 -391.93)"/>
        </g>
      </svg>
    </div>
  );
};

Logo.propTypes = {
  fillColor: PropTypes.string.isRequired,
  styles: PropTypes.object,
  width: PropTypes.number
};

Logo.defaultProps = {
  styles: {},
  width: 495
};

export default Logo;
