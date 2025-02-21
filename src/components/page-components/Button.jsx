import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import '../../assets/fonts/dmsans.css';
const Button = ({ link, text, color = "blue-600" }) => {
    return (
        <div className="py-5 flex justify-center lg:justify-start">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <a href={link} passHref>
                    <motion.button
                        className={`text-white josefin px-5 py-2 md:px-4 md:py-2 md:text-[15px] bg-${color} hover:bg-opacity-90 shadow-lg flex gap-2 items-center rounded-full`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="flex items-center dm-sans gap-2">
                            {text}
                            <motion.div
                                whileHover={{ y: -5, rotate: -15 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <Rocket size={18} />
                            </motion.div>
                        </span>
                    </motion.button>
                </a>
            </motion.div>
        </div>
    );
};

export default Button;
