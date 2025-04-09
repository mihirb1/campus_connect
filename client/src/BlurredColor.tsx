import { motion } from "framer-motion";

const BlurredColor = () => {
    const blurredStyle = {
        position: "absolute",
        top: "410px",
        left: "200px",
        width: "300px",
        height: "300px",
        borderRadius: "0%",
        backgroundColor: "yellow",
        filter: "blur(200px)",
        opacity: 0.7,
    } as React.CSSProperties;
    const blurredStyle2 = {
        position: "absolute",
        top: "10px",
        left: "900px",
        width: "300px",
        height: "300px",
        borderRadius: "0%",
        backgroundColor: "orange",
        filter: "blur(200px)",
        opacity: 0.8,
    } as React.CSSProperties;

    return (
        <div>
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ damping: 20, stiffness: 540, type: "spring" }}
            whileHover={{ opacity: 1 }}
            style={blurredStyle}
            className="blurredColor"
        />
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ damping: 20, stiffness: 540, type: "spring" }}
            whileHover={{ opacity: 1 }}
            style={blurredStyle2}
            className="blurredColor"
        />
        </div>
    );
};

export default BlurredColor;
