"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CARAVAN_MAKES, CARAVAN_CATEGORIES, STATES } from "@/lib/constants";

export default function AdvertisePage({ dealer }: { dealer?: any }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [mounted, setMounted] = useState(false);
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);

    // Auth State
    const [user, setUser] = useState<any>(null);
    const [loadingAuth, setLoadingAuth] = useState(!dealer); // If dealer passed, no need to load auth

    // State for form data
    const [formData, setFormData] = useState({
        condition: 'Used', // Default
        category: '',
        year: '',
        make: '',
        model: '',
        length: '',
        sleeps: '2',
        price: '',
        description: '',
        firstName: dealer?.contactName?.split(' ')[0] || '',
        lastName: dealer?.contactName?.split(' ').slice(1).join(' ') || '',
        email: dealer?.email || '',
        phone: dealer?.phone || '',
        suburb: '',
        state: '',
        videoUrl: ''
    });

    // Validated photos state
    const [photos, setPhotos] = useState<File[]>([]);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newPhotos = Array.from(e.target.files);
            // Limit to 20 photos total
            const totalPhotos = [...photos, ...newPhotos].slice(0, 20);

            setPhotos(totalPhotos);

            // Generate previews
            const newPreviews = totalPhotos.map(file => URL.createObjectURL(file));
            setPreviewUrls(newPreviews);
        }
    };

    const removePhoto = (index: number) => {
        const newPhotos = [...photos];
        newPhotos.splice(index, 1);
        setPhotos(newPhotos);

        const newPreviews = [...previewUrls];
        // Revoke old URL to avoid memory leaks
        URL.revokeObjectURL(newPreviews[index]);
        newPreviews.splice(index, 1);
        setPreviewUrls(newPreviews);
    };

    const editId = searchParams.get('edit');
    const isEditMode = !!editId;

    const handleNext = () => setStep(step + 1);

    const handleSubmit = async () => {
        setLoading(true);

        try {
            // 0. Upload Photos
            const uploadedImageUrls: string[] = [];
            if (photos.length > 0) {
                // Determine if we need to upload (File objects) or keep existing (Strings - if edit mode support added later)
                // For now, photos check is simple.

                // Show uploading status
                // console.log("Uploading " + photos.length + " photos...");
            }

            for (const file of photos) {
                const data = new FormData();
                data.append('file', file);

                const uploadRes = await fetch('/api/upload', {
                    method: 'POST',
                    body: data
                });

                if (uploadRes.ok) {
                    const blob = await uploadRes.json();
                    uploadedImageUrls.push(blob.url);
                } else {
                    console.error("Failed to upload a photo");
                }
            }

            const url = isEditMode ? `/api/listings/${editId}` : '/api/listings';
            const method = isEditMode ? 'PUT' : 'POST';

            // Construct payload
            const payload = {
                ...formData,
                images: uploadedImageUrls,
                location: `${formData.suburb}, ${formData.state}`.replace(/^, /, '').replace(/, $/, '') // Combine suburb and state
            };

            // 1. Create/Update Listing
            const res = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                const data = await res.json();

                // DEALER BYPASS LOGIC (OR EDIT SUCCESS)
                if (dealer || isEditMode) {
                    alert(isEditMode ? "Listing Updated! 💾" : "Listing Published Successfully! 🚀");
                    router.push('/dealer/dashboard/inventory');
                    return;
                }

                // 2. Initiate Stripe Checkout ($70) for non-dealers (Only on create)
                const payRes = await fetch('/api/stripe/checkout', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ listingId: data.id })
                });

                if (payRes.ok) {
                    const payData = await payRes.json();
                    if (payData.url) {
                        window.location.href = payData.url;
                        return;
                    }
                }

                alert("Payment initiation failed. Please try again.");
            } else {
                const err = await res.json();
                alert("Error: " + (err.error || "Something went wrong"));
            }
        } catch (e) {
            console.error(e);
            alert("Error submitting form");
        } finally {
            setLoading(false);
        }
    };

    const handleGenerateDescription = async () => {
        if (!formData.make || !formData.year) {
            alert("Please enter at least the Year and Make first.");
            return;
        }

        setIsGenerating(true);
        try {
            const res = await fetch('/api/generate-description', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    make: formData.make,
                    model: formData.model,
                    year: formData.year,
                    condition: formData.condition,
                    category: formData.category,
                    length: formData.length,
                    sleeps: formData.sleeps
                })
            });

            const data = await res.json();
            if (data.description) {
                setFormData(prev => ({ ...prev, description: data.description }));
            } else {
                alert("Could not generate description. Please try again.");
            }
        } catch (e) {
            console.error(e);
            alert("AI Error: Check your connection.");
        } finally {
            setIsGenerating(false);
        }
    };

    // Helper to parse location string
    const parseLocation = (loc: string = '') => {
        if (!loc) return { suburb: '', state: '' };
        const parts = loc.split(',').map(s => s.trim());
        if (parts.length >= 2) {
            return {
                state: parts.pop() || '',
                suburb: parts.join(', ')
            };
        }
        return { suburb: loc, state: '' };
    };

    // Load Edit Data
    useEffect(() => {
        if (editId) {
            setLoading(true);
            fetch(`/api/listings/${editId}`)
                .then(res => res.json())
                .then(data => {
                    if (data.error) {
                        alert("Could not load listing");
                        return;
                    }
                    const { suburb, state } = parseLocation(data.location);

                    // Populate form
                    setFormData(prev => ({
                        ...prev,
                        condition: data.condition || 'Used',
                        category: data.category,
                        year: data.year.toString(),
                        make: data.make,
                        model: data.model,
                        length: data.length.toString(),
                        sleeps: data.sleeps,
                        price: data.price.toString(),
                        description: data.description,
                        firstName: data.sellerName?.split(' ')[0] || '',
                        lastName: data.sellerName?.split(' ').slice(1).join(' ') || '',
                        email: data.sellerEmail,
                        phone: data.sellerPhone,
                        suburb,
                        state
                    }));
                    // TODO: Handle Image Previews (Currently skipping for MVP)
                })
                .catch(err => console.error(err))
                .finally(() => setLoading(false));
        }
    }, [editId]);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Auth Check (Only if not already identified as dealer)
    useEffect(() => {
        if (dealer) {
            // Pre-fill dealer location if available
            const { suburb, state } = parseLocation(dealer.location);
            setFormData(prev => ({ ...prev, suburb, state }));
            return;
        }

        const checkAuth = async () => {
            try {
                // 5 second timeout to prevent hanging
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 5000);

                const res = await fetch('/api/auth/me', { signal: controller.signal });
                clearTimeout(timeoutId);

                if (res.ok) {
                    const data = await res.json();
                    if (data.user) {
                        setUser(data.user);
                        const { suburb, state } = parseLocation(data.user.location);
                        setFormData(prev => ({
                            ...prev,
                            firstName: data.user.name?.split(' ')[0] || '',
                            lastName: data.user.name?.split(' ').slice(1).join(' ') || '',
                            email: data.user.email || '',
                            phone: data.user.phone || '',
                            suburb,
                            state
                        }));
                    }
                }
            } catch (e) {
                console.error("Auth check failed or timed out:", e);
            } finally {
                setLoadingAuth(false);
            }
        };
        checkAuth();
    }, [dealer]);

    // Scroll to price section logic
    useEffect(() => {
        if (searchParams.get('paid') === 'true') {
            const pricingSection = document.getElementById('pricing');
            if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [searchParams]);

    // Prevent hydration mismatch
    if (!mounted) {
        return <div className="min-h-screen bg-background" />;
    }

    if (loadingAuth) {
        return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
    }

    // Require Auth (Dealer OR User)
    if (!user && !dealer) {
        return (
            <div className="min-h-screen bg-background pt-32 pb-20 px-6">
                <div className="max-w-md mx-auto text-center">
                    <h1 className="text-3xl font-heading font-bold text-white mb-4">Sell Your Van</h1>
                    <p className="text-muted mb-8">You must be logged in to create a listing.</p>

                    <div className="space-y-4">
                        <Link href="/login?redirect=/advertise" className="block w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover shadow-lg shadow-primary/20 transition">
                            Login (Private)
                        </Link>
                        <Link href="/dealer/login?redirect=/advertise" className="block w-full py-4 bg-zinc-800 text-white font-bold rounded-xl hover:bg-zinc-700 transition">
                            Login (Dealer)
                        </Link>
                        <Link href="/" className="block text-sm text-zinc-500 hover:text-white">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6">
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12 space-y-4">
                    <h1 className="text-4xl font-heading font-bold">{dealer ? `Manage Inventory: ${dealer.company}` : 'Sell Your Caravan'}</h1>
                    <p className="text-xl text-muted">{dealer ? 'Add new or used stock instantly.' : 'Estimated time: 3 minutes. Reach thousands of buyers.'}</p>
                </div>

                {/* Dealer Mode Banner */}
                {dealer && (
                    <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-xl text-center mb-8">
                        <span className="font-bold text-purple-400">⚡ Dealer Mode Enabled:</span> <span className="text-purple-200">Unlimited Free Listings active. No payment required.</span>
                    </div>
                )}

                {/* Progress Bar */}
                <div className="flex justify-between items-center mb-10 relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -z-10" />
                    {[1, 2, 3].map((s) => (
                        <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= s ? 'bg-primary text-white' : 'bg-surface border border-white/20 text-muted'}`}>
                            {s}
                        </div>
                    ))}
                </div>

                {/* Step 1: Specs */}
                {step === 1 && (
                    <div className="bg-surface border border-white/10 rounded-2xl p-8 space-y-6 animate-in fade-in slide-in-from-bottom-4">
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-4">1. Caravan Details</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Condition (Available to all) */}
                            <div className="space-y-2 col-span-2">
                                <label className="text-sm font-medium text-muted">Condition</label>
                                <div className="flex gap-4">
                                    {['New', 'Used', 'Demo'].map(c => (
                                        <label key={c} className={`flex-1 cursor-pointer border rounded-lg p-3 text-center transition ${formData.condition === c ? 'bg-primary text-white border-primary' : 'bg-background border-white/10 hover:border-white/30'}`}>
                                            <input
                                                type="radio"
                                                name="condition"
                                                value={c}
                                                checked={formData.condition === c}
                                                onChange={handleInputChange}
                                                className="hidden"
                                            />
                                            <span className="font-bold">{c}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Category</label>
                                <select name="category" value={formData.category} onChange={handleInputChange} className="w-full bg-background border border-white/10 rounded-lg p-3 outline-none focus:border-primary">
                                    <option value="" className="bg-zinc-900 text-white">Select Category...</option>
                                    {CARAVAN_CATEGORIES.map(cat => (
                                        <option key={cat} value={cat} className="bg-zinc-900 text-white">{cat}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Year</label>
                                <input name="year" value={formData.year} onChange={handleInputChange} type="number" placeholder="e.g. 2020" className="w-full bg-background border border-white/10 rounded-lg p-3 outline-none focus:border-primary" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Make</label>
                                <select name="make" value={formData.make} onChange={handleInputChange} className="w-full bg-background border border-white/10 rounded-lg p-3 outline-none focus:border-primary">
                                    <option value="" className="bg-zinc-900 text-white">Select Make...</option>
                                    {CARAVAN_MAKES.map(make => (
                                        <option key={make} value={make} className="bg-zinc-900 text-white">{make}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Model</label>
                                <input name="model" value={formData.model} onChange={handleInputChange} type="text" placeholder="e.g. Journey Outback" className="w-full bg-background border border-white/10 rounded-lg p-3 outline-none focus:border-primary" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Length (ft)</label>
                                <input name="length" value={formData.length} onChange={handleInputChange} type="number" placeholder="20" className="w-full bg-background border border-white/10 rounded-lg p-3 outline-none focus:border-primary" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Sleeps</label>
                                <select name="sleeps" value={formData.sleeps} onChange={handleInputChange} className="w-full bg-background border border-white/10 rounded-lg p-3 outline-none focus:border-primary">
                                    <option value="2" className="bg-zinc-900 text-white">2</option>
                                    <option value="3" className="bg-zinc-900 text-white">3</option>
                                    <option value="4" className="bg-zinc-900 text-white">4</option>
                                    <option value="5" className="bg-zinc-900 text-white">5</option>
                                    <option value="6+" className="bg-zinc-900 text-white">6+</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Asking Price ($)</label>
                                <input name="price" value={formData.price} onChange={handleInputChange} type="number" placeholder="65000" className="w-full bg-background border border-white/10 rounded-lg p-3 outline-none focus:border-primary" />
                            </div>
                        </div>

                        <button onClick={handleNext} className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition mt-4">
                            Next: Photos & Description &rarr;
                        </button>
                    </div>
                )}

                {/* Step 2: Media */}
                {step === 2 && (
                    <div className="bg-surface border border-white/10 rounded-2xl p-8 space-y-6 animate-in fade-in slide-in-from-bottom-4">
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-4">2. Photos & Description</h2>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-medium">Description</label>
                                <button
                                    onClick={handleGenerateDescription}
                                    disabled={isGenerating}
                                    className="text-xs bg-purple-600 hover:bg-purple-500 text-white px-3 py-1 rounded-full flex items-center gap-1 transition disabled:opacity-50"
                                >
                                    {isGenerating ? '✨ Magic Writing...' : '✨ Rewrite with AI'}
                                </button>
                            </div>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                rows={6}
                                placeholder="Describe the condition, upgrades, and history of your van..."
                                className="w-full bg-background border border-white/10 rounded-lg p-3 outline-none focus:border-primary"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">YouTube/Video Link (Optional)</label>
                            <input
                                name="videoUrl"
                                value={formData.videoUrl}
                                onChange={handleInputChange}
                                type="url"
                                placeholder="https://youtu.be/..."
                                className="w-full bg-background border border-white/10 rounded-lg p-3 outline-none focus:border-primary"
                            />
                            <p className="text-xs text-muted">Paste a link to a YouTube walkaround.</p>
                        </div>

                        <div className="space-y-4">
                            <label className="text-sm font-medium">Photos (Max 20)</label>

                            {/* Hidden File Input */}
                            <input
                                type="file"
                                id="photo-upload"
                                multiple
                                accept="image/*"
                                className="hidden"
                                onChange={handlePhotoSelect}
                            />

                            {/* Upload Box */}
                            <label
                                htmlFor="photo-upload"
                                className="block border-2 border-dashed border-white/10 rounded-xl p-10 text-center hover:border-primary/50 transition cursor-pointer bg-white/5"
                            >
                                <p className="text-4xl mb-2">📷</p>
                                <p className="font-bold">Click to upload photos</p>
                                <p className="text-sm text-muted">JPG, PNG up to 10MB</p>
                            </label>

                            {/* Preview Grid */}
                            {previewUrls.length > 0 && (
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                                    {previewUrls.map((url, index) => (
                                        <div key={index} className="relative aspect-video bg-black/50 rounded-lg overflow-hidden group">
                                            <img src={url} alt={`Preview ${index}`} className="w-full h-full object-cover" />
                                            <button
                                                onClick={() => removePhoto(index)}
                                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition shadow-lg"
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex gap-4">
                            <button onClick={() => setStep(1)} className="flex-1 py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition">
                                &larr; Back
                            </button>
                            <button onClick={handleNext} className="flex-1 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition">
                                Next: Contact Details &rarr;
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Contact */}
                {step === 3 && (
                    <div className="bg-surface border border-white/10 rounded-2xl p-8 space-y-6 animate-in fade-in slide-in-from-bottom-4">
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-4">3. Contact Details</h2>
                        <p className="text-sm text-muted">Your phone number will be hidden by default unless you choose to show it.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">First Name</label>
                                <input name="firstName" value={formData.firstName} onChange={handleInputChange} type="text" className="w-full bg-background border border-white/10 rounded-lg p-3 outline-none focus:border-primary" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Last Name</label>
                                <input name="lastName" value={formData.lastName} onChange={handleInputChange} type="text" className="w-full bg-background border border-white/10 rounded-lg p-3 outline-none focus:border-primary" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <input name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full bg-background border border-white/10 rounded-lg p-3 outline-none focus:border-primary" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Phone</label>
                                <input name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full bg-background border border-white/10 rounded-lg p-3 outline-none focus:border-primary" />
                            </div>
                        </div>

                        {/* Location: Suburb + State */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium">Suburb</label>
                                <input
                                    name="suburb"
                                    value={formData.suburb}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="e.g. Richmond"
                                    className="w-full bg-background border border-white/10 rounded-lg p-3 outline-none focus:border-primary"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">State</label>
                                <select
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    className="w-full bg-background border border-white/10 rounded-lg p-3 outline-none focus:border-primary"
                                >
                                    <option value="" className="bg-zinc-900 text-white">Select State...</option>
                                    {STATES.map(s => (
                                        <option key={s} value={s} className="bg-zinc-900 text-white">{s}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-xl text-center mt-6">
                            <p className="font-bold text-yellow-400 mb-1">Listing Terms</p>
                            <p className="text-yellow-200/80 text-sm">
                                Your ad remains live for <strong>6 Months</strong>.
                                <br />
                                We will email you at 5 months to check if it's sold.
                                <br />
                                If unsold, you can choose to extend or it will auto-expire.
                            </p>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button onClick={() => setStep(2)} className="flex-1 py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition">
                                &larr; Back
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className={`flex-1 py-4 font-bold rounded-xl transition flex items-center justify-center gap-2 ${loading ? 'bg-zinc-700' : 'bg-primary hover:bg-primary-hover text-white'}`}
                            >
                                {loading ? 'Uploading Photos & Publishing...' : (dealer ? 'Publish Listing (Free) 🚀' : 'Pay $89 (6 Months) 🚀')}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
