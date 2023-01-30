import * as React from 'react';

export interface LayoutProps {
	children: React.ReactNode
}

export interface ContainerProps {
	className?: string
	style?: React.CSSProperties
	children: React.ReactNode
}

export interface AnalyticsProps {
    eventName: string
    params: {
        [key: string]: any
        category: string
        action: string
        label?: string
        value?: any
    }
}

export interface PaginationProps {
    pagination: {
        currentPage: number
        numPages: number
        limit: number
        skip: number
        totalPosts: number
    },
    pathPrefix: string
}

export interface PostCardProps {
    title: string
    author: string
    date: string
    excerpt: string
    permalink: string
    category?: string
    tags?: string[]
}