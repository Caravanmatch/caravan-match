export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export const pageview = () => {
    if (typeof (window as any).fbq !== "undefined") {
        (window as any).fbq("track", "PageView");
    }
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}) => {
    if (typeof (window as any).fbq !== "undefined") {
        (window as any).fbq("track", name, options);
    }
};
