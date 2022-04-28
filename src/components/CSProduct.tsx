import React, { ReactNode, CSSProperties } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

interface ICSProduct {
    id: number,
    slug: string,
    displayName: string,
    github?: string,
    url?: string,
    tags: string[],
}

interface ICSProductCard {
    product: ICSProduct,
    className?: string,
    style?: CSSProperties,
    children?: ReactNode
}

export default function CSProduct({ product, children, className, style }: ICSProductCard) {

    return (
        <details className={`w-full bg-white dark:bg-gray-800 p-4 shadow-md rounded-md ${className}`} style={style}>
            <summary>
                <div className="ml-4 inline-flex flex-row flex-nowrap justify-between items-center" style={{width: `calc(100% - 50px)`}}>
                    <strong>{product.displayName}</strong>
                    <span className="hidden lg:inline font-semibold uppercase text-gray-400 text-xs text-center">Tap To Expand</span>
                    <a href={product.github}>
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>
            </summary>
            <div className="flex flex-col justify-start items-center my-2">
                {children}
            </div>
        </details>
    )
}