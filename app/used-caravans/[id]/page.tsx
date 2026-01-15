import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import ListingGallery from "@/app/components/ListingGallery";
import ListingContactForm from "@/app/components/ListingContactForm";
import { WithContext, Vehicle } from "schema-dts";

type Props = {
    params: Promise<{ id: string }>
}

async function getListing(id: string) {
    const listing = await prisma.usedCaravan.findUnique({
        where: { id },
    });
    return listing;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const listing = await getListing(id);

    if (!listing) {
        return {
            title: "Listing Not Found | Caravan Match",
        };
    }

    const title = `${listing.year} ${listing.make} ${listing.model} | Caravan Match`;
    const desc = `For Sale: ${listing.year} ${listing.make} ${listing.model} in ${listing.location}. ${listing.description.substring(0, 150)}...`;

    return {
        title: title,
        description: desc,
        openGraph: {
            title: title,
            description: desc,
            images: [listing.images && listing.images.length > 0 ? listing.images[0] : ''],
        },
    };
}

export default async function ListingDetailPage({ params }: Props) {
    const { id } = await params;
    const listing = await getListing(id);

    if (!listing) {
        notFound();
    }

    // Increment View Count (Fire and forget, don't await blocking UI)
    prisma.usedCaravan.update({
        where: { id },
        data: { viewCount: { increment: 1 } }
    }).catch(err => console.error("Failed to increment view count", err));

    // JSON-LD Structured Data
    const jsonLd: WithContext<Vehicle> = {
        "@context": "https://schema.org",
        "@type": "Vehicle",
        "name": `${listing.year} ${listing.make} ${listing.model}`,
        "description": listing.description,
        "image": listing.images,
        "vehicleConfiguration": listing.category,
        "modelDate": `${listing.year}`,
        "manufacturer": {
            "@type": "Organization",
            "name": listing.make
        },
        "offers": {
            "@type": "Offer",
            "price": listing.price,
            "priceCurrency": "AUD",
            "itemCondition": "https://schema.org/UsedCondition",
            "availability": "https://schema.org/InStock"
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground pb-20 pt-24 px-6">

            {/* Inject JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* Left: Gallery & Details */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Breadcrumbs */}
                    <div className="flex gap-2 text-sm text-muted">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/used-caravans" className="hover:text-white">Used Caravans</Link>
                        <span>/</span>
                        <span className="text-white">{listing.year} {listing.make} {listing.model}</span>
                    </div>

                    {/* Client Gallery Component */}
                    {/* Passed directly as array now */}
                    <ListingGallery images={listing.images} />

                    {/* Description & Specs */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-3xl font-heading font-bold mb-2">{listing.year} {listing.make} {listing.model}</h1>
                            <p className="text-xl text-primary font-bold">${listing.price.toLocaleString()}</p>
                        </div>

                        <div className="bg-surface border border-white/10 rounded-2xl p-6">
                            <h3 className="font-bold text-lg mb-4">Details</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
                                <span className="bg-white/5 px-3 py-1 rounded-full">Category: {listing.category}</span>
                                <span className="bg-white/5 px-3 py-1 rounded-full">Sleeps: {listing.sleeps}</span>
                                <span className="bg-white/5 px-3 py-1 rounded-full">Length: {listing.length}ft</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-bold text-lg">Description</h3>
                            <p className="text-zinc-300 leading-relaxed whitespace-pre-line">
                                {listing.description}
                            </p>
                        </div>
                    </div>

                    {/* Video Section */}
                    {listing.videoUrl && (
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                <span>🎥</span> Video Tour
                            </h3>
                            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-black">
                                <iframe
                                    src={listing.videoUrl.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                                    title="Video Tour"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Right: Contact Form */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-surface border border-white/10 rounded-2xl p-6 sticky top-28 shadow-2xl">
                        <div className="mb-6 border-b border-white/10 pb-6">
                            <p className="text-sm text-muted mb-1">Selling for</p>
                            <p className="text-4xl font-heading font-bold text-white mb-4">${listing.price.toLocaleString()}</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-white">
                                    {listing.sellerName[0]}
                                </div>
                                <div>
                                    <p className="font-medium text-white">{listing.sellerName}</p>
                                    <p className="text-xs text-muted">Private Seller</p>
                                </div>
                            </div>
                        </div>

                        <h3 className="font-bold text-lg mb-4">Enquire about this van</h3>

                        {/* Client Contact Component */}
                        <ListingContactForm vanTitle={`${listing.year} ${listing.make}`} sellerEmail={listing.sellerEmail} listingId={listing.id} />


                        <p className="text-xs text-center text-muted mt-4">
                            By sending, you agree to our Terms.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
