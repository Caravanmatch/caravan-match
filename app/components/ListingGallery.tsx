"use client";

import { useState } from "react";

export default function ListingGallery({ images }: { images: string[] }) {
    const [activeImage, setActiveImage] = useState(0);

    if (!images || images.length === 0) {
        return <div className="h-[400px] bg-zinc-900 rounded-2xl flex items-center justify-center text-muted">No Images Available</div>;
    }

    return (
        <div className="space-y-4">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={images[activeImage]} alt="Caravan" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 transition flex-shrink-0 ${activeImage === idx ? 'border-primary' : 'border-transparent opacity-70 hover:opacity-100'}`}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
        </div>
    );
}
