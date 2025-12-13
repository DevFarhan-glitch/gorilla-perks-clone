import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Facebook, Linkedin, Twitter, Link as LinkIcon } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import CTASection from "@/components/home/CTASection";

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <Layout>
        <div className="container py-32 text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you are looking for does not exist.</p>
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Henleaze Tax Consultancy</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <Layout>
        <div className="pt-24 pb-12 bg-muted/20">
          <div className="container max-w-4xl">
            <Link 
              to="/#blog" 
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-gold transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>
            
            <div className="space-y-4 text-center mb-8">
               <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-foreground bg-primary rounded-full">
                {post.category}
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
            
             <div className="rounded-2xl overflow-hidden shadow-xl mb-12 aspect-video">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <article className="pb-20">
          <div className="container max-w-3xl">
            <div 
              className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground ProseMirror p-4"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
            
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <h4 className="font-display font-bold text-lg">Share this article:</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full hover:text-[#1877F2] hover:border-[#1877F2]">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:text-[#1DA1F2] hover:border-[#1DA1F2]">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:text-[#0A66C2] hover:border-[#0A66C2]">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:text-gold hover:border-gold">
                    <LinkIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        <CTASection />
      </Layout>
    </>
  );
};

export default Article;
