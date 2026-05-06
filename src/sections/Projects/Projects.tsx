import { myProjects } from '../../constants'
import Project from './components/Project'

const Projects = () => {
  return (
    <section id="projects-section" className="relative c-space section-spacing scroll-mt-20">
      <h2 className="text-heading">My Projects</h2>
      <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-12 h-px w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  )
}
export default Projects
