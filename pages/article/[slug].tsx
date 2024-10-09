import "@fontsource/poppins";
import "@/app/css/globals.css";
import Script from 'next/script';
import Image from 'next/image';
import MobileHeader from "@/components/mobile_header";
import DeskHeader from "@/components/desktop_header";
import Gride from "@/components/intrest_gride";
import Footer from "@/components/footer";
import React from 'react';
import { GetServerSideProps } from 'next';
import "@/app/css/article.css";

interface Article {
    author_id: string;
    author_name: string;
    title: string;
    description: string;
    keywords: string;
    body: string;
    created_time: string;
    views: number;
    impressions: number;
    country_views: number;
    slug: string;
    cover_image: string;
    updated_at: string;
    date: string;
}

interface ArticlePageProps {
    article: Article | null;
}

export const metadata = {
    title: "Find Your Perfect Articles, Every Time.",
    description: "Start reading now on Grovix Lab! Explore endless knowledge in your favorite category."
};

const App: React.FC<ArticlePageProps> = ({ article }) => {
    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <>
            <MobileHeader page={"null"} path={""} />
            <div className="topContainer">
                <DeskHeader page={"null"} path={""} />
                <div className="mainContainer">
                    <div className="fitCo">
                        <div className="articleContainer">
                            <article className="article">
                                <h1 className="article-title">{article?.title || 'Untitled'}</h1>
                                <p className="article-author">
                                    By {article?.author_name || 'Unknown'}&nbsp;|&nbsp;{article?.date || 'Date not available'}
                                </p>
                                {article?.cover_image ? (
                                    <img
                                        src={article.cover_image}
                                        alt={article.title}
                                        className="article-image"
                                    />
                                ) : (
                                    <p>No cover image available</p>
                                )}

                                <section className="article-content">
                                    {article?.body ? (
                                        <div dangerouslySetInnerHTML={{ __html: article.body }} />
                                    ) : (
                                        <p>Content not available</p>
                                    )}
                                </section>

                            </article>
                        </div>
                        <div className="sectionTitle">
                            <h2>Related Articles</h2>
                        </div>
                        <div className="grideGroup">
                            <Gride />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};



export const getServerSideProps: GetServerSideProps<ArticlePageProps> = async (context) => {
    const { slug } = context.params as { slug: string }; // Explicitly type params

    try {
        // Make a POST request to your API with the slug
        const response = await fetch('http://192.168.1.60:3001/api/article/fetch', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ slug }), // Send the slug in the request body
        });

        if (!response.ok) {
            throw new Error('Failed to fetch article');
        }

        const data = await response.json();

        const article: Article = data.article; // Parse the JSON response


        return {
            props: { article: article }, // Pass the article to the component as a prop
        };
    } catch (error) {
        console.error(error);
        return {
            props: { article: null }, // Handle the error case
        };
    }
};

export default App;