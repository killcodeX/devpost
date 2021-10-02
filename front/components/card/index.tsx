import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "../../lib/media";
import Moment from "react-moment";
import {
  CardWrapper,
  CardUpper,
  ImageWrapper,
  CardLower,
  ArticleDetails,
  ArticleCategory,
  ArticleDate,
  ArticleAuthor,
  ArticleTitle,
  ArticleDescription,
} from "./style";

export default function Cards({ article }) {
  return (
    <CardWrapper>
      <CardUpper>
        <ImageWrapper>
          <Image
            src={getStrapiMedia(article.image)}
            alt={article.title}
            width={500}
            height={500}
          />
        </ImageWrapper>
      </CardUpper>
      <CardLower>
        <ArticleDetails>
          <ArticleCategory>{article.category.name}</ArticleCategory>
          <ArticleDate>
            <Moment format="Do/MM/YY">{article.published_at}</Moment>
          </ArticleDate>
          <ArticleAuthor>Aaquib Ahmed</ArticleAuthor>
        </ArticleDetails>
        <Link as={`/article/${article.slug}`} href="/article/[id]">
          <ArticleTitle>{article.title}</ArticleTitle>
        </Link>
        <ArticleDescription>{article.description}</ArticleDescription>
      </CardLower>
    </CardWrapper>
  );
}
