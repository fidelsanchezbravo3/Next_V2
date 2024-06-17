import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Prices',
 description: 'Cátalogo de precios de los productos de la empresa',
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}