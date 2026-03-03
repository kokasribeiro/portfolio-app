import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg8 from "../assets/img/project-img8.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
export const Projects = () => {

  const projects = [
    {
      title: "gym-spot",
      description: "Full-stack gym app with user auth, check-ins, and nearby gym search. Built with Fastify, Prisma, PostgreSQL, JWT, and TypeScript. Dashboard tracks check-ins, saved gyms, and day streaks.",
      imgUrl: projImg3,
      url: "https://github.com/kokasribeiro/gymspot",
      liveUrl: "", // Add your deployment URL when live
    },
    {
      title: "dashboard-app",
      description: "Financial dashboard with KPIs, revenue charts, recent transactions, and geography-based traffic. Built with React and Create React App.",
      imgUrl: projImg8,
      url: "https://github.com/kokasribeiro/dashboard-app",
      liveUrl: "https://dashboard-app-zeta-eight.vercel.app/",
    },
    {
      title: "transactions-api",
      description: "Transaction manager to track income and expenses. Add credit/debit transactions, view balance and history. Built with Fastify, Knex, PostgreSQL, TypeScript, and Zod for validation.",
      imgUrl: projImg5,
      url: "https://github.com/kokasribeiro/transactions-api",
      liveUrl: "", // Add URL if you have a frontend for this API
    },
    {
      title: "investment memo analyzer",
      description: "AI-powered tool to analyze investment memos. Extracts executive summary, thesis, key risks, and points to validate. Dark theme dashboard with score visualization.",
      hoverText: "AI-powered tool for investment analysts. Paste a memo and get structured insights: executive summary, thesis, key risks, and points to validate. I integrated Ollama (local LLM) for AI-driven analysis. Built with React 19, Vite 7, Tailwind CSS, and Framer Motion.",
      imgUrl: projImg6,
      url: "https://github.com/kokasribeiro/investment-memo-analyzer",
      liveUrl: "", // Add your deployment URL when live
    },
    {
      title: "weather-app",
      description: "Weather app built with React 19, Vite, and OpenWeatherMap API. Dynamic background changes with conditions—rain, snow, or sunny. Uses Axios and Tailwind CSS.",
      imgUrl: projImg4,
      url: "https://github.com/kokasribeiro/react-weather-app",
      liveUrl: "", // Add your Vercel/Netlify URL when deployed
    },
    {
      title: "flipping card",
      description: "Scroll-driven animation with GSAP ScrollTrigger. Three cards flip to reveal content as you scroll—'One vision, three dimensions'.",
      imgUrl: projImg1,
      url: "https://github.com/kokasribeiro/split-card-scroll-animation",
      liveUrl: "", // Add your Vercel/Netlify URL when deployed
    },
    {
      title: "calculator react",
      description: "Clean calculator built with React 19 and Vite 7. Supports basic arithmetic, decimal numbers, real-time result preview, and input validation. Fully responsive with a modern UI.",
      imgUrl: projImg2,
      url: "https://github.com/kokasribeiro/react-calculator",
      liveUrl: "", // Add your Vercel/Netlify URL when deployed
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="project-card">
                <h2>Projects</h2>
                <p>Here are some of my recent projects. Each one represents a unique challenge and an opportunity to create something meaningful—from web applications to full-stack solutions. Take a look and see what I've been building.</p>
                <Row>
                  {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
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
