import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X08BlogsPageDESKTOP from "./components/X08BlogsPageDESKTOP";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|08-blogs-page-desktop)">
          <X08BlogsPageDESKTOP {...x08BlogsPageDESKTOPData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const plusData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-174@2x.svg",
};

const frame1587Data = {
    text253: "Read More",
    plusProps: plusData,
};

const blogCardData = {
    blogThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-9@2x.png",
    address: "5 June 2021",
    text251: "Lorem Ipsum passages of Lorem Ipsum available",
    text252: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo,…",
    frame1587Props: frame1587Data,
};

const plus2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-174@2x.svg",
};

const frame15872Data = {
    text253: "Read More",
    plusProps: plus2Data,
};

const blogCard2Data = {
    blogThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-12@2x.png",
    address: "5 June 2021",
    text254: "Lorem Ipsum passages of Lorem Ipsum available",
    text255: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo,…",
    frame1587Props: frame15872Data,
};

const plus3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-174@2x.svg",
};

const frame15873Data = {
    text253: "Read More",
    plusProps: plus3Data,
};

const blogCard3Data = {
    blogThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-15@2x.png",
    address: "5 June 2021",
    text251: "Lorem Ipsum passages of Lorem Ipsum available",
    text252: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo,…",
    className: "blog-card",
    frame1587Props: frame15873Data,
};

const plus4Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-174@2x.svg",
};

const frame15874Data = {
    text253: "Read More",
    plusProps: plus4Data,
};

const blogCard22Data = {
    blogThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-10@2x.png",
    address: "5 June 2021",
    text254: "Lorem Ipsum passages of Lorem Ipsum available",
    text255: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo,…",
    className: "blog-card-2",
    frame1587Props: frame15874Data,
};

const plus5Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-174@2x.svg",
};

const frame15875Data = {
    text253: "Read More",
    plusProps: plus5Data,
};

const blogCard4Data = {
    blogThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-13@2x.png",
    address: "5 June 2021",
    text251: "Lorem Ipsum passages of Lorem Ipsum available",
    text252: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo,…",
    className: "blog-card",
    frame1587Props: frame15875Data,
};

const plus6Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-174@2x.svg",
};

const frame15876Data = {
    text253: "Read More",
    plusProps: plus6Data,
};

const blogCard5Data = {
    blogThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-16@2x.png",
    address: "5 June 2021",
    text251: "Lorem Ipsum passages of Lorem Ipsum available",
    text252: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo,…",
    className: "blog-card",
    frame1587Props: frame15876Data,
};

const frame1641Data = {
    blogCard2Props: blogCard22Data,
    blogCardProps: blogCard4Data,
    blogCard2Props2: blogCard5Data,
};

const plus7Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-174@2x.svg",
};

const frame15877Data = {
    text253: "Read More",
    plusProps: plus7Data,
};

const blogCard23Data = {
    blogThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-11@2x.png",
    address: "5 June 2021",
    text254: "Lorem Ipsum passages of Lorem Ipsum available",
    text255: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo,…",
    className: "blog-card-2",
    frame1587Props: frame15877Data,
};

const plus8Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-174@2x.svg",
};

const frame15878Data = {
    text253: "Read More",
    plusProps: plus8Data,
};

const blogCard6Data = {
    blogThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-14@2x.png",
    address: "5 June 2021",
    text251: "Lorem Ipsum passages of Lorem Ipsum available",
    text252: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo,…",
    className: "blog-card",
    frame1587Props: frame15878Data,
};

const plus9Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-174@2x.svg",
};

const frame15879Data = {
    text253: "Read More",
    plusProps: plus9Data,
};

const blogCard7Data = {
    blogThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-17@2x.png",
    address: "5 June 2021",
    text251: "Lorem Ipsum passages of Lorem Ipsum available",
    text252: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo,…",
    className: "blog-card",
    frame1587Props: frame15879Data,
};

const frame16412Data = {
    blogCard2Props: blogCard23Data,
    blogCardProps: blogCard6Data,
    blogCard2Props2: blogCard7Data,
};

const button22Data = {
    children: "VIEW MORE",
};

const group892Data = {
    line4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4@1x.svg",
    line5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-5@1x.svg",
    line6: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-5@1x.svg",
    line7: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-5@1x.svg",
    line8: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4@1x.svg",
};

const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-15@2x.svg",
    whiteProps: whiteData,
};

const getAQuoteButton222Data = {
    children: "GET A QUOTE",
};

const headerWithBackground22Data = {
    unselectedI2601273: "HOME",
    unselectedI26012732: "ABOUT US",
    unselectedI26012733: "PROJECTS",
    unselectedI26012734: "VIDEOS",
    unselectedI26012735: "INSIGHTS",
    text127: "BLOGS",
    unselectedI26012736: "FAQ’S",
    unselectedI26012737: "CONTACT US",
    group86Props: group86Data,
    getAQuoteButton22Props: getAQuoteButton222Data,
};

const white2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-88@2x.svg",
};

const group86222Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-14@2x.svg",
    whiteProps: white2Data,
};

const facebookAppSymbol3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-2@2x.svg",
};

const twitter3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-102@2x.svg",
};

const frame15783Data = {
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-99@2x.svg",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-100@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-96@2x.svg",
    group86222Props: group86222Data,
    facebookAppSymbol3Props: facebookAppSymbol3Data,
    twitter3Props: twitter3Data,
};

const frame4Data = {
    text41: "About Us",
    text42: "Projects",
    text43: "Videos",
    text44: "Packages",
    text45: "Insights",
    text46: "Blogs",
    text47: "FAQ’s",
};

const frame53Data = {
    text40: "Quick Links",
    frame4Props: frame4Data,
};

const frame42Data = {
    text49: "Construction",
    text50: "Basic",
    place: "Standard",
    text51: "Premium",
    text52: "Luxury",
};

const frame422Data = {
    text49: "Interior",
    text50: "Basic",
    place: "Standard",
    text51: "Premium",
    text52: "Luxury",
    className: "frame-5-1",
};

const frame6Data = {
    text48: "Packages",
    frame42Props: frame42Data,
    frame422Props: frame422Data,
};

const frame43Data = {
    text41: "BBEMP",
    text42: "BWSSB",
    text43: "BESCOM",
    text44: "Procedure",
    text45: "Vaastu",
    text46: "Bye Laws",
    text47: "Tips & Ideas",
};

const frame7Data = {
    text56: "Insights",
    frame4Props: frame43Data,
};

const footer32Data = {
    group32Props: frame15783Data,
    frame5Props: frame53Data,
    frame6Props: frame6Data,
    frame7Props: frame7Data,
};

const x08BlogsPageDESKTOPData = {
    blogs: "Blogs",
    group182: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/releases/60d5732641e2212c658d387b/img/group-182@2x.jpg",
    text278: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing. There are many variations passages of Lorem as Ipsums available but the majority have suffered that alterations in that some form by injected humour or randomised words which don’t looks even slightly that believable. If you are Lorem as Ipsum  you need to be sure there isn’t anything as embarrassing. There are many variation of passages Lorem Ipsum available but the majority have suffered that a aalteration in that some form by injected humour or randomised words which don’t look even slightly the believable.",
    blogCardProps: blogCardData,
    blogCard2Props: blogCard2Data,
    blogCard2Props2: blogCard3Data,
    frame1641Props: frame1641Data,
    frame16412Props: frame16412Data,
    button22Props: button22Data,
    headerWithBackground22Props: group892Data,
    headerWithBackground22Props2: headerWithBackground22Data,
    footer32Props: footer32Data,
};

