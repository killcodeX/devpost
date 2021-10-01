import React from "react";
import Link from "next/link";
import Image from "../image";
import {
  CardWrapper,
  CardUpper,
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
        <Image image={article.image} />
      </CardUpper>
      <CardLower>
        <ArticleDetails>
          <ArticleCategory>{article.category.name}</ArticleCategory>
          <ArticleDate>1/02/21</ArticleDate>
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
