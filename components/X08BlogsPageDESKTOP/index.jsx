import React from "react";
import BlogCard from "../BlogCard";
import BlogCard2 from "../BlogCard2";
import Frame1641 from "../Frame1641";
import Button22 from "../Button22";
import Group892 from "../Group892";
import HeaderWithBackground22 from "../HeaderWithBackground22";
import Footer32 from "../Footer32";
import "./X08BlogsPageDESKTOP.css";

function X08BlogsPageDESKTOP(props) {
  const {
    blogs,
    group182,
    text278,
    blogCardProps,
    blogCard2Props,
    blogCard2Props2,
    frame1641Props,
    frame16412Props,
    button22Props,
    headerWithBackground22Props,
    headerWithBackground22Props2,
    footer32Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x08-blogs-page-desktop screen">
        <div className="overlap-group">
          <div className="frame-1576">
            <div className="overlap-group1">
              <h1 className="title valign-text-middle typographyheadlineh2-extrabold-40">{blogs}</h1>
              <img className="group-182" src={group182} />
              <div className="group-129">
                <div className="overlap-group2">
                  <div className="ellipse-101"></div>
                </div>
                <div className="ellipse-100"></div>
                <div className="ellipse-10"></div>
                <div className="ellipse-10"></div>
                <div className="ellipse-10"></div>
              </div>
              <div className="frame-1568">
                <div className="frame-1640">
                  <BlogCard
                    blogThumbnail={blogCardProps.blogThumbnail}
                    address={blogCardProps.address}
                    text251={blogCardProps.text251}
                    text252={blogCardProps.text252}
                    frame1587Props={blogCardProps.frame1587Props}
                  />
                  <BlogCard2
                    blogThumbnail={blogCard2Props.blogThumbnail}
                    address={blogCard2Props.address}
                    text254={blogCard2Props.text254}
                    text255={blogCard2Props.text255}
                    frame1587Props={blogCard2Props.frame1587Props}
                  />
                  <BlogCard
                    blogThumbnail={blogCard2Props2.blogThumbnail}
                    address={blogCard2Props2.address}
                    text251={blogCard2Props2.text251}
                    text252={blogCard2Props2.text252}
                    className={blogCard2Props2.className}
                    frame1587Props={blogCard2Props2.frame1587Props}
                  />
                </div>
                <Frame1641
                  blogCard2Props={frame1641Props.blogCard2Props}
                  blogCardProps={frame1641Props.blogCardProps}
                  blogCard2Props2={frame1641Props.blogCard2Props2}
                />
                <Frame1641
                  blogCard2Props={frame16412Props.blogCard2Props}
                  blogCardProps={frame16412Props.blogCardProps}
                  blogCard2Props2={frame16412Props.blogCard2Props2}
                />
                <Button22>{button22Props.children}</Button22>
              </div>
              <p className="text-28 typographybody16-regular">{text278}</p>
              <Group892
                line4={headerWithBackground22Props.line4}
                line5={headerWithBackground22Props.line5}
                line6={headerWithBackground22Props.line6}
                line7={headerWithBackground22Props.line7}
                line8={headerWithBackground22Props.line8}
              />
            </div>
          </div>
          <HeaderWithBackground22 {...headerWithBackground22Props2} />
        </div>
        <Footer32
          group32Props={footer32Props.group32Props}
          frame5Props={footer32Props.frame5Props}
          frame6Props={footer32Props.frame6Props}
          frame7Props={footer32Props.frame7Props}
        />
      </div>
    </div>
  );
}

export default X08BlogsPageDESKTOP;
