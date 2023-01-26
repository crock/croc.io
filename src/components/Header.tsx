import * as React from 'react';
import { Wrapper } from 'crockit-react/core/'
import SocialMenu from './SocialMenu';
import { Link } from 'gatsby';

const Header = () => {


    return (
        <>
            <header className="w-full h-20 bg-primary">
                <Wrapper className="mx-auto px-4 h-full max-w-5xl flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold text-gray-50 mb-1">
                            <Link to="/" className="mr-2">
                                <span role="img" aria-label="crocodile" className="text-2xl">🐊</span>
                            </Link>
                            Alex Crocker
                        </h1>
                        <small className="font-semibold text-gray-50 text-xs uppercase tracking-widest">Independent Software Developer</small>
                    </div>
                    <SocialMenu />
                </Wrapper>
            </header>
        </>
    )
}

export default Header