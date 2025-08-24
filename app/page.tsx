import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       <Image
            aria-hidden
            src="desalix-bee-900.png"
            alt="deSalix ui"
            width={400}
            height={400}
          />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/company/desalix-ui"
          target="_blank"
          rel="noopener noreferrer"
        > 
          <FontAwesomeIcon
        icon={faLinkedin}
        style={{ color: "blue", fontSize: 64 }}
      />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:contact@desalixui.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        Email
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://bsky.app/profile/desalix.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
        >
          bsky →
        </a>
      </footer>
    </div>
  );
}
