import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { CgShare, CgFacebook, CgTwitter } from "react-icons/cg";
import { SiWhatsapp } from "react-icons/si";
import { useSelector } from "react-redux";
import {
  ArticleBanner,
  ArticleImage,
  ArticleDetails,
  ArticleTitle,
  PostMeta,
  AuthorWrapper,
  AuthorBy,
  AuthorName,
  PostedOn,
  PostShare,
  IconWrapper,
  DividerWrapper,
  ShareWrapper,
  PostFooter,
  FooterAuthorWrapper,
  FooterAuthorName,
  AuthorDetails,
  FooterAuthorEmail,
} from "../../styles/article";

const ArticlePost = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.image);
  const link: any = `${process.env.NEXT_PUBLIC_URL}/article/${article.slug}`;

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };
  const global = useSelector((state: any) => state.global);
  return (
    <Layout categories={categories}>
      <Seo seo={seo} global={global} />
      <ArticleBanner>
        <ArticleImage>
          <div className="unset-img">
            <Image
              src={imageUrl}
              alt={article.title}
              layout="fill"
              className="custom-img"
            />
          </div>
        </ArticleImage>

        <ArticleDetails>
          <ArticleTitle>{article.title}</ArticleTitle>
          <PostMeta>
            <AuthorWrapper>
              <Image
                src={getStrapiMedia(article.author.picture)}
                alt={article.author.name}
                layout="fill"
              />
            </AuthorWrapper>
            <AuthorBy>by</AuthorBy>
            <AuthorName>{article.author.name}</AuthorName>
            <AuthorBy>-</AuthorBy>
            <PostedOn>
              <Moment format="MMM Do YYYY">{article.published_at}</Moment>
            </PostedOn>
          </PostMeta>
        </ArticleDetails>
      </ArticleBanner>
      <div className="container">
        <PostShare>
          <IconWrapper>
            <CgShare />
          </IconWrapper>
          <DividerWrapper>|</DividerWrapper>
          <ShareWrapper>Share</ShareWrapper>
          <IconWrapper>
            <a
              href={`https://www.facebook.com/sharer.php?u=${link}`}
              target="_blank"
              rel="noreferrer"
            >
              <CgFacebook />
            </a>
          </IconWrapper>
          <IconWrapper>
            <a
              href={`https://twitter.com/intent/tweet?url=${link}&text=${article.title}`}
              target="_blank"
              rel="noreferrer"
            >
              <CgTwitter />
            </a>
          </IconWrapper>
          <IconWrapper>
            <a
              href={`https://api.whatsapp.com/send?text=${article.title} %0A%0A ${link}`}
              target="_blank"
              rel="noreferrer"
            >
              <SiWhatsapp />
            </a>
          </IconWrapper>
        </PostShare>
        <ReactMarkdown skipHtml={true}>{article.content}</ReactMarkdown>
        <PostFooter>
          <FooterAuthorWrapper>
            <Image
              src={getStrapiMedia(article.author.picture)}
              alt={article.author.name}
              layout="fill"
            />
          </FooterAuthorWrapper>
          <AuthorDetails>
            <FooterAuthorName>{article.author.name}</FooterAuthorName>
            <FooterAuthorEmail>{article.author.email}</FooterAuthorEmail>
          </AuthorDetails>
        </PostFooter>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`);
  const categories = await fetchAPI("/categories");

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default ArticlePost;
