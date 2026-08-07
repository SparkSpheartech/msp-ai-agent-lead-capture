"use client";
import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function AffiliateClickTracker({ 
  product, 
  children, 
  className = "", 
  variant = "button" 
}) {
  const handleClick = (e) => {
    // 1. GA4 / GTag event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'affiliate_click', {
        event_category: 'Affiliate',
        event_label: product.name,
        product_id: product.id,
        vertical: product.vertical,
        value: product.price
      });
      window.gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION-PLACEHOLDER/affiliate_click',
        value: 1.0,
        currency: 'USD'
      });
    }

    // 2. Facebook Pixel Lead Event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: product.name,
        content_category: product.vertical,
        value: 1.0,
        currency: 'USD'
      });
    }

    // Console debug signal for local testing
    console.log(`[AffiliateClickTracker] Pixel & event fired for ${product.name} (${product.affiliateUrl})`);
  };

  const isPlaceholder = !product.affiliateUrl || product.affiliateUrl === '#';
  const url = isPlaceholder ? '#' : product.affiliateUrl;

  if (variant === "custom") {
    return (
      <a
        href={url}
        target={isPlaceholder ? "_self" : "_blank"}
        rel="noopener noreferrer sponsored"
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={url}
      target={isPlaceholder ? "_self" : "_blank"}
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-lime-500 text-zinc-950 font-bold rounded-xl hover:bg-lime-400 transition-all text-sm shadow-md shadow-lime-500/20 ${className}`}
    >
      {children || (
        <>
          <span>Get {product.name}</span>
          <ExternalLink size={14} />
        </>
      )}
    </a>
  );
}
