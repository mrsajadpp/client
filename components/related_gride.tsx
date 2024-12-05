'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "@/app/css/gride.css";

interface CardData {
    href: string;
    imageSrc: string;
    alt: string;
    title: string;
    description: string;
}

interface Article {
    id: string;
}

const Card: React.FC<CardData> = ({ href, imageSrc, alt, title, description }) => (
    <div className="card">
        <Link href={href}>
            <Image src={imageSrc} alt={alt} width={500} height={200} className="card__image" layout="responsive" />
            <div className="card-content">
                <p className="card-title">{title}</p>
                <p className="card-paragraph">{description}</p>
            </div>
        </Link>
    </div>
);

// Skeleton Loader Component
const SkeletonLoader = () => (
    <div className="skeleton-card">
        <div className="skeleton-image"></div>
        <div className="skeleton-content">
            <div className="skeleton-title"></div>
            <div className="skeleton-paragraph"></div>
        </div>
    </div>
);

const Gride: React.FC<Article> = ({ id }) => {
    const [data, setData] = useState<CardData[]>([]);
    const [loading, setLoading] = useState(true); // State for loading

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://192.168.1.60:3002/api/article/list/fetch/related?id=' + id);
                const result = await res.json();

                const articles = result.articles.map((article: any) => ({
                    href: `/article/${article.slug}`,
                    imageSrc: article.cover_image,
                    alt: article.title,
                    title: article.title,
                    description: article.description
                }));
                setData(articles);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="grid-container">
            {loading
                ? Array.from({ length: 6 }).map((_, index) => <SkeletonLoader key={index} />) // Display skeleton loaders
                : data.map((card, index) => (
                    <Card
                        key={index}
                        href={card.href}
                        imageSrc={card.imageSrc}
                        alt={card.alt}
                        title={card.title}
                        description={card.description}
                    />
                ))}
        </div>
    );
};

export default Gride;
