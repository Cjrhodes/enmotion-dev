import React from 'react'
interface Props {
    currentBlogItem?: {
        title: string;
        date?: string;
    }
}
const BlogModalText = ({currentBlogItem} : Props) => {
  return (
    <div className="blog-text-container">
        <div className="text-top-section">
            <h4 className="blog-title-text">{currentBlogItem?.title}</h4>
            <div className="rightside-text">
                <p><i className="fa-light fa-user"></i>  Author: John Doe</p>
                <p><i className="fa-light fa-clock"></i> {currentBlogItem?.date? currentBlogItem?.date : '23 November 2023' }</p>
            </div>
        </div>
        <div className="text-bottom-section">
            <p>In this immersive journey through the realms of artificial intelligence, we delve into the captivating world of deep learning. Unveiling the mysteries behind neural networks and sophisticated algorithms, our exploration takes us beyond the surface of traditional machine learning. With every layer of the network, we uncover the intricate patterns that enable machines to learn, adapt, and evolve.</p>
            <p>The journey begins with the fundamental principles, demystifying the building blocks of deep learning architecture. From convolutional layers extracting features in image recognition to recurrent layers unraveling the context in sequential data, the blog post navigates through the intricate web of connections that mimics the human brain.</p>
            <h4 className='blog-paragraph-title'>Application In Real World</h4>
            <p>Venturing into real-world applications, we witness the transformative impact of deep learning across diverse industries. From healthcare diagnostics to autonomous vehicles, the blog sheds light on the innovative solutions powered by neural networks.</p>
            <h4 className='blog-paragraph-title'>Conclusion</h4>
            <p>As we conclude this exploration, the blog leaves you with a newfound appreciation for the advancements in deep learning, sparking curiosity about the limitless possibilities that lie ahead. Whether you are a seasoned data scientist or a curious enthusiast, embark on this journey with us, and let the layers of deep learning unfold before your eyes.</p>
        </div>
    </div>
  )
}

export default BlogModalText