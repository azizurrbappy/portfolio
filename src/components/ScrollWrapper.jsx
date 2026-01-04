import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const ScrollWrapper = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
        });

        return () => {
            // proper cleanup if needed, though lenis usually handles itself on unmount if instance is destroyed
            // lenis.destroy() // if method exists
        };
    }, []);

    return <>{children}</>;
};

export default ScrollWrapper;
