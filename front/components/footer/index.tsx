import React from "react";
import Link from "next/link";
import {
  FooterWrapper,
  UpperFooter,
  LogoWrapper,
  LogoTitle,
  LogoSubtitle,
  FooterSectionTitle,
  FooterDescription,
  BottomFooter,
} from "./style";

export default function Footer() {
  return (
    <FooterWrapper>
      <UpperFooter>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12 d-flex align-items-center">
              <Link href="/">
                <LogoWrapper>
                  <LogoTitle>Dev</LogoTitle>
                  <LogoSubtitle>Post</LogoSubtitle>
                </LogoWrapper>
              </Link>
            </div>
            <div className="col-md-6 col-sm-12">
              <FooterSectionTitle>About Us</FooterSectionTitle>
              <FooterDescription>
                Newspaper WordPress Theme is your news, entertainment, music
                fashion website. We provide you with the latest breaking news
                and videos straight from the entertainment industry.
              </FooterDescription>
            </div>
            <div className="col-md-3 col-sm-12">
              <FooterSectionTitle>Follow Us</FooterSectionTitle>
              <FooterDescription>
                Contact Us : <a href='#'>contact@devpost.com</a>
              </FooterDescription>
            </div>
          </div>
        </div>
      </UpperFooter>
      <BottomFooter>
        © DevPost | All rights reserved.
      </BottomFooter>
    </FooterWrapper>
  );
}
