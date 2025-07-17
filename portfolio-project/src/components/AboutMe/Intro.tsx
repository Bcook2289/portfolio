"use client";

type summaryProp = {
  pageFlag?: "brief" | "detailed";
};

const Intro = ({ pageFlag = "detailed" }: summaryProp) => {
  const detailed = (
    <>
      <p>
        I&apos;m a detail-oriented Solutions Consultant and Full-Stack Developer
        with a background in client operations, analytical problemsolving, and
        collaborative technical delivery. With over 5 years of experience
        supporting SaaS platforms in the energy industry, both in Japan and the
        US, and recent hands-on development work using tools like React,
        Next.js, TypeScript, Tailwind CSS, and Python/Django, I can bridge the
        gap between customer needs and technical implementation. My strengths
        include stakeholder communication, project management, frontend UI/UX
        design, and backend service integration. I have a strong understanding
        of Agile and Waterfall methodologies and have managed multiple projects
        and test plans.
      </p>
      <p>
        I&apos;m also passionate about building intuitive, scalable web
        applications. The site you&apos;re currently on was built by me utilizing
        TypeScript, Next.js and Tailwind! I combine my background in technical
        consulting and client support with a focus on modern full-stack
        development. I enjoy solving problems at the intersection of business
        and engineering.
      </p>
    </>
  );

  const brief = (
    <>
      <p className="font-sora">
        I&apos;m a Solutions Consultant and Full-Stack Developer with 5+ years of
        experience supporting SaaS platforms in the US and Japan. I specialize
        in bridging business needs and technical solutions through strong
        communication, project management, and hands-on development using React,
        Next.js, TypeScript, Tailwind CSS, and Python/Django. This site was
        built by me, and reflects my passion for building scalable,
        user-friendly web applications that combine client support experience
        with modern full-stack engineering.
      </p>
    </>
  );
  return pageFlag === "brief" ? brief : detailed;
};
export default Intro;
