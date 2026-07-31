"use client";

export const FB_PIXEL_ID = "1241752523807431";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

/**
 * Track standard Meta Pixel events
 */
export const trackMetaEvent = (eventName: string, options: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    try {
      window.fbq("track", eventName, options);
      console.log(`[Meta Pixel Tracked]: ${eventName}`, options);
    } catch (error) {
      console.error("[Meta Pixel Error]:", error);
    }
  }
};

/**
 * Track custom Meta Pixel events
 */
export const trackCustomMetaEvent = (customEventName: string, options: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    try {
      window.fbq("trackCustom", customEventName, options);
      console.log(`[Meta Pixel Custom Tracked]: ${customEventName}`, options);
    } catch (error) {
      console.error("[Meta Pixel Custom Error]:", error);
    }
  }
};
