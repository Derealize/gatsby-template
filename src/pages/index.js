import * as React from "react";

const IndexPage = () => {
  return (
    <main className="indexContainer">
      <title>Home Page</title>

      <h1 className="title">
        Welcome to{" "}
        <a href="https://derealize.com">Derealize - Tailwindcss Studio!</a>
      </h1>

      <div className="indexBlock">
        <p>
          <a href="/Welcome">Welcome</a>
          <a href="/Play">Play</a>
        </p>
        <p>
          <a href="/Sizing">Sizing</a>
          <a href="/Color">Color</a>
          <a href="/Typography">Typography</a>
          <a href="/Shadows">Shadows</a>
        </p>
        <p>
          <a href="/build-anything/Simple">Simple</a>
          <a href="/build-anything/Playful">Playful</a>
          <a href="/build-anything/Elegant">Elegant</a>
          <a href="/build-anything/Brutalist">Brutalist</a>
        </p>
        <p>
          <a href="/Performance">Performance</a>
          <a href="/Responsive">Responsive</a>
          <a href="/States">States</a>
        </p>
        <p>
          <a href="/component/Recipes">Component</a>
          <a href="/ApplyDirective">
            <a>@apply</a>
          </a>
          <a href="/Dark">Dark</a>
        </p>
        <p>
          <a href="/Grid">Grid</a>
          <a href="/Transforms">Transforms</a>
          <a href="/Gradients">Gradients</a>
        </p>
      </div>
      <div className="indexBlock">
        <h4>Marketing</h4>
        <p>
          <a href="/marketing/Hero">Hero</a>
          <a href="/marketing/Feature">Feature</a>
          <a href="/marketing/CTA">CTA</a>
          <a href="/marketing/Headers">Headers</a>
          <a href="/marketing/Banners">Banners</a>
        </p>
      </div>
      <div className="indexBlock">
        <h4>Application UI</h4>
        <p>
          <a href="/application-ui/Layouts">Layouts</a>
          <a href="/application-ui/Headings">Headings</a>
          <a href="/application-ui/DescriptionLists">DescriptionLists</a>
          <a href="/application-ui/Tables">Tables</a>
          <a href="/application-ui/Navbars">Navbars</a>
          <a href="/application-ui/Pagination">Pagination</a>
          <a href="/application-ui/Modals">Modals</a>
          <a href="/application-ui/SlideOvers">SlideOvers</a>
          <a href="/application-ui/Avatars">Avatars</a>
          <a href="/application-ui/Dropdowns">Dropdowns</a>
        </p>
      </div>
      <div className="indexBlock">
        <h4>Form</h4>
        <p>
          <a href="/application-ui/form/FormLayout">FormLayout</a>
          <a href="/application-ui/form/InputGroups">InputGroups</a>
          <a href="/application-ui/form/SelectMenus">SelectMenus</a>
          <a href="/application-ui/form/SignIn">SignIn</a>
        </p>
      </div>

      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  );
};

export default IndexPage;
