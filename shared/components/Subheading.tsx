import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Subheading() {
  const router = useRouter();

  return (
    <div className="flex justify-between">
      {router.pathname != "/" ? (
        <motion.h4
          className="text-sm md:text-base w-fit mb-2 md:mb-5 cursor-pointer"
          onClick={() => router.back()}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          &lt; Back
        </motion.h4>
      ) : (
        <div />
      )}
      <Link href="/guestlist">
        <motion.h4
          className="text-sm md:text-base w-fit mb-3 md:mb-5 cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          Guest Book &#x3e;
        </motion.h4>
      </Link>
    </div>
  );
}
