"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "./SectionHeading";

const photos = [
  { src: "/photography/phanthiet (1).jpg", alt: "Hoàng hôn trên đường phố Phan Thiết" },
  { src: "/photography/phanthiet (2).jpg", alt: "Ánh nắng xuyên qua mây trên phố" },
  { src: "/photography/phanthiet (3).jpg", alt: "Cụm mây lớn trong ánh chiều" },
  { src: "/photography/phanthiet (4).jpg", alt: "Bờ biển Phan Thiết dưới bầu trời xanh" },
  { src: "/photography/phanthiet (5).jpg", alt: "Người câu cá bên bờ biển" },
  { src: "/photography/phanthiet (6).jpg", alt: "Gia đình vui chơi bên sóng biển" },
  { src: "/photography/phanthiet (7).jpg", alt: "Sóng vỗ đê chắn biển lúc hoàng hôn" },
  { src: "/photography/phanthiet (9).jpg", alt: "Nhịp sống bên bến thuyền Phan Thiết" },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function Photography() {
  const { t } = useLanguage();
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photo = photos[currentPhoto];

  useEffect(() => {
    const timer = window.setInterval(
      () => setCurrentPhoto((index) => (index + 1) % photos.length),
      10000
    );
    return () => window.clearInterval(timer);
  }, [currentPhoto]);

  return (
    <section id="photography" className="section-y">
      <div className="container-x">
        <SectionHeading
          index="05"
          tag={t.photography.sectionTag}
          title={t.photography.title}
          subtitle={t.photography.description}
        />

        <div role="region" aria-roledescription="carousel" aria-label="Bộ ảnh Phan Thiết">
          <div className="relative aspect-4/5 w-full overflow-hidden bg-ink sm:aspect-video">
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1184px"
              className="fade-in object-cover"
            />
          </div>

          <div className="mt-6 flex items-center justify-between gap-6 border-t-2 border-ink pt-6">
            <p className="text-[clamp(1.75rem,3.5vw,3rem)] font-black leading-none tracking-tight tabular-nums" aria-live="polite">
              {pad(currentPhoto + 1)}
              <span className="text-muted">/{pad(photos.length)}</span>
            </p>
            <p className="hidden flex-1 text-base text-muted md:block">Phan Thiết · {photo.alt}</p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setCurrentPhoto((currentPhoto - 1 + photos.length) % photos.length)}
                className="icon-btn"
                aria-label="Ảnh trước / Previous photo"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentPhoto((currentPhoto + 1) % photos.length)}
                className="icon-btn"
                aria-label="Ảnh tiếp theo / Next photo"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
