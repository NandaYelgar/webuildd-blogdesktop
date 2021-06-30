import React from "react";
import BlogCard2 from "../BlogCard2";
import BlogCard from "../BlogCard";
import "./Frame1641.css";

function Frame1641(props) {
  const { blogCard2Props, blogCardProps, blogCard2Props2 } = props;

  return (
    <div className="frame-164">
      <BlogCard2
        blogThumbnail={blogCard2Props.blogThumbnail}
        address={blogCard2Props.address}
        text254={blogCard2Props.text254}
        text255={blogCard2Props.text255}
        className={blogCard2Props.className}
        frame1587Props={blogCard2Props.frame1587Props}
      />
      <BlogCard
        blogThumbnail={blogCardProps.blogThumbnail}
        address={blogCardProps.address}
        text251={blogCardProps.text251}
        text252={blogCardProps.text252}
        className={blogCardProps.className}
        frame1587Props={blogCardProps.frame1587Props}
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
  );
}

export default Frame1641;
