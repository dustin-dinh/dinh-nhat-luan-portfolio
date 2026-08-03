"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BriefcaseBusiness, Camera, ChevronLeft, ChevronRight, Compass, Database } from "lucide-react";

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

export default function About() {
  const { t } = useLanguage();
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setCurrentPhoto((index) => (index + 1) % photos.length),
      10000
    );
    return () => window.clearInterval(timer);
  }, [currentPhoto]);

  return (
    <>
      <section id="about" className="border-y border-[#D3DAD9]/10 bg-[#44444E] py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-md border border-[#A98A8A]/30 bg-[#715A5A]/25 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#E5D5D5]">
              {t.about.sectionTag}
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.about.title}
            </h2>
          </div>

          <div className="portfolio-card rounded-3xl border border-[#D3DAD9]/12 bg-[#37353E] p-6 shadow-2xl shadow-black/15 sm:p-9">
            <h3 className="flex items-center gap-2.5 text-xl font-bold text-white">
              <Compass className="h-5 w-5 text-[#A98A8A]" />
              {t.about.whoIAmTitle}
            </h3>
            <p className="mt-5 max-w-4xl text-base leading-8 text-[#D3DAD9]">
              {t.about.bio}
            </p>

            <div className="mt-7 grid gap-4 border-t border-[#D3DAD9]/10 pt-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Database className="mt-0.5 h-5 w-5 shrink-0 text-[#A98A8A]" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#AEB4B3]">
                    {t.about.coreInterestLabel}
                  </span>
                  <p className="mt-1 text-sm font-semibold text-white">{t.about.coreInterestValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BriefcaseBusiness className="mt-0.5 h-5 w-5 shrink-0 text-[#A98A8A]" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#AEB4B3]">
                    {t.about.mindsetLabel}
                  </span>
                  <p className="mt-1 text-sm font-semibold text-[#E5D5D5]">{t.about.mindsetValue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="photography" className="bg-[#37353E] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-md border border-[#A98A8A]/30 bg-[#715A5A]/25 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#E5D5D5]">
              <Camera className="h-3.5 w-3.5" />
              {t.photography.sectionTag}
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.photography.title}
            </h2>
            <p className="mt-4 leading-7 text-[#D3DAD9]">{t.photography.description}</p>
          </div>

          <div
            className="relative mx-auto mt-10 h-[58vw] min-h-[230px] max-h-[440px] w-full max-w-5xl"
            role="region"
            aria-roledescription="carousel"
            aria-label="Bộ ảnh Phan Thiết"
          >
            {photos.map((photo, index) => {
              const previousPhoto = (currentPhoto - 1 + photos.length) % photos.length;
              const nextPhoto = (currentPhoto + 1) % photos.length;
              const isCurrent = index === currentPhoto;
              const isPrevious = index === previousPhoto;
              const isNext = index === nextPhoto;
              const isVisible = isCurrent || isPrevious || isNext;

              return (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setCurrentPhoto(index)}
                  disabled={!isVisible || isCurrent}
                  className={`group absolute top-1/2 aspect-[4/3] overflow-hidden rounded-2xl border bg-[#44444E] shadow-2xl transition-[left,width,transform,opacity,filter,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isCurrent
                      ? "z-20 border-[#D3DAD9]/20 opacity-100 blur-0 group-hover:border-[#A98A8A]/80 group-hover:shadow-[0_28px_72px_rgba(0,0,0,0.42)]"
                      : isVisible
                        ? "z-10 cursor-pointer border-[#D3DAD9]/10 opacity-40 blur-[2px] hover:opacity-65 hover:blur-[1px]"
                        : "pointer-events-none z-0 border-transparent opacity-0 blur-sm"
                  }`}
                  style={{
                    left: isPrevious ? "0%" : isNext ? "73%" : "50%",
                    width: isCurrent ? "52%" : isVisible ? "27%" : "18%",
                    transform: isCurrent
                      ? "translate(-50%, -50%) scale(1)"
                      : isPrevious
                        ? "translate(0, -50%) scale(0.84)"
                        : isNext
                          ? "translate(0, -50%) scale(0.84)"
                          : "translate(-50%, -50%) scale(0.7)",
                  }}
                  aria-label={isPrevious ? "Mở ảnh trước" : isNext ? "Mở ảnh tiếp theo" : photo.alt}
                  aria-current={isCurrent}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 1023px) 52vw, 532px"
                    className={`object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isCurrent ? "group-hover:scale-105" : ""}`}
                  />
                  {isCurrent && (
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#37353E]/80 to-transparent px-5 pb-4 pt-12 text-left text-sm font-semibold text-white">
                      Phan Thiết · {String(currentPhoto + 1).padStart(2, "0")}/{String(photos.length).padStart(2, "0")}
                    </span>
                  )}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => setCurrentPhoto((currentPhoto - 1 + photos.length) % photos.length)}
              className="absolute left-[5%] top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#37353E]/70 text-white shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-[#715A5A] focus:outline-none focus:ring-2 focus:ring-[#A98A8A]"
              aria-label="Ảnh trước / Previous photo"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setCurrentPhoto((currentPhoto + 1) % photos.length)}
              className="absolute right-[5%] top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#37353E]/70 text-white shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-[#715A5A] focus:outline-none focus:ring-2 focus:ring-[#A98A8A]"
              aria-label="Ảnh tiếp theo / Next photo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute inset-x-0 bottom-0 z-30 flex justify-center gap-1.5" aria-label="Chọn ảnh">
              {photos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setCurrentPhoto(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === currentPhoto ? "w-7 bg-[#A98A8A]" : "w-1.5 bg-white/35 hover:bg-white/70"
                  }`}
                  aria-label={`Mở ảnh ${index + 1}`}
                  aria-current={index === currentPhoto}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
