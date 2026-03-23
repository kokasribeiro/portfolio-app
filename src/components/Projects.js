import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
export const Projects = () => {

  const projects = [
    {
      title: "AI Document Workflow System",
      description: "Document workflow management. Status tracking, AI summarisation and categorisation. Vue, TypeScript.",
      imgUrl: projImg7,
      url: "https://github.com/kokasribeiro/ai-document-workflow",
      liveUrl: "https://ai-document-workflow-bice.vercel.app/",
    },
    {
      title: "gym-spot",
      description: "Full-stack gym tracking: authentication, check-ins, nearby search. Fastify, Prisma, PostgreSQL.",
      imgUrl: projImg3,
      url: "https://github.com/kokasribeiro/gymspot",
      liveUrl: "", // Add your deployment URL when live
    },
    {
      title: "dashboard-app",
      description: "Financial metrics. KPIs, revenue charts, transactions, geography. React.",
      imgUrl: projImg8,
      url: "https://github.com/kokasribeiro/dashboard-app",
      liveUrl: "https://dashboard-app-zeta-eight.vercel.app/",
    },
    {
      title: "transactions-api",
      description: "Income and expense tracking. Credit, debit, balance, history. Fastify, Knex, PostgreSQL, Zod.",
      imgUrl: projImg5,
      url: "https://github.com/kokasribeiro/transactions-api",
      liveUrl: "", // Add URL if you have a frontend for this API
    },
    {
      title: "investment memo analyzer",
      description: "Structured memo analysis: summary, thesis, risks, validation points. AI-driven. React, Vite, Tailwind.",
      hoverText: "Analyst tool for investment memos. Structured extraction of executive summary, thesis, key risks and validation points. Ollama integration. React 19, Vite 7, Tailwind CSS, Framer Motion.",
      imgUrl: projImg6,
      url: "https://github.com/kokasribeiro/investment-memo-analyzer",
      liveUrl: "", // Add your deployment URL when live
    },
    {
      title: "weather-app",
      description: "Current conditions by location. Dynamic visual feedback. React, Vite, OpenWeatherMap API.",
      imgUrl: projImg4,
      url: "https://github.com/kokasribeiro/react-weather-app",
      liveUrl: "", // Add your Vercel/Netlify URL when deployed
    },
    {
      title: "flipping card",
      description: "Scroll-driven reveal animation. GSAP ScrollTrigger.",
      imgUrl: projImg1,
      url: "https://github.com/kokasribeiro/split-card-scroll-animation",
      liveUrl: "", // Add your Vercel/Netlify URL when deployed
    },
    {
      title: "calculator react",
      description: "Arithmetic operations. Decimal support, real-time preview. React, Vite.",
      imgUrl: projImg2,
      url: "https://github.com/kokasribeiro/react-calculator",
      liveUrl: "", // Add your Vercel/Netlify URL when deployed
    },
  ];

  return (
    <section className="project" id="projects">
      <Container className="card-section-container">
        <Row>
          <Col xs={12}>
            <div className="project-card">
                <h2 className="section-title">Projects</h2>
                <p>Selected projects. Web applications and full-stack solutions.</p>
                <Row>
                  {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
                </Row>
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  )
}
