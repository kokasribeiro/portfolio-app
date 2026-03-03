import TrackVisibility from 'react-on-screen';
import 'animate.css';

/**
 * Wraps content with scroll-triggered animation.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {string} [props.animation='animate__fadeInUp'] - animate.css class (e.g. animate__fadeIn, animate__zoomIn)
 * @param {boolean} [props.partialVisibility=false] - Trigger when partially visible
 * @param {string} [props.className=''] - Additional CSS classes
 */
export const AnimatedOnScroll = ({
  children,
  animation = 'animate__fadeInUp',
  partialVisibility = false,
  className = '',
}) => (
  <TrackVisibility partialVisibility={partialVisibility}>
    {({ isVisible }) => (
      <div className={`${className} ${isVisible ? `animate__animated ${animation}` : ''}`.trim()}>
        {children}
      </div>
    )}
  </TrackVisibility>
);
