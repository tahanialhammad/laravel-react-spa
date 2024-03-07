
import { motion } from "framer-motion";

export default function CircleGallery() {
  return (
    <div style={{ textAlign: "center" }}>
    <motion.img
      src="https://via.placeholder.com/150"
      alt="Rotating Image"
      style={{
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        marginBottom: "20px"
      }}
      animate={{
        rotate: 360,
        transition: { duration: 5, loop: Infinity }
      }}
    />
  </div>
  )
}
