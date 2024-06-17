import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact us',
 description: 'Página de contacto de la empresa',
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}