import * as React from 'react';
import projects from '../../data/projects.json';
import { Link } from 'gatsby';
import YearsActive from './YearsActive';

const ProjectsList = () => {

    return (
        <div className="flex flex-col justify-start items-start">
            <h2 className="font-black text-4xl text-black dark:text-white mb-8">My Projects</h2>
            { projects.length && projects.map(proj => (
                <Link to={proj.postUrl} key={proj.id} className="w-full h-auto bg-white dark:bg-gray-800 p-2 rounded shadow flex flex-col justify-start items-start text-black dark:text-white hover:bg-primary-dark group mb-4">
                    <div className="flex flex-row flex-nowrap justify-between items-center w-full">
                        <h4 className="text-2xl font-semibold">{proj.name}</h4>
                        <YearsActive startDate={proj.startDate} endDate={proj.endDate} />
                    </div>
                    <p className="text-gray-500 group-hover:text-white">{proj.pitch}</p>
                    <div className="flex flex-row justify-start items-center mt-3">
                        { proj.tags.length && proj.tags.map(tag => (
                            <span key={tag} className="text-gray-400 group-hover:text-white text-sm p-1 mr-2">
                                <span className="text-lime-500 group-hover:text-lime-300">#</span> 
                                {' '}
                                {tag}
                            </span>
                        )) }
                    </div>
                </Link>
            )) }
        </div>
    )
}

export default ProjectsList