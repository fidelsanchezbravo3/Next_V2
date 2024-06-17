import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'About us',
 description: 'Página para mostrar la información de la empresa',
 keywords: ['About Page', 'Fide', 'Información']
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}