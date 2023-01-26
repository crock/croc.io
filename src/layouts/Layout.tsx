import React from "react";
import { MDXProvider } from "@mdx-js/react"
import { Link, Slice } from 'gatsby'
import { Wrapper } from 'crockit-react/core/'

const shortcodes = { Link }

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {

  return (
    <MDXProvider components={shortcodes}>
      <Slice alias="header" />
      <div className="py-10">
        <Wrapper className="mx-auto h-full max-w-5xl px-4 flex justify-between items-center">
            <div className="w-full grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-9">
                <main>{children}</main>
              </div>
              <div className="col-span-12 lg:col-span-3">
                <Slice alias="links" />
                <Slice alias="tools" />
                <Slice alias="recent-posts" allowEmpty />
              </div>
            </div>
        </Wrapper>
      </div>
    </MDXProvider>
  );
};

export default Layout;
